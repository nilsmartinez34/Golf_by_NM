package com.example.golf_by_nm

import androidx.compose.ui.geometry.Offset
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlin.math.*
import com.example.golf_by_nm.core.*

/**
 * Available background types for the golf range.
 */
enum class BackgroundType(val displayName: String, val resourceId: Int) {
    AIR("Air", R.drawable.bg_range_air),
    CASTELNAU("Castelnau", R.drawable.bg_range_castelnau),
    MOUNTAIN("Mountain", R.drawable.bg_range_mountain),
    SEA("Sea", R.drawable.bg_range_sea),
    URBAN("Urban", R.drawable.bg_range_urban)
}

enum class SwingMode {
    DEFAULT, // Original Swipe Gesture
    SCHOOL   // New Educational Mode (Pull & Slide)
}

data class PuttingState(
    val slopeX: Float = 0f, // Degrees (-5..5)
    val slopeY: Float = 0f, // Degrees (-10..10)
    val powerMeters: Float = 5f,
    val trajectory: List<Point3D> = emptyList(),
    val ghostTrajectory: List<Point3D> = emptyList(),
    val isRolling: Boolean = false,
    val totalDistance: Double = 0.0,
    val finalX: Double = 0.0,
    val finalY: Double = 0.0,
    val residualSpeed: Double = 0.0,
    
    // Aim Point Mode
    val isAimPointMode: Boolean = false,
    val holeDistance: Float = 5f,
    val playAsDistance: Double = 0.0,
    val entrySpeed: Double = 0.0,
    val entryStatus: String = "", // "IN", "TOO FAST", "TOO SHORT", "MISS"
    val recommendedAimX: Double = 0.0,
    val missDistance: Double = 0.0,
    val apexX: Double = 0.0,
    val apexY: Double = 0.0
)

/**
 * Represents the state of the golf game screen.
 */
data class GolfUiState(
    val selectedClub: Club,
    val clubFaceAngle: Float = 0f,
    val trajectoryResult: TrajectoryResult? = null,
    val isSwinging: Boolean = false,
    val isMetric: Boolean = true,
    val isMsSpeed: Boolean = false,
    // New Visual States
    val powerGaugeFill: Float = 0.0f,
    val backswingPathAngle: Float = 0.0f, // Lateral deviation for Fan Gauge cursor
    val attackAngle: Float = 0f, // Adjustable via Interactive Ball
    val sideDispersion: String = "--", // L/R formatting
    val swingPathPoints: List<Offset> = emptyList(),
    val currentBallPosition: Offset = Offset.Unspecified,
    val currentTouchPosition: Offset = Offset.Unspecified,
    val strikePosition: Offset = Offset(0.5f, 0.5f), // Normalized position on Interactive Ball (0..1)
    val swingFeedback: String = "",
    val impactHapticTrigger: Long = 0L, // Trigger for haptic feedback
    
    // Settings & Professional Metrics
    val tempoRatio: Double = 0.0,
    val speedFactor: Float = 1.0f,
    val angleLimit: Float = 10.0f,
    val isSettingsOpen: Boolean = false,
    val selectedBackground: BackgroundType = BackgroundType.MOUNTAIN,
    
    // School Mode V2 State
    val swingMode: SwingMode = SwingMode.DEFAULT,
    val schoolPower: Float = 0.0f, // 0.0 to 1.0 (Mapped to Min..Max Speed)
    val schoolPath: Float = 0.0f,  // -Max .. +Max degrees
    val schoolCurrentSpeed: Double = 0.0, // Live calculated speed for display
    val minSpeed: Double = 60.0,
    val maxSpeed: Double = 125.0,
    val maxPath: Double = 10.0,
    
    // Shot History State
    val shotHistory: List<ShotHistoryEntry> = emptyList(),
    val isHistoryOpen: Boolean = false,
    val historyFilter: HistoryFilter = HistoryFilter.ALL,
    val historySortBy: HistorySortBy = HistorySortBy.TIMESTAMP_DESC,
    
    // Putting Lab State
    val isPuttingLabOpen: Boolean = false,
    val puttingState: PuttingState = PuttingState(),
    val puttingHistory: List<PuttingHistoryEntry> = emptyList(),
    val isPuttingHistoryOpen: Boolean = false
)

/**
 * ViewModel to manage the state and logic for the GolfGameScreen.
 */
class GolfViewModel : ViewModel() {

    private val _uiState = MutableStateFlow(GolfUiState(selectedClub = availableClubs.first()))
    val uiState: StateFlow<GolfUiState> = _uiState.asStateFlow()

    companion object {
        val availableClubs = PhysicsEngine.GOLF_BAG.values.toList()
    }

    fun toggleDistanceUnit() {
        _uiState.update { it.copy(isMetric = !it.isMetric) }
    }

    fun toggleSpeedUnit() {
        _uiState.update { it.copy(isMsSpeed = !it.isMsSpeed) }
    }

    fun onClubSelected(club: Club) {
        _uiState.update { 
            val constraints = getSchoolConstraints(club.name)
            it.copy(
                selectedClub = club,
                minSpeed = constraints.minSpeed,
                maxSpeed = constraints.maxSpeed,
                maxPath = constraints.maxPath
            ) 
        }
    }

    fun onFaceAngleChanged(angle: Float) {
        _uiState.update { it.copy(clubFaceAngle = angle) }
    }

    fun updatePowerGauge(fill: Float) {
        _uiState.update { it.copy(powerGaugeFill = fill.coerceIn(0f, 1f)) }
    }

    fun updateBackswingPath(angle: Float) {
        val limit = _uiState.value.angleLimit
        _uiState.update { it.copy(backswingPathAngle = angle.coerceIn(-limit, limit)) }
    }

    fun updateStrikePosition(normalizedOffset: Offset) {
        val limit = _uiState.value.angleLimit
        val faceAngle = (normalizedOffset.x - 0.5f) * (limit * 2f) 
        // Logic: Bottom of ball (normY=1.0) -> Positive AoA (+6.0)
        //        Top of ball (normY=0.0)    -> Negative AoA (-6.0)
        val attack = (normalizedOffset.y - 0.5f) * 12f 
        _uiState.update { it.copy(
            strikePosition = normalizedOffset,
            clubFaceAngle = faceAngle,
            attackAngle = attack
        ) }
    }

    fun updateSpeedFactor(factor: Float) {
        _uiState.update { it.copy(speedFactor = factor) }
    }

    fun updateAngleLimit(limit: Float) {
        _uiState.update { it.copy(angleLimit = limit) }
    }

    fun toggleSettings() {
        _uiState.update { it.copy(isSettingsOpen = !it.isSettingsOpen) }
    }

    fun updateBackgroundType(backgroundType: BackgroundType) {
        _uiState.update { it.copy(selectedBackground = backgroundType) }
    }

    fun updateSwingPath(points: List<Offset>) {
        _uiState.update { it.copy(swingPathPoints = points) }
    }

    fun updateTouchPosition(offset: Offset) {
        _uiState.update { it.copy(currentTouchPosition = offset) }
    }

    fun setSwingFeedback(message: String) {
        _uiState.update { it.copy(swingFeedback = message) }
    }
    
    fun setBallPosition(position: Offset) {
        _uiState.update { it.copy(currentBallPosition = position) }
    }

    fun onSwingStart() {
        _uiState.update { it.copy(
            isSwinging = true, 
            powerGaugeFill = 0f, 
            backswingPathAngle = 0f,
            swingPathPoints = emptyList(),
            trajectoryResult = null,
            swingFeedback = "",
            currentBallPosition = Offset.Unspecified,
            currentTouchPosition = Offset.Unspecified
        ) }
    }

    fun onSwing(swipePath: List<Point>, swipeDurationMillis: Long, screenDensity: Float, backswingPath: Float, screenWidth: Float) {
        viewModelScope.launch {
            try {
                // Trigger Haptic Feedback on Impact
                _uiState.update { it.copy(impactHapticTrigger = System.currentTimeMillis()) }

                // 1. Path Attenuation Logic (Fairway Finish)
                val lastPoint = swipePath.lastOrNull()
                val fairwayWidth = screenWidth * 0.15f
                val fairwayStart = (screenWidth / 2f) - (fairwayWidth / 2f)
                val fairwayEnd = (screenWidth / 2f) + (fairwayWidth / 2f)
                
                val finalPath = if (lastPoint != null && lastPoint.x in fairwayStart..fairwayEnd) {
                    backswingPath.coerceIn(-2f, 2f)
                } else {
                    backswingPath
                }

                val inputData = SwingCaptureProcessor.processSwing(
                    swipePath, 
                    swipeDurationMillis, 
                    screenDensity, 
                    finalPath.toDouble(),
                    _uiState.value.speedFactor.toDouble()
                )
                
                if (!inputData.isValid) {
                     _uiState.update { it.copy(isSwinging = false, swingFeedback = inputData.failureReason ?: "Invalid Swing") } 
                     return@launch
                }

                // 2. 9-Laws Physics Simulation
                val baseClub = _uiState.value.selectedClub
                val clubWithFace = baseClub.copy(
                    faceAngle = _uiState.value.clubFaceAngle.toDouble()
                )
                
                // Use the unified professional PhysicsEngine
                val launchParams = PhysicsEngine.calculateLaunchParams(
                    inputData, 
                    clubWithFace, 
                    _uiState.value.attackAngle
                )
                val result = PhysicsEngine.simulateTrajectory(launchParams, inputData, clubWithFace)
                
                val distance = if (_uiState.value.isMetric) result.totalDistance else result.totalDistance * 1.09361
                val carry = if (_uiState.value.isMetric) result.carryDistance else result.carryDistance * 1.09361
                val unitLabel = if (_uiState.value.isMetric) "METERS" else "YARDS"
                
                // SIDE formatting (L/R)
                val absSide = kotlin.math.abs(result.lateralDeviation)
                val sideLabel = if (result.lateralDeviation < 0) "L" else "R"
                val sideTxt = "${sideLabel} ${String.format("%.1f", absSide)}${if (_uiState.value.isMetric) "m" else "y"}"

                // Record shot in history
                addShotToHistory(result, inputData)

                _uiState.update { it.copy(
                    trajectoryResult = result, 
                    isSwinging = false,
                    sideDispersion = sideTxt,
                    tempoRatio = inputData.tempoRatio,
                    swingFeedback = "SHOT: ${String.format("%.0f", carry)} / ${String.format("%.0f", distance)} $unitLabel"
                ) }
            } catch (e: Exception) {
                val msg = if (e is SwingCanceledException) e.message else "System Error"
                _uiState.update { it.copy(isSwinging = false, swingFeedback = msg ?: "Error") }
            }
        }
    }

    // --- School Mode V2 Logic ---

    data class SchoolConstraints(val minSpeed: Double, val maxSpeed: Double, val maxPath: Double)

    private fun getSchoolConstraints(clubName: String): SchoolConstraints {
        return when {
            clubName == "Dr" || clubName == "3W" || clubName == "5W" -> SchoolConstraints(60.0, 125.0, 10.0) // Driver/Woods
            clubName.endsWith("i") || clubName == "Hy" -> SchoolConstraints(50.0, 100.0, 8.0) // Irons
            else -> SchoolConstraints(30.0, 85.0, 6.0) // Wedges (PW, SW, LW, GW)
        }
    }

    fun toggleSwingMode() {
        _uiState.update { 
            val newMode = if (it.swingMode == SwingMode.DEFAULT) SwingMode.SCHOOL else SwingMode.DEFAULT
            it.copy(swingMode = newMode, isSwinging = false, schoolPower = 0f, schoolPath = 0f)
        }
    }
    
    // --- Putting Lab Logic ---
    
    fun togglePuttingLab() {
        _uiState.update { it.copy(isPuttingLabOpen = !it.isPuttingLabOpen) }
    }

    fun togglePuttingHistory() {
        _uiState.update { it.copy(isPuttingHistoryOpen = !it.isPuttingHistoryOpen) }
    }
    
    fun clearPuttingHistory() {
        _uiState.update { it.copy(puttingHistory = emptyList()) }
    }
    
    fun deletePuttingShotById(id: Long) {
        _uiState.update { it.copy(puttingHistory = it.puttingHistory.filter { shot -> shot.id != id }) }
    }
    
    fun updatePuttingPower(power: Float) {
        _uiState.update { it.copy(puttingState = it.puttingState.copy(powerMeters = power)) }
    }

    fun toggleAimPointMode() {
        _uiState.update { 
            val newState = it.puttingState.copy(isAimPointMode = !it.puttingState.isAimPointMode)
            it.copy(puttingState = newState)
        }
        if (_uiState.value.puttingState.isAimPointMode) {
            calculatePerfectPutt()
        }
    }

    fun updateHoleDistance(distance: Float) {
        _uiState.update { it.copy(puttingState = it.puttingState.copy(holeDistance = distance.coerceIn(1f, 20f))) }
        if (_uiState.value.puttingState.isAimPointMode) {
            calculatePerfectPutt()
        }
    }
    
    fun updatePuttingSlopes(slopeX: Float, slopeY: Float) {
        _uiState.update { it.copy(puttingState = it.puttingState.copy(
            slopeX = slopeX.coerceIn(-5f, 5f), 
            slopeY = slopeY.coerceIn(-10f, 10f)
        )) }
    }
    
    fun adjustSlopeX(delta: Float) {
        _uiState.update { it.copy(puttingState = it.puttingState.copy(
            slopeX = (it.puttingState.slopeX + delta).coerceIn(-5f, 5f)
        )) }
        if (_uiState.value.puttingState.isAimPointMode) calculatePerfectPutt()
    }
    
    fun adjustSlopeY(delta: Float) {
        _uiState.update { it.copy(puttingState = it.puttingState.copy(
            slopeY = (it.puttingState.slopeY + delta).coerceIn(-10f, 10f)
        )) }
        if (_uiState.value.puttingState.isAimPointMode) calculatePerfectPutt()
    }
    
    fun resetPutting() {
        _uiState.update { it.copy(puttingState = it.puttingState.copy(
            trajectory = emptyList(),
            isRolling = false
        )) }
    }
    
    fun calculatePerfectPutt() {
        val currentState = _uiState.value.puttingState
        val targetY = currentState.holeDistance.toDouble()
        val slopeX = currentState.slopeX.toDouble()
        val slopeY = currentState.slopeY.toDouble()
        
        viewModelScope.launch {
            var bestAim = 0.0
            var bestPower = targetY
            
            // Iterative solver to find the perfect line and power
            // 1. Initial guess for power (adjust for Y slope)
            if (slopeY > 0) bestPower = targetY * (1.0 + slopeY * 0.15)
            else if (slopeY < 0) bestPower = targetY * (1.0 + slopeY * 0.1)
            
            // 2. Converge on Aim
            repeat(5) { // 5 iterations is usually enough for cm precision
                val res = PuttingPhysicsEngine.simulate(bestPower, slopeX, slopeY, bestAim)
                val deviation = res.finalX // Error at stop
                // Correction: if it missed 40cm Right (pos), aim more Left (neg)
                bestAim -= Math.toDegrees(atan2(deviation, targetY)) * 0.8
            }
            
            // 3. Converge on Power (to stop at targetY)
            repeat(3) {
                val res = PuttingPhysicsEngine.simulate(bestPower, slopeX, slopeY, bestAim)
                val errorY = res.finalY - targetY
                bestPower -= errorY * 0.7
            }
            
            // Final simulation with best values
            val finalRes = PuttingPhysicsEngine.simulate(bestPower, slopeX, slopeY, bestAim)
            
            // Calculate Apex (Point of maximum lateral deviation relative to the start-hole line)
            var apexX = 0.0
            var apexY = 0.0
            var maxBreak = 0.0
            finalRes.path.forEach { p ->
                if (abs(p.x) > maxBreak) {
                    maxBreak = abs(p.x)
                    apexX = p.x
                    apexY = p.y
                }
            }

            _uiState.update { it.copy(puttingState = it.puttingState.copy(
                trajectory = finalRes.path,
                recommendedAimX = bestPower * sin(Math.toRadians(bestAim)),
                playAsDistance = bestPower,
                apexX = apexX,
                apexY = apexY,
                finalX = finalRes.finalX, // Should be close to 0
                finalY = finalRes.finalY, // Should be close to targetY
                totalDistance = finalRes.totalDistance
            )) }
        }
    }

    fun runPuttingSimulation() {
        val currentState = _uiState.value.puttingState
        viewModelScope.launch {
            _uiState.update { it.copy(puttingState = it.puttingState.copy(
                isRolling = true,
                ghostTrajectory = if (currentState.trajectory.isNotEmpty()) currentState.trajectory else currentState.ghostTrajectory
            )) }
            
            val result = PuttingPhysicsEngine.simulate(
                targetDistance = currentState.powerMeters.toDouble(),
                slopeXDeg = currentState.slopeX.toDouble(),
                slopeYDeg = currentState.slopeY.toDouble()
            )
            
            // --- AIM POINT ANALYSIS ---
            var entrySpeed = 0.0
            var entryStatus = ""
            val holeY = currentState.holeDistance.toDouble()
            
            // 1. Calculate Entry Speed at crossing Y=holeDistance
            for (i in 0 until result.path.size - 1) {
                val p1 = result.path[i]
                val p2 = result.path[i+1]
                if ((p1.y <= holeY && p2.y >= holeY) || (p1.y >= holeY && p2.y <= holeY)) {
                    val dist = kotlin.math.sqrt((p2.x - p1.x).pow(2.0) + (p2.y - p1.y).pow(2.0))
                    entrySpeed = dist / 0.01 // v = d/dt (DT=0.01 in engine)
                    break
                }
            }
            
            // 2. Determine Hole Status
            val missDistance = kotlin.math.sqrt(result.finalX.pow(2.0) + (result.finalY - holeY).pow(2.0))
            val isHoleHit = missDistance < 0.054 // 10.8cm diameter / 2 = radius
            
            entryStatus = when {
                !isHoleHit && result.finalY < holeY -> "TOO SHORT"
                !isHoleHit -> "MISS"
                entrySpeed > 1.3 -> "LIP OUT (FAST)"
                entrySpeed < 0.2 -> "IN (PERFECT)"
                else -> "IN"
            }
            
            // 3. Play-As Distance (If I stop at 4.2m with 5m power, 5m target plays like 5*(5/4.2))
            val playAs = if (result.finalY > 0.1) currentState.holeDistance * (currentState.powerMeters / result.finalY) else 0.0
            
            _uiState.update { it.copy(puttingState = it.puttingState.copy(
                trajectory = result.path,
                totalDistance = result.totalDistance,
                finalX = result.finalX,
                finalY = result.finalY,
                residualSpeed = result.residualSpeed,
                isRolling = false,
                // Analysis results
                entrySpeed = entrySpeed,
                entryStatus = entryStatus,
                playAsDistance = playAs.toDouble(),
                recommendedAimX = -result.finalX,
                missDistance = missDistance
            )) }
            
            // Add to history
            val newEntry = PuttingHistoryEntry(
                id = System.currentTimeMillis(),
                timestamp = System.currentTimeMillis(),
                powerMeters = currentState.powerMeters.toDouble(),
                slopeXDeg = currentState.slopeX.toDouble(),
                slopeYDeg = currentState.slopeY.toDouble(),
                totalDistance = result.totalDistance,
                finalX = result.finalX,
                finalY = result.finalY,
                residualSpeed = result.residualSpeed,
                holeDistance = currentState.holeDistance.toDouble(),
                playAsDistance = playAs.toDouble(),
                entrySpeed = entrySpeed,
                entryStatus = entryStatus
            )
            _uiState.update { it.copy(puttingHistory = it.puttingHistory + newEntry) }
        }
    }
    
    // --- Shot History Management ---
    
    fun toggleHistory() {
        _uiState.update { it.copy(isHistoryOpen = !it.isHistoryOpen) }
    }
    
    fun updateHistoryFilter(filter: HistoryFilter) {
        _uiState.update { it.copy(historyFilter = filter) }
    }
    
    fun updateHistorySortBy(sortBy: HistorySortBy) {
        _uiState.update { it.copy(historySortBy = sortBy) }
    }
    
    fun clearHistory() {
        _uiState.update { it.copy(shotHistory = emptyList()) }
    }
    
    fun deleteShotById(id: Long) {
        _uiState.update { it.copy(shotHistory = it.shotHistory.filter { shot -> shot.id != id }) }
    }
    
    private fun addShotToHistory(result: TrajectoryResult, inputData: SwingInputData) {
        val state = _uiState.value
        val clubType = when {
            state.selectedClub.name == "Dr" -> "Driver"
            state.selectedClub.name.endsWith("W") -> "Woods"
            state.selectedClub.name.endsWith("i") || state.selectedClub.name == "Hy" -> "Irons"
            else -> "Wedges"
        }
        
        val entry = ShotHistoryEntry(
            id = System.currentTimeMillis(),
            timestamp = System.currentTimeMillis(),
            clubName = state.selectedClub.name,
            clubType = clubType,
            swingMode = if (state.swingMode == SwingMode.SCHOOL) "SCHOOL" else "PRO",
            clubSpeedMph = result.clubHeadSpeedMph,
            ballSpeedMph = result.ballSpeedMph,
            smashFactor = result.smashFactor,
            swingPath = result.swingPath,
            clubFaceAngle = state.clubFaceAngle.toDouble(),
            attackAngle = state.attackAngle.toDouble(),
            carryDistance = result.carryDistance,
            totalDistance = result.totalDistance,
            lateralDeviation = result.lateralDeviation,
            maxHeight = result.maxHeight,
            flightTime = result.flightTimeSeconds,
            backspinRpm = result.spinRpm,
            sidespinRpm = result.sideSpinRpm,
            launchAngle = result.launchAngle,
            launchDirection = result.swingPath // Using swingPath as a proxy for launch direction
        )
        
        _uiState.update { it.copy(shotHistory = it.shotHistory + entry) }
    }

    fun updateSchoolModeInput(dragY: Float, dragX: Float, screenHeight: Float, screenWidth: Float) {
        // 1. Calculate Power (Vertical Drag Down)
        // Normalize dragY: 0 at start, increasing as we pull down. 
        // Let's say max power is at 1/3 of screen height.
        val maxDragY = screenHeight * 0.28f
        val power = (dragY / maxDragY).coerceIn(0.0f, 1.0f)

        // 2. Calculate Path (Horizontal Drag)
        // Center is 0, Left is negative, Right is positive
        // Sensitive range: +/- 100px = Max Angle
        val maxDragX = 150f 
        val pathRatio = (dragX / maxDragX).coerceIn(-1.0f, 1.0f)
        // Inverted: Drag Left (Neg) -> Positive Path (In-to-Out/Right)
        val currentMaxPath = _uiState.value.maxPath.toFloat()
        val path = -(pathRatio * currentMaxPath)

        // 3. Calculate Live Speed
        val range = _uiState.value.maxSpeed - _uiState.value.minSpeed
        val liveSpeed = _uiState.value.minSpeed + (range * power)

        _uiState.update { it.copy(
            isSwinging = true,
            schoolPower = power,
            schoolPath = path,
            schoolCurrentSpeed = liveSpeed,
            // Also update visuals for feedback
            powerGaugeFill = power,
            backswingPathAngle = path
        ) }
    }

    fun executeSchoolSwing() {
        val state = _uiState.value
        
        // Calculate final speed based on power gauge and constraints
        val range = state.maxSpeed - state.minSpeed
        val clubSpeed = state.minSpeed + (range * state.schoolPower)
        
        // Input Data
        val inputData = SwingInputData(
            isValid = true,
            clubSpeedMph = clubSpeed,
            powerFactor = 1.0, // Already incorporated in clubSpeed
            pathDeviationDeg = state.schoolPath.toDouble(),
            efficiency = 1.0, // Perfect strike in this mode? Or maybe randomized slightly? Let's assume perfect for teaching.
            tempoRatio = 3.0 // Ideal tempo
        )
        
        processSimulation(inputData)
    }

    private fun processSimulation(inputData: SwingInputData) {
        viewModelScope.launch {
            try {
                _uiState.update { it.copy(impactHapticTrigger = System.currentTimeMillis()) }

                val baseClub = _uiState.value.selectedClub
                val clubWithFace = baseClub.copy(faceAngle = _uiState.value.clubFaceAngle.toDouble())
                
                val launchParams = PhysicsEngine.calculateLaunchParams(
                    inputData, 
                    clubWithFace, 
                    _uiState.value.attackAngle
                )
                val result = PhysicsEngine.simulateTrajectory(launchParams, inputData, clubWithFace)
                
                val distance = if (_uiState.value.isMetric) result.totalDistance else result.totalDistance * 1.09361
                val carry = if (_uiState.value.isMetric) result.carryDistance else result.carryDistance * 1.09361
                val unitLabel = if (_uiState.value.isMetric) "METERS" else "YARDS"
                val absSide = kotlin.math.abs(result.lateralDeviation)
                val sideLabel = if (result.lateralDeviation < 0) "L" else "R"
                val sideTxt = "${sideLabel} ${String.format("%.1f", absSide)}${if (_uiState.value.isMetric) "m" else "y"}"

                // Record shot in history
                addShotToHistory(result, inputData)

                _uiState.update { it.copy(
                    trajectoryResult = result, 
                    isSwinging = false,
                    sideDispersion = sideTxt,
                    powerGaugeFill = 0f, // Reset after shot
                    swingFeedback = "SHOT: ${String.format("%.0f", carry)} / ${String.format("%.0f", distance)} $unitLabel"
                ) }
            } catch (e: Exception) {
               _uiState.update { it.copy(isSwinging = false, swingFeedback = "Error") }
            }
        }
    }
}