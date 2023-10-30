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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Gợi ý cho bạn</Text>
        <Text style={{ color: "#004a9b", fontWeight: "bold", fontSize: 16 }}>
          {" "}
          Xem tất cả
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 1 }}
      >
        <View style={styles.component}>
          <View style={styles.image}></View>
          <View style={{ paddingHorizontal: 5, width: 200, justifyContent: "space-between" }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Mở Ví gia đình</Text>
              <Text>Mở Ví gia đình - nhà mình rinh quà 250k</Text>
            </View>
            <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
              <View
                style={{
                  height: 35,
                  width: 90,
                  borderRadius: 20,
                  borderColor: "#034994",
                  borderWidth: 2,
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
      </ScrollView>
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
    marginTop: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray"
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#111",
  },
});
