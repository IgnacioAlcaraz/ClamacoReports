import { useState } from 'react';
import { analysisApi } from '../../api/client.js';
import { META } from '../../data/reportMeta.js';
import * as obras from '../../data/reportObras.js';
import * as comercial from '../../data/reportComercial.js';
import * as finanzas from '../../data/reportFinanzas.js';
import * as cx from '../../data/reportCx.js';

const PRIORIDAD_COLOR = {
  alta:  { bg: '#fef2f2', border: '#fca5a5', badge: '#dc2626', text: '#7f1d1d' },
  media: { bg: '#fffbeb', border: '#fcd34d', badge: '#d97706', text: '#78350f' },
  baja:  { bg: '#f0fdf4', border: '#86efac', badge: '#16a34a', text: '#14532d' },
};

const AREA_LABELS = {
  obras: 'Obras', comercial: 'Comercial', finanzas: 'Finanzas', cx: 'CX',
};

function AreaPill({ area }) {
  const colors = { obras: '#1a56db', comercial: '#059669', finanzas: '#7c3aed', cx: '#db2777' };
  return (
    <span style={{
      display: 'inline-block', padding: '1px 8px', borderRadius: 12,
      fontSize: '0.72rem', fontWeight: 700, marginRight: 4, marginBottom: 2,
      background: colors[area] || '#6b7280', color: '#fff',
    }}>
      {AREA_LABELS[area] || area}
    </span>
  );
}

function CuellosDeBottella({ items }) {
  return (
    <div>
      {items.map((c, i) => (
        <div key={i} style={{
          background: '#fff', border: '1.5px solid #fca5a5',
          borderLeft: '4px solid #dc2626', borderRadius: 8,
          padding: '12px 14px', marginBottom: 10,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
            <strong style={{ fontSize: '0.95rem', color: '#1a202c' }}>{c.titulo}</strong>
            <div style={{ flexShrink: 0 }}>
              {(c.areas_afectadas || []).map(a => <AreaPill key={a} area={a} />)}
            </div>
          </div>
          <p style={{ margin: '6px 0 0', fontSize: '0.87rem', color: '#4b5563', lineHeight: 1.55 }}>
            {c.descripcion}
          </p>
        </div>
      ))}
    </div>
  );
}

function CausasRaiz({ items }) {
  return (
    <div>
      {items.map((c, i) => (
        <div key={i} style={{
          background: '#fff', border: '1.5px solid #c4b5fd',
          borderLeft: '4px solid #7c3aed', borderRadius: 8,
          padding: '12px 14px', marginBottom: 10,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
            <strong style={{ fontSize: '0.95rem', color: '#1a202c' }}>{c.causa}</strong>
            <div style={{ flexShrink: 0 }}>
              {(c.areas || []).map(a => <AreaPill key={a} area={a} />)}
            </div>
          </div>
          <p style={{ margin: '6px 0 0', fontSize: '0.83rem', color: '#6b7280', fontStyle: 'italic', lineHeight: 1.5 }}>
            Evidencia: {c.evidencia}
          </p>
        </div>
      ))}
    </div>
  );
}

function Recomendaciones({ items }) {
  return (
    <div>
      {items.map((r, i) => {
        const pal = PRIORIDAD_COLOR[r.prioridad] || PRIORIDAD_COLOR.media;
        return (
          <div key={i} style={{
            background: pal.bg, border: `1.5px solid ${pal.border}`,
            borderRadius: 8, padding: '12px 14px', marginBottom: 10,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{
                background: pal.badge, color: '#fff', fontSize: '0.7rem',
                fontWeight: 700, padding: '2px 8px', borderRadius: 10, textTransform: 'uppercase',
              }}>
                {r.prioridad}
              </span>
              <span style={{ fontSize: '0.75rem', color: pal.text, fontWeight: 600 }}>
                Plazo: {r.plazo}
              </span>
            </div>
            <strong style={{ fontSize: '0.95rem', color: '#1a202c', display: 'block', marginBottom: 4 }}>
              {r.accion}
            </strong>
            <p style={{ margin: 0, fontSize: '0.84rem', color: '#4b5563', lineHeight: 1.5 }}>
              {r.impacto_esperado}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function Section({ title, count, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="section-block" style={{ marginBottom: 16 }}>
      <button className="section-header" onClick={() => setOpen(o => !o)}>
        <span className="section-title">{title} <span style={{ fontWeight: 400, color: '#6b7280', fontSize: '0.85em' }}>({count})</span></span>
        <span className="section-chevron">{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="section-content">{children}</div>}
    </div>
  );
}

export default function AnalisisIntegral() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const reportContext = {
        periodo: META.periodo,
        obras:     { semaforo: obras.semaforo,     hallazgos: obras.hallazgos },
        comercial: { semaforo: comercial.semaforo, hallazgos: comercial.hallazgos },
        finanzas:  { semaforo: finanzas.semaforo,  hallazgos: finanzas.hallazgos },
        cx:        { semaforo: cx.semaforo,        hallazgos: cx.hallazgos },
      };
      const data = await analysisApi.generate(reportContext);
      setResult(data.result);
    } catch (err) {
      setError(err.message || 'Error al generar el análisis.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1a56db 100%)',
        borderRadius: 12, padding: '20px 24px', marginBottom: 20, color: '#fff',
      }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, marginBottom: 4 }}>
          Análisis Integral con IA
        </h2>
        <p style={{ margin: 0, fontSize: '0.88rem', opacity: 0.85, lineHeight: 1.5 }}>
          Detecta cuellos de botella, causas raíz y genera recomendaciones cruzando los 4 reportes del período <strong>{META.periodo}</strong>.
        </p>
        <div style={{ marginTop: 14 }}>
          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              background: loading ? 'rgba(255,255,255,0.2)' : '#fff',
              color: loading ? 'rgba(255,255,255,0.7)' : '#1a56db',
              border: 'none', borderRadius: 8, padding: '9px 20px',
              fontWeight: 700, fontSize: '0.92rem', cursor: loading ? 'not-allowed' : 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all .2s',
            }}
          >
            {loading ? (
              <>
                <span style={{
                  width: 14, height: 14, border: '2px solid rgba(255,255,255,0.4)',
                  borderTopColor: '#fff', borderRadius: '50%',
                  animation: 'spin .7s linear infinite', display: 'inline-block',
                }} />
                Analizando los 4 reportes...
              </>
            ) : (
              <>Generar Análisis</>
            )}
          </button>
          {result && !loading && (
            <span style={{ marginLeft: 12, fontSize: '0.8rem', opacity: 0.8 }}>
              Análisis generado
            </span>
          )}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div style={{
          background: '#fef2f2', border: '1.5px solid #fca5a5', borderRadius: 8,
          padding: '12px 16px', marginBottom: 16, color: '#dc2626', fontSize: '0.9rem',
        }}>
          {error}
        </div>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{
              height: 80, borderRadius: 8, background: '#e5e7eb',
              animation: 'pulse 1.5s ease-in-out infinite',
              opacity: 1 - i * 0.15,
            }} />
          ))}
          <style>{`@keyframes pulse { 0%,100%{opacity:.6} 50%{opacity:1} }`}</style>
        </div>
      )}

      {/* Resultado */}
      {result && !loading && (
        <div>
          {/* Resumen ejecutivo */}
          {result.resumen_ejecutivo && (
            <div style={{
              background: '#eef2ff', border: '1.5px solid #a5b4fc',
              borderLeft: '4px solid #1a56db', borderRadius: 8,
              padding: '14px 16px', marginBottom: 20,
            }}>
              <p style={{ margin: 0, fontSize: '0.93rem', color: '#1e3a8a', lineHeight: 1.6, fontWeight: 500 }}>
                {result.resumen_ejecutivo}
              </p>
            </div>
          )}

          <Section title="Cuellos de Botella" count={(result.cuellos_de_botella || []).length}>
            {(result.cuellos_de_botella || []).length > 0
              ? <CuellosDeBottella items={result.cuellos_de_botella} />
              : <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>No se identificaron cuellos de botella.</p>
            }
          </Section>

          <Section title="Causas Raíz" count={(result.causas_raiz || []).length}>
            {(result.causas_raiz || []).length > 0
              ? <CausasRaiz items={result.causas_raiz} />
              : <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>No se identificaron causas raíz.</p>
            }
          </Section>

          <Section title="Recomendaciones" count={(result.recomendaciones || []).length}>
            {(result.recomendaciones || []).length > 0
              ? <Recomendaciones items={result.recomendaciones} />
              : <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>No se generaron recomendaciones.</p>
            }
          </Section>
        </div>
      )}

      {/* Estado vacío */}
      {!result && !loading && !error && (
        <div style={{
          textAlign: 'center', padding: '40px 20px', color: '#9ca3af',
        }}>
          <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🔍</div>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            Presioná <strong>Generar Análisis</strong> para que la IA cruce los 4 reportes<br />
            y detecte patrones, causas y recomendaciones.
          </p>
        </div>
      )}
    </div>
  );
}
