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

const sound = require("./img/sound.png")
const disconnect = require("./img/disconnect.png")
const dots = require("./img/dots.png")
const mute = require("./img/mute.png")
const pause = require("./img/pause.png")
const record = require("./img/record.png")
const stop = require("./img/stop.png")
const play = require("./img/play.png")

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
        this.navigation = props.navigation;
      }
    render() {
        return(
            <View style={{flex:1, flexDirection:"row", width: 200, height: 200, backgroundColor: "rgba(0,0,0,0)"}}>
              <TouchableOpacity onPress={()=>{this.setState({record:!this.state.record})}}>
                {!this.state.record && <Image source={record}></Image>}
                {this.state.record && 
                <TouchableOpacity onPress={()=>{}}>
                <Image source={stop}></Image>
                </TouchableOpacity>}
              </TouchableOpacity>
              <View style={{flex:1}}>
              <TouchableOpacity onPress={()=>this.setState({dropdown:!this.state.dropdown})}>
                <Image source={dots}></Image>
                </TouchableOpacity>
                {this.state.dropdown &&
                  <View style={{flex:1}}>
                    <TouchableOpacity onPress={()=>{this.setState({sound:!this.state.sound})}}>
                    {this.state.sound && <Image source={sound}></Image>}
                    {!this.state.sound && <Image source={mute}></Image>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.setState({pause:!this.state.pause})}}>
                    {this.state.pause && <Image source={pause}></Image>}
                    {!this.state.pause && <Image source={play}></Image>}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.navigation.navigate("ActionsScreen")}}>
                      <Image source={disconnect}></Image>
                    </TouchableOpacity>
                  </View>
                }
              </View>
            </View>
        );
    };
}