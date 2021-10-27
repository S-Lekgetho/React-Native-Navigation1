import React from "react";
import {View, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function nextScreen({ route, navigation }){
    return(
    <ScrollView>
        <View style = {style.viewContainer}>

            <Text style = {style.text}>Welcome To Your Next Screen From CODETRIBE!!!</Text>

        </View>
    </ScrollView>
    )
}

const style = StyleSheet.create({
viewContainer:{
    backgroundColor:'#ff8c00',
    paddingTop: 200,
    height: 500
},

text:{
    fontFamily:'Brush Script MT',
    color:'#ffd700',
    fontSize: 25,
    textAlign: 'center',
    borderColor: '#bdb76b',
    backgroundColor: '#bdb76b',
    marginLeft: 157,
    borderWidth: 5,
    width: 300,
    borderRadius: 20

}

});