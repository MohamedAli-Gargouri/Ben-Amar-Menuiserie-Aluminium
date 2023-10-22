import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#558B2F',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          '&:hover': {
            backgroundColor: '#558B2F', // Change to your desired hover color
          },
        },
      },
    },
  });
  
  export default theme;

  