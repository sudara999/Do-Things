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

export default function CallScreen() {
    return (
        <View>
            <Text>This is supposed to show a kakaotalk-style call</Text>
            <Button title="Accept" />
            <Button title="Decline" />
        </View>
    );
}