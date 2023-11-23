import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    title: "Thông tin tài khoản",
  },
  {
    id: 2,
    title: "Ví AirPay",
  },
  {
    id: 3,
    title: "Thông tin điểm thưởng",
  },
  {
    id: 4,
    title: "Lịch sử giao dịch",
  },
  {
    id: 5,
    title: "Liên kết ngân hàng",
  },
  {
    id: 6,
    title: "Ví gia đình",
  },
  {
    id: 7,
    title: "Giới thiệu bạn bè",
  },
  {
    id: 8,
    title: "Thanh toán nhanh",
  },
  {
    id: 9,
    title: "Đổi mật khẩu",
  },
  {
    id: 10,
    title: "Cài đặt mã PIN cho Soft OTP",
  },
  {
    id: 11,
    title: "Cài đặt vân tay",
  },
  {
    id: 12,
    title: "Ngôn ngữ",
  },
  {
    id: 13,
    title: "Thông tin chung",
  },
  {
    id: 14,
    title: "Đăng xuất",
  },
];

const getIconByName = (itemName) => {
  switch (itemName) {
    case "Thông tin tài khoản":
      return "user";
    case "Thông tin ví":
      return "wallet";
    case "Thông tin điểm thưởng":
      return "award";
    case "Lịch sử giao dịch":
      return "history";
    case "Liên kết ngân hàng":
      return "bank";
    case "Ví gia đình":
      return "home";
    case "Giới thiệu bạn bè":
      return "users";
    case "Thanh toán nhanh":
      return "payment";
    case "Đổi mật khẩu":
      return "key";
    case "Cài đặt mã PIN cho Soft OTP":
      return "lock";
    case "Cài đặt vân tay":
      return "fingerprint";
    case "Ngôn ngữ":
      return "language";
    case "Thông tin chung":
      return "info";
    case "Đăng xuất":
      return "logout";
    default:
      return "default-icon"; // Icon mặc định hoặc icon trống
  }
};

export default function MyWallet({ navigation }) {
  return (
    <View style={styles.myWalletScreen}>
      {/* <Image
        source={require("../assets/Voucher/header.jpg")}
        style={styles.imgHeader}
      ></Image> */}
      <Image
        style={styles.imgHeader}
        source={require("../assets/icons/ImageLogin.jpg")}
      ></Image>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{
          flexGrow: 1,
          width: "100%",
          paddingHorizontal: 10,
          marginTop: 40,
        }}
      >
        <View style={styles.UserInfo}>
          <View style={styles.UserBorder}>
            <FontAwesome5 name="user-alt" size={35} color="#b8b8b8" />
          </View>
          <Text style={styles.UserName}>NGUYỄN THANH TÙNG</Text>
          <Text style={styles.PhoneNumber}>0812718942</Text>
        </View>

        <Text style={{ color: "#b9b9b9" }}>TÀI KHOẢN</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.AccountInfo}
              onPress={() => {
                openModal();
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5
                  name={getIconByName(item.title)}
                  size={20}
                  color="black"
                />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  {item.title}{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  myWalletScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  UserBorder: {
    backgroundColor: "#f0f0f0",
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  UserInfo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  UserName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  PhoneNumber: {
    fontSize: 12,
    color: "#b9b9b9",
  },
  Account: {
    flexDirection: "column",
  },
  AccountInfo: {
    flexDirection: "row",
    borderBottomWidth: 1, // Add a 1 pixel bottom border
    borderBottomColor: "#b9b9b9", // Set the border color
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  },
  imgHeader: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
  },
});
