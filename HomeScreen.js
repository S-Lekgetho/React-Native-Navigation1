import React from "react";
import { StyleSheet, View, Button, ScrollView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();


const HomeScreen = ({navigation}) =>{
    return(
     
        <View style = {style.viewContainer}>
            <Text style={style.homeText}>This Is Your HomeScreen</Text><br/>
            <View style = {style.btnContainer}>
            <Button color='#ffa500' borderRadius='50' title='NEXT SCREEN' onPress ={
                () => navigation.navigate('NavScreen')
            } />
            </View>
        </View>

    )
}

const style = StyleSheet.create({
viewContainer:{
backgroundColor:'#1e90ff',
height: 500,
paddingTop: 200
},
    
homeText:{
    textAlign: 'center',
    fontFamily: 'Brush Script MT',
    fontSize: 35,
    color: '#ffd700'
},

btnContainer:{
    marginLeft: 257,
    width: 95
},

})

export default HomeScreen;