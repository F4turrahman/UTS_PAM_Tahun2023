import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

export default function ImagePickerExample( {navigation} ) {
  const [image, setImage] = useState(null);

  const pickImage = async ({ navigation }) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        <View style={{width: 260, height: 60, backgroundColor:colors.primary, borderRadius: 10, marginLeft: 0, marginTop: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate("Profil")}>
                <Text style={{textAlign: "center", justifyContent: "center", padding: 5, color: "white", fontSize: 15, marginTop: 15,}}>Kembali</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}