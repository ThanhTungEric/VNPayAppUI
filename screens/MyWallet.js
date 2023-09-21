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
  
  export default function MyWallet() {
    return (
      <View style={styles.myWalletScreen}>
        <Text>myWalletScreen</Text>
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
  