import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

const Message = () => {
  const navigation = useNavigation();

  const list = ["Tất cả", "Bạn bè", "Nhóm", "Tin nhắn chờ"];
  const [selectedItem, setSelectedItem] = useState(0);

  const handleMenuItemPress = (index) => {
    setSelectedItem(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={34} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Chat
        </Text>
        <Feather name="edit" size={24} color="#40a0ed" />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.inputsearch}>
          <EvilIcons name="search" size={24} color="#ccc" />
          <TextInput placeholder="Tìm kiếm" style={styles.input}></TextInput>
        </View>
      </KeyboardAvoidingView>

      <ScrollView
        horizontal={true}
        // contentContainerStyle={{ paddingHorizontal: 10 }}
        showsHorizontalScrollIndicator={false}
        style={{ borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <View style={styles.menulist}>
          {list.map((item, index) => (
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
                <Text
                  style={[
                    styles.menuItemText,
                    selectedItem === index && styles.selectedMenuItemText,
                  ]}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.chatBody}>
        <View style={styles.icon}>
          <View style={styles.shape}>
            <Entypo
              name="users"
              size={50}
              color="#d7d8da"
              style={{ alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={styles.text}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 18,
              padding: 10,
            }}
          >
            Chưa có cuộc trò chuyện nào
          </Text>
          <Text
            style={{
              textAlign: "center",
              padding: 10,
              marginTop: 20,
              color: "#ccc",
            }}
          >
            Quý khách chưa có cuộc trò chuyện nào. Hãy bắt đầu nhắn tin trò
            chuyện cùng bạn bè ngay
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
  inputsearch: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f1f1f1",
    marginHorizontal: 10,
    borderRadius: 10,
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#ccc",
    height: "100%",
  },
  menulist: {
    flexDirection: "row",
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  menuItem: {
    alignItems: "center",
    textAlign: "center",
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  menuItemText: {
    color: "#333",
  },
  selectedMenuItemText: {
    color: "#034a9c",
    fontWeight: "bold",
  },
  icon: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },

  shape: {
    width: 120,
    height: 120,
    backgroundColor: "#f9f9f9",
    borderTopLeftRadius: 150,

    borderTopRightRadius: 90,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 90,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default Message;
