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
  
  export default function Chat() {
    return (
      <View style={styles.chatScreen}>
        <Text>chatScreen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  const styles = StyleSheet.create({
    chatScreen: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  