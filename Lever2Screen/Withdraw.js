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
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const bank = [
  {
    img: require("../assets/Amount/vietcom.png"),
  },
  {
    img: require("../assets/Amount/viettin.png"),
  },
  {
    img: require("../assets/Amount/a.png"),
  },
  {
    img: require("../assets/Amount/b.png"),
  },
  {
    img: require("../assets/Amount/c.png"),
  },
  {
    img: require("../assets/Amount/d.png"),
  },
];

const Withdraw = ({ route, navigation }) => {
  const { amount } = route.params;
  const [showAmount, setShowAmount] = useState(true);
  const [check, setCheck] = useState(false);
  const [withdraw, setWithdraw] = useState();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        console.log("userData", userData);
        if (userData !== null) {
          const userObject = JSON.parse(userData);
          console.log("data ở Recharge.js", userObject);
          setUserData(userObject);
          if (userObject.accountBalance) {
            setShowAmount(userObject.accountBalance);
          }
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };
    getUserData();
  }, []);

  const subAmount = async () => {
    try {
      const response = await fetch(
        `https://650c005f47af3fd22f66d7d8.mockapi.io/api/user/${userData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accountBalance: userData.accountBalance - withdraw,
            history: [
              ...userData.history,
              {
                status: "3",
                header: "Rút tiền",
                title: "Rút tiền thành công",
                price: `${withdraw} VND`,
                date: new Date().toLocaleDateString(),
              },
            ],
          }),
        }
      );

      if (response.ok) {
        navigation.navigate("Amount");
        console.log("response", response.status);
      } else {
        console.error(
          "Failed to update amount. Server response:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error updating amount:", error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            marginBottom: 20,
            paddingBottom: 30,
          }}
        >
          <View
            style={{ flexDirection: "row", marginTop: 35, paddingLeft: 20 }}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Amount", { amount });
                }}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Rút tiền</Text>
            </View>
          </View>
          {/* Thong tin so du vi */}
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
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../assets/Amount/logo.png")}
                  style={{ width: 50, height: 50, resizeMode: "contain" }}
                ></Image>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text>Số dư ví (VND)</Text>
                    <TouchableOpacity
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
                    {showAmount ? amount : "********"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* So tien can nap */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: "gray",
                width: "94%",
                borderRadius: 10,
              }}
            >
              <TextInput
                style={{
                  width: "100%",
                  height: 50,
                  paddingLeft: 10,
                }}
                placeholder="Số tiền rút(VND)"
                keyboardType="numeric"
                onChangeText={(text) => {
                  setWithdraw(text);
                  setCheck(true);
                }}
                value={withdraw}
                type="number"
              ></TextInput>
            </View>
          </View>

          {/* Menh gia */}
          {/* <View style={styles.coverDenomination}>
            {denominations1.map((denomination, index) => (
              <View key={index} style={styles.denominationContainer}>
                <TouchableOpacity
                  style={[
                    styles.denomination,
                    {
                      borderColor:
                        selectedDenomination1 === denomination
                          ? "blue"
                          : "gray",
                    },
                  ]}
                  onPress={() => handleDenominationPress1(denomination)}
                >
                  <Text>{denomination}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.coverDenomination}>
            {denominations2.map((denomination, index) => (
              <View key={index} style={styles.denominationContainer}>
                <TouchableOpacity
                  style={[
                    styles.denomination,
                    {
                      borderColor:
                        selectedDenomination2 === denomination
                          ? "blue"
                          : "gray",
                    },
                  ]}
                  onPress={() => handleDenominationPress2(denomination)}
                >
                  <Text>{denomination}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View> */}
        </View>

        {/* Nguồn tiền */}
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 100,
            justifyContent: "center",
          }}
        >
          <View style={styles.fund}>
            <Image
              source={require("../assets/Amount/bidv.png")}
              style={{
                width: 50,
                height: 50,
                resizeMode: "contain",
                borderRadius: 20,
              }}
            ></Image>
            <View>
              <Text style={{ fontSize: 17 }}>BIDV</Text>
              <Text style={{ fontWeight: "bold" }}>*****5567</Text>
            </View>
          </View>
        </View>

        {/* Liên kêt */}
        <View
          style={{
            backgroundColor: "#f7f7f7",
            marginTop: 10,
            paddingBottom: 30,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", padding: 10 }}>
            Gợi ý ngân hàng liên kết trực tiếp
          </Text>
          <Text style={{ color: "gray", fontStyle: "italic", paddingLeft: 10 }}>
            Liên kết ví với các tài khoản/thẻ ngân hàng dưới đây để thực hiện
            giao dịch được nhanh chóng và miễn phí nạp tiền, thanh toán, rút
            tiền
          </Text>
          <FlatList
            data={bank}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity style={{ margin: 10 }}>
                <Image
                  source={item.img}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "contain",
                    borderRadius: 100,
                  }}
                ></Image>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "bold",
                color: "blue",
              }}
            >
              {" "}
              + Thêm liên kết ngân hàng mới
            </Text>
          </TouchableOpacity>
        </View>
        {/* Button */}
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            height: 140,
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={subAmount}
          >
            <View
              style={[
                {
                  backgroundColor: "#ccc",
                  width: "95%",
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 25,
                },
                { backgroundColor: check ? "#034a9c" : "#ccc" },
              ]}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                Tiếp Tục
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  fund: {
    backgroundColor: "#d5e9ff",
    width: "80%",
    height: 70,
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#6c86a9",
    flexDirection: "row",
    alignItems: "center",
  },
});
