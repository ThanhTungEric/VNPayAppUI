import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  FontAwesome5,
  Octicons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AccountInfor() {
    const [userData, setUserData] = useState(null);
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const getUserData = async () => {
        try {
          const userData = await AsyncStorage.getItem('user');
          if (userData !== null) {
            const userObject = JSON.parse(userData);
            console.log("data ở Menufull.js", userObject);
            if (userObject.fullName) {
              setUserData(userObject);
            }
            if (userObject.fullName) {
              setFullName(userObject.fullName);
            }
            if (userObject.phone) {
              setPhone(userObject.phone);
            }
            if (userObject.email) {
              setEmail(userObject.email);
            }
          }
        } catch (error) {
          console.error('Error retrieving user data:', error);
        }
      };
      useFocusEffect(
        React.useCallback(() => {
          getUserData();
        }, [])
      );
    return (
        <View style={styles.myWalletScreen}>
            <ScrollView
                vertical
                showsVerticalScrollIndicator={false}
                style={{
                    flexGrow: 1,
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop: 40,
                }}
            >
                <View style={styles.UserInfo}>
                    <View style={styles.UserBorder}>
                        <FontAwesome5 name="user-alt" size={35} color="#b8b8b8" />
                    </View>
                    <Text style={styles.UserName}>{fullName}</Text>
                    <Text style={styles.PhoneNumber}>{fullName}</Text>
                </View>

                <View style={styles.UserInfor}>
                    <View style={styles.UserInforItem}>
                        <View style={styles.UserInforItemLeft}>
                            <FontAwesome5
                                name="user-alt"
                                size={20}
                                color="#b8b8b8"
                            />
                            <Text style={styles.UserInforItemText}>Họ tên</Text>
                        </View>
                        <View style={styles.UserInforItemRight}>
                            <Text style={styles.UserInforItemText}>
                            {fullName}
                            </Text>
                            <AntDesign
                                name="right"
                                size={20}
                                color="#b8b8b8"
                            />
                        </View>
                    </View>
                    <View style={styles.UserInforItem}>
                        <View style={styles.UserInforItemLeft}>
                            <FontAwesome5
                                name="phone-alt"
                                size={20}
                                color="#b8b8b8"
                            />
                            <Text style={styles.UserInforItemText}>Số điện thoại</Text>
                        </View>
                        <View style={styles.UserInforItemRight}>
                            <Text style={styles.UserInforItemText}>
                            {fullName}
                            </Text>
                            <AntDesign
                                name="right"
                                size={20}
                                color="#b8b8b8"
                            />
                        </View>
                    </View>
                    <View style={styles.UserInforItem}>
                        <View style={styles.UserInforItemLeft}>
                            <FontAwesome5
                                name="envelope"
                                size={20}
                                color="#b8b8b8"
                            />
                            <Text style={styles.UserInforItemText}>Email</Text>
                        </View>
                        <View style={styles.UserInforItemRight}>
                            <Text style={styles.UserInforItemText}>
                            {fullName}
                            </Text>
                            <AntDesign
                                name="right"
                                size={20}
                                color="#b8b8b8"
                            />
                        </View>
                    </View>
                    </View>
            </ScrollView>
        </View>

    )
}

export default AccountInfor;
const styles = StyleSheet.create({
    myWalletScreen: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 62,
    },
    imgHeader: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    UserInfo: {
        width: "100%",
        alignItems: "center",
        marginTop: -50,
    },
    UserBorder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#b8b8b8",
    },
    UserName: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    PhoneNumber: {
        fontSize: 15,
        color: "#b8b8b8",
        marginTop: 5,
    },
    UserInfor: {
        width: "100%",
        marginTop: 30,
    },
    UserInforItem: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#b8b8b8",
    },
    UserInforItemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    UserInforItemText: {
        fontSize: 15,
        marginLeft: 10,
    },
    UserInforItemRight: {
        flexDirection: "row",
        alignItems: "center",
    },
});

