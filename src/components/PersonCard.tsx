import { Card, CardContent, Typography, Chip } from '@mui/material';
import type { PersonaDTO } from '../api/padronApi';

export default function PersonCard({ p }: { p: PersonaDTO }) {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography variant="h6">{p.nombres} {p.apellidoPaterno} {p.apellidoMaterno}</Typography>
        <Typography>{p.departamento}</Typography>
        <Chip label={p.capitulo} sx={{ mt: 1 }} />
      </CardContent>
    </Card>
  );
}
