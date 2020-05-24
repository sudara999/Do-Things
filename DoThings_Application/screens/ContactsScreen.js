import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Button,
  Share,
} from 'react-native';

import ContactsHeader from "../components/ContactsHeader"
import GoBackButton from "../components/GoBackButton"
import contactsData from "../data/contacts.json"
import ListContact from "../components/ListContact"
const shareOptions = {
  title: 'Whatisgoing',
  message: 'This person requests your help on the app DoThings', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: 'On over here please',
  subject: 'Check this out'
};

export default class ContactsScreen extends React.Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
  }
  render() {
    return (
      <View style={styles.container}>

        <ContactsHeader title="Contacts" />
        <View style={styles.main_container}>
          <FlatList style={styles.action_section}
            data={contactsData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              <ListContact contact={item} />
            }
            keyExtractor={(item, index) => index.toString()}
          />

          {/* <Button title="Add a helper" onPress={() => Share.share(shareOptions)} /> */}
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
});

