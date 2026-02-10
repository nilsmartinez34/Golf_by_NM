package com.example.golf_by_nm

import androidx.compose.animation.core.*
import androidx.compose.foundation.*
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.*
import androidx.compose.foundation.shape.*
import androidx.compose.material3.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.runtime.*
import androidx.compose.ui.*
import androidx.compose.ui.draw.scale
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.*
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.*
import java.text.DecimalFormat
import kotlin.math.*

@Composable
fun PuttingHeaderCell(text: String, width: Dp) {
    Text(
        text = text,
        color = Color.Gray,
        fontSize = 11.sp,
        fontWeight = FontWeight.Bold,
        modifier = Modifier.width(width),
        textAlign = TextAlign.Start
    )
}

@Composable
fun PuttingLabScreen(viewModel: GolfViewModel) {
    val uiState by viewModel.uiState.collectAsState()
    val ps = uiState.puttingState
    val df = remember { DecimalFormat("0.00") }
    val dfCm = remember { DecimalFormat("0") }

    Box(modifier = Modifier.fillMaxSize().background(Color(0xFF064E3B))) {
        PuttingCanvas(ps)

        // --- TOP BANNER (Results & Navigation) ---
        Surface(
            modifier = Modifier.align(Alignment.TopCenter).fillMaxWidth(),
            color = Color.Black.copy(0.6f)
        ) {
            Row(
                modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Back Button
                IconButton(
                    onClick = { viewModel.togglePuttingLab() },
                    modifier = Modifier.background(Color.White.copy(0.1f), CircleShape).size(36.dp)
                ) {
                    Icon(Icons.Default.ArrowBack, "Back", tint = Color.White, modifier = Modifier.size(20.dp))
                }
                Spacer(modifier = Modifier.width(12.dp))
                
                // Results Area (Center)
                Column(
                    modifier = Modifier.weight(1f),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    if (ps.isAimPointMode) {
                        Row(
                            horizontalArrangement = Arrangement.Center,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            val aimLabel = if (ps.recommendedAimX > 0) "RIGHT" else if (ps.recommendedAimX < 0) "LEFT" else "STRAIGHT"
                            MiniResult("AIM", "${df.format(kotlin.math.abs(ps.recommendedAimX))}m", aimLabel)
                            Spacer(modifier = Modifier.width(32.dp))
                            MiniResult("PLAY AS", "${df.format(ps.playAsDistance)}m", "EFFORT")
                        }
                        Spacer(modifier = Modifier.height(4.dp))
                        MiniResult("APEX", "${df.format(ps.apexX)} / ${df.format(ps.apexY)}", "X / Y")
                    } else {
                        Row(
                            horizontalArrangement = Arrangement.Center,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            MiniResult("TOTAL", df.format(ps.totalDistance), "M")
                            Spacer(modifier = Modifier.width(24.dp))
                            MiniResult("X", df.format(ps.finalX), "M")
                            Spacer(modifier = Modifier.width(24.dp))
                            MiniResult("Y", df.format(ps.finalY), "M")
                        }
                    }
                }
                
                // Empty spacer where actions were
                Spacer(modifier = Modifier.width(48.dp))
            }
        }

        // --- TOP OVERLAYS (ON THE MAT) ---
        // Top Left: Back (Optional if in banner) & Aim Point
        Column(
            modifier = Modifier.align(Alignment.TopStart).padding(top = 80.dp, start = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            IconButton(
                onClick = { viewModel.toggleAimPointMode() },
                modifier = Modifier.size(44.dp).background(if(ps.isAimPointMode) Color(0xFF4ADE80).copy(0.2f) else Color.Black.copy(0.3f), CircleShape)
            ) {
                Icon(if(ps.isAimPointMode) Icons.Default.CheckCircle else Icons.Default.Info, "Aim Point", tint = if(ps.isAimPointMode) Color(0xFF4ADE80) else Color.White, modifier = Modifier.size(24.dp))
            }
            Text("AIM POINT", color = if(ps.isAimPointMode) Color(0xFF4ADE80) else Color.White.copy(0.5f), fontSize = 8.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(top = 4.dp))
        }

        // Top Right: History
        Column(
            modifier = Modifier.align(Alignment.TopEnd).padding(top = 80.dp, end = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            IconButton(
                onClick = { viewModel.togglePuttingHistory() },
                modifier = Modifier.size(44.dp).background(Color.Black.copy(0.3f), CircleShape)
            ) {
                Icon(Icons.Default.List, "History", tint = Color.White, modifier = Modifier.size(24.dp))
            }
            Text("HISTORY", color = Color.White.copy(0.5f), fontSize = 8.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(top = 4.dp))
        }

        // --- SLOPES OVERLAY (ON THE MAT) ---
        Row(modifier = Modifier.fillMaxSize().padding(top = 80.dp, bottom = 120.dp)) {
            // Slope Y (Left Side)
            Column(
                modifier = Modifier.fillMaxHeight().width(80.dp).padding(start = 16.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Text("SLOPE Y", color = Color.White.copy(0.5f), fontSize = 10.sp, fontWeight = FontWeight.Bold)
                IconButton(onClick = { viewModel.adjustSlopeY(1f) }, modifier = Modifier.size(40.dp).background(Color.Black.copy(0.3f), RoundedCornerShape(8.dp))) {
                    Text("+", color = Color.White, fontSize = 20.sp, fontWeight = FontWeight.Bold)
                }
                Text("${if(ps.slopeY > 0) "+" else ""}${df.format(ps.slopeY)}°", color = Color(0xFF4ADE80), fontWeight = FontWeight.Black, fontSize = 16.sp, modifier = Modifier.padding(vertical = 12.dp))
                IconButton(onClick = { viewModel.adjustSlopeY(-1f) }, modifier = Modifier.size(40.dp).background(Color.Black.copy(0.3f), RoundedCornerShape(8.dp))) {
                    Text("-", color = Color.White, fontSize = 20.sp, fontWeight = FontWeight.Bold)
                }
            }
            
            Spacer(modifier = Modifier.weight(1f))
            
            // Slope X (Right Side)
            Column(
                modifier = Modifier.fillMaxHeight().width(80.dp).padding(end = 16.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center
            ) {
                Text("SLOPE X", color = Color.White.copy(0.5f), fontSize = 10.sp, fontWeight = FontWeight.Bold)
                IconButton(onClick = { viewModel.adjustSlopeX(1f) }, modifier = Modifier.size(40.dp).background(Color.Black.copy(0.3f), RoundedCornerShape(8.dp))) {
                    Text("+", color = Color.White, fontSize = 20.sp, fontWeight = FontWeight.Bold)
                }
                Text("${df.format(ps.slopeX)}°", color = Color(0xFF4ADE80), fontWeight = FontWeight.Black, fontSize = 16.sp, modifier = Modifier.padding(vertical = 12.dp))
                IconButton(onClick = { viewModel.adjustSlopeX(-1f) }, modifier = Modifier.size(40.dp).background(Color.Black.copy(0.3f), RoundedCornerShape(8.dp))) {
                    Text("-", color = Color.White, fontSize = 20.sp, fontWeight = FontWeight.Bold)
                }
            }
        }

        // --- BOTTOM CONTROLS (ON THE MAT) ---
        Column(
            modifier = Modifier.align(Alignment.BottomCenter).fillMaxWidth().padding(bottom = 60.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            // Slider Row
            Row(
                modifier = Modifier.padding(horizontal = 32.dp).fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(if(ps.isAimPointMode) "TARGET" else "POWER", color = Color.White, fontSize = 12.sp, fontWeight = FontWeight.Black, modifier = Modifier.width(60.dp))
                Slider(
                    value = if(ps.isAimPointMode) ps.holeDistance else ps.powerMeters,
                    onValueChange = { if(ps.isAimPointMode) viewModel.updateHoleDistance(it) else viewModel.updatePuttingPower(it) },
                    valueRange = 1f..20f,
                    modifier = Modifier.weight(1f),
                    colors = SliderDefaults.colors(thumbColor = Color.White, activeTrackColor = if(ps.isAimPointMode) Color(0xFF3B82F6) else Color(0xFF4ADE80))
                )
                Text("${df.format(if(ps.isAimPointMode) ps.holeDistance else ps.powerMeters)}m", color = Color.White, fontSize = 14.sp, fontWeight = FontWeight.Bold, modifier = Modifier.width(60.dp), textAlign = TextAlign.End)
            }
            
            Spacer(modifier = Modifier.height(8.dp))
            
            // Buttons Row
            Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                Button(onClick = { viewModel.resetPutting() }, colors = ButtonDefaults.buttonColors(containerColor = Color.Black.copy(0.4f)), shape = RoundedCornerShape(8.dp)) {
                    Icon(Icons.Default.Refresh, null, modifier = Modifier.size(18.dp))
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("RESET")
                }
                Button(
                    onClick = { viewModel.runPuttingSimulation() }, 
                    colors = ButtonDefaults.buttonColors(containerColor = Color(0xFF10B981)), 
                    shape = RoundedCornerShape(8.dp),
                    modifier = Modifier.height(44.dp).width(140.dp),
                    enabled = !ps.isRolling && !ps.isAimPointMode
                ) {
                    Icon(Icons.Default.PlayArrow, null)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("PUTT", fontWeight = FontWeight.Bold)
                }
            }
        }

        // --- BOTTOM BANNER (Status Info / Secondary Data) ---
        Surface(
            modifier = Modifier.align(Alignment.BottomCenter).fillMaxWidth(),
            color = Color.Black.copy(0.7f)
        ) {
            Row(
                modifier = Modifier.padding(horizontal = 24.dp, vertical = 6.dp),
                horizontalArrangement = Arrangement.Center
            ) {
                Text(
                    text = if(ps.isAimPointMode) "AUTO-SOLUTION ACTIVE" else if(ps.isRolling) "ROLLING..." else "READY FOR PUTT",
                    color = if(ps.isRolling) Color(0xFFFACC15) else Color.White.copy(0.7f),
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Bold,
                    letterSpacing = 1.sp
                )
            }
        }
        
        if (uiState.isPuttingHistoryOpen) {
            PuttingHistoryDialog(uiState, viewModel)
        }
    }
}

@Composable
fun MiniResult(label: String, value: String, unit: String) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(label, color = Color.Gray, fontSize = 9.sp, fontWeight = FontWeight.Bold)
        Row(verticalAlignment = Alignment.Bottom) {
            Text(value, color = Color.White, fontSize = 18.sp, fontWeight = FontWeight.Black)
            Text(unit, color = Color.Gray, fontSize = 9.sp, modifier = Modifier.padding(start = 2.dp, bottom = 2.dp))
        }
    }
}

@Composable
fun ResultItem(label: String, value: String, unit: String) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(label, color = Color.Gray, fontSize = 10.sp, fontWeight = FontWeight.Bold)
        Row(verticalAlignment = Alignment.Bottom) {
            Text(value, color = Color.White, fontSize = 24.sp, fontWeight = FontWeight.Black)
            Text(unit, color = Color.Gray, fontSize = 10.sp, modifier = Modifier.padding(start = 2.dp, bottom = 4.dp))
        }
    }
}

@Composable
fun PuttingCanvas(ps: PuttingState) {
    val ballProgress = remember { Animatable(0f) }

    LaunchedEffect(ps.trajectory) {
        if (ps.trajectory.isNotEmpty()) {
            ballProgress.snapTo(0f)
            ballProgress.animateTo(
                targetValue = 1f,
                animationSpec = tween(
                    durationMillis = (ps.trajectory.size * 10).coerceAtLeast(1000),
                    easing = LinearEasing
                )
            )
        }
    }

    Canvas(modifier = Modifier.fillMaxSize()) {
        val w = size.width
        val h = size.height
        val scale = 80.dp.toPx()
        val center = Offset(w / 2f, h * 0.7f)

        // Grid
        val gridColorSub = Color.White.copy(0.05f)
        val gridColorMain = Color.White.copy(0.15f)
        for (i in -2..25) {
            val yPos = center.y - (i * scale)
            val isMain = i % 1 == 0
            drawLine(color = if (isMain) gridColorMain else gridColorSub, start = Offset(0f, yPos), end = Offset(w, yPos), strokeWidth = if (isMain) 1.dp.toPx() else 0.5.dp.toPx())
            if (isMain) {
                for (j in 1..9) {
                    val ySub = yPos - (j * scale / 10f)
                    drawLine(gridColorSub, Offset(0f, ySub), Offset(w, ySub), 0.5.dp.toPx())
                }
            }
        }
        for (i in -10..10) {
            val xPos = center.x + (i * scale)
            val isMain = i % 1 == 0
            drawLine(color = if (isMain) gridColorMain else gridColorSub, start = Offset(xPos, 0f), end = Offset(xPos, h), strokeWidth = if (isMain) 1.dp.toPx() else 0.5.dp.toPx())
        }

        // Aim line
        val aimPath = Path().apply {
            moveTo(center.x, center.y)
            lineTo(center.x, center.y - (ps.powerMeters * scale))
        }
        drawPath(path = aimPath, color = Color.White.copy(0.3f), style = Stroke(width = 2.dp.toPx(), pathEffect = PathEffect.dashPathEffect(floatArrayOf(10f, 10f))))

        // Ghost Path
        if (ps.ghostTrajectory.isNotEmpty()) {
            val ghostPath = Path()
            ps.ghostTrajectory.forEachIndexed { index, p ->
                val px = center.x + (p.x.toFloat() * scale)
                val py = center.y - (p.y.toFloat() * scale)
                if (index == 0) ghostPath.moveTo(px, py) else ghostPath.lineTo(px, py)
            }
            drawPath(ghostPath, Color.White.copy(0.15f), style = Stroke(width = 1.5.dp.toPx()))
        }

        // Real Path
        if (ps.trajectory.isNotEmpty()) {
            val visiblePoints = (ps.trajectory.size * ballProgress.value).toInt().coerceAtLeast(1)
            for (i in 0 until visiblePoints - 1) {
                val p1 = ps.trajectory[i]
                val p2 = ps.trajectory[i+1]
                val p1x = center.x + (p1.x.toFloat() * scale)
                val p1y = center.y - (p1.y.toFloat() * scale)
                val p2x = center.x + (p2.x.toFloat() * scale)
                val p2y = center.y - (p2.y.toFloat() * scale)
                val pointAlpha = 1.0f - (i.toFloat() / ps.trajectory.size.toFloat() * 0.7f)
                drawLine(color = Color.White.copy(alpha = pointAlpha), start = Offset(p1x, p1y), end = Offset(p2x, p2y), strokeWidth = 2.dp.toPx())
            }
            val currentIdx = (visiblePoints - 1).coerceAtMost(ps.trajectory.size - 1)
            val p = ps.trajectory[currentIdx]
            val px = center.x + (p.x.toFloat() * scale)
            val py = center.y - (p.y.toFloat() * scale)
            drawCircle(Color.White, radius = 6.dp.toPx(), center = Offset(px, py))
            drawCircle(Color.Black.copy(0.2f), radius = 6.dp.toPx(), center = Offset(px, py), style = Stroke(1.dp.toPx()))
        } else {
            drawCircle(Color.White, radius = 6.dp.toPx(), center = center)
        }

        // --- HOLE & AIM POINT DRAWING ---
        if (ps.isAimPointMode) {
            val holePx = ps.holeDistance * scale
            val holeYOff = center.y - holePx
            
            // Draw Hole (10.8cm diameter = 5.4cm radius)
            val holeRadiusPx = (0.054f * scale)
            drawCircle(Color.Black.copy(0.5f), radius = holeRadiusPx, center = Offset(center.x, holeYOff))
            drawCircle(Color.White.copy(0.3f), radius = holeRadiusPx, center = Offset(center.x, holeYOff), style = Stroke(1.5.dp.toPx()))
            
            // Recommended Aim Point Marker (Phantom Cross at Hole Y)
            if (ps.recommendedAimX != 0.0 && !ps.isRolling) {
                val aimX = center.x + (ps.recommendedAimX.toFloat() * scale)
                val crossSize = 6.dp.toPx()
                drawLine(Color(0xFF4ADE80).copy(0.6f), Offset(aimX - crossSize, holeYOff), Offset(aimX + crossSize, holeYOff), 2.dp.toPx())
                drawLine(Color(0xFF4ADE80).copy(0.6f), Offset(aimX, holeYOff - crossSize), Offset(aimX, holeYOff + crossSize), 2.dp.toPx())
                drawCircle(Color(0xFF4ADE80).copy(0.2f), radius = 4.dp.toPx(), center = Offset(aimX, holeYOff))
            }

            // Apex Marker
            if (ps.apexX != 0.0 || ps.apexY != 0.0) {
                val ax = center.x + (ps.apexX.toFloat() * scale)
                val ay = center.y - (ps.apexY.toFloat() * scale)
                drawCircle(Color(0xFFFACC15), radius = 3.dp.toPx(), center = Offset(ax, ay))
                drawCircle(Color.White.copy(0.5f), radius = 5.dp.toPx(), center = Offset(ax, ay), style = Stroke(1.dp.toPx()))
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PuttingHistoryDialog(uiState: GolfUiState, viewModel: GolfViewModel) {
    AlertDialog(
        onDismissRequest = { viewModel.togglePuttingHistory() },
        properties = androidx.compose.ui.window.DialogProperties(usePlatformDefaultWidth = false),
        modifier = Modifier.fillMaxSize()
    ) {
        Surface(modifier = Modifier.fillMaxSize(), color = Color(0xFF0F172A)) {
            Column(modifier = Modifier.fillMaxSize()) {
                Row(modifier = Modifier.fillMaxWidth().background(Color(0xFF1E293B)).padding(8.dp), verticalAlignment = Alignment.CenterVertically) {
                    IconButton(onClick = { viewModel.togglePuttingHistory() }) { Icon(Icons.Default.Close, "Close", tint = Color.White) }
                    Text("PUTTING HISTORY", color = Color.White, fontWeight = FontWeight.Bold, fontSize = 18.sp, modifier = Modifier.weight(1f))
                    IconButton(onClick = { viewModel.clearPuttingHistory() }) { Icon(Icons.Default.Refresh, "Clear", tint = Color.Red.copy(0.7f)) }
                }
                if (uiState.puttingHistory.isEmpty()) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) { Text("No putts recorded yet.", color = Color.Gray) }
                } else {
                    Row(modifier = Modifier.fillMaxWidth().background(Color(0xFF334155)).horizontalScroll(rememberScrollState()).padding(vertical = 12.dp, horizontal = 16.dp), verticalAlignment = Alignment.CenterVertically) {
                        PuttingHeaderCell("Time", 70.dp)
                        PuttingHeaderCell("Power", 60.dp)
                        PuttingHeaderCell("SlopeX", 70.dp)
                        PuttingHeaderCell("SlopeY", 70.dp)
                        PuttingHeaderCell("Total", 70.dp)
                        PuttingHeaderCell("Final X", 70.dp)
                        PuttingHeaderCell("Final Y", 70.dp)
                        PuttingHeaderCell("Residual", 70.dp)
                        Spacer(modifier = Modifier.width(48.dp))
                    }
                    LazyColumn(modifier = Modifier.fillMaxSize()) {
                        items(uiState.puttingHistory.reversed()) { shot -> PuttingHistoryRow(shot, viewModel) }
                    }
                }
            }
        }
    }
}

@Composable
fun PuttingHistoryRow(shot: PuttingHistoryEntry, viewModel: GolfViewModel) {
    val df = remember { DecimalFormat("0.00") }
    Row(modifier = Modifier.fillMaxWidth().background(if (shot.id % 2 == 0L) Color.Transparent else Color.White.copy(0.03f)).horizontalScroll(rememberScrollState()).padding(horizontal = 16.dp, vertical = 8.dp), verticalAlignment = Alignment.CenterVertically) {
        Text(shot.getFormattedTime().take(5), color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text("${df.format(shot.powerMeters)}m", color = Color(0xFF4ADE80), fontWeight = FontWeight.Bold, fontSize = 13.sp, modifier = Modifier.width(60.dp))
        Text("${df.format(shot.slopeXDeg)}°", color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text("${df.format(shot.slopeYDeg)}°", color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text(df.format(shot.totalDistance), color = Color(0xFF4ADE80), fontWeight = FontWeight.Bold, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text(df.format(shot.finalX), color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text(df.format(shot.finalY), color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text(df.format(shot.residualSpeed), color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        IconButton(onClick = { viewModel.deletePuttingShotById(shot.id) }, modifier = Modifier.size(24.dp)) { Icon(Icons.Default.Delete, "Delete", tint = Color.Red.copy(0.5f), modifier = Modifier.size(16.dp)) }
    }
}
