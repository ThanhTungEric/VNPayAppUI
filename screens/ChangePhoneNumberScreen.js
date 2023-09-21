import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const ChangePhoneNumberScreen = (props) => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);

  // Hàm kiểm tra số điện thoại
  const checkNumberPhone = () => {
    const regex =
      /^(086|096|097|098|039|038|037|036|035|034|032|033|091|094|088|083|084|085|081|082|070|079|077|076|078|089|090|093)\d{7}$/;
    const validNum = regex.test(phoneNumber);
    setIsValid(validNum); // Cập nhật trạng thái hợp lệ true/false
    if (!validNum) {
      alert("Số điện thoại không hợp lệ!");
      console.log("Số điện thoại không hợp lệ!");
    } else if (validNum) {
      if (phoneNumber === "0787944346" || phoneNumber === "0812718942") {
        alert("Số điện thoại hợp lệ!");
        // Chuyển trang chủ của Tùng
      } else {
        // Chuyển trang đăng kí thông tin mới
        navigation.navigate("InfoRegister", { phoneNumber });
      }
    }

    console.log(validNum);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerSr}
    >
      <View style={styles.containerSr}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            style={styles.ImageLogin}
            source={require("../assets/icons/ImageLogin.jpg")}
          ></Image>
        </View>

        <View style={styles.formLogin}>
          {/* Logo */}
          <View style={styles.containerLogo}>
            <Image
              style={styles.loginLogo}
              source={require("../assets/icons/Loginlogo.png")}
              resizeMode="contain"
            ></Image>
          </View>
          {/* Content */}
          <View style={styles.helloUser}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", alignSelf: "center" }}
            >
              Đăng nhập/Đăng ký
            </Text>
            <Text
              style={{ fontSize: 16, alignSelf: "center", color: "#a3a3a5" }}
            >
              Bạn hãy nhập số điện thoại để tiêp tục nhé!
            </Text>
          </View>
          {/* Input */}
          <View style={styles.inputPhoneNumber}>
            <TextInput
              style={styles.textInputPhoneNum}
              placeholder="Số điện thoại"
              keyboardType="numeric"
              onChangeText={(num) => {
                setPhoneNumber(num);
              }}
              value={phoneNumber}
            />
          </View>
          {/* Button */}
          <TouchableOpacity
            style={styles.loginSpace}
            onPress={checkNumberPhone}
          >
            <Text style={styles.buttonLogin}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  containerSr: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formLogin: {
    flex: 1,
    backgroundColor: "#fff",
    height: 200,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  ImageLogin: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  containerLogo: {
    backgroundColor: "#fff",
    width: 150,
    alignSelf: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  loginLogo: {
    alignSelf: "center",
    height: 30,
    width: 100,
  },
  helloUser: {
    alignSelf: "center",
    marginTop: 20,
  },
  inputPhoneNumber: {
    marginTop: 20,
  },
  textInputPhoneNum: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  actionForgot: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    width: "90%",
    alignSelf: "center",
  },
  loginSpace: {
    backgroundColor: "#024a9c",
    width: "90%",
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 40,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonLogin: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ChangePhoneNumberScreen;
