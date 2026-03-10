// ── MÓDULO 4: CX (Customer Experience) ───────────────────────────────────────
// Período: Febrero 2026

export const semaforo = [
  { subarea: 'Postventa',           estado: 'Mejorando', color: 'verde',    metrica: 'Tasa resolución 1.87x (43 salidos / 23 entrados en Ene 2026); stock neto bajando', umbral: '> 1.0 resolución, stock baja' },
  { subarea: 'Encuesta Postventa',  estado: 'Atento',    color: 'amarillo', metrica: 'Satisfacción global 78.8%, insatisfacción 19.2% (10/52 respuestas)', umbral: 'Alerta > 15% insatisfechos' },
];

export const hallazgos = [
  'Mejora estructural en la operativa de postventa: baja el stock de reclamos activos (94 activos) y la tasa de resolución supera el estándar de sostenibilidad operacional (1.87x > 1.0). Fuente: Postventa.',
  'Principal cuello de botella: "Humedad y Filtraciones" (224 casos, 30.5% del total histórico). Amenaza recurrente para la experiencia del cliente y reputación de obras específicas. Fuente: Postventa.',
  'El 19.2% de clientes insatisfechos constituye un riesgo reputacional directo: si no se actúa, puede erosionar la recomendación y la fidelización. Fuente: Encuesta Postventa.',
];

// ── Postventa — KPIs globales ──
export const kpisPostventa = [
  { label: 'Reclamos activos',       actual: 94,   anterior: null, unidad: '',    tendenciaBuena: 'down', umbral: '< 100' },
  { label: 'En proceso',             actual: 33,   anterior: null, unidad: '',    tendenciaBuena: 'down', umbral: '< 40' },
  { label: 'Cerrados históricos',    actual: 639,  anterior: null, unidad: '',    tendenciaBuena: 'up',   umbral: 'N/A' },
  { label: 'Tasa resolución (Ene 26)',actual: 1.87, anterior: null, unidad: 'x',  tendenciaBuena: 'up',   umbral: '> 1.0' },
];

// Evolución mensual
export const evolucionMensual = [
  { mes: 'Enero 2026', entrados: 23, salidos: 43, tasa: 1.87, neto: -20, interpretacion: 'Alta efectividad reciente, backlog cae' },
];

// Casos críticos por antigüedad
export const casosCriticos = [
  { reclamo: 'Reclamo 1', obra: 'Mitre 345',  diasAbierto: 799, estado: 'Abierto' },
  { reclamo: 'Reclamo 2', obra: 'Yatay',      diasAbierto: null, estado: 'Abierto' },
  { reclamo: 'Reclamo 3', obra: 'Pellegrini', diasAbierto: null, estado: 'Abierto' },
];

// Ranking de rubros por volumen
export const rubrosPorVolumen = [
  { rubro: 'Humedad y Filtraciones',   cantidad: 224, pct: 30.5, prioridad: 1 },
  { rubro: 'Otros',                    cantidad: 177, pct: 24.1, prioridad: 2 },
  { rubro: 'Puertas y Ventanas',       cantidad: 157, pct: 21.4, prioridad: 3 },
  { rubro: 'Estructura y Mampostería', cantidad: 140, pct: 19.1, prioridad: 4 },
  { rubro: 'Gas y Artefactos cocina',  cantidad: 117, pct: 16.0, prioridad: 5 },
];

// ── Encuesta Postventa ──
export const kpisEncuesta = [
  { label: 'Total respuestas',              actual: 52,   anterior: null, unidad: '',  tendenciaBuena: 'up' },
  { label: 'Satisfacción global ("Sí")',    actual: 78.8, anterior: null, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Insatisfechos ("No")',          actual: 19.2, anterior: null, unidad: '%', tendenciaBuena: 'down' },
  { label: 'Atención "Muy buena"',          actual: 69.2, anterior: null, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Cumplimiento tiempo esperado',  actual: 71.2, anterior: null, unidad: '%', tendenciaBuena: 'up' },
];

export const riesgos = [
  { riesgo: 'Erosión de reputación por 19.2% insatisfechos',            probabilidad: 'media', impacto: 'alto',        area: 'Postventa',   consecuencia: 'Referenciación y ventas futuras afectadas' },
  { riesgo: 'Cronificación de reclamos antiguos (> 799 días, Mitre 345)',probabilidad: 'alta',  impacto: 'muy alto',    area: 'Operaciones', consecuencia: 'Potencial litigio y daño institucional' },
  { riesgo: 'Sobrecarga por humedades (224 casos)',                      probabilidad: 'alta',  impacto: 'medio-alto',  area: 'Producción',  consecuencia: 'Costos, backlog, percepción de mala calidad' },
  { riesgo: 'Procesamiento insuficiente de instalaciones (26.9% reclamos)',probabilidad: 'alta', impacto: 'medio',      area: 'Postventa',   consecuencia: 'Carga sobre equipo, insatisfacción recurrente' },
  { riesgo: 'Debilidad análisis por falta de feedback cualitativo',      probabilidad: 'alta',  impacto: 'medio',      area: 'Comercial/CX', consecuencia: 'Diseño de mejoras limitado, baja anticipación' },
];

export const planAccion = {
  h72: [
    { accion: 'Contactar proactivamente a 10 clientes insatisfechos',  porQue: 'Remediar insatisfacción, evitar NPS negativo', areaLider: 'Postventa', kpi: '% satisfacción, NPS', riesgoMitigado: 'Erosión reputacional' },
    { accion: 'Auditar reclamos abiertos > 365 días',                  porQue: 'Reducir lote antiguo, evitar cronificación y litigios', areaLider: 'Operaciones', kpi: 'Backlog, antigüedad promedio', riesgoMitigado: 'Cronificación de reclamos antiguos' },
  ],
  d30: [
    { accion: 'Priorización operativa de humedades (top 10%)',         porQue: 'Volumen crítico, mayor detractor de satisfacción', areaLider: 'Producción', kpi: '% backlog humedades', riesgoMitigado: 'Sobrecarga y reputación' },
    { accion: 'Capacitar equipo en gestión de instalaciones',          porQue: 'Motivo de mayor interacción, foco de insatisfacción', areaLider: 'Postventa', kpi: 'Motivo contacto, satisfacción', riesgoMitigado: 'Insatisfacción por instalaciones' },
    { accion: 'Rediseñar encuesta feedback e incentivar textuales',    porQue: 'Mejorar profundidad de análisis para intervenciones', areaLider: 'Comercial / CX', kpi: '% comentarios en encuestas', riesgoMitigado: 'Debilidad de inteligencia CX' },
  ],
  d90: [
    { accion: 'Proceso preventivo de calidad preentrega',              porQue: 'Reducir reclamos origen instalaciones/humedad', areaLider: 'Producción', kpi: '% reclamos preventivos', riesgoMitigado: 'Sobrecarga postventa' },
    { accion: 'Implementar tablero/alerta de antigüedad de reclamos',  porQue: 'Mantener control visible sobre casos crónicos', areaLider: 'CX', kpi: 'Antigüedad promedio', riesgoMitigado: 'Cronificación de casos' },
    { accion: 'Reporte mensual integrado para Directorio',             porQue: 'Mejor toma de decisión estratégica', areaLider: 'Dirección', kpi: 'Calidad de información', riesgoMitigado: 'Riesgos sistémicos no atendidos' },
  ],
};
