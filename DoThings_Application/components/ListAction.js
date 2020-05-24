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
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },

});

export default ListAction;
