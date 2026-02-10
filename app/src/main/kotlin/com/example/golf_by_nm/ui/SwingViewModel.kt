package com.example.golf_by_nm.ui

import androidx.compose.ui.geometry.Offset
import androidx.lifecycle.ViewModel
import com.example.golf_by_nm.swing.SwingAnalyzer
import com.example.swingmaster.physics.SwingImpact
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update

enum class SwingPhase {
    IDLE,
    READY,
    BACKSWING,
    DOWNSWING,
    IN_FLIGHT
}

data class ClubSpec(
    val name: String,
    val loftDeg: Double,
    val lengthScale: Double, // 1.0 for Driver, <1.0 for Irons
    val speedFactor: Double // Multiplier for potential speed
)

val AVAILABLE_CLUBS = listOf(
    ClubSpec("Driver", 10.5, 1.0, 1.0),
    ClubSpec("3 Wood", 15.0, 0.95, 0.96),
    ClubSpec("5 Iron", 27.0, 0.85, 0.88),
    ClubSpec("9 Iron", 42.0, 0.75, 0.82),
    ClubSpec("Putter", 3.0, 0.6, 0.15)
)

data class SwingState(
    val swingImpact: SwingImpact? = null,
    val swingPhase: SwingPhase = SwingPhase.READY,
    val touchPath: List<Offset> = emptyList(),
    // Settings
    val selectedClub: ClubSpec = AVAILABLE_CLUBS.first(),
    val faceAngleAdjustment: Double = 0.0 // Degrees open/closed
)

class SwingViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(SwingState())
    val uiState: StateFlow<SwingState> = _uiState.asStateFlow()

    private val swingAnalyzer = SwingAnalyzer()
    private var swingStartTime = 0L
    private var downswingStartIndex = -1

    fun onSwingStart(startPoint: Offset) {
        swingStartTime = System.currentTimeMillis()
        downswingStartIndex = -1
        android.util.Log.d("SwingMaster", "onSwingStart: $startPoint")
        _uiState.update { 
            it.copy(
                swingPhase = SwingPhase.READY,
                touchPath = listOf(startPoint),
                swingImpact = null // Reset previous shot
            ) 
        }
    }

    fun onSwingUpdate(point: Offset) {
        _uiState.update { currentState ->
            val path = currentState.touchPath + point
            var phase = currentState.swingPhase
            
            if (path.size > 2) {
                val last = path.last()
                val prev = path[path.lastIndex - 1]
                val dy = last.y - prev.y
                
                // Backswing: Moving DOWN (dy > 0)
                if (dy > 1.0 && phase == SwingPhase.READY) {
                    phase = SwingPhase.BACKSWING
                    android.util.Log.d("SwingMaster", "Phase -> BACKSWING")
                }
                
                // Downswing: Moving UP (dy < 0) significantly
                if (dy < -2.0 && phase == SwingPhase.BACKSWING) {
                    phase = SwingPhase.DOWNSWING
                    if (downswingStartIndex == -1) {
                         downswingStartIndex = path.lastIndex
                         android.util.Log.d("SwingMaster", "Phase -> DOWNSWING (Idx: $downswingStartIndex)")
                    }
                }
            }
            
            currentState.copy(touchPath = path, swingPhase = phase)
        }
    }

    fun onSwingEnd() {
        val currentState = _uiState.value
        android.util.Log.d("SwingMaster", "onSwingEnd: Phase=${currentState.swingPhase}, PathSize=${currentState.touchPath.size}")
        
        // Robustness: If we are in DOWNSWING (or even BACKSWING/READY if the user is fast), 
        // try to find the inflection point (Lowest Y / Max Y value)
        var actualDownswingIndex = downswingStartIndex
        
        if (actualDownswingIndex == -1 && currentState.touchPath.isNotEmpty()) {
            // Find the point with the highest Y value (lowest on screen)
            // This is the bottom of the swing arc.
            val maxY = currentState.touchPath.maxOf { it.y }
            actualDownswingIndex = currentState.touchPath.indexOfFirst { it.y == maxY }
            android.util.Log.d("SwingMaster", "Recovered Downswing Index: $actualDownswingIndex")
        }

        // If we still can't find a valid downswing, or it's too late in the path
        if (actualDownswingIndex == -1 || actualDownswingIndex >= currentState.touchPath.size - 2) {
             android.util.Log.d("SwingMaster", "Swing Failed: No valid downswing found.")
             _uiState.update { it.copy(swingPhase = SwingPhase.IDLE, touchPath = emptyList()) }
             return
        }

        val duration = System.currentTimeMillis() - swingStartTime
        // Use only the downswing portion for analysis
        val downswingPath = currentState.touchPath.drop(actualDownswingIndex)
        
        android.util.Log.d("SwingMaster", "Processing Downswing: Size=${downswingPath.size}, Duration=${duration}ms")

        if (downswingPath.size < 3) {
             android.util.Log.d("SwingMaster", "Swing Failed: Path too short (<3 points).")
             _uiState.update { it.copy(swingPhase = SwingPhase.IDLE, touchPath = emptyList()) }
             return
        }

        val result = swingAnalyzer.analyze(downswingPath, duration, currentState.selectedClub)
        
        // Validation: "Cancel Bad Swings"
        // 1. Check Duration (Too slow = likely not a swing)
        if (duration > 1500) {
            android.util.Log.d("SwingMaster", "Swing Rejected: Too slow (${duration}ms)")
            _uiState.update { it.copy(swingPhase = SwingPhase.IDLE, touchPath = emptyList()) }
            return
        }
        
        // 2. Check Velocity / Carry (Garbage data)
        // If ball speed is trivial, ignore.
        if (result.ballSpeedMps < 2.0) {
            android.util.Log.d("SwingMaster", "Swing Rejected: Too weak (${result.ballSpeedMps} mps)")
             _uiState.update { it.copy(swingPhase = SwingPhase.IDLE, touchPath = emptyList()) }
             return
        }

        _uiState.update { 
            it.copy(
                swingPhase = SwingPhase.IN_FLIGHT,
                swingImpact = result
            ) 
        }
        android.util.Log.d("SwingMaster", "onSwingEnd: State Updated.")
    }


    fun updateClub(clubName: String) {
        val club = AVAILABLE_CLUBS.find { it.name == clubName } ?: AVAILABLE_CLUBS.first()
        _uiState.update { it.copy(selectedClub = club) }
    }

    fun updateFaceAngle(angle: Double) {
        _uiState.update { it.copy(faceAngleAdjustment = angle) }
    }
}
