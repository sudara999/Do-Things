package com.dothings_application;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.media.projection.MediaProjection;
import android.media.projection.MediaProjectionManager;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.util.Log;
import android.widget.Toast;

import java.util.Map;
import java.util.HashMap;

public class ScreenRecorderModule extends ReactContextBaseJavaModule {

  // Constants
  private static final String TAG = "ScreenRecorder";
  private static final int PERMISSION_CODE = 1;

  // State Variables
  private static ReactApplicationContext reactContext;

  // Actors
  private MediaProjectionManager mProjectionManager;
  private MediaProjection mMediaProjection;
  private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
      Log.i(TAG, "onActivityResult called");
      if (requestCode != PERMISSION_CODE) {
        Log.e(TAG, "Unknown request code: " + requestCode);
      }
      else if (resultCode != Activity.RESULT_OK) {
        Toast.makeText(
                getReactApplicationContext(), "User denied screen sharing permission", Toast.LENGTH_SHORT
        ).show();
      }
      else{
        // start screen sharing
        Log.i(TAG, "Starting screen sharing");
        mMediaProjection = mProjectionManager.getMediaProjection(resultCode, data);
        mMediaProjection.registerCallback(new MediaProjectionCallback(), null);
      }
    }
  };
  private final LifecycleEventListener mLifecycleEventListener = new LifecycleEventListener() {
    @Override
    public void onHostResume() {
        // Activity `onResume`
        Log.i(TAG, "onHostResume called");
    }

    @Override
    public void onHostPause() {
        // Activity `onPause`
        Log.i(TAG, "onHostPause called");
    }

    @Override
    public void onHostDestroy() {
        // Activity `onDestroy`
        Log.i(TAG, "onHostDestroy called");
        if (mMediaProjection != null) {
          mMediaProjection.stop();
        }
    }
  };

  ScreenRecorderModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
    // Register onActivityResult
    reactContext.addActivityEventListener(mActivityEventListener);
    // Register onDestroy
    reactContext.addLifecycleEventListener(mLifecycleEventListener);
    // Create a Projection Manager
    mProjectionManager =
      (MediaProjectionManager) reactContext.getSystemService(Context.MEDIA_PROJECTION_SERVICE);
  }

  @Override
  public String getName() {
    return "ScreenRecorder";
  }

  @ReactMethod
  public void startSharingScreen() {
    Activity currentActivity = getCurrentActivity();
    if (mMediaProjection == null) {
        // Get permsission to share screen
        Log.i(TAG, "Requesting Permission to share screen");
        currentActivity.startActivityForResult(mProjectionManager.createScreenCaptureIntent(),
                PERMISSION_CODE);
    }
    else{
        Log.i(TAG, "Screen is being shared");
    }
  }

  @ReactMethod
  public void stopSharingScreen() {
    if (mMediaProjection != null){
        Log.i(TAG, "Stopping Screen share");
        mMediaProjection.stop();
    }
    else{
        Log.i(TAG, "Screen is not being shared");
    }
  }

  private class MediaProjectionCallback extends MediaProjection.Callback {
    @Override
    public void onStop() {
        mMediaProjection = null;
    }
  }
}