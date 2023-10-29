import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyWallet from "./screens/MyWallet";
import BalanceScreen from "./Lever2Screen/BalanceScreen";
import AccountInfo from "./WalletComponent/AccountInfo";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  return <Stack.Navigator>
    
  </Stack.Navigator>;
};
export { HomeScreenNavigator };

const VoucherScreenNavigator = () => {
  return <Stack.Navigator></Stack.Navigator>;
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
