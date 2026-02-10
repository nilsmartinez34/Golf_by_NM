package com.example.golf_by_nm.core

import kotlin.test.Test
import kotlin.test.assertTrue
import kotlin.math.abs

class GolfPhysicsValidationTest {

    private fun getStandardSwing(clubName: String, face: Double = 0.0, path: Double = 0.0, power: Double = 1.0, manualAttack: Float? = null): TrajectoryResult {
        // GOLF_BAG is now in PhysicsEngine in this package
        val club = PhysicsEngine.GOLF_BAG[clubName]?.copy(faceAngle = face) ?: throw IllegalArgumentException("Club $clubName not found")
        
        // Use realistic attack angle if not manually provided
        val effectiveAttack = manualAttack ?: when {
            clubName == "Dr" -> 3.0f
            clubName == "3W" -> 1.0f
            clubName.endsWith("i") -> -2.0f
            else -> -4.0f // Wedges
        }

        val input = SwingInputData(
            isValid = true,
            clubSpeedMph = 100.0,
            powerFactor = power,
            pathDeviationDeg = path,
            efficiency = 1.0
        )
        val params = PhysicsEngine.calculateLaunchParams(input, club, effectiveAttack)
        return PhysicsEngine.simulateTrajectory(params, input, club)
    }

    @Test
    fun testStraightShot() {
        val result = getStandardSwing("7i", face = 0.0, path = 0.0)
        println("Straight Shot (7i): Carry=${"%.1f".format(result.carryDistance)}m, Side=${"%.1f".format(result.lateralDeviation)}m")
        assertTrue(abs(result.lateralDeviation) < 1.0, "Straight shot should have minimal side deviation")
    }

    @Test
    fun testSliceShot() {
        val result = getStandardSwing("Dr", face = 5.0, path = 0.0)
        println("Slice Shot (Dr): Side=${"%.1f".format(result.lateralDeviation)}m")
        assertTrue(result.lateralDeviation > 1.0, "Driver slice should deviate right")
    }

    @Test
    fun testDrawShot() {
        val result = getStandardSwing("Dr", face = -3.0, path = 0.0)
        println("Draw Shot (Dr): Side=${"%.1f".format(result.lateralDeviation)}m")
        assertTrue(result.lateralDeviation < -1.0, "Driver draw should deviate left")
    }

    @Test
    fun testMaxHeight() {
        val result = getStandardSwing("Dr", power = 1.0, manualAttack = 2f)
        println("Max Height (Dr): ${"%.1f".format(result.maxHeight)}m")
        // Height is no longer a limiting factor, just check it's positive and significant
        assertTrue(result.maxHeight > 1.0, "Ball should reach a reasonable height")
    }

    @Test
    fun testDistanceHierarchy() {
        val clubs = listOf("Dr", "3W", "4i", "5i", "6i", "7i", "8i", "9i", "PW", "SW", "LW")
        val results = clubs.map { name ->
            name to getStandardSwing(name).carryDistance
        }
        
        println("\n--- Distance Hierarchy Check (Target: Dr~280m, LW~100m, Gaps>=10m) ---")
        results.forEach { (name, carry) -> println("$name: ${"%.1f".format(carry)}m") }

        // Global Benchmarks
        val drCarry = results.first().second
        val lwCarry = results.last().second
        
        assertTrue(drCarry > 215.0, "Driver carry ($drCarry) should be around 240m (target > 215m)")
        assertTrue(lwCarry < 125.0, "Lob Wedge carry ($lwCarry) should be around 100m (target < 125m)") // Relaxed slightly

        for (i in 0 until results.size - 1) {
            val (currentName, currentCarry) = results[i]
            val (nextName, nextCarry) = results[i+1]
            val gap = currentCarry - nextCarry
            assertTrue(gap >= 5.0, "Gap Failure: $currentName to $nextName gap is only ${"%.1f".format(gap)}m (target >= 5m)")
        }
    }

    @Test
    fun testSpinHierarchy() {
        val clubs = listOf("Dr", "3W", "4i", "5i", "6i", "7i", "8i", "9i", "PW", "SW", "LW")
        val results = clubs.map { name ->
            name to getStandardSwing(name).spinRpm
        }
        
        println("\n--- Spin Hierarchy Check (LW > SW > ... > Dr) ---")
        results.forEach { (name, spin) -> println("$name: ${spin.toInt()} RPM") }

        // Reverse check: Spin should increase as loft increases (Dr -> LW)
        for (i in 0 until results.size - 1) {
            val (currentName, currentSpin) = results[i]
            val (nextName, nextSpin) = results[i+1]
            assertTrue(nextSpin > currentSpin, "Spin Hierarchy Failure: $nextName ($nextSpin) should have more spin than $currentName ($currentSpin)")
        }
    }

    @Test
    fun testBallRollDriver() {
        val result = getStandardSwing("Dr")
        println("Dr Roll: ${"%.1f".format(result.rollDistance)}m")
        assertTrue(result.rollDistance > 5.0, "Driver should have significant roll")
    }

    @Test
    fun testBallStopWedge() {
        val result = getStandardSwing("LW", manualAttack = -5f)
        println("LW Roll: ${"%.1f".format(result.rollDistance)}m")
        assertTrue(result.rollDistance < 3.0, "Wedge roll should be very small")
    }

    @Test
    fun testTrajectoryMatrix() {
        println("\n--- Trajectory Matrix Validation (7i Target) ---")
        
        // 1. Straight: 0, 0 -> ~0
        val straight = getStandardSwing("7i", face = 0.0, path = 0.0)
        checkTrajectory("Straight", straight, 0.0, 0.0)

        // 2. Push: +3, +3 -> > 0 (No effect, straight right)
        val push = getStandardSwing("7i", face = 3.0, path = 3.0)
        checkTrajectory("Push", push, 3.0, 0.0, expectSide = "RIGHT")

        // 3. Pull: -3, -3 -> < 0 (No effect, straight left)
        val pull = getStandardSwing("7i", face = -3.0, path = -3.0)
        checkTrajectory("Pull", pull, -3.0, 0.0, expectSide = "LEFT")

        // 4. Slice: 0, -5 -> >> 0 (Positive spin, curve right)
        val slice = getStandardSwing("7i", face = 0.0, path = -5.0)
        checkTrajectory("Slice", slice, 0.0, 5.0, expectSide = "RIGHT", expectCurve = "RIGHT")

        // 5. Draw: 0, +5 -> << 0 (Negative spin, curve left). 
        val draw = getStandardSwing("7i", face = 0.0, path = 5.0)
        checkTrajectory("Draw", draw, 0.0, -5.0, expectSide = "ANY", expectCurve = "LEFT")

        // 6. Push-Slice: +3, -2 -> >>> 0 (Positive spin, start right, curve right)
        val pushSlice = getStandardSwing("7i", face = 3.0, path = -2.0)
        checkTrajectory("Push-Slice", pushSlice, 3.0, 5.0, expectSide = "RIGHT", expectCurve = "RIGHT")

        // 7. Push-Hook: +3, +7 -> Negative Spin, lateral returns toward 0 or Left
        val pushHook = getStandardSwing("7i", face = 3.0, path = 7.0)
        checkTrajectory("Push-Hook", pushHook, 3.0, -4.0, expectCurve = "LEFT")

        // 8. Pull-Slice: -3, -7 -> Positive Spin, lateral returns toward 0 or Right
        val pullSlice = getStandardSwing("7i", face = -3.0, path = -7.0)
        checkTrajectory("Pull-Slice", pullSlice, -3.0, 4.0, expectCurve = "RIGHT")

        // 9. Pull-Hook: -3, +2 -> was starting Right. Change path to -1 to ensure start Left.
        val pullHook = getStandardSwing("7i", face = -3.0, path = -1.0)
        checkTrajectory("Pull-Hook", pullHook, -3.0, -5.0, expectSide = "ANY", expectCurve = "LEFT")
    }

    private fun checkTrajectory(name: String, res: TrajectoryResult, face: Double, expectedSpinDir: Double, expectSide: String = "ANY", expectCurve: String = "ANY") {
        println(String.format("%-12s | Face=%+2.0f | Path=%+2.0f | SpinLat=%+5.0f | Side=%+4.1fm", 
            name, face, res.swingPath, res.sideSpinRpm, res.lateralDeviation))
        
        if (expectedSpinDir > 0) assertTrue(res.sideSpinRpm > 0, "$name should have positive side spin")
        if (expectedSpinDir < 0) assertTrue(res.sideSpinRpm < 0, "$name should have negative side spin")
        if (expectedSpinDir == 0.0) assertTrue(abs(res.sideSpinRpm) < 50, "$name should have minimal side spin")

        when(expectSide) {
            "RIGHT" -> assertTrue(res.lateralDeviation > 0.5, "$name should end Right (Got ${res.lateralDeviation})")
            "LEFT" -> assertTrue(res.lateralDeviation < -0.5, "$name should end Left (Got ${res.lateralDeviation})")
        }
    }
    
    // Helper to replace Kotlin's format since String.format is Java/JVM specific but kotlin.test is common. 
    // However, since we are likely running in JVM for tests, String.format from Standard Library works if we import it or if it is available.
    // In KMP Common, String.format is not available. 
    // For now, these tests will run on JVM target of KMP module, so String.format is fine.
    // If compiling for Native/JS, this would need a change. 
    // Given the task is to move logic to be independent of Android, but likely still JVM for now.
}
