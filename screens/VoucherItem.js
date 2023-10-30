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

const voucher = [
  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã VNPAY100 - Giảm 30% tối đa 100.000 đ khi Đặt vé tàu",
    code: "VNPAY100",
    expiry: "20/12/2023",
  },

  {
    img: require("../assets/Voucher/disscount.png"),
    header:
      "Mã VNPAYXANHSM - Giảm 10 % tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi",
    code: "VNPAYXÁNHM",
    expiry: "20/12/2023",
  },

  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã DEALABNTHAN - Giảm 30% tối đa 30.000 đ khi Đặt vé tàu",
    code: "DEALABNTHAN",
    expiry: "30/12/2023",
  },

  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã VNPAY100 - Giảm 30% tối đa 100.000 đ khi Đặt vé tàu",
    code: "VNPAY100",
    expiry: "20/12/2023",
  },

  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã VNPAY100 - Giảm 30% tối đa 100.000 đ khi Đặt vé tàu",
    code: "VNPAY100",
    expiry: "20/12/2023",
  },

  {
    img: require("../assets/Voucher/disscount.png"),
    header: "Mã PHIM60K - Giảm 40% tối đa 60k khi đătj vé xem phim",
    code: "PHIM60K",
    expiry: "21/12/2023",
  },

  {
    img: require("../assets/Voucher/disscount.png"),
    header:
      "Mã DEALBANMOI - Giảm 50% tối đa 50.000 đ khi sử dụng dịch vụ VNPAY Taxi",
    code: "DEALBANMOI",
    expiry: "20/12/2023",
  },
];

const VoucherItem = () => {
  const navigation = useNavigation();

  return (
    // <FlatList
    //   data={voucher}
    //   renderItem={({ item }) => {
    //     return (
    //       <TouchableOpacity>
    //         <View style={styles.voucherContainer}>
    //           <View style={styles.voucher}>
    //             <TouchableOpacity>
    //               <View style={styles.voucherHeader}>
    //                 {/* Voucher Image */}
    //                 <Image
    //                   source={item.img}
    //                   style={styles.voucherHeaderImg}
    //                 ></Image>
    //                 {/* Voucher Title */}
    //                 <View style={styles.voucherHeaderTitle}>
    //                   <Text style={{ fontWeight: "bold", padding: 10 }}>
    //                     {item.header}
    //                   </Text>
    //                   <Text style={{ padding: 10 }}>{item.code}</Text>
    //                 </View>
    //               </View>
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //       </TouchableOpacity>
    //     );
    //   }}
    // ></FlatList>

    <TouchableOpacity style={styles.voucherContainer}>
      <View style={styles.voucherContainer}>
        <View style={styles.voucher}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("InfoVoucher");
            }}
          >
            <View style={styles.voucherHeader}>
              {/* Voucher Image */}
              <Image
                source={require("../assets/Voucher/disscount.png")}
                style={styles.voucherHeaderImg}
              ></Image>
              {/* Voucher Title */}
              <View style={styles.voucherHeaderTitle}>
                <Text style={{ fontWeight: "bold", padding: 10 }}>
                  Mã THETHAO50 - Giảm 50.000d khi đặt vé thể thao
                  {/* {route.params.msg} */}
                </Text>
                <Text style={{ padding: 10 }}>THETHAO50</Text>
              </View>
            </View>
            {/* Dashed Line */}
            <View style={styles.voucherLine}></View>
            <View style={styles.circle}></View>
            {/* Voucher Footer */}
            <View style={styles.voucherFooter}>
              <Text>HSD:5 ngày</Text>
              <Text>Sử dụng ngay</Text>
              {/* Circular Voucher */}
            </View>
            <View style={styles.circlee}></View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
    width: "93%",
    height: 2,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 10,
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
    top: 93,
    left: -10,
    zIndex: 1,
  },
  circlee: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#ebf1f8",
    position: "absolute",
    top: 93,
    left: 373,
    zIndex: 1,
  },
});
export default VoucherItem;
