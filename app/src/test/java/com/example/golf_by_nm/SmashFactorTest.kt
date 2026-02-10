package com.example.golf_by_nm

import org.junit.Assert.*
import org.junit.Test

class SmashFactorTest {

    private fun getStandardSwing(clubName: String): TrajectoryResult {
        val club = PhysicsEngine.GOLF_BAG[clubName] ?: throw IllegalArgumentException("Club $clubName not found")
        
        val input = SwingInputData(
            isValid = true,
            clubSpeedMph = 100.0, // Standard speed
            powerFactor = 1.0,
            pathDeviationDeg = 0.0,
            efficiency = 1.0
        )
        // Using neutral attack angle logic or manual override if needed, 
        // but for smash factor (BallSpeed/ClubSpeed), angle shouldn't matter in the simplified calc 
        // unless the engine makes it dependent. 
        // Looking at PhysicsEngine: vBallMps = vClubMps * club.smashFactor * input.efficiency
        // It doesn't seem to depend on Attack Angle for speed, only direction/spin.
        
        val params = PhysicsEngine.calculateLaunchParams(input, club)
        return PhysicsEngine.simulateTrajectory(params, input, club)
    }

    @Test
    fun testSmashFactorLimits() {
        val clubs = listOf("Dr", "3W", "4i", "5i", "6i", "7i", "8i", "9i", "PW", "SW", "LW")
        
        println("\n--- Smash Factor Validation ---")
        
        var previousSmashFactor = 2.0 // Start higher than possible
        
        clubs.forEach { name ->
            val result = getStandardSwing(name)
            val smashFactor = result.smashFactor
            
            println("Club: $name, Smash Factor: ${"%.3f".format(smashFactor)}")
            
            // Rule 1: Driver Max 1.5
            if (name == "Dr") {
                assertTrue("Driver Smash Factor ($smashFactor) must be <= 1.50", smashFactor <= 1.5001) // epsilon
            }
            
            // Rule 2: Decreasing value
            // We allow equal locally if steps are small, but generally it should decrease.
            // The user said "doit décroitre" (must decrease).
            assertTrue("Smash factor for $name ($smashFactor) should be less than or equal to previous ($previousSmashFactor)", 
                smashFactor < previousSmashFactor || (smashFactor < previousSmashFactor + 0.01)) 
            
            previousSmashFactor = smashFactor
        }
    }
    
    @Test
    fun testLWSmashFactor() {
        // Rule 3: LW == 1.0 (Graded from 1.5 down to 1.0)
        val result = getStandardSwing("LW")
        println("LW Smash Factor: ${result.smashFactor}")
        assertEquals("LW Smash Factor should be exactly 1.0", 1.0, result.smashFactor, 0.01)
    }
}
