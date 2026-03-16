import { useState } from 'react';
import AppLayout from '../components/AppLayout.jsx';
import { META } from '../data/reportMeta.js';

// Componentes
import SectionBlock from '../components/report/SectionBlock.jsx';
import KpiCard from '../components/report/KpiCard.jsx';
import DataTable from '../components/report/DataTable.jsx';
import BarComparison from '../components/report/BarComparison.jsx';
import PlanAccion from '../components/report/PlanAccion.jsx';
import RiesgoTable from '../components/report/RiesgoTable.jsx';
import { EstadoBadge, UrgenciaBadge } from '../components/report/AlertBadge.jsx';

// Datos por área
import * as obras from '../data/reportObras.js';
import * as comercial from '../data/reportComercial.js';
import * as finanzas from '../data/reportFinanzas.js';
import * as cx from '../data/reportCx.js';

const AREAS = [
  { key: 'obras',     label: 'Obras',     data: obras },
  { key: 'comercial', label: 'Comercial', data: comercial },
  { key: 'finanzas',  label: 'Finanzas',  data: finanzas },
  { key: 'cx',        label: 'CX',        data: cx },
  { key: 'mapa',      label: 'Mapa de Incidencias', data: null },
];

// ── Vista de Obras ────────────────────────────────────────────────────────────
function ObrasReport({ d }) {
  const backlogChart = [
    { name: 'Total ítems', anterior: 1621, actual: 1611 },
    { name: 'Cerrados',    anterior: 0,    actual: 10 },
    { name: 'Nuevos ing.', anterior: 0,    actual: 0 },
  ];

  return (
    <>
      <SectionBlock title="📋 Hallazgos principales">
        <ol className="hallazgos-list">
          {d.hallazgos.map((h, i) => <li key={i}>{h}</li>)}
        </ol>
      </SectionBlock>

      <SectionBlock title="🚦 Semáforo ejecutivo de sub-áreas">
        <DataTable
          columns={[
            { key: 'subarea',  label: 'Sub-área', width: '140px' },
            { key: 'estado',   label: 'Estado',   render: (v, row) => <EstadoBadge color={row.color} estado={v} /> },
            { key: 'metrica',  label: 'Métrica que justifica' },
            { key: 'umbral',   label: 'Umbral', width: '220px' },
          ]}
          rows={d.semaforo}
        />
      </SectionBlock>

      <SectionBlock title="📐 Arquitectura — KPIs del mes">
        <div className="kpi-grid">
          {d.kpisArquitectura.map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
        <BarComparison
          data={backlogChart}
          periodoActual={META.periodo}
          periodoAnterior={META.periodoAnterior}
          title="Evolución del backlog de arquitectura"
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Obras estancadas (Top 6)">
        <DataTable
          columns={[
            { key: 'obra',        label: 'Obra' },
            { key: 'avance',      label: 'Avance %', align: 'center', render: (v) => (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span style={{ width: 60, height: 8, background: '#e5e7eb', borderRadius: 4, display: 'inline-block', overflow: 'hidden' }}>
                  <span style={{ display: 'block', height: '100%', width: `${v}%`, background: v < 10 ? '#ef4444' : '#f97316', borderRadius: 4 }} />
                </span>
                {v}%
              </span>
            )},
            { key: 'pendientes',  label: 'Pendientes', align: 'center' },
            { key: 'score',       label: 'Score urgencia', align: 'center', render: (v) =>
              v ? <span style={{ fontWeight: 700, color: '#dc2626' }}>{v}</span> : '—'
            },
          ]}
          rows={d.obrasEstancadas}
        />
      </SectionBlock>

      <SectionBlock title="🔒 Obras >80% de avance bloqueadas por dependencias" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',        label: 'Obra' },
            { key: 'avance',      label: 'Avance %', align: 'center', render: (v) => `${v}%` },
            { key: 'pendientes',  label: 'Pendientes', align: 'center' },
            { key: 'dependencia', label: 'Tipo de dependencia' },
          ]}
          rows={d.obrasBlockeadas}
        />
      </SectionBlock>

      <SectionBlock title="📊 Portfolio general" defaultOpen={false}>
        <div className="kpi-grid">
          {d.portfolio.filter(p => p.cantidad !== null).map((p, i) => (
            <div key={i} className="kpi-card">
              <p className="kpi-label">{p.estado}</p>
              <p className="kpi-value">{p.cantidad?.toLocaleString('es-AR') ?? '—'}</p>
              <p className="kpi-prev" style={{ marginTop: 4 }}>{p.descripcion}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="🏆 Top 5 obras por volumen de unidades" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',     label: 'Obra' },
            { key: 'unidades', label: 'Unidades', align: 'center' },
            { key: 'cocheras', label: 'Cocheras', align: 'center' },
            { key: 'entrega',  label: 'Fecha entrega', align: 'center' },
            { key: 'estado',   label: 'Estado' },
          ]}
          rows={d.topObras}
        />
      </SectionBlock>

      <SectionBlock title="📅 Entregas vencidas o próximas (<6 meses)">
        <DataTable
          columns={[
            { key: 'obra',    label: 'Obra' },
            { key: 'entrega', label: 'Fecha entrega', align: 'center' },
            { key: 'estado',  label: 'Estado' },
            { key: 'alerta',  label: 'Alerta', align: 'center', render: (v) =>
              <UrgenciaBadge urgencia={v === 'vencida' ? 'critica' : 'alta'} />
            },
          ]}
          rows={d.obrasEntregaProxima}
        />
      </SectionBlock>

      <SectionBlock title="📉 Descalce avance vs. porcentaje vendido">
        <DataTable
          columns={[
            { key: 'obra',     label: 'Obra' },
            { key: 'avance',   label: 'Avance %', align: 'center', render: (v) => `${v}%` },
            { key: 'vendido',  label: 'Vendido %', align: 'center', render: (v) => `${v}%` },
            { key: 'descalce', label: 'Descalce %', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: Math.abs(v) > 20 ? '#dc2626' : v < 0 ? '#ea580c' : '#16a34a' }}>
                {v > 0 ? '+' : ''}{v}%
              </span>
            )},
            { key: 'tipo', label: 'Tipo de riesgo', render: (v) => {
              const map = { comercial: ['#fef2f2','#b91c1c'], operativo: ['#fff7ed','#c2410c'], inconsistencia: ['#f3f4f6','#6b7280'] };
              const [bg, color] = map[v] || map.inconsistencia;
              return <span style={{ background: bg, color, padding: '2px 8px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 700, textTransform: 'capitalize' }}>{v}</span>;
            }},
          ]}
          rows={d.descalces}
        />
      </SectionBlock>

      <SectionBlock title="🏛️ Gestoría y trámites — KPIs">
        <div className="kpi-grid">
          {d.kpisGestoria.map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="🚨 Vencimientos urgentes">
        <DataTable
          columns={[
            { key: 'obra',        label: 'Obra' },
            { key: 'paso',        label: 'Paso' },
            { key: 'fecha',       label: 'Fecha vencimiento', align: 'center' },
            { key: 'responsable', label: 'Responsable' },
            { key: 'urgencia',    label: 'Urgencia', align: 'center', render: (v) => <UrgenciaBadge urgencia={v} /> },
          ]}
          rows={d.vencimientos}
        />
      </SectionBlock>

      <SectionBlock title="⏳ Obras con atraso >90 días" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',        label: 'Obra' },
            { key: 'paso',        label: 'Paso bloqueado' },
            { key: 'dias',        label: 'Días de atraso', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v > 150 ? '#dc2626' : '#ea580c' }}>{v}</span>
            )},
            { key: 'responsable', label: 'Responsable' },
          ]}
          rows={d.obrasAtraso90}
        />
      </SectionBlock>

      <SectionBlock title="👤 Distribución de bloqueos por responsable" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'responsable', label: 'Responsable' },
            { key: 'cantidad',    label: 'Obras bloqueadas', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 3 ? '#dc2626' : '#374151' }}>{v}</span>
            )},
            { key: 'obras',       label: 'Detalle de obras' },
          ]}
          rows={d.bloqueosPorResponsable}
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Matriz de riesgos" defaultOpen={false}>
        <RiesgoTable riesgos={d.riesgos} />
      </SectionBlock>

      <SectionBlock title="🗂️ Plan de acción">
        <PlanAccion plan={d.planAccion} />
      </SectionBlock>
    </>
  );
}

// ── Vista de Comercial ────────────────────────────────────────────────────────
function ComercialReport({ d }) {
  const brechaChart = (d.brechaAvance || []).slice(0, 3).map(r => ({
    name: r.obra.length > 12 ? r.obra.slice(0, 12) + '…' : r.obra,
    anterior: r.vendido,
    actual: r.avance,
  }));

  return (
    <>
      <SectionBlock title="📋 Hallazgos principales">
        <ol className="hallazgos-list">
          {d.hallazgos.map((h, i) => <li key={i}>{h}</li>)}
        </ol>
      </SectionBlock>

      <SectionBlock title="🚦 Semáforo ejecutivo de sub-áreas">
        <DataTable
          columns={[
            { key: 'subarea', label: 'Sub-área', width: '160px' },
            { key: 'estado',  label: 'Estado',   render: (v, row) => <EstadoBadge color={row.color} estado={v} /> },
            { key: 'metrica', label: 'Métrica que justifica' },
            { key: 'umbral',  label: 'Umbral', width: '200px' },
          ]}
          rows={d.semaforo}
        />
      </SectionBlock>

      <SectionBlock title="📉 Brecha avance vs. ventas por obra">
        <DataTable
          columns={[
            { key: 'obra',    label: 'Obra' },
            { key: 'avance',  label: 'Avance %',  align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'vendido', label: 'Vendido %',  align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'brecha',  label: 'Brecha %',   align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v > 30 ? '#dc2626' : v > 10 ? '#ea580c' : '#16a34a' }}>
                {v > 0 ? '+' : ''}{v}%
              </span>
            )},
            { key: 'tipo', label: 'Tipo de riesgo' },
          ]}
          rows={d.brechaAvance || []}
        />
        {brechaChart.length > 0 && (
          <BarComparison
            data={brechaChart}
            periodoActual="Avance %"
            periodoAnterior="Vendido %"
            title="Avance físico vs. % vendido (top 3 brechas)"
          />
        )}
      </SectionBlock>

      <SectionBlock title="🔴 Stock inmovilizado" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',      label: 'Obra' },
            { key: 'avance',    label: 'Avance %', align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'vendido',   label: 'Vendido %', align: 'center', render: (v) => `${v}%` },
            { key: 'hipotesis', label: 'Hipótesis de causa' },
          ]}
          rows={d.stockInmovilizado || []}
        />
      </SectionBlock>

      <SectionBlock title="💪 Motores de solvencia" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',    label: 'Obra' },
            { key: 'avance',  label: 'Avance %',  align: 'center', render: (v) => `${v}%` },
            { key: 'vendido', label: 'Vendido %',  align: 'center', render: (v) => `${v}%` },
            { key: 'rol',     label: 'Rol en cartera' },
          ]}
          rows={d.motoresSolvencia || []}
        />
      </SectionBlock>

      <SectionBlock title="🔄 Embudo comercial">
        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-label">Boletos totales</p>
            <p className="kpi-value">{d.embudo?.boletos?.toLocaleString('es-AR') ?? '—'}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Reservas totales</p>
            <p className="kpi-value">{d.embudo?.reservas?.toLocaleString('es-AR') ?? '—'}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Ratio conversión</p>
            <p className="kpi-value" style={{ color: '#16a34a' }}>{d.embudo?.ratio}x</p>
            <p className="kpi-prev">umbral &gt; 0.85x</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Aging reservas &gt;60d</p>
            <p className="kpi-value" style={{ color: '#16a34a' }}>{d.embudo?.agingMas60 ?? '—'}</p>
            <p className="kpi-prev">umbral &lt; 3%</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="🏢 Canal por inmobiliaria" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'inmobiliaria',  label: 'Inmobiliaria' },
            { key: 'boletos',       label: 'Boletos',   align: 'center' },
            { key: 'reservas',      label: 'Reservas',  align: 'center', render: (v) => v ?? '—' },
            { key: 'ratio',         label: 'Ratio conv.', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v < 50 ? '#dc2626' : v > 100 ? '#16a34a' : '#374151' }}>
                {v}%
              </span>
            )},
            { key: 'clasificacion', label: 'Clasificación' },
          ]}
          rows={d.canalInmobiliaria || []}
        />
      </SectionBlock>

      <SectionBlock title="✍️ Firma Boleto — KPIs de satisfacción">
        <div className="kpi-grid">
          {(d.kpisFirmaBoleto || []).map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="📧 Campañas Emblue">
        <DataTable
          columns={[
            { key: 'campana',       label: 'Campaña' },
            { key: 'openRate',      label: 'Open Rate', align: 'center', render: (v) => v != null ? (
              <span style={{ fontWeight: 700, color: v >= 15 ? '#16a34a' : '#dc2626' }}>{v}%</span>
            ) : '—' },
            { key: 'ctr',           label: 'CTR',       align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'ctor',          label: 'CTOR',      align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'bounceRate',    label: 'Bounce',    align: 'center', render: (v) => v != null ? (
              <span style={{ fontWeight: 700, color: v > 2 ? '#dc2626' : '#16a34a' }}>{v}%</span>
            ) : '—' },
            { key: 'clasificacion', label: 'Estado', render: (v) => {
              const color = v === 'Destacada' ? '#16a34a' : v === 'Problema grave' ? '#dc2626' : '#d97706';
              return <span style={{ fontWeight: 700, color }}>{v}</span>;
            }},
          ]}
          rows={d.emblue || []}
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Matriz de riesgos" defaultOpen={false}>
        <RiesgoTable riesgos={d.riesgos} />
      </SectionBlock>

      <SectionBlock title="🗂️ Plan de acción">
        <PlanAccion plan={d.planAccion} />
      </SectionBlock>
    </>
  );
}

// ── Vista de Finanzas ─────────────────────────────────────────────────────────
function FinanzasReport({ d }) {
  const cobranzaChart = [
    { name: 'Feb 2026', anterior: d.cobranzas?.promHistorico ?? 0, actual: d.cobranzas?.feb2026 ?? 0 },
    { name: 'Mar 2026', anterior: d.cobranzas?.promHistorico ?? 0, actual: d.cobranzas?.mar2026 ?? 0 },
  ];

  const fmt = (n) => n != null ? `$${n.toLocaleString('es-AR')}` : '—';

  return (
    <>
      <SectionBlock title="📋 Hallazgos principales">
        <ol className="hallazgos-list">
          {d.hallazgos.map((h, i) => <li key={i}>{h}</li>)}
        </ol>
      </SectionBlock>

      <SectionBlock title="🚦 Semáforo ejecutivo de sub-áreas">
        <DataTable
          columns={[
            { key: 'subarea', label: 'Sub-área', width: '160px' },
            { key: 'estado',  label: 'Estado',   render: (v, row) => <EstadoBadge color={row.color} estado={v} /> },
            { key: 'metrica', label: 'Métrica que justifica' },
            { key: 'umbral',  label: 'Umbral', width: '240px' },
          ]}
          rows={d.semaforo}
        />
      </SectionBlock>

      {/* Factibilidades */}
      <SectionBlock title="📋 Factibilidades — Estado general">
        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-label">Obras vigentes</p>
            <p className="kpi-value" style={{ color: '#16a34a' }}>{d.factibilidades?.vigentes}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Obras vencidas</p>
            <p className="kpi-value" style={{ color: '#dc2626' }}>{d.factibilidades?.vencidas}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Sin fecha asignada</p>
            <p className="kpi-value" style={{ color: '#ea580c' }}>{d.factibilidades?.sinFecha}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Vencen &lt;30 días</p>
            <p className="kpi-value" style={{ color: '#dc2626' }}>{d.factibilidades?.vencenMenos30}</p>
            <p className="kpi-prev">Acción urgente</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="🚨 Vencimientos inminentes (&lt;30 días)">
        <DataTable
          columns={[
            { key: 'obra',             label: 'Obra' },
            { key: 'servicio',         label: 'Servicio', align: 'center' },
            { key: 'contratista',      label: 'Contratista', align: 'center' },
            { key: 'fechaVencimiento', label: 'Vence', align: 'center' },
            { key: 'riesgo',           label: 'Riesgo si no se renueva' },
          ]}
          rows={d.vencimientosInminentes || []}
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Falsos vigentes" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',         label: 'Obra' },
            { key: 'servicio',     label: 'Servicio', align: 'center' },
            { key: 'contratista',  label: 'Contratista', align: 'center' },
            { key: 'consecuencia', label: 'Consecuencia operativa' },
          ]}
          rows={d.falsosVigentes || []}
        />
      </SectionBlock>

      <SectionBlock title="🔧 Cuellos de botella técnicos" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',       label: 'Obra' },
            { key: 'bloqueo',    label: 'Tipo de bloqueo' },
            { key: 'prestadora', label: 'Prestadora', align: 'center' },
            { key: 'impacto',    label: 'Impacto' },
          ]}
          rows={d.cuellosBottella || []}
        />
      </SectionBlock>

      {/* Cobranzas */}
      <SectionBlock title="💰 Cobranzas — Resultado del período">
        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-label">Mar 2026</p>
            <p className="kpi-value" style={{ color: '#dc2626' }}>{fmt(d.cobranzas?.mar2026)}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Feb 2026</p>
            <p className="kpi-value">{fmt(d.cobranzas?.feb2026)}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Prom. histórico</p>
            <p className="kpi-value">{fmt(d.cobranzas?.promHistorico)}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Variación vs histórico</p>
            <p className="kpi-value" style={{ color: '#dc2626' }}>{d.cobranzas?.variacionVsHistorico}%</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Pendiente total</p>
            <p className="kpi-value" style={{ color: '#ea580c' }}>{fmt(d.cobranzas?.pendienteTotal)}</p>
            <p className="kpi-prev">{d.cobranzas?.pctPendienteVsHistorico}% del histórico</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Pagos del mes</p>
            <p className="kpi-value">{d.cobranzas?.pagos}</p>
          </div>
        </div>
        <BarComparison
          data={cobranzaChart}
          periodoActual="Cobrado"
          periodoAnterior="Prom. histórico"
          title="Cobranza vs. promedio histórico"
        />
      </SectionBlock>

      <SectionBlock title="🏢 Top 5 obras por pendiente" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',      label: 'Obra' },
            { key: 'pendiente', label: 'Pendiente', align: 'right', render: (v) => fmt(v) },
            { key: 'riesgo',    label: 'Riesgo asociado' },
          ]}
          rows={d.topObrasPendiente || []}
        />
      </SectionBlock>

      <SectionBlock title="🏬 Top 5 inmobiliarias (cobro y mora)" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'inmobiliaria',  label: 'Inmobiliaria' },
            { key: 'cobrado',       label: 'Cobrado', align: 'right', render: (v) => fmt(v) },
            { key: 'pendiente',     label: 'Pendiente', align: 'right', render: (v) => fmt(v) },
            { key: 'efectividad',   label: 'Efectividad', align: 'center', render: (v) => `${v}%` },
            { key: 'morosos',       label: 'Morosos', align: 'center' },
            { key: 'clasificacion', label: 'Clasificación' },
          ]}
          rows={d.topInmobiliarias || []}
        />
      </SectionBlock>

      {/* Mora */}
      <SectionBlock title="🔴 Mora — Dashboard">
        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-label">Deuda total</p>
            <p className="kpi-value">{fmt(d.mora?.deudaTotal)}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">En mora</p>
            <p className="kpi-value" style={{ color: '#dc2626' }}>{fmt(d.mora?.moraTotal)}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">% mora</p>
            <p className="kpi-value" style={{ color: '#dc2626' }}>{d.mora?.pctMora}%</p>
            <p className="kpi-prev">umbral sano &lt;80%</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Deudores únicos</p>
            <p className="kpi-value">{d.mora?.deudoresUnicos}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">No vencida (riesgo latente)</p>
            <p className="kpi-value" style={{ color: '#ea580c' }}>{fmt(d.mora?.noVencida)}</p>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="👤 Top 5 deudores en mora" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'deudor',    label: 'Deudor' },
            { key: 'montomora', label: 'Monto mora', align: 'right', render: (v) => fmt(v) },
            { key: 'obra',      label: 'Obra' },
          ]}
          rows={d.topDeudoresMora || []}
        />
      </SectionBlock>

      <SectionBlock title="🏗️ Top 5 obras en mora" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',      label: 'Obra' },
            { key: 'montomora', label: 'Monto mora', align: 'right', render: (v) => fmt(v) },
            { key: 'pct',       label: '% sobre mora total', align: 'center', render: (v) => `${v}%` },
          ]}
          rows={d.topObrasMora || []}
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Matriz de riesgos" defaultOpen={false}>
        <RiesgoTable riesgos={d.riesgos} />
      </SectionBlock>

      <SectionBlock title="🗂️ Plan de acción">
        <PlanAccion plan={d.planAccion} />
      </SectionBlock>
    </>
  );
}

// ── Vista de CX ───────────────────────────────────────────────────────────────
function CxReport({ d }) {
  const rubrosChart = (d.rubrosPorVolumen || []).map(r => ({
    name: r.rubro.length > 14 ? r.rubro.slice(0, 14) + '…' : r.rubro,
    actual: r.cantidad,
    anterior: 0,
  }));

  return (
    <>
      <SectionBlock title="📋 Hallazgos principales">
        <ol className="hallazgos-list">
          {d.hallazgos.map((h, i) => <li key={i}>{h}</li>)}
        </ol>
      </SectionBlock>

      <SectionBlock title="🚦 Semáforo ejecutivo de sub-áreas">
        <DataTable
          columns={[
            { key: 'subarea', label: 'Sub-área', width: '160px' },
            { key: 'estado',  label: 'Estado',   render: (v, row) => <EstadoBadge color={row.color} estado={v} /> },
            { key: 'metrica', label: 'Métrica que justifica' },
            { key: 'umbral',  label: 'Umbral', width: '220px' },
          ]}
          rows={d.semaforo}
        />
      </SectionBlock>

      {/* Postventa */}
      <SectionBlock title="🛠️ Postventa — KPIs globales">
        <div className="kpi-grid">
          {(d.kpisPostventa || []).map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="📈 Evolución mensual" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'mes',            label: 'Mes' },
            { key: 'entrados',       label: 'Entrados', align: 'center' },
            { key: 'salidos',        label: 'Salidos',  align: 'center' },
            { key: 'tasa',           label: 'Tasa resolución', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 1 ? '#16a34a' : '#dc2626' }}>{v}x</span>
            )},
            { key: 'neto',           label: 'Neto',     align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v <= 0 ? '#16a34a' : '#dc2626' }}>{v > 0 ? '+' : ''}{v}</span>
            )},
            { key: 'interpretacion', label: 'Interpretación' },
          ]}
          rows={d.evolucionMensual || []}
        />
      </SectionBlock>

      <SectionBlock title="⏰ Casos críticos por antigüedad">
        <DataTable
          columns={[
            { key: 'reclamo',     label: 'Reclamo' },
            { key: 'obra',        label: 'Obra' },
            { key: 'diasAbierto', label: 'Días abierto', align: 'center', render: (v) => v != null ? (
              <span style={{ fontWeight: 700, color: v > 365 ? '#dc2626' : '#ea580c' }}>{v}</span>
            ) : 'N/D' },
            { key: 'estado',      label: 'Estado' },
          ]}
          rows={d.casosCriticos || []}
        />
      </SectionBlock>

      <SectionBlock title="📊 Ranking de rubros por volumen">
        <DataTable
          columns={[
            { key: 'prioridad', label: '#',          align: 'center', width: '40px' },
            { key: 'rubro',     label: 'Rubro' },
            { key: 'cantidad',  label: 'Casos',      align: 'center' },
            { key: 'pct',       label: '% del total', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 25 ? '#dc2626' : v >= 15 ? '#ea580c' : '#374151' }}>{v}%</span>
            )},
          ]}
          rows={d.rubrosPorVolumen || []}
        />
        {rubrosChart.length > 0 && (
          <BarComparison
            data={rubrosChart}
            periodoActual="Casos"
            periodoAnterior=""
            title="Volumen de reclamos por rubro"
          />
        )}
      </SectionBlock>

      {/* Encuesta */}
      <SectionBlock title="📝 Encuesta Postventa — KPIs">
        <div className="kpi-grid">
          {(d.kpisEncuesta || []).map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="🌐 Tráfico Web — KPIs globales">
        <div className="kpi-grid">
          {(d.kpisTrafico || []).map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="📄 Análisis de landing pages" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'landing',        label: 'Landing Page', width: '130px' },
            { key: 'sesiones',       label: 'Sesiones', align: 'center', render: (v) => v.toLocaleString('es-AR') },
            { key: 'pctTotal',       label: '% del total', align: 'center', render: (v) => `${v}%` },
            { key: 'rebote',         label: '% Rebote', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v > 60 ? '#dc2626' : v > 40 ? '#ea580c' : '#16a34a' }}>{v}%</span>
            )},
            { key: 'engagement',     label: '% Engagement', align: 'center', render: (v) => `${v}%` },
            { key: 'interpretacion', label: 'Interpretación' },
          ]}
          rows={d.landingPages || []}
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Matriz de riesgos" defaultOpen={false}>
        <RiesgoTable riesgos={d.riesgos} />
      </SectionBlock>

      <SectionBlock title="🗂️ Plan de acción">
        <PlanAccion plan={d.planAccion} />
      </SectionBlock>

      {d.conclusionMaestra && (
        <SectionBlock title="📝 Conclusión maestra del reporte completo" defaultOpen={false}>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Síntesis por módulo</p>
          <ul className="hallazgos-list" style={{ marginBottom: 16 }}>
            {d.conclusionMaestra.modulos.map((m, i) => (
              <li key={i}><strong>{m.modulo}:</strong> {m.resumen}</li>
            ))}
          </ul>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Riesgos sistémicos</p>
          <ol className="hallazgos-list" style={{ marginBottom: 16 }}>
            {d.conclusionMaestra.riesgosSistemicos.map((r, i) => <li key={i}>{r}</li>)}
          </ol>
          <p style={{ fontWeight: 600, marginBottom: 8 }}>Acciones prioritarias (30 días)</p>
          <ol className="hallazgos-list" style={{ marginBottom: 16 }}>
            {d.conclusionMaestra.accionesPrioritarias.map((a, i) => <li key={i}>{a}</li>)}
          </ol>
          <p style={{ color: '#4b5563', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.6 }}>
            {d.conclusionMaestra.narrativa}
          </p>
        </SectionBlock>
      )}
    </>
  );
}

// ── Página principal ──────────────────────────────────────────────────────────
export default function ReportPage() {
  const [activeArea, setActiveArea] = useState('obras');
  const area = AREAS.find((a) => a.key === activeArea);

  return (
    <AppLayout scrollable>
    <div className="report-page">
      <div className="report-header">
        <div>
          <h1 className="report-title">Reporte Maestro</h1>
          <p className="report-subtitle">
            Período: <strong>{META.periodo}</strong> · Corte: {META.fechaCorte} · Emitido: {META.fechaEmision}
          </p>
        </div>
      </div>

      <div className="area-tabs">
        {AREAS.map((a) => (
          <button
            key={a.key}
            className={`area-tab ${activeArea === a.key ? 'area-tab--active' : ''}`}
            onClick={() => setActiveArea(a.key)}
          >
            {a.label}
          </button>
        ))}
      </div>

      <div className="report-content">
        {activeArea === 'obras'     && <ObrasReport     d={area.data} />}
        {activeArea === 'comercial' && <ComercialReport d={area.data} />}
        {activeArea === 'finanzas'  && <FinanzasReport  d={area.data} />}
        {activeArea === 'cx'        && <CxReport        d={area.data} />}
        {activeArea === 'mapa'      && (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <iframe
              width="100%"
              style={{ minHeight: '75vh', border: 0 }}
              src="https://lookerstudio.google.com/embed/reporting/0b917ea2-a920-46a7-bf3e-8ad4faf00714/page/p_87b17rs5vd"
allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        )}
      </div>
    </div>
    </AppLayout>
  );
}
