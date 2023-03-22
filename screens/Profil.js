import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../config/colors';

function Profil ({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor: colors.blue, paddingTop: 50, paddingBottom: 50, borderRadius: 10}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
                style={{width: 200, height: 200, resizeMode: 'contain'}}
                source={require("../assets/FotoIjazah.jpg")}
            />
        </View>

        <View style={{width: 300, height: 60, backgroundColor:colors.bgColor, borderRadius: 10, marginLeft: 50, marginTop: 30}}>
            <Text style={{textAlign: "center", justifyContent: "center", color: "white", fontSize: 15, marginTop: 15,}}>Nama : Muhammad Duta Faturrahman</Text>
        </View>

        <View style={{width: 300, height: 60, backgroundColor:colors.bgColor, borderRadius: 10, marginLeft: 50, marginTop: 30}}>
            <Text style={{textAlign: "center", justifyContent: "center", color: "white", fontSize: 15, marginTop: 15,}}>NIM : 120140065</Text>
        </View>

        <View style={{width: 300, height: 60, backgroundColor:colors.bgColor, borderRadius: 10, marginLeft: 50, marginTop: 30}}>
            <Text style={{textAlign: "center", justifyContent: "center", color: "white", fontSize: 15, marginTop: 15,}}>Alamat : Jln. Kesuma Bangsa No. 70</Text>
        </View>

        <View style={{width: 300, height: 60, backgroundColor:colors.secondary, borderRadius: 10, marginLeft: 50, marginTop: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate("Upload")}>
                <Text style={{textAlign: "center", justifyContent: "center", padding: 5, color: "white", fontSize: 15, marginTop: 15,}}>Upload Foto Profil Baru</Text>
            </TouchableOpacity>
        </View>

        <View style={{width: 300, height: 60, backgroundColor:colors.primary, borderRadius: 10, marginLeft: 50, marginTop: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                <Text style={{textAlign: "center", justifyContent: "center", padding: 5, color: "white", fontSize: 15, marginTop: 15,}}>Kembali</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Profil