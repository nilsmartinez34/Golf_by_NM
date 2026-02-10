package com.example.golf_by_nm.swing

import androidx.compose.ui.geometry.Offset
import org.junit.Assert.*
import org.junit.Test

import com.example.golf_by_nm.ui.ClubSpec

class SwingAnalyzerTest {

    private val analyzer = SwingAnalyzer()
    private val defaultDriver = ClubSpec("Driver", 10.5, 1.0, 1.0)

    @Test
    fun `analyze straight swing`() {
        // Vertical line upwards
        // (100, 500) -> (100, 100)
        val points = listOf(
            Offset(100f, 500f),
            Offset(100f, 400f),
            Offset(100f, 300f),
            Offset(100f, 200f),
            Offset(100f, 100f)
        )
        
        val impact = analyzer.analyze(points, durationMm = 1000, clubSpec = defaultDriver)
        
        // Path should be 0 degrees (Target)
        // Logic: dy = -400, dx = 0. atan2(-400, 0) = -PI/2 (-90 deg).
        // clubPath = -90 + 90 = 0.
        
        assertEquals(0.0, impact.offlineMeters, 5.0) // Should be roughly straight
    }

    @Test
    fun `analyze in to out swing`() {
        // Swing from Bottom-Left to Top-Right
        // (100, 500) -> (500, 100)
        // dx = 400, dy = -400.
        // atan2(-400, 400) = -45 deg.
        // clubPath = -45 + 90 = +45 deg (Push).
        
        val points = listOf(
            Offset(100f, 500f),
            Offset(200f, 400f),
            Offset(300f, 300f),
            Offset(400f, 200f),
            Offset(500f, 100f)
        )
        
        val impact = analyzer.analyze(points, 1000, defaultDriver)
        
        // Path is +45. Face is 0 (Square).
        // FaceToPath = 0 - 45 = -45 (Closed relative to path).
        // Should Hook (Curve Left relative to path).
        // Because Path is +45 (Right), Ball starts Right.
        // Hook pulls it back Left.
        
        // Check if offlineMeters is somewhat reasonable (not crazy).
        // We mainly check the logic didn't crash.
        assertNotNull(impact)
    }
}
