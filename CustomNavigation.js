import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import MyWallet from "./screens/MyWallet";
import BalanceScreen from "./Lever2Screen/BalanceScreen";
// Voucher
import VoucherScreen from "./screens/VoucherScreen";
import InfoVoucher from "./Lever2Screen/InfoVoucher";
import Transfer from "./Lever2Screen/Transfer";
// Home
import HomeScreen from "./screens/HomeScreen";
import AmountScreen from "./Lever2Screen/Amount";
import RechargeScreen from "./Lever2Screen/Recharge";
import WithdrawScreen from "./Lever2Screen/Withdraw";
import TransferScreen from "./Lever2Screen/Transfer";
import EnterMoney from "./Lever2Screen/EnterMoney";
import ConfirmMoney from "./Lever2Screen/ConfirmMoney";
import Bill from "./Lever2Screen/Bill";
import Noti from "./Lever2Screen/Noti";
// Point
import PointScreen from "./Point/PointScreen";
import PointInfo from "./Point/PointInfo";

import LoginScreen from "./screens/LoginScreen";

// ScanQR
import ScanQR from "./screens/ScanQR";
import FindPersion from "./Lever2Screen/FindPersion";
import ConfirmMoneyQR from "./Lever2Screen/ConfirmMoneyQR";
import BillQR from "./Lever2Screen/BillQR";
import MyQR from "./Lever2Screen/MyQR";

// Wallet
import GeneralInfo from "./Lever2Screen/GeneralInfo";
import AccountInfor from "./Lever2Screen/AccountInfor";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{
          title: "Chuyển tiền đến ví",
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
        }}
      />
      <Stack.Screen
        name="Amount"
        component={AmountScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Recharge"
        component={RechargeScreen}
        options={{
          title: "Nạp tiền",
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
        }}
      />

      <Stack.Screen
        name="Withdraw"
        component={WithdrawScreen}
        options={{ headerShown: false }}
      />
      {/* Point */}
      <Stack.Screen
        name="PointScreen"
        component={PointScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PointInfo"
        component={PointInfo}
        options={{ headerTitle: "Chi tiết quà" }}
      />
      <Stack.Screen
        name="EnterMoney"
        component={EnterMoney}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmMoney"
        component={ConfirmMoney}
        options={{
          title: "Xác nhận giao dịch",
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
        }}
      />
      <Stack.Screen
        name="Bill"
        component={Bill}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Noti"
        component={Noti}
        options={{
          title: "Thông báo",
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
        }}
      />
    </Stack.Navigator>
  );
};
export { HomeScreenNavigator };

const VoucherScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VoucherScreen"
        component={VoucherScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfoVoucher"
        component={InfoVoucher}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export { VoucherScreenNavigator };

const CustomHeaderTitle = () => (
  <Image
    style={{ width: 90, height: 40 }}
    resizeMode="contain"
    source={require("./assets/icons/scanQR.png")}
  />
);
export default CustomHeaderTitle;

const ScanQRScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ScanQR"
        component={ScanQR}
        options={{
          headerTitle: () => <CustomHeaderTitle />,
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="FindPersion"
        component={FindPersion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ConfirmMoneyQR"
        component={ConfirmMoneyQR}
        options={{
          title: "Xác nhận giao dịch",
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
        }}
      />
      <Stack.Screen
        name="BillQR"
        component={BillQR}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyQR"
        component={MyQR}
        options={{
          title: "My QR",
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
        }}

      />
    </Stack.Navigator>
  );
};
export { ScanQRScreenNavigator };

const ChatScreenNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};
export { ChatScreenNavigator };

const WalletScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="myWallet"
        component={MyWallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="BalanceScreen" component={BalanceScreen} />
      <Stack.Screen
        name="GeneralInfo"
        component={GeneralInfo}
        options={{
          title: "Thông tin chung",
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
        }}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="AccountInfor"
        component={AccountInfor}
        options={{
          title: "Thông tin tài khoản",
          headerTitleAlign: "center",
          headerStyle: { height: 80 },
        }}
      />
    </Stack.Navigator>
  );
};
export { WalletScreenNavigator };
