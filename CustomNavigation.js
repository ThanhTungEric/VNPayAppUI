import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyWallet from "./screens/MyWallet";
import BalanceScreen from "./Lever2Screen/BalanceScreen";
import AccountInfo from "./WalletComponent/AccountInfo";
import VoucherScreen from "./screens/VoucherScreen";
import InfoVoucher from "./Lever2Screen/InfoVoucher";
import Transfer from "./Lever2Screen/Transfer";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return <Stack.Navigator>
    <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{ title: 'Chuyển tiền đến ví', headerTitleAlign: 'center', headerStyle: {height: 80} }}
      />
  </Stack.Navigator>;
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

const ChatScreenNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
};
export { ChatScreenNavigator };

const WalletScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="myWallet" component={MyWallet} options={{ headerShown: false }} />
      <Stack.Screen name="BalanceScreen" component={BalanceScreen} />
      <Stack.Screen name="AccountInfo" component={AccountInfo} />
    </Stack.Navigator>
  );
};
export { WalletScreenNavigator };
