import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoriteFeature from "../Component/FavoriteFeature";
import Service from "../Component/Service";
import Poster from "../Component/Poster";
import SuggestionForYou from "../Component/SuggestionForYou";
import VnShop from "../Component/VnShop";

import BalanceScreen from "../Lever2Screen/BalanceScreen";
const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleBalance = () => {
    navigation.navigate("Balance");
    console.log("Balance");
  };
  return (
    
    <View style={styles.homeScreen}>
       <Stack.Navigator>
        <Stack.Screen name="Balance" component={BalanceScreen} />
      </Stack.Navigator>
      <View style={styles.headerHome}>
        <View style={{ flexDirection: "row", marginTop: 44 }}>
          <View style={styles.cricleUser}>
            <FontAwesome5 name="user-alt" size={24} color="#b8b8b8" />
          </View>
          <View style={styles.userNameSpace}>
            <View style={styles.userName}>
              <Text>Buổi tối an lành!</Text>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                NGUYỄN THANH TÙNG
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
            height: 40
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flexGrow: 1 }}

          >
            <TouchableOpacity onPress={()=> handleBalance()}>
            <View style={styles.soDuSpace} >
              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Image
                  style={styles.imageSoDu}
                  source={require("../assets/icons/sodu.png")}
                />
                <AntDesign name="eye" size={18} color="#c9d9e8" />
                <Text style={{ fontWeight: "bold", color: "#fff", marginLeft: 5 }}>524 232 234 VND</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", marginRight: 5 }}>
                <MaterialIcons name="arrow-forward-ios" size={15} color="#fff" />
              </View>
            </View>
            </TouchableOpacity>
            <View style={styles.poinSpace}>
              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Image
                  style={styles.imageSoDu}
                  source={require("../assets/icons/poin.png")}
                />
                <Text style={{ fontWeight: "bold", color: "#fff", marginLeft: 5 }}>10000 điểm</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", marginRight: 5 }}>
                <MaterialIcons name="arrow-forward-ios" size={15} color="#fff" />
              </View>
            </View>
            <View style={styles.bankAccount}>
              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Image
                  style={styles.imageSoDu}
                  source={require("../assets/icons/lienketTK.png")}
                />
                <Text style={{ fontWeight: "bold", color: "#fff", marginLeft: 5 }}>1 TK/ Thẻ liên kết</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", marginRight: 5 }}>
                <MaterialIcons name="arrow-forward-ios" size={15} color="#fff" />
              </View>
            </View>
            <View style={styles.addPayment}>
              <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text style={{ fontWeight: "bold", color: "#004a9a", marginLeft: 5, fontSize: 13 }}>+ Thêm phương thức thanh toán</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.serviceVNpay}>
          <View style={styles.VNpayTaxi}>
            <Image style={{ width: 40, height: 40, resizeMode: "contain" }} source={require("../assets/icons/VNPayTaxi.png")} />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>VNPAY Taxi</Text>
          </View>
          <View style={styles.VNpayTaxi}>
            <Image style={{ width: 40, height: 40, resizeMode: "contain" }} source={require("../assets/icons/Vigiadinh.png")} />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>Ví gia đình</Text>
          </View>
          <View style={styles.VNpayTaxi}>
            <Image style={{ width: 40, height: 40, resizeMode: "contain" }} source={require("../assets/icons/Vnshop.png")} />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>VnShop</Text>
          </View>
          <View style={styles.VNpayTaxi}>
            <Image style={{ width: 40, height: 40, resizeMode: "contain" }} source={require("../assets/icons/TThoaDon.png")} />
            <Text style={{ fontWeight: "bold", fontSize: 13 }}>TT Hóa đơn</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", position: "relative", top: -2}}>
        <Image style={{ width: 25, height: 25, resizeMode: "contain" }} source={require("../assets/icons/goc.png")} />
        <View style={styles.containerLogo}>
          <Image
            style={styles.loginLogo}
            source={require("../assets/icons/Loginlogo.png")}
            resizeMode="contain"
          ></Image>
        </View>
        <Image
          style={{ width: 25, height: 25, resizeMode: "contain",position: "relative", left: -1.5, transform: [{ rotate: "-90deg" }] }}
          source={require("../assets/icons/goc.png")}/>
      </View>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 1, width: "100%", paddingHorizontal: 10}}
      >
        <FavoriteFeature />
        <Service/>
        <Poster/>
        <SuggestionForYou/>
        <VnShop/>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 62,
  },
  headerHome: {
    width: "100%",
    height: 230,
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
    justifyContent: "space-between"
  },
  poinSpace: {
    backgroundColor: "#e5011a",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    width: 200,
    height: 38,
    borderRadius: 15,
    justifyContent: "space-between"
  },
  bankAccount: {
    backgroundColor: "#338ef7",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    width: 200,
    height: 38,
    borderRadius: 15,
    justifyContent: "space-between"
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
    marginRight: 10
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
    justifyContent: "center"
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
