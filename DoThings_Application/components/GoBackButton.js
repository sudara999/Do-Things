import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ContactsButton = ({ title }) => {
    return (
        <View style={styles.footer} onPress={() => Alert.alert("test")}>
            <Image style={styles.button} source={require("../img/goback_button.png")}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        backgroundColor: "rgba(214, 146, 118,1.0)",
        alignItems: 'center',
        height: 70,
    },
    button: {
        margin: 18,
    }
});

export default ContactsButton;