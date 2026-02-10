import org.jetbrains.compose.web.renderComposable
import org.jetbrains.compose.web.dom.*
import org.jetbrains.compose.web.attributes.*
import androidx.compose.runtime.*
import kotlinx.browser.document
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.CanvasRenderingContext2D
import kotlin.math.PI
import com.example.golf_by_nm.core.*

enum class SimMode { PRACTICE, PUTTING }

fun main() {
    renderComposable(rootElementId = "root") {
        var mode by remember { mutableStateOf(SimMode.PRACTICE) }
        
        // Practice Inputs
        var clubSpeed by remember { mutableStateOf(100.0) }
        var attackAngle by remember { mutableStateOf(0.0) }
        var clubName by remember { mutableStateOf("Dr") }
        
        // Putting Inputs
        var puttDistance by remember { mutableStateOf(3.0) } // meters
        var slopeX by remember { mutableStateOf(0.0) } // degrees
        var slopeY by remember { mutableStateOf(0.0) } // degrees
        
        // Output
        var message by remember { mutableStateOf("Ready to simulate") }

        Div({ classes("container") }) {
            H1 { Text("Golf Simulator Core") }
            
            // Mode Switch
            Div({ classes("controls") }) {
                Div({ classes("control-group") }) {
                    Label(forId = "mode") { Text("Mode") }
                    Select({
                        id("mode")
                        onInput { event -> 
                            mode = SimMode.valueOf(event.value!!) 
                        }
                    }) {
                        Option("PRACTICE") { Text("Practice / Swing") }
                        Option("PUTTING") { Text("Putting") }
                    }
                }
            }

            // Inputs based on Mode
            if (mode == SimMode.PRACTICE) {
                Div({ classes("controls") }) {
                    Div({ classes("control-group") }) {
                        Label { Text("Club") }
                        Select({
                            onInput { clubName = it.value!! }
                        }) {
                            PhysicsEngine.GOLF_BAG.keys.forEach { name ->
                                Option(name) { Text(name) }
                            }
                        }
                    }
                    Div({ classes("control-group") }) {
                        Label { Text("Club Speed (mph)") }
                        Input(InputType.Number) {
                            value(clubSpeed)
                            onInput { clubSpeed = it.value?.toDoubleOrNull() ?: 0.0 }
                        }
                    }
                    Div({ classes("control-group") }) {
                        Label { Text("Attack Angle (deg)") }
                        Input(InputType.Number) {
                            value(attackAngle)
                            onInput { attackAngle = it.value?.toDoubleOrNull() ?: 0.0 }
                        }
                    }
                }
            } else {
                Div({ classes("controls") }) {
                    Div({ classes("control-group") }) {
                        Label { Text("Distance (m)") }
                        Input(InputType.Number) {
                            value(puttDistance)
                            onInput { puttDistance = it.value?.toDoubleOrNull() ?: 0.0 }
                        }
                    }
                    Div({ classes("control-group") }) {
                        Label { Text("Slope X (deg)") }
                        Input(InputType.Number) {
                            value(slopeX)
                            onInput { slopeX = it.value?.toDoubleOrNull() ?: 0.0 }
                        }
                    }
                    Div({ classes("control-group") }) {
                        Label { Text("Slope Y (deg)") }
                        Input(InputType.Number) {
                            value(slopeY)
                            onInput { slopeY = it.value?.toDoubleOrNull() ?: 0.0 }
                        }
                    }
                }
            }

            Button(attrs = {
                onClick {
                    if (mode == SimMode.PRACTICE) {
                        simulatePractice(clubName, clubSpeed, attackAngle) { msg, points -> 
                            message = msg
                            drawTrajectory(points) 
                        }
                    } else {
                        simulatePutting(puttDistance, slopeX, slopeY) { msg, points ->
                            message = msg
                            drawPutt(points)
                        }
                    }
                }
            }) {
                Text("CALCULATE")
            }
            
            Div({ style { marginTop(20.px) } }) {
                Text(message)
            }

            Canvas({
                id("simCanvas")
                attr("width", "800")
                attr("height", "400")
            })
        }
    }
}

fun simulatePractice(clubName: String, speed: Double, attack: Double, onResult: (String, List<Point3D>) -> Unit) {
    val club = PhysicsEngine.GOLF_BAG[clubName]?.copy() ?: return
    val input = SwingInputData(
        isValid = true,
        clubSpeedMph = speed,
        attackAngleDeg = attack
    )
    val launch = PhysicsEngine.calculateLaunchParams(input, club)
    val result = PhysicsEngine.simulateTrajectory(launch, input, club)
    
    val msg = "Carry: ${result.carryDistance.format(1)}m | Total: ${result.totalDistance.format(1)}m | Height: ${result.maxHeight.format(1)}m"
    onResult(msg, result.path)
}

fun simulatePutting(dist: Double, sx: Double, sy: Double, onResult: (String, List<Point3D>) -> Unit) {
    // Putting physics needs fixing to return path or calculate interim points
    // For now we simulate end result. To draw path, we might need to modify PuttingPhysicsEngine to return points
    // Or we just draw a straight line for now if engine doesn't return path.
    // Checking PuttingPhysicsEngine... it returns PuttingResult which likely doesn't have path yet?
    // Let's check GolfModels.kt first. Yes, PuttingResult has finalX/Y.
    // We will update PuttingPhysicsEngine later if needed, for now let's use what we have.
    
    val result = PuttingPhysicsEngine.simulate(dist, sx, sy)
    val msg = "Result: X=${result.finalX.format(2)}m, Y=${result.finalY.format(2)}m (Entry Speed: ${result.entrySpeed.format(2)}m/s) ${result.entryStatus}"
    
    // Fake path for visualization since we don't have it yet
    val points = listOf(
        Point3D(0.0, 0.0, 0.0),
        Point3D(result.finalX, result.finalY, 0.0)
    )
    onResult(msg, points)
}

fun drawTrajectory(points: List<Point3D>) {
    val canvas = document.getElementById("simCanvas") as? HTMLCanvasElement ?: return
    val ctx = canvas.getContext("2d") as? CanvasRenderingContext2D ?: return
    
    ctx.clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    
    // Scale to fit
    val maxDist = points.maxOfOrNull { it.y } ?: 100.0 // Y is forward in our 3D model?
    // Wait, usually Z is height, Y is forward? Let's check Point3D.
    // In GolfModels: Point3D(x, y, z).
    // Usually in 3D: Y is up or Z is up. 
    // In Android canvas: Y is down.
    // Let's assume for drawing:
    // Side View: X = Distance (Y in model?), Y = Height (Z in model?)
    
    // PhysicsEngine comments might clarify. 
    // Usually: Y is down-range, Z is height, X is lateral.
    
    val scaleX = canvas.width.toDouble() / (points.maxOfOrNull { it.y } ?: 200.0).coerceAtLeast(10.0)
    val scaleY = canvas.height.toDouble() / (points.maxOfOrNull { it.z } ?: 50.0).coerceAtLeast(10.0) * 0.8 // 80% height

    ctx.beginPath()
    ctx.strokeStyle = "#00FF00"
    ctx.lineWidth = 2.0
    
    points.forEachIndexed { index, p ->
        val drawX = p.y * scaleX // Distance mapped to Canvas X
        val drawY = canvas.height.toDouble() - (p.z * scaleY) // Height mapped to Canvas Y (inverted)
        
        if (index == 0) ctx.moveTo(drawX, drawY)
        else ctx.lineTo(drawX, drawY)
    }
    ctx.stroke()
}

fun drawPutt(points: List<Point3D>) {
    val canvas = document.getElementById("simCanvas") as? HTMLCanvasElement ?: return
    val ctx = canvas.getContext("2d") as? CanvasRenderingContext2D ?: return
    
    ctx.clearRect(0.0, 0.0, canvas.width.toDouble(), canvas.height.toDouble())
    
    // Top Down View
    // X is lateral, Y is forward.
    // Center X on canvas width/2.
    
    val centerX = canvas.width.toDouble() / 2.0
    val scale = 50.0 // Pixels per meter
    
    ctx.beginPath()
    ctx.strokeStyle = "#FFFF00"
    ctx.lineWidth = 2.0
    
    points.forEachIndexed { index, p ->
        val drawX = centerX + (p.x * scale)
        val drawY = canvas.height.toDouble() - (p.y * scale) - 20.0 // Start from bottom
        
        if (index == 0) ctx.moveTo(drawX, drawY)
        else ctx.lineTo(drawX, drawY)
    }
    ctx.stroke()
}

// Helper for formatting
fun Double.format(digits: Int): String = this.asDynamic().toFixed(digits) as String
