import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListAction = ({ action, handlePress }) => {
    return (
        <TouchableOpacity style={styles.listAction}>
            <View>
                <Text onPress={() => handlePress(action.path)} >
                    {action.action_name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listAction: {
        padding: 15,

        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default ListAction;
