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
const movie = [
    { name: "NGƯỜI VỢ CUỐI CÙNG (T18)", age: "18+", time: "100 phút", image: require("../assets/movie/movie1.png") },
    { name: "ĐẤT RỪNG PHƯƠNG NAM (K)", age: "0+", time: "110 phút", image: require("../assets/movie/movie2.png") },
    { name: "QUÝ MÔN QUAN: GỌI HỒN (T18)", age: "18+", time: "93 phút", image: require("../assets/movie/movie3.png") },
    { name: "NHỮNG KỶ NGUYÊN CỦA...", age: "13+", time: "170 phút", image: require("../assets/movie/movie4.png") },
    { name: "VẦNG TRĂNG MÁU (T18)", age: "18+", time: "206 phút", image: require("../assets/movie/movie5.png") },
    { name: "NĂM ĐÊM KINH HOÀNG (T18)", age: "13+", time: "110 phút", image: require("../assets/movie/movie6.png") },
]

function Movie() {
    return (
        <View style={{ width: "100%", marginTop: 10 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>Đặt vé xem phim</Text>
                <Text style={{ color: "#004a9b", fontWeight: "bold", fontSize: 16 }}>
                    {" "}
                    Xem tất cả
                </Text>
            </View>
            <FlatList
                data={movie}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ width: 140, height: 310, marginHorizontal: 10, marginTop: 8, borderWidth: 1, borderColor: "#f0f0f0", borderRadius: 15, alignItems: "center" }}>
                        <Image
                            source={item.image}
                            style={{ width: 138, height: 200, borderRadius: 15 }}
                            resizeMode="contain"
                        />
                        <View style={{ paddingHorizontal: 5 }}>
                            <Text style={{ fontSize: 15 }}>{item.name}</Text>
                            <View style={{ flexDirection: "row", marginTop: 5}}>
                                <View style={{ backgroundColor: "#f0f0f0", paddingHorizontal: 4, borderRadius: 10 }}>
                                    <Text style={{ color: "#aaaaaa", fontSize: 14 }}>
                                        {item.time}
                                    </Text>
                                </View>
                                <View style={{ backgroundColor: "#f0f0f0", paddingHorizontal: 4, borderRadius: 10, marginLeft: 5}}>
                                    <Text style={{ color: "#aaaaaa", fontSize: 14 }}>
                                        {item.age}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <Pressable style={{ backgroundColor: "#004a9b", width: 110, height: 30, borderRadius: 15, justifyContent: "center", alignItems: "center", marginTop: 8 }}>
                            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Đặt ngay</Text>
                        </Pressable>
                    </View>
                )}

            />
        </View>
    )
}

export default Movie
