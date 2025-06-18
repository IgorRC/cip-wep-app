import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: { main: '#0d47a1' }, // azul oscuro
    secondary: { main: '#ff9100' }
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
