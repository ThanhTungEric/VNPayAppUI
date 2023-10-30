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
import { StatusBar } from "expo-status-bar";

export default function ScanQR() {
  return (
    <View style={styles.scanQRScreen}>
      <Text>ScanQR</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  scanQRScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
