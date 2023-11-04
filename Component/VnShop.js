import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    Pressable
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const data = [
    {image: require("../assets/vnpayshop/vnpayshop1.png")},
    {image: require("../assets/vnpayshop/vnpayshop2.png")},
    {image: require("../assets/vnpayshop/vnpayshop3.png")},
    {image: require("../assets/vnpayshop/vnpayshop4.png")},
    {image: require("../assets/vnpayshop/vnpayshop5.png")},
    {image: require("../assets/vnpayshop/vnpayshop6.png")},
];

export default function VnShop() {
    const navigation = useNavigation();

    return (
        <View style={styles.myWalletScreen}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }} >
                <Image style={styles.image} source={require("../assets/something/imageVnShop.png")} />
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff", marginRight: 20 }}>Xem tất cả</Text>
            </View>
            <View style={{ width: "100%", height: 190}}>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 2.5 }}>
                        <Image style={styles.image2} source={item.image} />
                    </View>
                )}
            />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    myWalletScreen: {
        width: "100%",
        height: 230,
        backgroundColor: "#019dd8",
    },
    image: {
        width: "59.5%",
        height: 39,
        resizeMode: "contain",
    },
    image2: {
        borderRadius: 10,
        width: 120,
        height: 160,
    },
});
