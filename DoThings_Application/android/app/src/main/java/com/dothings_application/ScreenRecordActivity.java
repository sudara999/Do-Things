// ! DONT CHANGE !
// ! USED FOR REFERENCE
package com.dothings_application;

import com.facebook.react.ReactActivity;

import android.content.Context;
import android.content.Intent;
import android.media.projection.MediaProjection;
import android.media.projection.MediaProjectionManager;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.util.Log;
import android.widget.Toast;

public class ScreenRecordActivity extends ReactActivity{

    // Constants
    private static final String TAG = "ScreenRecorder";
    private static final int PERMISSION_CODE = 1;

    // Actors
    private MediaProjectionManager mProjectionManager;
    private MediaProjection mMediaProjection;

    @Override
    public void onCreate(Bundle savedInstanceState) { 
        super.onCreate(savedInstanceState);

        // Create a projection manager
        mProjectionManager =
                (MediaProjectionManager) getSystemService(Context.MEDIA_PROJECTION_SERVICE);
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mMediaProjection != null) {
            mMediaProjection.stop();
        }
    }

    public void startSharingScreen() {
        if (mMediaProjection == null) {
            Log.i(TAG, "Requesting Permission to share screen");
            startActivityForResult(mProjectionManager.createScreenCaptureIntent(),
                    PERMISSION_CODE);
        }
        else{
            Log.i(TAG, "Screen is being shared");
        }
    }

    public void stopSharingScreen() {
        if (mMediaProjection != null){
            Log.i(TAG, "Stopping Screen share");
            mMediaProjection.stop();
        }
        else{
            Log.i(TAG, "Screen is not being shared");
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode != PERMISSION_CODE) {
            Log.e(TAG, "Unknown request code: " + requestCode);
        }
        else if (resultCode != RESULT_OK) {
            Toast.makeText(
                    this, "User denied screen sharing permission", Toast.LENGTH_SHORT
            ).show();
        }
        else{
            Log.i(TAG, "Starting screen sharing");
            mMediaProjection = mProjectionManager.getMediaProjection(resultCode, data);
            mMediaProjection.registerCallback(new MediaProjectionCallback(), null);
        }
    }

    private class MediaProjectionCallback extends MediaProjection.Callback {
        @Override
        public void onStop() {
            mMediaProjection = null;
        }
    }

}
// ! DONT CHANGE !
