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
import { Alert } from "react-native";
import { set } from "lodash";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

function EnterMoney({ navigation, route }) {
    const [money, setMoney] = React.useState(0);
    const [title, setTitle] = React.useState("NHẬP NỘI DUNG CHUYỂN TIỀN");
    
    const { data } = route.params;
    const jsonString = JSON.parse(data);
    console.log("data in EnterMoney", jsonString);

    const handelNext = () => {
        if (money == 0) {
            Alert.alert("Thông báo", "Vui lòng nhập số tiền");
        } else {
            navigation.navigate("ConfirmMoney", {
                data: data,
                money: money,
                title: title,
            });
        }
    };

    return (
        <View style={{ backgroundColor: "#fff", height: "100%" }}>
            <View style={{ height: 30 }}></View>
            <View style={{ width: "100%", height: 60,  flexDirection: "row", alignItems: "center" }}>
                {/* <AntDesign style={{ marginLeft: 15 }} name="arrowleft" size={24} color="black" /> */}
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Image style={{ width: 50, height: 50 }} source={require("../assets/icons/avtpersion.png")}></Image>
                    <View style={{ marginLeft: 15, justifyContent: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 17, textTransform: "uppercase" }}>{jsonString.fullName}</Text>
                        <Text style={{ fontSize: 15 }}>{jsonString.phone}</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 50, alignItems: "center" }}>
                <TextInput
                    placeholder="Nhập số tiền"
                    style={styles.input}
                    onChangeText={(text) => setMoney(text)}
                    value={money}
                    keyboardType="numeric"
                />
                <View style={{ backgroundColor: "#fff", width: "90%", borderWidth: 1, borderColor: "#f0f0f0", borderRadius: 15, paddingHorizontal: 10, paddingVertical: 10, marginTop: 20 }}>
                    <Text style={{ color: "#949494", fontWeight: "400" }}>Nội dung giao dịch</Text>
                    <TextInput style={{ width: "100%", backgroundColor: "white", marginTop: 5, fontWeight: "bold", color: "#111" }}
                        onChangeText={(text) => setTitle(text)}
                        value={title}></TextInput>
                </View>
            </View>
            <Pressable onPress={handelNext} style={{ width: "90%", height: 50, backgroundColor: "#004a9b", borderRadius: 15, marginTop: 50, alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 17 }}>Tiếp tục</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    )
}

export default EnterMoney;
const styles = StyleSheet.create({
    input: {
        textAlign: "center",
        fontSize: 25,
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

