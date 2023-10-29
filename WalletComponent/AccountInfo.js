import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Bold } from "react-native-feather";

export default function AccountInfo() {
    return (
        <View style={styles.AccountInfoScreen}>

            <View style={styles.UserInfo}>

                <View style={styles.UserBorder}>
                    <FontAwesome5 name="user-alt" size={40} color="#b8b8b8" />
                </View>
                <View style={styles.profile}>
                    <EvilIcons name="camera" size={35} color="black" />
                    <Text> Cài ảnh đại diện </Text>
                </View>
                <View style={styles.MyQr}>
                    <FontAwesome name="qrcode" size={25} color="black" />
                    <Text> Mã QR của tôi </Text>
                </View>
            </View>
            <View style={styles.Account}>
                <Text style={{ color: "#b9b9b9" }}>Họ và Tên</Text>
                <View style={styles.AccountInfo}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginTop: 2, fontWeight: "bold" }}>NGUYỄN THANH TÙNG </Text>
                    </View>
                </View>
            </View>
            <View style={styles.Account}>
                <Text style={{ color: "#b9b9b9" }}>Số điện thoại</Text>
                <View style={styles.AccountInfo}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ marginTop: 2, fontWeight: "bold" }}>0812718942 </Text>
                    </View>
                </View>
            </View>
            <View style={styles.Account}>
                <Text style={{ color: "#b9b9b9" }}>Email</Text>
                <View style={styles.AccountInfo2}>
                    <View style={{ flexDirection: "row", }}>
                        <View style={{ flexDirection: "row", }}> <Text style={{ marginTop: 2, fontWeight: "bold" }}>thanhtungeric4@gmail.com </Text>
                            <Ionicons name="md-checkmark-circle" size={20} color="green" />
                        </View>
                    </View>
                    <SimpleLineIcons name="note" size={25} color="black" />
                </View>
            </View>
            <View style={{ width: "100%", backgroundColor: "#f0f0f0", height: 10 }}> </View>
            <View style={styles.auth}>
                <View> 
                    <Text style={{fontWeight:Bold}}> Thông tin định danh </Text>
                    <Text> Chi tiết </Text>
                </View>

            </View>


            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    AccountInfoScreen: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",

    },
    UserBorder: {
        backgroundColor: "#f0f0f0",
        height: 80,
        width: 80,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    UserInfo: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

    },
    profile: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 10
    },
    MyQr: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: 35
    },
    Account: {
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        marginLeft: 10,
        padding: 10,
        marginTop: 10,
    },
    AccountInfo: {
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomWidth: 1, // Add a 1 pixel bottom border
        borderBottomColor: "#b9b9b9", // Set the border color
    },
    AccountInfo2: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
});
