import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
  FlatList,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { require } from "yargs";

export default function MyWallet({ navigation }) {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const navigateLogin = () => {
    navigation.navigate("LoginScreen");
  };

  const data = [
    {
      id: 1,
      title: "Thông tin tài khoản",
      icon: "user",
    },
    {
      id: 2,
      title: "Thông tin ví",
      icon: "wallet",
    },
    {
      id: 3,
      title: "Thông tin điểm thưởng",
      icon: "medal-outline",
    },
    {
      id: 4,
      title: "Lịch sử giao dịch",
      icon: "file-text",
    },
    {
      id: 5,
      title: "Liên kết ngân hàng",
    },
    {
      id: 6,
      title: "Ví gia đình",
    },
    {
      id: 7,
      title: "Giới thiệu bạn bè",
    },
    {
      id: 8,
      title: "Thanh toán nhanh",
    },
    {
      id: 9,
      title: "Đổi mật khẩu",
    },
    {
      id: 10,
      title: "Cài đặt mã PIN cho Soft OTP",
    },
    {
      id: 11,
      title: "Cài đặt vân tay",
    },
    {
      id: 12,
      title: "Ngôn ngữ",
    },
    {
      id: 13,
      title: "Thông tin chung",
    },
    {
      id: 14,
      title: "Đăng xuất",
    },
  ];

  const getIconByName = (itemName) => {
    switch (itemName) {
      case "Thông tin tài khoản":
        return "user";
      case "Thông tin ví":
        return "wallet";
      case "Thông tin điểm thưởng":
        return "award";
      case "Lịch sử giao dịch":
        return "history";
      case "Liên kết ngân hàng":
        return "bank";
      case "Ví gia đình":
        return "home";
      case "Giới thiệu bạn bè":
        return "users";
      case "Thanh toán nhanh":
        return "payment";
      case "Đổi mật khẩu":
        return "key";
      case "Cài đặt mã PIN cho Soft OTP":
        return "lock";
      case "Cài đặt vân tay":
        return "fingerprint";
      case "Ngôn ngữ":
        return "language";
      case "Thông tin chung":
        return "info";
      case "Đăng xuất":
        return "logout";
      default:
        return "default-icon"; // Icon mặc định hoặc icon trống
    }
  };

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
          <Text style={styles.UserName}>NGUYỄN THANH TÙNG</Text>
          <Text style={styles.PhoneNumber}>0812718942</Text>
        </View>

        <Text style={{ color: "#b9b9b9" }}>TÀI KHOẢN</Text>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.AccountInfo}
              onPress={() => {
                openModal();
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5
                  name={getIconByName(item.title)}
                  size={20}
                  color="black"
                />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  {item.title}{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </TouchableOpacity>
          )}
        />

        {/* <View style={styles.Account}>
          <Text style={{ color: "#b9b9b9" }}>TÀI KHOẢN</Text>
          <View style={styles.AccountInfo}>
            <Pressable
              onPress={() => navigation.navigate("AccountInfo")}
              style={{ flexDirection: "row" }}
            >
              <FontAwesome5 name="user" size={20} color="black" />
              <Text
                style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
              >
                {" "}
                Thông tin tài khoản{" "}
              </Text>
            </Pressable>
            <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
          </View>

          <View style={styles.AccountInfo}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="wallet" size={20} color="black" />
              <Text
                style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
              >
                {" "}
                Thông tin Ví{" "}
              </Text>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
          </View>

          <View style={styles.AccountInfo}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="medal-outline"
                size={20}
                color="black"
              />
              <Text
                style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
              >
                {" "}
                Thông tin điểm thưởng{" "}
              </Text>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
          </View>

          <View style={styles.AccountInfo}>
            <View style={{ flexDirection: "row" }}>
              <Feather name="file-text" size={20} color="black" />
              <Text
                style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
              >
                {" "}
                Lịch sử giao dịch{" "}
              </Text>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
          </View>

          <View style={styles.AccountInfo}>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bank-outline"
                size={20}
                color="black"
              />
              <Text
                style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
              >
                {" "}
                Liên kết ngân hàng{" "}
              </Text>
            </View>
            <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
          </View>
          <View style={styles.Account}>
            <Text style={{ color: "#b9b9b9" }}>TIỆN ÍCH</Text>
            <View style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="account-group-outline"
                  size={20}
                  color="black"
                />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Ví gia đình{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </View>

            <View style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <Feather name="share-2" size={20} color="black" />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Giới thiệu bạn bè{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </View>
          </View>
          <View style={styles.Account}>
            <Text style={{ color: "#b9b9b9" }}>THANH TOÁN</Text>
            <View style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <FontAwesome name="send-o" size={20} color="black" />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Thanh toán nhanh{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </View>
          </View>
          <View style={styles.Account}>
            <Text style={{ color: "#b9b9b9" }}>BẢO MẬT</Text>
            <View style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="folder-key-outline"
                  size={20}
                  color="black"
                />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Đổi mật khẩu{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </View>

            <View style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="alpha-o-box-outline"
                  size={20}
                  color="black"
                />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Cài đặt mã PIN cho Soft OTP{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </View>

            <View style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <Entypo name="fingerprint" size={20} color="black" />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Cài đặt vân tay{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </View>
          </View>
          <View style={styles.Account}>
            <Text style={{ color: "#b9b9b9" }}>CÀI ĐẶT KHÁC</Text>
            <View style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="language" size={20} color="black" />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Ngôn ngữ{" "}
                </Text>
              </View>
              <Text style={{ color: "#b9b9b9", marginLeft: 140 }}>
                {" "}
                Tiếng Việt
              </Text>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </View>

            <View style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <SimpleLineIcons name="exclamation" size={20} color="black" />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Thông tin chung{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </View>

            <TouchableOpacity onPress={openModal} style={styles.AccountInfo}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="exit-outline" size={20} color="#e09099" />
                <Text
                  style={{ marginLeft: 10, marginTop: 2, fontWeight: "bold" }}
                >
                  {" "}
                  Đăng xuất{" "}
                </Text>
              </View>
              <MaterialIcons name="navigate-next" size={24} color="#b9b9b9" />
            </TouchableOpacity>
          </View>

          <Modal
            visible={showModal}
            animationType="slide"
            transparent={true}
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={{ fontWeight: "bold" }}>Thông báo</Text>

                <Text style={styles.modalText}>
                  Bạn có chắc muốn đăng xuất?
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={closeModal}>
                    <Text style={styles.nextButton}>Bỏ qua</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={navigateLogin}>
                    <Text style={styles.closeButton}>Đồng ý</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View> */}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  myWalletScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  UserBorder: {
    backgroundColor: "#f0f0f0",
    height: 70,
    width: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  UserInfo: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  UserName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  PhoneNumber: {
    fontSize: 12,
    color: "#b9b9b9",
  },
  Account: {
    flexDirection: "column",
  },
  AccountInfo: {
    flexDirection: "row",
    borderBottomWidth: 1, // Add a 1 pixel bottom border
    borderBottomColor: "#b9b9b9", // Set the border color
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu nền mờ
  },

  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5, // Để cho Android
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  closeButton: {
    fontSize: 16,
    backgroundColor: "#024a9c",
    color: "white",
    fontWeight: "bold",
    padding: 10,
    borderRadius: 5,
  },
  nextButton: {
    fontSize: 16,
    color: "blue",
    fontWeight: "bold",
  },
  modalCenter: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
});
