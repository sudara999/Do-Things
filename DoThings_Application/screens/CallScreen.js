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
  ImageBackground
} from 'react-native';

export default function CallScreen() {
    return (
        <View style={{flex:1, backgroundColor:"white", alignItems:"center"}}>
            {/* <ImageBackground source={require("./img/callFrame.png")} style={{flex:1, alignItems:"center"}}> */}
                <View style={{flex:1,top:100, backgroundColor:"white", width: 300, height: 300}}>
                    <View style={{backgroundColor: "white", flex: 1, justifyContent: "center", alignItems:"center"}}>
                        <Image source={require('../img/profileIcon.png')} style={{height:200, width:200}}/>
                    </View>
                    <View style={{backgroundColor: "white", flex: 1, justifyContent: "center", alignItems:"center"}}>
                        <Text style={{fontSize: 25, fontFamily: "Arial"}}>Mom</Text>
                        <Image source={require('../img/askforhelp.png')} style={{top: 10}}/>
                    </View>
                    <View style={{flex: 1, flexDirection: "row", left:-30}}>
                        <Image source={require('../img/accept.png')} style={{top: 10}}/>
                        <Image source={require('../img/decline.png')} style={{top: 10}}/>
                    </View>
                </View>
            {/* </ImageBackground> */}
        </View>
    );
}