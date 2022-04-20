import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#f5f5f5',
            dark: '#ababab',
            contrastText: '#000000'
        },
        secondary: {
            light: '#0099ff',
            main: '#1769aa',
            dark: '#105480'
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            light: '#4f5358',
            main: '#24292f',
            dark: '#191c20',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#',
            main: '#ffa533',
            dark: '#f57c00'
        },
    },
});

