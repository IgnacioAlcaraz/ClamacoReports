import { RiesgoBadge } from './AlertBadge.jsx';

export default function RiesgoTable({ riesgos }) {
  if (!riesgos || riesgos.length === 0) {
    return <p className="table-empty">Sin riesgos registrados.</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="report-table">
        <thead>
          <tr>
            <th>Riesgo</th>
            <th style={{ textAlign: 'center' }}>Probabilidad</th>
            <th style={{ textAlign: 'center' }}>Impacto</th>
            <th>Área responsable</th>
            <th>Consecuencia</th>
          </tr>
        </thead>
        <tbody>
          {riesgos.map((r, i) => (
            <tr key={i}>
              <td>{r.riesgo}</td>
              <td style={{ textAlign: 'center' }}><RiesgoBadge nivel={r.probabilidad} /></td>
              <td style={{ textAlign: 'center' }}><RiesgoBadge nivel={r.impacto} /></td>
              <td>{r.area}</td>
              <td>{r.consecuencia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
