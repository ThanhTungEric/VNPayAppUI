import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const ForgotPasswordScreen = () => {
  const [selectedValue, setSelectedValue] = useState(""); // Lưu giá trị radio button được chọn

  // Hàm xử lý khi một radio button được chọn
  const handleRadioButtonPress = (value) => {
    setSelectedValue(value);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.containerSr}
    >
      <View style={styles.Container}>
        {/* Place "Quên mật khẩu" text here */}
        <View style={styles.ForgotPassword}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Quên mật khẩu
          </Text>
        </View>
        {/* Content */}
        <View style={styles.Content}>
          <Text
            style={{ alignSelf: "center", color: "#ccc", textAlign: "center" }}
          >
            Bạn vui lòng cung cấp CMND/CCCD hoặc hộ chiếu để lấy mật khẩu cho ví
            VNPAY của bạn!
          </Text>
        </View>

        {/* Radio Buttons */}
        <View style={styles.RadioButtons}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              selectedValue === "cccd" && styles.radioButtonSelected,
            ]}
            onPress={() => handleRadioButtonPress("cccd")}
          >
            <Text>Căn cước công dân</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.radioButton,
              selectedValue === "cmnd" && styles.radioButtonSelected,
            ]}
            onPress={() => handleRadioButtonPress("cmnd")}
          >
            <Text>Chứng minh nhân dân</Text>
          </TouchableOpacity>
        </View>

        {/* Input số chứng minh */}
        <View style={styles.Input}>
          <View style={styles.inputPassword}>
            <TextInput
              style={styles.textInputPw}
              placeholder="Nhập số giấy tờ"
              keyboardType="numeric"
            />
          </View>

          {/* Button "Tiếp tục" */}
          <TouchableOpacity style={styles.ConSpace}>
            <Text style={styles.ButtonCon}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerSr: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  ForgotPassword: {
    marginTop: 50,
  },
  Content: {
    marginTop: 20,
  },
  RadioButtons: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center", // Canh giữa các radio button theo chiều ngang
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: "#2884b7",
  },
  inputPassword: {
    marginTop: 20,
  },
  textInputPw: {
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
  Input: {
    flex: 1,
    backgroundColor: "#fff",
    height: 200,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  ConSpace: {
    backgroundColor: "#024a9c",
    width: "90%",
    alignSelf: "center",
    borderRadius: 40,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  ButtonCon: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
