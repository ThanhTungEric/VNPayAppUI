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

const favoriteFeature = [
    {icon: require("../assets/icons/chuyentien.png"), text: "Chuyển tiền"},
    {icon: require("../assets/icons/naptiendienthoai.png"), text: "Điểm quét VNPAY-QR"},
    {icon: require("../assets/icons/quetmaqr.png"), text: "Nạp tiền điện thoại"},
    {icon: require("../assets/icons/dien.png"), text: "Điện"},
]

export default function FavoriteFeature() {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Yêu thích</Text>
                <Text style={{ fontWeight: "bold", color: "#054694" }}>Tùy chỉnh</Text>
            </View>

            <View style={{backgroundColor: "pink", justifyContent: "center", alignItems: "center"}}>
            <FlatList
                data={favoriteFeature}
                numColumns={4}
                style={{ marginTop: 10}}
                renderItem={({ item }) => (
                    <View style={{ alignItems: "center", width: 85 }}>
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
        height: 123,
        backgroundColor: "#fff",
        paddingHorizontal: 10
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
