package com.example.golf_by_nm.swing

import androidx.compose.ui.geometry.Offset
import com.example.swingmaster.physics.Ballistics
import com.example.swingmaster.physics.SwingImpact
import kotlin.math.atan2
import kotlin.math.pow
import kotlin.math.sqrt

import com.example.golf_by_nm.ui.ClubSpec

class SwingAnalyzer {

    /**
     * Analyzes the swing path from touch points.
     * 
     * @param points List of touch coordinates. Origin (0,0) is top-left.
     * @param durationMm Duration of the swing in milliseconds.
     * @param clubSpec The selected club specifications.
     * @param simulationWidthPixels Width of the swing area to normalize speed.
     * @return SwingImpact data.
     */
    fun analyze(points: List<Offset>, durationMm: Long, clubSpec: ClubSpec, simulationWidthPixels: Float = 1000f): SwingImpact {
        if (points.size < 2) {
            // println("SwingMaster: Analyzer: Not enough points (${points.size})")
            return emptyImpact()
        }

        // 1. Calculate Velocity
        // Sum of distances between points
        var totalDistancePx = 0.0
        for (i in 0 until points.size - 1) {
            val p1 = points[i]
            val p2 = points[i+1]
            totalDistancePx += sqrt((p2.x - p1.x).toDouble().pow(2) + (p2.y - p1.y).toDouble().pow(2))
        }

        // Convert pixels to meters (Heuristic: Screen width ~ 1 meter swing arc?)
        // Let's assume the swipe represents a 1.5m swing path arc.
        // Convert pixels to meters with realistic scaling
        // Target: Fast swipe (e.g. 5000 px/s) = 50 m/s (112 mph)
        // Ratio = 50 / 5000 = 0.010
        val metersPerPixel = 0.010
        val distanceMeters = totalDistancePx * metersPerPixel
        val velocityMps = (distanceMeters / (durationMm / 1000.0)) * clubSpec.speedFactor
        
        // Boost factor: Users struggle to swipe incredibly fast on phones
        // Let's add a small "gameplay feel" multiplier
        val gameplayMultiplier = 1.2
        val finalVelocityMps = velocityMps * gameplayMultiplier

        // println("SwingMaster: Analyzer: Dist=${"%.2f".format(distanceMeters)}m, Dur=${durationMm}ms ...")

        // 2. Calculate Club Path Angle
        // We care about the direction at impact (last few points).
        // Regression or simple vector of last segment.
        // Assuming Up (negative Y) is straight to target (0 degrees).
        // Canvas coordinates: X right, Y down.
        // Vector pointing Up: (0, -1).
        
        val impactWindow = 5.coerceAtMost(points.size - 1)
        val pStart = points[points.size - 1 - impactWindow]
        val pEnd = points.last()
        
        val dx = (pEnd.x - pStart.x).toDouble()
        val dy = (pEnd.y - pStart.y).toDouble()
        
        // Angle in radians relative to X axis (Standard math)
        // atan2(dy, dx). 
        // If swinging straight up: dx=0, dy=-1 -> -PI/2 (-90 deg)
        // We want 0 deg to be straight up.
        // Right is +90, Left is -90.
        
        val angleRad = atan2(dy, dx)
        val angleDeg = Math.toDegrees(angleRad)
        
        // Convert to Golf Coordinates:
        // -90 (Up) -> 0
        // -45 (Up-Right) -> +45 (In-to-Out for Righty?) 
        // Wait, "In-to-Out" for Righty means pushing ball right. So Positive angle.
        // -90 is Target. 
        // Path Angle = angleDeg + 90
        
        val clubPathDeg = angleDeg + 90
        
        // Clamp velocity to realistic values (e.g. max 60 m/s ~ 135 mph)
        val clampedVelocity = finalVelocityMps.coerceIn(2.0, 65.0)

        // Constraints from Club Spec
        val clubLoft = clubSpec.loftDeg
        val faceAngle = 0.0 // Square (User manual adjustment handled in VM if needed, or pass here?)
        // VM applies manual adjustment separately? The VM code said:
        // "// Apply manual Face Angle adjustment if any... Ideally we pass parameters to SwingAnalyzer."
        // Let's assume VM adds the manual adjustment to the result? Or we pass it. 
        // Logic currently: VM calls analyze, gets result, then overwrites or modifiers?
        // VM code: val result = swingAnalyzer.analyze(...) ... _uiState.update { ... swingImpact = result }
        // It didn't modify it. Let's stick to this for now, but use Club Loft.
        
        val attackAngle = if(clubSpec.name == "Driver") 2.0 else -3.0 // Hit up on Driver, down on Irons

        val result = Ballistics.calculateShot(
            clubHeadSpeedMps = clampedVelocity,
            clubLoftDeg = clubLoft,
            attackAngleDeg = attackAngle,
            clubPathDeg = clubPathDeg,
            faceAngleDeg = faceAngle
        )
        
        // println("SwingMaster: Analyzer Result: Carry=${result.carryDistanceMeters}m")
        return result
    }
    
    private fun emptyImpact(): SwingImpact {
        return SwingImpact(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)
    }
}
