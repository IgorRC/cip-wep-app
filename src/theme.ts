import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: { main: '#B52E2A' }, // azul oscuro
    secondary: { main: '#BEA062',contrastText: '#1D1916' },
    error: {
      main: '#E31E24'  // rojo más intenso para errores
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    }
  }
});
