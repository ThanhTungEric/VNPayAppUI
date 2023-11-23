import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";
import { Pressable } from "react-native";

function ConfirmMoneyQR({ navigation, route }) {
  const [showAmount, setShowAmount] = React.useState(true);
  const [amount, setAmount] = useState(0);
  const [userData, setUserData] = useState(null);
  const { data, money, title } = route.params;
  const dataJson = JSON.parse(data);
  console.log("data in ConfirmMoneyQR của người nhận nhận", dataJson.id);
  console.log("money in ConfirmMoneyQR", money);
  console.log("title in ConfirmMoneyQR", title);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData !== null) {
          const userObject = JSON.parse(userData);
          console.log("data ở ConfirmMoney.js", userObject);
          if (userObject.fullName) {
            setUserData(userObject);
          }
          if (userObject.accountBalance) {
            setAmount(userObject.accountBalance);
          }
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };
    getUserData();
  }, []);

  const confirm = () => {
    if (userData.accountBalance < money) {
      alert("Số dư không đủ");
    }
    else {
      if (dataJson != null || userData != null || money != null || title != null) {
        const apiEndpoint = `https://650c005f47af3fd22f66d7d8.mockapi.io/api/user/${userData.id}`;
        fetch(apiEndpoint, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            accountBalance: Number(userData.accountBalance) - Number(money),
            history: [
              ...userData.history,
              {
                status: '2',
                header: 'Chuyển tiền',
                title: title,
                price: money,
                date: new Date().toLocaleDateString(),
              }
            ]
          })
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("data ủa người gửi sau khi gửi: ", json);
            setUserData(json);
            fetch(`https://650c005f47af3fd22f66d7d8.mockapi.io/api/user/${dataJson.id}`, {
              method: 'PUT',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                accountBalance: Number(dataJson.accountBalance) + Number(money),
                history: [
                  ...dataJson.history,
                  {
                    status: '1',
                    header: 'Nhận tiền',
                    title: title,
                    price: money,
                    date: new Date().toLocaleDateString(),
                  }
                ]
              })
            })
              .then((response) => response.json())
              .then((json) => {
                console.log("data của người nhận sau khi người gửi gửi: ", json);
                navigation.navigate('BillQR', { data, money, title });
              })
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }


  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: "90%",
            height: 80,
            backgroundColor: "#f7f7f7",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <View style={{ flexDirection: "row", marginLeft: 20 }}>
            <Image
              source={require("../assets/Amount/logo.png")}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
            ></Image>
            <View style={{ flexDirection: "column", marginLeft: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Text>Số dư ví (VND)</Text>
                <TouchableOpacity
                    style={{ marginLeft: 10}}
                  onPress={() => {
                    setShowAmount(!showAmount);
                  }}
                >
                  <AntDesign
                    name={showAmount ? "eye" : "eyeo"}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {showAmount ? amount : "******"}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginLeft: 20, marginTop: 20, fontSize: 17, marginBottom: 10 }}>Nội dung giao dịch</Text>
        <View style={styles.key}>
          <Text style={{ color: "#858585", fontSize: 17 }}>Số điện thoại</Text>
          <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>{dataJson.phone}</Text>
        </View>
        <View style={styles.key}>
          <Text style={{ color: "#858585", fontSize: 17 }}>Chủ ví nhận tiền</Text>
          <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>{dataJson.fullName}</Text>
        </View>
        <View style={styles.key}>
          <Text style={{ color: "#858585", fontSize: 17 }}>Số tiền (VND)</Text>
          <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>{money}</Text>
        </View>
        <View style={styles.key}>
          <Text style={{ color: "#858585", fontSize: 17 }}>Phí giao dịch (VND)</Text>
          <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold" }}>Miễn phí</Text>
        </View>
        <View style={styles.key}>
          <Text style={{ color: "#858585", fontSize: 17 }}>Nội dung</Text>
          <View style={{ width: "50%", alignSelf: "flex-end" }}>
            <Text style={{ color: "#111", fontSize: 16, fontWeight: "bold", flexWrap: 'wrap', textAlign: 'right' }}>{title}</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingHorizontal: 20, justifyContent: "space-between", marginTop: 20 }}>
        <View>
          <Text>Tổng tiền (VND)</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{money}</Text>
        </View>
        <Pressable onPress={confirm} style={{ width: "40%", height: 50, backgroundColor: "#004a9b", borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 17 }}>Xác nhận</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default ConfirmMoneyQR;
const styles = StyleSheet.create({
  key: {
    flexDirection: "row", paddingHorizontal: 20, justifyContent: "space-between", paddingVertical: 10
  },
  value: {
    flexDirection: "row", paddingHorizontal: 20, justifyContent: "space-between"
  },
})
