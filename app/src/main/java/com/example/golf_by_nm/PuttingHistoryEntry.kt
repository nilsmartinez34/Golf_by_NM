package com.example.golf_by_nm

import java.text.SimpleDateFormat
import java.util.*

/**
 * Represents a single putt in the history.
 */
data class PuttingHistoryEntry(
    val id: Long,
    val timestamp: Long,
    
    // Inputs
    val powerMeters: Double,
    val slopeXDeg: Double,
    val slopeYDeg: Double,
    
    // Results
    val totalDistance: Double,
    val finalX: Double,
    val finalY: Double,
    val residualSpeed: Double,
    
    // Aim Point Analysis
    val holeDistance: Double = 0.0,
    val playAsDistance: Double = 0.0,
    val entrySpeed: Double = 0.0,
    val entryStatus: String = ""
) {
    fun getFormattedTime(): String {
        val sdf = SimpleDateFormat("HH:mm:ss", Locale.getDefault())
        return sdf.format(Date(timestamp))
    }
}
