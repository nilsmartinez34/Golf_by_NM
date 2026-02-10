plugins {
    alias(libs.plugins.kotlin.multiplatform)
    alias(libs.plugins.jetbrains.compose)
    // alias(libs.plugins.android.library)
    alias(libs.plugins.kotlin.compose)
}

kotlin {
    jvmToolchain(11)
    
    /*
    androidTarget {
        compilations.all {
            kotlinOptions {
                jvmTarget = "11"
            }
        }
    }
    */
    
    jvm()
    
    js(IR) {
        browser()
        binaries.executable()
        binaries.library()
    }
    
    sourceSets {
        commonMain.dependencies {
            // Add common dependencies here if needed
        }
        commonTest.dependencies {
            implementation(libs.kotlin.test)
        }
        /*
        val androidMain by getting {
            dependencies {
            }
        }
        */
                val jsMain by getting {
            dependencies {
                implementation(libs.compose.web.core)
                implementation("org.jetbrains.compose.runtime:runtime:1.7.0")
            }
        }
    }
}

/*
android {
    namespace = "com.example.golf_by_nm.core"
    compileSdk = 35
    defaultConfig {
        minSdk = 29
    }
}
*/
