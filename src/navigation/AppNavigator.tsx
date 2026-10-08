import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IRootStackParamList } from "./navigation.types";

import LanguageScreen from "../screens/auth/LanguageScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";

const stack = createNativeStackNavigator<IRootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="LanguageScreen" screenOptions={{ headerShown: false }}>
                <stack.Screen name="LanguageScreen" component={LanguageScreen} />
                <stack.Screen name="LoginScreen" component={LoginScreen} />
                <stack.Screen name="HomeScreen" component={HomeScreen} />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
