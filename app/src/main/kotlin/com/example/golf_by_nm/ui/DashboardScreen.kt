package com.example.golf_by_nm.ui

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.golf_by_nm.ui.components.DataGrid
import com.example.golf_by_nm.ui.components.FieldCanvas
import com.example.golf_by_nm.ui.components.SwingInputArea
import com.example.golf_by_nm.ui.components.ControlsArea

@Composable
fun DashboardScreen(
    viewModel: SwingViewModel = viewModel()
) {
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    android.util.Log.d("SwingMaster", "DashboardScreen: Recomposition. Phase=${state.swingPhase}")

    Scaffold(
        modifier = Modifier.fillMaxSize()
    ) { innerPadding ->
        Column(modifier = Modifier.padding(innerPadding).fillMaxSize()) {
            // Top Section: Visualization (Canvas)
            Box(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxSize()
            ) {
                // 1. Rendering Layer
                // 1. Rendering Layer
                // FieldCanvas(
                //    swingImpact = state.swingImpact,
                //    swingPhase = state.swingPhase,
                //    modifier = Modifier.fillMaxSize()
                // )
                
                // 2. Input Layer (Transparent Overlay)
                SwingInputArea(
                    viewModel = viewModel,
                    modifier = Modifier.fillMaxSize()
                )
            }
            
            // Controls Section
            ControlsArea(
                selectedClub = state.selectedClub.name,
                faceAngle = state.faceAngleAdjustment,
                onClubSelected = { viewModel.updateClub(it) },
                onFaceAngleChanged = { viewModel.updateFaceAngle(it) }
            )

            // Bottom Section: Data
            DataGrid(
                swingImpact = state.swingImpact,
                modifier = Modifier.weight(0.4f)
            )
        }
    }
}
