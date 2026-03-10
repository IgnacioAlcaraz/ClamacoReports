// Tarjeta de KPI con valor actual, anterior y delta

function calcDelta(actual, anterior) {
  if (anterior === null || anterior === undefined) return null;
  const diff = actual - anterior;
  const pct = anterior !== 0 ? ((diff / anterior) * 100).toFixed(1) : null;
  return { diff, pct };
}

export default function KpiCard({ label, actual, anterior, unidad = '', tendenciaBuena = 'up' }) {
  const delta = calcDelta(actual, anterior);
  const fmt = (n) => (n === null || n === undefined ? '—' : n.toLocaleString('es-AR'));

  let deltaColor = '#6b7280';
  if (delta) {
    const buenaDireccion = tendenciaBuena === 'up' ? delta.diff > 0 : delta.diff < 0;
    const neutral = tendenciaBuena === 'neutral' || delta.diff === 0;
    deltaColor = neutral ? '#6b7280' : buenaDireccion ? '#16a34a' : '#dc2626';
  }

  const arrow = delta
    ? delta.diff > 0 ? '▲' : delta.diff < 0 ? '▼' : '—'
    : null;

  return (
    <div className="kpi-card">
      <p className="kpi-label">{label}</p>
      <p className="kpi-value">{fmt(actual)}<span className="kpi-unit">{unidad}</span></p>
      {delta && (
        <p className="kpi-delta" style={{ color: deltaColor }}>
          {arrow} {delta.diff > 0 ? '+' : ''}{fmt(delta.diff)}
          {delta.pct !== null && <span> ({delta.diff > 0 ? '+' : ''}{delta.pct}%)</span>}
          <span className="kpi-prev"> vs {fmt(anterior)}</span>
        </p>
      )}
    </div>
  );
}
