package com.game2048

import android.graphics.Color
import android.os.Bundle;
import android.view.View
import androidx.core.content.ContextCompat
import org.devio.rn.splashscreen.SplashScreenReactPackage;

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    // Make SplashScreen display until it is hidden in App.tsx
    SplashScreen.show(this)

    // Get the root view
    val rootView: View = findViewById(android.R.id.content)

    // Get the background color from colors.xml
    val backgroundColor = ContextCompat.getColor(this, R.color.colorPrimary)

    // Set the background color directly
    rootView.setBackgroundColor(backgroundColor)

    super.onCreate(null)
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "Game2048"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
