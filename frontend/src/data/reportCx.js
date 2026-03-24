// ── MÓDULO 4: CX (Customer Experience) ───────────────────────────────────────
// Período: Marzo 2026

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
// color: 'green' | 'yellow' | 'orange' | 'red'
export const semaforo = [
  {
    subarea: 'Postventa',
    estado: 'Mejorando',
    color: 'yellow',
    metrica: 'Tasa resolución 1.93x (Marzo) vs 0.93x (Febrero)',
    umbral: 'Umbral de mejora: ≥1.5x',
  },
  {
    subarea: 'Encuesta Postventa',
    estado: 'Satisfactoria con áreas críticas',
    color: 'yellow',
    metrica: '79.2% conformidad, 22.6% insatisfechos con rapidez',
    umbral: 'Umbral conformidad: ≥80%',
  },
  {
    subarea: 'Tráfico Web',
    estado: 'Débil en engagement',
    color: 'red',
    metrica: 'Rebote página "/" 65.85%, engagement 34.15%',
    umbral: 'Umbral rebote <40%, engagement >50%',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'El desempeño de postventa está en etapa de mejora, aunque persisten casuísticas antiguas y focos críticos no resueltos en rubros/obras específicas.',
  'Existe una mayoría satisfecha en la encuesta postventa, pero casi 1 de cada 4 clientes expresa alguna insatisfacción, sobre todo por lentitud en la resolución.',
  'La experiencia digital es inconsistente: la home muestra desinterés (alto rebote), mientras otras páginas puntuales prueban alto engagement, reforzando una oportunidad no explotada para fidelización.',
];

// ── POSTVENTA — KPIs GLOBALES ─────────────────────────────────────────────────
export const kpisPostventa = [
  { label: 'Activos totales',           actual: 62,   anterior: 88,   unidad: '',  tendenciaBuena: 'down' },
  { label: 'En proceso',                actual: 18,   anterior: null, unidad: '',  tendenciaBuena: 'down' },
  { label: 'Cerrados históricos',       actual: 735,  anterior: null, unidad: '',  tendenciaBuena: 'up'   },
  { label: 'Total procesados',          actual: 797,  anterior: null, unidad: '',  tendenciaBuena: 'up'   },
  { label: 'Reducción neta (Mar.)',      actual: -26,  anterior: 2,    unidad: '',  tendenciaBuena: 'down' },
  { label: 'Tasa resolución (Mar. 26)', actual: 1.93, anterior: 0.93, unidad: 'x', tendenciaBuena: 'up'   },
];

// ── EVOLUCIÓN MENSUAL ─────────────────────────────────────────────────────────
export const evolucionMensual = [
  { mes: 'Enero 2026',  entrados: 27, salidos: 56, tasa: 2.07, neto: -29, interpretacion: 'Drenado importante de backlog gracias a doble tasa de cierre' },
  { mes: 'Febrero 2026',entrados: 29, salidos: 27, tasa: 0.93, neto: 2,   interpretacion: 'Se enlenteció, balanceado, sin reducción neta'                },
  { mes: 'Marzo 2026',  entrados: 28, salidos: 54, tasa: 1.93, neto: -26, interpretacion: 'Recuperación clara en velocidad de resolución'                },
];

// ── CASOS CRÍTICOS POR ANTIGÜEDAD ─────────────────────────────────────────────
export const casosCriticos = [
  { reclamo: '001 (más antiguo)', obra: 'Yatay y Pellegrini', diasAbierto: 664,  estado: 'Pendiente' },
  { reclamo: '002',               obra: 'Montella',           diasAbierto: 365,  estado: 'Pendiente' },
];

// ── RANKING DE RUBROS POR VOLUMEN ─────────────────────────────────────────────
export const rubrosPorVolumen = [
  { rubro: 'Estructura y Mampostería', cantidad: 56,   pct: 90.3, prioridad: 1 },
  { rubro: 'Humedad y Filtraciones',   cantidad: null, pct: null, prioridad: 2 },
];

// ── MATRIZ OBRA vs. RUBRO ─────────────────────────────────────────────────────
export const matrizObraRubro = [
  { obra: 'América',           rubro: 'Estructura y Mampostería', volumen: 56   },
  { obra: 'San Martín 861',    rubro: 'Humedad y Filtraciones',   volumen: null },
  { obra: 'Yatay y Pellegrini',rubro: null,                       volumen: null },
  { obra: 'Montella',          rubro: null,                       volumen: null },
];

// ── ENCUESTA POSTVENTA — KPIs ─────────────────────────────────────────────────
export const kpisEncuesta = [
  { label: 'Total respuestas',                 actual: 53,   anterior: null, unidad: '',  tendenciaBuena: 'up'   },
  { label: 'Conformidad general ("Sí")',        actual: 79.2, anterior: null, unidad: '%', tendenciaBuena: 'up'   },
  { label: 'Tiempo resolución cumple ("Sí")',   actual: 71.7, anterior: null, unidad: '%', tendenciaBuena: 'up'   },
  { label: 'Satisfacción "Muy Buena"',          actual: 69.8, anterior: null, unidad: '%', tendenciaBuena: 'up'   },
  { label: 'Motivo contacto: Instalaciones',    actual: 26.4, anterior: null, unidad: '%', tendenciaBuena: 'down' },
  { label: 'Insatisfechos con demoras',         actual: 22.6, anterior: null, unidad: '%', tendenciaBuena: 'down' },
];

// ── TRÁFICO WEB — KPIs GLOBALES ───────────────────────────────────────────────
export const kpisTrafico = [
  { label: 'Vistas totales',        actual: 34648, anterior: null, unidad: '',  tendenciaBuena: 'up' },
  { label: 'Usuarios activos',      actual: 22614, anterior: null, unidad: '',  tendenciaBuena: 'up' },
  { label: 'Engagement time (seg)', actual: 19,    anterior: null, unidad: 's', tendenciaBuena: 'up' },
];

// ── TRÁFICO WEB — LANDING PAGES ───────────────────────────────────────────────
export const landingPages = [
  { landing: '/',                    sesiones: 16967, pctTotal: 49.0,  rebote: 65.85, engagement: 34.15, interpretacion: 'Página principal: recibe mayor tráfico, engagement bajo y rebote alto'  },
  { landing: '/hornos-2719',         sesiones: 4408,  pctTotal: 12.7,  rebote: 54.04, engagement: 45.96, interpretacion: 'Segundo flujo: moderado interés, resultado aceptable'                    },
  { landing: '/terrazas-de-roca',    sesiones: 1899,  pctTotal: 7.9,   rebote: 53.0,  engagement: 47.0,  interpretacion: 'Tráfico relevante, rebote moderado'                                      },
  { landing: '/oficinas-roca-1276',  sesiones: 385,   pctTotal: 1.6,   rebote: 51.9,  engagement: 48.1,  interpretacion: 'Bajo tráfico, retención aceptable'                                       },
  { landing: '(not set)',            sesiones: 328,   pctTotal: 1.4,   rebote: 96.3,  engagement: 3.7,   interpretacion: 'Tráfico no identificado, posible directo o bot'                          },
  { landing: '/portal-de-roca',      sesiones: 81,    pctTotal: 0.3,   rebote: 51.9,  engagement: 48.1,  interpretacion: 'Muy bajo tráfico, retención equilibrada'                                  },
  { landing: '/yatay-754',           sesiones: 72,    pctTotal: 0.3,   rebote: 61.1,  engagement: 38.9,  interpretacion: 'Muy bajo tráfico, rebote moderado-alto'                                   },
  { landing: '/belgrano-4664',       sesiones: 70,    pctTotal: 0.3,   rebote: 54.3,  engagement: 45.7,  interpretacion: 'Muy bajo tráfico, engagement equilibrado'                                 },
  { landing: '/virasoro-325',        sesiones: 59,    pctTotal: 0.2,   rebote: 59.3,  engagement: 40.7,  interpretacion: 'Muy bajo tráfico, rebote moderado'                                        },
  { landing: '/las-malvinas',        sesiones: 58,    pctTotal: 0.2,   rebote: 69.0,  engagement: 31.0,  interpretacion: 'Muy bajo tráfico, alto rebote'                                            },
  { landing: '/abel-costa-761',      sesiones: 48,    pctTotal: 0.2,   rebote: 60.4,  engagement: 39.6,  interpretacion: 'Muy bajo tráfico, rebote moderado'                                        },
  { landing: '/urquiza-4550',        sesiones: 32,    pctTotal: 0.1,   rebote: 46.9,  engagement: 53.1,  interpretacion: 'Muy bajo tráfico, mejor retención del grupo'                              },
  { landing: '/w-de-tata-4965',      sesiones: 31,    pctTotal: 0.1,   rebote: 61.3,  engagement: 38.7,  interpretacion: 'Muy bajo tráfico, alto rebote'                                            },
  { landing: '/proyectos',           sesiones: 27,    pctTotal: 0.1,   rebote: 19.05, engagement: 80.95, interpretacion: 'Alta relevancia puntual, oportunidad de escalar — mejor engagement del sitio'},
  { landing: '/valentin-gomez-4736', sesiones: 18,    pctTotal: 0.07,  rebote: 38.9,  engagement: 61.1,  interpretacion: 'Muy bajo tráfico, buena retención'                                        },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
// probabilidad / impacto: 'alta' | 'media' | 'baja'
export const riesgos = [
  {
    riesgo: 'Persistencia de casos antiguos (>365 días abiertos)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Postventa / Operaciones',
    consecuencia: 'Daño a reputación, judicialización y escrache público',
  },
  {
    riesgo: 'Poca integración entre experiencia digital y postventa',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Marketing / Postventa',
    consecuencia: 'Frustración del cliente y fuga de potenciales contactos',
  },
  {
    riesgo: 'Insatisfacción relevante con tiempos de resolución (22.6%)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Postventa',
    consecuencia: 'Reputación negativa, NPS deteriorado y pérdida de referenciaciones',
  },
  {
    riesgo: 'Gaps en base de datos y cruces analíticos',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'IT / Gestión',
    consecuencia: 'Acciones poco específicas y baja efectividad de intervenciones',
  },
  {
    riesgo: 'Concentración de reclamos en obras críticas (América: 56 reclamos)',
    probabilidad: 'media',
    impacto: 'alta',
    area: 'Obras / Postventa',
    consecuencia: 'Reputación localmente deteriorada y ralentización comercial',
  },
];

// ── CONCLUSIÓN MAESTRA DEL REPORTE COMPLETO ───────────────────────────────────
export const conclusionMaestra = {
  modulos: [
    {
      modulo: 'Obras',
      resumen: 'Capacidad productiva robusta pero con focos de patologías reiteradas en rubros "Estructura" y "Humedad" en obras críticas ("América", "San Martín 861", "Yatay y Pellegrini"). Brechas en supervisión y cierre de trabajos de detalle.',
    },
    {
      modulo: 'Comercial',
      resumen: 'Estrategias de captación con resultados estables, pero ciclo de venta largo y presión sobre soporte postventa. Falta profundizar el canal digital y disminuir dependencia del canal presencial.',
    },
    {
      modulo: 'Finanzas',
      resumen: 'Saneamiento progresivo del flujo operativo, equilibrio en caja, pero presión futura por contingencias de postventa no resueltas y potenciales litigios.',
    },
    {
      modulo: 'CX',
      resumen: 'Mejora tangible en tasa de resolución, mayoría de clientes satisfechos, pero mediana profundidad digital y concentración de problemas en rubros estratégicos; riesgo digital por desconexión web-contacto y calidad dispareja de datos.',
    },
  ],
  riesgosSistemicos: [
    'Persistencia de patologías técnicas crónicas: fallas en rubros críticos saturan postventa, elevan backlog y afectan encuestas y reputación.',
    'Desintegración analítica y gaps de datos: falta de granularidad impide foco y acción efectiva, generando recursos desperdiciados.',
    'Experiencia digital insuficiente: web generalista con alto rebote, escasa trazabilidad a canal postventa y pérdida de compradores jóvenes.',
    'Lentitud en resolución: faltan recursos y protocolos ágiles para casos crónicos, generando frustración y reiteración de quejas.',
    'Concentración de riesgo geográfico: obras críticas con volumen desproporcionado de incidentes generan viralización y foco negativo local.',
  ],
  accionesPrioritarias: [
    'Implementar auditoría y resolución prioritaria para reclamos de >365 días y rubros de alta concentración.',
    'Integrar dataset cruzado en encuestas y dashboards con variables obra/rubro/usuario para focalizar gestión.',
    'Rediseñar urgentemente la página principal web y rutas de tráfico, con énfasis en reducción de rebote digital.',
    'Desarrollar programa de capacitación y mejora técnica en patologías de "Estructura y Mampostería" y "Humedad y Filtraciones".',
    'Iniciar feedback estructurado y seguimiento activo post-reparación en todos los casos críticos y de complejidad técnica.',
  ],
  narrativa: 'La empresa mantiene una estructura operativa sólida y capacidad reactiva en mejora. Sin embargo, sufre tensiones previsibles en obras y rubros heredados. El diferencial competitivo depende de su aptitud para atacar quirúrgicamente los problemas crónicos de calidad y lentitud, digitalizar su experiencia usuario-cliente y lograr una integración analítica —hoy limitada— de toda la cadena de entrega, servicio y soporte. Recomendamos al Directorio declarar la calidad técnica y la experiencia digital como motores de la estrategia 2026.',
};

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Auditar y priorizar casos >365 días abiertos',
      porQue: 'Son foco reputacional, judicial y reflejado en encuesta',
      areaLider: 'Postventa',
      kpi: 'Reducción antigüedad promedio de reclamos',
      riesgoMitigado: 'Reputación y judicialización',
    },
    {
      accion: 'Lanzar entrenamiento flash sobre resolución de humedad',
      porQue: '26.4% de motivos de contacto; señalado en reclamos y encuesta postventa',
      areaLider: 'Obras / Postventa',
      kpi: 'Velocidad de resolución en rubros de humedad',
      riesgoMitigado: 'Saturación operativa e insatisfacción en reparaciones',
    },
    {
      accion: 'Comunicación transparente a clientes críticos',
      porQue: 'Mejorar percepción y evitar viralización de insatisfacción',
      areaLider: 'Comercial',
      kpi: 'Satisfacción en segmentos de riesgo',
      riesgoMitigado: 'Disparidad entre KPIs y percepción del cliente',
    },
  ],
  d30: [
    {
      accion: 'Optimizar contenido y rutas de la home web',
      porQue: 'Rebote 65.85% desperdicia tráfico y oportunidad de contacto',
      areaLider: 'Marketing',
      kpi: '% rebote página principal',
      riesgoMitigado: 'Fuga digital y baja captación',
    },
    {
      accion: 'Implementar feedback post-reparación sistemático',
      porQue: 'La encuesta muestra insatisfacción relevante en calidad y rapidez',
      areaLider: 'Postventa',
      kpi: '% conformidad y NPS',
      riesgoMitigado: 'Disminución de satisfacción y pérdida de referencias',
    },
    {
      accion: 'Integrar identificador de obra/rubro en encuestas',
      porQue: 'Falta de data granular limita acciones focalizadas y análisis causal',
      areaLider: 'IT / Comercial',
      kpi: 'Granularidad analítica disponible',
      riesgoMitigado: 'Acciones pobres o erróneas sin foco real',
    },
  ],
  d90: [
    {
      accion: 'Rediseño de journey postventa con enfoque omnicanal',
      porQue: 'Encuesta y Google Analytics muestran puntos ciegos y gaps en experiencia total',
      areaLider: 'CX / IT',
      kpi: 'Satisfacción global y engagement',
      riesgoMitigado: 'Desconexión cliente y caída en NPS',
    },
    {
      accion: 'Plan de capacitación específica para rubros críticos',
      porQue: '"Estructura y Mampostería" y "Humedad" concentran la mayoría de reclamos',
      areaLider: 'Obras',
      kpi: '% reclamos y tasa de cierre por rubro',
      riesgoMitigado: 'Persistencia de problemas técnicos específicos',
    },
    {
      accion: 'Automatización de reportes para mejora continua',
      porQue: 'Los gaps actuales impiden seguimiento efectivo y detección temprana',
      areaLider: 'IT',
      kpi: 'Trazabilidad y velocidad de reacción',
      riesgoMitigado: 'Baja capacidad de mejora sostenida',
    },
  ],
};
