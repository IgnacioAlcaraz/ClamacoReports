import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

// Gráfico de barras comparativo entre dos períodos
export default function BarComparison({ data, periodoActual, periodoAnterior, title }) {
  return (
    <div className="chart-wrapper">
      {title && <p className="chart-title">{title}</p>}
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ fontSize: 13, borderRadius: 8 }}
            formatter={(v) => v.toLocaleString('es-AR')}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {periodoAnterior && (
            <Bar dataKey="anterior" name={periodoAnterior} fill="#cbd5e1" radius={[4, 4, 0, 0]} />
          )}
          <Bar dataKey="actual" name={periodoActual} fill="#1a56db" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
