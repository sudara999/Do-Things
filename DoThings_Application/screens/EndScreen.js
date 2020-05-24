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
  TextInput,
  TouchableOpacity
} from 'react-native';
import Header from '../components/DothingsHeader';

export default function EndScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Header title='Save an Action'></Header>
            <Text style={styles.text}>Title</Text>
            <TextInput
                style={styles.textInput} 
                placeholder='Enter a title'/>
            <Text style={styles.text}>Description</Text>
            <TextInput 
                style={[styles.textInput, {height: 250}]}
                placeholder="Describe the action"/>
            <View style={{flex: 1, flexDirection:"row"}}>
            <TouchableOpacity 
                onPress={()=>navigation.navigate("ActionsScreen", {
                  newAction: true,
                })}>
                <Image source= { require("../img/save_button.png") }></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source= { require("../img/discard_button.png") }></Image>
            </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image source= { require("../img/continue_button.png") }></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: "rgba(214, 146, 118, 1)",
        flex:1,
    },
    text: {
        fontSize: 24,
        fontFamily: "Lato",
        fontWeight: "normal",
        fontStyle: "italic",
        width: 150,
        height: 50,
        textAlign: "left",
        textAlignVertical: "center",
        margin: 10,
    },
    textInput: {
        fontSize: 24,
        fontFamily: "Lato",
        fontWeight: "normal",
        fontStyle: "italic",
        width: 350,
        height: 50,
        textAlign: "left",
        left:22.5,
        // marginTop: 10,
        marginBottom: 10,
        textAlignVertical: "center",
        backgroundColor: 'white',
    }
});