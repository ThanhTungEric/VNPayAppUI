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
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const InfoVoucher = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/Voucher/header.jpg")}
          style={styles.imgHeader}
        ></Image>
        <Image
          source={require("../assets/Voucher/discount.jpg")}
          style={styles.imgHeaderr}
        ></Image>
        <View style={styles.contentHeader}>
          <Text style={styles.textt}>
            Mã FLASH50K - Giảm 50K cho đơn từ 499K khi mua sắm VnShop
          </Text>
          <View style={styles.code}>
            <View style={styles.flash}>
              <Text
                style={{ color: "#c4d0e0", fontWeight: "bold", fontSize: 16 }}
              >
                FLASH50K
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                alert("Đã sao chép");
              }}
            >
              <View style={styles.icon}>
                <FontAwesome5 name="copy" size={17} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.use}>
          <Text>Đã sử dụng</Text>
          <Text>0</Text>
        </View>

        <View
          style={{ width: 1.5, height: 80, backgroundColor: "#f2f2f2" }}
        ></View>
        <View style={styles.use}>
          <Text>Hạn sử dụng</Text>
          <Text>Còn...</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.contentFooter}></View>
        <TouchableOpacity>
          <Text>Sử dụng ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  imgHeader: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    height: "50%",
  },
  imgHeaderr: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    position: "absolute",
    top: 140,
    left: "45%",
    borderRadius: 15,
    zIndex: 1,
  },
  contentHeader: {
    width: "100%",
    height: "50%",
    backgroundColor: "#034a9c",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  body: {
    width: "100%",
    height: 150,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    height: "15%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    // flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "45%",
    backgroundColor: "white",
    marginTop: 10,
  },
  code: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textt: {
    marginTop: 35,
    color: "#c4d0e0",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  flash: {
    width: 160,
    height: 30,
    backgroundColor: "#01438f",
    borderColor: "white",
    borderWidth: 0.1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
  },
  icon: {
    width: 50,
    height: 30,
    backgroundColor: "#01438f",
    borderColor: "white",
    borderWidth: 0.1,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
  },
  use: {
    textAlign: "center",
  },
});
export default InfoVoucher;
