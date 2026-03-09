const BASE = '/api';

async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    credentials: 'include',
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
}

export const authApi = {
  login: (username, password) =>
    apiFetch('/auth/login', { method: 'POST', body: JSON.stringify({ username, password }) }),
  logout: () => apiFetch('/auth/logout', { method: 'POST' }),
  me: () => apiFetch('/auth/me'),
};

export const chatApi = {
  send: (area, message, sessionId) =>
    apiFetch('/chat/send', {
      method: 'POST',
      body: JSON.stringify({ area, message, sessionId }),
    }),
};
