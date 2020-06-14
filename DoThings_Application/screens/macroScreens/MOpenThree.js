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

const image = require("./img/3.png")

export default class MOpenThree extends React.Component {
    constructor({ navigation }) {
        super();
        this.navigation = navigation;
      }        
    componentDidMount = () => {
      setTimeout(()=>{this.navigation.navigate("MOpenFour")},2000);
    }
    render() {
        return(
            <View style={{flex:1}}>
              <ImageBackground source={image} style={{flex: 1}}>
              </ImageBackground>
            </View>
        );
    };
}