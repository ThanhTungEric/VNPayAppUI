import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Button,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";

const voucher = [
  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã VNPAY100 - Giảm 30% tối đa 100.000 đ khi Đặt vé tàu",
    code: "VNPAY100",
    expiry: "20/12/2023",
    condition:
      "Giảm 30% tối đa 100.000 đ khi đặt vé tàu. Áp dụng cho các cuốc từ 50.000 đ. Thời gian áp dụng đến ngày 20/12/2023.",
    type: "Đặt vé tàu",
  },
  {
    img: require("../assets/Voucher/disscount.png"),
    header:
      "Mã VNPAYXANHSM - Giảm 10 % tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi",
    code: "VNPAYXANHSM",
    expiry: "20/12/2023",
    condition:
      "Giảm 10% tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi. Áp dụng cho các cuốc từ 200.000 đ. Thời gian áp dụng đến ngày 20/12/2023.",
    type: "Đặt vé tàu",
  },
  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã DEALABNTHAN - Giảm 30% tối đa 30.000 đ khi Đặt vé tàu",
    code: "DEALABNTHAN",
    expiry: "30/12/2023",
    condition:
      "Giảm 30% tối đa 30.000 đ khi đặt vé tàu. Áp dụng cho các cuốc từ 100.000 đ. Thời gian áp dụng đến ngày 30/12/2023.",
    type: "Đặt vé tàu",
  },
  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã PHIM60K - Giảm 40% tối đa 60k khi đặt vé xem phim",
    code: "PHIM60K",
    expiry: "21/12/2023",
    condition:
      "Giảm 40% tối đa 60.000 đ khi đặt vé xem phim. Áp dụng cho các vé từ 150.000 đ. Thời gian áp dụng đến ngày 21/12/2023.",
    type: "Đặt vé xem phim",
  },
  {
    img: require("../assets/Voucher/disscount.png"),
    header:
      "Mã DEALBANMOI - Giảm 50% tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi",
    code: "DEALBANMOI",
    expiry: "20/12/2023",
    condition:
      "Giảm 50% tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi. Áp dụng cho các cuốc từ 100.000 đ. Thời gian áp dụng đến ngày 20/12/2023.",
    type: "VNPAY Taxi",
  },
  {
    img: require("../assets/Voucher/disscount.png"),
    header:
      "Mã VNPAYXANHSM - Giảm 10 % tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi",
    code: "VNPAYXANHSM",
    expiry: "20/12/2023",
    condition:
      "Giảm 10% tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi. Áp dụng cho các cuốc từ 200.000 đ. Thời gian áp dụng đến ngày 20/12/2023.",
    type: "VNPAY Taxi",
  },
  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã DEALABNTHAN - Giảm 30% tối đa 30.000 đ khi Đặt vé tàu",
    code: "DEALABNTHAN",
    expiry: "30/12/2023",
    condition:
      "Giảm 30% tối đa 30.000 đ khi đặt vé tàu. Áp dụng cho các cuốc từ 100.000 đ. Thời gian áp dụng đến ngày 30/12/2023.",
    type: "Đặt vé tàu",
  },
  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã PHIM60K - Giảm 40% tối đa 60k khi đặt vé xem phim",
    code: "PHIM60K",
    expiry: "21/12/2023",
    condition:
      "Giảm 40% tối đa 60.000 đ khi đặt vé xem phim. Áp dụng cho các vé từ 150.000 đ. Thời gian áp dụng đến ngày 21/12/2023.",
    type: "Đặt vé xem phim",
  },
  {
    img: require("../assets/Voucher/disscount.png"),
    header:
      "Mã DEALBANMOI - Giảm 50% tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi",
    code: "DEALBANMOI",
    expiry: "20/12/2023",
    condition:
      "Giảm 50% tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi. Áp dụng cho các cuốc từ 100.000 đ. Thời gian áp dụng đến ngày 20/12/2023.",
    type: "VNPAY Taxi",
  },
];

const VoucherItem = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState(voucher);

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
    <View>
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
                onPress={() => {
                  handleMenuItemPress(index);
                  const selectedType = menuItems[index];
                  const newArr = voucher.filter((item) => {
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
      </KeyboardAvoidingView>
      <FlatList
        data={filter}
        renderItem={({ item }) => {
          return (
            <View style={{ backgroundColor: "#ebf1f8" }}>
              <View
                style={{
                  marginVertical: 5,
                  marginLeft: 10,
                  width: "96%",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    height: 120,
                    paddingBottom: 30,
                  }}
                  onPress={() => {
                    navigation.navigate("InfoVoucher", { item });
                  }}
                >
                  <Image
                    source={item.img}
                    style={{
                      width: 50,
                      height: 50,
                      resizeMode: "contain",
                      marginTop: -40,
                    }}
                  />
                  <View style={{ flex: 1, marginLeft: 10, marginTop: -5 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 11 }}>
                      {item.header}
                    </Text>

                    <View
                      style={{
                        backgroundColor: "#ebf1f8",
                        padding: 5,
                        alignSelf: "flex-start",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 45,
                      }}
                    >
                      <Text style={{ fontSize: 7, color: "#7d9cbc" }}>
                        {item.code}
                      </Text>
                    </View>
                    {/* Dashed Line */}

                    <View style={styles.voucherLine}></View>
                  </View>

                  <View style={styles.circle}></View>
                  {/* Voucher Footer */}
                  <View
                    style={{
                      position: "absolute",
                      top: 95,
                      flexDirection: "row",
                    }}
                  >
                    <Text style={{ marginLeft: 10, fontSize: 13 }}>
                      HSD: {item.expiry}
                    </Text>
                    <Text
                      style={{
                        color: "#034a9c",
                        fontWeight: "bold",
                        marginLeft: 180,
                        fontSize: 13,
                      }}
                    >
                      Sử dụng ngay
                    </Text>

                    {/* Circular Voucher */}
                  </View>
                  <View style={styles.circlee}></View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>

    // <View style={styles.voucherContainer}>
    //   <View style={styles.voucherContainer}>
    //     <View style={styles.voucher}>
    //       <TouchableOpacity
    //         onPress={() => {
    //           navigation.navigate("InfoVoucher");
    //         }}
    //       >
    //         <View style={styles.voucherHeader}>
    //           {/* Voucher Image */}
    //           <Image
    //             source={require("../assets/Voucher/disscount.png")}
    //             style={styles.voucherHeaderImg}
    //           ></Image>
    //           {/* Voucher Title */}
    //           <View style={styles.voucherHeaderTitle}>
    //             <Text style={{ fontWeight: "bold", padding: 10 }}>
    //               Mã THETHAO50 - Giảm 50.000d khi đặt vé thể thao
    //               {/* {route.params.msg} */}
    //             </Text>
    //             <Text style={{ padding: 10 }}>THETHAO50</Text>
    //           </View>
    //         </View>
    //         {/* Dashed Line */}
    //         <View style={styles.voucherLine}></View>
    //         <View style={styles.circle}></View>
    //         {/* Voucher Footer */}
    //         <View style={styles.voucherFooter}>
    //           <Text>HSD:5 ngày</Text>
    //           <Text>Sử dụng ngay</Text>
    //           {/* Circular Voucher */}
    //         </View>
    //         <View style={styles.circlee}></View>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  voucherContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ebf1f8",
    borderRadius: 20,
    flexDirection: "column",
  },
  voucher: {
    width: "90%",
    height: "15%",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  voucherHeader: {
    width: "100%",
    height: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  voucherHeaderImg: {
    width: "20%",
    height: "auto",
    resizeMode: "contain",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
  },
  voucherHeaderTitle: {
    width: "70%",
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    fontWeight: "bold",
  },
  voucherLine: {
    width: "165%",
    borderWidth: 1,
    borderColor: "gray",
    borderStyle: "dashed",
    marginTop: 22,
    marginLeft: -60,
  },
  voucherFooter: {
    width: "100%",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Thêm thuộc tính align items để căn giữa đường tròn
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ebf1f8",
    position: "absolute",
    top: 70,
    left: -10,
    zIndex: 1,
  },
  circlee: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ebf1f8",
    position: "absolute",
    top: 71,
    left: 399,
    zIndex: 1,
  },
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
export default VoucherItem;
