import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  dni: yup.string().matches(/^\d{8}$/, 'DNI debe tener 8 dígitos').required()
});

type Props = { onSearch: (dni: string) => void };

export default function SearchForm({ onSearch }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<{ dni: string }>({
    resolver: yupResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(({ dni }) => onSearch(dni))}>
      <TextField
        label="DNI"
        {...register('dni')}
        error={!!errors.dni}
        helperText={errors.dni?.message}
        inputProps={{ maxLength: 8 }}
        fullWidth
        autoFocus
        margin="normal"
      />
      <Button type="submit" variant="contained" fullWidth>Buscar</Button>
    </form>
  );
}
