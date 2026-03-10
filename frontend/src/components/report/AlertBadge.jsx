// Semáforo de color y badge de urgencia reutilizable

const COLOR_MAP = {
  green:  { dot: '#22c55e', bg: '#f0fdf4', text: '#15803d', label: '🟢' },
  yellow: { dot: '#eab308', bg: '#fefce8', text: '#a16207', label: '🟡' },
  orange: { dot: '#f97316', bg: '#fff7ed', text: '#c2410c', label: '🟠' },
  red:    { dot: '#ef4444', bg: '#fef2f2', text: '#b91c1c', label: '🔴' },
};

const URGENCY_MAP = {
  critica: { bg: '#fef2f2', text: '#b91c1c', label: 'Crítica' },
  alta:    { bg: '#fff7ed', text: '#c2410c', label: 'Alta' },
  media:   { bg: '#fefce8', text: '#a16207', label: 'Media' },
  baja:    { bg: '#f0fdf4', text: '#15803d', label: 'Baja' },
};

export function SemaforoDot({ color }) {
  const c = COLOR_MAP[color] || COLOR_MAP.yellow;
  return (
    <span
      style={{
        display: 'inline-block',
        width: 12, height: 12,
        borderRadius: '50%',
        background: c.dot,
        flexShrink: 0,
      }}
    />
  );
}

export function EstadoBadge({ color, estado }) {
  const c = COLOR_MAP[color] || COLOR_MAP.yellow;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      background: c.bg, color: c.text,
      padding: '3px 8px', borderRadius: 99,
      fontSize: '0.78rem', fontWeight: 600,
    }}>
      <SemaforoDot color={color} />
      {estado}
    </span>
  );
}

export function UrgenciaBadge({ urgencia }) {
  const u = URGENCY_MAP[urgencia] || URGENCY_MAP.media;
  return (
    <span style={{
      display: 'inline-block',
      background: u.bg, color: u.text,
      padding: '2px 8px', borderRadius: 99,
      fontSize: '0.75rem', fontWeight: 700,
    }}>
      {u.label}
    </span>
  );
}

export function RiesgoBadge({ nivel }) {
  const map = {
    alta:  { bg: '#fef2f2', text: '#b91c1c' },
    media: { bg: '#fff7ed', text: '#c2410c' },
    baja:  { bg: '#f0fdf4', text: '#15803d' },
  };
  const s = map[nivel] || map.media;
  return (
    <span style={{
      display: 'inline-block',
      background: s.bg, color: s.text,
      padding: '2px 8px', borderRadius: 99,
      fontSize: '0.75rem', fontWeight: 700,
      textTransform: 'capitalize',
    }}>
      {nivel}
    </span>
  );
}
