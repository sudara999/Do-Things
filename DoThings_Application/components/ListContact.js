import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image,
    Share
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListContact = ({ contact, navigation, change }) => {
    const [cardImage, useCardImage] = useState([
        require('../img/user_photo.png'),
        require('../img/user_photo_2.png'),
        require('../img/user_photo_3.png'),
        require('../img/user_photo_4.png')]);
    const shareOptions = {
        title: 'Whatisgoing',
        message: 'This person requests your help on the app DoThings', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'On over here please',
        subject: 'Check this out'
    };
    const { last } = contact;
    return (
        <View style={styles.container}>
            {!last &&
                <View style={styles.listContact}>
                    <ImageBackground style={styles.contact} source={require("../img/contact.png")}>
                        <Image style={styles.user_photo} source={cardImage[contact.id]}></Image>
                        <Text style={styles.text}>
                            {contact.helper_name}
                        </Text>
                        <Text style={styles.info}>
                            helped you {contact.times} times
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Transition")}>
                            <Image source={require("../img/ask_for_help_button.png")}></Image>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>}
            {last &&
                <View style={styles.listContact}>
                    <ImageBackground style={styles.add_helper_section} source={require("../img/add_helper_background.png")}>
                        <Image style={styles.plus} source={require("../img/plus.png")}></Image>
                        <Text style={styles.info_2}>
                            You have to add a helper first.
                        </Text>
                        <Text style={styles.info_2}>
                            A helper can create actions for you to replay later.
                        </Text>
                        <TouchableOpacity onPress={() => { Share.share(shareOptions); }}>
                            <Image style={styles.button} source={require("../img/add_a_helper_button.png")}></Image>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>}
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContact: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    user_photo: {
        marginTop: 20
    },
    add_helper_section: {
        width: 250,
        height: 450,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginRight: 15,
        marginVertical: 25,
    },
    plus: {
        marginTop: 20
    },
    contact: {
        width: 250,
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginRight: 15,
        marginVertical: 25,
    },
    text: {
        fontSize: 24,
        fontFamily: "Lato",
        fontWeight: "normal",
        width: 230,
        height: 75,
        paddingTop: 10,
        textAlign: "center",
    },
    info: {
        fontSize: 16,
        fontFamily: "Lato",
        fontWeight: "normal",
        fontStyle: "italic",
        width: 230,
        height: 125,
        textAlign: "center"
    },
    info_2: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: "Lato",
        fontWeight: "normal",
        fontStyle: "italic",
        width: 230,
        height: 50,
        textAlign: "center"
    },
    button: {
        marginTop: 65
    }
});

export default ListContact;
