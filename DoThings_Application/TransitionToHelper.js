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

export default function TransitionToHelper({navigation}) {
    return (
        <View>
            <Text>Now we will show the perspective of the Helper</Text>
            <Button title="Show Helper Screen" onPress={()=>navigation.navigate("CallScreen")}/>
        </View>
    );
}