import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function VnShop() {
    const navigation = useNavigation();

    return (
        <View style={styles.myWalletScreen}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }} >
                <Image style={styles.image} source={require("../assets/something/imageVnShop.png")} />
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff", marginRight: 20 }}>Xem tất cả</Text>
            </View>
            <View style={{ width: "100%", height: 190 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ flexGrow: 1, marginTop: 15, marginHorizontal: 10 }}
                >
                    <View style={{ width: 120, height: 160, backgroundColor: "#fff", borderRadius: 15 }}>
                        <View style={styles.flagTop} />
                        <View style={styles.flagBottom} />
                    </View>
                </ScrollView>
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
    flagTop: {
        width: 110,
        height: 56,
        backgroundColor: "red",
    },
    flagBottom: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: 0,
        height: 0,
        borderBottomWidth: 13,
        borderBottomColor: "transparent",
        borderLeftWidth: 55,
        borderLeftColor: "red",
        borderRightWidth: 55,
        borderRightColor: "red",
    },

});
