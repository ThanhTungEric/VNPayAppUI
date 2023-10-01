import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Message = () => {
  const navigation = useNavigation();

  const list = ["Tất cả", "Bạn bè", "Nhóm", "Tin nhắn chờ"];
  const [selectedItem, setSelectedItem] = useState(0);

  const handleMenuItemPress = (index) => {
    setSelectedItem(index);
  };

  return (
    <KeyboardAvoidingView>
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

        <KeyboardAvoidingView>
          <View style={styles.inputsearch}>
            <EvilIcons name="search" size={24} color="#ccc" />
            <TextInput placeholder="Tìm kiếm" style={styles.input}></TextInput>
          </View>
        </KeyboardAvoidingView>

        <ScrollView
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 10 }}
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
        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
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
    alignItems: "center",
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
});

export default Message;
