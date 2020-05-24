
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Image,
  Text
} from 'react-native';
import DothingsHeader from "../components/DothingsHeader";
import ContactsButton from '../components/ContactsButton';
import ListAction from '../components/ListAction';
import actionData from "../data/actions.json";
import VideoPlayer from 'react-native-video-controls';

export default class ActionsScreen extends React.Component {
  constructor({ navigation, route }) {
    super();
    this.state = {
      videoUri: null,
      modalOpen: false,
    }
    this.navigation = navigation;
    this.route = route;
  }

  componentWillReceiveProps = () => {
    if( this.route.params?.newAction )
      console.log("mine: " + this.route.params.newAction);
      this.setState({modalOpen : true});
  }

  handlePress = (path) => {
    this.setState({ videoUri: path });
    console.log(path);
  }
  playEnded = () => {
    this.setState({ videoUri: null });
  }
  render() {
    const videoUri = this.state.videoUri;
    const modalOpen = this.state.modalOpen;
    console.log(videoUri);
    return (
      <View style={styles.container}>
        <Modal visible={modalOpen} transparent={true} onRequestClose={() => this.setState({ modalOpen: false })}>

          <View style={styles.modal_container}><ImageBackground style={styles.modal_background} animationType={"slide"}
            transparent={false} source={require("../img/modal_background.png")}>
               <TouchableOpacity onPress={() => this.setState({ modalOpen: false })} >
            <Image style={styles.back_modal_button} source={require("../img/back_modal_button.png")} />
            </TouchableOpacity>
            <Text style={styles.modal_text}>A new action has been added </Text>
            <TouchableOpacity onPress={() => this.setState({ modalOpen: false })} >
              <Image style={styles.check_it_out_button} source={require("../img/check_it_out_button.png")} />
            </TouchableOpacity>
          </ImageBackground></View>


        </Modal>
        {!videoUri && <DothingsHeader title="Actions" />}
        {!videoUri && <View style={styles.main_container}>
          <FlatList style={styles.action_section}
            data={actionData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              <ListAction action={item} handlePress={this.handlePress} />
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </View>}
        {videoUri && <VideoPlayer fullscreen={true} resizeMode="cover" source={require("../videos/sample1.mp4")}
          onEnd={this.playEnded}
          disableFullscreen={true}
          disablePlayPause={true}
          disableSeekbar={true}
          disableTimer={true}
          disableVolume={true}
          disableBack={true}
        />}
        {!videoUri &&
          <TouchableOpacity onPress={() => this.navigation.navigate("ContactsScreen")} activeOpacity={1}>
            <ContactsButton title="Actions" nav={this.navigation} />
          </TouchableOpacity>}
      </View>
    );
  }

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  back_modal_button: {
    marginVertical: 15
  },
  modal_text: {
    fontSize: 24,
    fontFamily: "Lato",
    fontWeight: "normal",
    width: 300,
    height: 75,
    marginVertical: 10,
    marginLeft: 20,
    textAlign: "center",
  },
  modal_background: {
    width: 350,
    height: 300
  },

  check_it_out_button: {
    marginVertical: 25
  },

  main_container: {
    backgroundColor: "rgba(214, 146, 118,1.0)",
    paddingVertical: 10,
    paddingHorizontal: 12,
    flex: 3,
  },
  action_section: {
    backgroundColor: 'white',
    flex: 3,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});


