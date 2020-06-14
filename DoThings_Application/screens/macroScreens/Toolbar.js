import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Container,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Share,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

export default class Toolbar extends React.Component {
    constructor(props) {
        super();
        this.state = {
          record: false,
          pause: false,
          sound: true,
          dropdown: false
        }
        console.log(props);
      }
    render() {
        return(
            <View style={{flex:1, flexDirection:"row", width: 130, height: 50}}>
              {/* <ImageBackground source={image} style={{flex:1}}>
              </ImageBackground> */}
              {/* <Image source={image}></Image> */}
              <TouchableOpacity onPress={()=>{this.setState({record:!this.state.record})}}>
                {!this.state.record && <Text>Record</Text>}
                {this.state.record && <Text>Stop</Text>}
              </TouchableOpacity>
              <View style={{flex:1}}>
              <TouchableOpacity onPress={()=>this.setState({dropdown:!this.state.dropdown})}>
                  <Text>DOTS</Text>
                </TouchableOpacity>
                {this.state.dropdown &&
                  <View style={{flex:1}}>
                    <TouchableOpacity onPress={()=>{this.setState({sound:!this.state.sound})}}>
                    {this.state.sound && <Text>Mute</Text>}
                    {!this.state.sound && <Text>UnMute</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({pause:!this.state.pause})}}>
                    {this.state.pause && <Text>Pause</Text>}
                    {!this.state.pause && <Text>UnPause</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.navigation.navigate("ActionsScreen")}}>
                      <Text>Disconnect</Text>
                    </TouchableOpacity>
                  </View>
                }
              </View>
            </View>
        );
    };
}