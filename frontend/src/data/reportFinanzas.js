// ── MÓDULO 3: FINANZAS ────────────────────────────────────────────────────────
// Período: Marzo 2026

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
// color: 'green' | 'yellow' | 'orange' | 'red'
export const semaforo = [
  {
    subarea: 'Factibilidades',
    estado: 'Crítico',
    color: 'red',
    metrica: '35 vencidas vs 30 vigentes reales; 7 sin fecha asignada',
    umbral: '>20% obras vencidas sobre vigentes = Rojo',
  },
  {
    subarea: 'Cobranzas',
    estado: 'Alerta',
    color: 'orange',
    metrica: '-71.5% cobranza vs histórico mensual; $3.198.768 pendiente (2,9%)',
    umbral: 'Caída >70% sobre histórico mensual = Naranja',
  },
  {
    subarea: 'Deudores / Mora',
    estado: 'Riesgo moderado',
    color: 'yellow',
    metrica: '100% mora sobre cartera; 81 deudores; Gini 0,347 / HHI 0,018',
    umbral: 'Mora >80% y diversificación Gini <0,4 = Amarillo',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'La mayoría de las obras de factibilidad están vencidas (35 vs 30 vigentes), con 7 obras sin fecha asignada, constituyendo alto riesgo operativo y reputacional.',
  'La cobranza del mes en curso representa solo el 28,5% del promedio histórico mensual ($436.842 vs $1.530.483), con fuerte concentración en pocas obras e inmobiliarias.',
  'El 100% de la deuda registrada está en mora ($151.556 sobre $151.556 total), pero se encuentra diversificada (Gini 0,347), mitigando el riesgo sistémico inmediato.',
];

// ── FACTIBILIDADES ────────────────────────────────────────────────────────────
export const factibilidades = {
  vigentes: 30,
  vencidas: 35,
  sinFecha: 7,
  vencenMenos30: 0,
};

export const vencimientosInminentes = [
  // No hay vencimientos que expiren en los próximos 30 días según el reporte.
];

export const falsosVigentes = [
  { obra: 'Las Malvinas 7271',  servicio: 'AYSA',   contratista: 'CMC',            consecuencia: 'Exposición a sanciones por operar sin factibilidad vigente' },
  { obra: 'Vergara 2250',       servicio: 'Edenor', contratista: 'No especificado', consecuencia: 'Distorsión gerencial, posible intervención legal' },
  { obra: 'Roca Golf',          servicio: 'Edenor', contratista: 'No especificado', consecuencia: 'Acumulación de costos y eventual paralización de obra' },
  { obra: 'Frugone / La Merced',servicio: 'Edenor', contratista: 'No especificado', consecuencia: 'Demoras, potencial multa por incumplimiento regulatorio' },
  { obra: '25 de Mayo 956',     servicio: 'Edenor', contratista: 'No especificado', consecuencia: 'Deficiente trazabilidad, exposición financiera' },
];

export const cuellosBottella = [
  { obra: 'Frugone / La Merced',              bloqueo: 'Solicitud de cámara', prestadora: 'Edenor',     impacto: 'Costo oculto, dilación de habilitación de obra' },
  { obra: 'Las Malvinas 7271',                bloqueo: 'Solicitud de cámara', prestadora: 'Edenor/CMC', impacto: 'Requiere permisos extra, alto costo adicional' },
  { obra: 'Bosch y Oro',                      bloqueo: 'Solicitud de cámara', prestadora: 'Edenor/CMC', impacto: 'Complicaciones logísticas en cronograma' },
  { obra: 'Ntra. Sra. del Buen Viaje 146',    bloqueo: 'Falta de proyecto',   prestadora: 'Edenor/FSC', impacto: 'Retraso en inicio de aprobación' },
  { obra: 'El Portal de Morón',               bloqueo: 'Falta de proyecto',   prestadora: 'Edenor/CMC', impacto: 'Imposibilidad de inicio de obra' },
];

// ── COBRANZAS ─────────────────────────────────────────────────────────────────
export const cobranzas = {
  mar2026: 436842,
  feb2026: 862291,
  promHistorico: 1530483,
  variacionVsHistorico: -71.5,
  pagos: 102,
  totalHistorico: 110362089,
  pendienteTotal: 3198768,
  pctPendienteVsHistorico: 2.9,
};

export const topObrasPendiente = [
  { obra: 'El Portal de Roca',        pendiente: 874663, riesgo: 'Principal cuello de botella de caja' },
  { obra: 'Valentín Gómez 4736/44',   pendiente: 406645, riesgo: 'Obra con tendencia elevada a mora' },
  { obra: 'Hornos 2719',              pendiente: 399004, riesgo: 'Obra foco en problemas de pagos recurrentes' },
  { obra: 'Yatay 754 / Abel Costa 761',pendiente: 190754, riesgo: 'Riesgo medio, requiere seguimiento' },
  { obra: 'Virasoro 325',             pendiente: 158080, riesgo: 'Riesgo bajo, monto residual' },
];

export const topInmobiliarias = [
  { inmobiliaria: 'Particular',    cobrado: 19805469, pendiente: 736472, efectividad: 96, morosos: 9,  clasificacion: 'Riesgo operativo medio por pendiente y morosos' },
  { inmobiliaria: 'Zelaschi',      cobrado: 14970724, pendiente: 145766, efectividad: 99, morosos: 6,  clasificacion: 'Buena performance, bajo pendiente' },
  { inmobiliaria: 'Yamil Remax',   cobrado: 8783255,  pendiente: 724052, efectividad: 92, morosos: 3,  clasificacion: 'Prioridad: bajo nº morosos, pendiente alto' },
  { inmobiliaria: 'Di Paolo',      cobrado: 8468457,  pendiente: 523500, efectividad: 94, morosos: 27, clasificacion: 'Alerta: efectividad baja, alto nº morosos' },
  { inmobiliaria: 'Marcelo Russo', cobrado: 7567850,  pendiente: 271910, efectividad: 97, morosos: 5,  clasificacion: 'Buena performance, bajo moroso' },
];

// ── MORA ──────────────────────────────────────────────────────────────────────
export const mora = {
  deudaTotal: 151556,
  moraTotal: 151556,
  pctMora: 100,
  deudoresUnicos: 81,
  noVencida: 0,
  gini: 0.347,
  hhi: 0.018,
};

export const topDeudoresMora = [
  { deudor: 'Liza A. Palladino Prado',   montomora: 6603, obra: 'Urquiza 4550' },
  { deudor: 'Axel Demian Resnik',         montomora: 5536, obra: 'Hornos 2719' },
  { deudor: 'Fernando Fidel Femenia',     montomora: 4400, obra: 'Valentín Gómez 4736 / Urquiza' },
  { deudor: 'Roberto Hercules Zarlenga',  montomora: 4100, obra: 'El Portal de Roca' },
  { deudor: 'Ricardo Martín Claveras',    montomora: 4040, obra: 'El Portal de Roca' },
];

export const topObrasMora = [
  { obra: 'El Portal de Roca',    montomora: 33483, pct: 22.09 },
  { obra: 'Hornos 2719',          montomora: 31056, pct: 20.49 },
  { obra: 'Valentín Gómez 4736',  montomora: 23090, pct: 15.24 },
  { obra: 'Urquiza 4550',         montomora: 20103, pct: 13.26 },
  { obra: 'Virasoro 325',         montomora: 12110, pct: 7.99 },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
// probabilidad / impacto: 'alta' | 'media' | 'baja'
export const riesgos = [
  {
    riesgo: 'Paralización de obras por factibilidades vencidas (35 vs 30 vigentes)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Operaciones / Legales',
    consecuencia: 'Interrupción de obras, sanciones regulatorias y pérdida de ingresos',
  },
  {
    riesgo: 'Exposición a incobrabilidad por concentración de cobro (Top 5 = 53,8%)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Finanzas / Cobranzas',
    consecuencia: 'Caída de caja y necesidad de provisiones contables',
  },
  {
    riesgo: 'Subestimación del riesgo real por falsos vigentes en factibilidades',
    probabilidad: 'media',
    impacto: 'alta',
    area: 'Dirección de Proyectos',
    consecuencia: 'Distorsión de P&L y desvío estratégico en decisiones',
  },
  {
    riesgo: 'Deficiencia de liquidez operativa por mora del 100%',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Finanzas',
    consecuencia: 'Default operativo y freno a nuevas inversiones',
  },
  {
    riesgo: 'Sanciones regulatorias por 7 obras sin fecha asignada',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Legales / Proyectos',
    consecuencia: 'Sanción económica, pérdida de trazabilidad y daño reputacional',
  },
  {
    riesgo: 'Concentración de incidencias en Edenor (22) y 3 de Febrero (18)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Operaciones',
    consecuencia: 'Paralización geográfica de varios proyectos y desvíos en plazos generales',
  },
];

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Revisar y asignar fecha a las 7 obras sin fecha asignada',
      porQue: 'Evitar sanciones regulatorias y mejorar trazabilidad operativa',
      areaLider: 'Proyectos / Legales',
      kpi: '% obras con fecha asignada',
      riesgoMitigado: 'Sanción reglamentaria y pérdida de control operativo',
    },
    {
      accion: 'Contacto directo con los Top 5 deudores en mora para negociación',
      porQue: 'Reducción rápida de mora y recuperación de caja inmediata',
      areaLider: 'Cobranzas',
      kpi: '% mora recuperada',
      riesgoMitigado: 'Incobrabilidad y pérdida de flujo de caja',
    },
    {
      accion: 'Validar vigencias y depurar los "falsos vigentes" del sistema',
      porQue: 'Prevenir decisiones equivocadas por información gerencial engañosa',
      areaLider: 'Proyectos / Sistemas',
      kpi: 'Calidad de reporting de factibilidades',
      riesgoMitigado: 'Distorsión gerencial-operativa',
    },
  ],
  d30: [
    {
      accion: 'Implementar seguimiento intensivo en Di Paolo y Yamil Remax',
      porQue: 'Reducir concentración de riesgo de morosidad en canales clave',
      areaLider: 'Cobranzas',
      kpi: '% efectividad por agencia',
      riesgoMitigado: 'Shock por morosidad alta',
    },
    {
      accion: 'Asignar recursos extraordinarios a Edenor y 3 de Febrero',
      porQue: 'Resolver acumulación sistémica de retrasos (22 incidencias Edenor, 18 en 3 de Feb.)',
      areaLider: 'Operaciones',
      kpi: '% obras regularizadas',
      riesgoMitigado: 'Freno operativo local y pérdida de plazos',
    },
    {
      accion: 'Recomponer el pipeline de factibilidades (ratio vigentes/vencidas)',
      porQue: 'Evitar cronificación de vencimientos y pérdida de ingresos futuros',
      areaLider: 'Proyectos',
      kpi: 'Ratio vigentes/vencidas',
      riesgoMitigado: 'Riesgo de pipeline futuro',
    },
  ],
  d90: [
    {
      accion: 'Auditoría integral de la cartera de cobranzas',
      porQue: 'Depurar datos, identificar falsos cobros y ajustar dirección estratégica',
      areaLider: 'Auditoría Interna',
      kpi: 'Tasa de morosidad vs reporte auditado',
      riesgoMitigado: 'Incobrabilidad estructural',
    },
    {
      accion: 'Estrategia de negociación masiva con inmobiliarias Top 5',
      porQue: 'Diversificar el riesgo y mejorar la cobranza promedio (Top 5 = 53,8% del historial)',
      areaLider: 'Finanzas',
      kpi: '% de concentración directa en cobranza',
      riesgoMitigado: 'Riesgo de concentración y shock de caja',
    },
    {
      accion: 'Evaluar y renegociar contratos con CMC y grandes contratistas',
      porQue: 'Mejorar cumplimiento y gestionar riesgo sistémico ante acumulación de multas',
      areaLider: 'Dirección',
      kpi: '% contratos sin pendientes críticos',
      riesgoMitigado: 'Acumulación de multas y sanciones',
    },
  ],
};
