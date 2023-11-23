import { View, StyleSheet, Text, Image, StatusBar, TextInput, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from "react-native";

function FindPersion({ route, navigation }) {
    const { scannedData } = route.params;
    const [money, setMoney] = React.useState(0);
    const [title, setTitle] = React.useState("NHẬP NỘI DUNG CHUYỂN TIỀN");

    const [userFinded, setUserFinded] = useState([]);
    const [nameUserFinded, setNameUserFinded] = useState('');
    const [phoneUserFinded, setPhoneUserFinded] = useState('');
    console.log(scannedData);
    const parts = scannedData.split("_");

    const phoneNumber = parts[0];
    const fullName = parts.slice(1).join(" ");

    const findUser = async () => {
        if (phoneNumber.length < 10 || phoneNumber.length > 11) {
            Alert.alert("Số điện thoại không hợp lệ");
            return;
        }
        else {
            try {
                const response = await fetch('https://650c005f47af3fd22f66d7d8.mockapi.io/api/user');
                const users = await response.json();
                const existingUser = users.find((user) => user.phone === phoneNumber);
                if (existingUser) {
                    const data = JSON.stringify(existingUser);
                    setUserFinded(data);
                    setNameUserFinded(existingUser.fullName);
                    setPhoneUserFinded(existingUser.phone);
                    console.log('User found in FindPerson.js:', existingUser);
                }
            } catch (error) {
                console.error('Error during phone number check:', error);
            }
        }
    }
    useFocusEffect(
        React.useCallback(() => {
            findUser();
        }, [])
    );
    const handelNext = () => {
        if (money == 0) {
            Alert.alert("Thông báo", "Vui lòng nhập số tiền");
        } else {
            navigation.navigate("ConfirmMoneyQR", {
                data: userFinded,
                money: money,
                title: title,
            });
        }
    };
    return (
        <View>
            <View style={{ height: 30 }}></View>
            <View style={{ width: "100%", height: 60, flexDirection: "row", alignItems: "center" }}>
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Image style={{ width: 50, height: 50 }} source={require("../assets/icons/avtpersion.png")}></Image>
                    <View style={{ marginLeft: 15, justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 17, textTransform: "uppercase" }}>
                            {nameUserFinded ? nameUserFinded : fullName}
                        </Text>
                        <Text style={{ fontSize: 15 }}>{phoneNumber}</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 50, alignItems: "center" }}>
                <TextInput
                    placeholder="Nhập số tiền"
                    style={styles.input}
                    onChangeText={(text) => setMoney(text)}
                    value={money}
                    keyboardType="numeric"
                />
                <View style={{ backgroundColor: "#fff", width: "90%", borderWidth: 1, borderColor: "#f0f0f0", borderRadius: 15, paddingHorizontal: 10, paddingVertical: 10, marginTop: 20 }}>
                    <Text style={{ color: "#949494", fontWeight: "400" }}>Nội dung giao dịch</Text>
                    <TextInput style={{ width: "100%", backgroundColor: "white", marginTop: 5, fontWeight: "bold", color: "#111" }}
                        onChangeText={(text) => setTitle(text)}
                        value={title}></TextInput>
                </View>
            </View>
            <Pressable onPress={handelNext} style={{ width: "90%", height: 50, backgroundColor: "#004a9b", borderRadius: 15, marginTop: 50, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 17 }}>Tiếp tục</Text>
            </Pressable>
            <StatusBar style="auto" />
            <StatusBar style="auto" />
        </View>
    )
}

export default FindPersion;
const styles = StyleSheet.create({
    input: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "gray",
        height: 50,
    },
    phoneBook: {
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 20,
        fontSize: 15,
    },
});
