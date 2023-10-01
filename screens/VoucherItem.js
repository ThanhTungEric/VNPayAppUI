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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InfoVoucher from "./InfoVoucher";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const VoucherItem = () => {
  const navigation = useNavigation();
  const handleNavigateToInfoVoucher = () => {
    navigation.navigate("InfoVoucher");
  };

  return (
    <TouchableOpacity style={styles.voucherContainer}>
      <View style={styles.voucherContainer}>
        <View style={styles.voucher}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("VoucherItem");
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
    resizeMode: "cover",
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
});
export default VoucherItem;
