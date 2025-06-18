import { useEffect } from 'react';
import api from '../api/padronApi'; // ajusta el path si tu archivo axios está en otro directorio

export default function KeepAlive() {
  useEffect(() => {
    const interval = setInterval(() => {
      api.get('/ping')
        .then((res) => console.log(`[${new Date().toLocaleTimeString()}] KeepAlive OK:`, res.status))
        .catch((err) => console.warn(`[${new Date().toLocaleTimeString()}] KeepAlive FAIL:`, err.message));
    }, 10 * 60 * 1000); // cada 10 minutos

    return () => clearInterval(interval);
  }, []);

  return null;
}
