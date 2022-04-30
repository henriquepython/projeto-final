import { createTheme } from '@mui/material';
import { cyan, purple, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#5c6bc0',
      dark: '#26418f',
      light: '#8e99f3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#303f9f',
      dark: '#001970',
      light: '#666ad1',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#ffffff',
    }
  }

});