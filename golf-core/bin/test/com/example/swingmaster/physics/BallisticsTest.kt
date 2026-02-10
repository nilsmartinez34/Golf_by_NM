package com.example.swingmaster.physics

import org.junit.Assert.*
import org.junit.Test

class BallisticsTest {

    @Test
    fun `calculateShot returns reasonable values for driver`() {
        // Standard Driver Stats (PGA Tour Avg approx)
        // 113 mph speed -> ~50 m/s
        val result = Ballistics.calculateShot(
            clubHeadSpeedMps = 50.0,
            clubLoftDeg = 10.5,
            attackAngleDeg = 2.0,
            clubPathDeg = 0.0,
            faceAngleDeg = 0.0
        )

        println("Driver Shot: $result")
        
        // Assertions based on expected physics
        assertTrue("Ball speed should be higher than club speed", result.ballSpeedMps > 50.0)
        assertTrue("Launch angle should be positive", result.launchAngleDeg > 0)
        assertTrue("Carry distance should be reasonable (>200m)", result.carryDistanceMeters > 200)
    }

    @Test
    fun `calculateShot hook logic`() {
        // Closed face relative to path -> Hook (Left, Negative Z in our model if Z is Horizontal deviation?)
        // Wait, logic in Ballistics:
        // FaceToPath = Face - Path
        // Face = -5 (Closed), Path = 0 => FaceToPath = -5.
        // SideSpin = sin(-5) -> Negative.
        // If SideSpin is Negative, does it go Left or Right?
        // In Ballistics.kt:
        // val azLift = liftAcc * ... * (if (sideSpin > 0) -1.0 else 1.0)
        // If SideSpin > 0 (Open face, Slice), z force is Negative (-1).
        // If SideSpin < 0 (Closed face, Hook), z force is Positive (1).
        // Let's check coordinate system.
        // X is forward. Y is Up. Z is... Right? 
        // If SwingAnalyzer says: Right is +90. 
        // If Z is Right.
        // Slice (Curve Right) should have Positive Z.
        // My Logic: SideSpin > 0 -> Force Negative Z. THIS SEEMS WRONG.
        // If Face is Open (Positive), I want it to slice Right (Positive Z).
        
        val result = Ballistics.calculateShot(
            clubHeadSpeedMps = 45.0,
            clubLoftDeg = 10.5,
            attackAngleDeg = 0.0,
            clubPathDeg = 0.0,
            faceAngleDeg = 5.0 // Open Face -> Slice
        )
        
        // I expect positive offlineMeters (Right)
        // If my code is wrong, this test will fail or show negative.
        val offline = result.offlineMeters
        assertTrue("Slice should curve right (positive offline)", offline > 0)
    }

    @Test
    fun `pushDrawLogic`() {
        // Push Draw: Path is In-to-Out (Positive, e.g. +5 deg)
        // Face is Square (0 deg) OR slightly Open but Closed relative to Path.
        // Let's say Path = +5. Face = +2.
        // FaceToPath = 2 - 5 = -3 (Closed relative to Path).
        // Ball starts Right (due to Face +2 and Path +5).
        // Curves Left (due to Closed FaceToPath).
        // Result: Should land near center or slightly right, but definitely curve left.
        
        val result = Ballistics.calculateShot(
            clubHeadSpeedMps = 45.0,
            clubLoftDeg = 10.5,
            attackAngleDeg = 2.0,
            clubPathDeg = 5.0, // In-to-out
            faceAngleDeg = 2.0 // Open face (Push)
        )
        
        println("Push Draw: $result")
        
        // 1. Start Direction: Horizontal Launch Angle.
        // HLA = Face*0.85 + Path*0.15 = 2*0.85 + 5*0.15 = 1.7 + 0.75 = 2.45 deg (Right).
        // Ball starts Right.
        
        // 2. Curvature: FaceToPath = -3 (Closed).
        // SideSpin should be Negative (Left/Hook spin).
        // Force should be towards -Z (Left).
        
        // So SideSpinRpm should be < 0? 
        // In Ballistics.kt: 
        // val faceToPath = faceAngleDeg - clubPathDeg
        // val sideSpin = totalSpin * sin(Math.toRadians(faceToPath)) * 0.5
        // faceToPath is -3. sin(-3) is negative. sideSpin is negative.
        
        assertTrue("SideSpin should be negative (Draw/Hook)", result.sideSpinRpm < 0)
        
        // Offline check is tricky without knowing exact magnitudes, but let's verify spin direction.
    }
}
