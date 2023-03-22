import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../config/colors';

function MainScreen ({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: colors.secondary, paddingTop: 50, paddingBottom: 50, borderRadius: 10}}>
        <Text style={{textAlign: "center", justifyContent: "center", padding: 5, color: "black", fontSize: 15, marginTop: 15,}}>Detail Menu</Text>
        
        <View style={{width: 150, height: 60, backgroundColor:colors.primary, borderRadius: 10, marginLeft: 120, marginTop: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
            <Text style={{textAlign: "center", justifyContent: "center", padding: 5, color: "white", fontSize: 15, marginTop: 15,}}>Profil</Text>
            </TouchableOpacity>
        </View>
        
        <View style={{width: 150, height: 60, backgroundColor:colors.primary, borderRadius: 10, marginLeft: 120, marginTop: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={{textAlign: "center", justifyContent: "center", padding: 5, color: "white", fontSize: 15, marginTop: 15,}}>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default MainScreen