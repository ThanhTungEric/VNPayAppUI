import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  SectionList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";
import { set } from "lodash";
import { FontAwesome } from "@expo/vector-icons";

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
  const [phone, setPhone] = React.useState("0787944346");
  const [isValid, setIsValid] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [userFinded, setUserFinded] = React.useState([]);
  const [nameUserFinded, setNameUserFinded] = React.useState("");
  const [phoneUserFinded, setPhoneUserFinded] = React.useState("");

  const checkNumberPhone = async () => {
    const regex =
      /^(086|096|097|098|039|038|037|036|035|034|032|033|091|094|088|083|084|085|081|082|070|079|077|076|078|089|090|093)\d{7}$/;
    const validNum = regex.test(phone);
    setIsValid(validNum);

    if (!validNum) {
      Alert.alert(
        "Số điện thoại không hợp lệ!",
        "Vui lòng nhập số điện thoại hợp lệ."
      );
    } else {
      try {
        const response = await fetch(
          "https://650c005f47af3fd22f66d7d8.mockapi.io/api/user"
        );
        const users = await response.json();
        const existingUser = users.find((user) => user.phone === phone);
        if (existingUser) {
          const data = JSON.stringify(existingUser);
          setUserFinded(data);
          setNameUserFinded(existingUser.fullName);
          setPhoneUserFinded(existingUser.phone);
          console.log("User found in Transfer:", existingUser);
        }
      } catch (error) {
        console.error("Error during phone number check:", error);
      }
    }
  };
  return (
    <ScrollView>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "90%",
            paddingHorizontal: 20,
            paddingTop: 20,
          }}
        >
          <TextInput
            placeholder="Nhập tên hoặc SĐT"
            style={styles.input}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            keyboardType="numeric"
          ></TextInput>
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#024a9c",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
            onPress={checkNumberPhone}
          >
            <AntDesign name="search1" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        {/* Choice */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/Amount/transfer1.png")}
              style={{
                width: 50,
                height: 50,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 50,
              }}
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
              style={{
                width: 50,
                height: 50,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: 50,
              }}
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
        {userFinded && userFinded.length > 0 ? (
          <View style={{ marginTop: 20 }}>
            <Text style={styles.phoneBook}>KẾT QUẢ TÌM KIẾM</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("EnterMoney", { data: userFinded });
              }}
              style={{
                flexDirection: "row",
                paddingLeft: 20,
                marginTop: 8,
                backgroundColor: "#87cefa",
                paddingVertical: 8,
              }}
            >
              <Image
                source={require("../assets/Amount/avatarP.png")}
                style={{ width: 50, height: 50 }}
              />
              <View style={{ justifyContent: "center", marginLeft: 20 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {nameUserFinded}
                </Text>
                <Text style={{ fontSize: 16 }}>{phoneUserFinded}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
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
        )}
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
    height: 50,
  },
  phoneBook: {
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    fontSize: 15,
  },
});
