import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Menu() {
    return (
        <View style={{ marginTop: 44, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <View style={styles.cricleUser}>
                    <FontAwesome5 name="user-alt" size={24} color="#b8b8b8" />
                </View>
                <View style={styles.VNpayTaxi}>
                    <Image
                        style={{ width: 40, height: 40, resizeMode: "contain" }}
                        source={require("../assets/icons/VNPayTaxi.png")}
                    />

                </View>
                <View style={styles.VNpayTaxi}>
                    <Image
                        style={{ width: 40, height: 40, resizeMode: "contain" }}
                        source={require("../assets/icons/Vigiadinh.png")}
                    />

                </View>
                <View style={styles.VNpayTaxi}>
                    <Image
                        style={{ width: 40, height: 40, resizeMode: "contain" }}
                        source={require("../assets/icons/Vnshop.png")}
                    />

                </View>
                <View style={styles.VNpayTaxi}>
                    <Image
                        style={{ width: 40, height: 40, resizeMode: "contain" }}
                        source={require("../assets/icons/TThoaDon.png")}
                    />

                </View>
            </View>
            <View style={{ flexDirection: "row", position: "relative", top: -2, width: "100%"}}>
                <Image resizeMode='contain' source={require("../assets/something/menuVnpay.png")} style={{width: "100%", height: 60}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    cricleUser: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#f0f0f0",
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    VNpayTaxi: {
        width: 80,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    containerLogo: {
        backgroundColor: "#fff",
        width: 150,
        alignSelf: "center",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    loginLogo: {
        alignSelf: "center",
        height: 30,
        width: 100,
    },
})

