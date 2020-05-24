import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListContact = ({ contact }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.listContact}>
                <ImageBackground style={styles.contact} source={require("../img/contact.png")}>
                    <Image style={styles.user_photo} source={require("../img/user_photo.png")}></Image>
                    <Text style={styles.text}>
                        {contact.helper_name}
                    </Text>
                    <Text style={styles.info}>
                        helped you {contact.helper_name} times
                        </Text>
                    <Image style={styles} source={require("../img/ask_for_help_button.png")}></Image>
                </ImageBackground>
            </TouchableOpacity>
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
        textAlign: "center",
    }
});

export default ListContact;
