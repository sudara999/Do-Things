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
} from 'react-native';

export default function TransitionToHelper({ navigation }) {
    return (
        <View style={{ alignItems: "center", justifyContent: "space-between", flex: 1 }}>
            <Text style={{ padding: 15, paddingTop: 40, fontSize: 25, textAlign: "center" }}>For the next step, we will show the perspective of the person giving help</Text>
            <Text style={{ padding: 15, fontSize: 25, textAlign: "center" }}>First, the person will receive a notification that the person has asked for help.</Text>
            <Text style={{ padding: 15, fontSize: 25, textAlign: "center" }}>On Accepting, you will then be able to record your actions on the other person's phone.</Text>
            <Button color="green" type="outline" title="Show Helper Screen" onPress={() => navigation.navigate("CallScreen")} />
            <Button title="Press this button to go back to the contacts page" onPress={() => navigation.navigate("ContactsScreen")} />
        </View>
    );
}