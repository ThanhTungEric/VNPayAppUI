import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

const array = [
  {
    img: require("../assets/Amount/naptien.png"),
    header: "Nạp tiền",
    title: "Nạp tiền vào ví",
    price: "10.000.000 VND",
    date: "30/10/2023",
  },
  {
    img: require("../assets/Amount/chuyentien.png"),
    header: "Chuyển tiền",
    title: "Chuyển tiền cho bạn bè",
    price: "7.000.000 VND",
    date: "10/10/2023",
  },
  {
    img: require("../assets/Amount/ruttien.png"),
    header: "Rút tiền",
    title: "Rút tiền từ ví",
    price: "8.000.000 VND",
    date: "10/10/2023",
  },
  {
    img: require("../assets/Amount/naptien.png"),
    header: "Nạp tiền",
    title: "Nạp tiền vào ví",
    price: "300.000 VND",
    date: "8/10/2023",
  },
  {
    img: require("../assets/Amount/chuyentien.png"),
    header: "Chuyển tiền",
    title: "Chuyển tiền cho bạn bè",
    price: "100.000 VND",
    date: "7/10/2023",
  },
  {
    img: require("../assets/Amount/ruttien.png"),
    header: "Rút tiền",
    title: "Rút tiền từ ví",
    price: "8.000.000 VND",
    date: "10/10/2023",
  },
  {
    img: require("../assets/Amount/naptien.png"),
    header: "Nạp tiền",
    title: "Nạp tiền vào ví",
    price: "300.000 VND",
    date: "8/10/2023",
  },
  {
    img: require("../assets/Amount/chuyentien.png"),
    header: "Chuyển tiền",
    title: "Chuyển tiền cho bạn bè",
    price: "100.000 VND",
    date: "7/10/2023",
  },
  {
    img: require("../assets/Amount/naptien.png"),
    header: "Nạp tiền",
    title: "Nạp tiền vào ví",
    price: "300.000 VND",
    date: "8/10/2023",
  },
  {
    img: require("../assets/Amount/chuyentien.png"),
    header: "Chuyển tiền",
    title: "Chuyển tiền cho bạn bè",
    price: "100.000 VND",
    date: "7/10/2023",
  },
  {
    img: require("../assets/Amount/naptien.png"),
    header: "Nạp tiền",
    title: "Nạp tiền vào ví",
    price: "300.000 VND",
    date: "8/10/2023",
  },
  {
    img: require("../assets/Amount/chuyentien.png"),
    header: "Chuyển tiền",
    title: "Chuyển tiền cho bạn bè",
    price: "100.000 VND",
    date: "7/10/2023",
  },
  {
    img: require("../assets/Amount/naptien.png"),
    header: "Nạp tiền",
    title: "Nạp tiền vào ví",
    price: "300.000 VND",
    date: "8/10/2023",
  },
  {
    img: require("../assets/Amount/chuyentien.png"),
    header: "Chuyển tiền",
    title: "Chuyển tiền cho bạn bè",
    price: "100.000 VND",
    date: "7/10/2023",
  },
  {
    img: require("../assets/Amount/naptien.png"),
    header: "Nạp tiền",
    title: "Nạp tiền vào ví",
    price: "300.000 VND",
    date: "8/10/2023",
  },
  {
    img: require("../assets/Amount/chuyentien.png"),
    header: "Chuyển tiền",
    title: "Chuyển tiền cho bạn bè",
    price: "100.000 VND",
    date: "7/10/2023",
  },
];
const Amount = ({ route, navigation }) => {
  const { amount } = route.params;
  const [showAmount, setShowAmount] = React.useState(true);
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

          <Text style={{ fontSize: 11 }}>Số dư khả dụng (VND)</Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
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

      <ScrollView style={{ backgroundColor: "#fff", marginTop: 10 }}>
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
          data={array}
          renderItem={({ item }) => {
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
                      source={item.img}
                    ></Image>
                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                        {item.header}
                      </Text>
                      <Text style={{ fontSize: 12 }}>{item.title}</Text>
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
