// ── MÓDULO 2: COMERCIAL ───────────────────────────────────────────────────────
// Período: Febrero 2026

export const semaforo = [
  { subarea: 'Ventas x periodo', estado: 'Alerta', color: 'amarillo', metrica: 'Brecha avance-ventas 2.2% promedio cartera; picos de hasta 73.8% en Roca 1276', umbral: 'Brecha > 2%' },
  { subarea: 'Ventas y reservas', estado: 'Controlada', color: 'verde', metrica: 'Ratio conversión reservas/boletos 90% (1210 boletos / 1127 reservas)', umbral: 'Ratio > 85%' },
  { subarea: 'Firma boleto', estado: 'Satisfactoria', color: 'verde', metrica: '% recompra 76.2% y satisfacción 69%', umbral: 'Recompra > 70%, Sat. > 60%' },
  { subarea: 'Emblue (email mkt)', estado: 'Crítico', color: 'rojo', metrica: 'Bounce Rate máximo 16.6%; Open Rate < 15% en 2 de 3 campañas', umbral: 'Bounce < 2%; Open > 15%' },
];

export const hallazgos = [
  'Riesgo financiero por avance superior a ventas: obras como Roca 1276 (brecha 73.8%) y Bustillo 357 (brecha 29.2%) con stock inmovilizado y estrés de caja. Fuente: Ventas x Periodo.',
  'Alta eficacia en conversión de reservas: ratio 1.07x (90% de reservas convertidas), sin aging preocupante. Fuente: Ventas y Reservas.',
  'Campañas digitales con problemas estructurales: Bounce Rate 16.6% y Open Rate 7% en "Envío General Dic 2025 - Branding". Sin acción, riesgo de bloqueo por ISPs. Fuente: Emblue.',
];

// Brecha avance vs. ventas
export const brechaAvance = [
  { obra: 'Roca 1276',       avance: 100.0, vendido: 26.2, brecha: 73.8, tipo: 'Stock inmovilizado extremo' },
  { obra: 'Bustillo 357',    avance: 29.2,  vendido: 0.0,  brecha: 29.2, tipo: 'Stock sin tracción' },
  { obra: 'Mitre 929',       avance: 100.0, vendido: 76.2, brecha: 23.8, tipo: 'Riesgo de lento recupero' },
  { obra: 'Promedio cartera',avance: 90.9,  vendido: 88.7, brecha: 2.2,  tipo: 'Ligera sobre-construcción' },
];

// Stock inmovilizado
export const stockInmovilizado = [
  { obra: 'Bustillo 357',    avance: 29.2, vendido: 0,    hipotesis: 'Precio/desalineación de demanda' },
  { obra: 'Roca 1650',       avance: 11.2, vendido: 0,    hipotesis: 'Fallo propuesta valor; comercializadora ineficaz' },
  { obra: 'W. de Tata 4965', avance: null, vendido: 0,    hipotesis: 'Sobreprecio u oferta local similar' },
];

// Motores de solvencia
export const motoresSolvencia = [
  { obra: 'Valentin Gomez 4736', avance: 53.3, vendido: 76.3, rol: 'Motor de liquidez (ventas superan avance)' },
  { obra: 'Hornos 2719',         avance: 83.3, vendido: 97.0, rol: 'Genera cashflow clave' },
  { obra: 'Belgrano 4664',       avance: 48.6, vendido: 60.4, rol: 'Disminuye riesgos de stock' },
];

// Embudo comercial
export const embudo = {
  boletos: 1210,
  reservas: 1127,
  ratio: 1.07,
  agingMas60: 0,
};

// Canal por inmobiliaria
export const canalInmobiliaria = [
  { inmobiliaria: 'Particular',  boletos: 244, reservas: null, ratio: 114.0, clasificacion: 'Motor' },
  { inmobiliaria: 'Jorge Cota',  boletos: 2,   reservas: 8,    ratio: 25.0,  clasificacion: 'Cuello de botella' },
];

// KPIs firma boleto
export const kpisFirmaBoleto = [
  { label: 'Total respuestas encuesta',    actual: 84,   anterior: null, unidad: '', tendenciaBuena: 'up' },
  { label: '% recompra / volvería invertir', actual: 76.2, anterior: null, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Satisfacción atención "Muy buena"', actual: 69.0, anterior: null, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Cumplimiento plazos "Sí"',     actual: 54.8, anterior: null, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Incumplimiento plazos "No"',   actual: 13.1, anterior: null, unidad: '%', tendenciaBuena: 'down' },
];

// Campañas Emblue
export const emblue = [
  { campana: 'Inversiones',                    openRate: 25, ctr: 19, ctor: 130, bounceRate: 5.3,  clasificacion: 'Destacada' },
  { campana: 'No todos buscan lo mismo',       openRate: null, ctr: null, ctor: null, bounceRate: null, clasificacion: 'Oportunidad' },
  { campana: 'Envío General Dic 2025 - Branding', openRate: 7, ctr: 8,  ctor: 174, bounceRate: 16.6, clasificacion: 'Problema grave' },
];

export const riesgos = [
  { riesgo: 'Stock inmovilizado extremo (Roca 1276)', probabilidad: 'alta', impacto: 'alto', area: 'Comercial', consecuencia: 'Capital ocioso, afecta liquidez y TIR' },
  { riesgo: 'Estrés de caja general',                probabilidad: 'alta', impacto: 'alto', area: 'Finanzas/Comercial', consecuencia: 'Puede limitar nuevas inversiones' },
  { riesgo: 'Bounce Rate alto en campañas Emblue',   probabilidad: 'alta', impacto: 'medio', area: 'Marketing', consecuencia: 'Limitación alcance, bloqueo por ISPs' },
  { riesgo: 'Baja conversión canal Jorge Cota',      probabilidad: 'alta', impacto: 'medio', area: 'Comercial', consecuencia: 'Unidades estancadas, bajo performance canal' },
  { riesgo: 'Incumplimiento plazo en entrega (13.1%)', probabilidad: 'media', impacto: 'medio', area: 'Postventa/Obras', consecuencia: 'Confianza perdida, menos recompra' },
  { riesgo: 'Falta retroalimentación cualitativa (91.7% sin feedback)', probabilidad: 'alta', impacto: 'medio', area: 'Atención al cliente', consecuencia: 'Dificultad en mejora operativa real' },
  { riesgo: 'Plazo excesivo "en pozo" (32.1%)',      probabilidad: 'media', impacto: 'medio', area: 'Obra/Planificación', consecuencia: 'Percepción de lentitud, menor satisfacción' },
  { riesgo: 'Sin gestión proactiva de leads por canales', probabilidad: 'media', impacto: 'medio', area: 'Comercial/Marketing', consecuencia: 'Menor rotación, costo de captación superior' },
];

export const planAccion = {
  h72: [
    { accion: 'Limpieza urgente de base de datos Emblue', porQue: 'Rebotes afectan Open Rate y capacidad de alcance', areaLider: 'Marketing', kpi: 'Bounce Rate, Open Rate', riesgoMitigado: 'Mal desempeño campañas digitales' },
    { accion: 'Reunión correctiva con Jorge Cota y canales cuello de botella', porQue: 'Liberar reservas bloqueadas, mejorar ratio de conversión', areaLider: 'Comercial', kpi: 'Ratio conversión reservas', riesgoMitigado: 'Inventario estancado' },
    { accion: 'Brief ejecutivo para pricing y descuentos en Roca 1276', porQue: 'Atacar stock inmovilizado extremo, catalizar ventas urgentes', areaLider: 'Comercial', kpi: 'Unidades vendidas', riesgoMitigado: 'Estrés de caja, baja liquidez' },
  ],
  d30: [
    { accion: 'Rediseñar asuntos y segmentación en campañas Emblue', porQue: 'Mejorar Open Rate y llegada efectiva a nuevas audiencias', areaLider: 'Marketing', kpi: 'Open Rate, Leads nuevos', riesgoMitigado: 'Menor captación de demanda' },
    { accion: 'Ajustar política de recompra e incentivos para inversores', porQue: 'Subir % recompra real y satisfacción', areaLider: 'Comercial', kpi: '% recompra, NPS', riesgoMitigado: 'Pérdida de lealtad' },
    { accion: 'Implementar paquetes de financiamiento directo en Mitre 929', porQue: 'Incrementar atractivo de compra en stock lento', areaLider: 'Comercial', kpi: 'Unidades vendidas', riesgoMitigado: 'Stock parado, falta de cashflow' },
  ],
  d90: [
    { accion: 'Monitoreo trimestral de brecha avance-ventas en toda la cartera', porQue: 'Prever próximos cuellos de botella y anticipar acciones', areaLider: 'Control de gestión', kpi: 'Reducción brecha', riesgoMitigado: 'Estrés de caja recurrente' },
    { accion: 'Estrategia de alianzas con inmobiliarias top y segmento', porQue: 'Maximizar rol del canal líder, ampliar tracción', areaLider: 'Comercial', kpi: 'Unidades vendidas por canal', riesgoMitigado: 'Pérdida de oportunidades' },
    { accion: 'Reporte mensual de aging y feedback en ciclo de reservas', porQue: 'Mantener inexistencia de aging, anticipar backlog, capturar feedback real', areaLider: 'Operaciones', kpi: 'Aging reservas, NPS', riesgoMitigado: 'Reservas trabadas, pérdida de ritmo' },
  ],
};
