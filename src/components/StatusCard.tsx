import { Card, CardContent, Chip, Typography } from '@mui/material';
import type { PersonaDTO } from '../api/padronApi';
import VoteBanner from './VoteBanner';

type Props =
  | { found: true; data: PersonaDTO }
  | { found: false; data?: undefined };

export default function StatusCard({ found, data }: Props) {
  return (
    <Card
      sx={{
        mt: 2,
        borderLeft: 4,
        borderColor: found ? 'success.main' : 'error.main'
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {found
            ? '✔ Estás habilitado para votar'
            : '✖ DNI no encontrado en el padrón'}
        </Typography>

        {found && (
          <>
            <Typography variant="h6">{data.nombres} {data.apellidoPaterno} {data.apellidoMaterno}</Typography>
            <Typography>{data.departamento}</Typography>
            <Chip label={data.capitulo} sx={{ mt: 1 }} />
            <VoteBanner />
          </>
        )}
      </CardContent>
    </Card>
  );
}
