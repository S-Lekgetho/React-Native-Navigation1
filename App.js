import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NavScreen from './NavScreen';

const Stack = createNativeStackNavigator();

const myStack = () => {
  return(
    <NavigationContainer>
           <Stack.Navigator>
             <Stack.Screen name ='HomeScreen' component = {HomeScreen} options = {{title:'Home'}} />
             <Stack.Screen name ='NavScreen' component = {NavScreen} options = {{title:'Detail'}} /> 
           </Stack.Navigator>
    </NavigationContainer>
  )
}

export default myStack;
  