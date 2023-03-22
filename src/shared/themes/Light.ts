import { createTheme } from '@mui/material'
import { blue, purple } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: blue[500],
            dark: blue[900],
            light: blue[200],
            contrastText: '#fff',
        },

        secondary: {
            main: purple[500],
            dark: purple[900],
            light: purple[200],
            contrastText: '#fff' ,
        },

        background: {
            paper: 'fff',
            default: '#e6e7eb'
        },

    }
});