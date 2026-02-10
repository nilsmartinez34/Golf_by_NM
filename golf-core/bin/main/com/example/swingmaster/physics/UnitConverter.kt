package com.example.swingmaster.physics

object UnitConverter {
    const val METERS_TO_YARDS = 1.09361

    fun metersToYards(meters: Double): Double = meters * METERS_TO_YARDS
    fun yardsToMeters(yards: Double): Double = yards / METERS_TO_YARDS
    fun mpsToMph(mps: Double): Double = mps * 2.23694
    fun mphToMps(mph: Double): Double = mph / 2.23694
}
