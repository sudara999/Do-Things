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

const image = require("./img/7.png")

export default class MOpenSeven extends React.Component {
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
                                  style={{flex:1, backgroundColor:"rgba(255,0,0,0.1)", height:30, width:135,
                                  position:"absolute", bottom:25, right:15, zIndex:100}} 
                                  type="outline" title="Go to Second Demo" 
                                  onPress={() => this.navigation.navigate("MOpenEight")} />
                <View style={{flex:1, position:"absolute", top:30, right:40}}>
                <Toolbar style={{flex:1}} navigation={this.navigation}/>
                </View>
              </ImageBackground>
              {/* <Image source={image}></Image> */}
            </View>
        );
    };
}