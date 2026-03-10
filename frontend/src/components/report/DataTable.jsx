// Tabla de datos genérica y reutilizable

export default function DataTable({ columns, rows, emptyText = 'Sin datos disponibles' }) {
  if (!rows || rows.length === 0) {
    return <p className="table-empty">{emptyText}</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="report-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ textAlign: col.align || 'left', width: col.width }}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key} style={{ textAlign: col.align || 'left' }}>
                  {col.render ? col.render(row[col.key], row) : (row[col.key] ?? '—')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
