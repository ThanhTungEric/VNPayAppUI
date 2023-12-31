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
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfirmModal from "./ModalConfirmChangeRegister";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [name, setDefaultName] = useState("nulll");
  const [isModalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData !== null) {
          const userObject = JSON.parse(userData);
          if (userObject.fullName) {
            setDefaultName(userObject.fullName);
            setUserData(userObject);
          }
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };
    getUserData();
  }, [userData]);

  
  const checkPasswordAndNavigate = () => {
    if (password === userData.password) {
      navigation.navigate("tabNavigation");
    } else {
      alert("Mật khẩu không đúng");
    }
  }
  
  const navigateToChangePhoneNumber = () => {
    navigation.navigate("ChangePhoneNumber");
    setModalVisible(!isModalVisible);
  };
  // Hàm chuyển màn hình quên mật khẩu
  const navigateToForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };
  // Hàm show modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // Hàm xác nhận chuyển màn hình đăng ký
  const confirmChangeRegister = () => {
    toggleModal();
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
        {/* Body */}

        <View style={styles.formLogin}>
          <View style={styles.containerLogo}>
            <Image
              style={styles.loginLogo}
              source={require("../assets/icons/Loginlogo.png")}
              resizeMode="contain"
            ></Image>
          </View>
          <View style={styles.helloUser}>
            <Text
              style={{ fontSize: 16, alignSelf: "center", color: "#a3a3a5" }}
            >
              Xin chào!!!
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              {name}
            </Text>
          </View>
          <View style={styles.inputPassword}>
            <TextInput
              style={styles.textInputPw}
              secureTextEntry={true}
              placeholder="Mật khẩu"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>

          <View style={styles.actionForgot}>
            <Text
              style={{ color: "#024a9c", fontWeight: "bold" }}
              onPress={navigateToForgotPassword}
            >
              Quên mật khẩu?
            </Text>

            {/* Đổi số điện thoại */}
            <TouchableOpacity>
              <Text
                style={{ color: "#024a9c", fontWeight: "bold" }}
                onPress={confirmChangeRegister}
              >
                Đổi SĐT khác
              </Text>
              <ConfirmModal
                isVisible={isModalVisible}
                onConfirm={navigateToChangePhoneNumber}
                onCancel={toggleModal}
              />
            </TouchableOpacity>
          </View>

          {/* Button */}
          <TouchableOpacity
            style={styles.loginSpace}
            onPress={checkPasswordAndNavigate}
          >
            <Text style={styles.buttonLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
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
