package com.example.golf_by_nm.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.swingmaster.physics.SwingImpact
import com.example.swingmaster.physics.UnitConverter.mpsToMph
import com.example.swingmaster.physics.UnitConverter.metersToYards

@Composable
fun DataGrid(
    swingImpact: SwingImpact?,
    modifier: Modifier = Modifier
) {
    android.util.Log.d("SwingMaster", "DataGrid: Recomposition. Impact=${swingImpact != null}")
    Column(
        modifier = modifier
            .fillMaxWidth()
            .background(Color(0xFF1E1E1E)) // Darker background
            .padding(16.dp)
    ) {
        // Top Row: Primary Stats (Carry & Total)
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            DataCard(
                label = "CARRY",
                value = metersToYards(swingImpact?.carryDistanceMeters ?: 0.0),
                unit = "yds",
                modifier = Modifier.weight(1f),
                highlight = true
            )
            DataCard(
                label = "TOTAL",
                value = metersToYards(swingImpact?.totalDistanceMeters ?: 0.0),
                unit = "yds",
                modifier = Modifier.weight(1f),
                highlight = true
            )
        }
        
        Spacer(modifier = Modifier.height(16.dp))
        
        // Bottom Row: Secondary Stats
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            DataCard(
                label = "SPEED",
                value = mpsToMph(swingImpact?.ballSpeedMps ?: 0.0),
                unit = "mph",
                modifier = Modifier.weight(1f)
            )
            DataCard(
                label = "LAUNCH",
                value = swingImpact?.launchAngleDeg ?: 0.0,
                unit = "deg",
                modifier = Modifier.weight(1f)
            )
             DataCard(
                label = "OFFLINE",
                value = metersToYards(swingImpact?.offlineMeters ?: 0.0),
                unit = "yds",
                modifier = Modifier.weight(1f)
            )
        }
    }
}

@Composable
fun DataCard(
    label: String,
    value: Double,
    unit: String,
    modifier: Modifier = Modifier,
    highlight: Boolean = false
) {
    androidx.compose.material3.Card(
        modifier = modifier,
        colors = androidx.compose.material3.CardDefaults.cardColors(
            containerColor = if (highlight) Color(0xFF2C2C2C) else Color(0xFF252525)
        ),
        elevation = androidx.compose.material3.CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(
            modifier = Modifier
                .padding(12.dp)
                .fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = label,
                style = MaterialTheme.typography.labelSmall,
                color = if (highlight) Color(0xFF4CAF50) else Color.Gray, // Green if highlight
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = "%.1f".format(value),
                style = if (highlight) MaterialTheme.typography.headlineLarge else MaterialTheme.typography.headlineSmall,
                color = Color.White,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = unit,
                style = MaterialTheme.typography.bodySmall,
                color = Color.LightGray
            )
        }
    }
}
