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
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const Recharge = ({ navigation, route }) => {
  const [userData, setUserData] = useState(null);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData !== null) {
          const userObject = JSON.parse(userData);
          console.log("data ở Recharge.js", userObject);
          setUserData(userObject);
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

  const [showAmount, setShowAmount] = useState(true);
  const [check, setCheck] = useState(false);

  const [selectedDenomination1, setSelectedDenomination1] = useState("");
  const [selectedDenomination2, setSelectedDenomination2] = useState("");

  const denominations1 = [50000, 100000, 200000];
  const denominations2 = [300000, 400000, 500000];

  const handleDenominationPress1 = (denomination) => {
    setSelectedDenomination1(denomination);
    setSelectedDenomination2("");
    setCheck(true);
  };

  const handleDenominationPress2 = (denomination) => {
    setSelectedDenomination2(denomination);
    setSelectedDenomination1("");
    setCheck(true);
  };
  const addAmount = async () => {
    if (selectedDenomination1 !== "" || selectedDenomination2 !== "") {
      try {
        const denominationValue = selectedDenomination1 || selectedDenomination2;
        const apiEndpoint = `https://650c005f47af3fd22f66d7d8.mockapi.io/api/user/${userData.id}`; // Replace with your API endpoint
        const response = await fetch(apiEndpoint, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            accountBalance: userData.accountBalance + parseInt(denominationValue),
            history: [
              ...userData.history,
              {
                status: '1',
                header: 'Nạp tiền',
                title: 'Nạp tiền vào ví',
                price: `${denominationValue} VND`,
                date: new Date().toLocaleDateString(),
              },
            ],
          }),
        });
  
        if (response.ok) {
          navigation.navigate('Amount');
        } else {
          console.error('Failed to update amount. Server response:', response.status);
        }
      } catch (error) {
        console.error('Error updating amount:', error);
      }
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
                placeholder="Số tiền nạp (VND)"
                keyboardType="numeric"
                value={
                  selectedDenomination1.toString() ||
                  selectedDenomination2.toString()
                }
                onChangeText={(text) => {
                  if (selectedDenomination1 !== "") {
                    setSelectedDenomination1(Number(text));
                  } else {
                    setSelectedDenomination2(Number(text));
                  }
                }}
              ></TextInput>
            </View>
          </View>

          {/* Menh gia */}
          <View style={styles.coverDenomination}>
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
          </View>
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
            showsHorizontalScrollIndicator={false}
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
            // onPress={() => {
            //   if (check) {
            //     navigation.navigate("Amount", { amount });
            //   }
            // }}
            onPress={addAmount}
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

const styles = StyleSheet.create({
  denomination: {
    width: 100,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  denominationContainer: {
    marginBottom: 10,
  },
  coverDenomination: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-around",
  },
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

export default Recharge;
