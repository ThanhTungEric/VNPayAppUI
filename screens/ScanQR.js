import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable
} from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ScanQR({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData(data);
    navigation.navigate("FindPersion", { scannedData: data });
  };

  const resetScan = () => {
    setScanned(false);
    setScannedData(null);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.scanQRScreen}>
      <Text style={{ textAlign: "center", color: "#fff" }}>Đưa mã QR vào trung tâm của camera, tiến {'\n'} trình quyets mã sẽ diễn ra tự động.</Text>
      <View style={{ borderColor: "#045ba6", borderWidth: 5, width: 198, height: 260, alignItems: "center" }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ width: 250, height: 250, }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image style={{ width: 50, height: 50, borderRadius: 10 }} source={require("../assets/icons/imagepick.png")}></Image>
        <Text style={{ textAlign: "center", color: "#fff" }}>Chọn ảnh QR từ thư viện</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons name="speedometer" size={24} color="#fff" />
          <Text style={{ color: "#fff" }}>Giao dịch gần đây</Text>
        </View>
        <Pressable onPress={()=> {navigation.navigate("MyQR")}} style={{ alignItems: "center" }}>
          <MaterialCommunityIcons name="qrcode-scan" size={24} color="#fff" />
          <Text style={{ color: "#fff" }}>Mã QR của tôi</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scanQRScreen: {
    flex: 1,
    backgroundColor: "#252626",
    alignItems: "center",
    justifyContent: "space-around"
  },
});
