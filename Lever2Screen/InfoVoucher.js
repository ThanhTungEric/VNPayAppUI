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

const InfoVoucher = ({ navigation, route }) => {
  const { item } = route.params;
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
          <Text style={styles.textt}>{item.header}</Text>
          <View style={styles.code}>
            <View style={styles.flash}>
              <Text
                style={{ color: "#c4d0e0", fontWeight: "bold", fontSize: 16 }}
              >
                {item.code}
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
          <Text>{item.expiry}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text
          style={{ fontSize: 15, fontWeight: "bold", alignItems: "flex-start" }}
        >
          Điều kiện áp dụng
        </Text>
        <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
          <View style={styles.contentFooter}>
            <Text style={{ padding: 10, fontStyle: "italic" }}>
              {item.condition}
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: 100 }}>
            <TouchableOpacity
              style={{
                width: "90%",
                height: 50,
                backgroundColor: "#034a9c",
                justifyContent: "center",
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Sử dụng ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
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
    top: 160,
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
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  contentFooter: {},
});
export default InfoVoucher;
