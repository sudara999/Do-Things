import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Modal,
    Image
} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListAction = ({ action, handlePress, design }) => {
    const display = (action.length == 2);
    const [modalOpen, setModalOpen] = useState(false);
    const [state, setState] = useState({
        selected: {
        }
    });
    const handleModalOpen = (action) => {
        setModalOpen(true);
        //    console.log(action.action_name);
        //     console.log(state.selected); 
        setState(prevState => {
            return { ...prevState, selected: action }
        });

    };
    return (
        <View>
            <Modal visible={modalOpen} transparent={true} onRequestClose={() => this.setState({ modalOpen: false })}>
                <View style={styles.modal_container}><ImageBackground style={styles.modal_background} animationType={"slide"}
                    transparent={false} source={require("../img/modal_background_action.png")}>
                    <TouchableOpacity onPress={() => setModalOpen(false)} style={styles.back_modal_button} >
                        <Image source={require("../img/back_modal_button.png")} />
                    </TouchableOpacity>
                    <Text style={styles.modal_title}>{state.selected.action_name} </Text>
                    <Text style={styles.modal_description}>{state.selected.description} </Text>
                    <Text style={styles.modal_recorded_by}>Recorded By{state.selected.recorded_by} </Text>
                    <TouchableOpacity style={styles.play_this_action_button} onPress={() => {
                        setModalOpen(false);
                        handlePress(state.selected.path);
                        setState(prevState => {
                            return { ...prevState, selected: action }
                        });
                    }} >
                        <Image source={require("../img/play_this_action_button.png")} />
                    </TouchableOpacity>

                </ImageBackground></View>
            </Modal>
            {display &&
                <View style={styles.container} >
                    <View style={styles.listAction}>
                        <TouchableOpacity onPress={() => handleModalOpen(action[0])}>
                            <ImageBackground style={styles.postIt} source={design[0]}
                            >
                                <Text style={styles.text}>
                                    {action[0].action_name}
                                </Text></ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listAction}>
                        <TouchableOpacity onPress={() => handleModalOpen(action[1])} >
                            <ImageBackground style={styles.postIt} source={design[1]}
                            >
                                <Text style={styles.text}>
                                    {action[1].action_name}
                                </Text></ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>}
            {!display &&
                <View>
                    <View style={{
                        marginBottom: 30,
                        marginHorizontal: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} >
                        <TouchableOpacity onPress={() => handleModalOpen((action[0]))}>
                            <ImageBackground style={styles.postIt} source={design[0]}>
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
        justifyContent: 'space-between',
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
    },
    modal_container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        backgroundColor: "rgba(0,0,0,0.4)"
    },
    modal_background: {
        width: 300,
        height: 500,
        position: "relative"
    },
    back_modal_button: {
        position: "absolute",
        top: 10,
        left: 3
    },
    modal_title: {
        position: "absolute",
        top: 100,
        left: 15,
        fontSize: 22,
        fontWeight: "bold",
        width: "90%"
    },
    modal_description: {
        position: "absolute",
        top: 150,
        left: 15,
        fontSize: 18,
        width: "90%"
    },
    modal_recorded_by: {
        position: "absolute",
        top: 400,
        left: 15,
        textAlign: "right",
        fontSize: 18,
        fontStyle: "italic",
        width: "90%"
    },
    play_this_action_button: {
        position: "absolute",
        top: 435,
        left: 15
    }

});

export default ListAction;
