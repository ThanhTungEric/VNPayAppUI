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

export default function SuggestionForYou() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontWeight: "bold", fontSize: 16}}>Gợi ý cho bạn</Text>
                <Text style={{color: "#004a9b", fontWeight: "bold", fontSize: 16 }}> Xem tất cả</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 1 }}
            >
                <View style={styles.component}>
                    
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
    component: {marginTop: 10,
        alignItems: "center", flexDirection: "row", marginHorizontal: 2.5, width: 300, height: 120, backgroundColor: "#111"
    },
});
