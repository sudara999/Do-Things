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
import Toolbar from "./Toolbar";

const image = require("./img/5.png")

export default class MOpenFive extends React.Component {
    constructor({ navigation }) {
        super();
        this.navigation = navigation;
      }    
    render() {
        return(
            <View style={{flex:1}}>
              <ImageBackground source={image} style={{flex: 1}}>
                {/* <TouchableOpacity onPress={()=>{console.log("test")}} style={{flex:1, width: "100px", height: "100px"}}>
                  <View style={{flex:1, width:"100px", height:"100px", top:"300px", left:"300px", backgroundColor:"blue"}}>
                  </View>
                </TouchableOpacity> */}
                <TouchableOpacity backgroundColor="green" 
                                  style={{flex:1, backgroundColor:"rgba(255,0,0,0.1)", height:30, width:350,
                                  position:"absolute", top:5, left:10, zIndex:100}} 
                                  type="outline" title="Go to Second Demo" 
                                  onPress={() => this.navigation.navigate("MOpenSix")} />
                <View style={{flex:1, position:"absolute", top:20, right:-80}}>
                <Toolbar style={{flex:1}} navigation={this.navigation} recordState={true}/>
                </View>
              </ImageBackground>
              {/* <Image source={image}></Image> */}
            </View>
        );
    };
}