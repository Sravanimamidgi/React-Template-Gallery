import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '0.875rem',
      color: '#757575',
    },
    subtitle2: {
      fontSize: '0.875rem',
      color: '#9e9e9e',
    },
  }, 
  
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
         paddingTop: '40px',
          paddingBottom: '40px',
        },
      },
    },

  },
});

export default theme;
