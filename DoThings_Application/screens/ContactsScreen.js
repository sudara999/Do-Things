import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Button,
  Share,
} from 'react-native';

import ContactsHeader from "../components/ContactsHeader";
import GoBackButton from "../components/GoBackButton"

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
  render(navigation) {
    return (
      <View style={styles.container}>

        <ContactsHeader title="Contacts" />
        <View style={styles.main_container}>
          <ScrollView horizontal={true} style={{ flex: 1 }}>
            <View style={styles.cards}>
              <Button title="Helper 1" onPress={() => this.navigation.navigate("Transition")} />
            </View>
            <View style={styles.cards}>
              <Button title="Helper 2" />
            </View>
            <View style={styles.cards}>
              <Button title="Helper 3" />
            </View>
          </ScrollView>
          {/* </Container> */}
          <Button title="Add a helper" onPress={() => Share.share(shareOptions)} />
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
    padding: 10,
    flex: 3,
  },
  cards: {
    height: 500,
    width: 300,
    padding: 10
  }
});

