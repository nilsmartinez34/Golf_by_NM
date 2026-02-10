package com.example.golf_by_nm

import kotlin.math.*

data class PuttingResult(
    val path: List<Point3D>,
    val totalDistance: Double,
    val finalX: Double,
    val finalY: Double,
    val residualSpeed: Double
)

object PuttingPhysicsEngine {
    private const val GRAVITY = 9.81
    private const val MU_STIMP_10 = 0.131 // Standard friction for Stimp 10
    private const val DT = 0.01 // Time step
    private const val STOP_THRESHOLD = 0.01 // m/s

    fun simulate(
        targetDistance: Double,
        slopeXDeg: Double,
        slopeYDeg: Double,
        aimAngleDeg: Double = 0.0
    ): PuttingResult {
        val path = mutableListOf<Point3D>()
        
        // Convert slopes and aim to angles
        val thetaX = Math.toRadians(slopeXDeg)
        val thetaY = Math.toRadians(slopeYDeg)
        val phiAim = Math.toRadians(aimAngleDeg)
        
        // Initial Velocity (v0 for targetDistance on flat ground)
        // Magnitude based on targetDistance
        val v0 = sqrt(2 * MU_STIMP_10 * GRAVITY * targetDistance)
        var vx = v0 * sin(phiAim)
        var vy = v0 * cos(phiAim)
        
        var x = 0.0
        var y = 0.0
        var t = 0.0
        
        // Slope accelerations
        val ax_slope = GRAVITY * sin(thetaX)
        val ay_slope = -GRAVITY * sin(thetaY) // Negative because Y+ is "forward/up" on screen, and +slopeY% is "uphill" (downward force)
        
        var totalDistTraveled = 0.0
        
        // Integration loop
        while (t < 10.0) { // Max 10 seconds safety
            val prevX = x
            val prevY = y
            path.add(Point3D(x, y, 0.0))
            
            val v = sqrt(vx * vx + vy * vy)
            if (v < STOP_THRESHOLD && t > 0.1) break
            
            // Friction force components (opposite to velocity)
            // Normal force is approximately m*g for small angles
            val cosTheta = cos(sqrt(thetaX.pow(2) + thetaY.pow(2)))
            val frictionAcc = MU_STIMP_10 * GRAVITY * cosTheta
            
            val ax_fric = if (v > 0) -(vx / v) * frictionAcc else 0.0
            val ay_fric = if (v > 0) -(vy / v) * frictionAcc else 0.0
            
            // Total accelerations
            val ax_total = ax_fric + ax_slope
            val ay_total = ay_fric + ay_slope
            
            // Update velocity
            vx += ax_total * DT
            vy += ay_total * DT
            
            // Update position
            val dx = vx * DT
            val dy = vy * DT
            x += dx
            y += dy
            
            totalDistTraveled += sqrt(dx * dx + dy * dy)
            t += DT
            
            // Stop if velocity reverses due to friction (avoid oscillation)
            val newV = sqrt(vx * vx + vy * vy)
            if (newV < STOP_THRESHOLD && t > 0.1) break
        }
        
        return PuttingResult(
            path = path,
            totalDistance = totalDistTraveled,
            finalX = x,
            finalY = y,
            residualSpeed = sqrt(vx * vx + vy * vy)
        )
    }

    fun calculateDistance(x: Double, y: Double): Double {
        return sqrt(x * x + y * y)
    }

    fun getRecommendedAimX(missX: Double): Double {
        // Simple linear recommendation: if missed 30cm Right (+0.3), aim 30cm Left (-0.3)
        return -missX
    }

    fun isBallInHole(x: Double, y: Double, holeY: Double): Boolean {
        val dx = x
        val dy = y - holeY
        val dist = sqrt(dx * dx + dy * dy)
        return dist < 0.054 // 10.8cm diameter / 2 = 0.054m radius
    }
}
