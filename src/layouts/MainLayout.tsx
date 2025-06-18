import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MainLayout({ children }: { children: ReactNode }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* Menú de hamburguesa */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Acerca de</MenuItem>
          </Menu>

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
