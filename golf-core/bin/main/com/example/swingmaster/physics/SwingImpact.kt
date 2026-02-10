package com.example.swingmaster.physics

data class SwingImpact(
    val ballSpeedMps: Double,
    val launchAngleDeg: Double,
    val sideSpinRpm: Double,
    val backSpinRpm: Double,
    val carryDistanceMeters: Double,
    val totalDistanceMeters: Double,
    val maxHeightMeters: Double,
    val offlineMeters: Double // Horizontal deviation (Negative = Left, Positive = Right)
)
