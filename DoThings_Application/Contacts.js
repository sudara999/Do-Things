import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Share,
} from 'react-native';

// import Share from 'react-native-share';
// const shareOptions = {
//     title: 'Share via',
//     message: 'some message',
//     url: 'some share url',
//     social: Share.Social.EMAIL,
//     whatsAppNumber: "9199999999",  // country code + phone number
//     // filename: 'test' , // only for base64 file in Android
// };

const shareOptions = {
    title: 'Whatisgoing',
    message: 'Blh blah', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'On over here please',
    subject: 'Check this out'
  };  

Contacts = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here are some helpers you can ask</Text>
      <Button title="Helper 1" onPress={()=>Alert.alert("Hello! I am helper 1!")}/>
      <Button title="Helper 2"/>
      <Button title="Helper 3"/>
      <Button title="Add a helper" onPress={()=>Share.share(shareOptions)}/>
      </View>
    );
  }

  
export default Contacts;