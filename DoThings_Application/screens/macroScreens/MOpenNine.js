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

const image = require("./img/9.png")

export default class MOpenNine extends React.Component {
    constructor({ navigation }) {
        super();
        this.navigation = navigation;
      }    
    render() {
        return(
            <View style={{flex:1}}>
              <ImageBackground source={image} style={{flex: 1}}>
                <View style={{flex:1, position:"absolute", top:30, right:40}}>
                <Toolbar style={{flex:1}} navigation={this.navigation}/>
                </View>
              </ImageBackground>
              {/* <Image source={image}></Image> */}
            </View>
        );
    };
}