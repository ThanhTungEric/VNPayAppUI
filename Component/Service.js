import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";

const service = [
    { icon: require("../assets/serviceImage/serviceTaxi-removebg-preview.png"), text: "VNPAY Taxi" },
    { icon: require("../assets/serviceImage/serviceDatXeLienTinh-removebg-preview.png"), text: "Đặt xe liên tỉnh" },
    { icon: require("../assets/serviceImage/serviceMuasanVnShop-removebg-preview.png"), text: "Mua sắm VnShop" },
    { icon: require("../assets/serviceImage/serviceDatVeXemPhim-removebg-preview.png"), text: "Vé xem phim" },
    { icon: require("../assets/serviceImage/serviceDatVeTau-removebg-preview.png"), text: "Đặt vé tàu" },
    { icon: require("../assets/serviceImage/serviceDatVeMayBay-removebg-preview.png"), text: "Đặt vé máy bay" },
    { icon: require("../assets/serviceImage/serviceTheThaoGiaiTri-removebg-preview.png"), text: "Thể thao - Giải trí" },
    { icon: require("../assets/serviceImage/serviceMoTaiKhoanVCB-removebg-preview.png"), text: "Mở tài khoản VCB" },
]

export default function Service() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Dịch vụ</Text>
                <Text style={{ fontWeight: "bold", color: "#054694" }}>Xem thêm</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <FlatList
                    data={service}
                    numColumns={4}
                    renderItem={({ item }) => (
                        <View style={styles.borderIcon}>
                            <Image style={styles.icon} source={item.icon} />
                            <Text style={styles.text}>{item.text}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 220,
        backgroundColor: "#fff",
        marginTop: 10,
        paddingHorizontal: 10
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    borderIcon: {
        alignItems: "center",
        width: 93,
        paddingHorizontal: 5
    },
    icon: {
        width: 52,
        height: 52,
        resizeMode: "contain",
    },
    text: {
        fontSize: 13,
        color: "#525252",
        textAlign: "center",
    }
});
