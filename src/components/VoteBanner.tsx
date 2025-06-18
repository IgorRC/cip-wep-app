// src/components/VoteBanner.tsx

import { Box, Typography } from '@mui/material';
import logoLista1 from '../assets/GENERAL -ACTUALIZADO.png';

export default function VoteBanner() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 2,
        p: 2,
        bgcolor: 'secondary.main',
        borderRadius: 1,
        boxShadow: 1
      }}
    >
      <Typography
        variant="h6"
        color="secondary.contrastText"
        sx={{ fontWeight: 'bold', mb: 1 }}
      >
        ¡Vota por la Lista 1!
      </Typography>
      <Box
        component="img"
        src={logoLista1}
        alt="Logo Lista 1"
        sx={{
          width: 330,
          height: 350,
          objectFit: 'contain'
        }}
      />
    </Box>
  );
}
