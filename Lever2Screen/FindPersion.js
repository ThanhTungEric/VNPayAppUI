import React from 'react'
import { View, StyleSheet, Text, Image, StatusBar, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function FindPersion({ route, navigation }) {
    const { scannedData } = route.params;
    console.log(scannedData);
    const parts = scannedData.split("_");

    const phoneNumber = parts[0];
    const fullName = parts.slice(1).join(" ");
    return (
        <View>
            <View style={{height: 30, backgroundColor: "pink"}}></View>
            <View style={{ width: "100%", height: 60, backgroundColor: "pink", flexDirection: "row", alignItems: "center" }}>
                <AntDesign style={{ marginLeft: 15 }} name="arrowleft" size={24} color="black" />
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Image style={{ width: 50, height: 50 }} source={require("../assets/icons/avtpersion.png")}></Image>
                    <View style={{marginLeft: 15, justifyContent: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 17, textTransform: "uppercase"}}>{fullName}</Text>
                        <Text style={{fontSize: 15}}>{phoneNumber}</Text>
                    </View>
                </View>
            </View>
            <TextInput style={{width: "100%", height: 50, backgroundColor: "white", marginTop: 10, paddingLeft: 15}} placeholder="Nhập tin nhắn"></TextInput>
            <StatusBar style="auto" />
        </View>
    )
}

export default FindPersion
