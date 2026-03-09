import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authApi } from '../api/client.js';
import { setEncryptionKey, clearEncryptionKey } from '../api/encryption.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verifica sesión al cargar la app.
  // Nota: /me no devuelve encKey (solo el login lo hace), así que si la sesión
  // persiste por cookie, el usuario deberá volver a hacer login para encriptar.
  // En producción esto es correcto: la clave está en memoria, no persiste.
  useEffect(() => {
    authApi
      .me()
      .then((data) => setUser({ username: data.username, needsRelogin: true }))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (username, password) => {
    const data = await authApi.login(username, password);
    // Carga la clave en memoria — nunca se escribe en disco ni localStorage
    await setEncryptionKey(data.encKey);
    setUser({ username: data.username, needsRelogin: false });
  }, []);

  const logout = useCallback(async () => {
    clearEncryptionKey();
    await authApi.logout();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
