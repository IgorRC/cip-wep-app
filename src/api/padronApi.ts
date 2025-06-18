import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 8000
});

export type PersonaDTO = {
  dni: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  nombres: string;
  departamento: string;
  capitulo: string;
};

export async function fetchPersona(dni: string) {
  const { data } = await api.get<PersonaDTO>(`/v1/padron/cip/${dni}`);
  return data;
}

export default api;