import React from 'react';
import { View, Text, Image, StyleSheet, Share, TouchableOpacity } from 'react-native';

const DothingsHeader = ({ title }) => {
    const shareOptions = {
        title: 'Whatisgoing',
        message: 'This person requests your help on the app DoThings', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'On over here please',
        subject: 'Check this out'
    };
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require("../img/contacts_logo.png")}></Image>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity onPress={() => { Share.share(shareOptions); change() }}>
                <Image style={styles.add} source={require("../img/add_button.png")}></Image>
            </TouchableOpacity>
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
        margin: 47,
        fontSize: 32,
        // fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 38,
    },
    logo: {
        height: 50,
        margin: 20,
    },
    add: {
        marginTop: 10,
    }
});

export default DothingsHeader;
