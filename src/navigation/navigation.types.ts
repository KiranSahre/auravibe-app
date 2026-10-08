import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type IRootStackParamList = {
    LanguageScreen: undefined;
    LoginScreen: undefined;
    HomeScreen: undefined;
};


export type IRootNavigationProp = NativeStackNavigationProp<IRootStackParamList>;
