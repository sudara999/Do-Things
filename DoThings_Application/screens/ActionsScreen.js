
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
// import actionData2 from "../data/actions2.json";
import VideoPlayer from 'react-native-video-controls';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


export default class ActionsScreen extends React.Component {
  constructor({ navigation, route }) {
    super();
    this.state = {
      videoUri: null,
      notiModalOpen: false,
      overlayModalOpen: false,
      added: false,
      scrollIndex: 0,
      data: [],
      paused: false

    }
    this.navigation = navigation;
    this.route = route;
    this.list = React.createRef();
    this.storeData(actionData);
    this.getData();
    // if (this.route.params?.newAction) {
    //   console.log("mine: " + this.route.params.newAction);
    //   this.state.notiModalOpen = true;
    //   this.state.added = true;
    //   this.route.params.newAction = false;
    // }

    this.post_it_colors = [[require('../img/post_it.png'), require('../img/post_it_2.png')],
    [require('../img/post_it_3.png'), require('../img/post_it_4.png')],
    [require('../img/post_it_6.png'), require('../img/post_it_5.png')]];
  }

  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      //console.log(jsonValue);
      await AsyncStorage.setItem('actions', jsonValue)
    } catch (e) {
      console.log(e);
    }
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('actions')
      if (jsonValue != null) {
        this.setState({ data: JSON.parse(jsonValue) })
      };

    } catch (e) {
      console.log(e)
    }
  }

  UNSAFE_componentWillReceiveProps = () => {
    if (this.route.params?.newAction) {
      console.log("mine: " + this.route.params.newAction);
      this.getData();
      this.setState({ notiModalOpen: true, added: true });
    }
  }

  handlePress = (path) => {
    this.setState({ videoUri: path, overlayModalOpen: true });
    console.log(path);
  }

  handleRight = () => {
    this.list.current.scrollToIndex({
      animated: true,
      index: this.state.scrollIndex + 1,
      viewPosition: 0.5
    });
    console.log("moved to right");
  }

  handleLeft = () => {
    this.list.current.scrollToIndex({
      animated: true,
      index: this.state.scrollIndex - 1,
      viewPosition: 0.5
    });
    console.log("moved to left");
  }

  playStarted = () => {
    this.setState({ overlayModalOpen: true });
  }

  playEnded = () => {
    this.setState({ videoUri: null, overlayModalOpen: false });
  }

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    this.setState({ scrollIndex: viewableItems[0].index })
  }

  render() {
    const videoUri = this.state.videoUri;
    const notiModalOpen = this.state.notiModalOpen;
    const right = (this.state.scrollIndex < this.state.data.length - 1);
    const left = (this.state.scrollIndex > 0);
    const paused = this.state.paused;
    const overlayModalOpen = this.state.overlayModalOpen;

    return (
      <View style={styles.container}>
        <Modal visible={notiModalOpen} transparent={true} onRequestClose={() => this.setState({ notiModalOpen: false })}>
          <View style={styles.modal_container}><ImageBackground style={styles.modal_background} animationType={"slide"}
            transparent={false} source={require("../img/modal_background.png")}>
            <TouchableOpacity onPress={() => this.setState({ notiModalOpen: false })} >
              <Image style={styles.back_modal_button} source={require("../img/back_modal_button.png")} />
            </TouchableOpacity>
            <Text style={styles.modal_text}>A new action has been added </Text>
            <TouchableOpacity onPress={() => this.setState({ notiModalOpen: false })} >
              <Image style={styles.check_it_out_button} source={require("../img/check_it_out_button.png")} />
            </TouchableOpacity>
          </ImageBackground></View>
        </Modal>



        {!videoUri && <DothingsHeader title="Actions" />}
        {!videoUri && <View style={styles.main_container}>
          <View style={{ flex: 3 }}>
            <FlatList
              ref={this.list}
              style={styles.action_section}
              data={this.state.data}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={this.onViewableItemsChanged}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50
              }}
              renderItem={({ item, index }) =>
                <ListAction action={item} design={this.post_it_colors[index % 3]} handlePress={this.handlePress} />
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View >
          {right && <View style={styles.right}>
            <TouchableWithoutFeedback onPress={this.handleRight}>
              <Image source={require("../img/right.png")} />
            </TouchableWithoutFeedback>
          </View>}
          {left && <View style={styles.left} >
            <TouchableWithoutFeedback onPress={this.handleLeft} >
              <Image source={require("../img/left.png")} />
            </TouchableWithoutFeedback>
          </View>
          }
        </View>}
        {videoUri && <VideoPlayer fullscreen={true} resizeMode="cover" source={require("../videos/sample1.mp4")}
          onEnd={this.playEnded}
          onPlay={this.playStarted}
          disableFullscreen={true}
          disablePlayPause={true}
          disableSeekbar={true}
          disableTimer={true}
          disableVolume={true}
          disableBack={true}
          fullscreen={true}
          paused={paused}
        />}
        <Modal visible={overlayModalOpen} transparent={true} onRequestClose={() => this.setState({ overlayModalOpen: false })}>
          <View style={styles.overlay_modal_container}><ImageBackground style={styles.overlay_modal_background} animationType={"slide"}
            transparent={false} source={require("../img/overlay_modal_background.png")}>
            {!paused && <TouchableOpacity onPress={() => this.setState({ paused: true })} >
              <Image style={styles.pause_modal_button} source={require("../img/pause_button.png")} />
            </TouchableOpacity>}
            {paused && <TouchableOpacity onPress={() => this.setState({ paused: false })} >
              <Image style={styles.pause_modal_button} source={require("../img/play_button.png")} />
            </TouchableOpacity>}
            <TouchableOpacity onPress={() => this.setState({ paused: false, videoUri: null, overlayModalOpen: false })} >
              <Image style={styles.pause_modal_button} source={require("../img/stop_button.png")} />
            </TouchableOpacity>
          </ImageBackground></View>
        </Modal>
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
    position: "relative"
  },
  action_section: {
    backgroundColor: 'white',
    flex: 3,
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    zIndex: 1,
  },
  right: {
    position: "absolute",
    right: 10,
    top: 250,
    zIndex: 1
  },
  left: {
    position: "absolute",
    left: 10,
    top: 250,
    zIndex: 1
  },
  overlay_modal_container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flex: 4,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'transparent'
  },
  overlay_modal_background: {
    width: 106,
    height: 47,
    flexDirection: 'row'
  },
  pause_modal_button: {
    marginVertical: 5,
    marginLeft: 10
  }
});


