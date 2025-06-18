import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  AppBar, Toolbar, IconButton, Drawer,
  List, ListItem, ListItemIcon, ListItemText, Box
} from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

export default function NavDrawer({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = (state: boolean) => () => setOpen(state);

  const items = [
    { text: 'Inicio', icon: <HomeIcon /> },
    { text: 'Acerca de', icon: <InfoIcon /> },
    // agrega más rutas aquí
  ];

  const list = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggle(false)}>
      <List>
        {items.map((item) => (
            <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href="#">
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggle(true)}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Aquí puedes dejar tu logo y título */}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggle(false)}>
        {list}
      </Drawer>
      <Box component="main" sx={{ p: 2 }}>
        {children}
      </Box>
    </>
  );
}
