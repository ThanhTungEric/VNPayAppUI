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

export default function Poster() {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 1 }}
            >
                <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 2.5 }}>
                    <Image style={styles.image} source={require("../assets/poster/poster1.png")} />
                </View>
                <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 2.5 }}>
                    <Image style={styles.image} source={require("../assets/poster/poster2.png")} />
                </View>
                <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 2.5 }}>
                    <Image style={styles.image} source={require("../assets/poster/poster3.png")} />
                </View>
                <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 2.5 }}>
                    <Image style={styles.image} source={require("../assets/poster/poster4.png")} />
                </View>
                <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 2.5 }}>
                    <Image style={styles.image} source={require("../assets/poster/poster5.png")} />
                </View>
                <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 2.5 }}>
                    <Image style={styles.image} source={require("../assets/poster/poster6.png")} />
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 130,
        backgroundColor: "#fff",
        marginTop: 10,
    },
    image: {
        borderRadius: 10,
        width: 300,
        height: 120,
    },
});
