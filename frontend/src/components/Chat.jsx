import { useState, useRef, useEffect, useCallback } from 'react';
import { chatApi } from '../api/client.js';
import { useAuth } from '../context/AuthContext.jsx';
import MessageBubble from './MessageBubble.jsx';

const AREAS = [
  { value: 'obras', label: 'Obras' },
  { value: 'comercial', label: 'Comercial' },
  { value: 'finanzas', label: 'Finanzas' },
  { value: 'cx', label: 'CX' },
];

// Genera un sessionId criptográficamente seguro para mantener contexto en n8n
function generateSessionId() {
  return window.crypto.randomUUID().replace(/-/g, '');
}

// Inicializa sessionIds y mensajes vacíos por área
function initPerArea() {
  return Object.fromEntries(AREAS.map((a) => [a.value, []]));
}
function initSessionIds() {
  return Object.fromEntries(AREAS.map((a) => [a.value, generateSessionId()]));
}

export default function Chat({ fixedArea } = {}) {
  const { user, logout } = useAuth();
  const [area, setArea] = useState(fixedArea ?? AREAS[0].value);
  const [messagesMap, setMessagesMap] = useState(initPerArea);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const sessionIds = useRef(initSessionIds());
  const bottomRef = useRef(null);
  const textareaRef = useRef(null);

  const messages = messagesMap[area] ?? [];

  const setMessages = (updater) => {
    setMessagesMap((prev) => ({
      ...prev,
      [area]: typeof updater === 'function' ? updater(prev[area] ?? []) : updater,
    }));
  };

  // Sincroniza área cuando cambia fixedArea (sin borrar historial)
  useEffect(() => {
    if (fixedArea && fixedArea !== area) {
      setArea(fixedArea);
      setError('');
    }
  }, [fixedArea]);

  // Si la sesión se recuperó por cookie pero la clave de encriptación no está en memoria,
  // forzar re-login para obtenerla (la clave nunca persiste entre recargas)
  if (user?.needsRelogin) {
    return (
      <div className="relogin-notice">
        <p>Tu sesión sigue activa, pero la clave de seguridad ya no está en memoria.</p>
        <p>Por favor, vuelve a iniciar sesión para continuar.</p>
        <button className="btn-primary" onClick={logout}>Ir al login</button>
      </div>
    );
  }

  // Cuando cambia el área (selector libre), mantiene historial pero cambia área activa
  function handleAreaChange(e) {
    setArea(e.target.value);
    setError('');
  }

  // Scroll al último mensaje
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || sending) return;

    setInput('');
    setError('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setSending(true);

    try {
      const { reply } = await chatApi.send(area, text, sessionIds.current[area]);
      setMessages((prev) => [...prev, { role: 'bot', content: reply }]);
    } catch (err) {
      setError(err.message || 'Error al enviar el mensaje');
      // Quitar el mensaje del usuario si hubo error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setSending(false);
      textareaRef.current?.focus();
    }
  }, [input, area, sending]);

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  const selectedArea = AREAS.find((a) => a.value === area);

  return (
    <div className="chat-container">
      {/* Selector de área — solo si no está fijada */}
      {!fixedArea && (
        <div className="area-bar">
          <label htmlFor="area-select" className="area-label">Área:</label>
          <select
            id="area-select"
            value={area}
            onChange={handleAreaChange}
            className="area-select"
            disabled={sending}
          >
            {AREAS.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
          <span className="area-badge">{selectedArea?.label}</span>
        </div>
      )}

      {/* Mensajes */}
      <div className="messages-list" role="log" aria-live="polite">
        {messages.length === 0 && (
          <div className="empty-state">
            <p>Escribí tu mensaje para empezar.</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} />
        ))}

        {sending && (
          <div className="bubble-row bubble-row--bot">
            <div className="avatar avatar--bot" aria-hidden="true">IA</div>
            <div className="bubble bubble--bot bubble--typing" aria-label="El asistente está escribiendo">
              <span /><span /><span />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Error */}
      {error && <p className="chat-error" role="alert">{error}</p>}

      {/* Input */}
      <div className="input-bar">
        <textarea
          ref={textareaRef}
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={`Escribe tu mensaje para ${selectedArea?.label}…`}
          rows={1}
          disabled={sending}
          maxLength={2000}
          aria-label="Mensaje"
        />
        <button
          className="btn-send"
          onClick={sendMessage}
          disabled={sending || !input.trim()}
          aria-label="Enviar mensaje"
        >
          {sending ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
