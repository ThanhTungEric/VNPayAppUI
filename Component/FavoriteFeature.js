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

export default function FavoriteFeature() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Yêu thích</Text>
                <Text style={{ fontWeight: "bold", color: "#054694" }}>Tùy chỉnh</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8, paddingTop: 8 }}>
                <TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <Image style={styles.icon} source={require("../assets/icons/chuyentien.png")} />
                        <Text style={styles.text}>Chuyển tiền</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ alignItems: "center", width: 72 }}>
                        <Image style={styles.icon} source={require("../assets/icons/naptiendienthoai.png")} />
                        <Text style={styles.text}>Điểm quét VNPAY-QR</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ alignItems: "center", width: 72 }}>
                        <Image style={styles.icon} source={require("../assets/icons/quetmaqr.png")} />
                        <Text style={styles.text}>Nạp tiền điện thoại</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <Image style={styles.icon} source={require("../assets/icons/dien.png")} />
                        <Text style={styles.text}>Điện</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 123,
        backgroundColor: "#fff",
    },
    title: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        width: 55,
        height: 55,
        resizeMode: "contain",
    },
    text: {
        fontSize: 13,
        color: "#525252",
        textAlign: "center",
    }
});
