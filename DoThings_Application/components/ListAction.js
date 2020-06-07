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
    const display = (action.length == 2);
    return (
        <View>
            {display &&
                <View style={styles.container} >
                    <View style={styles.listAction}>
                        <TouchableOpacity onPress={() => handlePress((action[0]).path)}>
                            <ImageBackground style={styles.postIt} source={require("../img/post_it.png")}
                            >
                                <Text style={styles.text}>
                                    {action[0].action_name}
                                </Text></ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listAction}>
                        <TouchableOpacity onPress={() => handlePress((action[1]).path)} >
                            <ImageBackground style={styles.postIt} source={require("../img/post_it.png")}
                            >
                                <Text style={styles.text}>
                                    {action[1].action_name}
                                </Text></ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>}
            {!display &&
                <View>
                    <View style={styles.listAction} >
                        <TouchableOpacity onPress={() => handlePress((action[0]).path)}>
                            <ImageBackground style={styles.postIt} source={require("../img/post_it.png")}
                            >
                                <Text style={styles.text}>
                                    {action[0].action_name}
                                </Text></ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    listAction: {
        marginTop: 10,
        marginBottom: 30,
        marginHorizontal: 10,
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
