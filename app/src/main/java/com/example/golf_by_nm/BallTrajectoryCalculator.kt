package com.example.golf_by_nm

import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.max
import kotlin.math.sin
import kotlin.math.sqrt

// Data class to represent a 2D point/offset, avoiding Android dependencies.
data class Point(val x: Float, val y: Float)

// Data class to represent a 3D point in space.
data class Point3D(val x: Double, val y: Double, val z: Double)

// Data class for professional reference standards.
data class ClubSpecs(
    val loft: Float,
    val baseSmashFactor: Float,
    val proClubSpeedMph: Float,
    val proBallSpeedMph: Float
)

// Data class for club properties.
data class Club(
    val name: String,
    val loft: Double,
    val lengthInches: Double = 37.0, // Default to 7 iron length
    val smashFactor: Double = 1.4,
    val baseSpinRpm: Double = 7000.0,
    val rollFactor: Double = 0.05,
    val faceAngle: Double = 0.0,
    val pgaTargetSpeedMph: Double = 0.0
)

/**
 * Holds the results of a trajectory calculation with detailed metrics.
 */
data class TrajectoryResult(
    val path: List<Point3D>,
    val clubHeadSpeedMph: Double,
    val ballSpeedMph: Double,
    val smashFactor: Double,
    val launchAngle: Double,
    val swingPath: Double,
    val faceToPath: Double,
    val carryDistance: Double,
    val totalDistance: Double,
    val rollDistance: Double = 0.0,
    val lateralDeviation: Double,
    val maxHeight: Double,
    val spinRpm: Double = 0.0,
    val sideSpinRpm: Double = 0.0,
    val launchVelocity: Double = 0.0,
    val flightTimeSeconds: Double = 0.0
)

/**
 * Redundant calculator. Superseded by PhysicsEngine.
 * Kept for Point/Club/TrajectoryResult models until move to GolfModels.kt.
 */
class BallTrajectoryCalculator {
    // Deprecated logic removed to solve compilation errors.
    // PhysicsEngine.java is now the primary simulation source.
}
