import { useState } from 'react';
import AppLayout from '../components/AppLayout.jsx';
import Chat from '../components/Chat.jsx';
import { META } from '../data/reportMeta.js';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, ReferenceLine,
} from 'recharts';

// Componentes
import SectionBlock from '../components/report/SectionBlock.jsx';
import KpiCard from '../components/report/KpiCard.jsx';
import DataTable from '../components/report/DataTable.jsx';
import BarComparison from '../components/report/BarComparison.jsx';
import PlanAccion from '../components/report/PlanAccion.jsx';
import RiesgoTable from '../components/report/RiesgoTable.jsx';
import { EstadoBadge, UrgenciaBadge } from '../components/report/AlertBadge.jsx';
import AnalisisIntegral from '../components/report/AnalisisIntegral.jsx';

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
  { key: 'analisis',  label: 'Análisis IA',         data: null },
];

// ── Vista de Obras ────────────────────────────────────────────────────────────
function ObrasReport({ d }) {
  const totalKpi     = (d.kpisArquitectura || []).find(k => k.label === 'Total ítems');
  const backlogChart = [
    { name: 'Total ítems', anterior: totalKpi?.anterior ?? 0, actual: totalKpi?.actual ?? 0 },
  ];

  const geoChart = (d.concentracionGeografica || []).map(g => ({
    name: g.localidad, actual: g.cantidad, anterior: 0,
  }));

  const factChart = [
    { name: 'Vigentes',    actual: 33, anterior: 0 },
    { name: 'Vencidas',    actual: 33, anterior: 0 },
    { name: 'Sin fecha',   actual: 7,  anterior: 0 },
    { name: 'Vence <30d',  actual: 2,  anterior: 0 },
  ];

  const descalceChart = (d.obrasDesacople || [])
    .filter(o => o.avance != null && o.descalce > 0)
    .slice(0, 6)
    .map(o => ({
      name: o.obra.length > 14 ? o.obra.slice(0, 14) + '…' : o.obra,
      actual: o.avance,
      anterior: o.vendido ?? 0,
    }));

  const geoProblChart = (d.concentracionGeoProblemas || []).map(g => ({
    name: g.localidad, actual: g.obrasCon, anterior: 0,
  }));

  const trelloLink = (url) => url
    ? <a href={url} target="_blank" rel="noreferrer" style={{ color: '#1a56db', fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap' }}>Ver →</a>
    : '—';

  const nivelBadge = (v) => (
    <span style={{
      background: v === 'CRÍTICO' ? '#fef2f2' : v === 'ALTO' ? '#fff7ed' : '#f0fdf4',
      color: v === 'CRÍTICO' ? '#b91c1c' : v === 'ALTO' ? '#c2410c' : '#15803d',
      padding: '2px 8px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 700,
    }}>{v}</span>
  );

  return (
    <>
      <SectionBlock title="📋 Hallazgos principales">
        <ol className="hallazgos-list">
          {(d.hallazgos || []).map((h, i) => <li key={i}>{h}</li>)}
        </ol>
      </SectionBlock>

      <SectionBlock title="🚦 Semáforo ejecutivo de sub-áreas">
        <DataTable
          columns={[
            { key: 'subarea', label: 'Sub-área', width: '140px' },
            { key: 'estado',  label: 'Estado',   render: (v, row) => <EstadoBadge color={row.color} estado={v} /> },
            { key: 'metrica', label: 'Métrica que justifica' },
            { key: 'umbral',  label: 'Umbral', width: '220px' },
          ]}
          rows={d.semaforo || []}
        />
      </SectionBlock>

      {/* ── FACTIBILIDADES ── */}
      <SectionBlock title="📑 Factibilidades — Estado de cartera">
        <div className="kpi-grid">
          {(d.kpisFactibilidades || []).map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
        <BarComparison
          data={factChart}
          periodoActual="Obras"
          title="Distribución de cartera de factibilidades (Abril 2026)"
        />
      </SectionBlock>

      <SectionBlock title="⚡ Factibilidades — Vencimientos inminentes (<30 días)">
        <p style={{ fontSize: '0.85rem', color: '#b91c1c', fontWeight: 600, marginBottom: 10 }}>
          Estamos fuera del plazo de renovación estándar con Edenor (30-45 días hábiles). Se requiere gestión acelerada inmediata.
        </p>
        <DataTable
          columns={[
            { key: 'obra',          label: 'Obra' },
            { key: 'servicio',      label: 'Servicio', width: '190px' },
            { key: 'contratista',   label: 'Contratista', align: 'center' },
            { key: 'fecha',         label: 'Vence', align: 'center' },
            { key: 'diasRestantes', label: 'Días', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v <= 20 ? '#dc2626' : '#ea580c' }}>{v}</span>
            )},
            { key: 'riesgo', label: 'Riesgo si no se renueva' },
          ]}
          rows={d.vencimientosFactibilidades || []}
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Falsos vigentes — Top 5 backlog histórico" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: 10 }}>
          Obras con factibilidades vencidas que pueden estar operativamente activas pero sin amparo legal ante prestadoras.
          4 de las 5 más antiguas no tienen contratista asignado — patrón de abandono operativo no declarado.
        </p>
        <DataTable
          columns={[
            { key: 'obra',             label: 'Obra' },
            { key: 'servicio',         label: 'Servicio', width: '180px' },
            { key: 'contratista',      label: 'Contratista', align: 'center' },
            { key: 'fechaVencimiento', label: 'Vencimiento', align: 'center' },
            { key: 'anosAtraso',       label: 'Años atraso', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: '#dc2626' }}>{v}</span>
            )},
            { key: 'consecuencia', label: 'Consecuencia operativa' },
          ]}
          rows={d.falsosVigentes || []}
        />
      </SectionBlock>

      <SectionBlock title="🏢 Concentración de riesgo por prestadora" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'prestadora',  label: 'Prestadora' },
            { key: 'vencidas',    label: 'Obras vencidas', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 10 ? '#dc2626' : v >= 3 ? '#ea580c' : '#374151' }}>{v}</span>
            )},
            { key: 'porcentaje',  label: '% del total', align: 'center', render: (v) => `${v}%` },
            { key: 'riesgo',      label: 'Nivel', align: 'center', render: (v) => nivelBadge(v) },
            { key: 'detalle',     label: 'Riesgo sistémico' },
          ]}
          rows={d.concentracionFactibilidades || []}
        />
      </SectionBlock>

      <SectionBlock title="👷 Concentración de factibilidades por contratista" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'contratista', label: 'Contratista' },
            { key: 'cantidad',    label: 'Obras vencidas', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 3 ? '#dc2626' : v >= 2 ? '#ea580c' : '#374151' }}>{v}</span>
            )},
            { key: 'detalle', label: 'Detalle' },
          ]}
          rows={d.concentracionContratista || []}
        />
      </SectionBlock>

      {/* ── ARQUITECTURA ── */}
      <SectionBlock title="📐 Arquitectura — KPIs del mes">
        <div className="kpi-grid">
          {(d.kpisArquitectura || []).map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="⚠️ Obras con bajo avance o estancadas">
        <DataTable
          columns={[
            { key: 'obra',       label: 'Obra' },
            { key: 'avance',     label: 'Avance %', align: 'center', render: (v) => (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <span style={{ width: 56, height: 8, background: '#e5e7eb', borderRadius: 4, display: 'inline-block', overflow: 'hidden' }}>
                  <span style={{ display: 'block', height: '100%', width: `${v}%`, background: v < 10 ? '#ef4444' : '#f97316', borderRadius: 4 }} />
                </span>
                {v}%
              </span>
            )},
            { key: 'pendientes', label: 'Pendientes', align: 'center' },
            { key: 'estancada',  label: 'Estancada', align: 'center', render: (v) =>
              v === true  ? <span style={{ background: '#fef2f2', color: '#b91c1c', padding: '2px 8px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 700 }}>Sí</span>
            : v === false ? <span style={{ background: '#f0fdf4', color: '#15803d', padding: '2px 8px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 700 }}>No</span>
            : <span style={{ color: '#9ca3af' }}>—</span>
            },
            { key: 'trello', label: 'Trello', align: 'center', render: (v) => trelloLink(v) },
          ]}
          rows={d.obrasEstancadas || []}
        />
      </SectionBlock>

      <SectionBlock title="🔒 Obras >80% bloqueadas por dependencias externas" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: 10 }}>
          Se excluyen obras que solo tienen Plano PH pendiente — ese trámite no bloquea avance físico de obra.
        </p>
        <DataTable
          columns={[
            { key: 'obra',        label: 'Obra' },
            { key: 'avance',      label: 'Avance %', align: 'center', render: (v) => `${v}%` },
            { key: 'pendientes',  label: 'Pendientes', align: 'center' },
            { key: 'dependencia', label: 'Dependencias bloqueantes' },
            { key: 'trello',      label: 'Trello', align: 'center', render: (v) => trelloLink(v) },
          ]}
          rows={d.obrasBlockeadas || []}
        />
      </SectionBlock>

      <SectionBlock title="📄 Plano PH pendiente (no bloqueante)" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: 10 }}>
          Trámite administrativo posterior a la obra física. No afecta la continuidad constructiva — incluido solo a efectos informativos.
        </p>
        <DataTable
          columns={[
            { key: 'obra',   label: 'Obra' },
            { key: 'avance', label: 'Avance %', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: '#16a34a' }}>{v}%</span>
            )},
            { key: 'trello', label: 'Trello', align: 'center', render: (v) => trelloLink(v) },
          ]}
          rows={d.obrasPlanoPH || []}
        />
      </SectionBlock>

      {/* ── DETALLE Y ESTADO ── */}
      <SectionBlock title="📊 Portfolio general" defaultOpen={false}>
        <div className="kpi-grid">
          {(d.portfolio || []).map((p, i) => (
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
            { key: 'cocheras', label: 'Cocheras', align: 'center', render: (v) => v != null ? v : '—' },
            { key: 'entrega',  label: 'Fecha entrega', align: 'center' },
            { key: 'estado',   label: 'Estado', align: 'center' },
            { key: 'nota',     label: 'Nota analítica' },
          ]}
          rows={d.topObras || []}
        />
      </SectionBlock>

      <SectionBlock title="📅 Entregas próximas Q4 2026">
        <p style={{ fontSize: '0.85rem', color: '#15803d', fontWeight: 600, marginBottom: 10 }}>
          ✅ 0 entregas vencidas sin finalizar en el período analizado.
        </p>
        <DataTable
          columns={[
            { key: 'obra',     label: 'Obra' },
            { key: 'entrega',  label: 'Fecha entrega', align: 'center' },
            { key: 'unidades', label: 'Unidades', align: 'center' },
            { key: 'alerta',   label: 'Alerta', align: 'center', render: (v) =>
              <UrgenciaBadge urgencia={v === 'vencida' ? 'critica' : v} />
            },
            { key: 'nota', label: 'Detalle' },
          ]}
          rows={d.obrasEntregaProxima || []}
        />
      </SectionBlock>

      <SectionBlock title="📉 Descalce avance vs. vendido">
        <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: 10 }}>
          <strong style={{ color: '#dc2626' }}>68% de las obras en curso (15 de 22) tienen 0% vendido.</strong>{' '}
          Capital inmovilizado estimado: USD 15-20 millones. Riesgo de sobrestock masivo en 2027-2028.
        </p>
        <DataTable
          columns={[
            { key: 'obra',     label: 'Obra' },
            { key: 'avance',   label: 'Avance %',  align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'vendido',  label: 'Vendido %',  align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'descalce', label: 'Descalce',   align: 'center', render: (v) => v != null ? (
              <span style={{ fontWeight: 700, color: v >= 80 ? '#dc2626' : v >= 30 ? '#ea580c' : v > 0 ? '#d97706' : '#16a34a' }}>
                {v > 0 ? '+' : ''}{v}pp
              </span>
            ) : '—' },
            { key: 'tipo', label: 'Tipo de riesgo' },
          ]}
          rows={d.obrasDesacople || []}
        />
      </SectionBlock>

      <SectionBlock title="🔬 Top 3 descalces — análisis causa y consecuencia" defaultOpen={false}>
        {(d.top3DescalcesDetalle || []).map((item, i) => (
          <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '14px 16px', marginBottom: 12, background: '#fafafa' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827' }}>{i + 1}. {item.obra}</span>
              <span style={{ color: '#6b7280', fontSize: '0.82rem' }}>Avance {item.avance}% · Vendido {item.vendido}%</span>
            </div>
            <p style={{ fontSize: '0.84rem', color: '#374151', marginBottom: 4 }}><strong>Causa:</strong> {item.causa}</p>
            <p style={{ fontSize: '0.84rem', color: '#b91c1c', marginBottom: 4 }}><strong>Consecuencia:</strong> {item.consecuencia}</p>
            <p style={{ fontSize: '0.81rem', color: '#6b7280' }}><strong>Ritmo/cronograma:</strong> {item.ritmoCronograma}</p>
          </div>
        ))}
      </SectionBlock>

      <SectionBlock title="🔧 Cuellos de botella — obras con cámara Edenor" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#b91c1c', fontWeight: 600, marginBottom: 10 }}>
          8 obras requieren construcción de cámara de transformación Edenor — atraso estructural de 105-155 días independiente del estado de la factibilidad.
        </p>
        <DataTable
          columns={[
            { key: 'obra',          label: 'Obra' },
            { key: 'requerimiento', label: 'Requerimiento', width: '200px' },
            { key: 'diasDemora',    label: 'Demora adicional', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: '#dc2626' }}>{v}</span>
            )},
            { key: 'motivo',       label: 'Mecanismo de bloqueo' },
            { key: 'nota',         label: 'Nota' },
          ]}
          rows={d.cuellosBotella || []}
        />
      </SectionBlock>

      <SectionBlock title="❓ Obras en limbo" defaultOpen={false}>
        <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7 }}>
          Total en limbo: <strong style={{ color: '#dc2626' }}>{d.totalLimbo ?? 42} obras</strong> (18.8% del portfolio — 223 obras totales).
        </p>
        <p style={{ marginTop: 8, fontSize: '0.85rem', color: '#6b7280' }}>
          Los nombres nominales no están disponibles en el reporte fuente. Estas obras no se identifican como activas,
          finalizadas ni en espera, generando ceguera operativa sobre el 18.8% de la cartera.{' '}
          <strong>Acción recomendada:</strong> auditoría y reclasificación obligatoria en los próximos 30 días.
        </p>
      </SectionBlock>

      {/* ── PROGRAMACIÓN ── */}
      <SectionBlock title="🗺️ Concentración geográfica de obras" defaultOpen={false}>
        <BarComparison
          data={geoChart}
          periodoActual="Obras"
          title="Distribución por localidad (portfolio histórico completo)"
        />
        <DataTable
          columns={[
            { key: 'localidad', label: 'Localidad' },
            { key: 'cantidad',  label: 'Obras', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700 }}>{v}</span>
            )},
            { key: 'obras', label: 'Detalle' },
          ]}
          rows={d.concentracionGeografica || []}
        />
      </SectionBlock>

      {/* ── GESTORÍA ── */}
      <SectionBlock title="🏛️ Gestoría y trámites — KPIs">
        <div className="kpi-grid">
          {(d.kpisGestoria || []).map((k, i) => <KpiCard key={i} {...k} />)}
        </div>
      </SectionBlock>

      <SectionBlock title="🚨 Vencimientos urgentes gestoría (<14 días)">
        <DataTable
          columns={[
            { key: 'obra',        label: 'Obra' },
            { key: 'paso',        label: 'Paso', width: '260px' },
            { key: 'fecha',       label: 'Vence', align: 'center' },
            { key: 'responsable', label: 'Responsable', align: 'center' },
            { key: 'urgencia',    label: 'Urgencia', align: 'center', render: (v) => <UrgenciaBadge urgencia={v} /> },
          ]}
          rows={d.vencimientos || []}
        />
      </SectionBlock>

      <SectionBlock title="⏳ Obras con atraso >90 días" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',        label: 'Obra' },
            { key: 'paso',        label: 'Paso bloqueado' },
            { key: 'dias',        label: 'Días', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v > 180 ? '#dc2626' : '#ea580c' }}>{v}</span>
            )},
            { key: 'responsable', label: 'Responsable', align: 'center' },
          ]}
          rows={d.obrasAtraso90 || []}
        />
      </SectionBlock>

      <SectionBlock title="🧱 Obras estancadas en gestoría" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',          label: 'Obra' },
            { key: 'paso',          label: 'Paso estancado' },
            { key: 'diasEstancada', label: 'Días estancada', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v > 200 ? '#dc2626' : '#ea580c' }}>{v}</span>
            )},
            { key: 'responsable',   label: 'Responsable', align: 'center' },
          ]}
          rows={d.obrasEstancadasGestoria || []}
        />
      </SectionBlock>

      <SectionBlock title="👤 Distribución de bloqueos por responsable" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'responsable', label: 'Responsable' },
            { key: 'cantidad',    label: 'Obras bloqueadas', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 6 ? '#dc2626' : v >= 4 ? '#ea580c' : '#374151' }}>{v}</span>
            )},
            { key: 'obras', label: 'Detalle de obras' },
          ]}
          rows={d.bloqueosPorResponsable || []}
        />
      </SectionBlock>

      <SectionBlock title="📍 Concentración geográfica de problemas" defaultOpen={false}>
        <BarComparison
          data={geoProblChart}
          periodoActual="Obras con alertas"
          title="Obras con alertas activas por localidad"
        />
        <DataTable
          columns={[
            { key: 'localidad',        label: 'Localidad' },
            { key: 'obrasCon',         label: 'Obras con alertas', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 5 ? '#dc2626' : v >= 3 ? '#ea580c' : '#374151' }}>{v}</span>
            )},
            { key: 'tipoPredominante', label: 'Tipo de bloqueo predominante' },
          ]}
          rows={d.concentracionGeoProblemas || []}
        />
      </SectionBlock>

      <SectionBlock title="🔗 Cruces entre los 6 reportes — hallazgos transversales" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>
          Patrones y riesgos que solo emergen al cruzar múltiples fuentes. Ninguno es evidente en un único reporte por separado.
        </p>
        {(d.crucesModulos || []).map((c, i) => (
          <div key={i} style={{ marginBottom: 16, padding: '14px 16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, borderLeft: '4px solid #6366f1' }}>
            <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#4338ca', marginBottom: 10 }}>
              Cruce {i + 1}: {c.causa}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: '0.84rem', color: '#374151' }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Mecanismo</p>
                <p style={{ lineHeight: 1.6 }}>{c.mecanismo}</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Impacto</p>
                <p style={{ lineHeight: 1.6 }}>{c.impacto}</p>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#b91c1c', textTransform: 'uppercase', marginBottom: 4 }}>Consecuencia si no se actúa</p>
                <p style={{ lineHeight: 1.6, color: '#dc2626' }}>{c.consecuencia}</p>
              </div>
            </div>
          </div>
        ))}
      </SectionBlock>

      <SectionBlock title="⚠️ Matriz de riesgos" defaultOpen={false}>
        <RiesgoTable riesgos={d.riesgos || []} />
      </SectionBlock>

      <SectionBlock title="🗂️ Plan de acción">
        <PlanAccion plan={d.planAccion} />
      </SectionBlock>
    </>
  );
}

// ── Vista de Comercial ────────────────────────────────────────────────────────
function ComercialReport({ d }) {
  const brechaChart = (d.brechaAvance || []).slice(0, 6).map(r => ({
    name: r.obra.length > 12 ? r.obra.slice(0, 12) + '…' : r.obra,
    anterior: r.vendido,
    actual: r.avance,
  }));

  const yoyChart = (d.tendenciaYoY || []).flatMap(r => [
    { name: `${r.metrica} 2025`, actual: r.anio2025, anterior: 0 },
    { name: `${r.metrica} 2026`, actual: r.anio2026, anterior: 0 },
  ]);

  const canalChart = (d.canalInmobiliaria || []).map(r => ({
    name: r.inmobiliaria.length > 12 ? r.inmobiliaria.slice(0, 12) + '…' : r.inmobiliaria,
    actual: r.boletos,
    anterior: r.reservas,
  }));

  const colorSeveridad = (s) => s === 'alta' ? '#dc2626' : s === 'media' ? '#d97706' : '#6b7280';
  const bgSeveridad    = (s) => s === 'alta' ? '#fef2f2'  : s === 'media' ? '#fffbeb'  : '#f9fafb';

  return (
    <>
      {/* ── DIAGNÓSTICO GLOBAL ── */}
      <SectionBlock title="📋 Hallazgos principales">
        <ol className="hallazgos-list">
          {(d.hallazgos || []).map((h, i) => <li key={i}>{h}</li>)}
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
          rows={d.semaforo || []}
        />
      </SectionBlock>

      {/* ── VENTAS X PERIODO ── */}
      <SectionBlock title="🌡️ Termómetro global del portafolio">
        <div className="kpi-grid">
          {(d.termometroGlobal || []).map((k, i) => (
            <div key={i} className="kpi-card">
              <p className="kpi-label">{k.label}</p>
              <p className="kpi-value">{k.actual?.toLocaleString('es-AR')}{k.unidad}</p>
              {k.nota && <p className="kpi-prev">{k.nota}</p>}
            </div>
          ))}
        </div>
        <p style={{ marginTop: 12, padding: '8px 12px', background: '#fef2f2', borderLeft: '3px solid #dc2626', borderRadius: 4, fontSize: '0.85rem', color: '#374151' }}>
          <strong>Descalce crítico:</strong> El portafolio tiene 89.9% de avance físico promedio pero solo 21.9% de ventas ponderadas — un gap de 68pp que indica capital inmovilizado masivo en cemento en lugar de caja.
        </p>
      </SectionBlock>

      <SectionBlock title="📉 Brecha avance vs. ventas — Top 10 obras">
        <DataTable
          columns={[
            { key: 'obra',    label: 'Obra' },
            { key: 'avance',  label: 'Avance %',  align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'vendido', label: 'Vendido %',  align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'brecha',  label: 'Brecha',     align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 80 ? '#b91c1c' : v >= 50 ? '#dc2626' : v >= 30 ? '#ea580c' : '#16a34a' }}>
                +{v}pp
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
            title="Avance físico vs. % vendido (top 6 brechas)"
          />
        )}
      </SectionBlock>

      <SectionBlock title="🔍 Top 3 obras descalzadas — análisis detallado" defaultOpen={false}>
        {(d.top3Descalzadas || []).map((o, i) => (
          <div key={i} style={{ marginBottom: 20, padding: '14px 16px', background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111827' }}>{o.obra}</span>
              <span style={{ background: '#fef2f2', color: '#b91c1c', padding: '2px 10px', borderRadius: 99, fontWeight: 700, fontSize: '0.75rem' }}>
                +{o.brecha}pp
              </span>
              <span style={{ color: '#6b7280', fontSize: '0.82rem' }}>Avance {o.avance}% · Vendido {o.vendido}% ({o.unidades}) · {o.mesesSinVenta} meses sin venta</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.78rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 3 }}>Causa</p>
                <p style={{ fontSize: '0.84rem', color: '#374151', lineHeight: 1.6 }}>{o.causa}</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.78rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 3 }}>Impacto financiero</p>
                <p style={{ fontSize: '0.84rem', color: '#374151', lineHeight: 1.6 }}>{o.impactoFinanciero}</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.78rem', color: '#b91c1c', textTransform: 'uppercase', marginBottom: 3 }}>Consecuencia si no se actúa</p>
                <p style={{ fontSize: '0.84rem', color: '#374151', lineHeight: 1.6 }}>{o.consecuencia}</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.78rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 3 }}>Ritmo vs cronograma</p>
                <p style={{ fontSize: '0.84rem', color: '#374151', lineHeight: 1.6 }}>{o.ritmoCronograma}</p>
              </div>
            </div>
          </div>
        ))}
      </SectionBlock>

      <SectionBlock title="🔴 Stock inmovilizado — 28 años sin venta" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#b91c1c', fontWeight: 600, marginBottom: 10 }}>
          Estos tres casos no son descalce: son stock muerto. Llevan 339 meses sin ninguna venta con avance 100%. El sell-out proyectado es infinito (velocidad de ventas = 0 u/mes).
        </p>
        <DataTable
          columns={[
            { key: 'obra',      label: 'Obra' },
            { key: 'avance',    label: 'Avance %', align: 'center', render: (v) => <span style={{ fontWeight: 700, color: '#16a34a' }}>{v}%</span> },
            { key: 'vendido',   label: 'Vendido %', align: 'center', render: (v) => <span style={{ fontWeight: 700, color: '#dc2626' }}>{v}%</span> },
            { key: 'hipotesis', label: 'Hipótesis de causa' },
          ]}
          rows={d.stockInmovilizado || []}
        />
      </SectionBlock>

      <SectionBlock title="💪 Motores de solvencia" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#374151', marginBottom: 10 }}>
          Solo estas 3 obras (2.5% del portafolio) lograron sell-out completo y sostienen la solvencia inmediata de Clamaco, compensando el descalce de las 107 obras restantes.
        </p>
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

      <SectionBlock title="💧 Estrés de caja" defaultOpen={false}>
        {d.estresCaja && (
          <div>
            <p style={{ fontSize: '0.87rem', color: '#374151', lineHeight: 1.7, marginBottom: 12 }}>
              <strong>Causa:</strong> {d.estresCaja.causa}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 14 }}>
              <div style={{ background: '#fef2f2', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
                <p style={{ fontWeight: 700, fontSize: '1.5rem', color: '#dc2626' }}>{d.estresCaja.cifras?.unidadesInmovilizadas?.toLocaleString('es-AR')}</p>
                <p style={{ fontSize: '0.78rem', color: '#6b7280' }}>Unidades inmovilizadas</p>
              </div>
              <div style={{ background: '#fff7ed', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
                <p style={{ fontWeight: 700, fontSize: '1.5rem', color: '#ea580c' }}>{d.estresCaja.cifras?.pctObrasGapPositivo}%</p>
                <p style={{ fontSize: '0.78rem', color: '#6b7280' }}>Obras con gap positivo</p>
              </div>
              <div style={{ background: '#fff7ed', borderRadius: 8, padding: '12px 14px', textAlign: 'center' }}>
                <p style={{ fontWeight: 700, fontSize: '1.5rem', color: '#ea580c' }}>+{d.estresCaja.cifras?.obrasGapMas50pp}</p>
                <p style={{ fontSize: '0.78rem', color: '#6b7280' }}>Obras con gap &gt;50pp</p>
              </div>
            </div>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Mecanismo</p>
            <ul style={{ paddingLeft: 18, marginBottom: 12, fontSize: '0.85rem', color: '#374151', lineHeight: 1.8 }}>
              {(d.estresCaja.mecanismo || []).map((m, i) => <li key={i}>{m}</li>)}
            </ul>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Consecuencias si no se actúa</p>
            <ul style={{ paddingLeft: 18, marginBottom: 0, fontSize: '0.85rem', color: '#dc2626', lineHeight: 1.8 }}>
              {(d.estresCaja.consecuencias || []).map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        )}
      </SectionBlock>

      {/* ── VENTAS Y RESERVAS ── */}
      <SectionBlock title="🔄 Embudo comercial — estado completo">
        <div className="kpi-grid" style={{ marginBottom: 16 }}>
          <div className="kpi-card">
            <p className="kpi-label">Boletos firmados (acumulado)</p>
            <p className="kpi-value">{d.embudo?.boletos?.toLocaleString('es-AR') ?? '—'}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Reservas activas (acumulado)</p>
            <p className="kpi-value">{d.embudo?.reservas?.toLocaleString('es-AR') ?? '—'}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Ratio conversión acumulado</p>
            <p className="kpi-value" style={{ color: '#16a34a' }}>{d.embudo?.ratio}x</p>
            <p className="kpi-prev">umbral &gt; 0.85x</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Aging reservas &gt;60d</p>
            <p className="kpi-value" style={{ color: '#16a34a' }}>{d.embudo?.agingMas60 ?? '—'}</p>
            <p className="kpi-prev">umbral &lt; 3%</p>
          </div>
        </div>
        <DataTable
          columns={[
            { key: 'metrica',        label: 'Métrica' },
            { key: 'valor',          label: 'Valor', align: 'center', render: (v) => <span style={{ fontWeight: 700 }}>{v}</span> },
            { key: 'benchmark',      label: 'Benchmark', align: 'center' },
            { key: 'interpretacion', label: 'Interpretación' },
          ]}
          rows={d.estadoEmbudoDetalle || []}
        />
      </SectionBlock>

      <SectionBlock title="📊 Tendencia interanual (YoY)">
        <DataTable
          columns={[
            { key: 'metrica',       label: 'Métrica' },
            { key: 'anio2025',      label: '2025', align: 'center', render: (v) => <span style={{ fontWeight: 700 }}>{v}</span> },
            { key: 'anio2026',      label: '2026', align: 'center', render: (v) => <span style={{ fontWeight: 700 }}>{v}</span> },
            { key: 'variacionAbs',  label: 'Δ absoluta', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v < 0 ? '#dc2626' : '#16a34a' }}>{v > 0 ? '+' : ''}{v}</span>
            )},
            { key: 'variacionPct',  label: 'Δ %', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v < 0 ? '#dc2626' : '#16a34a' }}>{v > 0 ? '+' : ''}{v}%</span>
            )},
          ]}
          rows={d.tendenciaYoY || []}
        />
        <p style={{ marginTop: 10, padding: '8px 12px', background: '#fef2f2', borderLeft: '3px solid #dc2626', borderRadius: 4, fontSize: '0.84rem', color: '#374151' }}>
          La caída del 32% en boletos y 30% en reservas no es estacional ni marginal: señala deterioro estructural en la calidad de los leads o en la efectividad de los canales de captación. Las causas incluyen mercado más frío, oferta menos competitiva, deterioro en canales y mayor competencia.
        </p>
      </SectionBlock>

      <SectionBlock title="🏢 Auditoría de canal por inmobiliaria" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#374151', marginBottom: 10 }}>
          Los primeros 4 canales concentran el 60% del volumen (Pareto 10/60). Jorge Cota representa el caso extremo de ineficiencia con 20% de conversión (vs 109% de promedio).
        </p>
        {canalChart.length > 0 && (
          <BarComparison
            data={canalChart}
            periodoActual="Boletos"
            periodoAnterior="Reservas"
            title="Boletos y reservas por canal inmobiliario"
          />
        )}
        <DataTable
          columns={[
            { key: 'inmobiliaria',  label: 'Inmobiliaria' },
            { key: 'boletos',       label: 'Boletos',  align: 'center', render: (v) => <span style={{ fontWeight: 700 }}>{v}</span> },
            { key: 'reservas',      label: 'Reservas', align: 'center' },
            { key: 'ratio',         label: 'Ratio conv.', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v < 50 ? '#dc2626' : v >= 110 ? '#16a34a' : '#374151' }}>{v}%</span>
            )},
            { key: 'clasificacion', label: 'Clasificación', render: (v) => {
              const color = v === 'Motor' ? '#16a34a' : v === 'Normal' ? '#d97706' : '#dc2626';
              return <span style={{ fontWeight: 700, color }}>{v}</span>;
            }},
          ]}
          rows={d.canalInmobiliaria || []}
        />
      </SectionBlock>

      <SectionBlock title="📅 Aging de reservas y alertas activas" defaultOpen={false}>
        <div className="kpi-grid" style={{ marginBottom: 16 }}>
          <div className="kpi-card">
            <p className="kpi-label">Mora &gt;30 días</p>
            <p className="kpi-value" style={{ color: '#16a34a' }}>{d.agingReservas?.moraMas30 ?? '—'}</p>
            <p className="kpi-prev">umbral &lt; 5% aceptable</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Mora &gt;60 días</p>
            <p className="kpi-value" style={{ color: '#16a34a' }}>{d.agingReservas?.moraMas60 ?? '—'}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Promedio días mora</p>
            <p className="kpi-value" style={{ color: '#16a34a' }}>{d.agingReservas?.promedioDias ?? '—'}</p>
          </div>
        </div>
        <p style={{ fontSize: '0.85rem', color: '#374151', lineHeight: 1.6, marginBottom: 10 }}>
          El embudo está completamente limpio sin acumulación de reservas antiguas. Sin embargo, esta limpieza debe mantenerse con disciplina semanal: toda reserva que supere 30 días debe tener justificación escrita firmada por el responsable, caso contrario debe liberarse automáticamente.
        </p>
        {(d.agingReservas?.obrasCriticas || []).length > 0 && (
          <DataTable
            columns={[
              { key: 'obra', label: 'Obra con historial crítico' },
              { key: 'nota', label: 'Detalle' },
            ]}
            rows={d.agingReservas.obrasCriticas}
          />
        )}
      </SectionBlock>

      {/* ── FIRMA BOLETO ── */}
      <SectionBlock title="✍️ Firma Boleto — Satisfacción del comprador">
        <div className="kpi-grid">
          {(d.firmaBoleto?.kpis || []).map((k, i) => (
            <div key={i} className="kpi-card">
              <p className="kpi-label">{k.label}</p>
              <p className="kpi-value">{k.actual}{k.unidad}</p>
            </div>
          ))}
        </div>

        {(d.firmaBoleto?.satisfaccion || []).length > 0 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Nivel de satisfacción con atención</p>
            <DataTable
              columns={[
                { key: 'nivel',    label: 'Nivel' },
                { key: 'pct',      label: '%', align: 'center', render: (v) => (
                  <span style={{ fontWeight: 700, color: v >= 50 ? '#16a34a' : v >= 20 ? '#d97706' : '#dc2626' }}>{v}%</span>
                )},
                { key: 'cantidad', label: 'Respuestas', align: 'center' },
              ]}
              rows={d.firmaBoleto.satisfaccion}
            />
          </div>
        )}

        {(d.firmaBoleto?.captacion || []).length > 0 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Canal de captación del comprador</p>
            <DataTable
              columns={[
                { key: 'canal',    label: 'Canal' },
                { key: 'pct',      label: '%', align: 'center', render: (v) => (
                  <span style={{ fontWeight: 700 }}>{v}%</span>
                )},
                { key: 'cantidad', label: 'Respuestas', align: 'center' },
              ]}
              rows={d.firmaBoleto.captacion}
            />
          </div>
        )}

        {(d.firmaBoleto?.cumplimientoPlazo || []).length > 0 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Cumplimiento de plazos de entrega</p>
            <DataTable
              columns={[
                { key: 'estado',   label: 'Estado' },
                { key: 'pct',      label: '%', align: 'center', render: (v) => (
                  <span style={{ fontWeight: 700, color: v >= 50 ? '#16a34a' : v >= 25 ? '#d97706' : '#dc2626' }}>{v}%</span>
                )},
                { key: 'cantidad', label: 'Casos', align: 'center' },
                { key: 'riesgo',   label: 'Riesgo asociado' },
              ]}
              rows={d.firmaBoleto.cumplimientoPlazo}
            />
          </div>
        )}

        {(d.firmaBoleto?.insights || []).length > 0 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Insights comerciales</p>
            <ol className="hallazgos-list">
              {d.firmaBoleto.insights.map((ins, i) => <li key={i}>{ins}</li>)}
            </ol>
          </div>
        )}

        {(d.firmaBoleto?.riesgos || []).length > 0 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Riesgos</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {d.firmaBoleto.riesgos.map((r, i) => (
                <li key={i} style={{ background: bgSeveridad(r.severidad), borderLeft: `3px solid ${colorSeveridad(r.severidad)}`, padding: '6px 10px', borderRadius: 4, fontSize: '0.85rem', color: '#374151' }}>
                  <span style={{ fontWeight: 700, color: colorSeveridad(r.severidad), textTransform: 'uppercase', fontSize: '0.75rem', marginRight: 6 }}>{r.severidad}</span>
                  {r.texto}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(d.firmaBoleto?.oportunidades || []).length > 0 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Oportunidades</p>
            <ul style={{ paddingLeft: 20, margin: 0, lineHeight: 1.9, fontSize: '0.85rem', color: '#374151' }}>
              {d.firmaBoleto.oportunidades.map((o, i) => <li key={i}>{o}</li>)}
            </ul>
          </div>
        )}

        {(d.firmaBoleto?.planAccion7dias || []).length > 0 && (
          <div style={{ marginTop: 16 }}>
            <p style={{ fontWeight: 700, fontSize: '0.82rem', color: '#374151', marginBottom: 6 }}>Plan de acción — próximos 7 días</p>
            <ol style={{ paddingLeft: 20, margin: 0, lineHeight: 1.9, fontSize: '0.85rem', color: '#374151' }}>
              {d.firmaBoleto.planAccion7dias.map((a, i) => <li key={i}>{a}</li>)}
            </ol>
          </div>
        )}

        {d.firmaBoleto?.conclusion && (
          <p style={{ marginTop: 16, padding: '10px 14px', background: '#eff6ff', borderLeft: '3px solid #1a56db', borderRadius: 4, fontSize: '0.87rem', color: '#1e3a8a', fontStyle: 'italic' }}>
            {d.firmaBoleto.conclusion}
          </p>
        )}
      </SectionBlock>

      {/* ── EMBLUE ── */}
      <SectionBlock title="📧 Campañas Emblue — Resumen">
        <DataTable
          columns={[
            { key: 'campana',       label: 'Campaña' },
            { key: 'openRate',      label: 'Open Rate', align: 'center', render: (v) => v != null ? (
              <span style={{ fontWeight: 700, color: v >= 15 ? '#16a34a' : v >= 10 ? '#d97706' : '#dc2626' }}>{v}%</span>
            ) : '—' },
            { key: 'ctr',           label: 'CTR',   align: 'center', render: (v) => v != null ? `${v}%` : '—' },
            { key: 'ctor',          label: 'CTOR',  align: 'center', render: (v) => v != null ? (
              <span style={{ fontWeight: 700, color: v > 100 ? '#d97706' : '#374151' }}>{v}%</span>
            ) : '—' },
            { key: 'bounceRate',    label: 'Bounce', align: 'center', render: (v) => v != null ? (
              <span style={{ fontWeight: 700, color: v > 10 ? '#b91c1c' : v > 5 ? '#dc2626' : '#16a34a' }}>{v}%</span>
            ) : '—' },
            { key: 'clasificacion', label: 'Estado', render: (v) => {
              const color = v === 'Destacada' ? '#16a34a' : v === 'Problema grave' ? '#dc2626' : '#d97706';
              return <span style={{ fontWeight: 700, color }}>{v}</span>;
            }},
          ]}
          rows={d.emblue || []}
        />
      </SectionBlock>

      <SectionBlock title="📊 Benchmarks Emblue — comparación por métrica" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'metrica',       label: 'Métrica y campaña' },
            { key: 'valorCampana',  label: 'Valor', align: 'center', render: (v) => <span style={{ fontWeight: 700 }}>{v}</span> },
            { key: 'benchmark',     label: 'Benchmark industria', align: 'center' },
            { key: 'brecha',        label: 'Brecha', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v.startsWith('+') ? '#16a34a' : '#dc2626' }}>{v}</span>
            )},
            { key: 'interpretacion',label: 'Interpretación' },
          ]}
          rows={d.embleaBenchmarks || []}
        />
      </SectionBlock>

      <SectionBlock title="🚨 Alertas críticas Emblue" defaultOpen={false}>
        {(d.embleaAlertas || []).map((a, i) => (
          <div key={i} style={{ marginBottom: 12, padding: '12px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8 }}>
            <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#b91c1c', marginBottom: 6 }}>{a.alerta}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, fontSize: '0.83rem', color: '#374151' }}>
              <div><strong>Métrica:</strong> {a.metrica}</div>
              <div><strong>Umbral:</strong> {a.umbral}</div>
              <div><strong>Riesgo:</strong> {a.riesgo}</div>
            </div>
          </div>
        ))}
      </SectionBlock>

      {/* ── CRUCES ENTRE MÓDULOS ── */}
      <SectionBlock title="🔗 Cruces entre módulos — análisis integral" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>
          Análisis de las interacciones críticas entre Ventas x Periodo, Ventas y Reservas, Firma Boleto y Emblue. Cada cruce representa una cadena causa-mecanismo-impacto que no es visible mirando los módulos de forma aislada.
        </p>
        {(d.crucesModulos || []).map((c, i) => (
          <div key={i} style={{ marginBottom: 16, padding: '14px 16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, borderLeft: '4px solid #6366f1' }}>
            <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#4338ca', marginBottom: 10 }}>
              Cruce {i + 1}: {c.causa}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: '0.84rem', color: '#374151' }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Mecanismo</p>
                <p style={{ lineHeight: 1.6 }}>{c.mecanismo}</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Impacto</p>
                <p style={{ lineHeight: 1.6 }}>{c.impacto}</p>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#b91c1c', textTransform: 'uppercase', marginBottom: 4 }}>Consecuencia si no se actúa</p>
                <p style={{ lineHeight: 1.6, color: '#dc2626' }}>{c.consecuencia}</p>
              </div>
            </div>
          </div>
        ))}
      </SectionBlock>

      {/* ── RIESGOS Y PLAN ── */}
      <SectionBlock title="⚠️ Matriz de riesgos" defaultOpen={false}>
        <RiesgoTable riesgos={d.riesgos || []} />
      </SectionBlock>

      <SectionBlock title="🗂️ Plan de acción">
        <PlanAccion plan={d.planAccion} />
      </SectionBlock>
    </>
  );
}

// ── Vista de Finanzas ─────────────────────────────────────────────────────────
function FinanzasReport({ d }) {
  const fmt = (n) => n != null ? `$${n.toLocaleString('es-AR')}` : '—';

  const cobranzaChart = [
    { name: 'Abr 2026*', anterior: d.cobranzas?.promHistorico ?? 0, actual: d.cobranzas?.abr2026 ?? 0 },
  ];

  const evolucionChart = (d.evolucionMensual || []).map(m => ({
    mes: m.mes,
    cobrado: m.cobrado,
  }));

  const moraObraChart = (d.topObrasMora || []).map(o => ({
    name: o.obra.length > 18 ? o.obra.slice(0, 18) + '…' : o.obra,
    actual: o.montomora,
    anterior: 0,
  }));

  const moraInmChart = (d.topInmobiliariasMora || []).map(i => ({
    name: i.inmobiliaria.length > 14 ? i.inmobiliaria.slice(0, 14) + '…' : i.inmobiliaria,
    actual: i.montomora,
    anterior: 0,
  }));

  const riesgoBadge = (v) => {
    const map = {
      'CRÍTICO':    { bg: '#fef2f2', color: '#b91c1c' },
      'ALTO':       { bg: '#fff7ed', color: '#c2410c' },
      'MEDIO-ALTO': { bg: '#fff7ed', color: '#c2410c' },
      'MEDIO':      { bg: '#fefce8', color: '#a16207' },
      'BAJO':       { bg: '#f0fdf4', color: '#15803d' },
    };
    const c = map[v] || { bg: '#f9fafb', color: '#374151' };
    return <span style={{ background: c.bg, color: c.color, padding: '2px 8px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 700 }}>{v}</span>;
  };

  return (
    <>
      <SectionBlock title="📋 Hallazgos principales">
        <ol className="hallazgos-list">
          {(d.hallazgos || []).map((h, i) => <li key={i}>{h}</li>)}
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
          rows={d.semaforo || []}
        />
      </SectionBlock>

      {/* ── COBRANZAS ── */}
      <SectionBlock title="💰 Cobranzas — Resultado del período">
        <p style={{ fontSize: '0.82rem', color: '#d97706', fontWeight: 600, marginBottom: 10 }}>
          ⚠️ Abril 2026 es mes en curso (parcial). El monto cobrado de {fmt(d.cobranzas?.abr2026)} es incompleto — la comparación deberá reevaluarse al cierre del mes.
        </p>
        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-label">Abr 2026 (parcial)</p>
            <p className="kpi-value" style={{ color: '#d97706' }}>{fmt(d.cobranzas?.abr2026)}</p>
            <p className="kpi-prev" style={{ color: '#16a34a' }}>+{d.cobranzas?.variacionVsMesAnterior}% vs. mes anterior</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Mar 2026</p>
            <p className="kpi-value">{fmt(d.cobranzas?.mar2026)}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Prom. histórico (64 meses)</p>
            <p className="kpi-value">{fmt(d.cobranzas?.promHistorico)}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Pendiente total</p>
            <p className="kpi-value" style={{ color: '#ea580c' }}>{fmt(d.cobranzas?.pendienteTotal)}</p>
            <p className="kpi-prev">{d.cobranzas?.pctPendienteVsHistorico}% del histórico cobrado</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Total histórico cobrado</p>
            <p className="kpi-value" style={{ fontSize: '1.1rem' }}>{fmt(d.cobranzas?.totalHistorico)}</p>
            <p className="kpi-prev">96,2% de efectividad histórica</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Pagos del mes</p>
            <p className="kpi-value">{d.cobranzas?.pagos ?? '—'}</p>
          </div>
        </div>
        <BarComparison
          data={cobranzaChart}
          periodoActual="Cobrado"
          periodoAnterior="Prom. histórico"
          title="Cobranza Abril 2026 vs. promedio histórico (64 meses)"
        />
      </SectionBlock>

      <SectionBlock title="📈 Evolución mensual de cobranzas (13 meses)">
        {evolucionChart.length > 0 && (
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={evolucionChart} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="mes" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${(v / 1000000).toFixed(1)}M`} />
                <Tooltip
                  contentStyle={{ fontSize: 13, borderRadius: 8 }}
                  formatter={(v) => [`$${v.toLocaleString('es-AR')}`, 'Cobrado']}
                />
                <ReferenceLine
                  y={d.cobranzas?.promHistorico}
                  stroke="#f59e0b"
                  strokeDasharray="6 3"
                  label={{ value: 'Prom. hist.', position: 'insideTopRight', fontSize: 11, fill: '#92400e' }}
                />
                <Bar dataKey="cobrado" name="Cobrado" fill="#1a56db" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p style={{ fontSize: 11, color: '#6b7280', marginTop: 4, textAlign: 'center' }}>
              * Abr 2026 es mes en curso (parcial). Pico: Ago 2025 ($2,0M). Valle: Oct 2025 ($867K, -37,4%).
            </p>
          </div>
        )}
      </SectionBlock>

      {(d.topObrasCobro || []).length > 0 && (
        <SectionBlock title="🏆 Top 5 obras por cobro histórico" defaultOpen={false}>
          <DataTable
            columns={[
              { key: 'obra',           label: 'Obra' },
              { key: 'cobrado',        label: 'Cobrado', align: 'right', render: (v) => fmt(v) },
              { key: 'pendiente',      label: 'Pendiente', align: 'right', render: (v) => fmt(v) },
              { key: 'efectividad',    label: 'Efectividad', align: 'center', render: (v) => (
                <span style={{ fontWeight: 700, color: v >= 98 ? '#16a34a' : v >= 95 ? '#d97706' : '#dc2626' }}>{v}%</span>
              )},
              { key: 'interpretacion', label: 'Interpretación' },
            ]}
            rows={d.topObrasCobro}
          />
        </SectionBlock>
      )}

      {(d.topObrasPendiente || []).length > 0 && (
        <SectionBlock title="🏢 Top 5 obras por pendiente" defaultOpen={false}>
          <DataTable
            columns={[
              { key: 'obra',         label: 'Obra' },
              { key: 'pendiente',    label: 'Pendiente', align: 'right', render: (v) => fmt(v) },
              { key: 'cobrado',      label: 'Cobrado', align: 'right', render: (v) => fmt(v) },
              { key: 'pctPendiente', label: '% pend/obra', align: 'center', render: (v) => (
                <span style={{ fontWeight: 700, color: v >= 30 ? '#dc2626' : v >= 10 ? '#ea580c' : '#374151' }}>{v}%</span>
              )},
              { key: 'riesgo', label: 'Riesgo' },
            ]}
            rows={d.topObrasPendiente}
          />
        </SectionBlock>
      )}

      <SectionBlock title="🏬 Top 5 inmobiliarias (cobro, pendiente, efectividad)" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'inmobiliaria',  label: 'Inmobiliaria' },
            { key: 'cobrado',       label: 'Cobrado', align: 'right', render: (v) => fmt(v) },
            { key: 'pendiente',     label: 'Pendiente', align: 'right', render: (v) => fmt(v) },
            { key: 'efectividad',   label: 'Efectividad', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 98 ? '#16a34a' : v >= 95 ? '#d97706' : '#dc2626' }}>{v}%</span>
            )},
            { key: 'morosos',       label: 'Morosos', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 10 ? '#dc2626' : v >= 5 ? '#ea580c' : '#374151' }}>{v}</span>
            )},
            { key: 'clasificacion', label: 'Clasificación', render: (v) => {
              const color = v === 'PERFORMANCE ÓPTIMA' ? '#16a34a' : v === 'PERFORMANCE ACEPTABLE' ? '#d97706' : v === 'RIESGO MEDIO' ? '#ea580c' : '#dc2626';
              return <span style={{ fontWeight: 700, color }}>{v}</span>;
            }},
          ]}
          rows={d.topInmobiliarias || []}
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Inmobiliarias con más pendiente — Alerta DIRECTO/S/D" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#b91c1c', fontWeight: 600, marginBottom: 10 }}>
          DIRECTO/S/D concentra $848.270 (22,4% del pendiente total) con efectividad del 81% y 0 morosos registrados — discrepancia estructural que requiere auditoría urgente.
        </p>
        <DataTable
          columns={[
            { key: 'inmobiliaria', label: 'Inmobiliaria' },
            { key: 'pendiente',    label: 'Pendiente', align: 'right', render: (v) => fmt(v) },
            { key: 'efectividad',  label: 'Efectividad', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 97 ? '#16a34a' : v >= 93 ? '#d97706' : '#dc2626' }}>{v}%</span>
            )},
            { key: 'morosos',      label: 'Morosos', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 10 ? '#dc2626' : v >= 5 ? '#ea580c' : v === 0 ? '#6b7280' : '#374151' }}>{v}</span>
            )},
            { key: 'riesgo',       label: 'Riesgo', align: 'center', render: (v) => riesgoBadge(v) },
            { key: 'alerta',       label: 'Alerta analítica' },
          ]}
          rows={d.topInmobiliariasConPendiente || []}
        />
      </SectionBlock>

      {/* ── MORA ── */}
      <SectionBlock title="🔴 Mora — Dashboard">
        <div className="kpi-grid">
          <div className="kpi-card">
            <p className="kpi-label">Mora total</p>
            <p className="kpi-value" style={{ color: '#dc2626' }}>{fmt(d.mora?.moraTotal)}</p>
            <p className="kpi-prev">{d.mora?.pctMora}% de cartera activa en mora</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Deudores únicos</p>
            <p className="kpi-value">{d.mora?.deudoresUnicos ?? '—'}</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Deuda no vencida</p>
            <p className="kpi-value" style={{ color: '#374151' }}>{fmt(d.mora?.noVencida)}</p>
            <p className="kpi-prev">Único colchón antes de mora 100% ⚠️</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">Índice Gini</p>
            <p className="kpi-value">{d.mora?.gini ?? '—'}</p>
            <p className="kpi-prev">Dispersión moderada (crítico: {'>'}0,6)</p>
          </div>
          <div className="kpi-card">
            <p className="kpi-label">HHI por deudor</p>
            <p className="kpi-value">{d.mora?.hhi ?? '—'}</p>
            <p className="kpi-prev">No concentrado (crítico: {'>'}0,15)</p>
          </div>
        </div>
        <p style={{ fontSize: '0.82rem', color: '#4b5563', marginTop: 12, padding: '8px 12px', background: '#fef9c3', borderLeft: '3px solid #d97706', borderRadius: 4 }}>
          La concentración crítica no está en los deudores individuales (HHI bajo = 0,062) sino en las obras: 66,4% de mora en top 3 obras (EL PORTAL DE ROCA, Yatay 754, HORNOS 2719) y 63,6% en top 3 inmobiliarias (Particular, Di Paolo, Marcelo Russo).
        </p>
      </SectionBlock>

      {(d.conceptoNoEstandar || []).length > 0 && (
        <SectionBlock title="🚨 Alerta — Concepto no estándar en cartera">
          <p style={{ fontSize: '0.85rem', color: '#b91c1c', fontWeight: 600, marginBottom: 10 }}>
            4 deudores con conceptos REFUERZO/REFUERZO1/REFUERZO2/REFUERZO4 concentran $67.486 (36,8% de mora total). Todos en inmobiliaria Particular, excepto GUILLERMO PERALTA (Veronica Espinosa). Requieren validación legal antes de continuar cobranza.
          </p>
          <DataTable
            columns={[
              { key: 'deudor',       label: 'Deudor' },
              { key: 'obra',         label: 'Obra' },
              { key: 'uf',           label: 'UF', align: 'center' },
              { key: 'concepto',     label: 'Concepto', align: 'center', render: (v) => (
                <span style={{ fontWeight: 700, color: '#dc2626', background: '#fef2f2', padding: '2px 8px', borderRadius: 99, fontSize: '0.78rem' }}>{v}</span>
              )},
              { key: 'monto',        label: 'Monto', align: 'right', render: (v) => fmt(v) },
              { key: 'pctMoraTotal', label: '% mora total', align: 'center', render: (v) => (
                <span style={{ fontWeight: 700, color: '#dc2626' }}>{v}%</span>
              )},
              { key: 'riesgo',       label: 'Riesgo', align: 'center', render: (v) => riesgoBadge(v) },
              { key: 'descripcion',  label: 'Análisis causal' },
            ]}
            rows={d.conceptoNoEstandar || []}
          />
        </SectionBlock>
      )}

      <SectionBlock title="👤 Top 5 deudores en mora" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'deudor',       label: 'Deudor' },
            { key: 'montomora',    label: 'Monto mora', align: 'right', render: (v) => fmt(v) },
            { key: 'obra',         label: 'Obra' },
            { key: 'inmobiliaria', label: 'Inmobiliaria', align: 'center' },
            { key: 'concepto',     label: 'Concepto', align: 'center', render: (v) => v !== 'Cuota' ? (
              <span style={{ fontWeight: 700, color: '#dc2626', fontSize: '0.78rem' }}>{v}</span>
            ) : v },
          ]}
          rows={d.topDeudoresMora || []}
        />
      </SectionBlock>

      <SectionBlock title="🏗️ Top 5 obras en mora" defaultOpen={false}>
        {moraObraChart.length > 0 && (
          <BarComparison
            data={moraObraChart}
            periodoActual="Mora ($)"
            title="Mora por obra — top 5 (Abril 2026)"
          />
        )}
        <DataTable
          columns={[
            { key: 'obra',      label: 'Obra' },
            { key: 'montomora', label: 'Monto mora', align: 'right', render: (v) => fmt(v) },
            { key: 'pct',       label: '% mora total', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 30 ? '#dc2626' : v >= 10 ? '#ea580c' : '#374151' }}>{v}%</span>
            )},
            { key: 'deudores',  label: 'Deudores', align: 'center' },
          ]}
          rows={d.topObrasMora || []}
        />
      </SectionBlock>

      <SectionBlock title="🏬 Top 5 inmobiliarias en mora" defaultOpen={false}>
        {moraInmChart.length > 0 && (
          <BarComparison
            data={moraInmChart}
            periodoActual="Mora ($)"
            title="Mora por inmobiliaria — top 5 (Abril 2026)"
          />
        )}
        <DataTable
          columns={[
            { key: 'inmobiliaria', label: 'Inmobiliaria' },
            { key: 'montomora',    label: 'Monto mora', align: 'right', render: (v) => fmt(v) },
            { key: 'deudores',     label: 'Deudores', align: 'center' },
            { key: 'moraPromedio', label: 'Mora promedio', align: 'right', render: (v) => fmt(v) },
          ]}
          rows={d.topInmobiliariasMora || []}
        />
      </SectionBlock>

      <SectionBlock title="🎯 Segmentación táctica de deudores" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'segmento', label: 'Segmento', width: '170px', render: (v) => <span style={{ fontWeight: 700 }}>{v}</span> },
            { key: 'criterio', label: 'Criterio', width: '150px' },
            { key: 'cantidad', label: 'Deudores', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v === 0 ? '#16a34a' : v >= 18 ? '#ea580c' : '#374151' }}>{v}</span>
            )},
            { key: 'deudores', label: 'Quiénes son' },
            { key: 'tactica',  label: 'Táctica recomendada' },
          ]}
          rows={d.segmentacionTactica || []}
        />
      </SectionBlock>

      <SectionBlock title="📊 Composición interna de la mora" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'concepto', label: 'Concepto' },
            { key: 'monto',    label: 'Monto', align: 'right', render: (v) => fmt(v) },
            { key: 'pct',      label: '% del total', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 40 ? '#dc2626' : v >= 20 ? '#ea580c' : '#374151' }}>{v}%</span>
            )},
            { key: 'nota', label: 'Nota' },
          ]}
          rows={d.mora?.desglose || []}
        />
      </SectionBlock>

      <SectionBlock title="📊 Concentración de cobranza histórica" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'segmento', label: 'Segmento', width: '200px' },
            { key: 'detalle',  label: 'Componentes' },
            { key: 'cobrado',  label: 'Cobrado', align: 'right', render: (v) => fmt(v) },
            { key: 'pctTotal', label: '% del total histórico', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 50 ? '#dc2626' : v >= 30 ? '#ea580c' : '#374151' }}>{v}%</span>
            )},
          ]}
          rows={d.concentracionCobranza || []}
        />
        <p style={{ marginTop: 10, padding: '8px 12px', background: '#fff7ed', borderLeft: '3px solid #ea580c', borderRadius: 4, fontSize: '0.84rem', color: '#374151' }}>
          Top 5 inmobiliarias concentran el 61,8% del cobro histórico. Si alguna de las top 3 (Particular, Zelaschi, Yamil Remax) interrumpe operación, el impacto inmediato sobre caja futura sería del 15-20% mensual.
        </p>
      </SectionBlock>

      <SectionBlock title="💡 Impacto potencial de recuperación rápida" defaultOpen={false}>
        <p style={{ fontSize: '0.84rem', color: '#374151', marginBottom: 12, lineHeight: 1.6 }}>
          Campaña focalizada en las 3 obras o 3 inmobiliarias con mayor pendiente — los dos frentes no son mutuamente excluyentes.
        </p>
        <DataTable
          columns={[
            { key: 'escenario',        label: 'Escenario', width: '260px' },
            { key: 'descripcion',      label: 'Componentes' },
            { key: 'montoRecuperable', label: 'Monto recuperable', align: 'right', render: (v) => fmt(v) },
            { key: 'pctPendiente',     label: '% del pendiente', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: '#16a34a' }}>{v}%</span>
            )},
          ]}
          rows={d.impactoRecuperacion || []}
        />
      </SectionBlock>

      <SectionBlock title="⚠️ Riesgo de transformación — pendiente no vencido → mora" defaultOpen={false}>
        <p style={{ fontSize: '0.84rem', color: '#374151', marginBottom: 12, lineHeight: 1.6 }}>
          El único deudor sin mora en cartera es{' '}
          <strong style={{ color: '#dc2626' }}>PABLO GASTON SANDOVAL (BOSCH Y ORO, Di Paolo, $1.500 CUOTA3)</strong>{' '}
          con vencimiento próximo. Si cae en mora, la cartera alcanza 100% de morosidad — colapso total.
        </p>
        <DataTable
          columns={[
            { key: 'escenario',      label: 'Escenario', width: '220px', render: (v) => <span style={{ fontWeight: 700 }}>{v}</span> },
            { key: 'descripcion',    label: 'Base del cálculo' },
            { key: 'montoRiesgo',    label: 'Mora adicional', align: 'right', render: (v) => fmt(v) },
            { key: 'moraProyectada', label: 'Mora proyectada', align: 'right', render: (v) => <span style={{ fontWeight: 700 }}>{fmt(v)}</span> },
            { key: 'variacionPct',   label: 'Variación', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 100 ? '#dc2626' : v >= 48 ? '#ea580c' : '#d97706' }}>+{v}%</span>
            )},
            { key: 'probabilidad',   label: 'Probabilidad' },
          ]}
          rows={d.riesgoTransformacion || []}
        />
      </SectionBlock>

      <SectionBlock title="🔗 Cruces entre los reportes — análisis integral" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>
          Interacciones críticas entre el reporte de Cobranzas y el reporte de Deudores/Mora. Cada cruce expone un riesgo invisible mirando los reportes de forma aislada.
        </p>
        {(d.crucesModulos || []).map((c, i) => (
          <div key={i} style={{ marginBottom: 16, padding: '14px 16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, borderLeft: '4px solid #6366f1' }}>
            <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#4338ca', marginBottom: 10 }}>
              Cruce {i + 1}: {c.causa}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: '0.84rem', color: '#374151' }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Mecanismo</p>
                <p style={{ lineHeight: 1.6 }}>{c.mecanismo}</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Impacto</p>
                <p style={{ lineHeight: 1.6 }}>{c.impacto}</p>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#b91c1c', textTransform: 'uppercase', marginBottom: 4 }}>Consecuencia si no se actúa</p>
                <p style={{ lineHeight: 1.6, color: '#dc2626' }}>{c.consecuencia}</p>
              </div>
            </div>
          </div>
        ))}
      </SectionBlock>

      <SectionBlock title="⚠️ Matriz de riesgos" defaultOpen={false}>
        <RiesgoTable riesgos={d.riesgos || []} />
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

      <SectionBlock title="🏗️ Matriz obra × rubro — top 10 obras" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'obra',       label: 'Obra' },
            { key: 'historicos', label: 'Históricos', align: 'center', render: (v) => <span style={{ fontWeight: 700 }}>{v}</span> },
            { key: 'activos',    label: 'Activos', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 7 ? '#dc2626' : v >= 4 ? '#ea580c' : '#374151' }}>{v}</span>
            )},
            { key: 'rubro1', label: 'Rubro #1' },
            { key: 'rubro2', label: 'Rubro #2' },
            { key: 'rubro3', label: 'Rubro #3' },
          ]}
          rows={d.matrizObraRubro || []}
        />
      </SectionBlock>

      <SectionBlock title="🚧 Cuellos de botella en Postventa" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'etapa',          label: 'Etapa bloqueante', width: '200px' },
            { key: 'casosEstimados', label: 'Casos afectados', align: 'center' },
            { key: 'causaRaiz',      label: 'Causa raíz hipotética' },
            { key: 'consecuencia',   label: 'Consecuencia si no se interviene' },
          ]}
          rows={d.cuellosDeBotella || []}
        />
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

      <SectionBlock title="📊 Calidad del tráfico — volumen vs. retención" defaultOpen={false}>
        <DataTable
          columns={[
            { key: 'segmento',           label: 'Segmento' },
            { key: 'sesiones',           label: 'Sesiones', align: 'center', render: (v) => v?.toLocaleString('es-AR') ?? '—' },
            { key: 'pctTotal',           label: '% del total', align: 'center', render: (v) => `${v}%` },
            { key: 'rebotePromedio',     label: 'Rebote prom.', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v > 60 ? '#dc2626' : v > 40 ? '#ea580c' : '#16a34a' }}>{v}%</span>
            )},
            { key: 'engagementPromedio', label: 'Engagement prom.', align: 'center', render: (v) => `${v}%` },
          ]}
          rows={d.calidadTrafico || []}
        />
        <p style={{ marginTop: 10, padding: '8px 12px', background: '#fef2f2', borderLeft: '3px solid #dc2626', borderRadius: 4, fontSize: '0.84rem', color: '#374151' }}>
          Los proyectos específicos tienen mayor tasa de rebote. El problema no es de contenido sino del <strong>template de landing page</strong> — todas comparten el mismo diseño y ese diseño no funciona.
        </p>
      </SectionBlock>

      <SectionBlock title="🔴 Páginas de alto riesgo — rebote &gt;70% o engagement &lt;30%">
        <DataTable
          columns={[
            { key: 'pagina',      label: 'Landing Page', width: '180px' },
            { key: 'rebote',      label: '% Rebote', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v >= 90 ? '#7f1d1d' : v >= 70 ? '#b91c1c' : '#ea580c' }}>{v}%</span>
            )},
            { key: 'engagement',  label: '% Engagement', align: 'center', render: (v) => (
              <span style={{ fontWeight: 700, color: v < 10 ? '#b91c1c' : v < 30 ? '#ea580c' : '#374151' }}>{v}%</span>
            )},
            { key: 'hipotesis',   label: 'Hipótesis causal' },
            { key: 'oportunidad', label: 'Oportunidad de mejora' },
          ]}
          rows={d.segmentoRiesgo || []}
        />
      </SectionBlock>

      <SectionBlock title="🔗 Cruces entre módulos — análisis integral" defaultOpen={false}>
        <p style={{ fontSize: '0.85rem', color: '#374151', marginBottom: 14, lineHeight: 1.6 }}>
          Interacciones críticas entre Postventa, Tráfico Web y los módulos de Obras y Comercial. Cada cruce representa una cadena causa-mecanismo-impacto invisible mirando los módulos de forma aislada.
        </p>
        {(d.crucesModulos || []).map((c, i) => (
          <div key={i} style={{ marginBottom: 16, padding: '14px 16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 8, borderLeft: '4px solid #6366f1' }}>
            <p style={{ fontWeight: 700, fontSize: '0.88rem', color: '#4338ca', marginBottom: 10 }}>
              Cruce {i + 1}: {c.causa}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, fontSize: '0.84rem', color: '#374151' }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Mecanismo</p>
                <p style={{ lineHeight: 1.6 }}>{c.mecanismo}</p>
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginBottom: 4 }}>Impacto</p>
                <p style={{ lineHeight: 1.6 }}>{c.impacto}</p>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <p style={{ fontWeight: 700, fontSize: '0.75rem', color: '#b91c1c', textTransform: 'uppercase', marginBottom: 4 }}>Consecuencia si no se actúa</p>
                <p style={{ lineHeight: 1.6, color: '#dc2626' }}>{c.consecuencia}</p>
              </div>
            </div>
          </div>
        ))}
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

  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [analysisError, setAnalysisError] = useState(null);

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

      <div className="report-body">
        <div className="report-content">
          {activeArea === 'obras'     && <ObrasReport     d={area.data} />}
          {activeArea === 'comercial' && <ComercialReport d={area.data} />}
          {activeArea === 'finanzas'  && <FinanzasReport  d={area.data} />}
          {activeArea === 'cx'        && <CxReport        d={area.data} />}
          {activeArea === 'analisis'  && (
            <AnalisisIntegral
              result={analysisResult}
              loading={analysisLoading}
              error={analysisError}
              onResult={setAnalysisResult}
              onLoading={setAnalysisLoading}
              onError={setAnalysisError}
            />
          )}
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

        {activeArea !== 'mapa' && activeArea !== 'analisis' && (
          <div className="report-chat-panel">
            <Chat fixedArea={activeArea} />
          </div>
        )}
      </div>
    </div>
    </AppLayout>
  );
}
