package com.example.golf_by_nm

import androidx.compose.animation.core.*
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.*
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.IntSize
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import java.text.DecimalFormat
import kotlin.math.*
import com.example.golf_by_nm.core.Point

@Composable
fun GolfSwingScreen(viewModel: GolfViewModel) {
    val uiState by viewModel.uiState.collectAsState()
    val density = LocalDensity.current.density
    
    var localSwipePoints by remember { mutableStateOf<List<Offset>>(emptyList()) }
    var swipeStartTime by remember { mutableStateOf(0L) }
    val flightProgress = remember { Animatable(0f) }

    LaunchedEffect(uiState.trajectoryResult) {
        uiState.trajectoryResult?.let { result ->
            flightProgress.snapTo(0f)
            flightProgress.animateTo(
                targetValue = 1f,
                animationSpec = tween(
                    durationMillis = (result.flightTimeSeconds * 1000).toInt().coerceAtLeast(1500),
                    easing = LinearOutSlowInEasing
                )
            )
        }
    }

    Box(modifier = Modifier.fillMaxSize().background(Color(0xFF0F172A))) {
        // --- LAYER 1: MAIN LAYOUT (Zones 1, 2, 3) ---
        Column(modifier = Modifier.fillMaxSize()) {
            // --- ZONE 1: TOP METRICS (12%) ---
            Box(
                modifier = Modifier.weight(0.12f).fillMaxWidth().background(Color(0xFF0C1D3F)),
                contentAlignment = Alignment.Center
            ) {
                TopCenterMetrics(uiState, flightProgress.value)
            }

            // --- ZONE 2: GAMEPLAY (70%) ---
            Box(
                modifier = Modifier
                    .weight(0.70f)
                    .fillMaxWidth()
                    .pointerInput(uiState.swingMode) {
                        detectDragGestures(
                            onDragStart = { offset ->
                                swipeStartTime = System.currentTimeMillis()
                                localSwipePoints = listOf(offset)
                                viewModel.onSwingStart()
                            },
                            onDrag = { change, _ ->
                                change.consume()
                                localSwipePoints = localSwipePoints + change.position
                                if (uiState.swingMode == SwingMode.SCHOOL) {
                                    val start = localSwipePoints.first()
                                    viewModel.updateSchoolModeInput(
                                        (change.position.y - start.y).coerceAtLeast(0f),
                                        (change.position.x - start.x),
                                        size.height.toFloat(),
                                        size.width.toFloat()
                                    )
                                }
                            },
                            onDragEnd = {
                                val pointsAsCustomPoints = localSwipePoints.map { Point(it.x, it.y) }
                                if (uiState.swingMode == SwingMode.SCHOOL) {
                                    viewModel.executeSchoolSwing()
                                } else {
                                    viewModel.onSwing(
                                        pointsAsCustomPoints,
                                        System.currentTimeMillis() - swipeStartTime,
                                        density,
                                        uiState.backswingPathAngle,
                                        size.width.toFloat()
                                    )
                                }
                            }
                        )
                    }
            ) {
                val context = androidx.compose.ui.platform.LocalContext.current
                val imageBitmap = remember(uiState.selectedBackground) {
                    try {
                        android.graphics.BitmapFactory.decodeResource(context.resources, uiState.selectedBackground.resourceId)?.asImageBitmap()
                    } catch (e: Exception) { null }
                }

                SwingCanvas(uiState, imageBitmap, flightProgress.value)

                // HUDs at bottom corners
                Row(
                    modifier = Modifier
                        .align(Alignment.BottomStart)
                        .fillMaxWidth()
                        .padding(12.dp),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    PerformanceHUD(uiState)
                    ImpactHUD(uiState)
                }

                // SCHOOL MODE OVERLAY (Live Gauges)
                if (uiState.swingMode == SwingMode.SCHOOL && uiState.isSwinging) {
                    SchoolModeOverlay(uiState)
                }

                // --- FLOATING CONTROLS (Settings & History) ---
                Row(
                    modifier = Modifier
                        .align(Alignment.TopCenter)
                        .padding(top = 12.dp),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Surface(
                        onClick = { viewModel.toggleSettings() },
                        color = Color.Black.copy(0.4f),
                        shape = CircleShape,
                        modifier = Modifier.size(40.dp)
                    ) {
                        Icon(Icons.Default.Settings, "Config", tint = Color.White, modifier = Modifier.padding(10.dp))
                    }
                    Surface(
                        onClick = { viewModel.toggleHistory() },
                        color = Color.Black.copy(0.4f),
                        shape = CircleShape,
                        modifier = Modifier.size(40.dp)
                    ) {
                        Icon(Icons.Default.List, "Historique", tint = Color.White, modifier = Modifier.padding(10.dp))
                    }
                    
                    Surface(
                        onClick = { viewModel.togglePuttingLab() },
                        color = Color.Black.copy(0.4f),
                        shape = CircleShape,
                        modifier = Modifier.size(40.dp)
                    ) {
                        Icon(Icons.Default.PlayArrow, "Putting Lab", tint = Color(0xFF4ADE80), modifier = Modifier.padding(10.dp))
                    }
                }
            }

            // --- ZONE 3: CLUBS & BALL (18%) ---
            Row(
                modifier = Modifier.weight(0.18f).fillMaxWidth().background(Color(0xFF1E293B)).padding(12.dp),
                horizontalArrangement = Arrangement.spacedBy(16.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Box(modifier = Modifier.weight(1f)) { ClubHorizontalBar(uiState, viewModel) }
                InteractiveImpactBall(uiState, viewModel)
            }
        }
        
        // --- LAYER 2.5: PUTTING LAB ---
        if (uiState.isPuttingLabOpen) {
            PuttingLabScreen(viewModel)
        }
        
        // --- LAYER 3: DIALOGS ---
        if (uiState.isSettingsOpen) {
            SettingsDialog(uiState, viewModel)
        }
        
        if (uiState.isHistoryOpen) {
            ShotHistoryDialog(uiState, viewModel)
        }
    }
}

@Composable
fun SwingCanvas(uiState: GolfUiState, background: ImageBitmap?, flightProgress: Float) {
    Canvas(modifier = Modifier.fillMaxSize()) {
        val w = size.width
        val h = size.height
        val horizonY = h * 0.38f
        val groundStartY = h * 0.88f
        val k = 0.0052f // Compression de distance
        val groundRange = groundStartY - horizonY

        background?.let { drawImage(it, dstSize = IntSize(w.toInt(), h.toInt())) }

        uiState.trajectoryResult?.let { result ->
            val pathPoints = result.path
            val pointsCount = (pathPoints.size * flightProgress).toInt().coerceAtLeast(1)
            val tracerPath = Path()

            for (i in 0 until pointsCount.coerceAtMost(pathPoints.size - 1)) {
                val p = pathPoints[i]
                val dist = p.x.toFloat()
                val scale = exp(-k * dist)

                // CORRECTION GLITCH : Interpolation fluide au lieu d'une rupture à 200m
                val liftTransition = (dist / 250f).coerceIn(0f, 1f)
                val liftFactor = 1.2f - (0.4f * liftTransition) 
                
                // CORRECTION HAUTEUR : Multiplicateur DOUBLÉ (19f) pour un arc beaucoup plus haut
                val screenX = (w * 0.5f) + (p.z.toFloat() * scale * 15f)
                val screenY = (horizonY + (groundRange * scale)) - (p.y.toFloat() * scale * 19.0f * liftFactor)

                if (i == 0) tracerPath.moveTo(screenX, screenY) else tracerPath.lineTo(screenX, screenY)

                if (i == pointsCount - 2) {
                    drawCircle(Color.White, radius = (5.dp.toPx() * scale).coerceAtLeast(1.5f), center = Offset(screenX, screenY))
                }
            }
            drawPath(tracerPath, Color.White.copy(0.7f), style = Stroke(2.dp.toPx()))
        }

        // --- BALLE AU SOL AVEC ALVÉOLES ---
        if (!uiState.isSwinging && uiState.trajectoryResult == null) {
            val ballCenter = Offset(w * 0.5f, groundStartY)
            val ballRadius = 10.dp.toPx()
            
            // Corps de la balle
            drawCircle(Color.White, radius = ballRadius, center = ballCenter)
            
            // Alvéoles (Dessin de petits cercles grisés pour la texture)
            val dimpleColor = Color.LightGray.copy(alpha = 0.6f)
            val dimpleSize = 1.8.dp.toPx()
            val offsets = listOf(
                Offset(-0.5f, -0.4f), Offset(0f, -0.6f), Offset(0.5f, -0.4f),
                Offset(-0.6f, 0f), Offset(0f, 0f), Offset(0.6f, 0f),
                Offset(-0.5f, 0.4f), Offset(0f, 0.6f), Offset(0.5f, 0.4f)
            )
            offsets.forEach { o ->
                drawCircle(dimpleColor, radius = dimpleSize, center = ballCenter + Offset(o.x * ballRadius, o.y * ballRadius))
            }
        }
    }
}

// --- LES AUTRES COMPOSANTS (HUD, METRICS) GARDENT LEUR LOGIQUE ---
@Composable
fun TopCenterMetrics(uiState: GolfUiState, progress: Float) {
    val df = remember { DecimalFormat("0.0") }
    val res = uiState.trajectoryResult
    Row(
        modifier = Modifier.background(Color.Black.copy(0.5f), RoundedCornerShape(8.dp)).padding(horizontal = 16.dp, vertical = 6.dp),
        horizontalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        MetricItem("CARRY", if (res != null) df.format(res.carryDistance * progress) else "--", "M")
        MetricItem("TOTAL", if (res != null) df.format(res.totalDistance * progress) else "--", "M")
        MetricItem("SIDE", if (res != null) df.format(abs(res.lateralDeviation * progress)) else "--", if(res != null && res.lateralDeviation < 0) "L" else "R")
        MetricItem("APEX", if (res != null) df.format(res.maxHeight * progress) else "--", "M")
    }
}

@Composable
fun MetricItem(label: String, value: String, unit: String) {
    Column(horizontalAlignment = Alignment.CenterHorizontally) {
        Text(label, color = Color.Gray, fontSize = 10.sp, fontWeight = FontWeight.Bold)
        Row(verticalAlignment = Alignment.Bottom) {
            Text(value, color = Color.White, fontSize = 26.sp, fontWeight = FontWeight.Black)
            Text(unit, color = Color.Gray, fontSize = 10.sp, modifier = Modifier.padding(start = 2.dp, bottom = 4.dp))
        }
    }
}

@Composable
fun PerformanceHUD(uiState: GolfUiState) {
    val df = remember { DecimalFormat("0.0") }
    val res = uiState.trajectoryResult
    Column(modifier = Modifier.background(Color.Black.copy(0.5f), RoundedCornerShape(8.dp)).padding(10.dp)) {
        Text("PERFORMANCE", color = Color.White.copy(0.5f), fontSize = 10.sp, fontWeight = FontWeight.Bold)
        ImpactHudItem("CLUB", if(res != null) df.format(res.clubHeadSpeedMph) else "--", "MPH")
        ImpactHudItem("BALL", if(res != null) df.format(res.ballSpeedMph) else "--", "MPH")
        ImpactHudItem("SMASH", if(res != null) df.format(res.smashFactor) else "--", "")
    }
}

@Composable
fun ImpactHUD(uiState: GolfUiState) {
    val df = remember { DecimalFormat("0.0") }
    val res = uiState.trajectoryResult
    Column(modifier = Modifier.background(Color.Black.copy(0.5f), RoundedCornerShape(8.dp)).padding(10.dp)) {
        Text("IMPACT DATA", color = Color.White.copy(0.5f), fontSize = 10.sp, fontWeight = FontWeight.Bold)
        ImpactHudItem("PATH", if(res != null) "${df.format(res.swingPath)}°" else "--", "")
        ImpactHudItem("FACE", "${df.format(uiState.clubFaceAngle)}°", "")
        ImpactHudItem("ATTACK", "${df.format(uiState.attackAngle)}°", "")
    }
}

@Composable
fun ImpactHudItem(label: String, value: String, unit: String) {
    Row(modifier = Modifier.padding(vertical = 2.dp), verticalAlignment = Alignment.Bottom) {
        Text(label, color = Color.Gray, fontSize = 9.sp, modifier = Modifier.width(45.dp))
        Text(value, color = Color.White, fontSize = 16.sp, fontWeight = FontWeight.Bold)
        if(unit.isNotEmpty()) Text(unit, color = Color.Gray, fontSize = 8.sp, modifier = Modifier.padding(start = 2.dp))
    }
}

@Composable
fun ClubHorizontalBar(uiState: GolfUiState, viewModel: GolfViewModel) {
    val scrollState = rememberScrollState()
    Row(modifier = Modifier.horizontalScroll(scrollState).padding(vertical = 4.dp)) {
        GolfViewModel.availableClubs.forEach { club ->
            val isSelected = uiState.selectedClub.name == club.name
            Box(
                modifier = Modifier.padding(horizontal = 6.dp).size(45.dp)
                    .background(if(isSelected) Color(0xFF22C55E) else Color.White.copy(0.1f), RoundedCornerShape(8.dp))
                    .clickable { viewModel.onClubSelected(club) },
                contentAlignment = Alignment.Center
            ) {
                Text(club.name.take(2), color = if(isSelected) Color.Black else Color.White, fontWeight = FontWeight.Bold, fontSize = 12.sp)
            }
        }
    }
}

@Composable
fun InteractiveImpactBall(uiState: GolfUiState, viewModel: GolfViewModel) {
    Box(
        modifier = Modifier
            .size(100.dp)
            .background(Color.White, CircleShape)
            .border(1.dp, Color.LightGray, CircleShape)
            .pointerInput(Unit) {
                detectDragGestures { change, _ ->
                    change.consume()
                    // Normalize drag position to 0..1 relative to the ball size
                    val normX = (change.position.x / size.width).coerceIn(0f, 1f)
                    val normY = (change.position.y / size.height).coerceIn(0f, 1f)
                    viewModel.updateStrikePosition(Offset(normX, normY))
                }
            }
    ) {
        Canvas(modifier = Modifier.fillMaxSize()) {
            val r = size.minDimension / 2
            val center = Offset(size.width / 2, size.height / 2)
            
            // 1. DIMPLE PATTERN (Realistic Alvéoles)
            val dimpleColor = Color.LightGray.copy(alpha = 0.5f)
            val dimpleRadius = 4.dp.toPx()
            val spacing = dimpleRadius * 2.2f

            for (alpha in 0 until 9) {
                val rowOffset = if (alpha % 2 == 0) 0f else spacing / 2f
                for (beta in 0 until 9) {
                    val dx = (beta * spacing + rowOffset) - (4.5f * spacing)
                    val dy = (alpha * spacing) - (4.5f * spacing)

                    if (kotlin.math.sqrt(dx*dx + dy*dy) < r - 4.dp.toPx()) {
                        drawCircle(dimpleColor, radius = dimpleRadius, center = center + Offset(dx, dy))
                        drawCircle(Color.White.copy(alpha = 0.6f), radius = dimpleRadius * 0.7f, center = center + Offset(dx - 1.dp.toPx(), dy - 1.dp.toPx()))
                    }
                }
            }

            // 2. TRIPLE TRACK PATH (Red/Blue Lines)
            val blueTrackWidth = 1.dp.toPx()
            val redTrackWidth = 2.5.dp.toPx()
            val trackGap = 12.dp.toPx()

            drawLine(Color(0xFF1D4ED8), start = Offset(size.width/2 - trackGap, 0f), end = Offset(size.width/2 - trackGap, size.height), strokeWidth = blueTrackWidth)
            drawLine(Color(0xFF1D4ED8), start = Offset(size.width/2 + trackGap, 0f), end = Offset(size.width/2 + trackGap, size.height), strokeWidth = blueTrackWidth)
            drawLine(Color.Red, start = Offset(size.width/2, 0f), end = Offset(size.width/2, size.height), strokeWidth = redTrackWidth)

            // 3. STRIKE INDICATOR (Center Target)
            val strikeX = uiState.strikePosition.x * size.width
            val strikeY = uiState.strikePosition.y * size.height

            drawCircle(Color.Red, radius = 5.dp.toPx(), center = Offset(strikeX, strikeY))
            drawCircle(Color.Red.copy(alpha = 0.3f), radius = 10.dp.toPx(), center = Offset(strikeX, strikeY))

            // Subtle Crosshair
            drawLine(Color.Black.copy(alpha = 0.1f), start = Offset(0f, size.height/2), end = Offset(size.width, size.height/2))
            drawLine(Color.Black.copy(alpha = 0.1f), start = Offset(size.width/2, 0f), end = Offset(size.width/2, size.height))
        }
    }
}
@Composable
fun SettingsDialog(uiState: GolfUiState, viewModel: GolfViewModel) {
    val df = remember { DecimalFormat("0.0") }
    AlertDialog(
        onDismissRequest = { viewModel.toggleSettings() },
        containerColor = Color(0xFF1E293B),
        title = { Text("SIMULATOR SETTINGS", color = Color.White, fontWeight = FontWeight.Bold) },
        text = {
            Column(modifier = Modifier.fillMaxWidth().padding(top = 8.dp)) {
                // Speed Factor
                Text("SPEED BOOST (X)", color = Color.Gray, fontSize = 10.sp, fontWeight = FontWeight.Bold)
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Slider(
                        value = uiState.speedFactor,
                        onValueChange = { viewModel.updateSpeedFactor(it) },
                        valueRange = 0.5f..2.0f,
                        modifier = Modifier.weight(1f),
                        colors = SliderDefaults.colors(thumbColor = Color(0xFF4ADE80), activeTrackColor = Color(0xFF4ADE80))
                    )
                    Text("x${df.format(uiState.speedFactor)}", color = Color.White, modifier = Modifier.width(40.dp), textAlign = TextAlign.End, fontSize = 12.sp)
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Angle Limit
                Text("ANGLE TOLERANCE (\u00b1\u00b0)", color = Color.Gray, fontSize = 10.sp, fontWeight = FontWeight.Bold)
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Slider(
                        value = uiState.angleLimit,
                        onValueChange = { viewModel.updateAngleLimit(it) },
                        valueRange = 2f..25f,
                        modifier = Modifier.weight(1f),
                        colors = SliderDefaults.colors(thumbColor = Color(0xFF4ADE80), activeTrackColor = Color(0xFF4ADE80))
                    )
                    Text("${df.format(uiState.angleLimit)}\u00b0", color = Color.White, modifier = Modifier.width(40.dp), textAlign = TextAlign.End, fontSize = 12.sp)
                }

                Spacer(modifier = Modifier.height(8.dp))
                Text("Higher tolerance allows for more extreme draws/slices.", color = Color.Gray.copy(alpha = 0.6f), fontSize = 10.sp)

                Spacer(modifier = Modifier.height(16.dp))

                // Background Selection
                Text("BACKGROUND", color = Color.Gray, fontSize = 10.sp, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(8.dp))
                
                Column(modifier = Modifier.fillMaxWidth()) {
                    BackgroundType.values().forEach { backgroundType ->
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .clickable { viewModel.updateBackgroundType(backgroundType) }
                                .padding(vertical = 4.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            RadioButton(
                                selected = uiState.selectedBackground == backgroundType,
                                onClick = { viewModel.updateBackgroundType(backgroundType) },
                                colors = RadioButtonDefaults.colors(
                                    selectedColor = Color(0xFF4ADE80),
                                    unselectedColor = Color.Gray
                                )
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(
                                backgroundType.displayName,
                                color = Color.White,
                                fontSize = 14.sp
                            )
                        }
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Swing Mode Toggle
                Text("SWING MODE", color = Color.Gray, fontSize = 10.sp, fontWeight = FontWeight.Bold)
                Spacer(modifier = Modifier.height(8.dp))
                Row(
                    modifier = Modifier.fillMaxWidth().clickable { viewModel.toggleSwingMode() },
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        if (uiState.swingMode == SwingMode.DEFAULT) "PRO (Swipe)" else "SCHOOL (Guide)",
                        color = Color.White,
                        fontSize = 14.sp
                    )
                    Spacer(modifier = Modifier.weight(1f))
                    Switch(
                        checked = uiState.swingMode == SwingMode.SCHOOL,
                        onCheckedChange = { viewModel.toggleSwingMode() },
                        colors = SwitchDefaults.colors(checkedThumbColor = Color(0xFF4ADE80), checkedTrackColor = Color(0xFF225533))
                    )
                }
            }
        },
        confirmButton = {
            TextButton(onClick = { viewModel.toggleSettings() }) {
                Text("CLOSE", color = Color(0xFF4ADE80), fontWeight = FontWeight.Bold)
            }
        }
    )
}

@Composable
fun SchoolModeOverlay(uiState: GolfUiState) {
    val df = remember { DecimalFormat("0.0") }
    
    Box(modifier = Modifier.fillMaxSize()) {
        // 1. SPEED GAUGE (Right Vertical Bar)
        Column(
            modifier = Modifier
                .align(Alignment.CenterEnd)
                .padding(end = 40.dp)
                .width(16.dp)
                .fillMaxHeight(0.42f)
                .background(Color.Black.copy(alpha = 0.3f), RoundedCornerShape(8.dp))
                .border(1.dp, Color.White.copy(alpha = 0.3f), RoundedCornerShape(8.dp)),
            verticalArrangement = Arrangement.Bottom
        ) {
            // Fill based on power
            Box(
                 modifier = Modifier
                    .fillMaxWidth()
                    .fillMaxHeight(uiState.schoolPower)
                    .background(
                        brush = Brush.verticalGradient(
                            colors = listOf(Color(0xFFEF4444), Color(0xFFEAB308), Color(0xFF22C55E))
                        ),
                        shape = RoundedCornerShape(8.dp)
                    )
            )
        }

        // Speed Label (Floating near the top of the bar)
        Text(
            text = "${df.format(uiState.schoolCurrentSpeed)} MPH",
            color = Color.White,
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold,
            modifier = Modifier
                .align(Alignment.CenterEnd)
                .padding(end = 64.dp, bottom = 200.dp) // Adjust based on layout
        )

        // 2. PATH GAUGE (Bottom Horizontal Arc/Bar)
        Box(
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(bottom = 40.dp)
                .width(250.dp)
                .height(40.dp)
        ) {
            // Background Bar
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(4.dp)
                    .align(Alignment.BottomCenter)
                    .background(Color.White.copy(alpha = 0.3f), RoundedCornerShape(2.dp))
            )

            // Center Marker
            Box(
                modifier = Modifier
                    .width(2.dp)
                    .height(8.dp)
                    .align(Alignment.BottomCenter)
                    .background(Color.White)
            )

            // Moving Indicator
            // Map path (-10..10) to width (0..1)
            // 0 -> 0.5
            val visualPercent = 0.5f + (uiState.schoolPath / 20f).coerceIn(-0.5f, 0.5f)

            Box(
                modifier = Modifier
                    .align(Alignment.CenterStart)
                    .offset(x = (250.dp * visualPercent) - 10.dp) // -10dp to center the 20dp box
                    .size(20.dp)
                    .background(Color(0xFF4ADE80), CircleShape)
                    .border(2.dp, Color.White, CircleShape)
            )
            
            // Path Label
            val pathLabel = if (uiState.schoolPath < 0) "L ${df.format(-uiState.schoolPath)}\u00b0" else "R ${df.format(uiState.schoolPath)}\u00b0"
            Text(
                text = pathLabel,
                color = Color(0xFF4ADE80),
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                modifier = Modifier.align(Alignment.TopCenter)
            )
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ShotHistoryDialog(uiState: GolfUiState, viewModel: GolfViewModel) {
    val filteredAndSortedShots = remember(uiState.shotHistory, uiState.historyFilter, uiState.historySortBy) {
        var list = when (uiState.historyFilter) {
            HistoryFilter.ALL -> uiState.shotHistory
            HistoryFilter.DRIVER -> uiState.shotHistory.filter { it.clubType == "Driver" }
            HistoryFilter.WOODS -> uiState.shotHistory.filter { it.clubType == "Woods" }
            HistoryFilter.IRONS -> uiState.shotHistory.filter { it.clubType == "Irons" }
            HistoryFilter.WEDGES -> uiState.shotHistory.filter { it.clubType == "Wedges" }
            HistoryFilter.PRO_MODE -> uiState.shotHistory.filter { it.swingMode == "PRO" }
            HistoryFilter.SCHOOL_MODE -> uiState.shotHistory.filter { it.swingMode == "SCHOOL" }
        }

        list = when (uiState.historySortBy) {
            HistorySortBy.TIMESTAMP_DESC -> list.sortedByDescending { it.timestamp }
            HistorySortBy.TIMESTAMP_ASC -> list.sortedBy { it.timestamp }
            HistorySortBy.DISTANCE_DESC -> list.sortedByDescending { it.totalDistance }
            HistorySortBy.DISTANCE_ASC -> list.sortedBy { it.totalDistance }
            HistorySortBy.CLUB_NAME -> list.sortedBy { it.clubName }
            HistorySortBy.SPEED_DESC -> list.sortedByDescending { it.ballSpeedMph }
        }
        list
    }

    AlertDialog(
        onDismissRequest = { viewModel.toggleHistory() },
        properties = androidx.compose.ui.window.DialogProperties(usePlatformDefaultWidth = false),
        modifier = Modifier.fillMaxSize()
    ) {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = Color(0xFF0F172A)
        ) {
            Column(modifier = Modifier.fillMaxSize()) {
                // Top Bar
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .background(Color(0xFF1E293B))
                        .padding(8.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    IconButton(onClick = { viewModel.toggleHistory() }) {
                        Icon(Icons.Default.Close, "Close", tint = Color.White)
                    }
                    Text(
                        "SHOT HISTORY",
                        color = Color.White,
                        fontWeight = FontWeight.Bold,
                        fontSize = 18.sp,
                        modifier = Modifier.weight(1f)
                    )

                    // Filter Menu
                    var showFilterMenu by remember { mutableStateOf(false) }
                    Box {
                        IconButton(onClick = { showFilterMenu = true }) {
                            Icon(Icons.Default.List, "Filter", tint = if (uiState.historyFilter != HistoryFilter.ALL) Color(0xFF4ADE80) else Color.White)
                        }
                        DropdownMenu(
                            expanded = showFilterMenu,
                            onDismissRequest = { showFilterMenu = false },
                            modifier = Modifier.background(Color(0xFF1E293B))
                        ) {
                            HistoryFilter.values().forEach { filter ->
                                DropdownMenuItem(
                                    text = { Text(filter.displayName, color = Color.White) },
                                    onClick = {
                                        viewModel.updateHistoryFilter(filter)
                                        showFilterMenu = false
                                    }
                                )
                            }
                        }
                    }

                    // Sort Menu
                    var showSortMenu by remember { mutableStateOf(false) }
                    Box {
                        IconButton(onClick = { showSortMenu = true }) {
                            Icon(Icons.Default.MoreVert, "Sort", tint = Color.White)
                        }
                        DropdownMenu(
                            expanded = showSortMenu,
                            onDismissRequest = { showSortMenu = false },
                            modifier = Modifier.background(Color(0xFF1E293B))
                        ) {
                            HistorySortBy.values().forEach { sortBy ->
                                DropdownMenuItem(
                                    text = { Text(sortBy.displayName, color = Color.White) },
                                    onClick = {
                                        viewModel.updateHistorySortBy(sortBy)
                                        showSortMenu = false
                                    }
                                )
                            }
                        }
                    }

                    // Clear Button
                    IconButton(onClick = { viewModel.clearHistory() }) {
                        Icon(Icons.Default.Refresh, "Clear", tint = Color.Red.copy(0.7f))
                    }
                }

                if (filteredAndSortedShots.isEmpty()) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        Text("No shots recorded yet.", color = Color.Gray)
                    }
                } else {
                    // Table Header
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .background(Color(0xFF334155))
                            .horizontalScroll(rememberScrollState())
                            .padding(vertical = 12.dp, horizontal = 16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        HeaderCell("Time", 70.dp)
                        HeaderCell("Club", 60.dp)
                        HeaderCell("Mode", 70.dp)
                        HeaderCell("Speed", 70.dp)
                        HeaderCell("Carry", 70.dp)
                        HeaderCell("Total", 70.dp)
                        HeaderCell("Side", 70.dp)
                        HeaderCell("Apex", 60.dp)
                        HeaderCell("Smash", 60.dp)
                        Spacer(modifier = Modifier.width(48.dp)) // Action space
                    }

                    LazyColumn(modifier = Modifier.fillMaxSize()) {
                        items(filteredAndSortedShots) { shot ->
                            HistoryRow(shot, viewModel)
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun HeaderCell(text: String, width: androidx.compose.ui.unit.Dp) {
    Text(
        text = text,
        color = Color.LightGray,
        fontSize = 11.sp,
        fontWeight = FontWeight.Bold,
        modifier = Modifier.width(width),
        textAlign = TextAlign.Start
    )
}

@Composable
fun HistoryRow(shot: ShotHistoryEntry, viewModel: GolfViewModel) {
    val df = remember { DecimalFormat("0.0") }
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .background(if (shot.id % 2 == 0L) Color.Transparent else Color.White.copy(0.03f))
            .horizontalScroll(rememberScrollState())
            .padding(horizontal = 16.dp, vertical = 8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        val timeLabel = try {
            shot.getFormattedTime().take(5)
        } catch (e: Exception) {
            "--:--"
        }
        Text(timeLabel, color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text(shot.clubName, color = Color(0xFF4ADE80), fontWeight = FontWeight.Bold, fontSize = 13.sp, modifier = Modifier.width(60.dp))
        Text(shot.swingMode, color = Color.LightGray, fontSize = 11.sp, modifier = Modifier.width(70.dp))
        Text(df.format(shot.ballSpeedMph), color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text(df.format(shot.carryDistance), color = Color.White, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        Text(df.format(shot.totalDistance), color = Color(0xFF4ADE80), fontWeight = FontWeight.Bold, fontSize = 13.sp, modifier = Modifier.width(70.dp))
        
        val side = shot.lateralDeviation
        val sideLabel = if (side < 0) "L ${df.format(-side)}" else "R ${df.format(side)}"
        Text(sideLabel, color = if (abs(side) < 5) Color.White else Color.Red.copy(0.7f), fontSize = 13.sp, modifier = Modifier.width(70.dp))
        
        Text(df.format(shot.maxHeight), color = Color.White, fontSize = 13.sp, modifier = Modifier.width(60.dp))
        Text(df.format(shot.smashFactor), color = Color.White, fontSize = 13.sp, modifier = Modifier.width(60.dp))

        IconButton(
            onClick = { viewModel.deleteShotById(shot.id) },
            modifier = Modifier.size(24.dp)
        ) {
            Icon(Icons.Default.Delete, "Delete", tint = Color.Red.copy(0.5f), modifier = Modifier.size(16.dp))
        }
    }
}
