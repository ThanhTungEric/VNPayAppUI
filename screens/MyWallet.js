import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function MyWallet() {
  const navigation = useNavigation();

  return (
    <View style={styles.myWalletScreen}>
      <TouchableOpacity onPress={() => navigation.navigate("BalanceScreen")} style={{ width: 50, height: 50, marginTop: 50 }}>
        <Text>myWalletScreen</Text>
      </TouchableOpacity>
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
  },
});
