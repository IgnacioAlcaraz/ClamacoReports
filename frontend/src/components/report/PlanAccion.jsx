// Plan de Acción en 3 horizontes: 72h, 30 días, 90 días

const HORIZONTE_CONFIG = {
  h72: { label: '⚡ 72 horas', color: '#fef2f2', border: '#fca5a5', badge: '#dc2626' },
  d30: { label: '📅 30 días',  color: '#fff7ed', border: '#fdba74', badge: '#ea580c' },
  d90: { label: '🎯 90 días',  color: '#f0fdf4', border: '#86efac', badge: '#16a34a' },
};

function HorizonteCard({ tipo, items }) {
  const cfg = HORIZONTE_CONFIG[tipo];
  if (!items || items.length === 0) return null;

  return (
    <div className="horizonte-card" style={{ borderColor: cfg.border, background: cfg.color }}>
      <div className="horizonte-header">
        <span className="horizonte-badge" style={{ background: cfg.badge }}>{cfg.label}</span>
      </div>
      <div className="horizonte-items">
        {items.map((item, i) => (
          <div key={i} className="horizonte-item">
            <p className="horizonte-accion">{item.accion}</p>
            <div className="horizonte-meta">
              <span><strong>Por qué:</strong> {item.porQue}</span>
              <span><strong>Área:</strong> {item.areaLider}</span>
              <span><strong>KPI:</strong> {item.kpi}</span>
              <span><strong>Riesgo mitigado:</strong> {item.riesgoMitigado}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlanAccion({ plan }) {
  if (!plan) return null;
  return (
    <div className="plan-accion">
      <HorizonteCard tipo="h72" items={plan.h72} />
      <HorizonteCard tipo="d30" items={plan.d30} />
      <HorizonteCard tipo="d90" items={plan.d90} />
    </div>
  );
}
