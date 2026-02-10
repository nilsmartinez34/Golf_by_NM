package com.example.golf_by_nm.core

import kotlin.math.*

object PhysicsEngine {
    private const val GRAVITY = 9.81
    private const val RHO = 1.225      // Densité de l'air (kg/m3)
    private const val MASS = 0.0459     // Masse balle (kg)
    private const val AREA = 0.001432   // Section transversale (m2)
    private const val RADIUS = 0.02135  // Rayon de la balle (m)
    private const val SPIN_DECAY = 0.999 // Décroissance naturelle du spin

    // Sac de golf mis à jour avec les noms abrégés (Dr, 3W, 4i-PW)
    val GOLF_BAG = mapOf(
        "Dr" to Club("Dr", 10.5, 45.0, 1.50, 2300.0, 0.25),
        "3W" to Club("3W", 15.0, 43.0, 1.42, 3600.0, 0.18),
        "4i" to Club("4i", 24.0, 38.5, 1.37, 5200.0, 0.08),
        "5i" to Club("5i", 27.0, 38.0, 1.32, 5800.0, 0.07),
        "6i" to Club("6i", 30.0, 37.5, 1.27, 6400.0, 0.06),
        "7i" to Club("7i", 34.0, 37.0, 1.22, 7200.0, 0.06),
        "8i" to Club("8i", 37.0, 36.5, 1.17, 8000.0, 0.05),
        "9i" to Club("9i", 41.0, 36.0, 1.12, 8800.0, 0.05),
        "PW" to Club("PW", 45.0, 35.5, 1.07, 10200.0, 0.04),
        "SW" to Club("SW", 54.0, 35.0, 1.03, 11800.0, 0.02),
        "LW" to Club("LW", 58.0, 35.0, 1.00, 13500.0, 0.01)
    )

    fun calculateLaunchParams(input: SwingInputData, club: Club, manualAttackAngle: Float = 0f): LaunchParams {
        val vClubMps = (input.clubSpeedMph * input.powerFactor) * 0.44704 // Removed 1.17 boost to respect strict smash factor limits
        val vBallMps = vClubMps * club.smashFactor * input.efficiency

        // Launch Angle : Modèle non-linéaire pour favoriser les bois
        val launchAngle = club.loft * (0.95 - club.loft * 0.005) + manualAttackAngle * 0.6

        // Spin : Indexé sur la vitesse et le "Spin Loft"
        val speedRatio = vBallMps / 60.0
        val spinLoft = (club.loft - manualAttackAngle).coerceAtLeast(10.0)
        val spinLoftFactor = spinLoft / club.loft
        val backSpin = club.baseSpinRpm * speedRatio * spinLoftFactor
        val sideSpin = (club.faceAngle - input.pathDeviationDeg) * 180.0 * speedRatio
        val horizontalLaunch = (input.pathDeviationDeg * 0.7) + (club.faceAngle * 0.3)

        return LaunchParams(vBallMps, launchAngle, horizontalLaunch, sideSpin, backSpin)
    }

    fun simulateTrajectory(params: LaunchParams, input: SwingInputData, club: Club): TrajectoryResult {
        val path = mutableListOf<Point3D>()
        val dt = 0.01
        var t = 0.0
        var x = 0.0; var y = 0.0; var z = 0.0

        val launchRad = toRadians(params.launchAngleDeg)
        val yawRad = toRadians(params.horizontalLaunchDeg)

        var vx = params.ballSpeedMps * cos(launchRad) * cos(yawRad)
        var vy = params.ballSpeedMps * sin(launchRad)
        var vz = params.ballSpeedMps * cos(launchRad) * sin(yawRad)

        var currentBackSpin = params.backSpinRpm
        var currentSideSpin = params.sideSpinRpm
        var maxY = 0.0

        while (y >= 0.0 && t < 15.0) {
            path.add(Point3D(x, y, z))
            if (y > maxY) maxY = y

            val v = sqrt(vx*vx + vy*vy + vz*vz)
            if (v < 0.5) break

            // 1. SPIN PARAMETER (S)
            val omegaRad = (sqrt(currentBackSpin.pow(2) + currentSideSpin.pow(2)) * 2 * PI) / 60.0
            val spinParameter = (RADIUS * omegaRad) / v

            // 2. COEFFICIENTS DYNAMIQUES
            // Cd : Base + crise de traînée + résistance induite par le spin
            val cd_base = 0.20 + 0.25 / (1.0 + exp(0.3 * (v - 35.0)))
            val cd_spin = 0.35 * spinParameter.pow(1.8) 
            val cd = cd_base + cd_spin

            // CL : Modèle de portance modéré
            val cl = 0.10 + 0.30 * (1.0 - exp(-3.0 * spinParameter))

            // 3. CALCUL DES FORCES
            val dragForce = 0.5 * RHO * v * v * AREA * cd
            val liftForce = 0.5 * RHO * v * v * AREA * cl

            // 4. ACCÉLÉRATIONS
            val ax_drag = -(vx / v) * (dragForce / MASS)
            val ay_drag = -(vy / v) * (dragForce / MASS)
            val az_drag = -(vz / v) * (dragForce / MASS)

            val totalSpin = sqrt(currentBackSpin.pow(2) + currentSideSpin.pow(2)).coerceAtLeast(1.0)
            val liftRatioBack = currentBackSpin / totalSpin
            val liftRatioSide = currentSideSpin / totalSpin

            // Magnus vertical (portance) et latéral (spin)
            val ay_lift = (vx / v) * (liftForce / MASS) * liftRatioBack
            val az_lift = (vx / v) * (liftForce / MASS) * liftRatioSide

            // 5. INTÉGRATION
            vx += ax_drag * dt
            vy += (ay_drag + ay_lift - GRAVITY) * dt
            vz += (az_drag + az_lift) * dt

            x += vx * dt; y += vy * dt; z += vz * dt

            currentBackSpin *= SPIN_DECAY
            currentSideSpin *= SPIN_DECAY
            t += dt
        }

        if (y < 0) path.add(Point3D(x, 0.0, z))

        // Roll ajusté selon la hauteur (plus c'est haut, moins ça roule)
        val roll = x * club.rollFactor * (1.0 - (maxY / 50.0).coerceIn(0.0, 0.8))

        return TrajectoryResult(
            path = path,
            clubHeadSpeedMph = input.clubSpeedMph * input.powerFactor,
            ballSpeedMph = params.ballSpeedMps / 0.44704,
            smashFactor = (params.ballSpeedMps / 0.44704) / (input.clubSpeedMph * input.powerFactor).coerceAtLeast(1.0),
            launchAngle = params.launchAngleDeg,
            swingPath = input.pathDeviationDeg,
            faceToPath = club.faceAngle - input.pathDeviationDeg,
            carryDistance = x,
            totalDistance = x + roll,
            rollDistance = roll,
            lateralDeviation = z,
            maxHeight = maxY,
            spinRpm = params.backSpinRpm,
            sideSpinRpm = params.sideSpinRpm,
            launchVelocity = params.ballSpeedMps,
            flightTimeSeconds = t
        )
    }
    
    // Helper for common code since Math.toRadians is Java
    private fun toRadians(deg: Double): Double = deg * PI / 180.0
}
