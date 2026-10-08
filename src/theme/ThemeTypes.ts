export interface IThemeColors {
    primary: string;
    primaryBackground: string;
    background: string;
    card: string;
    border: string;

    textPrimary: string;
    textSecondary: string;
    textViewBorder: string;
    secondary: string;
    secondaryText: string;
    placeholder: string;
    lightBackground: string;
    secondaryBackground: string;
    success: string;
    warning: string;
    error: string;
    info: string;

    white: string;
    black: string;
    grey: string;
    grayLight: string;
    grayDark: string;
    interestSelectorBg: string;
    cancel: string;
    cancelBackground: string;
    chatIcon: string;
    hotelIcon: string;
    hotelIconBackground: string;
    danger: string;
    dangerBackground: string;
    star: string;
}

export interface ITheme {
    name: 'light' | 'dark' | 'automatic';
    dark: boolean;
    colors: IThemeColors;
}