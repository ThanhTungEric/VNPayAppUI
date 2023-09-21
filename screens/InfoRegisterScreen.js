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
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
const InfoRegister = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const phoneNumber = route.params?.phoneNumber;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  // Hàm kiểm tra tên
  const checkName = () => {
    const regexName =
      /^[A-Za-z\sáàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ-]+$/;
    const validName = regexName.test(name);
    if (!validName) {
      alert("Tên không hợp lệ!");
    } else {
      return true;
    }
  };
  // Hàm kiểm tra email
  const checkEmail = () => {
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validEmail = regexEmail.test(email);
    if (!validEmail) {
      alert("Email không hợp lệ!");
    } else {
      return true;
    }
  };
  // Hàm kiểm tra mật khẩu
  const checkPassword = () => {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,50}$/;
    const validPassword = regexPassword.test(password);
    if (!validPassword) {
      alert(
        "Lưu ý: độ dài mật khẩu yêu cầu từ 8-50 kí tự, bao gồm ít nhấn 1 ký tự viết hoa, 1 kí tự viết thường, 1 kí tự số"
      );
    } else {
      return true;
    }
  };
  const checkRetypePassword = () => {
    if (password !== retypePassword) {
      alert("Mật khẩu không trùng khớp!");
    } else {
      return true;
    }
  };

  const Register = () => {
    const isNameValid = checkName();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isRetypePasswordValid = checkRetypePassword();

    if (
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isRetypePasswordValid
    ) {
      navigation.navigate("Login", { name });
      alert("Đăng ký thành công!");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            style={{ fontWeight: "bold", fontSize: 17, textAlign: "center" }}
          >
            Đăng ký tài khoản mới
          </Text>
          <Text style={{ fontSize: 14, textAlign: "center", padding: 20 }}>
            Vui lòng cung cấp thông tin để đăng ký tài khoản NVPay cho số điện
            thoại {phoneNumber}
          </Text>
        </View>
        <View style={styles.body}>
          {/* Nhập họ tên */}
          <View style={styles.inputInfo}>
            <TextInput
              style={styles.textInputInfo}
              placeholder="Họ và tên"
              onChangeText={(name) => setName(name)}
              value={name}
            />
          </View>
          {/* Nhập email */}
          <View style={styles.inputInfo}>
            <TextInput
              style={styles.textInputInfo}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>
          {/* Nhập mật khẩu */}
          <View style={styles.inputInfo}>
            <TextInput
              style={styles.textInputInfo}
              secureTextEntry={true}
              placeholder="Nhập mật khẩu"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          {/* Nhập lại mật khẩu */}
          <View style={styles.inputInfo}>
            <TextInput
              style={styles.textInputInfo}
              secureTextEntry={true}
              placeholder="Nhập lại mật khẩu"
              onChangeText={(text) => setRetypePassword(text)}
              value={retypePassword}
            />
          </View>
          {/* Nhập mã giới thiệu */}
          <View style={styles.inputInfo}>
            <TextInput
              style={styles.textInputInfo}
              secureTextEntry={true}
              placeholder="Nhập mã giới thiệu (nếu có)"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.loginSpace} onPress={Register}>
          <Text style={styles.buttonRegister}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: "10%",
    selfAlign: "center",
    backgroundColor: "#fff",
  },
  body: {
    marginTop: "7%",
  },

  footer: {
    marginTop: "60%",
    flex: 1,
    backgroundColor: "#fff",
  },

  textInputInfo: {
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

  buttonRegister: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default InfoRegister;
