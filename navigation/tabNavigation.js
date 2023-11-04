import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Chat from "../screens/Chat";
import MyWallet from "../screens/MyWallet";
import VoucherScreen from "../screens/VoucherScreen";
import ScanQR from "../screens/ScanQR";
import {
  WalletScreenNavigator,
  HomeScreenNavigator,
  ChatScreenNavigator,
  VoucherScreenNavigator,
} from "../CustomNavigation";
import { Platform, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60,
  },
};

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => {
              const iconSource = focused
                ? require("../assets/icons/homeVnpay.png")
                : require("../assets/icons/homeVnpay2.png");

              const textColor = focused ? "#204c8b" : "#bababa";
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Image style={{ height: 25,width: 25 , resizeMode: 'contain' }} source={iconSource} />
                  <Text style={{ fontSize: 12, color: textColor, fontWeight: "bold" }}>Trang chủ</Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="voucher"
          component={VoucherScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialCommunityIcons
                    name="ticket-confirmation-outline"
                    size={26}
                    color={focused ? "#204c8b" : "#bababa"}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: focused ? "#204c8b" : "#bababa",
                      fontWeight: "bold",
                    }}
                  >
                    Ưu đãi
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="scanQR"
          component={ScanQR}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    top: Platform.OS === "ios" ? -10 : -20,
                    width: Platform.OS === "ios" ? 50 : 60,
                    height: Platform.OS === "ios" ? 50 : 60,
                    borderRadius: Platform.OS === "ios" ? 25 : 30,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <Image
                    style={{ width: 60, height: 60, resizeMode: "contain" }}
                    source={require("../assets/icons/scanQRimg.png")}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: focused ? "#204c8b" : "#bababa",
                      fontWeight: "bold",
                    }}
                  >
                    Quét QR
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <AntDesign
                    name="message1"
                    size={24}
                    color={focused ? "#204c8b" : "#bababa"}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: focused ? "#204c8b" : "#bababa",
                      fontWeight: "bold",
                    }}
                  >
                    Chat
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="myWallet"
          component={WalletScreenNavigator}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <AntDesign
                    name="wallet"
                    size={26}
                    color={focused ? "#204c8b" : "#bababa"}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      color: focused ? "#204c8b" : "#bababa",
                      fontWeight: "bold",
                    }}
                  >
                    Ví của tôi
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
