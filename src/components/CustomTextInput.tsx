import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import { useTheme } from '../theme/ThemeProvider'
import { IThemeColors } from '../theme/ThemeTypes';

const CustomTextInput = (props: TextInputProps) => {
    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor={colors.secondaryText}
                {...props}
            />
        </View>
    )
}

export default CustomTextInput

const createStyles = (colors: IThemeColors) => StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: colors.secondaryBackground,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.borderColor,
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: colors.primaryText,
    }
})
