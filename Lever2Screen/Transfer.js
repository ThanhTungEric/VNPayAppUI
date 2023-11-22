import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SectionList,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const phoneBook = [
  {
    title: "A",
    data: [
      {
        name: "Anh A",
        phone: "0123456789",
        image: require("../assets/Amount/avatarA.png"),
      },
      {
        name: "Anh B",
        phone: "0123456789",
        image: require("../assets/Amount/avatarB.png"),
      },
      {
        name: "Anh C",
        phone: "0123456789",
        image: require("../assets/Amount/avatarC.png"),
      },
      {
        name: "Anh D",
        phone: "0123456789",
        image: require("../assets/Amount/avatarD.png"),
      },
    ],
  },

  {
    title: "B",
    data: [
      {
        name: "Bạn E",
        phone: "0123456789",
        image: require("../assets/Amount/avatarE.png"),
      },
      {
        name: "Bạn F",
        phone: "0123456789",
        image: require("../assets/Amount/avatarF.png"),
      },
      {
        name: "Bạn G",
        phone: "0123456789",
        image: require("../assets/Amount/avatarG.png"),
      },
      {
        name: "Bạn H",
        phone: "0123456789",
        image: require("../assets/Amount/avatarH.png"),
      },
    ],
  },
  {
    title: "C",
    data: [
      {
        name: "Chị I",
        phone: "0123456789",
        image: require("../assets/Amount/avatarI.png"),
      },
      {
        name: "Chú J",
        phone: "0123456789",
        image: require("../assets/Amount/avatarJ.png"),
      },
      {
        name: "Chú K",
        phone: "0123456789",
        image: require("../assets/Amount/avatarK.png"),
      },
    ],
  },
  {
    title: "D",
    data: [
      {
        name: "Dì L",
        phone: "0123456789",
        image: require("../assets/Amount/avatarL.png"),
      },
      {
        name: "Dì M",
        phone: "0123456789",
        image: require("../assets/Amount/avatarM.png"),
      },
    ],
  },
  {
    title: "E",
    data: [
      {
        name: "Em N",
        phone: "0123456789",
        image: require("../assets/Amount/avatarN.png"),
      },
      {
        name: "Em O",
        phone: "0123456789",
        image: require("../assets/Amount/avatarO.png"),
      },
      {
        name: "Em P",
        phone: "0123456789",
        image: require("../assets/Amount/avatarP.png"),
      },
    ],
  },
];

const Transfer = ({ navigation, route }) => {

  


  const { amount } = route.params;
  return (
    <ScrollView>
      <View>
        <View>
          <TextInput
            placeholder="Nhập tên hoặc SĐT"
            style={styles.input}
            keyboardType="numeric"
          ></TextInput>
        </View>
        {/* Choice */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/Amount/transfer1.png")}
              style={{ width: 50, height: 50, marginLeft: 20, marginTop: 20 }}
            />
            <View
              style={{
                justifyContent: "center",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Chuyển tiền đến nhiều người
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/Amount/transfer2.png")}
              style={{ width: 50, height: 50, marginLeft: 20, marginTop: 20 }}
            />
            <View
              style={{
                justifyContent: "center",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Chuyển tiền đến nhiều người
              </Text>
            </View>
          </View>
        </View>
        {/* Danh bạ */}
        <View>
          <Text style={styles.phoneBook}>DANH BẠ</Text>
          <SectionList
            sections={phoneBook}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{ borderRadius: 10, borderColor: "red" }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: 50,
                      height: 50,
                      marginLeft: 20,
                      resizeMode: "contain",
                    }}
                  />
                  <View style={{ justifyContent: "center", marginLeft: 20 }}>
                    <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                    <Text>{item.phone}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text
                style={{ fontWeight: "bold", marginLeft: 20, marginTop: 20 }}
              >
                {title}
              </Text>
            )}
          ></SectionList>
        </View>
      </View>
    </ScrollView>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    marginTop: 20,
    height: 50,
  },
  phoneBook: {
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    fontSize: 15,
  },
});
