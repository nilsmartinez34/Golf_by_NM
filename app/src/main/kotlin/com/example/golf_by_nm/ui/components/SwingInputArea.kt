package com.example.golf_by_nm.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.input.pointer.pointerInput
import com.example.golf_by_nm.ui.SwingViewModel

@Composable
fun SwingInputArea(
    viewModel: SwingViewModel,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .fillMaxSize()
            .pointerInput(Unit) {
                detectDragGestures(
                    onDragStart = { offset ->
                        android.util.Log.d("SwingMaster", "Input: Drag Start at $offset")
                        viewModel.onSwingStart(offset)
                    },
                    onDrag = { change, _ ->
                        change.consume()
                        // Sample logs to avoid spam
                        if (change.position.y % 10 < 2) { 
                             android.util.Log.v("SwingMaster", "Input: Drag Update at ${change.position}")
                        }
                        viewModel.onSwingUpdate(change.position)
                    },
                    onDragEnd = {
                        android.util.Log.d("SwingMaster", "Input: Drag End")
                        viewModel.onSwingEnd()
                    },
                    onDragCancel = {
                        android.util.Log.d("SwingMaster", "Input: Drag Cancel")
                        viewModel.onSwingEnd()
                    }
                )
            }
            .background(Color.Transparent)
    )
}
