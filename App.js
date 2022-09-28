import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Scr1 from './scr/scr1';
import Scr2 from './scr/scr2';

const Stack = new  createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Option1" component={Scr1} />
        <Stack.Screen name="Option2" component={Scr2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}