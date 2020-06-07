
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
import actionData2 from "../data/actions2.json";
import VideoPlayer from 'react-native-video-controls';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

console.disableYellowBox = true;

export default class ActionsScreen extends React.Component {
  constructor({ navigation, route }) {
    super();
    this.state = {
      videoUri: null,
      modalOpen: false,
      added: false,
      scrollIndex: 0,
      right: true,
      left: true
    }
    this.navigation = navigation;
    this.route = route;
    this.list = React.createRef();
  }

  componentWillReceiveProps = () => {
    if (this.route.params?.newAction)
      console.log("mine: " + this.route.params.newAction);
    this.setState({ modalOpen: true, added: true });
  }

  handlePress = (path) => {
    this.setState({ videoUri: path });
    console.log(path);
  }

  handleRight = () => {
    console.log(this.list.current.getScrollableNode());
    this.list.current.scrollToIndex({
      animated: true,
      index: this.state.scrollIndex + 1,
      viewPosition: 0
    });
    console.log("moved to right");
  }

  handleLeft = () => {
    this.list.current.scrollToIndex({
      animated: true,
      index: this.state.scrollIndex - 1,
      viewPosition: 0
    });
    console.log("moved to left");
  }

  playEnded = () => {
    this.setState({ videoUri: null });
  }

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    this.setState({ scrollIndex: viewableItems[0].index })
  }

  render() {
    const videoUri = this.state.videoUri;
    const modalOpen = this.state.modalOpen;
    const right = (this.state.scrollIndex < actionData.length - 1);
    const left = (this.state.scrollIndex > 0);

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
          <View style={{ flex: 3 }}>
            <FlatList
              ref={this.list}
              style={styles.action_section}
              data={this.state.added ? actionData2 : actionData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={this.onViewableItemsChanged}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 50
              }}
              renderItem={({ item }) =>
                <ListAction action={item} handlePress={this.handlePress} />
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
  }
});


