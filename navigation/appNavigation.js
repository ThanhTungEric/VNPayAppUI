import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Import các màn hình cần thiết
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import ChangePhoneNumberScreen from "../screens/ChangePhoneNumberScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import InfoRegisterScreen from "../screens/InfoRegisterScreen";

import { LogBox, Text, View } from "react-native";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="ChangePhoneNumber"
          options={{ headerShown: false }}
          component={ChangePhoneNumberScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{ headerShown: false }}
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="InfoRegister"
          options={{ headerShown: false }}
          component={InfoRegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
