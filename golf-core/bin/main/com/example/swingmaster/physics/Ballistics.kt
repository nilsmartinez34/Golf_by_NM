package com.example.swingmaster.physics

import kotlin.math.*

object Ballistics {
    private const val GRAVITY = 9.81
    private const val AIR_DENSITY = 1.225 // kg/m^3
    private const val BALL_MASS = 0.0459 // kg
    private const val BALL_RADIUS = 0.02135 // m
    private const val BALL_AREA = PI * BALL_RADIUS * BALL_RADIUS

    /**
     * Calculates the ball flight based on swing parameters.
     * Simplified physics model including Drag and Magnus effect.
     */
    fun calculateShot(
        clubHeadSpeedMps: Double,
        clubLoftDeg: Double,
        attackAngleDeg: Double,
        clubPathDeg: Double, // Negative = Out-to-In (Fade/Slice), Positive = In-to-Out (Draw/Hook)
        faceAngleDeg: Double // Relative to target. Negative = Closed, Positive = Open
    ): SwingImpact {
        // 1. Impact Physics (Collision)
        // Smash factor approximation (Driver ~1.48, Irons lower)
        val smashFactor = 1.45 
        val ballSpeed = clubHeadSpeedMps * smashFactor
        
        // Launch Angle ≈ Dynamic Loft * 0.85 (simplified)
        // Dynamic Loft = Static Loft + Attack Angle (roughly)
        val dynamicLoft = clubLoftDeg + attackAngleDeg
        val launchAngle = dynamicLoft * 0.85

        // Face-to-Path determines Spin Axis
        // Face to Path = Face Angle - Club Path
        // If Face is Open relative to Path (Positive), Ball curves Right (Slice/Fade)
        // If Face is Closed relative to Path (Negative), Ball curves Left (Hook/Draw)
        val faceToPath = faceAngleDeg - clubPathDeg
        
        // Horizontal Launch Angle is mostly influenced by Face Angle (~85%) and Path (~15%)
        val horizontalLaunchAngle = (faceAngleDeg * 0.85) + (clubPathDeg * 0.15)

        // Spin Rates
        // Backspin largely dependent on Lofts difference (Spin Loft)
        val spinLoft = dynamicLoft // Simplified
        val totalSpin = (spinLoft * 200) + (clubHeadSpeedMps * 20) // Heuristic
        
        // Side spin component based on Face-to-Path
        // A larger face-to-path angle tilts the spin axis
        val sideSpin = totalSpin * sin(Math.toRadians(faceToPath)) * 0.5
        val backSpin = totalSpin * cos(Math.toRadians(faceToPath))

        // 2. Flight Trajectory Simulation (Numerical Integration)
        var x = 0.0 // Distance down range
        var y = 0.0 // Height
        var z = 0.0 // Side deviation
        
        var vx = ballSpeed * cos(Math.toRadians(launchAngle)) * cos(Math.toRadians(horizontalLaunchAngle))
        var vy = ballSpeed * sin(Math.toRadians(launchAngle))
        var vz = ballSpeed * cos(Math.toRadians(launchAngle)) * sin(Math.toRadians(horizontalLaunchAngle))

        val dt = 0.01 // Time step
        var t = 0.0
        
        var maxY = 0.0

        // Simulation Loop
        while (y >= 0.0) {
            val v = sqrt(vx*vx + vy*vy + vz*vz)
            
            // Drag Force: Fd = 0.5 * p * v^2 * Cd * A
            val cd = 0.3 // Drag coefficient for golf ball
            val dragForce = 0.5 * AIR_DENSITY * v * v * cd * BALL_AREA
            val dragAcc = dragForce / BALL_MASS
            
            val axDrag = -(vx/v) * dragAcc
            val ayDrag = -(vy/v) * dragAcc
            val azDrag = -(vz/v) * dragAcc

            // Magnus Force: Fm = S * (w x v) ... simplified implementation
            // Lift coefficient Cl depends on spin rate
            val spinRateRadS = (sqrt(backSpin*backSpin + sideSpin*sideSpin) / 60.0) * 2 * PI
            val cl = 0.15 * spinRateRadS / v // Simplified Lift Coefficient approximation
            val liftForce = 0.5 * AIR_DENSITY * v * v * cl * BALL_AREA
            val liftAcc = liftForce / BALL_MASS
            
            // Lift acts perpendicular to velocity.
            // Simplified: Backspin adds to Y lift, Side spin adds to Z force
            val ayLift = liftAcc * (backSpin / totalSpin)
            val azLift = liftAcc * (sideSpin / totalSpin) * (if (sideSpin > 0) -1.0 else 1.0) // Side spin direction? 
            // Actually, if Face is Open (Positive FaceToPath), SideSpin is Positive. 
            // Positive SideSpin (Right spin) -> Force to Right (Positive Z). 
            // Wait, Magnus force direction: w x v.
            // If ball spins clockwise (top down view), it curves right.
            
            val ayGravity = -GRAVITY

            // Update Velocities
            vx += axDrag * dt
            vy += (ayDrag + ayLift + ayGravity) * dt
            vz += (azDrag + azLift) * dt

            // Update Positions
            x += vx * dt
            y += vy * dt
            z += vz * dt
            
            if (y > maxY) maxY = y
            t += dt
            
            // Ground collision
            if (y < 0) break
        }

        return SwingImpact(
            ballSpeedMps = ballSpeed,
            launchAngleDeg = launchAngle,
            sideSpinRpm = sideSpin,
            backSpinRpm = backSpin,
            carryDistanceMeters = sqrt(x*x + z*z), // Straight line distance? Usually Carry is just X projected.
            // Let's assume Carry is distance from origin.
            totalDistanceMeters = sqrt(x*x + z*z) * 1.1, // Add some roll
            maxHeightMeters = maxY,
            offlineMeters = z
        )
    }
}
