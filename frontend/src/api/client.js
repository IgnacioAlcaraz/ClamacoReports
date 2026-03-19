import { encryptMessage } from './encryption.js';

const BASE = (import.meta.env.VITE_API_URL || '') + '/api';
const TIMEOUT_MS = 95000; // 95s — mayor que el timeout del backend (90s)

async function apiFetch(path, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(`${BASE}${path}`, {
      ...options,
      credentials: 'include',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw Object.assign(new Error(data.error || 'Error desconocido'), { status: res.status });
    }

    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('La solicitud tardó demasiado. Intenta de nuevo.');
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

export const authApi = {
  login: (username, password) =>
    apiFetch('/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) }),
  logout: () => apiFetch('/auth/logout', { method: 'POST' }),
  me: () => apiFetch('/auth/me'),
};

export const chatApi = {
  send: async (area, message, sessionId) => {
    const encryptedMessage = await encryptMessage(message);
    return apiFetch('/chat/send', {
      method: 'POST',
      body: JSON.stringify({ area, encryptedMessage, sessionId }),
    });
  },
};
