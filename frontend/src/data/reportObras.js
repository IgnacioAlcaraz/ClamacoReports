// ── MÓDULO 1: OBRAS ───────────────────────────────────────────────────────────
// Para actualizar mensualmente: modificar los valores de cada sección.
// No tocar la estructura de los objetos — solo los valores.

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
// color: 'green' | 'yellow' | 'orange' | 'red'
export const semaforo = [
  {
    subarea: 'Arquitectura',
    estado: 'Deterioro leve',
    color: 'orange',
    metrica: 'Backlog +16% (1.334 → 1.542 ítems)',
    umbral: '>10% incremento mes a mes en ítems totales',
  },
  {
    subarea: 'Detalle de Obra',
    estado: 'Heterogéneo',
    color: 'yellow',
    metrica: '7 obras estancadas <5% avance sobre 35 ítems',
    umbral: '>5 obras bajo 10% avance y sin cierre en 90 días',
  },
  {
    subarea: 'Programación',
    estado: 'Parcialmente Cumplido',
    color: 'yellow',
    metrica: '25 de 53 obras con demoras administrativas',
    umbral: '>20% de obras con demoras administrativas',
  },
  {
    subarea: 'Gestoría',
    estado: 'Riesgo elevado',
    color: 'orange',
    metrica: '7 obras >90 días estancadas, 3 responsables bloqueando >2 casos',
    umbral: '>5 casos >90 días y >2 responsables multibloqueo',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'Persisten cuellos de botella operativos —tanto por atrasos administrativos (gestoría) como dependencias interáreas— con un 13% del total de obras bajo algún tipo de bloqueo relevante.',
  'Se identifican descalces críticos entre avance de obra y porcentaje vendido en al menos 3 proyectos de peso, generando riesgos comerciales y financieros si no se interviene.',
  'Más de 20 proyectos permanecen en estado indeterminado (Desconocido / NO ARRANCÓ), afectando la calidad informativa y la integridad del control operativo.',
];

// ── KPIs — ARQUITECTURA ───────────────────────────────────────────────────────
export const kpisArquitectura = [
  { label: 'Total ítems', actual: 1542, anterior: 1334, unidad: '', tendenciaBuena: 'down' },
  { label: 'Cerrados en el mes', actual: 6, anterior: 0, unidad: '', tendenciaBuena: 'up' },
  { label: 'Pendientes totales', actual: 911, anterior: 1066, unidad: '', tendenciaBuena: 'down' },
  { label: 'Ítems ingresados', actual: 0, anterior: 0, unidad: '', tendenciaBuena: 'down' },
];

// ── OBRAS ESTANCADAS (TOP 7) ──────────────────────────────────────────────────
export const obrasEstancadas = [
  { obra: 'El Portal de Morón — Abel Costa al 800 / Yatay 846/50/862', avance: 2.86, pendientes: 37, score: 139 },
  { obra: 'Mitre 4872, Caseros', avance: 2.94, pendientes: 36, score: 137 },
  { obra: 'Hurlingham Park', avance: 3.03, pendientes: 35, score: 135 },
  { obra: 'Av. Gral Paz y Mosconi, Sáenz Peña', avance: 3.23, pendientes: 33, score: null },
  { obra: 'Roca 1568', avance: 6.25, pendientes: 32, score: null },
  { obra: 'Benito Chas & Juan XXIII, Martín Coronado', avance: 12.12, pendientes: 32, score: null },
  { obra: 'Gral. José de San Martín 451 (Obispado)', avance: 18.18, pendientes: 30, score: null },
];

// ── OBRAS >80% BLOQUEADAS POR DEPENDENCIAS ────────────────────────────────────
export const obrasBlockeadas = [
  { obra: 'Hornos 2719', avance: 89.66, pendientes: 3, dependencia: 'Conforme a obra, Cómputo, Plano PH' },
  { obra: 'Mitre 1185', avance: 93.75, pendientes: 2, dependencia: 'Conforme a obra, Plano PH' },
  { obra: 'Roca 1680 — Terrazas de Roca', avance: 81.25, pendientes: 6, dependencia: 'Conforme a obra, Cómputo, Guardas' },
  { obra: 'Roca 1636 (Portal de Roca)', avance: 81.25, pendientes: 6, dependencia: 'Conforme a obra, Cómputo, Guardas' },
  { obra: 'Valentín Gómez 4736/44', avance: 80.65, pendientes: 7, dependencia: 'Conforme a obra, Cómputo, Guardas' },
  { obra: 'Virasoro 325', avance: 91.18, pendientes: 3, dependencia: 'Conforme a obra, Precios, Plano PH' },
  { obra: 'Yatay 754 (FASECO)', avance: 88.24, pendientes: 4, dependencia: 'Conforme a obra, Cómputo, Guardas' },
];

// ── PORTFOLIO GENERAL ─────────────────────────────────────────────────────────
export const portfolio = [
  { estado: 'Activas', cantidad: 213, descripcion: 'Obras en ejecución / obra física' },
  { estado: 'En Pozo', cantidad: null, descripcion: 'Obras no iniciadas / proyecto en carpeta' },
  { estado: 'Finalizadas', cantidad: null, descripcion: 'Obras con fecha de entrega anterior al corte' },
  { estado: 'Limbo / Desconocido', cantidad: null, descripcion: 'Sin datos claros — requieren revisión' },
];

// ── TOP 5 OBRAS POR UNIDADES ──────────────────────────────────────────────────
export const topObras = [
  { obra: 'El Portal de Roca', unidades: 124, cocheras: 111, entrega: '11/01/2026', estado: 'En obra' },
  { obra: 'Hornos 2719', unidades: 88, cocheras: 34, entrega: '10/01/2026', estado: 'En obra' },
  { obra: 'Belgrano 4664', unidades: 72, cocheras: 34, entrega: '10/01/2027', estado: 'En obra' },
  { obra: 'Terrazas de Roca', unidades: 63, cocheras: 41, entrega: '12/01/2027', estado: 'En obra' },
  { obra: 'Roca Prado 1670', unidades: 63, cocheras: 0, entrega: '11/01/2028', estado: 'En obra' },
];

// ── OBRAS CON ENTREGA VENCIDA O PRÓXIMA (<6 MESES) ───────────────────────────
export const obrasEntregaProxima = [
  { obra: 'Hornos 2719', entrega: '10/01/2026', estado: 'En obra', alerta: 'vencida' },
  { obra: 'El Portal de Roca', entrega: '11/01/2026', estado: 'En obra', alerta: 'vencida' },
];

// ── OBRAS EN LIMBO ────────────────────────────────────────────────────────────
export const obrasLimbo = [
  'Murias 2264 (Tres de Febrero)',
  'Santa Ana 839, 857 (Hurlingham)',
  'Carlos Pellegrini 645/667 (Morón)',
  'Av Rivadavia 15262 / 17412 / 15668 / 15672 (Morón)',
  'Isabela La Católica 941 (Morón)',
  'General Paz (sin ubicación precisa)',
];

// ── DESCALCE AVANCE VS. VENDIDO ───────────────────────────────────────────────
// tipoRiesgo: 'comercial' | 'operativo' | 'inconsistencia'
export const descalces = [
  { obra: 'Roca 1276', avance: 100, vendido: 26.19, descalce: 73.81, tipo: 'comercial' },
  { obra: 'Urquiza 4550', avance: 33.33, vendido: 9.94, descalce: 23.39, tipo: 'comercial' },
  { obra: 'América 347', avance: 100, vendido: 100.35, descalce: -0.35, tipo: 'inconsistencia' },
  { obra: 'Valentín Gómez 4736', avance: 53.33, vendido: 76.34, descalce: -22.9, tipo: 'operativo' },
];

// ── KPIs — GESTORÍA ───────────────────────────────────────────────────────────
export const kpisGestoria = [
  { label: 'Obras bajo seguimiento', actual: 53, anterior: null, unidad: '', tendenciaBuena: 'neutral' },
  { label: 'Obras con demoras', actual: 25, anterior: null, unidad: '', tendenciaBuena: 'down' },
  { label: 'Estancadas >30 días', actual: 23, anterior: null, unidad: '', tendenciaBuena: 'down' },
  { label: 'Alertas críticas', actual: 2, anterior: null, unidad: '', tendenciaBuena: 'down' },
  { label: 'Atraso >90 días', actual: 7, anterior: null, unidad: '', tendenciaBuena: 'down' },
  { label: 'Estancadas >90 días', actual: 8, anterior: null, unidad: '', tendenciaBuena: 'down' },
];

// ── VENCIMIENTOS URGENTES ─────────────────────────────────────────────────────
// urgencia: 'critica' | 'alta' | 'media'
export const vencimientos = [
  {
    obra: 'Justo J. de Urquiza 4638, Caseros',
    paso: 'Paso 10 — Dibujo Plano',
    fecha: '04/03/2026',
    responsable: 'Gestoría',
    urgencia: 'critica',
  },
  {
    obra: 'Roca 1568, Hurlingham',
    paso: 'Paso 2 — Escritura',
    fecha: '14/03/2026',
    responsable: 'Terrenos',
    urgencia: 'alta',
  },
];

// ── OBRAS CON ATRASO >90 DÍAS ─────────────────────────────────────────────────
export const obrasAtraso90 = [
  { obra: 'Gral. José de San Martín 451', paso: 'Paso 14: Visado Previo Ascensor', dias: 166, responsable: 'Municipio' },
  { obra: 'Carlos Pellegrini 645-667', paso: 'Paso 6: Anteproyecto definido', dias: 165, responsable: 'Arquitectura' },
  { obra: 'Buen Viaje 146', paso: 'Paso 3: Posesión terreno', dias: 161, responsable: 'Terrenos' },
  { obra: 'MELIAN 7A/7B/7C/5B', paso: 'Paso 6: Anteproyecto definido', dias: 153, responsable: 'Arquitectura' },
  { obra: 'San Martin 729', paso: 'Paso 2: Escritura simple', dias: 146, responsable: 'Terrenos' },
  { obra: 'La Merced 4484', paso: 'Paso 6: Anteproyecto definido', dias: 108, responsable: 'Arquitectura' },
  { obra: 'Manuel Quintana 762-766', paso: 'Paso 9: Servicios aprobados', dias: 105, responsable: 'Arquitectura' },
  { obra: 'Gral. Paz 2690 — Granero', paso: 'Paso 6: Anteproyecto definido', dias: 102, responsable: 'Arquitectura' },
];

// ── BLOQUEOS POR RESPONSABLE ──────────────────────────────────────────────────
export const bloqueosPorResponsable = [
  { responsable: 'Arquitectura', cantidad: 5, obras: 'Carlos Pellegrini 645-667, MELIAN 7A/7B, MELIAN ESQ. SAN RAMON, La Merced 4484, Manuel Quintana 762-766' },
  { responsable: 'Terrenos', cantidad: 4, obras: 'Buen Viaje 146, San Martin 729, Roca 1568, Roca 2014 & Bocayuva' },
  { responsable: 'Municipio', cantidad: 1, obras: 'Gral. José de San Martín 451' },
  { responsable: 'Gestoría', cantidad: 1, obras: 'Justo J. de Urquiza 4638, Caseros' },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
// probabilidad / impacto: 'alta' | 'media' | 'baja'
export const riesgos = [
  {
    riesgo: 'Incremento de pendientes en backlog anual (>10%)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Arquitectura',
    consecuencia: 'Saturación de recursos y desvío de plazos',
  },
  {
    riesgo: 'Obras >80% bloqueadas por dependencias externas',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Arquitectura / Interáreas',
    consecuencia: 'Inflación de pipeline y penalizaciones contractuales',
  },
  {
    riesgo: 'Acumulación de stock (avance alto, ventas bajas)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Comercial',
    consecuencia: 'Liquidez y rentabilidad afectadas',
  },
  {
    riesgo: 'Obras con documentación incompleta o campos críticos confusos',
    probabilidad: 'media',
    impacto: 'alta',
    area: 'Dirección',
    consecuencia: 'Imposibilidad de control, riesgo de abandono',
  },
  {
    riesgo: 'Gestiones municipales con retraso >90 días',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Gestoría / Terrenos',
    consecuencia: 'No inicio de obra, sobrecostos por inactividad',
  },
  {
    riesgo: 'Concentración de bloqueos por responsables recurrentes',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Primeras líneas',
    consecuencia: 'Bottleneck sistémico, baja accountability',
  },
  {
    riesgo: 'Problemas de priorización en avances (25/53 obras con demoras)',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Jefes de Producción',
    consecuencia: 'Cronogramas incumplidos, reputación corporativa',
  },
  {
    riesgo: 'Obras en limbo / estado "desconocido" (20+ casos)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Dirección',
    consecuencia: 'Mal uso de recursos, imposibilidad de planificación',
  },
];

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Auditar y atacar cuellos de botella de El Portal de Morón y Mitre 4872, Caseros',
      porQue: 'Son las obras con más pendientes y menor avance',
      areaLider: 'Producción',
      kpi: '% avance en obras bajo 10%',
      riesgoMitigado: 'Obras estancadas',
    },
    {
      accion: 'Verificar vencimientos municipales urgentes (Urquiza 4638, Roca 1568)',
      porQue: 'Evitar penalidades y demoras legales',
      areaLider: 'Gestoría',
      kpi: 'Cumplimiento de trámites',
      riesgoMitigado: 'Penalizaciones / atrasos legales',
    },
    {
      accion: 'Revisión de dependencias no resueltas en obras >80% avance',
      porQue: 'Eliminar bloqueos de flujo y liberar entregas',
      areaLider: 'Arquitectura',
      kpi: '% entregas a tiempo',
      riesgoMitigado: 'Brecha entre avance y cierre',
    },
  ],
  d30: [
    {
      accion: 'Seguimiento semanal a obras >90% avance',
      porQue: 'Acelerar cierres y evitar pile up',
      areaLider: 'Producción',
      kpi: 'Obras entregadas',
      riesgoMitigado: 'Inflado de stock avanzado',
    },
    {
      accion: 'Protocolo de cierre para ítems >2 meses sin avance',
      porQue: 'Reducir backlog de ítems viejos',
      areaLider: 'Arquitectura',
      kpi: 'Backlog pendiente',
      riesgoMitigado: 'Saturación / backlog crónico',
    },
    {
      accion: 'Reuniones quincenales de obras <10% avance',
      porQue: 'Destrabar obras estancadas',
      areaLider: 'Dirección / Producción',
      kpi: '% obras bajo control',
      riesgoMitigado: 'Obras rezagadas y sin control',
    },
  ],
  d90: [
    {
      accion: 'Auditoría y saneamiento de datos de obras "limbo"',
      porQue: 'Mejorar calidad de información y control',
      areaLider: 'Dirección',
      kpi: '% obras con info auditada',
      riesgoMitigado: 'Decisiones erróneas',
    },
    {
      accion: 'Implementar ritual de control semanal integral',
      porQue: 'Mejor seguimiento y reactividad',
      areaLider: 'Dirección',
      kpi: 'Indicadores integrados',
      riesgoMitigado: 'Riesgo sistémico',
    },
    {
      accion: 'Campaña de cierre comercial en Roca 1276 y Urquiza 4550',
      porQue: 'Reducir descalce avance/vendido y mejorar liquidez',
      areaLider: 'Comercial',
      kpi: '% vendido en obras avanzadas',
      riesgoMitigado: 'Acumulación de stock',
    },
  ],
};
