package com.example.golf_by_nm

import org.junit.Test
import org.junit.Assert.*
import kotlin.math.*

class PuttingPhysicsTest {

    @Test
    fun testFlatRoll_Baseline() {
        // Input: Power = 10.0m, Pentes = 0.0°
        val result = PuttingPhysicsEngine.simulate(
            targetDistance = 10.0,
            slopeXDeg = 0.0,
            slopeYDeg = 0.0
        )
        
        // Assertion: La distance finale Y doit être égale à 10.0m ± 0.1 (légère tolérance d'intégration)
        // Et X doit être strictement égal à 0
        assertEquals(10.0, result.finalY, 0.1)
        assertEquals(0.0, result.finalX, 0.001)
    }

    @Test
    fun testSlopeY_BrakingEffect() {
        // Input: Puissance = 5.0m, Pente Y = +3% (montée)
        // Note: 3% slope is approx atan(0.03) = 1.7°
        val result = PuttingPhysicsEngine.simulate(
            targetDistance = 5.0,
            slopeXDeg = 0.0,
            slopeYDeg = 1.7 
        )
        
        // Assertion: La distance parcourue doit être inférieure à 5.0m
        assertTrue("Distance should be less than 5m on uphill slope. Was: ${result.finalY}", result.finalY < 5.0)
    }

    @Test
    fun testSlopeX_LateralDeviation() {
        // Input: Puissance = 5.0m, Pente X = 2° (vers la droite)
        val result = PuttingPhysicsEngine.simulate(
            targetDistance = 5.0,
            slopeXDeg = 2.0,
            slopeYDeg = 0.0
        )
        
        // Assertion: La coordonnée X_final doit être positive
        assertTrue("X coordinate should be positive for right-side slope. Was: ${result.finalX}", result.finalX > 0)
    }

    @Test
    fun testEuclideanDistance_Calculation() {
        // Input: Coordonnées d'arrêt (X: 0.5, Y: 4.8)
        val dist = PuttingPhysicsEngine.calculateDistance(0.5, 4.8)
        
        // Assertion: sqrt(0.5^2 + 4.8^2) ≈ 4.826m
        assertEquals(4.82597, dist, 0.001)
    }

    @Test
    fun testAimPointRecommendation_LinearCorrection() {
        // Input: Le simulateur détecte un "Miss" de 30cm à droite
        val recommendation = PuttingPhysicsEngine.getRecommendedAimX(0.30)
        
        // Assertion: Doit retourner un AimPoint situé à exactement 30cm à gauche (-0.30)
        assertEquals(-0.30, recommendation, 0.001)
    }

    @Test
    fun testHoleCapture_ProximityLogic() {
        // Input: Balle s'arrêtant à 4.05m pour un trou placé à 4.0m
        val isCaptured = PuttingPhysicsEngine.isBallInHole(0.0, 4.05, 4.0)
        
        // Assertion: Le statut doit être IN_HOLE = true (5cm < 5.4cm radius)
        assertTrue("Ball should be captured at 4.05m for hole at 4.0m", isCaptured)
        
        // Test wide miss
        val isMissed = PuttingPhysicsEngine.isBallInHole(0.1, 4.0, 4.0)
        assertFalse("Ball should miss at 10cm wide", isMissed)
    }
}
