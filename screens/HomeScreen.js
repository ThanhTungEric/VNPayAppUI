import React, { useCallback, useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { useNavigation, useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";

import FavoriteFeature from "../Component/FavoriteFeature";
import Service from "../Component/Service";
import Poster from "../Component/Poster";
import SuggestionForYou from "../Component/SuggestionForYou";
import VnShop from "../Component/VnShop";
import MenuFull from "../Component/MenuFull";
import Menu from "../Component/Menu";
import Movie from "../Component/Movie";
import Recent_Payment from "../Component/Recent_Payment";

const Stack = createNativeStackNavigator();

const getCurrentTime = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let time = "";
  if (currentHour >= 5 && currentHour <= 10) {
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

export default function HomeScreen({ navigation }) {
  const getTime = getCurrentTime();
  const [showMenuFull, setShowMenuFull] = useState(true);
  const [switching, setSwitching] = useState(false);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (!switching && offsetY < 20) {
      setSwitching(true);
      setTimeout(() => {
        setShowMenuFull(true);
        setSwitching(false);
      }, 50);
    } else if (!switching && offsetY >= 20) {
      setSwitching(true);
      setTimeout(() => {
        setShowMenuFull(false);
        setSwitching(false);
      }, 50);
    }
  };

  return (
    <View style={styles.homeScreen}>
      {showMenuFull ? <MenuFull /> : <Menu />}
      <ScrollView
        onScroll={handleScroll}
        vertical
        showsVerticalScrollIndicator={false}
        style={{ width: "100%"}}
      >
          <FavoriteFeature navigation={navigation}/>
          <Service />
          <Poster />
          <SuggestionForYou />
          <VnShop />
          <Movie />
          <Recent_Payment />
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
});
