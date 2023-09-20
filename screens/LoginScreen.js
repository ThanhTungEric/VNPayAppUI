import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";

export default function LoginScreen() {
  return (
    <View style={styles.containerSr}>
      <View style={styles.header}></View>
      <View style={styles.formLogin}>
        <View style={styles.containerLogo}>
          <Image
            style={styles.loginLogo}
            source={require("../assets/icons/Loginlogo.png")}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={styles.helloUser}>
          <Text style={{ fontSize: 16, alignSelf: "center" }}>Xin chào!!!</Text>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}
          >
            NGUYỄN THANH TÙNG
          </Text>
        </View>
        <View style={styles.inputPassword}>
          <TextInput
            style={styles.textInputPw}
            secureTextEntry={true}
            placeholder="Mật khẩu"
          />
        </View>
        <View style={styles.actionForgot}>
            <Text>Quên mật khẩu?</Text>
            <Text>Đổi SĐT khác</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
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
    backgroundColor: "#35DADF",
    height: 200,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  },
    actionForgot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '90%',
        alignSelf: 'center'
    }
});
