// ── MÓDULO 2: COMERCIAL ───────────────────────────────────────────────────────
// Período: Abril 2026

export const semaforo = [
  {
    subarea: 'Ventas x periodo',
    estado: 'Crítico',
    color: 'rojo',
    metrica: '21.9% de unidades vendidas vs 89.9% de avance físico promedio; 107 de 118 obras con descalce positivo (avance > venta)',
    umbral: 'Brecha aceptable: ±5%. Observado: +68pp promedio',
  },
  {
    subarea: 'Ventas y reservas',
    estado: 'Estable con tendencia negativa',
    color: 'amarillo',
    metrica: 'Caída YoY del 32% en boletos (141→93) y 30% en reservas (131→92); mora actual 0 días',
    umbral: 'Caída aceptable: <10% YoY. Observado: -32%',
  },
  {
    subarea: 'Firma boleto',
    estado: 'Satisfactorio',
    color: 'verde',
    metrica: '77% recompraría, 70% califica atención como "muy buena", 55.2% cumplimiento de plazo',
    umbral: 'Recompra >70%, satisfacción >65%',
  },
  {
    subarea: 'Emblue (email marketing)',
    estado: 'Alerta crítica',
    color: 'rojo',
    metrica: 'Bounce rate 16.6% en campaña "Branding" (7.596 rebotes sobre 45.852 enviados)',
    umbral: 'Bounce rate aceptable: <5%. Observado: 16.6%',
  },
];

export const hallazgos = [
  'Capital paralizado en activos terminados sin tracción comercial: Tres obras (DUPLEX, EL BOSQUE, YATAY 735) llevan 339 meses (28 años) con avance 100% y 0 ventas. 107 de 118 obras exhiben descalce avance-venta, concentrando capital en cemento en lugar de caja.',
  'Concentración de flujo en pocos motores de solvencia: Solo tres obras (AMERICA 347, MORENO 762, VIGNES 250) lograron sell-out completo y sostienen la liquidez que compensa el descalce del resto del portafolio. Esta dependencia del 2.5% de las obras activas genera fragilidad estructural.',
  'Riesgo de reputación del sender por bounce rate crítico: La campaña "Envío General Diciembre 2025 - Branding" registró 16.6% de bounce rate (3.3x el umbral aceptable), poniendo en riesgo la entregabilidad de todas las comunicaciones futuras del dominio por potencial blacklisting de ISPs.',
];

// ── SECCIÓN 2: VENTAS X PERIODO ───────────────────────────────────────────────

export const termometroGlobal = [
  { label: 'Obras activas',            actual: 118,  unidad: '',  delta: null },
  { label: 'Unidades totales activas', actual: 2555, unidad: '',  delta: null },
  { label: 'Unidades vendidas',        actual: 559,  unidad: '',  nota: '21.9% del inventario' },
  { label: 'Unidades disponibles',     actual: 1996, unidad: '',  nota: '78.1% del inventario' },
  { label: 'Avance físico prom.',      actual: 89.9, unidad: '%', nota: 'Ponderado por obra' },
  { label: 'Ventas prom. ponderado',   actual: 21.9, unidad: '%', nota: 'Ponderado por obra' },
  { label: 'Gap avance-venta',         actual: 68,   unidad: 'pp',nota: '89.9% avance vs 21.9% vendido' },
  { label: 'Obras con brecha positiva',actual: 107,  unidad: '',  nota: '90.7% del portafolio' },
];

export const brechaAvance = [
  { obra: 'DUPLEX',                    avance: 100,  vendido: 0,    brecha: 100,  tipo: 'Stock muerto (339 meses sin venta)' },
  { obra: 'EL BOSQUE',                 avance: 100,  vendido: 0,    brecha: 100,  tipo: 'Stock muerto (339 meses sin venta)' },
  { obra: 'YATAY 735',                 avance: 100,  vendido: 0,    brecha: 100,  tipo: 'Stock muerto (339 meses sin venta)' },
  { obra: 'ESTACIONAMIENTO HURLINGHAM',avance: 100,  vendido: 14.3, brecha: 85.7, tipo: 'Descalce (tipología sin demanda)' },
  { obra: 'TORRE CRISTAL',             avance: 100,  vendido: 20,   brecha: 80,   tipo: 'Descalce (sin gestión activa, 76 meses)' },
  { obra: 'HORNOS 2719',               avance: 100,  vendido: 25,   brecha: 75,   tipo: 'Descalce (sin gestión activa, 78 meses)' },
  { obra: 'ECHAGÜE 4935',              avance: 96.2, vendido: 25,   brecha: 71.2, tipo: 'Descalce' },
  { obra: 'BONIFACINI 4875',           avance: 95.7, vendido: 30.4, brecha: 65.3, tipo: 'Descalce' },
  { obra: 'FISCHETTI 6070',            avance: 94.1, vendido: 33.3, brecha: 60.8, tipo: 'Descalce' },
  { obra: 'GRANT 186',                 avance: 90,   vendido: 35,   brecha: 55,   tipo: 'Descalce' },
];

export const top3Descalzadas = [
  {
    obra: 'ESTACIONAMIENTO HURLINGHAM',
    avance: 100,
    vendido: 14.3,
    brecha: 85.7,
    unidades: '1 de 7',
    mesesSinVenta: 73,
    causa: 'Obra compuesta por cocheras en segmento residencial de Hurlingham. El mix de tipología (solo cocheras, sin unidades habitacionales) limita la demanda: los compradores suelen adquirirlas junto a departamentos, no como producto standalone. No hay evidencia de descuentos aplicados ni campañas específicas para este segmento.',
    impactoFinanciero: 'Capital inmovilizado en 6 cocheras terminadas sin comprador. Proyectando a velocidad actual (1 venta en 73 meses), el sell-out proyectado es 438 meses (36.5 años).',
    consecuencia: 'Capital muerto por décadas. Necesario liquidar con descuento agresivo del 25-30% y ofrecer combo con unidades habitacionales de otras obras para tracción cruzada.',
    ritmoCronograma: 'S/D — sin cronograma registrado en sistema, imposibilitando gestión profesional del ciclo comercial.',
  },
  {
    obra: 'TORRE CRISTAL',
    avance: 100,
    vendido: 20,
    brecha: 80,
    unidades: '1 de 5',
    mesesSinVenta: 76,
    causa: 'Segmento residencial con 5 unidades totales. Sin ventas en los últimos 76 meses. El estancamiento prolongado sugiere problema de precio/producto o ausencia de gestión comercial activa. No hay evidencia de campañas digitales específicas ni asignación prioritaria a brokers motores.',
    impactoFinanciero: '4 unidades terminadas sin comprador durante más de 6 años. Gastos de mantenimiento, expensas e impuestos corriendo sin propietario.',
    consecuencia: 'Repricing agresivo (-25%) y asignación de unidades a brokers con doble comisión si cierran en 30 días. Stock no rotativo convierte a TORRE CRISTAL en lastre financiero.',
    ritmoCronograma: 'S/D — mismo hallazgo que ESTACIONAMIENTO HURLINGHAM.',
  },
  {
    obra: 'HORNOS 2719',
    avance: 100,
    vendido: 25,
    brecha: 75,
    unidades: '1 de 4',
    mesesSinVenta: 78,
    causa: 'Obra pequeña (4 unidades) con venta única hace 78 meses. Patrón idéntico a TORRE CRISTAL: producto terminado sin tracción comercial prolongada. Sin campañas Emblue específicas ni evidencia de gestión activa del stock.',
    impactoFinanciero: '3 unidades inmovilizadas durante 6.5 años. Costo de oportunidad acumulado supera el margen original del proyecto.',
    consecuencia: 'Liquidación con descuento del 30% y gestión agresiva de brokers con incentivo variable por cierre inmediato.',
    ritmoCronograma: 'S/D.',
  },
];

export const stockInmovilizado = [
  {
    obra: 'DUPLEX',
    avance: 100,
    vendido: 0,
    hipotesis: 'Producto inadecuado + precio fuera de mercado + ausencia total de gestión comercial. 339 meses (28 años) sin ninguna venta. Sell-out proyectado: infinito.',
  },
  {
    obra: 'EL BOSQUE',
    avance: 100,
    vendido: 0,
    hipotesis: 'Producto inadecuado + precio fuera de mercado + ausencia total de gestión comercial. 339 meses (28 años) sin ninguna venta. Sell-out proyectado: infinito.',
  },
  {
    obra: 'YATAY 735',
    avance: 100,
    vendido: 0,
    hipotesis: 'Producto inadecuado + precio fuera de mercado + ausencia total de gestión comercial. 339 meses (28 años) sin ninguna venta. Sell-out proyectado: infinito.',
  },
];

export const motoresSolvencia = [
  {
    obra: 'AMERICA 347',
    avance: 100,
    vendido: 100.3,
    rol: 'Motor primario: sell-out completo (110/110 unidades) hace 32 meses, velocidad 1.21 u/mes. Genera cashflow que compensa el descalce de 15-20 obras pequeñas.',
  },
  {
    obra: 'MORENO 762',
    avance: 100,
    vendido: 100,
    rol: 'Motor secundario: sell-out completo (19/19 unidades) hace 33 meses, velocidad 0.26 u/mes. Aporta liquidez estable sin remanente.',
  },
  {
    obra: 'VIGNES 250',
    avance: 100,
    vendido: 100,
    rol: 'Motor secundario: sell-out completo (19/19 unidades), velocidad 0.29 u/mes. Cashflow recurrente sin stock inmovilizado.',
  },
];

export const estresCaja = {
  causa: '107 de 118 obras activas (90.7%) exhiben brecha positiva entre avance físico y ventas, con un gap promedio ponderado de 68 puntos porcentuales (89.9% avance vs 21.9% vendido). El capital propio se invirtió en construir activos que no se vendieron al ritmo esperado, inmovilizando recursos en cemento en lugar de convertirlos en caja.',
  mecanismo: [
    'Costo de oportunidad: El capital inmovilizado en 107 obras no puede reinvertirse en nuevos proyectos, adquisición de terrenos, ni instrumentos financieros que generen retorno.',
    'Gastos corrientes sin ingresos: Las obras terminadas sin vender requieren mantenimiento, pago de expensas, impuestos, seguros y seguridad, todos absorbidos por el desarrollador sin ingreso compensatorio.',
  ],
  impacto: [
    '1.996 unidades disponibles (78.1% del inventario total) representan capital inmovilizado masivo.',
    '107 obras con gap positivo generan estrés de caja recurrente: cada mes sin venta profundiza el descalce entre salidas (gastos corrientes) y entradas (cobranzas de ventas).',
    '90.7% del portafolio en situación irregular.',
  ],
  consecuencias: [
    'Incapacidad de cumplir pagos a proveedores y subcontratistas, generando litigios y paralización de obras en ejecución.',
    'Imposibilidad de iniciar nuevos proyectos por falta de capital disponible, deteniendo el crecimiento orgánico del desarrollador.',
    'Necesidad de financiamiento externo (créditos o adelantos de compradores) en condiciones desfavorables, erosionando la TIR de los proyectos.',
  ],
  cifras: {
    unidadesInmovilizadas: 1996,
    pctObrasGapPositivo: 90.7,
    obrasGapMas50pp: 10,
  },
};

// ── SECCIÓN 3: VENTAS Y RESERVAS ──────────────────────────────────────────────

export const embudo = {
  boletos:    1260,
  reservas:   1153,
  ratio:      1.09,
  agingMas60: 0,
};

export const estadoEmbudoDetalle = [
  {
    metrica: 'Boletos firmados (acumulado)',
    valor: '1.260',
    benchmark: 'N/A (dato interno)',
    interpretacion: 'Volumen robusto, señal de gestión comercial activa sostenida en el tiempo',
  },
  {
    metrica: 'Reservas activas (acumulado)',
    valor: '1.153',
    benchmark: 'N/A (dato interno)',
    interpretacion: 'Diferencial del 8.5% vs boletos indica embudo limpio sin acumulación de pendientes',
  },
  {
    metrica: 'Boletos (últimos 30 días)',
    valor: '95',
    benchmark: 'N/A',
    interpretacion: 'Aceleración del 53% vs mes anterior (62 boletos)',
  },
  {
    metrica: 'Reservas (últimos 30 días)',
    valor: '66',
    benchmark: 'N/A',
    interpretacion: 'Aceleración del 37.5% vs mes anterior (48 reservas)',
  },
  {
    metrica: 'Ratio conversión (acumulado)',
    valor: '109%',
    benchmark: '80-95% (industria inmobiliaria)',
    interpretacion: 'Ratio >100%: boletos firmados sobre reservas de períodos anteriores. Señal de eficiencia en cierre, no error.',
  },
  {
    metrica: 'Reservas en mora >30 días',
    valor: '0',
    benchmark: '<5% aceptable',
    interpretacion: 'Embudo completamente limpio, sin trabas operativas',
  },
];

export const tendenciaYoY = [
  { metrica: 'Boletos', anio2025: 141, anio2026: 93, variacionAbs: -48, variacionPct: -32 },
  { metrica: 'Reservas', anio2025: 131, anio2026: 92, variacionAbs: -39, variacionPct: -30 },
];

export const canalInmobiliaria = [
  { inmobiliaria: 'Particular',       boletos: 255, reservas: 219, ratio: 116.4, clasificacion: 'Motor' },
  { inmobiliaria: 'Di Paolo',         boletos: 186, reservas: 161, ratio: 115.5, clasificacion: 'Motor' },
  { inmobiliaria: 'Zelaschi',         boletos: 161, reservas: 140, ratio: 115.0, clasificacion: 'Motor' },
  { inmobiliaria: 'Yamil Remax',      boletos: 150, reservas: 131, ratio: 114.5, clasificacion: 'Motor' },
  { inmobiliaria: 'Restelli',         boletos: 82,  reservas: 73,  ratio: 112.3, clasificacion: 'Normal' },
  { inmobiliaria: 'B&L Propiedades',  boletos: 58,  reservas: 52,  ratio: 111.5, clasificacion: 'Normal' },
  { inmobiliaria: 'Inmovilium',       boletos: 53,  reservas: 48,  ratio: 110.4, clasificacion: 'Normal' },
  { inmobiliaria: 'Jorge Cota',       boletos: 2,   reservas: 10,  ratio: 20.0,  clasificacion: 'Cuello de botella' },
];

export const agingReservas = {
  moraMas30: 0,
  moraMas60: 0,
  promedioDias: 0,
  responsables: [
    { responsable: 'Jose', pendientes: 0, promedioDias: 0 },
  ],
  obrasCriticas: [
    { obra: 'GRANT 186', nota: 'Sin bloqueos actuales. Mencionada como "edificio trabado" en períodos anteriores. Sin datos de reservas o boletos específicos en este ciclo.' },
  ],
};

// ── SECCIÓN 4: FIRMA BOLETO ───────────────────────────────────────────────────

export const firmaBoleto = {
  kpis: [
    { label: 'Total respuestas encuesta', actual: 87,   unidad: '' },
    { label: 'Recompra declarada (Sí)',    actual: 77,   unidad: '%' },
    { label: 'Satisfacción "Muy Buena"',  actual: 70.1, unidad: '%' },
    { label: 'Cumplimiento de plazo',     actual: 55.2, unidad: '%' },
    { label: 'Recompra "Tal vez"',        actual: 19.5, unidad: '%' },
    { label: 'Incumplimiento de plazo',   actual: 13.8, unidad: '%' },
  ],
  satisfaccion: [
    { nivel: 'Muy Buena', pct: 70.1, cantidad: 61 },
    { nivel: 'Buena',     pct: 25.3, cantidad: 22 },
    { nivel: 'Regular',   pct: 4.6,  cantidad: 4  },
  ],
  captacion: [
    { canal: 'Inmobiliarias',                        pct: 53.4, cantidad: 39 },
    { canal: 'Contacto de referencia',               pct: 15.1, cantidad: 11 },
    { canal: 'Publicidad',                           pct: 8.2,  cantidad: 6  },
    { canal: 'Contacto de referencia + Inmobiliaria',pct: 8.2,  cantidad: 6  },
    { canal: 'Sin dato',                             pct: 15.1, cantidad: 11 },
  ],
  cumplimientoPlazo: [
    { estado: 'Sí (plazo cumplido)',       pct: 55.2, cantidad: 48, riesgo: 'Ninguno — satisfacción alta preserva reputación' },
    { estado: 'Departamento de Pozo',      pct: 31.0, cantidad: 27, riesgo: 'Bajo: compradores conscientes de que compran pozo' },
    { estado: 'No (plazo incumplido)',     pct: 13.8, cantidad: 12, riesgo: 'Riesgo reputacional: cada caso puede disuadir a 3-5 prospectos' },
  ],
  insights: [
    '77% de recompra declarada supera el benchmark inmobiliario (60-65%), confirmando alta satisfacción con el producto entregado, la calidad constructiva y la atención recibida.',
    'Canal dominante: Inmobiliarias (53.4%). El canal de referidos (15.1%) está subaprovechado dado el 77% de recompra — debería haber más captación orgánica.',
    '13.8% de compradores (12 de 87) reporta incumplimiento de plazo de entrega — cada caso puede disuadir a 3-5 prospectos por boca a boca negativo.',
    'Aislación acústica mencionada en comentarios abiertos como punto de mejora técnica correctiva urgente.',
  ],
  riesgos: [
    { severidad: 'media', texto: 'Incumplimiento de plazos (13.8%): 12 compradores con experiencia negativa, potenciales detractores. En mercado argentino de baja confianza en desarrolladores, cada caso pesa más.' },
    { severidad: 'media', texto: 'Aislación acústica mencionada en comentarios abiertos: problema técnico que puede escalar a reclamos colectivos y afectar precio de reventa.' },
    { severidad: 'baja',  texto: 'Baja profundidad de feedback (90.8% sin comentarios): encuesta no incentiva respuestas profundas, se pierden señales de problemas latentes.' },
    { severidad: 'baja',  texto: '16.1% sin dato en "¿Cómo nos conociste?": imposibilidad de optimizar inversión en canales de captación.' },
  ],
  oportunidades: [
    'Activar canal de referidos formalmente: con 77% de recompra, implementar incentivo del 2% del valor de la unidad vendida por referido convertido en boleto.',
    'Contactar proactivamente al 19.5% "Tal vez" (17 compradores) con llamada o visita personalizada para identificar objeción y convertirlos en promotores activos.',
    'Mejorar calidad de feedback: rediseñar encuesta con 2 preguntas abiertas obligatorias + incentivo por completar (sorteo de mejoras en unidad).',
  ],
  planAccion7dias: [
    'Contactar a los 12 compradores con plazo incumplido y ofrecer compensación concreta (descuento en próxima compra o upgrade sin costo en unidad entregada).',
    'Comunicar a todos los compradores satisfechos la existencia de un programa de referidos con incentivo: referido que cierre boleto genera beneficio para el referente.',
    'Auditar campo "¿Cómo nos conociste?" en CRM para corregir el 16.1% sin dato.',
  ],
  conclusion: 'El comprador de Clamaco está satisfecho (77% recompra, 95.4% califica la atención como Buena o Muy Buena), pero el 13.8% con plazo incumplido y el subaprovechamiento del canal de referidos son las dos palancas de mejora inmediata. Con compensación activa a detractores y programa de referidos en marcha, el módulo puede consolidarse en verde en 30 días.',
};

// ── SECCIÓN 5: EMBLUE ─────────────────────────────────────────────────────────

export const emblue = [
  { campana: 'Inversiones',                           openRate: 25, ctr: 19, ctor: 130, bounceRate: 5.3,  clasificacion: 'Destacada' },
  { campana: 'No todos buscan lo mismo - Disparador', openRate: 12, ctr: 6,  ctor: 64,  bounceRate: 11.1, clasificacion: 'Deficiente' },
  { campana: 'Envío General Dic 2025 - Branding',     openRate: 7,  ctr: 8,  ctor: 174, bounceRate: 16.6, clasificacion: 'Problema grave' },
];

export const embleaBenchmarks = [
  { metrica: 'Open Rate "Inversiones"',  valorCampana: '25%',  benchmark: '12-15%', brecha: '+10-13pp', interpretacion: 'Muy superior; segmentación y asunto efectivos' },
  { metrica: 'Open Rate "Disparador"',   valorCampana: '12%',  benchmark: '12-15%', brecha: '-0-3pp',   interpretacion: 'Dentro de rango bajo; segmentación mejorable' },
  { metrica: 'Open Rate "Branding"',     valorCampana: '7%',   benchmark: '12-15%', brecha: '-5-8pp',   interpretacion: 'Crítico; asunto ineficaz o reputación sender afectada' },
  { metrica: 'CTR "Inversiones"',        valorCampana: '19%',  benchmark: '5-8%',   brecha: '+11-14pp', interpretacion: 'Excepcional; contenido altamente relevante' },
  { metrica: 'CTR "Disparador"',         valorCampana: '6%',   benchmark: '5-8%',   brecha: '-2-0pp',   interpretacion: 'Dentro de rango bajo' },
  { metrica: 'CTR "Branding"',           valorCampana: '8%',   benchmark: '5-8%',   brecha: '0-3pp',    interpretacion: 'Dentro de rango; no compensa bajo open rate' },
  { metrica: 'CTOR "Inversiones"',       valorCampana: '130%', benchmark: '25-35%', brecha: '+95-105pp',interpretacion: 'Anómalo; posible error de cálculo o clicks duplicados' },
  { metrica: 'CTOR "Disparador"',        valorCampana: '64%',  benchmark: '25-35%', brecha: '+29-39pp', interpretacion: 'Superior a benchmark; clicks múltiples por usuario' },
  { metrica: 'CTOR "Branding"',          valorCampana: '174%', benchmark: '25-35%', brecha: '+139-149pp',interpretacion: 'Anómalo; requiere auditoría técnica urgente' },
  { metrica: 'Bounce Rate "Inversiones"',valorCampana: '5.3%', benchmark: '2-5%',   brecha: '+0.3-3.3pp',interpretacion: 'Borderline; aceptable pero mejorable' },
  { metrica: 'Bounce Rate "Disparador"', valorCampana: '11.1%',benchmark: '2-5%',   brecha: '+6.1-9.1pp',interpretacion: 'Inaceptable; riesgo de penalización ISPs' },
  { metrica: 'Bounce Rate "Branding"',   valorCampana: '16.6%',benchmark: '2-5%',   brecha: '+11.6-14.6pp',interpretacion: 'Crítico; riesgo severo de blacklisting' },
];

export const embleaAlertas = [
  {
    alerta: 'Bounce Rate 16.6% en "Envío General Diciembre 2025 - Branding"',
    metrica: '16.6% (7.596 rebotes de 45.852 enviados)',
    umbral: '<5%',
    riesgo: 'Blacklisting inmediato por ISPs, afectando entregabilidad de todas las campañas futuras del dominio. Pérdida total de canal email como herramienta comercial.',
  },
  {
    alerta: 'Bounce Rate 11.1% en "No todos buscan lo mismo - Disparador"',
    metrica: '11.1% (4.683 rebotes de 42.197 enviados)',
    umbral: '<5%',
    riesgo: 'Contribución significativa al deterioro de reputación sender. Sumado a los 7.596 de Branding, el total de rebotes recientes (12.279) puede activar filtros automáticos de ISPs.',
  },
  {
    alerta: 'CTOR anómalamente altos en las tres campañas',
    metrica: '130% (Inversiones), 64% (Disparador), 174% (Branding)',
    umbral: '25-35%',
    riesgo: 'Posible error en cálculo de clicks (duplicados, bots, tracking defectuoso). Distorsiona análisis de efectividad e impide optimización basada en datos confiables.',
  },
  {
    alerta: 'Open Rate 7% en campaña "Branding"',
    metrica: '7% (2.614 aperturas de 38.256 efectivos)',
    umbral: '>12%',
    riesgo: 'Evidencia de asunto ineficaz o sender reputation dañada. Emails probablemente llegando a spam. Si no se corrige, campañas futuras sufrirán el mismo destino.',
  },
];

// ── SECCIÓN 6: CRUCES ENTRE LOS 4 REPORTES ───────────────────────────────────

export const crucesModulos = [
  {
    causa: '107 obras con descalce avance-venta + bounce rate 16.6% en campaña Branding',
    mecanismo: 'El capital está inmovilizado en 1.996 unidades disponibles, pero el canal digital (email) que podría acelerar rotación está colapsado por mala calidad de base de datos. Los envíos masivos a listas sin limpiar generan alto bounce rate, dañando la reputación sender y reduciendo la entregabilidad.',
    impacto: 'Imposibilidad de usar email marketing para impulsar ventas de stock inmovilizado. Canal digital pierde efectividad justo cuando más se necesita (desbloquear 107 obras con descalce).',
    consecuencia: 'Dependencia total de brokers externos para colocar stock, con concentración crítica en 4 inmobiliarias (60% del volumen). Si estos brokers reducen actividad, no hay plan B digital efectivo. Stock sigue inmovilizado, profundizando el estrés de caja.',
  },
  {
    causa: 'Caída YoY 32% en boletos + 90.7% de obras con brecha positiva',
    mecanismo: 'Menos leads entrantes (caída 32% YoY) se encuentran con un portafolio donde el 90.7% de las obras tiene descalce, señalando productos sin tracción o mal preciados. La combinación de menor demanda + productos no competitivos genera círculo vicioso: cada mes sin ventas empeora la percepción de "obra estancada", reduciendo aún más el interés.',
    impacto: 'Velocidad de rotación de stock disminuye aún más, profundizando el estrés de caja. Obras con descalce acumulan más meses sin venta, aumentando el costo de oportunidad y los gastos corrientes sin ingresos.',
    consecuencia: 'Sin corrección urgente (repricing agresivo + relanzamiento de obras estancadas + limpieza de embudo digital), el portafolio evolucionará hacia crisis de liquidez con incapacidad de pagar proveedores, iniciar nuevos proyectos o cumplir compromisos financieros.',
  },
  {
    causa: 'Concentración de ventas en 4 brokers (60%) + 77% recompra declarada',
    mecanismo: 'El 60% de los boletos proviene de solo 4 inmobiliarias, pero el 77% de compradores declara que volvería a comprar. Esto señala un activo subaprovechado (compradores satisfechos) que no está siendo activado formalmente como canal de referidos.',
    impacto: 'Pérdida de captación gratuita: cada comprador satisfecho que no refiere nuevos clientes es una oportunidad de venta perdida. Con 77% de recompra, deberían ingresar más prospectos por boca a boca.',
    consecuencia: 'Dependencia crítica de brokers persiste sin contrapeso. Si estos 4 canales reducen priorización de unidades de Clamaco (por competencia de otros desarrolladores o cambios en comisiones), el volumen de ventas cae sin red de seguridad.',
  },
  {
    causa: '13.8% incumplimiento de plazos + open rate 7% en campaña Branding',
    mecanismo: 'El 13.8% de compradores reporta plazo incumplido, generando potenciales detractores. Simultáneamente, la campaña de email "Branding" tiene open rate de 7% (la mitad del benchmark), señalando que el mensaje institucional no genera interés. La combinación debilita la marca en dos frentes.',
    impacto: 'Reputación del desarrollador se deteriora: (1) boca a boca negativo de compradores insatisfechos; (2) email marketing ineficaz que no construye marca ni genera engagement.',
    consecuencia: 'Sin intervención (compensar a los 12 compradores con plazo incumplido + rediseñar campaña Branding con contenido de valor), Clamaco perderá capacidad de captación orgánica y deberá pagar más por cada lead. El margen operativo se comprime.',
  },
  {
    causa: 'Jorge Cota con 20% de conversión (2 boletos / 10 reservas) + stock inmovilizado en 3 obras sin ventas hace 339 meses',
    mecanismo: 'Jorge Cota está bloqueando 8 unidades con reservas que no se concretan (20% conversión vs 109% promedio del portafolio), mientras que obras como DUPLEX, EL BOSQUE, YATAY 735 llevan 339 meses sin ninguna venta. Ineficiencia comercial en dos niveles: brokers tibios retienen unidades y obras sin tracción no se liquidan.',
    impacto: 'Capital doblemente inmovilizado: unidades bloqueadas por brokers ineficientes + obras terminadas sin comprador. El costo de oportunidad es extremo: esas unidades podrían estar siendo ofrecidas por brokers motores con mayor probabilidad de cierre.',
    consecuencia: 'Sin acción inmediata (retirar unidades a Jorge Cota + liquidar DUPLEX/EL BOSQUE/YATAY 735 con descuento >25%), el stock seguirá paralizado. El desarrollador seguirá pagando gastos corrientes sin ingresos, profundizando el estrés de caja.',
  },
  {
    causa: '55.2% cumplimiento de plazo + 31% "Departamento de Pozo" + brecha avance-venta 68pp',
    mecanismo: 'Solo el 55.2% de los compradores recibió su unidad en plazo, mientras que el 31% compró en pozo (aún no entregado). Simultáneamente, el portafolio tiene brecha promedio de 68pp entre avance y venta. Esto genera riesgo de sobrepromesa: si se sigue vendiendo en pozo sin corregir el descalce, el desarrollador puede acumular compromisos de entrega que no podrá cumplir.',
    impacto: 'Los compradores en pozo esperan recibir en plazo, pero el patrón de 13.8% de incumplimiento + descalce estructural señala riesgo de repetir el problema.',
    consecuencia: 'Sin ajuste estratégico (pausar ventas en pozo de obras con bajo ritmo comercial + acelerar ventas de stock terminado con descuentos), Clamaco puede enfrentar doble problema: más compradores insatisfechos por plazos incumplidos + más stock inmovilizado en obras terminadas. La reputación y la caja se deterioran simultáneamente.',
  },
  {
    causa: 'Campaña "Inversiones" con 25% open rate + 3 obras motoras generan 60% del cashflow',
    mecanismo: 'La campaña "Inversiones" tiene desempeño excelente (open rate 25%, CTR 19%), señalando un segmento calificado de inversores interesado. Simultáneamente, solo 3 obras lograron sell-out. Existe desconexión entre el canal digital efectivo y el producto que necesita ser colocado (107 obras con stock disponible).',
    impacto: 'Los inversores calificados podrían estar siendo dirigidos hacia las 3 obras motoras (ya sold out) en lugar de hacia las 107 obras con stock disponible.',
    consecuencia: 'Sin redireccionamiento estratégico (usar base de "Inversiones" para campañas específicas de obras con descalce + ofertas exclusivas para inversores), el desarrollador sigue dependiendo de brokers para colocar stock en lugar de usar su canal digital efectivo. Oportunidad de reducir tiempo de sell-out de obras estancadas se pierde.',
  },
  {
    causa: 'Velocidad de ventas 0 u/mes en DUPLEX/EL BOSQUE/YATAY 735 + bounce rate 16.6% en campaña Branding enviada a 45.852 contactos',
    mecanismo: 'Tres obras llevan 339 meses sin ninguna venta (velocidad 0 u/mes), señalando fracaso comercial absoluto. Simultáneamente, la campaña "Branding" se envía a la lista más grande (45.852 contactos) pero tiene 16.6% de bounce rate: el mensaje no está llegando (alto bounce) y aunque llegara, el contenido no genera tracción (open rate 7%).',
    impacto: 'Doble ineficiencia: (1) obras sin tracción no se están promoviendo con campañas efectivas; (2) la campaña masiva que podría ayudar está colapsada por mala calidad de datos.',
    consecuencia: 'Sin intervención urgente (limpiar base de datos + crear campaña específica para estas tres obras con oferta agresiva + usar canales alternativos como subastas inmobiliarias), el capital seguirá inmovilizado indefinidamente.',
  },
];

// ── SECCIÓN 7: RIESGOS ────────────────────────────────────────────────────────

export const riesgos = [
  {
    riesgo: 'Blacklisting del dominio sender por bounce rate crítico',
    fuente: 'Emblue: bounce rate 16.6% "Branding" (7.596 rebotes) + 11.1% "Disparador" (4.683 rebotes)',
    probabilidad: 'Alta (70-80%)',
    impacto: 'Alto — pérdida total de canal email marketing como herramienta de captación',
    areaResponsable: 'Marketing Digital / Sistemas',
  },
  {
    riesgo: 'Crisis de liquidez por capital inmovilizado en stock terminado',
    fuente: '107 de 118 obras (90.7%) con brecha positiva; 1.996 unidades disponibles (78.1%); gap ponderado 68pp',
    probabilidad: 'Alta (70%)',
    impacto: 'Crítico — incapacidad de pagar proveedores, paralización de obras, imposibilidad de iniciar nuevos proyectos',
    areaResponsable: 'Dirección Comercial / Finanzas',
  },
  {
    riesgo: 'Dependencia crítica de 4 brokers concentrando el 60% del volumen',
    fuente: 'Ventas y Reservas: 4 inmobiliarias (Particular, Di Paolo, Zelaschi, Yamil Remax) con 752 boletos de 1.260',
    probabilidad: 'Media (50%)',
    impacto: 'Alto — caída dramática en ventas si algún motor reduce actividad, sin plan B digital efectivo',
    areaResponsable: 'Dirección Comercial / Marketing',
  },
  {
    riesgo: 'Deterioro reputacional por incumplimiento de plazos y boca a boca negativo',
    fuente: 'Firma Boleto: 13.8% (12 de 87) reporta incumplimiento; ventas cayeron 32% YoY',
    probabilidad: 'Media (40%)',
    impacto: 'Medio — reducción de captación orgánica, mayor costo de adquisición vía brokers o pauta digital',
    areaResponsable: 'Atención al Cliente / Dirección Comercial',
  },
  {
    riesgo: 'Stock no rotativo perpetuo en DUPLEX, EL BOSQUE, YATAY 735',
    fuente: 'Ventas x Periodo: avance 100%, 0 ventas, 339 meses (28 años) sin movimiento comercial',
    probabilidad: 'Certeza (100%) — ya ocurrió',
    impacto: 'Medio — gastos corrientes perpetuos sin recupero; costo de oportunidad acumulado supera el margen original',
    areaResponsable: 'Dirección Comercial / Finanzas',
  },
  {
    riesgo: 'Ineficiencia comercial de broker Jorge Cota bloqueando 8 unidades',
    fuente: 'Ventas y Reservas: Jorge Cota 2 boletos / 10 reservas (20% conversión) vs 109% promedio portafolio',
    probabilidad: 'Media (50%)',
    impacto: 'Bajo en absoluto, alto en oportunidad — 8 unidades retenidas sin cierre comprobable',
    areaResponsable: 'Dirección Comercial',
  },
  {
    riesgo: 'Sobrepromesa en ventas en pozo sin corregir descalce estructural',
    fuente: 'Firma Boleto: 31% compró en pozo; brecha avance-venta promedio 68pp',
    probabilidad: 'Media (40%)',
    impacto: 'Medio — más compradores insatisfechos por plazos incumplidos, círculo vicioso reputacional',
    areaResponsable: 'Dirección Comercial / Operaciones',
  },
  {
    riesgo: 'CTOR anómalamente altos indicando posible error en plataforma Emblue',
    fuente: 'Emblue: CTOR 130% (Inversiones), 64% (Disparador), 174% (Branding) vs benchmark 25-35%',
    probabilidad: 'Media (50%)',
    impacto: 'Bajo operativo, alto decisional — decisiones sobre campañas basadas en datos potencialmente erróneos',
    areaResponsable: 'Sistemas / Marketing Digital',
  },
];

// ── SECCIÓN 8: PLAN DE ACCIÓN ─────────────────────────────────────────────────

export const planAccion = {
  h72: [
    {
      accion: 'Pausar envíos masivos de email hasta auditoría y limpieza de base de datos',
      porQue: 'Bounce rate 16.6% en "Branding" y 11.1% en "Disparador" ponen en riesgo inmediato la entregabilidad global del dominio. Cada envío adicional sin limpiar agrava el daño reputacional ante ISPs.',
      areaLider: 'Marketing Digital',
      kpi: 'Bounce rate (objetivo: <5% en próximas campañas)',
      riesgoMitigado: 'Blacklisting del dominio sender',
    },
    {
      accion: 'Citar a Jorge Cota y exigir definición sobre sus 8 reservas pendientes en 7 días',
      porQue: 'Jorge Cota tiene tasa de conversión del 20% (2 boletos / 10 reservas), bloqueando 8 unidades que podrían estar con brokers de conversión >115%. Cada día de retención es costo de oportunidad.',
      areaLider: 'Dirección Comercial',
      kpi: 'Ratio conversión Jorge Cota (objetivo: igualar promedio 109% o liberar unidades)',
      riesgoMitigado: 'Ineficiencia comercial de broker con baja conversión',
    },
    {
      accion: 'Lanzar descuento agresivo (30%) en DUPLEX, EL BOSQUE y YATAY 735 + publicar en portales de remate inmobiliario',
      porQue: 'Estas tres obras llevan 339 meses sin ninguna venta (velocidad 0 u/mes). Sin acción radical, seguirán sin venta indefinidamente. El costo de oportunidad acumulado supera el margen original.',
      areaLider: 'Dirección Comercial',
      kpi: 'Velocidad de ventas (objetivo: >0 u/mes) y capital recuperado parcialmente',
      riesgoMitigado: 'Stock no rotativo perpetuo',
    },
    {
      accion: 'Contactar a los 12 compradores con plazo incumplido y ofrecer compensación concreta',
      porQue: '13.8% de compradores reporta incumplimiento. Cada uno es potencial detractor que puede disuadir a 3-5 prospectos. Compensar convierte experiencia negativa en neutral o positiva.',
      areaLider: 'Atención al Cliente',
      kpi: '% compradores satisfechos (objetivo: >70%) y tasa de recompra (objetivo: ≥77%)',
      riesgoMitigado: 'Deterioro reputacional por incumplimiento de plazos',
    },
    {
      accion: 'Asignar unidades de ESTACIONAMIENTO HURLINGHAM, TORRE CRISTAL y HORNOS 2719 a brokers motores con doble comisión si cierran en 30 días',
      porQue: 'Estas tres obras tienen descalce >75% y sin ventas hace 73-78 meses. Asignar a brokers con conversión >115% y ofrecer incentivo variable acelera la probabilidad de cierre.',
      areaLider: 'Dirección Comercial',
      kpi: 'Velocidad de ventas en obras descalzadas (objetivo: >0.5 u/mes)',
      riesgoMitigado: 'Capital inmovilizado en stock terminado',
    },
  ],
  d30: [
    {
      accion: 'Ejecutar limpieza técnica completa de base de datos de email (validación de direcciones, eliminación de inactivos >12 meses, segmentación por engagement)',
      porQue: 'Con bounce rate de 16.6% en "Branding", la base tiene 7.596 direcciones inválidas confirmadas. Sin limpieza, futuras campañas seguirán teniendo bajo open rate y alto bounce incluso si el contenido mejora.',
      areaLider: 'Marketing Digital / Sistemas',
      kpi: 'Bounce rate (objetivo: <5%) y open rate promedio (objetivo: >15%)',
      riesgoMitigado: 'Blacklisting del dominio sender + ineficacia de campañas futuras',
    },
    {
      accion: 'Lanzar campaña de email específica para el segmento "Inversiones" ofreciendo unidades de obras con descalce (ECHAGÜE, BONIFACINI, FISCHETTI) con descuento del 15-20%',
      porQue: 'La campaña "Inversiones" tiene open rate 25% y CTR 19%, señalando un segmento calificado. Redirigir este público hacia obras con stock disponible acelera la rotación del capital inmovilizado.',
      areaLider: 'Marketing Digital / Dirección Comercial',
      kpi: 'Velocidad de ventas en estas obras (objetivo: >1 u/mes)',
      riesgoMitigado: 'Capital inmovilizado en stock terminado',
    },
    {
      accion: 'Implementar programa de referidos formal: todo comprador que refiera un nuevo cliente que cierre boleto recibe el 2% del valor de la unidad como bono o descuento en próxima compra',
      porQue: '77% de recompra declarada + solo 15.1% de captación actual por referidos señala potencial subaprovechado. Convierte compradores satisfechos en fuerza de ventas orgánica y reduce dependencia de 4 brokers.',
      areaLider: 'Marketing / Dirección Comercial',
      kpi: '% de ventas por referidos (objetivo: >25% en 6 meses) y cantidad de leads orgánicos (objetivo: +50 leads/mes)',
      riesgoMitigado: 'Dependencia crítica de 4 brokers',
    },
    {
      accion: 'Repricing estratégico en las 10 obras con descalce >50pp: descuento mínimo del 15% + paquetes combo (departamento + cochera) para tracción cruzada',
      porQue: 'Obras con descalce >50pp llevan >73 meses sin ventas. Mantener precio de lista sin ajustar es irracional: cada mes adicional erosiona margen por gastos corrientes.',
      areaLider: 'Dirección Comercial / Finanzas',
      kpi: 'Velocidad de ventas global (objetivo: >2 u/mes promedio portafolio) y sell-out proyectado (objetivo: <24 meses)',
      riesgoMitigado: 'Crisis de liquidez por capital inmovilizado',
    },
    {
      accion: 'Rediseñar encuesta de firma de boleto con preguntas abiertas obligatorias + incentivo por completar (sorteo de mejoras en unidad)',
      porQue: 'Solo 9.2% dejó comentarios adicionales. Sin datos cualitativos, imposible detectar problemas latentes (aislación acústica, plazos) antes de que escalen.',
      areaLider: 'Atención al Cliente / Marketing',
      kpi: '% encuestas con comentarios (objetivo: >40%) y detección temprana de problemas técnicos',
      riesgoMitigado: 'Deterioro reputacional no detectado a tiempo',
    },
    {
      accion: 'Auditoría técnica de plataforma Emblue para validar cálculo de CTOR y descartar clicks duplicados o tracking defectuoso',
      porQue: 'CTOR de 130%, 64% y 174% son anómalos vs benchmark 25-35%. Si los datos están inflados artificialmente, las decisiones sobre efectividad de campañas están basadas en información errónea.',
      areaLider: 'Sistemas / Marketing Digital',
      kpi: 'Confiabilidad de datos de campañas (objetivo: CTOR coherente con benchmark)',
      riesgoMitigado: 'Error en plataforma distorsionando decisiones',
    },
  ],
  d90: [
    {
      accion: 'Si DUPLEX, EL BOSQUE y YATAY 735 no se venden con descuento 30% en 60 días, estudiar donación fiscal o canje con proveedores para recuperar parcialmente el capital',
      porQue: 'Estas tres obras llevan 28 años sin venta; probabilidad de venta a cualquier precio es baja. Donación fiscal permite deducir valor contable; canje con proveedores recupera valor en especie sin salida de caja.',
      areaLider: 'Finanzas / Dirección General',
      kpi: 'Capital inmovilizado (objetivo: reducir a 0 en estas tres unidades) y eliminación de gastos corrientes sin ingresos',
      riesgoMitigado: 'Stock no rotativo perpetuo',
    },
    {
      accion: 'Contratar operador mayorista especializado en liquidaciones conflictivas si repricing + brokers motores no genera tracción en 60 días',
      porQue: 'Si después de descuentos + brokers motores las obras siguen sin ventas, el problema es el producto en canales tradicionales. Un operador mayorista tiene acceso a inversores institucionales, fondos inmobiliarios y compradores oportunistas que brokers estándar no alcanzan.',
      areaLider: 'Dirección Comercial / Finanzas',
      kpi: 'Velocidad de ventas en obras estancadas (objetivo: sell-out completo en 120 días post-contratación)',
      riesgoMitigado: 'Capital inmovilizado + crisis de liquidez',
    },
    {
      accion: 'Pausar inicio de nuevas obras hasta reducir stock disponible a menos del 50% del inventario total (de 1.996 a <1.280 unidades)',
      porQue: 'Iniciar nuevos proyectos con 78.1% de stock disponible es irracional: genera más descalce, profundiza el estrés de caja y dispersa recursos comerciales en lugar de concentrarlos en rotar activos existentes.',
      areaLider: 'Dirección General / Finanzas',
      kpi: 'Stock disponible (objetivo: <1.280 unidades) y capital de trabajo libre (objetivo: +30% vs actual)',
      riesgoMitigado: 'Sobrepromesa en ventas en pozo + crisis de liquidez',
    },
    {
      accion: 'Implementar sistema de CRM con alertas automáticas: alerta amarilla a los 60 días sin venta por obra, alerta roja a los 120 días con revisión obligatoria de precio/producto',
      porQue: 'Obras como DUPLEX/EL BOSQUE/YATAY 735 pasaron 28 años sin venta sin generar ninguna alerta. Falta un sistema de monitoreo preventivo que obligue a tomar decisiones antes de que el problema se cronifique.',
      areaLider: 'Sistemas / Dirección Comercial',
      kpi: 'Tiempo promedio sin venta por obra (objetivo: <90 días) y cantidad de obras con alerta roja (objetivo: 0)',
      riesgoMitigado: 'Stock no rotativo + ineficiencia comercial no detectada a tiempo',
    },
    {
      accion: 'Capacitación obligatoria de equipo comercial interno + top 10 brokers en venta consultiva para inversores y manejo de objeciones en productos con tiempo en stock',
      porQue: 'Caída YoY del 32% en boletos señala problema de conversión o calidad de leads. El equipo debe saber identificar inversores calificados, manejar objeciones y construir propuesta de valor sin quemar margen innecesariamente.',
      areaLider: 'Dirección Comercial / RRHH',
      kpi: 'Tasa de conversión global (objetivo: >30% de consultas en boletos) y velocidad de ventas (objetivo: >2 u/mes promedio portafolio)',
      riesgoMitigado: 'Dependencia crítica de brokers + caída en volumen de ventas',
    },
    {
      accion: 'Ejecutar auditoría post-entrega en obras con incumplimiento de plazo para identificar causa raíz (proveedor, gestión interna, fuerza mayor) y corregir en obras futuras',
      porQue: '12 compradores reportan plazo incumplido pero no hay datos de causa raíz. Sin auditoría, el problema se repetirá. Identificar si es sistemático o puntual permite medidas correctivas precisas.',
      areaLider: 'Operaciones / Dirección Técnica',
      kpi: '% cumplimiento de plazo (objetivo: >90% en próximas entregas)',
      riesgoMitigado: 'Deterioro reputacional por incumplimiento + posibles litigios',
    },
  ],
};
