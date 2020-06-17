import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import ContactsHeader from "../components/ContactsHeader"
import GoBackButton from "../components/GoBackButton"
// import contactsData from "../data/contacts.json"
import contactsData2 from "../data/contacts2.json"
import ListContact from "../components/ListContact"
import AsyncStorage from '@react-native-community/async-storage';


export default class ContactsScreen extends React.Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
    this.state = {
      added: false,
      scrollIndex: 0,
      data: []
    };
    this.storeData(contactsData);
    this.getData();
    this.list = React.createRef();
  }

  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      //console.log(jsonValue);
      await AsyncStorage.setItem('contacts', jsonValue)
    } catch (e) {
      console.log(e);
    }
  }

  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('contacts')
      if (jsonValue != null) {
        this.setState({ data: JSON.parse(jsonValue) })
      };

    } catch (e) {
      console.log(e)
    }
  }

  change = () => {
    this.setState({ added: true });
  }
  onViewableItemsChanged = ({ viewableItems, changed }) => {
    this.setState({ scrollIndex: viewableItems[0].index })
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

  render() {
    var right;
    if (this.state.added == true) {
      right = (this.state.scrollIndex < contactsData2.length - 1);
    }
    else {
      right = (this.state.scrollIndex < this.state.data.length - 1);
    }
    const left = (this.state.scrollIndex > 0);

    //console.log(this.state.data);
    return (
      <View style={styles.container}>

        <ContactsHeader title="Contacts" />
        <View style={styles.main_container}>
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
          <FlatList ref={this.list} style={styles.action_section}
            data={this.state.added ? contactsData2 : this.state.data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={this.onViewableItemsChanged}
            viewabilityConfig={{
              itemVisiblePercentThreshold: 50
            }}
            renderItem={({ item }) =>
              <ListContact contact={item} navigation={this.navigation} change={this.change} />
            }
            keyExtractor={(item, index) => index.toString()}
          />

        </View>
        <TouchableOpacity onPress={() => this.navigation.navigate("ActionsScreen")} activeOpacity={1}>
          <GoBackButton title="Actions" nav={this.navigation} />
        </TouchableOpacity>
      </View>
    );
  }
}
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
  add_a_helper_background: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
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

