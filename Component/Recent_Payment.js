import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    FlatList,
    Pressable
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";

const data = [
    { image: require("../assets/payment/payment4.png"), name: "POPEYES - NGUYỄN VĂN QUÁ", address: "Quận 12, Thành phố Hồ Chí Minh", distance: "1.2 km" },
    { image: require("../assets/payment/payment3.png"), name: "TH truemart - 1174 Nguyễn Văn Quá", address: "Quận 12, Thành phố Hồ Chí Minh", distance: "1.35 km" },
    { image: require("../assets/payment/payment2.png"), name: "concung - 974-976 NGUYỄN VĂN QUÁ", address: "Quận 12, Thành phố Hồ Chí Minh", distance: "1.43 km" },
    { image: require("../assets/payment/payment1.png"), name: "Kids Plaza - 503D NGUYỄN VĂN QUÁ", address: "Quận 12, Thành phố Hồ Chí Minh", distance: "1.7 km" },
]

function Recent_Payment() {
    return (
        <View style={{marginTop: 15}}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Điểm thanh toán gần đây</Text>
                <Text style={{ color: "#004a9b", fontWeight: "bold", fontSize: 16 }}>
                    {" "}
                    Xem tất cả
                </Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={{height: 130, marginHorizontal: 10, marginTop: 8, borderWidth: 1, borderColor: "#f0f0f0", borderRadius: 15, flexDirection: "row", paddingHorizontal: 10, paddingVertical: 8 }}>
                        <Image
                            source={item.image}
                            style={{ width: 60, height: 60 }}
                            resizeMode="contain"
                        />
                        <View style={{marginLeft: 10, justifyContent: "space-around"}}>
                            <View style={{ backgroundColor: "#ffeaed", width: 100, borderRadius: 15, justifyContent: "center", alignItems: "center"}}>
                                <Text style={{color: "#e9333a"}}>1 Khuyến mại</Text>
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                            <Text style={{ fontSize: 14}}>{item.address}</Text>
                            <Text style={{ fontSize: 14, color: "#aaaaaa" }}>{item.distance}</Text>
                        </View>
                    </View>
                )}
            />
        </View>

    )
}

export default Recent_Payment
