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

const image = require("./img/2.png")

export default class MAppDrawer extends React.Component {
    constructor({ navigation }) {
        super();
        this.navigation = navigation;
      }
    render() {
        return(
            <View style={{flex:1}}>
              <ImageBackground source={image} style={{flex: 1}}>
                <TouchableOpacity backgroundColor="green" 
                                  style={{flex:1, backgroundColor:"rgba(255,0,0,0.1)", height:70, width:70,
                                  position:"absolute", bottom:230, left:160, zIndex:100}} 
                                  type="outline" title="Go to Second Demo" 
                                  onPress={() => this.navigation.navigate("MOpenThree")} />
                <View style={{flex:1, position:"absolute", top:20, right:-80}}>
                <Toolbar style={{flex:1}} navigation={this.navigation} recordState={true}/>
                </View>
              </ImageBackground>
            </View>
        );
    };
}