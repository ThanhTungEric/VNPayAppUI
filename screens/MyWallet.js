import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function MyWallet({ navigation }) {
  return (
    <View style={styles.myWalletScreen}>
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{
          flexGrow: 1,
          width: "100%",
          paddingHorizontal: 10,
          marginTop: 40,
        }}
      >
        <View style={styles.UserInfo}>
          <View style={styles.UserBorder}>
            <FontAwesome5 name="user-alt" size={35} color="#b8b8b8" />
          </View>
          <Text style={styles.UserName}>NGUYỄN THANH TÙNG</Text>
          <Text style={styles.PhoneNumber}>0812718942</Text>
        </View>

        <Text style={{ color: "#b9b9b9" }}>TÀI KHOẢN</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.AccountInfo}
              onPress={() => {
                openModal();
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5
                  name={getIconByName(item.title)}
                  size={20}
                  color="black"
                />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  {item.title}{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  myWalletScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  UserBorder: {
    backgroundColor: "#f0f0f0",
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  UserInfo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  UserName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  PhoneNumber: {
    fontSize: 12,
    color: "#b9b9b9",
  },
  Account: {
    flexDirection: "column",
  },
  AccountInfo: {
    flexDirection: "row",
    borderBottomWidth: 1, // Add a 1 pixel bottom border
    borderBottomColor: "#b9b9b9", // Set the border color
    justifyContent: "space-between",
    padding: 10,
  },
});
