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

export default function Service() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Dịch vụ</Text>
                <Text style={{ fontWeight: "bold", color: "#054694" }}>Xem thêm</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8, paddingTop: 8 }}>
                
                    <View style={styles.borderIcon}>
                        <Image style={styles.icon} source={require("../assets/serviceImage/serviceTaxi-removebg-preview.png")} />
                        <Text style={styles.text}>VNPAY Taxi</Text>
                    </View>
                
                
                    <View style={styles.borderIcon}>
                        <Image style={styles.icon} source={require("../assets/serviceImage/serviceDatXeLienTinh-removebg-preview.png")} />
                        <Text style={styles.text}>Đặt xe liên tỉnh</Text>
                    </View>
                
                
                    <View style={styles.borderIcon}>
                        <Image style={styles.icon} source={require("../assets/serviceImage/serviceMuasanVnShop-removebg-preview.png")} />
                        <Text style={styles.text}>Mua sắm VnShop</Text>
                    </View>
                
                
                    <View style={styles.borderIcon}>
                        <Image style={styles.icon} source={require("../assets/serviceImage/serviceDatVeXemPhim-removebg-preview.png")} />
                        <Text style={styles.text}>Vé xem phim</Text>
                    </View>
                
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8, paddingTop: 8 }}>
                
                    <View style={styles.borderIcon}>
                        <Image style={styles.icon} source={require("../assets/serviceImage/serviceDatVeTau-removebg-preview.png")} />
                        <Text style={styles.text}>Đặt vé tàu</Text>
                    </View>
                
                
                    <View style={styles.borderIcon}>
                        <Image style={styles.icon} source={require("../assets/serviceImage/serviceDatVeMayBay-removebg-preview.png")} />
                        <Text style={styles.text}>Đặt vé máy bay</Text>
                    </View>
                
                
                    <View style={styles.borderIcon}>
                        <Image style={styles.icon} source={require("../assets/serviceImage/serviceTheThaoGiaiTri-removebg-preview.png")} />
                        <Text style={styles.text}>Thể thao - Giải trí</Text>
                    </View>
                
                
                    <View style={styles.borderIcon}>
                        <Image style={styles.icon} source={require("../assets/serviceImage/serviceMoTaiKhoanVCB-removebg-preview.png")} />
                        <Text style={styles.text}>Mở tài khoản VCB</Text>
                    </View>
                
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
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    borderIcon: {
        alignItems: "center", width: 80
    },
    icon: {
        height: 52,
        resizeMode: "contain",
    },
    text: {
        fontSize: 13,
        color: "#525252",
        textAlign: "center",
    }
});
