import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#f5f5f5',
            dark: '#ababab',
        },
        // secondary: {
        //     main: 'yellow',
        // },
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            light: '#4f5358',
            main: '#24292f',
            dark: '#191c20'
        },
        // secondary: {
        //     main: 'blue',
        // },
    },
});

