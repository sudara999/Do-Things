import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DothingsHeader = ({ title }) => {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require("../img/contacts_logo.png")}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: "#ffff",
        position: 'relative',
        alignItems: 'center',
        height: 70,
    },
    text: {
        color: '#000',
        fontSize: 23,
        textAlign: 'center',
        margin: 50,
        fontSize: 32,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 38,
    },
    logo: {
        height: 50,
        margin: 20,
    }
});

export default DothingsHeader;
