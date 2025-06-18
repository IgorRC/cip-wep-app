import { useState } from 'react';
import { Container, CircularProgress, Alert } from '@mui/material';
import SearchForm from '../components/SearchForm';
import { fetchPersona } from '../api/padronApi';
import { enqueueSnackbar } from 'notistack';
import type { PersonaDTO } from '../api/padronApi';
import StatusCard from '../components/StatusCard';
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PersonaDTO | null>(null);
  const [error, setError] = useState('');

  const handleSearch = async (dni: string) => {
    setLoading(true);
    setError('');
    setData(null);
    try {
      const res = await fetchPersona(dni);
      setData(res);
      enqueueSnackbar('Si esta en el padron', { variant: 'success' });
    } catch (err: any) {
      if (err.response?.status === 404) setError('No esta en el Padron');
      else setError('Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <SearchForm onSearch={handleSearch} />
      {loading && <CircularProgress sx={{ mt: 2 }} />}
      {error && <Alert severity="warning" sx={{ mt: 2 }}>{error}</Alert>}
      {data && <StatusCard found={true} data={data} />}
    </Container>
  );
}
