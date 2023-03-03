import {StatusBar} from 'expo-status-bar';
import {ThemeProvider} from 'styled-components/native';

import {FC, PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            text: {
                primaryDark: string;
                primaryMedium: string;
                primaryLight: string;
                primaryHover: string;
            };
            background: {
                primary: string;
                secondaryDark: string;
                secondaryMedium: string;
                secondaryLight: string;
                secondaryHover: string;
            };
        };
    }
}

const theme = {
    colors: {
        text: {
            primaryDark: '#272727',
            primaryMedium: '#525252',
            primaryLight: '#7D7D7D',
            primaryHover: '#313131',
        },
        background: {
            primary: 'white',
            secondaryDark: '#2464F1',
            secondaryMedium: '#5083F4',
            secondaryLight: '#7CA2F7',
            secondaryHover: '#3A78FF',
        },
    },
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: theme.colors.background.primary,
    },
});

const ThemeAndGlobalStylesProvider: FC<PropsWithChildren> = ({children}) => (
    <ThemeProvider theme={theme}>
        <StatusBar />
        <SafeAreaView />
        <View style={globalStyles.container}>{children}</View>
    </ThemeProvider>
);

export default ThemeAndGlobalStylesProvider;
