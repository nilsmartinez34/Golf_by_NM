package com.example.golf_by_nm.ui.components

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import com.example.swingmaster.physics.SwingImpact
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.tween
import androidx.compose.animation.core.LinearEasing
import kotlin.math.sin
import kotlin.math.cos
import kotlin.math.PI

import com.example.golf_by_nm.ui.SwingPhase

@Composable
fun FieldCanvas(
    swingImpact: SwingImpact?,
    swingPhase: SwingPhase,
    modifier: Modifier = Modifier
) {
    val progress = remember { Animatable(0f) }
    val path = remember { Path() }

    LaunchedEffect(swingImpact) {
        if (swingImpact != null) {
            progress.snapTo(0f)
            progress.animateTo(
                targetValue = 1f,
                animationSpec = tween(
                     durationMillis = (swingImpact.carryDistanceMeters * 15).toInt().coerceIn(1500, 4000),
                     easing = LinearEasing
                )
            )
        } else {
            progress.snapTo(0f)
        }
    }

    Box(
        modifier = modifier
            .fillMaxSize()
            .background(Color(0xFF2E7D32)) // Grass Green
    ) {
        Canvas(modifier = Modifier.fillMaxSize()) {
            val width = size.width
            val height = size.height
            val centerX = width / 2
            val groundY = height * 0.9f 
            
            // Draw Target Line
            drawLine(
                color = Color.White.copy(alpha = 0.5f),
                start = Offset(centerX, height),
                end = Offset(centerX, 0f),
                strokeWidth = 2f
            )

            // Draw Distance Markers (every 50 yds lines)
            for (i in 1..6) {
                val y = height - (height / 6 * i)
                drawLine(
                    color = Color.White.copy(alpha = 0.2f),
                    start = Offset(0f, y),
                    end = Offset(width, y),
                    strokeWidth = 1f
                )
            }

            if (swingImpact != null && swingImpact.carryDistanceMeters > 0) {
                val scale = height / 274.0 // pixels per meter (assuming 300yds screen)
                
                val startX = centerX
                val startY = groundY.toDouble()
                val endX = centerX + (swingImpact.offlineMeters * scale)
                val endY = groundY - (swingImpact.carryDistanceMeters * scale)
                
                // Curve Control Point (Simple approx for visual nicety)
                // Start straight-ish, then curve.
                val controlX = startX // Starts vertically aligned
                val controlY = (startY + endY) / 2

                // Calculate Current Ball Position based on Progress
                val t = progress.value
                // Quadratic Bezier Formula: (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
                val invT = 1 - t
                val curX = (invT * invT * startX) + (2 * invT * t * controlX) + (t * t * endX)
                val curY = (invT * invT * startY) + (2 * invT * t * controlY) + (t * t * endY)
                
                // Draw Trail (Static full path for reference, alpha low?)
                // Or dynamic trail? "Draw the ball flight as a dynamic trail"
                // Let's draw path up to current t. This is hard with simple drawPath unless we sample points.
                // Simpler: Draw full path low alpha, draw active trail high alpha?
                // Or just draw dots?
                // Let's use simple sampling for the trail.
                // Draw Trail - Simplified for Debugging
                // Just draw a line from start to current
                path.reset()
                path.moveTo(startX, startY.toFloat())
                path.lineTo(curX.toFloat(), curY.toFloat())
                
                android.util.Log.v("SwingMaster", "FieldCanvas: Drawing Frame t=$t")
                
                drawPath(
                    path = path,
                    color = Color.Yellow,
                    style = Stroke(width = 5f)
                )

                // 2.5D Height Simulation
                // Parabolic height: H = 4 * maxH * t * (1-t)
                // Normalized height 0..1
                val heightFactor = 4 * t * (1 - t)
                val ballScale = 1f + (heightFactor.toFloat() * 1.5f) // Grow up to 2.5x
                
                // Shadow
                val shadowScale = 1f - (heightFactor.toFloat() * 0.3f)
                drawOval(
                    color = Color.Black.copy(alpha = 0.3f),
                    topLeft = Offset(curX.toFloat() - 8f*shadowScale, curY.toFloat() - 4f*shadowScale),
                    size = androidx.compose.ui.geometry.Size(16f*shadowScale, 8f*shadowScale)
                )

                // Ball
                drawCircle(
                    color = Color.White,
                    radius = 6f * ballScale,
                    center = Offset(curX.toFloat(), curY.toFloat())
                )
            }
            
            
            // Draw Start Marker (Tee) - Enhanced
            val teeSize = 25f 
            // Outer Glow
            drawCircle(
                color = Color.White.copy(alpha = 0.2f),
                radius = teeSize * 1.5f,
                center = Offset(centerX, groundY)
            )
            // Main Circle (Ball placeholder)
            drawCircle(
                color = Color.White,
                radius = teeSize,
                center = Offset(centerX, groundY),
                style = Stroke(width = 3f)
            )
            // Inner Dot (Tee itself)
            drawCircle(
                color = Color.White,
                radius = 6f,
                center = Offset(centerX, groundY)
            )
        }
        
        // Status Overlay
        androidx.compose.material3.Text(
            text = when(swingPhase) {
                SwingPhase.READY -> "READY\nDrag DOWN then flick UP!"
                SwingPhase.BACKSWING -> "BACKSWING"
                SwingPhase.DOWNSWING -> "SWING!"
                SwingPhase.IN_FLIGHT -> ""
                SwingPhase.IDLE -> "Touch to Start"
            },
            modifier = Modifier.align(androidx.compose.ui.Alignment.Center),
            color = Color.White,
            style = androidx.compose.material3.MaterialTheme.typography.displayMedium,
            textAlign = androidx.compose.ui.text.style.TextAlign.Center
        )
    }
}
