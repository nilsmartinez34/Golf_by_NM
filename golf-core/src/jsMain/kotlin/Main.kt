package com.example.golf_by_nm.core

import org.jetbrains.compose.web.renderComposable
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.dom.Text as TextContent
import org.jetbrains.compose.web.attributes.*
import androidx.compose.runtime.*
import org.jetbrains.compose.web.css.*
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.events.Event
import org.w3c.dom.TouchEvent
import org.w3c.dom.*
import kotlin.math.*
import com.example.golf_by_nm.core.*

enum class AppMode { RANGE, PUTTING }

fun main() {
    renderComposable(rootElementId = "root") {
        val availableClubs = PhysicsEngine.GOLF_BAG.values.toList()
        
        // APP STATE
        var appMode by remember { mutableStateOf(AppMode.RANGE) }
        var isSettingsOpen by remember { mutableStateOf(false) }
        
        // RANGE STATE
        var selectedClub by remember { mutableStateOf(availableClubs.first()) }
        var strikePosition by remember { mutableStateOf(Point(0.5f, 0.5f)) }
        var trajectoryResult by remember { mutableStateOf<TrajectoryResult?>(null) }
        var isSwinging by remember { mutableStateOf(false) }
        var isSchoolMode by remember { mutableStateOf(false) }
        var schoolPower by remember { mutableStateOf(0.0) }
        var schoolPath by remember { mutableStateOf(0.0) }
        
        // PUTTING STATE
        var puttingResult by remember { mutableStateOf<PuttingResult?>(null) }
        var ghostResult by remember { mutableStateOf<PuttingResult?>(null) }
        var isRolling by remember { mutableStateOf(false) }
        var slopeX by remember { mutableStateOf(0.0) }
        var slopeY by remember { mutableStateOf(0.0) }
        var isAimPointMode by remember { mutableStateOf(false) }
        var holeDistance by remember { mutableStateOf(5.0) }
        
        // SHARED CONFIG
        var speedFactor by remember { mutableStateOf(1.0f) }
        var angleLimit by remember { mutableStateOf(10.0f) }
        var selectedBackground by remember { mutableStateOf("mountain") }
        
        // GESTURE STATE
        var swingStartTime by remember { mutableStateOf(0L) }
        var swingPoints by remember { mutableStateOf<List<Point>>(emptyList()) }
        var flightPercent by remember { mutableStateOf(0f) }
        
        // AIM POINT SOLVER
        LaunchedEffect(isAimPointMode, slopeX, slopeY, holeDistance) {
            if (isAimPointMode) {
                ghostResult = solvePerfectPutt(holeDistance, slopeX, slopeY)
            } else {
                ghostResult = null
            }
        }

        // Animation Loop
        LaunchedEffect(trajectoryResult, puttingResult) {
            val res = if (appMode == AppMode.RANGE) trajectoryResult else null
            val put = if (appMode == AppMode.PUTTING) puttingResult else null
            
            if (res != null) {
                flightPercent = 0f
                val start = window.performance.now()
                val duration = (res.flightTimeSeconds * 1000).coerceAtLeast(1500.0)
                fun animate(time: Double) {
                    val p = ((time - start) / duration).toFloat().coerceIn(0f, 1f)
                    flightPercent = p
                    if (p < 1f) window.requestAnimationFrame(::animate)
                }
                window.requestAnimationFrame(::animate)
            } else if (put != null) {
                flightPercent = 0f
                val start = window.performance.now()
                val duration = 2500.0
                fun animate(time: Double) {
                    val p = ((time - start) / duration).toFloat().coerceIn(0f, 1f)
                    flightPercent = p
                    if (p < 1f) window.requestAnimationFrame(::animate)
                }
                window.requestAnimationFrame(::animate)
            }
        }

        // ZONE 1: TOP METRICS
        Div({ classes("zone-top") }) {
            if (appMode == AppMode.RANGE) {
                TopCenterMetrics(trajectoryResult, flightPercent)
            } else {
                PuttingMetrics(puttingResult, ghostResult, flightPercent, isAimPointMode)
            }
        }

        // ZONE 2: GAMEPLAY
        Div({ classes("zone-mid") }) {
            // Mode Switcher
            Div({ classes("mode-switcher") }) {
                Div({ 
                    classes("mode-btn")
                    if (appMode == AppMode.RANGE) classes("active")
                    onClick { appMode = AppMode.RANGE; trajectoryResult = null; puttingResult = null }
                }) { TextContent("RANGE") }
                Div({ 
                    classes("mode-btn")
                    if (appMode == AppMode.PUTTING) classes("active")
                    onClick { appMode = AppMode.PUTTING; trajectoryResult = null; puttingResult = null }
                }) { TextContent("GREEN") }
            }

            // Background
            if (appMode == AppMode.RANGE) {
                Img(src = "image/bg_range_$selectedBackground.png", attrs = {
                    style { position(Position.Absolute); width(100.percent); height(100.percent); property("object-fit", "cover") }
                })
            } else {
                Div({ style { position(Position.Absolute); width(100.percent); height(100.percent); background("radial-gradient(circle at center, #22C55E 0%, #15803D 100%)") } })
            }

            // Main Canvas
            Canvas({
                id("simCanvas")
                ref { element ->
                    if (appMode == AppMode.RANGE) {
                        setupMainCanvas(element, trajectoryResult, flightPercent)
                    } else {
                        setupPuttingCanvas(element, puttingResult, ghostResult, flightPercent, holeDistance)
                    }
                    
                    val touchStart = { e: Event ->
                        val touch = (e as TouchEvent).touches.item(0)!!
                        val rect = element.getBoundingClientRect()
                        swingStartTime = window.performance.now().toLong()
                        swingPoints = listOf(Point((touch.clientX - rect.left).toFloat(), (touch.clientY - rect.top).toFloat()))
                        isSwinging = true
                    }
                    val touchMove = { e: Event ->
                        if (isSwinging) {
                            val touch = (e as TouchEvent).touches.item(0)!!
                            val rect = element.getBoundingClientRect()
                            val p = Point((touch.clientX - rect.left).toFloat(), (touch.clientY - rect.top).toFloat())
                            swingPoints = swingPoints + p
                            if (isSchoolMode) {
                                val dx = p.x - swingPoints.first().x
                                val dy = p.y - swingPoints.first().y
                                schoolPower = (dy / (rect.height * 0.3)).coerceIn(0.0, 1.0)
                                schoolPath = (dx / 150.0).coerceIn(-1.0, 1.0)
                            }
                        }
                    }
                    val touchEnd = { _: Event ->
                        if (isSwinging) {
                            isSwinging = false
                            if (appMode == AppMode.RANGE) {
                                if (isSchoolMode) {
                                    executeSchoolSwing(schoolPower, schoolPath, selectedClub, speedFactor, strikePosition, angleLimit) { trajectoryResult = it }
                                } else {
                                    processSwingAction(swingPoints, window.performance.now().toLong() - swingStartTime, 1.0f, speedFactor, selectedClub, strikePosition, angleLimit) { trajectoryResult = it }
                                }
                            } else {
                                processPuttAction(swingPoints, holeDistance, slopeX, slopeY) { puttingResult = it }
                            }
                        }
                    }
                    element.addEventListener("touchstart", touchStart); element.addEventListener("touchmove", touchMove); element.addEventListener("touchend", touchEnd)
                    onDispose { element.removeEventListener("touchstart", touchStart); element.removeEventListener("touchmove", touchMove); element.removeEventListener("touchend", touchEnd) }
                }
                onMouseDown { e ->
                    swingStartTime = window.performance.now().toLong(); swingPoints = listOf(Point(e.offsetX.toFloat(), e.offsetY.toFloat())); isSwinging = true
                }
                onMouseMove { e ->
                    if (isSwinging) {
                        val p = Point(e.offsetX.toFloat(), e.offsetY.toFloat())
                        swingPoints = swingPoints + p
                        if (appMode == AppMode.RANGE && isSchoolMode) {
                            val rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                            val dx = p.x - swingPoints.first().x
                            val dy = p.y - swingPoints.first().y
                            schoolPower = (dy / (rect.height * 0.3)).coerceIn(0.0, 1.0)
                            schoolPath = (dx / 150.0).coerceIn(-1.0, 1.0)
                        }
                    }
                }
                onMouseUp { e ->
                    if (isSwinging) {
                        isSwinging = false
                        if (appMode == AppMode.RANGE) {
                            if (isSchoolMode) {
                                executeSchoolSwing(schoolPower, schoolPath, selectedClub, speedFactor, strikePosition, angleLimit) { trajectoryResult = it }
                            } else {
                                processSwingAction(swingPoints, window.performance.now().toLong() - swingStartTime, 1.0f, speedFactor, selectedClub, strikePosition, angleLimit) { trajectoryResult = it }
                            }
                        } else {
                            processPuttAction(swingPoints, holeDistance, slopeX, slopeY) { puttingResult = it }
                        }
                    }
                }
            })

            // HUDs
            if (appMode == AppMode.RANGE) {
                PerformanceHUD(trajectoryResult)
                ImpactHUD(trajectoryResult, strikePosition, angleLimit)
            } else {
                PuttingHUD(puttingResult, ghostResult, slopeX, slopeY)
            }
            
            // School Overlays
            if (appMode == AppMode.RANGE && isSchoolMode && isSwinging) {
                Div({ classes("school-overlay") }) {
                    Div({ classes("power-bar") }) {
                        Div({ classes("power-fill"); style { height((schoolPower * 100).percent) } })
                    }
                    Div({ classes("path-bar") }) {
                        Div({ classes("path-indicator"); style { left((50 + schoolPath * 45).percent) } })
                    }
                }
            }
            
            // Aim Point Legend
            if (appMode == AppMode.PUTTING && isAimPointMode) {
                Div({ classes("aim-point-legend") }) {
                    Div({ classes("legend-item") }) {
                        Div({ classes("legend-color"); style { background("var(--accent-gold)") } })
                        TextContent("RECOMMENDED LINE")
                    }
                }
            }

            // Floating Controls
            Div({ classes("floating-controls") }) {
                Div({ classes("round-btn"); onClick { isSettingsOpen = true } }) { TextContent("⚙️") }
                Div({ classes("round-btn"); onClick { trajectoryResult = null; puttingResult = null } }) { TextContent("🔄") }
            }
        }

        // ZONE 3: CLUBS & BALL
        Div({ classes("zone-bottom") }) {
            if (appMode == AppMode.RANGE) {
                Div({ style { display(DisplayStyle.Flex); alignItems(AlignItems.Center); gap(20.px); flex(1) } }) {
                    ClubHorizontalBar(availableClubs, selectedClub) { selectedClub = it }
                    Button({ classes("club-btn"); if(isSchoolMode) classes("active"); onClick { isSchoolMode = !isSchoolMode } }) {
                        TextContent("SCHOOL")
                    }
                }
                InteractiveImpactBall(strikePosition) { strikePosition = it }
            } else {
                Div({ style { display(DisplayStyle.Flex); alignItems(AlignItems.Center); gap(20.px); flex(1) } }) {
                    PuttingControls(slopeX, slopeY, holeDistance, { slopeX = it }, { slopeY = it }, { holeDistance = it })
                    Button({ classes("club-btn"); if(isAimPointMode) classes("active"); onClick { isAimPointMode = !isAimPointMode } }) {
                        TextContent("AIM POINT")
                    }
                }
            }
        }

        // SETTINGS MODAL
        if (isSettingsOpen) {
            SettingsModal(speedFactor, { speedFactor = it }, angleLimit, { angleLimit = it }, selectedBackground, { selectedBackground = it }, { isSettingsOpen = false })
        }
    }
}

@Composable
fun TopCenterMetrics(res: TrajectoryResult?, progress: Float) {
    Div({ classes("metric-group") }) {
        MetricItem("CARRY", if (res != null) (res.carryDistance * progress).format(1) else "--", "M")
        MetricItem("TOTAL", if (res != null) (res.totalDistance * progress).format(1) else "--", "M")
        MetricItem("SIDE", if (res != null) abs(res.lateralDeviation * progress).format(1) else "--", if(res != null && res.lateralDeviation < 0) "L" else "R")
        MetricItem("APEX", if (res != null) (res.maxHeight * progress).format(1) else "--", "M")
    }
}

@Composable
fun PuttingMetrics(res: PuttingResult?, ghost: PuttingResult?, progress: Float, isAimPoint: Boolean) {
    Div({ classes("metric-group") }) {
        if (isAimPoint && ghost != null) {
            MetricItem("PLAY AS", ghost.totalDistance.format(2), "M")
            MetricItem("BREAK", ghost.finalX.format(2), "M")
        } else {
            MetricItem("DIST", if (res != null) (res.totalDistance * progress).format(2) else "--", "M")
            MetricItem("SPEED", if (res != null) (res.residualSpeed * (1.0 - progress)).format(1) else "--", "m/s")
        }
    }
}

@Composable
fun MetricItem(label: String, value: String, unit: String) {
    Div({ classes("metric-item") }) {
        Span({ classes("metric-label") }) { TextContent(label) }
        Div({ style { display(DisplayStyle.Flex); alignItems(AlignItems.Baseline) } }) {
            Span({ classes("metric-value") }) { TextContent(value) }
            Span({ classes("hud-unit"); style { marginLeft(4.px) } }) { TextContent(unit) }
        }
    }
}

@Composable
fun SettingsModal(sf: Float, onSf: (Float) -> Unit, al: Float, onAl: (Float) -> Unit, bg: String, onBg: (String) -> Unit, onClose: () -> Unit) {
    Div({ classes("modal-overlay") }) {
        Div({ classes("modal-content") }) {
            Div({ classes("modal-header") }) { H2 { TextContent("Settings") }; Div({ classes("round-btn"); onClick { onClose() } }) { TextContent("✕") } }
            Div({ classes("setting-row") }) {
                Div({ classes("setting-label") }) { Span { TextContent("Speed Factor") }; Span { TextContent("${sf.format(2)}x") } }
                Input(InputType.Range) { attr("min", "0.5"); attr("max", "1.5"); attr("step", "0.01"); value(sf.toString()); onInput { e -> onSf(e.value!!.toFloat()) } }
            }
            Div({ classes("setting-row") }) {
                Div({ classes("setting-label") }) { Span { TextContent("Angle Limit") }; Span { TextContent("${al.format(0)}°") } }
                Input(InputType.Range) { attr("min", "5"); attr("max", "25"); attr("step", "1"); value(al.toString()); onInput { e -> onAl(e.value!!.toFloat()) } }
            }
            Div({ classes("setting-row") }) {
                Div({ classes("setting-label") }) { Span { TextContent("Environment") } }
                Select({ style { width(100.percent); padding(10.px); background("#2d2d2d"); color(Color.white); border(0.px); borderRadius(8.px) }; onInput { e -> onBg(e.value!!) } }) {
                    listOf("mountain", "sea", "urban", "castelnau", "air").forEach { b -> Option(b, { if(b == bg) selected() }) { TextContent(b.capitalize()) } }
                }
            }
        }
    }
}

@Composable
fun PerformanceHUD(res: TrajectoryResult?) {
    Div({ classes("hud-panel", "hud-left") }) {
        Div({ classes("hud-title") }) { TextContent("PERFORMANCE") }
        HudRow("CLUB", if(res != null) res.clubHeadSpeedMph.format(1) else "--", "MPH")
        HudRow("BALL", if(res != null) res.ballSpeedMph.format(1) else "--", "MPH")
        HudRow("SMASH", if(res != null) res.smashFactor.format(2) else "--", "")
    }
}

@Composable
fun ImpactHUD(res: TrajectoryResult?, strike: Point, limit: Float) {
    val faceAngle = (strike.x - 0.5f) * (limit * 2f); val attack = (strike.y - 0.5f) * 12f
    Div({ classes("hud-panel", "hud-right") }) {
        Div({ classes("hud-title") }) { TextContent("IMPACT DATA") }
        HudRow("PATH", if(res != null) "${res.swingPath.format(1)}°" else "--", "")
        HudRow("FACE", "${faceAngle.format(1)}°", "")
        HudRow("ATTACK", "${attack.format(1)}°", "")
    }
}

@Composable
fun PuttingHUD(res: PuttingResult?, ghost: PuttingResult?, sx: Double, sy: Double) {
    Div({ classes("hud-panel", "hud-left") }) {
        Div({ classes("hud-title") }) { TextContent("GREEN DATA") }
        HudRow("SLOPE X", "${sx.format(1)}%", "")
        HudRow("SLOPE Y", "${sy.format(1)}%", "")
        if (ghost != null) HudRow("AIM X", "${ghost.finalX.format(2)}m", "")
    }
    if (res != null) {
        Div({ classes("hud-panel", "hud-right") }) {
            Div({ classes("hud-title") }) { TextContent("RESULT") }
            HudRow("STOP X", "${res.finalX.format(2)}m", "")
            HudRow("STOP Y", "${res.finalY.format(2)}m", "")
        }
    }
}

@Composable
fun HudRow(label: String, value: String, unit: String) {
    Div({ classes("hud-row") }) { Span({ classes("hud-label") }) { TextContent(label) }; Div { Span({ classes("hud-value") }) { TextContent(value) }; if (unit.isNotEmpty()) Span({ classes("hud-unit") }) { TextContent(unit) } } }
}

@Composable
fun ClubHorizontalBar(clubs: List<Club>, selected: Club, onSelect: (Club) -> Unit) {
    Div({ classes("club-bar") }) { clubs.forEach { club -> Button({ classes("club-btn"); if (club.name == selected.name) classes("active"); onClick { onSelect(club) } }) { TextContent(club.name) } } }
}

@Composable
fun PuttingControls(sx: Double, sy: Double, hole: Double, onSx: (Double) -> Unit, onSy: (Double) -> Unit, onHole: (Double) -> Unit) {
    Div({ style { display(DisplayStyle.Flex); gap(30.px); flex(1); fontSize(10.px) } }) {
        Div({ style { flex(1) } }) { Span { TextContent("HOLE (M)") }; Input(InputType.Range) { attr("min", "1"); attr("max", "20"); attr("step", "0.5"); value(hole.toString()); onInput { e -> onHole(e.value!!.toDouble()) } } }
        Div({ style { flex(1) } }) { Span { TextContent("SLOPE X (%)") }; Input(InputType.Range) { attr("min", "-5"); attr("max", "5"); attr("step", "0.1"); value(sx.toString()); onInput { e -> onSx(e.value!!.toDouble()) } } }
        Div({ style { flex(1) } }) { Span { TextContent("SLOPE Y (%)") }; Input(InputType.Range) { attr("min", "-10"); attr("max", "10"); attr("step", "0.1"); value(sy.toString()); onInput { e -> onSy(e.value!!.toDouble()) } } }
    }
}

@Composable
fun InteractiveImpactBall(strike: Point, onUpdate: (Point) -> Unit) {
    Div({ classes("impact-container") }) {
        Canvas({
            id("impactCanvas"); attr("width", "130"); attr("height", "130")
            ref { element -> drawImpactBall(element, strike); onDispose { } }
            onMouseDown { e ->
                val rect = (e.target as HTMLElement).getBoundingClientRect()
                onUpdate(Point(((e.clientX - rect.left) / rect.width).toFloat().coerceIn(0f, 1f), ((e.clientY - rect.top) / rect.height).toFloat().coerceIn(0f, 1f)))
            }
        })
    }
}

fun setupMainCanvas(canvas: HTMLCanvasElement, res: TrajectoryResult?, progress: Float) {
    val ctx = canvas.getContext("2d") as? CanvasRenderingContext2D ?: return
    val rect = canvas.getBoundingClientRect(); if (canvas.width != rect.width.toInt() || canvas.height != rect.height.toInt()) { canvas.width = rect.width.toInt(); canvas.height = rect.height.toInt() }
    ctx.clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    val w = canvas.width.toDouble(); val h = canvas.height.toDouble(); val horizonY = h * 0.38; val groundStartY = h * 0.88; val k = 0.0052; val groundRange = groundStartY - horizonY
    if (res != null) {
        val pathPoints = res.path; val pointsCount = (pathPoints.size * progress).toInt().coerceAtLeast(1)
        ctx.beginPath(); ctx.strokeStyle = "rgba(255, 255, 255, 0.7)"; ctx.lineWidth = 2.0
        for (i in 0 until pointsCount.coerceAtMost(pathPoints.size - 1)) {
            val p = pathPoints[i]; val dist = p.y; val scale = exp(-k * dist)
            val liftFactor = 1.2 - (0.4 * (dist / 250.0).coerceIn(0.0, 1.0))
            val screenX = (w * 0.5) + (p.x * scale * 15.0); val screenY = (horizonY + (groundRange * scale)) - (p.z * scale * 19.0 * liftFactor)
            if (i == 0) ctx.moveTo(screenX, screenY) else ctx.lineTo(screenX, screenY)
            if (i == pointsCount - 2) { ctx.fillStyle = "white"; ctx.beginPath(); ctx.arc(screenX, screenY, (5.0 * scale).coerceAtLeast(1.5), 0.0, 2.0 * PI); ctx.fill() }
        }
        ctx.stroke()
    } else { ctx.fillStyle = "white"; ctx.beginPath(); ctx.arc(w * 0.5, groundStartY, 10.0, 0.0, 2.0 * PI); ctx.fill() }
}

fun setupPuttingCanvas(canvas: HTMLCanvasElement, res: PuttingResult?, ghost: PuttingResult?, progress: Float, holeDist: Double) {
    val ctx = canvas.getContext("2d") as? CanvasRenderingContext2D ?: return
    val w = canvas.width.toDouble(); val h = canvas.height.toDouble()
    ctx.clearRect(0.0, 0.0, w, h)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"; ctx.lineWidth = 1.0; val step = 40.0
    for(i in 0..(w/step).toInt()) { ctx.beginPath(); ctx.moveTo(i*step, 0.0); ctx.lineTo(i*step, h); ctx.stroke() }
    for(i in 0..(h/step).toInt()) { ctx.beginPath(); ctx.moveTo(0.0, i*step); ctx.lineTo(w, i*step); ctx.stroke() }
    val holeX = w * 0.5; val holeY = h * 0.8 - (holeDist * 50.0)
    ctx.fillStyle = "rgba(0,0,0,0.6)"; ctx.beginPath(); ctx.arc(holeX, holeY, 15.0, 0.0, 2.0 * PI); ctx.fill(); ctx.strokeStyle = "white"; ctx.lineWidth = 2.0; ctx.stroke()
    val ballStartX = w * 0.5; val ballStartY = h * 0.8
    if (ghost != null) {
        ctx.beginPath(); ctx.strokeStyle = "rgba(252, 211, 77, 0.3)"; ctx.setLineDash(arrayOf(5.0, 5.0))
        ghost.path.forEachIndexed { i, p -> val px = ballStartX + p.x * 50.0; val py = ballStartY - p.y * 50.0; if(i == 0) ctx.moveTo(px, py) else ctx.lineTo(px, py) }
        ctx.stroke(); ctx.setLineDash(arrayOf())
    }
    if (res != null) {
        val points = res.path; val count = (points.size * progress).toInt().coerceAtLeast(1)
        ctx.beginPath(); ctx.strokeStyle = "rgba(255,255,255,0.6)"; ctx.lineWidth = 3.0
        for (i in 0 until count.coerceAtMost(points.size)) { val p = points[i]; val px = ballStartX + p.x * 50.0; val py = ballStartY - p.y * 50.0; if(i == 0) ctx.moveTo(px, py) else ctx.lineTo(px, py); if(i == count - 1) { ctx.fillStyle = "white"; ctx.beginPath(); ctx.arc(px, py, 6.0, 0.0, 2.0 * PI); ctx.fill() } }
        ctx.stroke()
    } else { ctx.fillStyle = "white"; ctx.beginPath(); ctx.arc(ballStartX, ballStartY, 8.0, 0.0, 2.0 * PI); ctx.fill() }
}

fun drawImpactBall(canvas: HTMLCanvasElement, strike: Point) {
    val ctx = canvas.getContext("2d") as? CanvasRenderingContext2D ?: return; val center = canvas.width.toDouble() / 2.0; ctx.clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    ctx.strokeStyle = "#1D4ED8"; ctx.lineWidth = 2.0; ctx.beginPath(); ctx.moveTo(center - 12, 0.0); ctx.lineTo(center - 12, canvas.height.toDouble()); ctx.moveTo(center + 12, 0.0); ctx.lineTo(center + 12, canvas.height.toDouble()); ctx.stroke()
    ctx.strokeStyle = "red"; ctx.lineWidth = 3.0; ctx.beginPath(); ctx.moveTo(center, 0.0); ctx.lineTo(center, canvas.height.toDouble()); ctx.stroke(); ctx.fillStyle = "red"; ctx.beginPath(); ctx.arc(strike.x * canvas.width.toDouble(), strike.y * canvas.height.toDouble(), 6.0, 0.0, 2.0 * PI); ctx.fill()
}

fun processSwingAction(pts: List<Point>, dur: Long, dens: Float, sf: Float, clb: Club, strk: Point, lim: Float, onRes: (TrajectoryResult) -> Unit) {
    val face = (strk.x - 0.5) * (lim * 2.0); val att = (strk.y - 0.5) * 12.0; val input = SwingCaptureProcessor.processSwing(pts, dur, dens, speedFactor = sf.toDouble())
    if (input.isValid) { val cFace = clb.copy(faceAngle = face); onRes(PhysicsEngine.simulateTrajectory(PhysicsEngine.calculateLaunchParams(input, cFace, att.toFloat()), input, cFace)) }
}

fun executeSchoolSwing(pwr: Double, pth: Double, clb: Club, sf: Float, strk: Point, lim: Float, onRes: (TrajectoryResult) -> Unit) {
    val face = (strk.x - 0.5) * (lim * 2.0); val att = (strk.y - 0.5) * 12.0
    val input = SwingInputData(isValid = true, clubSpeedMph = 100.0, powerFactor = pwr, pathDeviationDeg = pth * 10.0, efficiency = 1.0)
    val cFace = clb.copy(faceAngle = face); onRes(PhysicsEngine.simulateTrajectory(PhysicsEngine.calculateLaunchParams(input, cFace, att.toFloat()), input, cFace))
}

fun processPuttAction(pts: List<Point>, holeDist: Double, sx: Double, sy: Double, onRes: (PuttingResult) -> Unit) {
    if (pts.size < 2) return; val distPx = sqrt((pts.first().x - pts.last().x).pow(2.0f) + (pts.first().y - pts.last().y).pow(2.0f))
    onRes(PuttingPhysicsEngine.simulate((distPx / 50.0).toDouble().coerceIn(0.5, 20.0), sx, sy))
}

suspend fun solvePerfectPutt(targetY: Double, slopeX: Double, slopeY: Double): PuttingResult {
    var bestAim = 0.0; var bestPower = targetY; if (slopeY > 0) bestPower = targetY * (1.0 + slopeY * 0.03) else if (slopeY < 0) bestPower = targetY * (1.0 + slopeY * 0.02)
    repeat(5) { val res = PuttingPhysicsEngine.simulate(bestPower, slopeX, slopeY, bestAim); bestAim -= (res.finalX / targetY) * 50.0 }
    repeat(3) { val res = PuttingPhysicsEngine.simulate(bestPower, slopeX, slopeY, bestAim); bestPower -= (res.finalY - targetY) * 0.8 }
    return PuttingPhysicsEngine.simulate(bestPower, slopeX, slopeY, bestAim)
}

fun Double.format(digits: Int): String = this.asDynamic().toFixed(digits) as String
fun Float.format(digits: Int): String = this.toDouble().format(digits)
fun String.capitalize() = this.replaceFirstChar { if (it.isLowerCase()) it.titlecase() else it.toString() }
