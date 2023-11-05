import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  FontAwesome5,
  Octicons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let time = "";
  if (currentHour >= 5 && currentHour < 12) {
    time = "Buổi sáng tốt lành!";
  } else if (currentHour >= 12 && currentHour < 18) {
    time = "Buổi chiều vui tươi!";
  } else if (currentHour > 10 && currentHour < 1) {
    time = "Buổi trưa mát mẻ!";
  } else {
    time = "Buổi tối hạnh phúc!";
  }
  return time;
};
export default function MenuFull({ navigation }) {
  const getTime = getCurrentTime();

  const route = useRoute();
  const amount = route.params ? route.params.amount : 0;
  const [showAmount, setShowAmount] = useState(true);

  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.headerHome}>
        <View style={{ flexDirection: "row", marginTop: 44 }}>
          <View style={styles.cricleUser}>
            <FontAwesome5 name="user-alt" size={24} color="#b8b8b8" />
          </View>
          <View style={styles.userNameSpace}>
            <View style={styles.userName}>
              <Text>{getTime}</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Nguyễn Thành Luân
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginRight: 15 }}>
              <View style={styles.cricleUser}>
                <Octicons name="search" size={24} color="black" />
              </View>
              <View style={styles.cricleUser}>
                <FontAwesome name="envelope-o" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            height: 40,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 1 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Amount", { amount })}
              //   onPress={() => navigation.navigate("Amount")}
            >
              <View style={styles.soDuSpace}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={styles.imageSoDu}
                    source={require("../assets/icons/sodu.png")}
                  />
                  <TouchableOpacity onPress={() => setShowAmount(!showAmount)}>
                    <AntDesign
                      name={showAmount ? "eye" : "eyeo"}
                      size={30}
                      color="#c9d9e8"
                    />
                  </TouchableOpacity>
                  <Text
                    style={{ fontWeight: "bold", color: "#fff", marginLeft: 5 }}
                  >
                    {showAmount ? amount + " VND" : "********"}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 5,
                  }}
                >
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={15}
                    color="#fff"
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.poinSpace}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.imageSoDu}
                  source={require("../assets/icons/poin.png")}
                />
                <Text
                  style={{ fontWeight: "bold", color: "#fff", marginLeft: 5 }}
                >
                  10000 điểm
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={15}
                  color="#fff"
                />
              </View>
            </View>
            <View style={styles.bankAccount}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.imageSoDu}
                  source={require("../assets/icons/lienketTK.png")}
                />
                <Text
                  style={{ fontWeight: "bold", color: "#fff", marginLeft: 5 }}
                >
                  1 TK/ Thẻ liên kết
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={15}
                  color="#fff"
                />
              </View>
            </View>
            <View style={styles.addPayment}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#004a9a",
                    marginLeft: 5,
                    fontSize: 13,
                  }}
                >
                  + Thêm phương thức thanh toán
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.serviceVNpay}>
          <View style={styles.VNpayTaxi}>
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../assets/icons/VNPayTaxi.png")}
            />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>VNPAY Taxi</Text>
          </View>
          <View style={styles.VNpayTaxi}>
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../assets/icons/Vigiadinh.png")}
            />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>
              Ví gia đình
            </Text>
          </View>
          <View style={styles.VNpayTaxi}>
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../assets/icons/Vnshop.png")}
            />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>VnShop</Text>
          </View>
          <View style={styles.VNpayTaxi}>
            <Image
              style={{ width: 40, height: 40, resizeMode: "contain" }}
              source={require("../assets/icons/TThoaDon.png")}
            />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>TT Hóa đơn</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          top: -2,
          width: "100%",
        }}
      >
        <Image
          resizeMode="contain"
          source={require("../assets/something/menuVnpay.png")}
          style={{ width: "100%", height: 60 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerHome: {
    width: "100%",
    height: 210,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cricleUser: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#f0f0f0",
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  userNameSpace: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  userName: {
    marginLeft: 10,
  },
  imageSoDu: {
    width: 28,
    height: 28,
    resizeMode: "contain",
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 50,
  },
  soDuSpace: {
    backgroundColor: "#034a9c",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    width: 200,
    height: 38,
    borderRadius: 15,
    justifyContent: "space-between",
  },
  poinSpace: {
    backgroundColor: "#e5011a",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    width: 200,
    height: 38,
    borderRadius: 15,
    justifyContent: "space-between",
  },
  bankAccount: {
    backgroundColor: "#338ef7",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    width: 200,
    height: 38,
    borderRadius: 15,
    justifyContent: "space-between",
  },
  addPayment: {
    backgroundColor: "#ecf4ff",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    width: 200,
    height: 38,
    borderRadius: 15,
    justifyContent: "space-between",
    marginRight: 10,
  },
  serviceVNpay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  VNpayTaxi: {
    width: 80,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    backgroundColor: "#fff",
    width: 150,
    alignSelf: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  loginLogo: {
    alignSelf: "center",
    height: 30,
    width: 100,
  },
});
