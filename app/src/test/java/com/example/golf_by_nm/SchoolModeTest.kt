package com.example.golf_by_nm

import org.junit.Assert.assertEquals
import org.junit.Test
import kotlinx.coroutines.flow.update

class SchoolModeTest {

    private fun getViewModelInSchoolMode(clubName: String): GolfViewModel {
        val viewModel = GolfViewModel()
        val club = PhysicsEngine.GOLF_BAG[clubName] ?: throw IllegalArgumentException("Club not found")
        
        // Select Club (triggers constraint update)
        viewModel.onClubSelected(club)
        
        // Enable School Mode
        viewModel.toggleSwingMode()
        if (viewModel.uiState.value.swingMode != SwingMode.SCHOOL) {
            viewModel.toggleSwingMode()
        }
        
        return viewModel
    }

    @Test
    fun testDriverConstraints() {
        val viewModel = getViewModelInSchoolMode("Dr")
        val state = viewModel.uiState.value
        
        // Check Limits
        assertEquals("Driver Max Speed should be 125.0", 125.0, state.maxSpeed, 0.01)
        assertEquals("Driver Min Speed should be 60.0", 60.0, state.minSpeed, 0.01)
        assertEquals("Driver Max Path should be 10.0", 10.0, state.maxPath, 0.01)
        
        // Simulate Max Power Input
        viewModel.updateSchoolModeInput(dragY = 1000f, dragX = 0f, screenHeight = 1000f, screenWidth = 1000f)
        
        // Execute Swing Logic (Shadowing logic from executeSchoolSwing to verify calculation)
        val power = viewModel.uiState.value.schoolPower // Should be 1.0
        val expectedSpeed = state.minSpeed + (state.maxSpeed - state.minSpeed) * power
        
        assertEquals("Max Power should yield Max Speed", 125.0, expectedSpeed, 0.1)
    }

    @Test
    fun testIronConstraints() {
        val viewModel = getViewModelInSchoolMode("7i")
        val state = viewModel.uiState.value
        
        assertEquals("Iron Max Speed should be 100.0", 100.0, state.maxSpeed, 0.01)
        assertEquals("Iron Max Path should be 8.0", 8.0, state.maxPath, 0.01)
        
        // Simulate 50% Power
        // Max Drag Y set to screenHeight * 0.4 in ViewModel logic.
        // ScreenHeight = 1000f -> MaxDrag = 400f.
        // Input 200f -> 0.5 Power
        viewModel.updateSchoolModeInput(dragY = 200f, dragX = 0f, screenHeight = 1000f, screenWidth = 1000f)
        
        val currentPower = viewModel.uiState.value.schoolPower
        assertEquals("Power should be roughly 0.5", 0.5f, currentPower, 0.01f)
        
        val expectedSpeed = 50.0 + (100.0 - 50.0) * 0.5
        assertEquals("50% Power should yield 75mph", 75.0, expectedSpeed, 0.1)
    }

    @Test
    fun testWedgeConstraints() {
        val viewModel = getViewModelInSchoolMode("LW")
        val state = viewModel.uiState.value
        
        assertEquals("Wedge Max Speed should be 85.0", 85.0, state.maxSpeed, 0.01)
        assertEquals("Wedge Min Speed should be 30.0", 30.0, state.minSpeed, 0.01)
        assertEquals("Wedge Max Path should be 6.0", 6.0, state.maxPath, 0.01)
    }
    @Test
    fun testSchoolModeVisualState() {
        // Verify that live speed and path values are updated correctly for the UI
        val viewModel = getViewModelInSchoolMode("Dr") // Driver: 60-125 MPH
        
        // 1. Simulate 50% Power Pull
        // ScreenHeight=1000, MaxDragY=400. Input 200 -> 0.5 Power.
        viewModel.updateSchoolModeInput(dragY = 200f, dragX = 0f, screenHeight = 1000f, screenWidth = 1000f)
        
        var state = viewModel.uiState.value
        assertEquals("Live Speed should be 50% of range (60-125)", 92.5, state.schoolCurrentSpeed, 0.1)
        assertEquals("Power Gauge should be 0.5", 0.5f, state.schoolPower, 0.01f)
        
        // 2. Simulate 100% Power
        viewModel.updateSchoolModeInput(dragY = 500f, dragX = 0f, screenHeight = 1000f, screenWidth = 1000f)
        state = viewModel.uiState.value
        assertEquals("Live Speed should be Max (125)", 125.0, state.schoolCurrentSpeed, 0.1)
        
        // 3. Simulate Path Deviation
        // MaxDragX=150. Input 150 (Right) -> Inverted -> Min Path (-10.0 for Driver)
        viewModel.updateSchoolModeInput(dragY = 200f, dragX = 150f, screenHeight = 1000f, screenWidth = 1000f)
        state = viewModel.uiState.value
        assertEquals("Path should be Min (Inverted)", -10.0f, state.schoolPath, 0.01f)
        
        // Input -75 (Left) -> Inverted -> +0.5 Path (+5.0)
        viewModel.updateSchoolModeInput(dragY = 200f, dragX = -75f, screenHeight = 1000f, screenWidth = 1000f)
        state = viewModel.uiState.value
        assertEquals("Path should be +5.0 (Inverted)", 5.0f, state.schoolPath, 0.01f)
    }
}
