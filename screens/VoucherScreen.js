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
  
  export default function VoucherScreen() {
    return (
      <View style={styles.voucherScreen}>
        <Text>Vouncher</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  const styles = StyleSheet.create({
    voucherScreen: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  