// ── MÓDULO 2: COMERCIAL ───────────────────────────────────────────────────────
// Período: Abril 2026

export const semaforo = [
  {
    subarea: 'Ventas x periodo',
    estado: 'CRÍTICO',
    color: 'rojo',
    metrica: '22.0% de absorción comercial con 1983 unidades disponibles y 89.1% de avance físico promedio. 15 obras con avance 100% y ventas 0%.',
    umbral: 'Absorción <30% con avance >80% = crítico',
  },
  {
    subarea: 'Ventas y reservas',
    estado: 'ACEPTABLE',
    color: 'amarillo',
    metrica: 'Ratio conversión 109% (1260 boletos / 1156 reservas), pero caída YoY del 34% en boletos proyectados 2026 (141 → 93).',
    umbral: 'Conversión >100% = positivo; caída YoY >25% = alerta',
  },
  {
    subarea: 'Firma boleto',
    estado: 'BUENO',
    color: 'verde',
    metrica: '70.1% satisfacción "Muy Buena", 77% intención recompra, 55.2% cumplimiento de plazos de entrega.',
    umbral: 'Satisfacción >65% e intención recompra >70% = bueno',
  },
  {
    subarea: 'Emblue (email marketing)',
    estado: 'ALERTA',
    color: 'amarillo',
    metrica: 'Bounce Rate 16.6% en campaña "Envío General Branding" (vs <5% aceptable); Open Rate promedio 14.67% (vs 15-20% benchmark).',
    umbral: 'Bounce >10% = crítico; Open Rate <15% = bajo',
  },
];

export const hallazgos = [
  'Descalce estructural obra-venta con capital completamente inmovilizado: 15 obras presentan avance del 100% y ventas en 0%, destacando RAUCH 2220 (48 unidades), TEJEDOR 1421 (40 unidades) y FISCHETTI 4841 (37 unidades). Estas obras suman 255 unidades con inversión materializada y cero retorno.',
  'Stock crítico de baja rotación concentrado en obras específicas: ESTACIONAMIENTO HURLINGHAM (245 unidades), Zafiro (162 unidades) y TORRE CRISTAL (130 unidades) representan 537 unidades (27% del stock disponible total) con velocidad de venta 0 u/mes y sell-out indefinido.',
  'Desaceleración proyectada en generación de nuevas operaciones para 2026: caída del 34% en boletos (141 → 93) y del 27% en reservas (131 → 95). Esta tendencia, combinada con el stock inmovilizado existente, amenaza la viabilidad financiera de corto plazo si no se interviene con repricing y reactivación comercial.',
];

export const termometroGlobal = [
  { label: 'Obras activas',             actual: 105,    unidad: '',   nota: null },
  { label: 'Unidades activas',           actual: 2542,   unidad: '',   nota: null },
  { label: 'Avance físico ponderado',    actual: 89.1,   unidad: '%',  nota: 'Cartera madura — inversión ya materializada' },
  { label: 'Absorción comercial',        actual: 22.0,   unidad: '%',  nota: '559 vendidas de 2542 totales' },
  { label: 'Unidades disponibles',       actual: 1983,   unidad: '',   nota: 'Capital completamente inmovilizado' },
  { label: 'Gap ponderado avance-venta', actual: 67.1,   unidad: 'pp', nota: 'Descalce estructural crítico' },
  { label: 'Obras frenadas >90 días',    actual: 8,      unidad: '',   nota: 'Por falta de tracción comercial, no por problemas técnicos' },
];

export const brechaAvance = [
  { obra: 'RAUCH 2220',                  avance: 100, vendido: 0, brecha: 100, tipo: 'SIN_TRACCION' },
  { obra: 'URUGUAY 563',                 avance: 100, vendido: 0, brecha: 100, tipo: '—' },
  { obra: 'MURIAS 385',                  avance: 100, vendido: 0, brecha: 100, tipo: 'SIN_TRACCION' },
  { obra: 'FISCHETTI 4841',              avance: 100, vendido: 0, brecha: 100, tipo: 'SIN_TRACCION' },
  { obra: 'DUPLEX CALLE RUIZ 645',       avance: 100, vendido: 0, brecha: 100, tipo: 'SIN_TRACCION' },
  { obra: 'CASEROS 74',                  avance: 100, vendido: 0, brecha: 100, tipo: 'SIN_TRACCION' },
  { obra: 'TRIPLEX MAIPU 108 AYACUCHO',  avance: 100, vendido: 0, brecha: 100, tipo: 'SIN_TRACCION' },
  { obra: 'TRIPLEX WERNICKE 741',        avance: 100, vendido: 0, brecha: 100, tipo: '—' },
  { obra: 'CASEROS LA PLAZA',            avance: 100, vendido: 0, brecha: 100, tipo: '—' },
  { obra: 'TRIPLEX MATIENZO 765',        avance: 100, vendido: 0, brecha: 100, tipo: '—' },
];

export const top3Descalzadas = [
  {
    obra: 'RAUCH 2220',
    avance: 100, vendido: 0, unidades: '48/48', mesesSinVenta: 'S/D', brecha: 100,
    causa: 'Obra completamente terminada sin haber colocado una sola unidad. El tag "SIN_TRACCION" confirma que la línea comercial no registró intentos efectivos de absorción. Combinación de producto mal posicionado, precio desconectado de la demanda real y canal de comercialización inadecuado.',
    impactoFinanciero: 'Las 48 unidades representan el mayor volumen de capital inmovilizado en una sola obra de la cartera. Los fondos no retornan al ciclo productivo, impidiendo apalancar nuevas obras, reforzar líneas de liquidez o cubrir compromisos financieros pendientes.',
    consecuencia: 'Si no se actúa en los próximos 90 días con repricing agresivo, cambio de comercializadora o exploración de canales alternativos (inversores institucionales, lease-back, fondos), la obra quedará como activo muerto en el balance. El retraso genera además efecto reputacional: "RAUCH 2220 no se vende" se convierte en señal negativa de mercado.',
    ritmoCronograma: 'S/D — campo null en sistema. Indica que la obra carece de cronograma claro o que el seguimiento está desconectado. Imperativo actualizar para todas las obras con avance >80%.',
  },
  {
    obra: 'FISCHETTI 4841',
    avance: 100, vendido: 0, unidades: '37/37', mesesSinVenta: 'S/D', brecha: 100,
    causa: 'Idéntico patrón que RAUCH 2220: obra terminada, cero ventas, velocidad de venta S/D. El tag "SIN_TRACCION" confirma ausencia de interés de mercado. La construcción está detenida porque la materialización está completa.',
    impactoFinanciero: '37 unidades inmovilizadas representan el tercer mayor volumen de stock sin rotación. El capital está cautivo en un activo terminado sin generar flujo de caja. La acumulación prolongada amenaza la estructura de financiamiento y deteriora los KPIs de rendimiento de portafolio.',
    consecuencia: 'Sin intervención inmediata (repricing, cambio de canal, venta mayorista a fondos), la obra permanecerá como lastre financiero indefinidamente. Mientras estas 37 unidades están bloqueadas, obras con mejor performance comercial pueden quedarse sin respaldo de caja para finalización o entrega.',
    ritmoCronograma: 'Ritmo de obra: 0 (construcción completada). Meses restantes reportados como negativos en sistema — dato probablemente erróneo o desactualizado.',
  },
  {
    obra: 'TEJEDOR 1421',
    avance: 100, vendido: 0, unidades: '40/40', mesesSinVenta: 'S/D', brecha: 100,
    causa: 'Tercer caso de descalce total: obra 100% terminada, 40 unidades sin colocar. El tag "SIN_TRACCION" confirma que la obra no logró generar demanda. Estrategias probadas hasta ahora (si es que se probaron) no funcionaron.',
    impactoFinanciero: '40 unidades representan el segundo mayor volumen de capital inmovilizado en una sola obra. El costo de oportunidad es masivo: esos fondos podrían financiar obras con mejor perfil comercial, reducir deuda o generar retorno en inversiones líquidas.',
    consecuencia: 'Si no se toman decisiones drásticas en 60 días (liquidación con descuento significativo, venta en bloque a inversor institucional, reasignación a comercializadora especializada en stock residual), la acumulación de casos similares genera percepción de mercado negativa: "CLAMACO tiene mucho stock viejo sin rotar", afectando la comercialización de obras nuevas.',
    ritmoCronograma: 'Ritmo de obra: 0 (construcción completada). Meses restantes reportados como negativos en sistema.',
  },
];

export const stockInmovilizado = [
  { obra: 'ESTACIONAMIENTO HURLINGHAM', avance: 100,  vendido: 0, disponibles: 245, hipotesis: 'Producto de nicho (estacionamientos) con demanda limitada y posible sobreoferta en la zona. Canal comercial probablemente inadecuado para este tipo de activo — requiere brokers especializados en inversión de renta, no inmobiliarias tradicionales.' },
  { obra: 'Zafiro',                      avance: 61.2, vendido: 0, disponibles: 162, hipotesis: 'Obra en pozo (61.2% avance) sin ventas sugiere colapso de la preventa o que nunca existió. Problemas de confianza del comprador en el proyecto, precio desconectado del mercado, o falla en la estrategia de preventa. Compromete el financiamiento de la finalización.' },
  { obra: 'TORRE CRISTAL',               avance: 100,  vendido: 0, disponibles: 130, hipotesis: 'Volumen excesivo de unidades en un solo edificio terminado sin tracción comercial. Indica problema estructural de producto (tipología no demandada) o ubicación con saturación de oferta similar.' },
];

// NUEVA SECCIÓN — obras con meses restantes ≤6 que requieren atención
export const entregaInminente = [
  { obra: 'Virasoro 325',      mesesRestantes: 4, vendidoPct: 88.2, disponibles: 4,  total: 20,  accionPrioritaria: 'Liquidación inmediata de las 4 unidades remanentes con descuento o bonificaciones; priorizar canal "Particular" que tiene ratio conversión 116%.' },
  { obra: 'HORNOS 2719',       mesesRestantes: 5, vendidoPct: 97.7, disponibles: 3,  total: 10,  accionPrioritaria: 'Obra casi sellout (97.7%); contactar directamente a los brokers de mayor efectividad con incentivo agresivo para cerrar 100% antes de entrega.' },
  { obra: 'EL PORTAL DE ROCA', mesesRestantes: 6, vendidoPct: 78.3, disponibles: 33, total: 111, accionPrioritaria: 'CRÍTICO: campaña de liquidación urgente con repricing 15-20%. Al ritmo actual (2.23 u/mes) se entregarán ~20 sin vender. Considerar venta en bloque a inversor institucional para las últimas 20 unidades.' },
];

export const motoresSolvencia = [
  { obra: 'AMERICA 347', avance: 100, vendido: 100.3, rol: 'Motor principal de solvencia: sell-out completo (incluso con 0.3% de sobreventa) en obra de gran volumen (110 unidades). Genera flujo de caja positivo y caso de éxito interno para replicar estrategia comercial en obras similares.' },
  { obra: 'MORENO 762',  avance: 100, vendido: 100,   rol: 'Generador de liquidez confiable: sell-out total con 19 unidades completamente colocadas. Aporta flujo de caja para sostener obras en desarrollo y valida la estrategia de pricing correcto alineado al mercado.' },
  { obra: 'VIGNES 250',  avance: 100, vendido: 100,   rol: 'Ejemplo de ciclo cerrado exitoso: sell-out completo con velocidad de rotación efectiva (0.28 u/mes sostenida). Caso de éxito para campañas futuras y evidencia de gestión comercial consistente.' },
];

export const estresCaja = {
  causa: 'Descalce estructural entre materialización de activos y absorción comercial: 89.1% del capital ya fue invertido en construcción, pero solo el 22% de las unidades están vendidas.',
  cifras: {
    unidadesInmovilizadas:   1983,
    pctObrasGapPositivo:     89,
    obrasGapMas50pp:         15,
  },
  mecanismo: [
    'Costo de oportunidad masivo: los fondos invertidos en las 1983 unidades disponibles no retornan al ciclo productivo, impidiendo apalancar nuevas obras, reforzar líneas de liquidez, reducir endeudamiento o realizar inversiones alternativas.',
    'Presión sobre estructura de caja: las obras en desarrollo requieren flujo continuo para finalización y entrega, pero el retorno esperado de ventas no llega al ritmo necesario. Las 8 obras frenadas por más de 90 días evidencian que la decisión de pausar responde a falta de tracción comercial, no a problemas técnicos.',
    '15 obras con brecha de 100 pp (avance 100%, ventas 0%) suman 255 unidades con capital totalmente inmovilizado. 3 obras con stock crítico concentran 537 unidades (27% del stock disponible) con velocidad de venta 0 u/mes.',
  ],
  consecuencias: [
    'Corto plazo (0-90 días): imposibilidad de financiar finalizaciones de obras en desarrollo, acumulación de compromisos con proveedores sin flujo para cobertura, necesidad de recurrir a financiamiento externo con costo.',
    'Mediano plazo (90-180 días): deterioro de reputación crediticia por demoras en pagos, pérdida de poder de negociación con proveedores, imposibilidad de lanzar nuevos proyectos por falta de capital.',
    'Largo plazo (>180 días): ciclo vicioso sin ventas → sin caja → canales comerciales pierden interés → ventas se deterioran aún más. Riesgo de liquidación forzada con descuentos del 40-50% para recuperar liquidez mínima.',
  ],
};

export const embudo = {
  boletos:    1260,
  reservas:   1156,
  ratio:      1.09,
  agingMas60: 0,
};

export const estadoEmbudoDetalle = [
  { metrica: 'Total boletos firmados (acumulado)',   valor: '1.260',  benchmark: 'N/D',            interpretacion: 'Volumen absoluto alto; representa operaciones consumadas con compromiso financiero del comprador.' },
  { metrica: 'Total reservas activas (acumulado)',   valor: '1.156',  benchmark: 'N/D',            interpretacion: 'Volumen inferior a boletos: baja acumulación de reservas sin cerrar — positivo para rotación.' },
  { metrica: 'Ratio conversión boletos/reservas',    valor: '109%',   benchmark: '>80% positivo',  interpretacion: 'EXCELENTE: Se concretaron más ventas que reservas activas; evidencia gestión eficiente del pipeline.' },
  { metrica: 'Promedio días en reserva',             valor: '0 días', benchmark: '<30 días',        interpretacion: 'ÓPTIMO: No hay reservas antiguas acumuladas; todas se transforman en boletos o se liberan rápidamente.' },
  { metrica: 'Reservas en mora (>60 días)',           valor: '0',      benchmark: '<5% del total',  interpretacion: 'EXCELENTE: Ninguna reserva antigua bloqueando stock. El problema no es el embudo, sino la generación inicial de leads.' },
];

export const tendenciaYoY = [
  { metrica: 'Boletos',   anio2025: 141, anio2026: 93, variacionAbs: -48, variacionPct: -34 },
  { metrica: 'Reservas',  anio2025: 131, anio2026: 95, variacionAbs: -36, variacionPct: -27 },
];

export const canalInmobiliaria = [
  { inmobiliaria: 'Particular',  boletos: 255, reservas: 219, ratio: 116, clasificacion: 'Motor' },
  { inmobiliaria: 'Jorge Cota',  boletos: 2,   reservas: 10,  ratio: 20,  clasificacion: 'Cuello de botella' },
];

export const agingReservas = {
  moraMas30:     0,
  moraMas60:     0,
  promedioDias:  0,
  obrasCriticas: [],
};

export const firmaBoleto = {
  kpis: [
    { label: 'Total respuestas encuesta',    actual: 87,    unidad: '' },
    { label: 'Intención de recompra',        actual: '77',  unidad: '%' },
    { label: 'Satisfacción "Muy Buena"',     actual: '70.1',unidad: '%' },
    { label: 'Cumplimiento de plazos',       actual: '55.2',unidad: '%' },
  ],
  satisfaccion: [
    { nivel: 'Muy Buena (5★)',              pct: 70.1, cantidad: 61 },
    { nivel: 'Buena (4★)',                  pct: 25.3, cantidad: 22 },
    { nivel: 'Regular (3★)',                pct: 4.6,  cantidad: 4  },
  ],
  captacion: [
    { canal: 'Inmobiliarias',                    pct: 53.4, cantidad: 39 },
    { canal: 'Contacto de referencia',            pct: 15.1, cantidad: 11 },
    { canal: 'Publicidad',                        pct: 8.2,  cantidad: 6  },
    { canal: 'Contacto + Inmobiliarias (combinado)', pct: 8.2, cantidad: 6 },
    { canal: 'Referencia de comprador anterior',  pct: 1.4,  cantidad: 1  },
    { canal: 'Sin respuesta',                     pct: 16.1, cantidad: 14 },
  ],
  cumplimientoPlazo: [
    { estado: 'Sí, se cumplió el plazo',          pct: 55.2, cantidad: 48, riesgo: 'BAJO — Mayoría experimenta cumplimiento; genera confianza para futuras operaciones.' },
    { estado: 'Departamento en pozo (no aplica aún)', pct: 31.0, cantidad: 27, riesgo: 'NEUTRAL — Seguimiento necesario cuando se entreguen; representan el verdadero test pendiente.' },
    { estado: 'No se cumplió el plazo',            pct: 13.8, cantidad: 12, riesgo: 'MEDIO-ALTO — 1 de cada 7 compradores con experiencia negativa; afecta reputación y puede generar reclamos legales.' },
  ],
  insights: [
    'Canal "Particular" con 255 boletos y ratio del 116% es el motor indiscutido: los compradores directos están más calificados, tienen decisión de compra más ágil y cierran con menor fricción.',
    'Satisfacción combinada (Muy Buena + Buena) alcanza el 95.4%, validando que la experiencia del comprador durante el proceso de venta es positiva y constituye un activo de marketing subutilizado.',
    'El 31% que compró en pozo aún no puede evaluar cumplimiento de plazos. Si estos 27 compradores experimentan demoras, el porcentaje de incumplimiento podría escalar significativamente.',
  ],
  riesgos: [
    { severidad: 'media', texto: '13.8% de compradores reporta incumplimiento de plazos. Posible descoordinación entre Construcción y Comercial en la comunicación de fechas realistas. Riesgo: demandas, compensaciones, boca a boca negativo.' },
    { severidad: 'baja',  texto: '4.6% califica atención como "Regular" (3 estrellas). Experiencia de cliente inconsistente con posibles fallos puntuales en responsables específicos.' },
    { severidad: 'baja',  texto: '16.1% no completó respuesta sobre canal de captación. Impide medir ROI real de cada canal y asignar eficientemente los recursos de marketing.' },
  ],
  oportunidades: [
    'Alta intención de recompra (77%) sin explotación sistemática: implementar campaña de email marketing específica para los 67 compradores que dijeron "Sí", ofreciendo prelanzamiento de nuevas obras con condiciones preferenciales (descuento 5-7%, prioridad de elección de unidad). Costo marginal casi nulo.',
    'Dominio del canal inmobiliarias (53.4%) permite concentración de esfuerzos: reforzar incentivos a brokers top (Particular, Di Paolo, Zelaschi), priorizándolos en asignación de stock premium y reduciendo inversión en canales de baja conversión.',
    'Satisfacción con atención (95.4% Buena o Muy Buena) como activo de marketing: incorporar testimonios reales de los 83 compradores satisfechos en campañas de Emblue y materiales de venta. Costo de producción bajo, impacto en credibilidad alto.',
  ],
  planAccion7dias: [],
  conclusion: 'Los indicadores de satisfacción son sólidos y el embudo convierte bien (109%), pero el problema crítico está upstream: no se generan suficientes leads calificados para las obras estancadas. El sistema sabe vender — pero no está llegando a los compradores correctos con los productos correctos.',
};

export const emblue = [
  { campana: 'Inversiones',                         envios: 8992,  openRate: 25,  ctr: 19, ctor: 130, bounceRate: 5.3,  clasificacion: 'Destacada' },
  { campana: 'No todos buscan lo mismo - Disparador', envios: 42197, openRate: 12,  ctr: 6,  ctor: 64,  bounceRate: 11.1, clasificacion: 'Normal' },
  { campana: 'Envío General Diciembre 2025 - Branding', envios: 45852, openRate: 7,   ctr: 8,  ctor: 174, bounceRate: 16.6, clasificacion: 'Problema grave' },
];

export const embleaBenchmarks = [
  { metrica: 'Open Rate — Inversiones',               valorCampana: '25%',  benchmark: '15-20%',  brecha: '+5 a +10 pp',   interpretacion: 'SUPERIOR: El asunto y la segmentación fueron efectivos.' },
  { metrica: 'Open Rate — No todos buscan lo mismo',  valorCampana: '12%',  benchmark: '15-20%',  brecha: '-3 a -8 pp',    interpretacion: 'INFERIOR: Requiere revisión de asunto y hora de envío.' },
  { metrica: 'Open Rate — Envío General Branding',    valorCampana: '7%',   benchmark: '15-20%',  brecha: '-8 a -13 pp',   interpretacion: 'MUY INFERIOR: Crítico. Asunto no genera interés o lista desactualizada.' },
  { metrica: 'CTR — Inversiones',                     valorCampana: '19%',  benchmark: '8-12%',   brecha: '+7 a +11 pp',   interpretacion: 'SUPERIOR: Contenido altamente relevante genera clics; calls-to-action efectivos.' },
  { metrica: 'CTR — No todos buscan lo mismo',        valorCampana: '6%',   benchmark: '8-12%',   brecha: '-2 a -6 pp',    interpretacion: 'INFERIOR: Contenido no genera suficiente interés para acción.' },
  { metrica: 'CTR — Envío General Branding',          valorCampana: '8%',   benchmark: '8-12%',   brecha: '-4 a 0 pp',     interpretacion: 'LÍMITE INFERIOR: El problema radica más en la apertura que en el contenido.' },
  { metrica: 'Bounce Rate — Inversiones',             valorCampana: '5.3%', benchmark: '<5%',     brecha: '+0.3 pp',       interpretacion: 'ACEPTABLE: Ligeramente sobre benchmark pero manejable.' },
  { metrica: 'Bounce Rate — No todos buscan lo mismo',valorCampana: '11.1%',benchmark: '<5%',     brecha: '+6.1 pp',       interpretacion: 'ELEVADO: Lista desactualizada. Requiere limpieza urgente.' },
  { metrica: 'Bounce Rate — Envío General Branding',  valorCampana: '16.6%',benchmark: '<5%',     brecha: '+11.6 pp',      interpretacion: 'CRÍTICO: Compromete reputación del sender; riesgo de penalización por ISPs.' },
];

export const embleaAlertas = [
  { alerta: 'Bounce Rate crítico — "Envío General Diciembre 2025 - Branding"', metrica: 'Bounce Rate: 16.6% (7.596 rebotes de 45.852 enviados)', umbral: '<5%', riesgo: 'CRÍTICO: Daño inmediato a sender reputation. Los ISPs penalizan automáticamente senders con bounce >10%. Incluso campañas bien segmentadas (como "Inversiones") comenzarán a caer en spam.' },
  { alerta: 'Bounce Rate elevado — "No todos buscan lo mismo"',                metrica: 'Bounce Rate: 11.1% (4.683 rebotes de 42.197 enviados)', umbral: '<5%', riesgo: 'ALTO: Lista desactualizada. Daño secundario a reputación e inflación del costo por adquisición.' },
  { alerta: 'Open Rate crítico — "Envío General Diciembre 2025 - Branding"',   metrica: 'Open Rate: 7% (vs 15-20% benchmark)', umbral: '15-20%', riesgo: 'MEDIO: Asunto no genera interés. Envío masivo (45.852) con bajo engagement = desperdicio de recursos.' },
  { alerta: 'Open Rate bajo — "No todos buscan lo mismo"',                     metrica: 'Open Rate: 12% (vs 15-20% benchmark)', umbral: '15-20%', riesgo: 'MEDIO: Requiere revisión de asunto y timing para mejorar primera impresión.' },
];

export const crucesModulos = [
  {
    causa:       'Stock inmovilizado en RAUCH 2220, FISCHETTI 4841, TEJEDOR 1421 (255 unidades, avance 100%, ventas 0%) + Bounce Rate crítico 16.6% en campaña Emblue "Envío General Branding"',
    mecanismo:   'Las obras críticas con cero tracción comercial no están siendo comunicadas efectivamente a la base de contactos. La campaña con mayor alcance (45.852 envíos) tiene deliverability del 83.4% y Open Rate del 7%: solo ~2.600 personas abrieron el mensaje. Si contenía estas obras, la comunicación fracasó.',
    impacto:     'Capital de 255 unidades inmovilizado sin retorno + desperdicio de recurso de email marketing (7.596 rebotes, 35k+ ignorados) + costo de oportunidad doble: dinero invertido en obra sin vender + inversión en campaña sin resultado.',
    consecuencia: 'Las obras permanecerán sin venta indefinidamente, profundizando el estrés de caja. La reputación del sender se deteriorará tanto que incluso campañas futuras bien segmentadas comenzarán a caer en spam. Plazo crítico: 60 días.',
  },
  {
    causa:       'Desaceleración YoY en boletos proyectados 2026 (caída 34%: de 141 a 93) + Stock crítico de baja rotación en ESTACIONAMIENTO HURLINGHAM (245), Zafiro (162), TORRE CRISTAL (130) con velocidad venta 0 u/mes',
    mecanismo:   'El embudo de nuevas operaciones se contrae (menos boletos y reservas para 2026) mientras simultáneamente existe un backlog masivo de 537 unidades sin tracción. Los canales priorizan obras nuevas o con demanda probada, abandonando stock residual.',
    impacto:     'Congestión creciente de capital inmovilizado (537 unidades = 27% del stock disponible) + pérdida de momentum comercial + riesgo de que las 537 unidades se conviertan en stock muerto permanente.',
    consecuencia: 'En 90 días, las obras con stock crítico acumularán costos sin retorno. Los canales perderán interés. La única salida será liquidación forzada con descuentos del 40-50%, generando pérdidas estructurales. Plazo crítico: 90 días.',
  },
  {
    causa:       'Ratio conversión reservas-boletos excepcional (109%) + Alta satisfacción firma boleto (77% recompraría, 70.1% "Muy Buena") + Campaña Emblue "Inversiones" con performance superior (Open Rate 25%, CTR 19%)',
    mecanismo:   'Existe capacidad probada de convertir leads en ventas (ratio 109%), compradores satisfechos (77% recompraría) y una campaña de email que sí funciona. Sin embargo, esta combinación ganadora no se aplica a las obras con stock inmovilizado.',
    impacto:     'Desaprovechamiento de activos estratégicos: hay una fórmula probada (segmentación precisa + contenido relevante + base de clientes satisfechos) que funciona, pero no se ejecuta para las obras críticas.',
    consecuencia: 'Las obras con stock crítico seguirán sin vender porque nunca les llega la combinación correcta de campaña + segmentación + mensaje. El problema no es falta de capacidad comercial, sino desconexión entre lo que funciona y lo que necesita ayuda. Plazo crítico: 90 días.',
  },
  {
    causa:       'Cuello de botella en Jorge Cota (10 reservas, 2 boletos, 20% conversión) + Obras frenadas >90 días (HORNOS 2719, SANTA FE 652, MITRE 1185) + 13.8% de compradores reporta incumplimiento de plazos',
    mecanismo:   'Jorge Cota tiene 8 unidades bloqueadas en reservas sin convertir a boleto, mientras existen 3 obras frenadas (HORNOS 2719: 3 unidades, SANTA FE 652: 2, MITRE 1185: 5) que podrían reasignarse a canales más efectivos. Simultáneamente, el 13.8% de incumplimiento de plazos puede estar afectando cierres en obras próximas a entrega.',
    impacto:     'Stock doblemente bloqueado: unidades reservadas sin concretarse + obras frenadas sin actividad comercial. Unidades potencialmente vendibles fuera del mercado por razones operativas, no por falta de demanda.',
    consecuencia: 'En 30 días, las 8 reservas de Jorge Cota deben liberarse para reasignación urgente a canal "Particular" (116% conversión). Las 10 unidades en las 3 obras frenadas necesitan campaña de liquidación inmediata (10-15% descuento). Plazo crítico: 30 días.',
  },
  {
    causa:       'Canal "Particular" domina captación (53.4%) y tiene mejor conversión (116%) + 95.4% de compradores satisfechos + Stock inmovilizado masivo en 15 obras con 0% ventas',
    mecanismo:   'El canal más efectivo (Particular) y la base de clientes satisfechos son activos estratégicos desaprovechados para reactivar obras estancadas. Los 67 compradores que respondieron "Sí" a recompra son la audiencia ideal para recibir ofertas exclusivas de las obras críticas.',
    impacto:     'Oportunidad perdida de rotar stock usando el canal más confiable y la base más calificada. El costo de adquisición de estos leads es cero, pero no están siendo contactados con propuestas específicas para las obras problemáticas.',
    consecuencia: 'Las 15 obras con 0% ventas seguirán sin rotar porque el único canal probado que funciona no está dirigido específicamente hacia ellas. Solución simple: campaña de email exclusiva para 67 recompradores + base Particular con descuento en obras críticas. Plazo crítico: 30 días.',
  },
  {
    causa:       'Obras con entrega inminente (Virasoro 325, HORNOS 2719, EL PORTAL DE ROCA: 40 unidades combinadas, meses restantes ≤6) + Bounce Rate elevado 11.1% en campaña "No todos buscan lo mismo" (4.683 rebotes)',
    mecanismo:   'Existen 40 unidades en 3 obras que deben venderse en 6 meses máximo o se entregarán con stock pendiente. La campaña de email "No todos buscan lo mismo" tiene 11.1% de bounce, alcanzando una audiencia desactualizada que no puede recibir mensajes de urgencia sobre estas entregas.',
    impacto:     'Las 40 unidades críticas no llegan a una base limpia de contactos. Si el bounce sigue alto, los mensajes de urgencia no llegarán a destinatarios válidos, perdiendo la ventana temporal para liquidación.',
    consecuencia: 'En 60 días, EL PORTAL DE ROCA (33 unidades) entrará en zona crítica sin tiempo para venta al ritmo actual. La entrega con stock obligará a gestión costosa post-entrega. Requiere: limpieza inmediata de lista + campaña urgente segmentada + repricing 10-15%. Plazo crítico: 60 días.',
  },
  {
    causa:       'Concentración Pareto en canales comerciales (5 brokers top generan 80% de operaciones) + Stock crítico de 537 unidades en 3 obras con velocidad venta 0 u/mes + Alta satisfacción firma boleto (77% recompraría)',
    mecanismo:   'Los 5 brokers principales están concentrados en obras de alta demanda que ya rotan bien, mientras las 3 obras críticas no son priorizadas por ningún canal efectivo. Los brokers top no tocan stock difícil; los secundarios no tienen capacidad de venta.',
    impacto:     'Las 537 unidades quedan fuera del alcance de los canales que sí venden. Ineficiencia en asignación de recursos comerciales: los mejores vendedores no trabajan en los activos más difíciles.',
    consecuencia: 'En 90 días, las 3 obras con stock crítico quedarán completamente estancadas. Solución: reasignar stock forzosamente a brokers top con incentivos adicionales (1-2% comisión extra) + campaña exclusiva a 67 recompradores con descuento 10%. Plazo crítico: 90 días.',
  },
  {
    causa:       '8 obras frenadas >90 días (sin retraso de cronograma) + Desaceleración YoY boletos 2026 (caída 34%) + Ratio conversión reservas-boletos excepcional (109%)',
    mecanismo:   'Las 8 obras frenadas no están detenidas por problemas productivos sino por decisión comercial ante falta de ventas. La proyección de boletos 2026 cae 34%, reduciendo flujo de caja futuro. Sin embargo, el ratio 109% demuestra que el equipo sí sabe cerrar ventas cuando hay interés. La desconexión es entre generación de leads (cayendo) y capacidad de cierre (probada).',
    impacto:     'Estrés de caja por dos vectores: obras frenadas con capital inmovilizado sin retorno + menor flujo proyectado 2026. El problema no es capacidad de venta, sino generación de leads calificados para las obras correctas.',
    consecuencia: 'En 120 días, obras frenadas permanecerán sin venta porque no son objeto de acciones comerciales específicas. La caída en operaciones 2026 se materializará. Combinación letal: menos ingresos nuevos + capital atrapado en obras viejas. Requiere: reactivación forzada de 8 obras con repricing 15-20% + inversión en generación de leads. Plazo crítico: 120 días.',
  },
];

export const riesgos = [
  { riesgo: 'Insolvencia técnica por capital inmovilizado en obras terminadas sin venta (1983 unidades disponibles, 89.1% avance promedio, solo 22% vendidas; 15 obras con avance 100% y ventas 0%)', probabilidad: 'alta', impacto: 'critico', areaResponsable: 'Gerencia Comercial + Dirección Financiera' },
  { riesgo: 'Colapso de email marketing como canal viable por sender reputation dañada (Bounce Rate 16.6% en "Envío General Branding" y 11.1% en "No todos buscan lo mismo" — ISPs ya en zona de alerta)', probabilidad: 'media-alta', impacto: 'alto', areaResponsable: 'Marketing Digital + Sistemas' },
  { riesgo: 'Entrega de EL PORTAL DE ROCA con ~20 unidades sin vender y flujo de caja negativo post-entrega (33 disponibles, 6 meses restantes, sell-out proyectado 15 meses al ritmo actual de 2.23 u/mes)', probabilidad: 'alta', impacto: 'medio-alto', areaResponsable: 'Gerencia Comercial + Administración' },
  { riesgo: 'Desaceleración sostenida en generación de operaciones nuevas para 2026 compromete flujo de caja futuro (boletos 93 vs 141 en 2025, -34%; reservas 95 vs 131, -27%)', probabilidad: 'media', impacto: 'medio', areaResponsable: 'Gerencia Comercial + Desarrollo de Producto' },
  { riesgo: 'Stock crítico de 537 unidades en 3 obras (ESTACIONAMIENTO HURLINGHAM, Zafiro, TORRE CRISTAL) se convierte en activo muerto permanente — velocidad venta 0 u/mes, sell-out no calculable', probabilidad: 'media-alta', impacto: 'alto', areaResponsable: 'Gerencia Comercial + Dirección Financiera + Desarrollo de Producto' },
  { riesgo: 'Cuello de botella en inmobiliaria Jorge Cota bloquea 8 unidades con costo de oportunidad directo (10 reservas, solo 2 boletos, 20% conversión vs 109% promedio del sistema)', probabilidad: 'media', impacto: 'bajo-medio', areaResponsable: 'Gerencia Comercial' },
  { riesgo: 'Incumplimiento de plazos de entrega (13.8% de compradores lo reporta) deteriora reputación y puede generar reclamos legales — afecta recompra y referidos futuros', probabilidad: 'media', impacto: 'medio', areaResponsable: 'Gerencia de Obra + Gerencia Comercial' },
];

export const planAccion = {
  h72: [
    {
      accion: 'Depuración inmediata de reservas de Jorge Cota: exigir definición (avance a boleto o liberación) para las 8 unidades bloqueadas en 72 hs',
      porQue: 'Esas 8 unidades tienen costo de oportunidad directo: podrían estar siendo ofrecidas por canal "Particular" (116% conversión) y cerrando ventas en 30 días. Cada día adicional de bloqueo es flujo de caja perdido.',
      areaLider: 'Gerencia Comercial',
      kpi: 'Ratio conversión reservas-boletos (actualmente 109%); Rotación de stock disponible.',
      riesgoMitigado: 'Cuello de botella en Jorge Cota — 8 unidades bloqueadas con oportunidad perdida',
    },
    {
      accion: 'Limpieza de lista de emails: eliminar los 7.596 contactos que rebotaron en "Envío General Branding" + validar toda la base con servicio especializado (NeverBounce, ZeroBounce)',
      porQue: 'Bounce Rate del 16.6% daña severamente la sender reputation. Los ISPs ya están probablemente penalizando el dominio. Si no se actúa en 72 hs, incluso campañas futuras bien segmentadas (como "Inversiones") comenzarán a caer en spam.',
      areaLider: 'Marketing Digital + Sistemas',
      kpi: 'Bounce Rate (objetivo: reducir de 16.6% a <5%); Deliverability (objetivo: >95%).',
      riesgoMitigado: 'Colapso de email marketing como canal viable por sender reputation dañada',
    },
    {
      accion: 'Contacto ejecutivo directo con los 5 brokers principales (Particular, Di Paolo, Zelaschi, Yamil Remax, Marcelo Russo) para asignar forzosamente unidades de RAUCH 2220, FISCHETTI 4841, TEJEDOR 1421 con comisión adicional 1-2%',
      porQue: 'Estas 3 obras (255 unidades totales, avance 100%, ventas 0%) no están en el radar de los brokers top. La asignación forzada con incentivo económico rompe la inercia y pone el stock crítico en manos de quienes sí venden.',
      areaLider: 'Gerencia Comercial',
      kpi: 'Velocidad de venta en RAUCH 2220, FISCHETTI 4841, TEJEDOR 1421 (actualmente 0 u/mes).',
      riesgoMitigado: 'Insolvencia técnica por capital inmovilizado en obras terminadas sin venta',
    },
  ],
  d30: [
    {
      accion: 'Repricing agresivo (15-20%) en RAUCH 2220, FISCHETTI 4841, TEJEDOR 1421 + campaña de liquidación exclusiva por email a los 67 compradores satisfechos que respondieron "Sí" a recompra',
      porQue: 'El mercado no demanda estas obras a las condiciones actuales. Repricing + audiencia calificada (los 67 que ya compraron y están satisfechos) maximiza probabilidad de rotación rápida con costo de adquisición cero.',
      areaLider: 'Gerencia Comercial + Marketing Digital',
      kpi: 'Vendido % en RAUCH 2220, FISCHETTI 4841, TEJEDOR 1421 (actualmente 0%); Tasa de absorción general (actualmente 22%).',
      riesgoMitigado: 'Insolvencia técnica por capital inmovilizado en obras terminadas + Stock crítico de 255 unidades',
    },
    {
      accion: 'Campaña de email segmentada exclusiva para EL PORTAL DE ROCA: mensaje "Últimas 33 unidades antes de entrega" con descuento 10% a lista limpia (post-validación de 72 hs)',
      porQue: 'EL PORTAL DE ROCA tiene 33 unidades disponibles con solo 6 meses para entrega. Al ritmo actual (2.23 u/mes) se entregarán ~20 sin vender. Campaña de urgencia con descuento acelera absorción para evitar stock post-entrega.',
      areaLider: 'Marketing Digital + Gerencia Comercial',
      kpi: 'Velocidad venta EL PORTAL DE ROCA (objetivo: acelerar de 2.23 u/mes a 4-5 u/mes); Sell-out antes de entrega.',
      riesgoMitigado: 'Entrega de EL PORTAL DE ROCA con ~20 unidades sin vender y flujo de caja negativo',
    },
    {
      accion: 'Lanzamiento de campaña digital de captación de leads para productos 2026 con prueba A/B de mensajes + segmentación por perfil inversor',
      porQue: 'La proyección de boletos 2026 cae 34% (141 → 93). Sin nuevos leads calificados, el flujo de caja 2026 será insuficiente. Campaña digital con segmentación reactiva el embudo con costo controlado.',
      areaLider: 'Marketing Digital',
      kpi: 'Reservas proyectadas 2026 (objetivo: recuperar a >120); Boletos proyectados (objetivo: recuperar a >110).',
      riesgoMitigado: 'Desaceleración sostenida en generación de operaciones nuevas para 2026',
    },
    {
      accion: 'Auditoría técnica completa de tracking de Emblue: verificar configuración de conteo de clics y eventos duplicados (CTOR del 174% en "Envío General Branding" es anómalo)',
      porQue: 'El CTOR del 174% vs benchmark 60-80% sugiere problemas de tracking que inflan métricas artificialmente, impidiendo tomar decisiones informadas sobre qué contenido funciona.',
      areaLider: 'Sistemas + Marketing Digital',
      kpi: 'Confiabilidad de métricas de email marketing; CTOR alineado con benchmark 60-80%.',
      riesgoMitigado: 'Toma de decisiones comerciales basadas en datos erróneos por métricas infladas',
    },
    {
      accion: 'Implementación de alarma automática semanal para reservas >30 días sin avance a boleto, con notificación a Gerencia Comercial para decisión (liberar o extender con justificación escrita)',
      porQue: 'El aging de reservas actual es 0 días (óptimo), pero sostenerlo requiere automatización para prevenir que futuras reservas se estanquen sin control manual constante.',
      areaLider: 'Sistemas + Gerencia Comercial',
      kpi: 'Aging promedio de reservas (objetivo: mantener en 0-5 días); Rotación de stock reservado.',
      riesgoMitigado: 'Acumulación futura de reservas sin convertir que bloqueen stock',
    },
  ],
  d90: [
    {
      accion: 'Decisión estratégica sobre ESTACIONAMIENTO HURLINGHAM (245 unidades), Zafiro (162 unidades), TORRE CRISTAL (130 unidades): repricing masivo 25-30% o venta en bloque a fondo inversor institucional',
      porQue: 'Estas 3 obras (537 unidades = 27% del stock disponible) tienen velocidad de venta 0 u/mes sin señales de tracción espontánea. En 90 días, si no rotan con repricing drástico, la única salida es liquidación mayorista.',
      areaLider: 'Dirección Financiera + Gerencia Comercial',
      kpi: 'Stock disponible total (objetivo: reducir de 1983 a <1500 unidades); Tasa absorción comercial (objetivo: elevar de 22% a >30%).',
      riesgoMitigado: 'Stock crítico de 537 unidades se convierte en activo muerto permanente',
    },
    {
      accion: 'Programa estructurado de cliente recurrente: base de datos de los 67 compradores que respondieron "Sí" a recompra + oferta de prelanzamiento exclusivo con descuento 5-7% para nuevas obras',
      porQue: 'Existe una base calificada de 67 clientes satisfechos con intención de recompra declarada, pero no hay evidencia de estrategia sistemática para capitalizar este activo. Costo de adquisición: cero.',
      areaLider: 'Marketing Digital + Gerencia Comercial',
      kpi: 'Tasa de recompra efectiva (objetivo: 15-20% de los 67 en 90 días); Boletos generados sin inversión en captación.',
      riesgoMitigado: 'Desaprovechamiento de base calificada + Desaceleración operaciones 2026',
    },
    {
      accion: 'Revisión integral de proceso de comunicación de plazos de entrega: protocolo conjunto Obra + Comercial con fechas realistas + margen de contingencia obligatorio 10-15% en toda promesa al comprador',
      porQue: 'El 13.8% de compradores reporta incumplimiento de plazos. La causa probable es descoordinación: Comercial promete fechas que Obra no puede cumplir. Margen de contingencia sistemático previene futuros incumplimientos.',
      areaLider: 'Gerencia de Obra + Gerencia Comercial',
      kpi: 'Cumplimiento de plazos reportado (objetivo: elevar de 55.2% a >80%); Satisfacción del comprador.',
      riesgoMitigado: 'Incumplimiento de plazos deteriora reputación y genera reclamos',
    },
    {
      accion: 'Estrategia de canal especializado para ESTACIONAMIENTO HURLINGHAM: contacto con 3 inmobiliarias especializadas en inversión de renta + presentación de producto con foco en ROI mensual, no en valorización',
      porQue: 'ESTACIONAMIENTO HURLINGHAM (245 unidades) es producto de nicho que NO se vende con canales tradicionales. Se necesitan brokers que trabajen con inversores de renta o fondos que compren paquetes para alquiler.',
      areaLider: 'Gerencia Comercial + Desarrollo de Producto',
      kpi: 'Velocidad venta ESTACIONAMIENTO HURLINGHAM (actualmente 0 u/mes); Rotación de stock de nicho.',
      riesgoMitigado: 'Stock crítico de ESTACIONAMIENTO HURLINGHAM por canal inadecuado',
    },
    {
      accion: 'Implementación de dashboard ejecutivo en tiempo real: KPIs semanales de ventas, reservas, aging, bounce rate email; visibles para Directorio con alertas automáticas si alguno cruza umbral crítico',
      porQue: 'Actualmente los reportes son mensuales y descriptivos. Para gestionar los riesgos identificados (stock inmovilizado, desaceleración 2026, sender reputation), el Directorio necesita visibilidad semanal y alertas proactivas.',
      areaLider: 'Sistemas + Dirección General',
      kpi: 'Tiempo de reacción ante desviaciones (reducir de 30 días a 7 días); Riesgos detectados tempranamente.',
      riesgoMitigado: 'Todos los riesgos identificados (visibilidad tardía impide intervención oportuna)',
    },
  ],
};
