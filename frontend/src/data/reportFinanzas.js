// ── MÓDULO 3: FINANZAS ────────────────────────────────────────────────────────
// Período: Marzo 2026

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
// color: 'green' | 'yellow' | 'orange' | 'red'
export const semaforo = [
  {
    subarea: 'Factibilidades',
    estado: 'Backlog vencido superior a vigentes',
    color: 'red',
    metrica: '33 vencidas vs 30 vigentes',
    umbral: 'Vencidas > Vigentes',
  },
  {
    subarea: 'Cobranzas',
    estado: 'Alerta intermensual',
    color: 'yellow',
    metrica: '3,17% pendiente/histórico; -47,8% intermensual',
    umbral: '5% pendiente máx.; caída >25% mensual',
  },
  {
    subarea: 'Deudores / Mora',
    estado: '100% mora, sin deuda no vencida',
    color: 'red',
    metrica: 'Mora: $99.046 sobre $99.046 (100%)',
    umbral: 'Mora total, sin no vencida',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'La cartera de factibilidades muestra un riesgo operacional grave: hay más obras vencidas (33) que vigentes reales (30), y se suman 7 obras sin fecha asignada — esto afecta la planificación y expone a paralizaciones.',
  'El área de cobranzas presenta resiliencia histórica pero inicia marzo con una baja preocupante: -47,8% vs el mes previo, con pendiente histórico bajo (3,17%) pero alta concentración en pocas inmobiliarias.',
  'Todos los deudores están en mora (100%), sin deuda no vencida, alertando sobre la urgencia de intervención individual y segmentada para evitar agravamiento.',
];

// ── FACTIBILIDADES ────────────────────────────────────────────────────────────
export const factibilidades = {
  vigentes: 30,
  vencidas: 33,
  sinFecha: 7,
  vencenMenos30: 0,
};

export const vencimientosInminentes = [
  // No hay vencimientos que expiren en los próximos 30 días según el reporte.
];

export const falsosVigentes = [
  { obra: 'Las Malvinas 7271',   servicio: 'AYSA - CMC', contratista: 'CMC',       consecuencia: 'Figura como vigente con fecha inválida: decisiones gerenciales distorsionadas' },
  { obra: 'Vergara 2250',        servicio: 'Edenor',     contratista: 'Sin datos', consecuencia: 'Vencida desde 2020-03-26: riesgo de mantenimiento ficticio, falsea KPIs' },
  { obra: 'Roca Golf',           servicio: 'Edenor',     contratista: 'Sin datos', consecuencia: 'Vencida desde 2020-05-07: afecta control operativo y genera riesgos de auditoría' },
  { obra: 'Frugone / La Merced', servicio: 'Edenor',     contratista: 'Sin datos', consecuencia: 'Vencida desde 2020-05-27: ocasiona falsas expectativas de continuidad' },
  { obra: '25 de Mayo 956',      servicio: 'Edenor',     contratista: 'Sin datos', consecuencia: 'Vencida desde 2020-07-05: dificulta proyección de recursos' },
];

export const cuellosBottella = [
  { obra: 'Frugone / La Merced',         bloqueo: 'Falta de cámara',   prestadora: 'Edenor',    impacto: 'Demora técnica, riesgo de sobrecostos y retrasos en certificación' },
  { obra: 'Las Malvinas 7271',           bloqueo: 'Falta de cámara',   prestadora: 'Naturgy',   impacto: 'Aumenta tiempo de obra y riesgo de siniestros' },
  { obra: 'Ntra. Sra. del Buen Viaje 146', bloqueo: 'Falta de proyecto', prestadora: 'Sin datos', impacto: 'Imposibilita avance, riesgo de pérdida de inversión' },
];

// ── COBRANZAS ─────────────────────────────────────────────────────────────────
export const cobranzas = {
  mar2026: 813791,
  feb2026: 1559555,
  promHistorico: 1530483,
  variacionVsMesAnterior: -47.8,  // % vs febrero 2026 (mes en curso, parcial)
  pagos: 160,
  totalHistorico: 97238436,
  pendienteTotal: 3082715,
  pctPendienteVsHistorico: 3.17,
};

// Evolución últimos meses disponibles
export const evolucionMensual = [
  { mes: 'Nov 2025',  cobrado: 1584008, pagos: 238 },
  { mes: 'Dic 2025',  cobrado: 1987947, pagos: 223 },
  { mes: 'Ene 2026',  cobrado: 1500165, pagos: 240 },
  { mes: 'Feb 2026',  cobrado: 1559555, pagos: 220 },
  { mes: 'Mar 2026',  cobrado: 813791,  pagos: 160 },  // parcial
];

export const topObrasCobro = [
  { obra: 'America',              cobrado: 15820150, pendiente: 246,    interpretacion: 'Casi cerrado, sin exposición a mora' },
  { obra: 'El Portal de Roca',    cobrado: 10328845, pendiente: 867023, interpretacion: 'Alto pendiente, foco crítico de retraso' },
  { obra: 'Lioni',                cobrado: 7632069,  pendiente: 11271,  interpretacion: 'Margen de riesgo bajo' },
  { obra: 'Roca Golf',            cobrado: 7464070,  pendiente: 60,     interpretacion: 'Sin relevancia de exposición' },
  { obra: 'Las Malvinas 7254',    cobrado: 7439055,  pendiente: 14100,  interpretacion: 'Exposición muy baja' },
];

export const topObrasPendiente = [
  { obra: 'El Portal de Roca',           pendiente: 867023, riesgo: 'Principal contribuyente de mora y foco prioritario'    },
  { obra: 'Hornos 2719',                 pendiente: 390884, riesgo: 'Alta exposición, tendencia creciente a mora'            },
  { obra: 'Valentín Gómez 4736/44',      pendiente: 376185, riesgo: 'Riesgo de acople con bajo monitoreo'                   },
  { obra: 'Terrazas de Roca — Roca 1680',pendiente: 212290, riesgo: 'Exposición media bajo la línea de corte'               },
  { obra: 'Yatay 754 y Abel Costa 761',  pendiente: 180424, riesgo: 'Peligro latente, agrupación de eventos previos'        },
];

export const topInmobiliarias = [
  { inmobiliaria: 'Particular',    cobrado: 19818469, pendiente: 723472, efectividad: 96, morosos: 10, clasificacion: 'Alto monto, foco de morosidad'        },
  { inmobiliaria: 'Zelaschi',      cobrado: 14970724, pendiente: 145766, efectividad: 99, morosos: 9,  clasificacion: 'Baja exposición, muy eficiente'        },
  { inmobiliaria: 'Yamil Remax',   cobrado: 8800534,  pendiente: 706773, efectividad: 93, morosos: 1,  clasificacion: 'Pendiente relevante, concentración'    },
  { inmobiliaria: 'Di Paolo',      cobrado: 8593527,  pendiente: 479930, efectividad: 95, morosos: 12, clasificacion: 'Pendiente intermedio, atención'        },
  { inmobiliaria: 'Marcelo Russo', cobrado: 7567850,  pendiente: 271910, efectividad: 97, morosos: 5,  clasificacion: 'Eficiente, pendiente controlable'      },
];

export const topInmobiliariasConPendiente = [
  { inmobiliaria: 'Particular',         pendiente: 723472, riesgo: 'Acumulación con riesgo de transformación a mora masiva' },
  { inmobiliaria: 'Yamil Remax',        pendiente: 706773, riesgo: 'Alta, asociado a menor efectividad comparativa (93%)'  },
  { inmobiliaria: 'Di Paolo',           pendiente: 479930, riesgo: 'Moderado, foco en acuerdos'                            },
  { inmobiliaria: 'Marcelo Russo',      pendiente: 271910, riesgo: 'Bajo, seguimiento personalizado'                       },
  { inmobiliaria: 'Veronica Espinosa',  pendiente: 97680,  riesgo: 'Riesgo marginal, volumen bajo'                         },
];

// ── MORA ──────────────────────────────────────────────────────────────────────
export const mora = {
  deudaTotal: 99046,
  moraTotal: 99046,
  pctMora: 100,
  deudoresUnicos: 56,
  noVencida: 0,
  gini: 0.359,
  hhi: 0.026,
};

export const topDeudoresMora = [
  { deudor: 'Liza Alejandra Palladino Prado', montomora: 6603, obra: 'Urquiza 4550',      inmobiliaria: 'Yamil Remax' },
  { deudor: 'Axel Demian Resnik',             montomora: 5536, obra: 'Hornos 2719',        inmobiliaria: 'Particular'  },
  { deudor: 'Roberto Hercules Zarlenga',      montomora: 4100, obra: 'El Portal de Roca',  inmobiliaria: 'Particular'  },
  { deudor: 'Marcelo Cascales',               montomora: 3470, obra: 'El Portal de Roca',  inmobiliaria: 'Becerra'     },
  { deudor: 'Marcelo Belingar',               montomora: 3300, obra: 'El Portal de Roca',  inmobiliaria: 'Particular'  },
];

export const topObrasMora = [
  { obra: 'El Portal de Roca',     montomora: 25843, pct: 26.09 },
  { obra: 'Hornos 2719',           montomora: 25636, pct: 25.88 },
  { obra: 'Yatay 754 y A. Costa 761', montomora: 8806, pct: 8.89 },
  { obra: 'Urquiza 4550',          montomora: 8503,  pct: 8.59  },
  { obra: 'Valentín Gómez 4736',   montomora: 7240,  pct: 7.31  },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
// probabilidad / impacto: 'alta' | 'media' | 'baja'
export const riesgos = [
  {
    riesgo: 'Paralización de obras por backlog de factibilidades vencidas (33 vs 30 vigentes)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Técnica / Legal / Operativa',
    consecuencia: 'Detención operativa, multas y penalidades por incumplimiento',
  },
  {
    riesgo: 'Sobreinversión por falsos vigentes con fechas inválidas o vencidas',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Planeamiento / Jurídico',
    consecuencia: 'Reasignación errónea de recursos y sobreestimación de capacidad de obra',
  },
  {
    riesgo: 'Caída adicional de cobranzas por tendencia de marzo (-47,8% intermensual)',
    probabilidad: 'media',
    impacto: 'alta',
    area: 'Finanzas / Comercial',
    consecuencia: 'Estrés en flujo de fondos y menor disponibilidad para operaciones',
  },
  {
    riesgo: '100% de mora sin deuda no vencida (cartera en default operativo)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Finanzas / Jurídico',
    consecuencia: 'Daño económico, presión judicial y reputacional ante inversores',
  },
  {
    riesgo: 'Concentración de cobranzas en pocas inmobiliarias (44,8% en top 3)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Comercial',
    consecuencia: 'Shock sistémico por impagos en caso de crisis de esos actores',
  },
  {
    riesgo: 'Pérdida de auditoría por 7 obras sin fecha asignada',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Técnica / Administrativa',
    consecuencia: 'Inseguridad jurídica, sanciones de auditoría y brecha en planificación financiera',
  },
];

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Auditar y asignar fecha a las 7 obras sin fecha',
      porQue: 'Cerrar brecha administrativa y evitar auditoría negativa',
      areaLider: 'Técnica',
      kpi: '% obras regularizadas',
      riesgoMitigado: 'Pérdida de contratos y sanciones de auditoría',
    },
    {
      accion: 'Priorizar actualización de estado de "falsos vigentes"',
      porQue: 'Evitar errores de gestión y sobredimensionamiento presupuestario',
      areaLider: 'Técnica / Cobranzas',
      kpi: 'Error de asignación operativa',
      riesgoMitigado: 'Sobreinversión y fallas presupuestarias',
    },
    {
      accion: 'Contactar deudores top 5, especialmente PALLADINO PRADO',
      porQue: 'Acelerar recupero de mora crítica',
      areaLider: 'Cobranzas',
      kpi: 'Reducción % mora sobre cartera',
      riesgoMitigado: 'Persistencia de mora en cartera',
    },
  ],
  d30: [
    {
      accion: 'Implementar alertas preventivas para vencimientos de factibilidades',
      porQue: 'Generar margen de acción proactiva antes de que venzan',
      areaLider: 'Técnica / IT',
      kpi: 'Deuda no vencida registrada',
      riesgoMitigado: 'Parálisis técnica y salto de mora',
    },
    {
      accion: 'Seguimiento semanal con CMC y contratistas clave',
      porQue: 'Cuello de botella por concentración de obras vencidas en pocos contratistas',
      areaLider: 'Técnica',
      kpi: 'Ratio vigentes sobre vencidas',
      riesgoMitigado: 'Parálisis de obras y pérdida de eficiencia',
    },
    {
      accion: 'Reforzar gestión personalizada con Particular y Yamil Remax',
      porQue: 'Alta exposición a cobros pendientes y concentración de mora en ambas',
      areaLider: 'Comercial',
      kpi: 'Efectividad de cobranza por inmobiliaria',
      riesgoMitigado: 'Shock de liquidez por impago simultáneo',
    },
  ],
  d90: [
    {
      accion: 'Revisar y sancionar contractualmente a quienes mantengan obras sin actualización',
      porQue: 'Impactar directamente en la disciplina operativa y el cumplimiento',
      areaLider: 'Técnica / Legal',
      kpi: '% cumplimiento de actualización',
      riesgoMitigado: 'Riesgo reputacional ante inversores y auditoría',
    },
    {
      accion: 'Rediseñar protocolo de cierre y renovación de factibilidades',
      porQue: 'Mejorar el ciclo de vida y reducir ocurrencias de "falsos vigentes"',
      areaLider: 'Operativa',
      kpi: 'Ratio falsos vigentes / total',
      riesgoMitigado: 'Falsas proyecciones financieras y sobregiro de gastos operativos',
    },
    {
      accion: 'Implementar sistema automatizado de monitoreo y alertas tempranas',
      porQue: 'Aumentar la anticipación y proactividad ante vencimientos y mora',
      areaLider: 'IT / Planeamiento',
      kpi: 'Detención temprana de issues por mes',
      riesgoMitigado: 'Tensiones repetitivas de mora y vencimiento no anticipadas',
    },
  ],
};
