import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const EndScreenHeader = ({ title }) => {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require("../img/logo.jpg")}></Image>
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
        margin: 20,
        fontSize: 32,
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 38,
    },
    logo: {
        height: 60,
        margin: 20,
    }
});

export default EndScreenHeader;
