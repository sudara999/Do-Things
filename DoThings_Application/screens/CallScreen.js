import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import { NativeModules } from 'react-native';

const ScreenRecorder = NativeModules.ScreenRecorder;

function startRecordingScreen() {
  console.log(NativeModules);
  console.log(ScreenRecorder);
  ScreenRecorder.startSharingScreen();
}

function stopRecordingScreen() {
  ScreenRecorder.stopSharingScreen();
  this.navigation.navigate("EndScreen")

}

export default class CallScreen extends React.Component {
  constructor({ navigation }) {
    super();
    this.state = {
      videoUri: null
    }
    this.navigation = navigation;
  }

  handlePress = (path) => {
    this.setState({ videoUri: path });
    //console.log(path);
  }
  playEnded = () => {
    this.setState({ videoUri: null });
    // Alert.alert("TESTING ENDING");
    this.navigation.navigate("EndScreen");
  }
  render() {
    const videoUri = this.state.videoUri;
    return (
      <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
        {!videoUri && <View style={{ flex: 1, top: 100, backgroundColor: "white", width: 300, height: 300 }}>
          <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={require('../img/profileIcon.png')} style={{ height: 200, width: 200 }} />
          </View>
          <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 25, fontFamily: "Arial" }}>Mom</Text>
            <Image source={require('../img/askforhelp.png')} style={{ top: 10 }} />
          </View>
          <View style={{ flex: 1, flexDirection: "row", left: -30 }}>
            <TouchableOpacity onPress={this.handlePress}>
              <Image source={require('../img/accept.png')} style={{ top: 10 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.navigation.navigate("ActionsScreen")}>
              <Image source={require('../img/decline.png')} style={{ top: 10 }} />
            </TouchableOpacity>
          </View>
        </View>}
        {videoUri && <VideoPlayer fullscreen={true} resizeMode="cover" style={{ flex: 1 }} source={require("../videos/sample1.mp4")} onEnd={this.playEnded}
          disableFullscreen={true}
          disablePlayPause={true}
          disableSeekbar={true}
          disableTimer={true}
          disableVolume={true}
          disableBack={true}
        />}
      </View>
    );
  };
}