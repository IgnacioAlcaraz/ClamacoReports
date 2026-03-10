import { useState } from 'react';

// Sección colapsable con título y contenido
export default function SectionBlock({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="section-block">
      <button className="section-header" onClick={() => setOpen((o) => !o)}>
        <span className="section-title">{title}</span>
        <span className="section-chevron">{open ? '▲' : '▼'}</span>
      </button>
      {open && <div className="section-content">{children}</div>}
    </div>
  );
}
