import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Container,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Share,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const shareOptions = {
    title: 'Whatisgoing',
    message: 'Blh blah', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'On over here please',
    subject: 'Check this out'
  };  

Contacts = ({route, navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Container style={{height: 600, width: 400}}> */}
        <Text>Here are some helpers you can ask</Text>
          <ScrollView horizontal={true} style={{flex:1}}>
            <View style={styles.cards}>
              <Button title="Helper 1" onPress={()=>navigation.navigate("Transition")}/>        
            </View>
            <View style={styles.cards}>
              <Button title="Helper 2"/>
            </View>
            <View style={styles.cards}>
              <Button title="Helper 3"/>        
            </View>
          </ScrollView>
        {/* </Container> */}
      <Button title="Add a helper" onPress={()=>Share.share(shareOptions)}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    cards: {
      height: 500,
      width: 300,
      padding: 10
    }
  });
  
export default Contacts;