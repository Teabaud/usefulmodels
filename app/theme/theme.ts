import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey.A100,
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3.5rem',
    },
    h3: {
      fontSize: '3rem',
    },
    h4: {
      fontSize: '2.5rem',
    },
    h5: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1.5rem',
    },
  },
});

export default theme;
