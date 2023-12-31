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

const sussgetion = [
  { image: require("../assets/sussgetion/image1.png") , text: "Xem PHIM cuối tuần", text1: "Chọn VNPAY50 giảm 50k cho giao dịch từ 200K"},
  { image: require("../assets/sussgetion/image2.png") , text: "Mở Ví gia đình", text1: "Mở Ví gia đình - nhà mình rinh quà 250k"},
  { image: require("../assets/sussgetion/image3.png") , text: "Mở tài khoản BIDV", text1: "Nhận ngay 130K tiền mặt khi mở tài khoản BIDV"},
];

export default function SuggestionForYou() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Gợi ý cho bạn</Text>
        <Text style={{ color: "#004a9b", fontWeight: "bold", fontSize: 16 }}>
          {" "}
          Xem tất cả
        </Text>
      </View>
      <View style={{marginTop: 10}}>
      <FlatList
        data={sussgetion}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.component}>
            <Image style={styles.image} source={item.image} />
            <View style={{ paddingHorizontal: 5, width: 200, justifyContent: "space-between" }}>
              <View>
                <Text style={{ fontWeight: "bold" }}>{item.text}</Text>
                <Text>{item.text1}</Text>
              </View>
              <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                <View
                  style={{
                    height: 35,
                    width: 90,
                    borderRadius: 20,
                    borderColor: "#034994",
                    borderWidth: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#004a9b", fontWeight: "bold" }}>
                    Mở ví ngay
                  </Text>
                </View>
              </View>
            </View>
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
    height: 170,
    backgroundColor: "##f7f7f7",
    marginTop: 10,
    marginBottom: 10,
  },
  component: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 2.5,
    width: 300,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#f0f0f0"
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#111",
  },
});
