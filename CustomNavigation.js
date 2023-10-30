import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyWallet from "./screens/MyWallet";
import BalanceScreen from "./Lever2Screen/BalanceScreen";
import VoucherScreen from "./screens/VoucherScreen";
import InfoVoucher from "./Lever2Screen/InfoVoucher";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
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
      <Stack.Screen name="myWallet" component={MyWallet} />
      <Stack.Screen name="BalanceScreen" component={BalanceScreen} />
    </Stack.Navigator>
  );
};
export { WalletScreenNavigator };
