import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome5, Feather, Ionicons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AccountInfo({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleGoBack = () => {
    navigation.goBack();
  };

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData !== null) {
        const userObject = JSON.parse(userData);
        if (userObject.fullName) {
          setUserData(userObject);
          setFullName(userObject.fullName);
          setPhone(userObject.phone);
          setEmail(userObject.email);
        }
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.userAvatar}>
          <FontAwesome5 name="user-alt" size={35} color="#b8b8b8" />
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.icon}>
            <Feather name="camera" size={24} color="black" />
            <Text style={styles.iconText}>Cài ảnh đại diện</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="ios-qr-code-outline" size={24} color="black" />
            <Text style={styles.iconText}>Mã QR của tôi</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.userDetails}>
        <UserDetailItem icon="user-alt" label="Họ tên" value={fullName} />
        <UserDetailItem icon="phone-alt" label="Số điện thoại" value={phone} />
        <UserDetailItem icon="envelope" label="Email" value={email} />
      </View>

      <View style={styles.divider} />

      <View style={styles.additionalInfo}>
        <View style={styles.infoHeader}>
          <Text style={styles.infoHeaderText}>Thông tin định danh</Text>
          <Text style={styles.infoHeaderLink}>Chi tiết</Text>
        </View>
        <View style={styles.statusInfo}>
          <Text>Trạng thái</Text>
          <Text style={styles.successStatus}>Định danh thành công</Text>
        </View>
        <View style={styles.dividerr} />
        <View style={styles.additionalDetails}>
          <Text>Thông tin bổ sung</Text>
          <Text style={styles.infoHeaderLink}>cập nhật</Text>
        </View>

        <View style={styles.securityInfo}>
          <AntDesign name="Safety" size={24} color="#00FA9A" />
          <Text style={styles.securityText}>
            Bảo mật tuyệt đối mọi thông tin của bạn
          </Text>
        </View>

        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Text style={styles.goBackText}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const UserDetailItem = ({ icon, label, value }) => (
  <View style={styles.detailItem}>
    <View style={styles.detailItemLeft}>
      <FontAwesome5 name={icon} size={20} color="#b8b8b8" />
      <Text style={styles.detailItemLabel}>{label}</Text>
    </View>
    <View style={styles.detailItemRight}>
      <Text style={styles.detailItemValue}>{value}</Text>
      <AntDesign name="right" size={20} color="#b8b8b8" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  userInfo: {
    alignItems: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  userAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#b8b8b8",
  },
  iconsContainer: {
    flexDirection: "row",
    marginLeft: 20,
  },
  icon: {
    marginRight: 20,
    alignItems: "center",
  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
  },
  userDetails: {
    width: "100%",
    marginTop: 30,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#b8b8b8",
  },
  detailItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailItemLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  detailItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailItemValue: {
    fontSize: 16,
    marginRight: 5,
  },
  divider: {
    width: "120%",
    height: 8,
    backgroundColor: "#f7f7f7",
    marginTop: 30,
  },
  dividerr: {
    width: "100%",
    height: 2,
    backgroundColor: "#f7f7f7",
    marginTop: 30,
    marginBottom: 10,
  },
  additionalInfo: {
    width: "100%",
    marginTop: 20,
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  infoHeaderText: {
    fontWeight: "bold",
  },
  infoHeaderLink: {
    color: "blue",
    fontWeight: "bold",
  },
  successStatus: {
    color: "#00FA9A",
  },
  additionalDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  securityInfo: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  securityText: {
    marginLeft: 5,
  },
  goBackButton: {
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#034a9c",
    marginTop: 120,
  },

  goBackText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AccountInfo;
