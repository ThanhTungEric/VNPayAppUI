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
import { StatusBar } from "expo-status-bar";

const poster = [
    { image: require("../assets/poster/poster1.png") },
    { image: require("../assets/poster/poster2.png") },
    { image: require("../assets/poster/poster3.png") },
    { image: require("../assets/poster/poster4.png") },
    { image: require("../assets/poster/poster5.png") },
    { image: require("../assets/poster/poster6.png") },
];

export default function Poster() {
    return (
        <View style={styles.container}>
            <FlatList
                data={poster}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ alignItems: "center", flexDirection: "row", marginHorizontal: 2.5 }}>
                        <Image style={styles.image} source={item.image} />
                    </View>
                )}
            />
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
