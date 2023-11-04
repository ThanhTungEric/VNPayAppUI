import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

const MenuForVoucher = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleMenuItemPress = (index) => {
    setSelectedItem(index);
  };
  const menuItems = [
    "Tất cả",
    "Thể thao giải trí",
    "VNPAY Taxi",
    "Đặt vé tàu",
    "Đặt vé xem phim",
    "Đặt vé máy bay",
    "Khác",
  ];
  return (
    <KeyboardAvoidingView>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleMenuItemPress(index)}
            >
              <View
                style={[
                  styles.menuItem,
                  selectedItem === index && styles.selectedMenuItem,
                ]}
              >
                <Text style={selectedItem === index && styles.selectedMenuItem}>
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 10,
    marginTop: 20,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 20,
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  selectedMenuItem: {
    backgroundColor: "#034a9c",
    color: "white",
    fontWeight: "bold",
  },
});

export default MenuForVoucher;
