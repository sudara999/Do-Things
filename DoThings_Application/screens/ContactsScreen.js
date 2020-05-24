import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';

import ContactsHeader from "../components/ContactsHeader"
import GoBackButton from "../components/GoBackButton"
import contactsData from "../data/contacts.json"
import contactsData2 from "../data/contacts2.json"
import ListContact from "../components/ListContact"


export default class ContactsScreen extends React.Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
    this.state = {
      added: false
    }
  }

  change = () => {
      this.setState({added: true});
  }
  
  render() {
    return (
      <View style={styles.container}>

        <ContactsHeader title="Contacts" />
        <View style={styles.main_container}>
          <FlatList style={styles.action_section}
            data={this.state.added?contactsData2:contactsData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              <ListContact contact={item} navigation={this.navigation} change={this.change}/>
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
  add_a_helper_background: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

