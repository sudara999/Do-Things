import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListAction = ({ action, handlePress }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.listAction} onPress={() => handlePress((action[1]).path)}>
                <ImageBackground style={styles.postIt} source={require("../img/post_it.png")}
                >
                    <Text style={styles.text}>
                        {action[0].action_name}
                    </Text></ImageBackground>
            </TouchableOpacity>
            {(action[1].action_name!="Nonee") && <TouchableOpacity style={styles.listAction} onPress={() => handlePress((action[1]).path)} >
                <ImageBackground style={styles.postIt} source={require("../img/post_it.png")}
                >
                    <Text style={styles.text}>
                        {action[1].action_name}
                    </Text></ImageBackground>
            </TouchableOpacity>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listAction: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postIt: {
        width: 250,
        height: 200,
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
        fontStyle: "italic",
        width: 230,
        height: 180,
        textAlign: "center",
        textAlignVertical: "center"
    }
});

export default ListAction;
