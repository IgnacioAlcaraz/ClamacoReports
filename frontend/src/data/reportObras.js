// ── MÓDULO 1: OBRAS ───────────────────────────────────────────────────────────
// Período: Marzo 2026

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
export const semaforo = [
  {
    subarea: 'Arquitectura',
    estado: 'En vigilancia',
    color: 'yellow',
    metrica: '885 pendientes estimadas sobre backlog (54.93% open)',
    umbral: '>800 pendientes',
  },
  {
    subarea: 'Detalle de Obra',
    estado: 'Parcial',
    color: 'yellow',
    metrica: '3/7 obras de bajo avance están estancadas',
    umbral: '>3 obras crónicas <20% avance',
  },
  {
    subarea: 'Programación',
    estado: 'Parcial',
    color: 'yellow',
    metrica: '25.55% obras en "limbo"',
    umbral: '>25% fuera de visibilidad',
  },
  {
    subarea: 'Gestoría',
    estado: 'Crítica',
    color: 'red',
    metrica: '25 obras >90 días atraso / 27 estancadas (44/60, 73%)',
    umbral: '>60% portfolio gestado fuera de SLA',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'Persistencia de obras fuera de control directo: el 25.55% del portafolio está en estado "limbo" (58/227), causando una zona ciega estratégica.',
  'Alto backlog operativo: el backlog en arquitectura creció de 1.334 a 1.611 ítems (+20.8%), con 885 tareas pendientes activas (54.93%). Esta sobrecarga amenaza la eficiencia y retrasa cierres.',
  'Bloqueos y atrasos reiterados en gestoría: 25 obras están >90 días en atraso y 27 estancadas, principalmente por trabas municipales o en pasos básicos.',
];

// ── KPIs — ARQUITECTURA ───────────────────────────────────────────────────────
export const kpisArquitectura = [
  { label: 'Total ítems',        actual: 1611, anterior: 1334, unidad: '',       tendenciaBuena: 'down' },
  { label: 'Pendientes totales', actual: 885,  anterior: null, unidad: '',       tendenciaBuena: 'down' },
  { label: 'Balance neto',       actual: 15,   anterior: null, unidad: ' ítems', tendenciaBuena: 'down' },
];

// ── OBRAS CRÍTICAS POR BAJO AVANCE / ESTANCADAS ───────────────────────────────
export const obrasEstancadas = [
  { obra: 'El Portal de Morón — Abel Costa al 800 / Yatay 846/50/862', avance: 2.86,  pendientes: 34, estancada: true,  trello: 'https://trello.com/c/cRX2koGy' },
  { obra: 'Mitre 4872, Caseros',                                        avance: 2.94,  pendientes: 33, estancada: true,  trello: 'https://trello.com/c/NqiVEUPO' },
  { obra: 'Hurlingham Park',                                            avance: 3.03,  pendientes: 32, estancada: true,  trello: 'https://trello.com/c/IU9LwVKm' },
  { obra: 'Av. Gral Paz y Mosconi, Sáenz Peña',                         avance: 3.23,  pendientes: 30, estancada: true,  trello: 'https://trello.com/c/vb8SGaoK' },
  { obra: 'Benito Chas & Juan XXIII, Martín Coronado (Consolatta)',      avance: 12.12, pendientes: 29, estancada: true,  trello: 'https://trello.com/c/xhL2d5kT' },
  { obra: 'Gral. José de San Martín 451 (Obispado)',                     avance: 18.18, pendientes: 27, estancada: null, trello: 'https://trello.com/c/UPxYPxK4' },
  { obra: 'Roca 1568',                                                   avance: 15.63, pendientes: 27, estancada: null, trello: 'https://trello.com/c/1kg7y8fZ' },
];

// ── OBRAS >80% BLOQUEADAS POR DEPENDENCIAS ────────────────────────────────────
export const obrasBlockeadas = [
  { obra: 'Mitre 1185',                   avance: 93.75, pendientes: 2, dependencia: 'Conforme a obra, Plano PH',                                                            trello: 'https://trello.com/c/gEAm3kgI' },
  { obra: 'Virasoro 325',                 avance: 91.18, pendientes: 3, dependencia: 'Conforme a obra, Lista Precios, Plano PH',                                             trello: 'https://trello.com/c/WhOOA78o' },
  { obra: 'Yatay 754 (FASECO)',           avance: 88.24, pendientes: 4, dependencia: 'Conforme a obra, Baldosones, Guardas, Plano PH',                                       trello: 'https://trello.com/c/1hWg0hH1' },
  { obra: 'Roca 1680 — Terrazas de Roca', avance: 81.25, pendientes: 6, dependencia: 'Conforme a obra, Cómputo Baldosones, Guardas, Lista Precios, Plano PH, Art. Ilum.',    trello: 'https://trello.com/c/d9VdwctG' },
  { obra: 'Valentín Gómez 4736/44',      avance: 80.65, pendientes: 6, dependencia: 'Conforme a obra, Baldosones, Guardas, Plano PH, accesorios de baños y puertas',        trello: 'https://trello.com/c/GKcxW4wW' },
];

// ── OBRAS CON PLANO PH PENDIENTE ──────────────────────────────────────────────
export const obrasPlanoPH = [
  { obra: 'Abel Costa 761',  avance: 96.88, trello: 'https://trello.com/c/hAQZwR1A' },
  { obra: 'Mitre 1185',      avance: 93.75, trello: 'https://trello.com/c/gEAm3kgI' },
  { obra: 'Hornos 2719',     avance: 93.10, trello: 'https://trello.com/c/TYzjT96k' },
  { obra: 'Las Malvinas',    avance: 93.75, trello: 'https://trello.com/c/yWxjIMmF' },
  { obra: 'Virasoro 325',    avance: 91.18, trello: 'https://trello.com/c/WhOOA78o' },
];

// ── PORTFOLIO GENERAL ─────────────────────────────────────────────────────────
export const portfolio = [
  { estado: 'Finalizadas',         cantidad: 97, descripcion: 'Obras entregadas y cerradas integralmente' },
  { estado: 'En curso',            cantidad: 20, descripcion: 'Obras actualmente en ejecución' },
  { estado: 'No arrancada',        cantidad: 32, descripcion: 'Obras planificadas aún sin inicio' },
  { estado: 'Limbo / Desconocido', cantidad: 58, descripcion: 'Sin estado declarado — auditoría urgente' },
];

// ── TOP 5 OBRAS POR UNIDADES ──────────────────────────────────────────────────
export const topObras = [
  { obra: 'Zafiro (Nordelta)',    unidades: 162, cocheras: 0,   entrega: '01/12/2027', estado: 'En curso' },
  { obra: 'Las Malvinas',        unidades: 132, cocheras: null, entrega: '01/04/2026', estado: 'En curso' },
  { obra: 'Urquiza 4550',        unidades: 128, cocheras: 52,  entrega: '01/11/2028', estado: 'En curso' },
  { obra: 'El Portal de Roca',   unidades: 124, cocheras: 111, entrega: '30/09/2026', estado: 'En curso' },
  { obra: 'Valentín Gómez 4736', unidades: 84,  cocheras: 46,  entrega: '01/12/2027', estado: 'En curso' },
];

// ── OBRAS CON ENTREGA VENCIDA O PRÓXIMA ───────────────────────────────────────
export const obrasEntregaProxima = [
  { obra: 'Las Malvinas', entrega: '01/04/2026', alerta: 'vencida', nota: 'Entrega vencida — 297 días en producción' },
  { obra: 'Mitre 1185',   entrega: '01/04/2026', alerta: 'vencida', nota: 'Múltiples atrasos documentados — vencida hace 52 días' },
  { obra: 'Virasoro 325', entrega: '01/09/2026', alerta: 'alta',    nota: 'Riesgo alto por vencimientos de hormigón y mampostería' },
];

// ── OBRAS EN LIMBO (muestra) ──────────────────────────────────────────────────
export const obrasLimbo = [
  'San Martin 729 (Morón)',
  'Roca 1560 (Hurlingham)',
  'Delfor Díaz 1531 (Hurlingham)',
  'Magnasco (Morón)',
  'Yatay 862 (Morón)',
  'URQUIZA 4638 (Tres de Febrero)',
];

// ── CONCENTRACIÓN GEOGRÁFICA ──────────────────────────────────────────────────
export const concentracionGeografica = [
  { localidad: 'Morón',           cantidad: 73, obras: 'Las Malvinas, Mitre 1185, San Martin 729'             },
  { localidad: 'Tres de Febrero', cantidad: 48, obras: 'Hornos 2719, Valentín Gómez 4736, Bosch y Oro'        },
  { localidad: 'Hurlingham',      cantidad: 21, obras: 'El Portal de Roca, Terrazas de Roca, Roca 1650'       },
  { localidad: 'Nordelta',        cantidad: 3,  obras: 'Zafiro'                                                },
  { localidad: 'Palomar',         cantidad: 1,  obras: 'Virasoro 325'                                         },
];

// ── KPIs — GESTORÍA ───────────────────────────────────────────────────────────
export const kpisGestoria = [
  { label: 'Obras bajo seguimiento',        actual: 60, anterior: null, unidad: '', tendenciaBuena: 'neutral' },
  { label: 'Obras con pasos atrasados',     actual: 25, anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Estancadas >30 días',           actual: 27, anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Vencimientos próximos 14 días', actual: 6,  anterior: null, unidad: '', tendenciaBuena: 'down'    },
];

// ── VENCIMIENTOS URGENTES ─────────────────────────────────────────────────────
export const vencimientos = [
  { obra: 'Roca 1596, Demolición',                      paso: '3. Posesión del terreno',          fecha: '27/03/2026', responsable: 'Terrenos', urgencia: 'critica' },
  { obra: 'Roca 1972/1986, Hurlingham',                 paso: '12. Unificación lotes aprobada',   fecha: '30/03/2026', responsable: 'Municipio', urgencia: 'critica' },
  { obra: 'Caseros 2950/60',                            paso: '9.6. Factibilidad GAS respondida', fecha: '30/03/2026', responsable: 'Municipio', urgencia: 'critica' },
  { obra: 'Delfor Díaz 1541, Hurlingham, Demolición',   paso: '3. Posesión del terreno',          fecha: '31/03/2026', responsable: 'Terrenos', urgencia: 'critica' },
];

// ── OBRAS CON ATRASO >90 DÍAS ─────────────────────────────────────────────────
export const obrasAtraso90 = [
  { obra: 'Virasoro 354, Morón / El Palomar',  paso: '15. Colegio Prof. Aportes',     dias: 199, responsable: 'Gestoría'     },
  { obra: 'Gral. José de San Martín 451, Morón',paso: '14. Visado Previo Ascensor',   dias: 186, responsable: 'Municipio'    },
  { obra: 'Buen Viaje 146, Morón',             paso: '3. Posesión terreno',           dias: 181, responsable: 'Terrenos'     },
  { obra: 'Manuel Quintana 762-766, V. Bosch', paso: '9.6. Factibilidad GAS',         dias: 180, responsable: 'Municipio'    },
  { obra: 'MELIAN 7A/7B/7C/5B',               paso: '6. Anteproyecto definido',      dias: 173, responsable: 'Arquitectura' },
  { obra: 'San Martin 729, Morón',             paso: '2. Escritura Simple',           dias: 166, responsable: 'Terrenos'     },
  { obra: 'La Merced 4484, Caseros',           paso: '6. Anteproyecto definido',      dias: 128, responsable: 'Arquitectura' },
  { obra: 'Gral. Paz 2690-Granero',            paso: '6. Anteproyecto definido',      dias: 122, responsable: 'Arquitectura' },
  { obra: 'MELIAN ESQ. SAN RAMON',             paso: '6. Anteproyecto definido',      dias: 116, responsable: 'Arquitectura' },
  { obra: 'Belgrano 4454, Caseros',            paso: '9.6. Factibilidad GAS',         dias: 105, responsable: 'Municipio'    },
];

// ── OBRAS ESTANCADAS EN GESTORÍA >90 DÍAS ─────────────────────────────────────
export const obrasEstancadasGestoria = [
  { obra: 'Gral. José de San Martín 451, Morón', diasEstancada: 201, paso: 'Visado Previo Ascensor', pasosAdelantados: true,  responsable: 'Municipio'    },
  { obra: 'MELIAN 7A/7B/7C/5B',                  diasEstancada: 200, paso: 'Anteproyecto definido',  pasosAdelantados: true,  responsable: 'Arquitectura' },
  { obra: 'San Martin 729, Morón',                diasEstancada: 196, paso: 'Escritura Simple',       pasosAdelantados: false, responsable: 'Terrenos'     },
  { obra: 'Buen Viaje 146, Morón',                diasEstancada: 188, paso: 'Posesión Terreno',       pasosAdelantados: true,  responsable: 'Terrenos'     },
  { obra: 'Roca 2014 & Bocayuva, Hurlingham',     diasEstancada: 186, paso: 'Escritura Simple',       pasosAdelantados: false, responsable: 'Terrenos'     },
];

// ── BLOQUEOS POR RESPONSABLE ──────────────────────────────────────────────────
export const bloqueosPorResponsable = [
  { responsable: 'Municipio',    cantidad: 8, obras: 'Gral. José de San Martín 451, Belgrano 4454, Manuel Quintana 762-766, y otros' },
  { responsable: 'Terrenos',     cantidad: 7, obras: 'Buen Viaje 146, San Martin 729, Roca 2014 & Bocayuva'                          },
  { responsable: 'Arquitectura', cantidad: 7, obras: 'MELIAN 7A/7B/7C/5B, La Merced 4484, MELIAN ESQ. SAN RAMON, y otros'           },
  { responsable: 'Gestoría',     cantidad: 3, obras: 'Virasoro 354, Justo J. de Urquiza 4638'                                       },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
export const riesgos = [
  {
    riesgo: 'Persistencia de estado "limbo" (25.55% — 58/227 obras)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Gestión de Proyectos / IT',
    consecuencia: 'Zona ciega estratégica: limita reacción, control y priorización',
  },
  {
    riesgo: 'Backlog excedido y pendientes sin control (885 activos sobre 1.611 ítems)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Operaciones / Arquitectura',
    consecuencia: 'Imposibilidad de cumplir entregas; acumulación crónica de obras atrasadas',
  },
  {
    riesgo: 'Críticos municipales prolongados (25 obras >90 días + 27 estancadas)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Gestoría / Jurídicos',
    consecuencia: 'Bloqueos legales y reputacionales de magnitud; riesgo de penalización contractual',
  },
  {
    riesgo: 'Dependencias no resueltas: Plano PH y trámites externos (>5 obras >80% bloqueadas)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Arquitectura / Gestoría',
    consecuencia: 'Frena escrituración, cobranza final y postventa de obras casi terminadas',
  },
  {
    riesgo: 'Fechas pipeline inconsistentes (obras con inicio en 1993–1994)',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Programación / Operaciones',
    consecuencia: 'Error de programación y recursos; sobrecarga ficticia de personal',
  },
];

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Auditar el estado de 58 obras en "limbo"',
      porQue: 'Urge liberar zona ciega de la gestión de obra',
      areaLider: 'Proyectos / IT',
      kpi: '% obras con estado definido',
      riesgoMitigado: 'Falta de visibilidad y control',
    },
    {
      accion: 'Relevar urgente dependencias Plano PH en obras >80% avance',
      porQue: 'Desbloquea escrituración y cobro final de obras casi terminadas',
      areaLider: 'Arquitectura',
      kpi: '% entregas liberadas',
      riesgoMitigado: 'Bloqueos críticos de dependencia externa',
    },
    {
      accion: 'Destrabar prioridades urgentes en gestoría',
      porQue: '25+27 obras fuera de SLA generan riesgo legal y reputacional',
      areaLider: 'Gestoría',
      kpi: '% pasos desbloqueados',
      riesgoMitigado: 'Bloqueos municipales y operativos',
    },
  ],
  d30: [
    {
      accion: 'Actualizar y limpiar pipeline de fechas y unidades',
      porQue: 'Programar nuevos recursos correctamente sobre datos reales',
      areaLider: 'Programación',
      kpi: '% pipeline corregido',
      riesgoMitigado: 'Fechas inconsistentes y eficiencia de recursos',
    },
    {
      accion: 'Implementar check semanal en obras >80% avance',
      porQue: 'Evitar postergaciones por resolve tardío de cuellos de botella',
      areaLider: 'Operaciones',
      kpi: '% obras listas entregadas en fecha',
      riesgoMitigado: 'Postergaciones por dependencias no monitoreadas',
    },
    {
      accion: 'Asignar apoyos extra en proyectos crónicos (<20% avance)',
      porQue: 'Acercar recursos operativos a los cuellos identificados',
      areaLider: 'Dirección Territorial',
      kpi: '% avance en obras <20%',
      riesgoMitigado: 'Estancamientos y backlog cronificado',
    },
  ],
  d90: [
    {
      accion: 'Estrategia de diversificación geográfica',
      porQue: 'Evitar crisis si un territorio se satura o frena (Morón 49%, Tres de Febrero 25%)',
      areaLider: 'Dirección Territorial',
      kpi: '% portfolio fuera de top 2 localidades',
      riesgoMitigado: 'Concentración geográfica excesiva',
    },
    {
      accion: 'Sistematizar liberación proactiva de PH y trámites externos',
      porQue: 'Reducir sorpresas y bloqueos de última hora en obras avanzadas',
      areaLider: 'Arquitectura / Gestoría',
      kpi: '% trámites concluidos en SLA',
      riesgoMitigado: 'Bloqueos externos repetidos',
    },
    {
      accion: 'Cierre de obras limbo y auditoría recurrente mensual',
      porQue: 'Rutina permanente de control para evitar acumulación de zonas ciegas',
      areaLider: 'Proyectos / IT',
      kpi: '% obras sin información faltante',
      riesgoMitigado: 'Falta de visibilidad recurrente',
    },
  ],
};
