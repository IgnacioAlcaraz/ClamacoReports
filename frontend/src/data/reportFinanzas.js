// ── MÓDULO 3: FINANZAS ────────────────────────────────────────────────────────
// Período: Febrero 2026

export const semaforo = [
  { subarea: 'Factibilidades', estado: 'Desfavorable', color: 'rojo',     metrica: 'Obras vigentes: 32, Vencidas: 33, 7 sin fecha asignada', umbral: '> 30% vencidas respecto al total' },
  { subarea: 'Cobranzas',      estado: 'En deterioro', color: 'naranja',  metrica: 'Febrero: -42.5% vs enero, -39.7% vs histórico; pendiente 3.24% del historial', umbral: 'Caída mensual > 20%; pendiente > 3%' },
  { subarea: 'Deudores / Mora',estado: 'Controlable', color: 'amarillo', metrica: '93.8% en mora, monto total bajo ($61,575 vs $95.7M histórico)', umbral: 'Mora > 80% del total / Monto < 5% histórico' },
];

export const hallazgos = [
  'Más obras vencidas (33) que vigentes (32): exposición a incumplimiento contractual inminente y obstáculos financieros operativos. Fuente: Factibilidades.',
  'Caída del 42.5% en cobranzas en febrero 2026 respecto a enero (-39.7% vs promedio histórico), comprometiendo la previsibilidad del flujo de caja. Fuente: Cobranzas.',
  '93.8% de la deuda actual está en mora ($57,775 / $61,575), con concentración en El Portal de Roca y Hornos 2719, aunque dispersión moderada (Gini: 0.367) permite estrategia focalizada. Fuente: Mora.',
];

// ── Factibilidades ──
export const factibilidades = {
  vigentes: 32,
  vencidas: 33,
  sinFecha: 7,
  vencenMenos30: 2,
};

export const vencimientosInminentes = [
  { obra: 'Terrazas de Roca - Roca 1680', servicio: 'Edenor',  contratista: 'CMC', fechaVencimiento: '2026-03-05', riesgo: 'Paralización total, caída de flujo de caja, sobrecostos' },
  { obra: 'Hornos 2719',                  servicio: 'Naturgy', contratista: 'FSC', fechaVencimiento: '2026-03-12', riesgo: 'Detención de obra, posible penalización contractual' },
];

export const falsosVigentes = [
  { obra: 'Las Malvinas 7271',   servicio: 'AYSA',   contratista: 'CMC', consecuencia: 'Distorsión de capacidad real, riesgos de planificación financiera' },
  { obra: 'Vergara 2250',        servicio: 'Edenor', contratista: 'N/D', consecuencia: 'Malas decisiones, sobreasignación de recursos' },
  { obra: 'Roca Golf',           servicio: 'Edenor', contratista: 'N/D', consecuencia: 'Falta de visibilidad, ralentiza reacción ante desviaciones' },
  { obra: 'Frugone / La Merced', servicio: 'Edenor', contratista: 'N/D', consecuencia: 'Subestima riesgos contractuales' },
  { obra: '25 de Mayo 956',      servicio: 'Edenor', contratista: 'N/D', consecuencia: 'Falsa seguridad en factibilidad vigente' },
];

export const cuellosBottella = [
  { obra: 'Frugone / La Merced', bloqueo: 'Falta de cámara', prestadora: 'Edenor', impacto: 'Costos ocultos, demoras materiales' },
  { obra: 'Las Malvinas 7271',   bloqueo: 'Falta de cámara', prestadora: 'Edenor', impacto: 'Paralización, gasto adicional por gestiones' },
  { obra: 'Bosch y Oro',         bloqueo: 'Falta de cámara', prestadora: 'Edenor', impacto: 'Impacto logístico, atrasos operativos' },
  { obra: 'Roca 1276',           bloqueo: 'Falta de cámara', prestadora: 'Edenor', impacto: 'Complicación técnica, frenos en cronograma' },
  { obra: 'El Portal de Roca',   bloqueo: 'Falta de cámara', prestadora: 'Edenor', impacto: 'Bloqueo crítico, alto volumen de cobranza y mora' },
  { obra: 'Roca Prado 1670',     bloqueo: 'Falta de cámara', prestadora: 'Edenor', impacto: 'Acumulación de atrasos, sobrecarga en planificación' },
];

// ── Cobranzas ──
export const cobranzas = {
  feb2026: 862291,
  ene2026: 1499565,
  promHistorico: 1428966,
  variacionVsEnero: -42.5,
  variacionVsHistorico: -39.7,
  pagos: 207,
  totalHistorico: 95727001,
  pendienteTotal: 3099886,
  pctPendienteVsHistorico: 3.24,
};

export const topObrasCobranza = [
  { obra: 'América',               cobrado: 15820150, pendiente: 246,    interpretacion: 'Saneada' },
  { obra: 'El Portal de Roca',     cobrado: 10285495, pendiente: 910373, interpretacion: 'Alto riesgo, urgente intervención' },
  { obra: 'Lioni',                 cobrado: 7629869,  pendiente: 13471,  interpretacion: 'Cerca de completarse' },
  { obra: 'Roca Golf',             cobrado: 7464070,  pendiente: 60,     interpretacion: 'Residual' },
  { obra: 'Las Malvinas 7254',     cobrado: 7302055,  pendiente: 16100,  interpretacion: 'Bajo pendiente' },
];

export const topObrasPendiente = [
  { obra: 'El Portal de Roca',           pendiente: 910373, riesgo: 'Prioridad absoluta, expuesta en mora y factibilidad' },
  { obra: 'Valentin Gomez 4736/44',      pendiente: 418750, riesgo: 'Acumulación con tendencia al alza' },
  { obra: 'Hornos 2719',                 pendiente: 416904, riesgo: 'Coincide con vencimiento próximo / foco financiero' },
  { obra: 'Urquiza 4550',                pendiente: 393640, riesgo: 'Alto, aunque acotado respecto a total histórico' },
  { obra: 'Terrazas de Roca - Roca 1680',pendiente: 218650, riesgo: 'También bajo peligro de vencimiento' },
];

export const topInmobiliarias = [
  { inmobiliaria: 'Particular',    cobrado: 19279059, pendiente: 769882, efectividad: 96, morosos: 17, clasificacion: 'Alto volumen, riesgo latente' },
  { inmobiliaria: 'Zelaschi',      cobrado: 14958854, pendiente: 157636, efectividad: 99, morosos: 13, clasificacion: 'Efectiva' },
  { inmobiliaria: 'Yamil Remax',   cobrado: 8538535,  pendiente: 512772, efectividad: 94, morosos: 9,  clasificacion: 'Riesgo medio' },
  { inmobiliaria: 'Di Paolo',      cobrado: 8214357,  pendiente: 525600, efectividad: 94, morosos: 18, clasificacion: 'Riesgo medio' },
  { inmobiliaria: 'Marcelo Russo', cobrado: 7551930,  pendiente: 287830, efectividad: 96, morosos: 8,  clasificacion: 'Efectiva' },
];

// ── Mora ──
export const mora = {
  deudaTotal: 61575,
  moraTotal: 57775,
  pctMora: 93.83,
  noVencida: 3800,
  deudoresUnicos: 33,
  gini: 0.367,
  hhi: 0.050,
};

export const topDeudoresMora = [
  { deudor: 'Claudio Carusso',           montomora: 7200, obra: 'Lioni' },
  { deudor: 'Marcelo Belingar',          montomora: 4300, obra: 'Mitre 1185' },
  { deudor: 'Ricardo Martín Claveras',   montomora: 4040, obra: 'Valentin Gomez 4736' },
  { deudor: 'Roberto Hercules Zarlenga', montomora: 3648, obra: 'N/D' },
  { deudor: 'María Belén Salatino',      montomora: 3050, obra: 'N/D' },
];

export const topObrasMora = [
  { obra: 'El Portal de Roca',   montomora: 17529, pct: 30.34 },
  { obra: 'Hornos 2719',         montomora: 10750, pct: 18.61 },
  { obra: 'Lioni',               montomora: 7200,  pct: 12.47 },
  { obra: 'Valentin Gomez 4736', montomora: 4840,  pct: 8.38 },
  { obra: 'Mitre 1185',          montomora: 4708,  pct: 8.15 },
];

export const topInmobiliariasMora = [
  { inmobiliaria: 'Particular',        montomora: 16739, pct: 28.96 },
  { inmobiliaria: 'Zelaschi',          montomora: 15870, pct: 27.46 },
  { inmobiliaria: 'Di Paolo',          montomora: 5140,  pct: 8.89 },
  { inmobiliaria: 'Norberto Gonzalez', montomora: 4300,  pct: 7.44 },
  { inmobiliaria: 'Guarnieri',         montomora: 4040,  pct: 6.99 },
];

export const riesgos = [
  { riesgo: 'Caída sostenida de cobranzas',                              probabilidad: 'alta',     impacto: 'alto',  area: 'Administración',        consecuencia: 'Menos capital operativo, retrasos en pagos' },
  { riesgo: 'Exceso de obras con factibilidades vencidas (33/65 = 50.7%)', probabilidad: 'muy alta', impacto: 'alto',  area: 'Ingeniería/Operaciones', consecuencia: 'Parálisis productiva, penalidades contractuales' },
  { riesgo: 'Transformación de deuda no vencida en mora ($3,800)',        probabilidad: 'media',    impacto: 'alto',  area: 'Administración',        consecuencia: 'Puede subir mora > 95%, sumando estados críticos' },
  { riesgo: 'Dependencia en pocos grandes deudores (concentración > 60%)', probabilidad: 'alta',    impacto: 'alto',  area: 'Finanzas',              consecuencia: 'Un impago masivo afecta gran parte del flujo' },
  { riesgo: 'Obras sin fecha asignada (7 registros)',                      probabilidad: 'alta',    impacto: 'medio', area: 'Planificación',         consecuencia: 'Desviaciones de cronograma, descontrol en caja' },
  { riesgo: 'Cuellos de botella técnicos (6 obras bloqueadas por Edenor)', probabilidad: 'alta',   impacto: 'alto',  area: 'Ingeniería',            consecuencia: 'Congelamiento pipeline, pérdida de clientes' },
];

export const planAccion = {
  h72: [
    { accion: 'Revisar y negociar renovación de obras con vencimiento < 30 días', porQue: 'Evitar cortes de obra y caída de flujo de caja', areaLider: 'Ingeniería / Adm.', kpi: 'Cantidad de obras vigentes', riesgoMitigado: 'Interrupción operativa, caída de cobranzas' },
    { accion: 'Detectar y corregir "falsos vigentes" en el sistema',              porQue: 'Prevención de errores de asignación presupuestaria', areaLider: 'Sistemas / Control', kpi: '% de registros actualizados', riesgoMitigado: 'Planificación incorrecta, sobreasignación de fondos' },
    { accion: 'Contactar a top-5 deudores en mora',                               porQue: 'Acelerar recuperación de cuentas mayores', areaLider: 'Finanzas / Cobranzas', kpi: 'Monto recuperado ($)', riesgoMitigado: 'Pérdida líquida acelerada' },
  ],
  d30: [
    { accion: 'Cronograma de cierre de cuellos técnicos',      porQue: 'Prioridad: desbloquear cashflow y nuevas habilitaciones', areaLider: 'Ingeniería', kpi: '# obras con bloqueo resuelto', riesgoMitigado: 'Congelamiento pipeline de ventas' },
    { accion: 'Reuniones semanales con Edenor/Naturgy',         porQue: 'Resolución institucional de bloqueos críticos externos', areaLider: 'Operaciones', kpi: '% backlog resuelto', riesgoMitigado: 'Multiplicación de demoras y costos' },
    { accion: 'Implementar alertas de cobranza recurrente',     porQue: 'Mejor monitoreo y anticipación de mora', areaLider: 'Sistemas', kpi: '% morosidad', riesgoMitigado: 'Transformación de deuda sana en mora' },
  ],
  d90: [
    { accion: 'Auditoría transversal periódica de factibilidades',            porQue: 'Saneamiento preventivo y robustecimiento de reportes', areaLider: 'Control interno', kpi: '% falsos vigentes', riesgoMitigado: 'Distorsión sistémica, errores en decisiones' },
    { accion: 'Estrategia de segmentación y reestructuración de deuda',       porQue: 'Reducción proactiva de mora acumulada', areaLider: 'Finanzas / Cobranzas', kpi: '% mora', riesgoMitigado: 'Cercanía a instrumentos de ejecución judicial' },
    { accion: 'Negociación de planes de pago con top pendientes',             porQue: 'Foco cashflow y reducción de concentración de riesgo', areaLider: 'Finanzas', kpi: '% recupero', riesgoMitigado: 'Sobrecarga de liquidez concentrada en pocas cuentas' },
  ],
};
