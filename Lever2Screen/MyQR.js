import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import QRCode from 'react-native-qrcode-svg'
import { useFocusEffect } from '@react-navigation/native';

function MyQR() {
  const [userData, setUserData] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [phone, setPhone] = useState(null);
  const [value, setValue] = useState("nulll");
  const [QRvalue, setQRValue] = React.useState('https://res.cloudinary.com/dtpmltwhp/image/upload/v1700745420/DonutImage/j4yutfujrgzxz4e0rfkh.jpg');
  const [QRLogo, setQRLogo] = React.useState('');
  const [QRImage, setQRImage] = React.useState('');
  const ref = React.useRef();
  console.log("value", value);

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData !== null) {
        const userObject = JSON.parse(userData);
        setUserData(userObject);
        setFullName(userObject.fullName);
        setPhone(userObject.phone);
        setValue(userObject.phone);
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserData();
    }, [])
  );


  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ backgroundColor: "#fff", paddingHorizontal: 20, width: "100%", alignItems: "center" }}>
        <View style={{ backgroundColor: "#f7f7f7", flexDirection: "row", width: "90%", height: 54, justifyContent: "center", alignItems: "center", marginBottom: 10, marginTop: 10, borderRadius: 30 }}>
          <View style={{ height: 40, width: "45%", marginRight: 15, backgroundColor: "#fff", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>QR nhận tiền</Text>
          </View>
          <View style={{ height: 40, width: "45%", backgroundColor: "#f7f7f7", justifyContent: "center", alignItems: "center", borderRadius: 30 }}>
            <Text style={{ fontSize: 17, fontWeight: "600" }}>QR thanh toán</Text>
          </View>
        </View>
      </View>
      <View style={{ width: "90%", borderRadius: 20, backgroundColor: "#fff", alignItems: "center", marginTop: 20, paddingVertical: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: "400", marginBottom: 10, color: "#525252", marginBottom: 20 }}>Mã QR dùng để nhận tiền trên ví VNPAY</Text>
        <QRCode
          size={200}
          logo={{ uri: "https://res.cloudinary.com/dtpmltwhp/image/upload/v1700745420/DonutImage/j4yutfujrgzxz4e0rfkh.jpg" }}
          logoSize={20}
          logoBackgroundColor='transparent'
          value={value}
        />
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 10, color: "#525252" }}>{fullName}</Text>
          <Text style={{ fontSize: 15, fontWeight: "400", marginTop: 5, color: "#525252" }}>{phone}</Text>
        </View>
      </View>
      <View style={{ width: "90%", backgroundColor: "#fff", borderRadius: 20, alignItems: "center", paddingBottom: 20 }}>
        <TextInput style={{ width: "90%", height: 50, fontSize: 17, backgroundColor: "#fff", borderRadius: 10, marginTop: 20, paddingHorizontal: 20, borderWidth: 1, borderColor: "#f7f7f7", color: "#525252" }} placeholder="Nhập số tiền (VND)" />
        <View style={{ flexDirection: "row", width: "90%", justifyContent: "space-between", marginTop: 30 }}>
          <TouchableOpacity
            style={{ borderColor: "#024a9c", borderWidth: 1.5, width: 150, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
            <Text style={{ color: "#024a9c", fontWeight: "bold", fontSize: 16 }}>Chia sẻ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "#024a9c", width: 150, height: 50, justifyContent: "center", alignItems: "center", borderRadius: 20 }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Lưu mã QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MyQR
