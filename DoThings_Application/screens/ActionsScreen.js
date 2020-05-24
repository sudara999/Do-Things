
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import DothingsHeader from "../components/DothingsHeader";
import ContactsButton from '../components/ContactsButton';
import ListAction from '../components/ListAction';
import actionData from "../data/actions.json";
import VideoPlayer from 'react-native-video-controls';

export default class ActionsScreen extends React.Component {
  constructor({ navigation }) {
    super();
    this.state = {
      videoUri: null
    }
    this.navigation = navigation;
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
    console.log(videoUri);
    return (
      <View style={styles.container}>
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
        {videoUri && <VideoPlayer source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }} onEnd={this.playEnded}
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


