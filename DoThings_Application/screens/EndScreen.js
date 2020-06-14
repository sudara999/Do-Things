import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Header from '../components/EndScreenHeader';
import AsyncStorage from '@react-native-community/async-storage';

export default function EndScreen({ navigation }) {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            //console.log(jsonValue);
            await AsyncStorage.setItem('actions', jsonValue);
            navigation.navigate("ActionsScreen", {
                newAction: true,
            });
        } catch (e) {
            console.log(e);
        }
    };
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('actions')
            console.log(jsonValue);
            if (jsonValue != null) {
                var actions = JSON.parse(jsonValue);
                var newAction = {
                    "action_name": title,
                    "time_stamp": "2020/05/05",
                    "recorded_by": "Tyler Kim",
                    "description": description,
                    "path": "./videos/test.mp4"
                }
                if (actions[actions.length - 1].length == 1) {
                    actions[actions.length - 1].push(newAction);
                }
                else {
                    actions.push([newAction]);
                }
                console.log(actions);
                storeData(actions);
            };

        } catch (e) {
            console.log(e)
        }
    };

    const handleSave = () => {
        getData();
        navigation.navigate("ActionsScreen", {
            newAction: true,
        })
    };

    return (
        <View style={styles.container}>
            <Header title='Save an Action'></Header>
            <Text style={styles.text}>Title</Text>
            <TextInput
                onChangeText={text => setTitle(text)}
                style={styles.textInput}
                placeholder='Enter a title' />
            <Text style={styles.text}>Description</Text>
            <TextInput
                onChangeText={text => setDescription(text)}
                style={[styles.textInput, { height: 300 }]}
                placeholder="Describe the action" />
            <View style={{ flex: 2, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={handleSave}>
                    <Image source={require("../img/save_button.png")}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 20 }}>
                    <Image source={require("../img/discard_button.png")}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image source={require("../img/continue_button.png")}></Image>
                </TouchableOpacity></View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(214, 146, 118, 1)",
        flex: 1,
    },
    text: {
        fontSize: 24,
        fontFamily: "Lato",
        fontWeight: "normal",
        fontStyle: "italic",
        width: 150,
        height: 50,
        marginLeft: 20,
        textAlign: "left",
        textAlignVertical: "center",
        marginTop: 10
    },
    textInput: {
        fontSize: 24,
        fontFamily: "Lato",
        fontWeight: "normal",
        fontStyle: "italic",
        width: 350,
        height: 50,
        textAlign: "left",
        left: 22.5,
        // marginTop: 10,
        marginBottom: 10,
        textAlignVertical: "top",
        borderRadius: 5,
        backgroundColor: 'white',
    }
});