import React, { useCallback, useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Pressable } from "react-native";


function BillQR({ navigation, route }) {
    const { data, money, title } = route.params;
    const dataJson = JSON.parse(data);
    console.log("data in ConfirmMoney của người nhận", dataJson.phone);
    console.log("money in ConfirmMoney", money);
    console.log("title in ConfirmMoney", title);

    const getUserData = async () => {
        try {
          const storedUserData = await AsyncStorage.getItem('user');
          if (storedUserData !== null) {
            const userObject = JSON.parse(storedUserData);
            const apiEndpoint = `https://650c005f47af3fd22f66d7d8.mockapi.io/api/user/${userObject.id}`;
            const response = await fetch(apiEndpoint);
            const apiUserData = await response.json();
            await AsyncStorage.setItem('user', JSON.stringify(apiUserData));
          }
        } catch (error) {
          console.error('Error retrieving or updating user data:', error);
        }
      };
    useFocusEffect(
        React.useCallback(() => {
          getUserData();
        }, [])
      );

    return (
        <ImageBackground
            source={require('../assets/icons/Arendelle.jpg')}
            style={styles.container}
        >
            <View style={styles.gradient}>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Kết quả giao dịch</Text>
                </View>
                <View style={{ marginTop: 20, backgroundColor: "#fff", width: "95%", borderRadius: 20, alignItems: "center", paddingBottom: 50 }}>
                    <Image style={{ width: 100, height: 30, marginTop: 20 }} source={require("../assets/icons/Loginlogo.png")} />
                    <View style={{ backgroundColor: "#f4f7f5", flexDirection: "row", paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20, marginTop: 10 }}>
                        <AntDesign name="checkcircle" size={24} color="#45c48c" />
                        <Text style={{ fontSize: 17, color: "#45c48c", fontWeight: "bold", marginLeft: 5 }}>Giao dịch thành công</Text>
                    </View>
                    <Text style={{ color: "#111", fontWeight: "bold", fontSize: 25 }}>{money} VND</Text>


                    <View style={{ width: "95%" }}>
                        <View style={styles.key}>
                            <Text style={{ color: "#858585", fontSize: 17 }}>Số điện thoại</Text>
                            <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>{dataJson.phone}</Text>
                        </View>
                        <View style={styles.key}>
                            <Text style={{ color: "#858585", fontSize: 17 }}>Chủ ví nhận tiền</Text>
                            <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>{dataJson.fullName}</Text>
                        </View>
                        <View style={styles.key}>
                            <Text style={{ color: "#858585", fontSize: 17 }}>Số tiền (VND)</Text>
                            <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>{money}</Text>
                        </View>
                        <View style={styles.key}>
                            <Text style={{ color: "#858585", fontSize: 17 }}>Phí giao dịch (VND)</Text>
                            <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>Miễn phí</Text>
                        </View>
                        <View style={styles.key}>
                            <Text style={{ color: "#858585", fontSize: 17 }}>Nội dung</Text>
                            <View style={{ width: "50%", alignSelf: "flex-end"}}>
                                <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold", flexWrap: 'wrap',textAlign: 'right' }}>{title}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", width: "90%", marginTop: 20 }}>
                        <View style={{ alignItems: "center" }}>
                            <View style={{ backgroundColor: "#f7f7f7", width: 45, height: 45, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                                <AntDesign name="message1" size={24} color="black" />
                            </View>
                            <Text>
                                Trò chuyện
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={{ backgroundColor: "#f7f7f7", width: 45, height: 45, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                                <Feather name="share-2" size={24} color="black" />
                            </View>
                            <Text>
                                Chia sẻ
                            </Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <View style={{ backgroundColor: "#f7f7f7", width: 45, height: 45, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
                                <AntDesign name="questioncircleo" size={24} color="black" />
                            </View>
                            <Text>
                                Trò chuyện
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", width: "90%", marginTop: 50, justifyContent: 'center' }}>
                    <Pressable
                        onPress={() => navigation.navigate("HomeScreen")}
                        style={{ backgroundColor: "#024a9c", width: 150, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Quay lại trang chủ</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

export default BillQR;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        width: "100%",
    },
    key: {
        flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", paddingVertical: 10
    }
})
