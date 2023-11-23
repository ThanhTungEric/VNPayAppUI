import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const menuItems = [
  "Tất cả",
  "Mua sắm giải trí",
  "Du lịch di chuyển",
  "Viễn thông",
  "Thanh toán hóa đơn",
];

const list = [
  {
    id: 1,
    img: require("../assets/Point/a1.png"),
    title: "Voucher 30K  mua vé xe liên tỉnh",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 30,
    type: "Mua sắm giải trí",
    condition: "Điều kiện: Mua vé xe liên tỉnh trên 100K tại nhà xe Hải Vân",
  },
  {
    id: 2,
    img: require("../assets/Point/a2.png"),
    title: "Voucher 50K  mua vé tàu",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 50,
    type: "Du lịch di chuyển",
    condition: "Điều kiện: Mua vé tàu trên 100K tại nhà xe Hải Vân",
  },
  {
    id: 3,
    img: require("../assets/Point/a3.png"),
    title: "Voucher 100K đặt khách sạn",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 100,
    type: "Du lịch di chuyển",
    condition: "Điều kiện: đặt khách sạn trên 100K tại khách sạn Hải Nam",
  },
  {
    id: 4,
    img: require("../assets/Point/a4.png"),
    title: "Voucher 200K  mua vé xe liên tỉnh",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 200,
    type: "Viễn thông",
    condition: "Điều kiện: Mua vé xe liên tỉnh trên 100K tại nhà xe Hải Vân",
  },
  {
    id: 5,
    img: require("../assets/Point/a5.png"),
    title: "Voucher 300K  mua vé máy bay",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 300,
    type: "Mua sắm giải trí",
    condition: "Điều kiện: Mua vé máy bay trên 100K tại nhà xe Hải Vân",
  },
  {
    id: 6,
    img: require("../assets/Point/a6.jpg"),
    title: "Voucher 500K  mua vé máy bay",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 500,
    type: "Thanh toán hóa đơn",
    condition: "Điều kiện: Mua vé máy bay trên 100K tại nhà xe Hải Vân",
  },
  {
    id: 7,
    img: require("../assets/Point/a7.jpg"),
    title: "Voucher 1000K  mua vé máy bay",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 1000,
    type: "Thanh toán hóa đơn",
    condition: "Điều kiện: Mua vé máy bay trên 100K tại nhà xe Hải Vân",
  },
  {
    id: 8,
    img: require("../assets/Point/a8.jpg"),
    title: "Voucher 2000K  mua vé máy bay",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 2000,
    type: "Thanh toán hóa đơn",
    condition: "Điều kiện: Mua vé máy bay trên 100K tại nhà xe Hải Vân",
  },
  {
    id: 9,
    img: require("../assets/Point/a9.jpg"),
    title: "Voucher 3000K  mua vé máy bay",
    date: "Ưu đãi đến 31/12/2023",
    imgP: require("../assets/Point/point.png"),
    point: 3000,
    type: "Thanh toán hóa đơn",
    condition: "Điều kiện: Mua vé máy bay trên 100K tại nhà xe Hải Vân",
  },
];

const PointScreen = ({ navigation, route }) => {
  const [filter, setFilter] = React.useState(menuItems);
  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleMenuItemPress = (index) => {
    setSelectedItem(index);
  };
  React.useEffect(() => {
    const newArr = list.filter((item) => {
      if (menuItems[selectedItem] === "Tất cả") {
        return true;
      }
      return item.type === menuItems[selectedItem];
    });
    setFilter(newArr);
  }, [selectedItem]);
  
  const { point } = route.params;

  return (
    <View>
      <ScrollView>
        {/* header */}
        <View>
          <Image
            source={require("../assets/Point/ImageLogin.jpg")}
            style={styles.imageVoucher}
          ></Image>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <View style={styles.iconOne}>
                <AntDesign name="arrowleft" size={26} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.iconTwo}>
                <AntDesign name="questioncircle" size={24} color="white" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.iconThree}>
                <Entypo name="back-in-time" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* Point */}
        <View style={styles.coverPoint}>
          <View style={styles.point}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/Point/point.png")}
                style={styles.pointImg}
              ></Image>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.textContent}>Điểm thưởng khả dụng</Text>
              {/* <Text style={styles.textPoint}>{point || currentPointt}</Text> */}
              <Text style={styles.textPoint}>{point}</Text>
            </View>
          </View>
        </View>
        {/* Menu */}
        <ScrollView
          horizontal={true}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.menu}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleMenuItemPress(index);
                  const selectedType = menuItems[index];
                  console.log(selectedType);
                  const newArr = list.filter((item) => {
                    if (selectedType === "Tất cả") {
                      return true; // Hiển thị tất cả các loại voucher nếu người dùng chọn "Tất cả"
                    }
                    return item.type === selectedType;
                  });
                  setFilter(newArr);
                }}
              >
                <View
                  style={[
                    styles.menuItem,
                    selectedItem === index && styles.selectedMenuItem,
                  ]}
                >
                  <Text
                    style={selectedItem === index && styles.selectedMenuItem}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <FlatList
          data={filter}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, margin: 10 }}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#ccc",
                    borderRadius: 15,
                  }}
                  onPress={() => {
                    navigation.navigate("PointInfo", { item, point });
                  }}
                >
                  <Image
                    source={item.img}
                    style={{
                      width: 150,
                      height: 150,
                      resizeMode: "contain",
                      padding: 10,
                      marginLeft: 10,
                      borderRadius: 55,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      padding: 10,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        marginTop: 5,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text style={{ fontSize: 12, color: "#7f7f7f" }}>
                      {item.date}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 5,
                        width: 80,
                        height: 30,
                        backgroundColor: "#fff",
                        borderRadius: 50,
                      }}
                    >
                      <Image
                        source={item.imgP}
                        style={{
                          width: 30,
                          height: 30,
                          resizeMode: "contain",
                          borderRadius: 50,
                        }}
                      />
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: "bold",
                            marginLeft: 5,
                          }}
                        >
                          {item.point}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default PointScreen;

const styles = StyleSheet.create({
  imageVoucher: {
    width: "100%",
    height: 215,
    resizeMode: "contain",
    padding: -10,
  },
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  iconOne: {
    position: "absolute",
    top: -180,
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  iconTwo: {
    position: "absolute",
    top: -180,
    width: 40,
    height: 40,
    right: -150,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconThree: {
    position: "absolute",
    top: -180,
    width: 40,
    height: 40,
    right: 0,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  coverPoint: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -40,
  },
  pointImg: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  point: {
    width: "90%",
    height: 90,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
  },
  textPoint: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  textContent: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
    color: "#7f7f7f",
  },

  menu: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 10,
    marginTop: 20,
  },
  selectedMenuItem: {
    // backgroundColor: "#034a9c",
    color: "white",
    fontWeight: "bold",
    borderColor: "#034a9c",
    color: "#034a9c",
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 20,
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
});
