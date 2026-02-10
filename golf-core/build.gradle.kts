plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.jetbrains.compose)
    alias(libs.plugins.android.library)
}

kotlin {
    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
            }
        }
    }
    
    jvm()
    
    js(IR) {
        browser()
        binaries.executable()
    }
    
    sourceSets {
        commonMain.dependencies {
            // Add common dependencies here if needed
        }
        commonTest.dependencies {
            implementation(libs.kotlin.test)
        }
        val androidMain by getting {
            dependencies {
            }
        }
        val jsMain by getting {
            dependencies {
                implementation(libs.compose.web.core)
            }
        }
    }
}

android {
    namespace = "com.example.golf_by_nm.core"
    compileSdk = 35
    defaultConfig {
        minSdk = 29
    }
}
