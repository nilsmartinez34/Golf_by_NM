package com.example.golf_by_nm

import java.text.SimpleDateFormat
import java.util.*

/**
 * Represents a single shot in the history.
 */
data class ShotHistoryEntry(
    val id: Long,
    val timestamp: Long,
    val clubName: String,
    val clubType: String, // "Driver", "Wood", "Iron", "Wedge"
    val swingMode: String, // "PRO" or "SCHOOL"
    
    // Impact Data
    val clubSpeedMph: Double,
    val ballSpeedMph: Double,
    val smashFactor: Double,
    val swingPath: Double,
    val clubFaceAngle: Double,
    val attackAngle: Double,
    
    // Flight Results
    val carryDistance: Double,
    val totalDistance: Double,
    val lateralDeviation: Double,
    val maxHeight: Double,
    val flightTime: Double,
    
    // Spin Data
    val backspinRpm: Double,
    val sidespinRpm: Double,
    
    // Launch Data
    val launchAngle: Double,
    val launchDirection: Double
) {
    fun getFormattedTime(): String {
        val sdf = SimpleDateFormat("HH:mm:ss", Locale.getDefault())
        return sdf.format(Date(timestamp))
    }
    
    fun getClubCategory(): String {
        return clubType
    }
}

/**
 * Filter options for shot history.
 */
enum class HistoryFilter(val displayName: String) {
    ALL("All Shots"),
    DRIVER("Driver"),
    WOODS("Woods"),
    IRONS("Irons"),
    WEDGES("Wedges"),
    PRO_MODE("PRO Mode"),
    SCHOOL_MODE("SCHOOL Mode")
}

/**
 * Sort options for shot history.
 */
enum class HistorySortBy(val displayName: String) {
    TIMESTAMP_DESC("Newest First"),
    TIMESTAMP_ASC("Oldest First"),
    DISTANCE_DESC("Longest Distance"),
    DISTANCE_ASC("Shortest Distance"),
    CLUB_NAME("By Club Name"),
    SPEED_DESC("Fastest Speed")
}
