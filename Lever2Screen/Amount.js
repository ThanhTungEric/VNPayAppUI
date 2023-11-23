import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Amount = ({ route, navigation }) => {
  const [showAmount, setShowAmount] = React.useState(true);
  const [amount, setAmount] = useState(0);
  const [userData, setUserData] = useState(null);
  const [history, setHistory] = useState([]);
  console.log("history", history);

  const getUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("user");
      if (storedUserData !== null) {
        const userObject = JSON.parse(storedUserData);
        const apiEndpoint = `https://650c005f47af3fd22f66d7d8.mockapi.io/api/user/${userObject.id}`;
        const response = await fetch(apiEndpoint);
        const apiUserData = await response.json();
        await AsyncStorage.setItem("user", JSON.stringify(apiUserData));
        if (apiUserData.accountBalance) {
          setAmount(apiUserData.accountBalance);
        }
        if (apiUserData.history) {
          setHistory(apiUserData.history);
        }
      }
    } catch (error) {
      console.error("Error retrieving or updating user data:", error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getUserData();
    }, [])
  );

  const getImageSource = (status) => {
    switch (status) {
      case "1":
        return require("../assets/Amount/naptien.png");
      case "2":
        return require("../assets/Amount/chuyentien.png");
      case "3":
        return require("../assets/Amount/ruttien.png");
      default:
        return require("../assets/Amount/naptien.png");
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#ebf6ff",
          padding: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeScreen", { amount: amount });
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Thông tin ví</Text>
          <TouchableOpacity>
            <AntDesign name="infocirlceo" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#ebf6ff",
            borderRadius: 150,
            alignSelf: "center",
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "#024a9b",
            borderWidth: 15,
          }}
        >
          <Text style={{ fontSize: 11 }}>Số dư hiện tại (VND)</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {showAmount ? amount : "*********"}
          </Text>

          <TouchableOpacity onPress={() => setShowAmount(!showAmount)}>
            <AntDesign
              name={showAmount ? "eye" : "eyeo"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#fff",
          padding: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Recharge", { amount });
          }}
        >
          <Image
            style={{ width: 70, height: 70, resizeMode: "contain" }}
            source={require("../assets/Amount/naptien.png")}
          ></Image>
          <Text style={{ fontSize: 12, textAlign: "center" }}>Nạp tiền</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Transfer", { amount });
          }}
        >
          <Image
            style={{ width: 70, height: 70, resizeMode: "contain" }}
            source={require("../assets/Amount/chuyentien.png")}
          ></Image>
          <Text style={{ fontSize: 12, textAlign: "center" }}>Chuyển tiền</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Withdraw", { amount });
          }}
        >
          <Image
            style={{ width: 70, height: 70, resizeMode: "contain" }}
            source={require("../assets/Amount/ruttien.png")}
          ></Image>
          <Text style={{ fontSize: 12, textAlign: "center" }}>Rút tiền</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ backgroundColor: "#fff", marginTop: 10, marginBottom: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Lịch sử giao dịch
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "blue" }}>
              Xem tất cả
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={history}
          renderItem={({ item }) => {
            const imgSource = getImageSource(item.status);
            console.log(item.status);
            console.log(imgSource);
            console.log("item", item.header);
            let priceColor;
            if (item.header === "Nạp tiền") {
              priceColor = "#6fc9a2";
            } else if (item.header === "Rút tiền") {
              priceColor = "#d93c43";
            } else {
              priceColor = "blue";
            }
            let pricePrefix;
            if (item.header === "Nạp tiền") {
              pricePrefix = "+";
            } else if (
              item.header === "Rút tiền" ||
              item.header === "Chuyển tiền"
            ) {
              pricePrefix = "-";
            } else {
              pricePrefix = "";
            }
            return (
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    padding: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={{ width: 50, height: 50, resizeMode: "contain" }}
                      source={imgSource}
                    ></Image>
                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        {item.header}
                      </Text>
                      <Text style={{ fontSize: 12 }}>{item.title} </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: priceColor,
                      }}
                    >
                      {pricePrefix}
                      {item.price}
                    </Text>
                    <Text style={{ fontSize: 12 }}>{item.date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Amount;

const styles = StyleSheet.create({});
