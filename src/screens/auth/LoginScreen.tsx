import { Image, StyleSheet, } from 'react-native'
import React from 'react'
import { useTheme } from '../../theme/ThemeProvider'
import { IThemeColors } from '../../theme/ThemeTypes';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const logo = require('../../assets/images/logo.png');

const LoginScreen = () => {
    const { colors } = useTheme();
    const styles = createStyles(colors);


    return (
        <SafeAreaView style={styles.container}>

            <Image
                source={logo}
                style={styles.logo}
                resizeMode="contain"
            />

            <CustomTextInput placeholder="Username, email or mobile number" />

            <CustomTextInput placeholder="Password" />

            <CustomButton title='Login' />
        </SafeAreaView>
    )
}

export default LoginScreen

const createStyles = (colors: IThemeColors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 16,
    },
    logo: {
        width: 200,
        height: 80,
        marginBottom: 24,
    }
})