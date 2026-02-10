package com.example.golf_by_nm.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun ControlsArea(
    selectedClub: String,
    faceAngle: Double,
    onClubSelected: (String) -> Unit,
    onFaceAngleChanged: (Double) -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(8.dp)
    ) {
        // Club Selector
        Text("Club Selector", style = MaterialTheme.typography.labelMedium)
        LazyRow(
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier.padding(vertical = 8.dp)
        ) {
            val clubs = listOf("Driver", "3 Wood", "5 Iron", "Putter")
            items(clubs) { club ->
                FilterChip(
                    selected = club == selectedClub,
                    onClick = { onClubSelected(club) },
                    label = { Text(club) }
                )
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        // Face Angle Adjuster
        Text("Face Angle: ${faceAngle.toInt()}° (Negative = Closed)", style = MaterialTheme.typography.labelMedium)
        Slider(
            value = faceAngle.toFloat(),
            onValueChange = { onFaceAngleChanged(it.toDouble()) },
            valueRange = -10f..10f,
            steps = 19
        )
    }
}
