import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

function GeneralInfo() {
    return (
        <View style={{ alignItems: "center", backgroundColor: "#fff" }}>
            <View style={{ backgroundColor: "#f7f7f7", width: "85%", height: 120, borderRadius: 20, marginTop: 15, justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../assets/icon.png")} style={{ width: 40, height: 40 }} />
                <Text style={{ fontWeight: "bold", marginTop: 5 }}>Phiên bản 2.18.1</Text>
                <Text style={{ color: "#37aa78", fontWeight: "bold", marginTop: 5 }}>Đã cài đặt phiên bản mới nhất</Text>
            </View>
            <View style={{ width: "100%", marginTop: 30 }}>
                <View style={styles.component}>
                    <View style={{ flexDirection: "row", height: 40, alignItems: "center" }}>
                        <Ionicons name="book-outline" size={30} color="black" />
                        <Text style={{ fontWeight: "bold", marginLeft: 20 }}>Hướng dẫn sử dụng</Text>
                    </View>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
                <View style={styles.component}>
                    <View style={{ flexDirection: "row", height: 40, alignItems: "center" }}>
                        <MaterialCommunityIcons name="format-list-checks" size={30} color="black" />
                        <Text style={{ fontWeight: "bold", marginLeft: 20 }}>Điều khoản và dịch vụ</Text>
                    </View>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
                <View style={styles.component}>
                    <View style={{ flexDirection: "row", height: 40, alignItems: "center" }}>
                        <FontAwesome5 name="user-shield" size={27} color="black" />
                        <Text style={{ fontWeight: "bold", marginLeft: 20 }}>Chính sách bảo vệ dữ liệu cá nhân</Text>
                    </View>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
                <View style={styles.component}>
                    <View style={{ flexDirection: "row", height: 40, alignItems: "center" }}>
                        <Octicons name="checklist" size={30} color="black" />
                        <Text style={{ fontWeight: "bold", marginLeft: 20 }}>Biểu phí dịch vụ Ví VNPAY</Text>
                    </View>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 50 }}>
                <Ionicons name="shield-checkmark-outline" size={24} color="#37aa78" />
                <Text style={{ color: "#111", marginLeft: 15 }}>Bảo mật tuyệt đối thông tin của bạn</Text>
            </View>
            <View>
                <Text style={{ textAlign: "center", color: "#111", fontWeight: "bold", marginTop: 8 }}>
                    CÔNG TY CỔ PHẦN {'\n'} GIẢI PHÁP THANH TOÁN VIỆT NAM - VNPAY
                </Text>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    <Text style={{ textAlign: "center", color: "#111", marginTop: 8 }}>
                        Email hỗ trợ: 
                    </Text>
                    <Text style={{ textAlign: "center", color: "#111", marginTop: 8, marginLeft: 8 }}>
                        hotrovnpay@vnpay.vnpay
                    </Text>
                </View>
                <Pressable style={{flexDirection: "row", justifyContent: "center"}} onPress={() => alert("Đã gọi")}>
                    <Text style={{ textAlign: "center", color: "#37aa78", marginTop: 8 }}>
                        Hopline hỗ trợ: 1900 555577
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    component: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        width: "100%",
        backgroundColor: "#f7f7f7",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        paddingHorizontal: 20,
        marginTop: 10
    }
})

export default GeneralInfo
