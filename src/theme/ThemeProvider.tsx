import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { themes } from './Themes';
import { ITheme, IThemeColors } from './ThemeTypes';

const ThemeContext = createContext<ITheme>(themes.light);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemScheme = useColorScheme();

    const selectedTheme = 'automatic';

    const theme = useMemo(() => {
        if (selectedTheme === 'automatic') {
            return systemScheme === 'dark' ? themes.dark : themes.light;
        }
        return themes[selectedTheme];
    }, [selectedTheme, systemScheme]);

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export const useColors = (): IThemeColors => useTheme().colors;