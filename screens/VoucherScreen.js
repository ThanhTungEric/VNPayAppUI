import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MenuForVoucher from "../Component/MenuForVoucher";
import { createStackNavigator } from "@react-navigation/stack";
import VoucherItem from "./VoucherItem";

const VoucherScreen = ({ navigation }) => {
  return (
    <View style={styles.voucherScreen}>
      {/* Header */}
      <Image
        source={require("../assets/Voucher/header.jpg")}
        style={styles.imgHeader}
      ></Image>
      {/* Convenient */}
      <View style={styles.convenient}>
        {/* QR */}
        <View style={styles.qrComponent}>
          <View style={styles.qrRow}>
            {/* QR Image */}
            <Image
              source={require("../assets/Voucher/qr.jpg")}
              style={styles.qrImg}
            ></Image>
            {/* QR Text */}
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", marginLeft: -20 }}
              >
                VNPAY-QR
              </Text>
              <Text style={{ color: "white", marginLeft: -20 }}>
                Khám phá ngay
              </Text>
            </View>
          </View>
        </View>
        {/* Point */}
        <View style={styles.pointComponent}>
          <View style={styles.qrRow}>
            {/* Point Image */}
            <Image
              source={require("../assets/Voucher/poin.png")}
              style={styles.qrImg}
            ></Image>
            {/* Point Text */}
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", marginLeft: -20 }}
              >
                Đổi quà
              </Text>
              <Text style={{ color: "white", marginLeft: -20 }}>
                Tích điểm ngay
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Type */}
      <View>
        <MenuForVoucher />
      </View>
      {/* Voucher */}

      <VoucherItem />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "yellow",
  },
  voucherScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgHeader: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  convenient: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  qrComponent: {
    width: "46%",
    height: 90,
    backgroundColor: "#034a9c",
    borderRadius: 13,
  },
  pointComponent: {
    width: "46%",
    height: 90,
    backgroundColor: "#e50119",
    borderRadius: 13,
  },
  qrRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  qrImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
export default VoucherScreen;
