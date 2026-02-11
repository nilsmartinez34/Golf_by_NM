package com.example.golf_by_nm.core

import com.example.golf_by_nm.core.Point
import com.example.golf_by_nm.core.SwingInputData
import kotlin.math.*

class SwingCanceledException(message: String) : Exception(message)

/**
 * Process raw touch points to extract golf swing metrics.
 * Implements calibration from pixels/ms to real-world club speeds.
 */
object SwingCaptureProcessor {

    private const val TAG = "SwingCapture"
    private const val MIN_SWING_AMPLITUDE = 80f 
    private const val MIN_DURATION_MS = 150L
    
    // CALIBRATION CONSTANTS
    private const val MAX_SWIPE_PX_MS = 12.0 // Map this to 120 mph
    private const val MPH_PER_PX_MS = 10.0 // 120 / 12 = 10
    private const val MIN_VELOCITY_THRESHOLD = 2.0 // Below this, swing is canceled

    fun processSwing(
        points: List<Point>,
        totalDurationMs: Long,
        screenDensity: Float,
        explicitPathDeg: Double = 0.0,
        speedFactor: Double = 1.0
    ): SwingInputData {
        if (points.size < 5 || totalDurationMs < MIN_DURATION_MS) {
            return SwingInputData(isValid = false, failureReason = "Gesture too short")
        }

        // 1. Find the Inflection Point (Max Y / Lowest point)
        var maxY = -Float.MAX_VALUE
        var inflectionIndex = -1
        points.forEachIndexed { index, point ->
            if (point.y > maxY) {
                maxY = point.y
                inflectionIndex = index
            }
        }

        if (inflectionIndex < 2 || inflectionIndex > points.size - 3) {
             return SwingInputData(isValid = false, failureReason = "Bad swing shape")
        }

        // 2. BACKSWING DEPTH (Power weight)
        val startPoint = points.first()
        val inflectionPoint = points[inflectionIndex]
        val endPoint = points.last()
        
        val backswingAmplitude = inflectionPoint.y - startPoint.y
        val backswingGaugeFill = (backswingAmplitude / (350f * screenDensity)).toDouble().coerceIn(0.1, 1.0)

        // 3. DOWNSWING VELOCITY
        val downswingPoints = points.subList(inflectionIndex, points.size)
        val downswingDuration = totalDurationMs * (downswingPoints.size.toDouble() / points.size)
        
        val dx = (endPoint.x - inflectionPoint.x).toDouble()
        val dy = (endPoint.y - inflectionPoint.y).toDouble()
        val totalDistance = kotlin.math.sqrt(dx*dx + dy*dy)
        
        val speedPxMs = if (downswingDuration > 0) totalDistance / downswingDuration else 0.0
        
        if (speedPxMs < 1.0) throw SwingCanceledException("Swing too slow")

        // 4. POWER MAPPING (Incorporating Speed Factor)
        val baseSpeed = (speedPxMs * 12.0 * backswingGaugeFill)
        val clubSpeedMph = (baseSpeed * speedFactor).coerceIn(10.0, 160.0) // Relaxed limit for speed factor
        
        // 5. TEMPO (Ratio of Backswing to Downswing)
        val backswingPointsCount = inflectionIndex.toDouble()
        val downswingPointsCount = (points.size - inflectionIndex).toDouble()
        val tempo = if (downswingPointsCount > 0) backswingPointsCount / downswingPointsCount else 0.0

        // 6. PATH (Calculated from Downswing direction: Bottom-Left to Top-Right = Positive)
        val dDownX = (endPoint.x - inflectionPoint.x).toDouble()
        val dDownY = (inflectionPoint.y - endPoint.y).toDouble() // Y is inverted on screen
        val pathAngle = atan2(dDownX, dDownY) * 180.0 / PI

        return SwingInputData(
            isValid = true,
            clubSpeedMph = clubSpeedMph,
            efficiency = 1.0,
            attackAngleDeg = -2.0,
            pathDeviationDeg = pathAngle.coerceIn(-45.0, 45.0),
            powerFactor = 1.0,
            tempoRatio = tempo
        )
    }
}
