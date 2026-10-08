import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { useTheme } from '../theme/ThemeProvider';
import { IThemeColors } from '../theme/ThemeTypes';

interface ICustomButtonProps extends TouchableOpacityProps {
    title: string;
}

const CustomButton = ({ title, style, ...rest }: ICustomButtonProps) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <TouchableOpacity style={[styles.container, style]} activeOpacity={0.8} {...rest}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const createStyles = (colors: IThemeColors) => StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: colors.blue,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
    text: {
        color: colors.primaryText,
        fontSize: 18,
        fontWeight: "600",
    }
})