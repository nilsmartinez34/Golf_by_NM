# Golf by NM 🏌️‍♂️

**Golf by NM** is a high-fidelity **Kotlin Multiplatform (KMP)** golf simulator. It features a shared professional physics engine that powers both a native **Android** application and a **Web** simulator (PWA).

## ⛳ Features

-   **Professional Physics Engine (Shared Core)**:
    -   Implements **9-Laws of Ball Flight**.
    -   Advanced aerodynamics: Drag, Magnus Effect (Lift), Spin Decay.
    -   Unified logic for Trajectory and Putting simulation.
-   **Android App**:
    -   Built with **Jetpack Compose**.
    -   Interactive 3-Zone Layout (Data, Action, Setup).
    -   Touch-gesture swing simulation.
-   **Web Simulator (New!)**:
    -   Built with **Compose HTML**.
    -   Runs in any modern browser as a **Progressive Web App (PWA)**.
    -   Visualizes ball trajectories using HTML5 Canvas.

## 🏗️ Architecture

The project is structured as a Kotlin Multiplatform project:

-   **:golf-core**: The heart of the application.
    -   Contains all physics logic (`PhysicsEngine`, `PuttingPhysicsEngine`).
    -   Shared Data Models (`GolfModels.kt`).
    -   **Targets**: `androidLibrary`, `js(IR)` (Browser).
    -   **Web UI**: Located in `src/jsMain`, implementing the web simulator.
-   **:app**: The Android client.
    -   Depends on `:golf-core`.
    -   Handles Android-specific UI and lifecycle.

## 🚀 Physics Engine

The core physics logic is platform-agnostic, defined in `golf-core`:
-   **Initial Direction**: Mix of Face Angle (80%) and Swing Path (20%).
-   **Spin & Curvature**: Calculated from Club Loft, Attack Angle, and Face-to-Path delta.
-   **Environmental Factors**: Gravity, Air Density, Green Slope (Putting).

### Trajectory Mapping
| Swing Path | Face relative to Path | Effect |
| :--- | :--- | :--- |
| In-to-Out (+) | Square | **Draw** |
| Out-to-In (-) | Open (+) | **Slice** |
| Square | Square | **Straight** |

## �️ Tech Stack

-   **Language**: Kotlin (Multiplatform)
-   **Android UI**: Jetpack Compose
-   **Web UI**: Compose HTML / Kotlin JS
-   **Build System**: Gradle (Kotlin DSL)

## 📦 Build & Run

### Android
1.  Open in **Android Studio**.
2.  Select `app` configuration.
3.  Run on Device/Emulator.

### Web (PWA)
1.  Open terminal.
2.  Run: `./gradlew :golf-core:jsBrowserDevelopmentRun`
3.  Open `localhost:8080` to access the simulator.

---
*Developed by NM & Google Gemini Agent*
