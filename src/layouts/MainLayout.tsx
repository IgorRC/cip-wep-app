import type { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../assets/logo_cip.png'; // reemplaza con tu logo

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box component="img" src={logo} alt="Logo Gnius" sx={{ height: 40, mr: 2 }} />
          <Typography variant="h6" component="div">
            Consulta Padrón CIP CD Huánuco
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 2 }}>
        {children}
      </Box>
    </>
  );
}
