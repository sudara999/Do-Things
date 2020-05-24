/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import ContactsScreen from "./screens/ContactsScreen"
import TransitionToHelper from './TransitionToHelper';
import CallScreen from './screens/CallScreen';
import ActionsScreen from "./screens/ActionsScreen";
import EndScreen from "./screens/EndScreen";
// import DothingsHeader from "./components/DothingsHeader";


function reactIntro({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Text>
              <Button
                title="Go to Contacts"
                onPress={() => navigation.navigate('Contacts', {
                  test: 'helloworld'
                })}
              />
              <Button
                title="Testing Macro Screen"
                onPress={() => navigation.navigate('macroScreen')}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
            </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default function App({ navigation }) {
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="ActionsScreen">
        <Stack.Screen name="Intro" component={reactIntro} />
        {/* <Stack.Screen name="Contacts" component={Contacts} options={{headerTitle:()=><DothingsHeader title="Contacts"/>, headerLeft:null}}/> */}
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transition" options={{ headerShown: false }} component={TransitionToHelper} />
        <Stack.Screen name="CallScreen" options={{ headerShown: false }} component={CallScreen} />
        {/* <Stack.Screen name="macroScreen" component={macroScreen} options={{headerTitle:()=><DothingsHeader title="Actions"/>, headerLeft:null}}/> */}
        <Stack.Screen name="ActionsScreen" component={ActionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EndScreen" component={EndScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    }</NavigationContainer>
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
});
