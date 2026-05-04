// ── MÓDULO 2: COMERCIAL ──────────────────────────────────────────────────────
// Período: Mayo 2026 (corte al 4 de mayo de 2026)

export const semaforo = [
  {
    subarea: 'Ventas x periodo',
    estado: 'CRÍTICO',
    color: 'red',
    metrica: 'Brecha avance-venta: 67.1pp (89.1% avance vs 22.0% venta); 1.983 unidades disponibles sin absorción',
    umbral: 'Brecha >20pp = crítico',
  },
  {
    subarea: 'Ventas y reservas (30 días)',
    estado: 'SALUDABLE',
    color: 'green',
    metrica: '0% reservas pendientes recientes; ratio conversión 121.7% (28 boletos / 23 reservas)',
    umbral: 'Pendientes <5% = saludable',
  },
  {
    subarea: 'Ventas y reservas (backlog)',
    estado: 'CRÍTICO',
    color: 'red',
    metrica: '646 reservas pendientes históricas; 541 días promedio de antigüedad; 58% concentrado en un responsable (JOSE)',
    umbral: 'Antigüedad >90 días = crítico',
  },
  {
    subarea: 'Firma boleto',
    estado: 'BUENO',
    color: 'yellow',
    metrica: '77% recompra, 70.1% satisfacción "Muy Buena", pero 13.8% incumplimiento de plazos y 16.1% sin info de canal',
    umbral: 'Satisfacción >70% = bueno; incumplimiento >10% = alerta',
  },
  {
    subarea: 'Emblue',
    estado: 'CRÍTICO',
    color: 'red',
    metrica: 'Bounce rate 16.6% en campaña masiva "Branding" (umbral aceptable <5%); riesgo de blacklist del sender',
    umbral: 'Bounce >5% = crítico',
  },
];

export const hallazgos = [
  'Estrés de caja por descalce masivo obra-venta: con 89.1% de avance técnico promedio y solo 22.0% de ventas, CLAMACO mantiene 1.983 unidades inmovilizadas sin conversión comercial. El gap de 67.1pp es el riesgo financiero dominante: obras como RAUCH 2220 (48 unidades, 100% avance, 0% venta), URUGUAY 563 (4 unidades) y MURIAS 385 (19 unidades) tienen su inversión totalmente paralizada sin proyección de recupero inmediato.',
  'Backlog histórico de reservas como pasivo operativo oculto: las 646 reservas pendientes históricas (541 días promedio, máximo 903 días) no son oportunidades comerciales sino stock trabado que distorsiona indicadores y bloquea unidades. El 58% de este pasivo está bajo responsabilidad de un único gestor (JOSE: 374 casos, 548 días promedio), sin motivo documentado en 642 de los 646 casos. EL PORTAL DE ROCA concentra 127 reservas pendientes por $8.336.348 inmovilizados.',
  'Riesgo de reputación digital por entregabilidad en email marketing: la campaña "Envío General Diciembre 2025 - Branding" registra 16.6% de bounce rate (umbral crítico: >5%), situando al sender en zona de riesgo de blacklist por ISPs. De 45.852 envíos, 7.596 emails rebotaron, contaminando la reputación del dominio y afectando la entregabilidad de campañas futuras. El Open Rate de 7% (bajo el benchmark 8-12%) confirma problemas de relevancia o timing.',
];

export const termometroGlobal = [
  { label: 'Obras activas',             actual: 105,   unidad: '',   nota: null },
  { label: 'Unidades activas',           actual: 2542,  unidad: '',   nota: null },
  { label: 'Avance físico ponderado',    actual: 89.1,  unidad: '%',  nota: 'Cartera madura — inversión ya materializada' },
  { label: 'Absorción comercial',        actual: 22.0,  unidad: '%',  nota: '559 vendidas de 2542 totales' },
  { label: 'Unidades disponibles',       actual: 1983,  unidad: '',   nota: 'Capital completamente inmovilizado' },
  { label: 'Gap ponderado avance-venta', actual: 67.1,  unidad: 'pp', nota: 'Descalce estructural crítico' },
  { label: 'Obras frenadas >90 días',    actual: 8,     unidad: '',   nota: 'Por falta de tracción comercial, no por problemas técnicos' },
];

export const brechaAvance = [
  { obra: 'RAUCH 2220',         avance: 100, vendido: 0,    vendidas: 0,  total: 48,  brecha: 100,  tipo: 'SIN_TRACCION + FRENADA_90D' },
  { obra: 'URUGUAY 563',        avance: 100, vendido: 0,    vendidas: 0,  total: 4,   brecha: 100,  tipo: 'SIN_TRACCION + FRENADA_90D' },
  { obra: 'MURIAS 385',         avance: 100, vendido: 0,    vendidas: 0,  total: 19,  brecha: 100,  tipo: 'SIN_TRACCION + FRENADA_90D' },
  { obra: 'AMERICA 4158',       avance: 100, vendido: 0,    vendidas: 0,  total: 33,  brecha: 100,  tipo: 'SIN_TRACCION' },
  { obra: 'PUEYRREDON 265',     avance: 100, vendido: 0,    vendidas: 0,  total: 24,  brecha: 100,  tipo: 'SIN_TRACCION + FRENADA_90D' },
  { obra: 'CALLE 39',           avance: 100, vendido: 5.6,  vendidas: 1,  total: 18,  brecha: 94.4, tipo: 'VENDIDO_NO_TERMINADO' },
  { obra: 'PERITO MORENO 1100', avance: 100, vendido: 12.5, vendidas: 1,  total: 8,   brecha: 87.5, tipo: '—' },
  { obra: 'MAIPU 1390',         avance: 100, vendido: 14.3, vendidas: 1,  total: 7,   brecha: 85.7, tipo: '—' },
  { obra: 'ARENALES 1571',      avance: 100, vendido: 14.3, vendidas: 2,  total: 14,  brecha: 85.7, tipo: '—' },
  { obra: 'AYACUCHO 267',       avance: 100, vendido: 15.4, vendidas: 2,  total: 13,  brecha: 84.6, tipo: '—' },
];

export const lecturaAnaliticaBrechaAvance = 'Las cinco primeras obras comparten un patrón idéntico: construcción finalizada, 0% de ventas, y ausencia total de tracción comercial reciente. Esto no es un problema de timing o estacionalidad: es un fallo sistémico de producto-mercado o posicionamiento comercial. El hecho de que todas tengan "ritmo_obra_pct" en null sugiere que no existen cronogramas comerciales claros o actualizados en sistema, lo que imposibilita proyectar sell-out o tomar decisiones basadas en velocidad histórica. La etiqueta "OBRA_ATRASADA" en RAUCH 2220 —pese a tener 100% de avance técnico— indica una posible desincronización entre sistemas de control o un rezago en el registro de finalización formal.';

export const top3Descalzadas = [
  {
    obra: 'RAUCH 2220',
    avance: 100, vendido: 0, unidades: '0/48', mesesSinVenta: 'S/D', brecha: 100,
    causa: 'Obra 100% finalizada sin ninguna unidad vendida (0 de 48). Marca "SIN_TRACCION + FRENADA_90D", indicando ausencia de actividad comercial sostenida y posible desajuste entre oferta y demanda del segmento objetivo. La ausencia de datos de velocidad de venta y ritmo de obra (null) impide proyectar escenarios de absorción, evidenciando falta de cronograma comercial claro en sistema.',
    impactoFinanciero: '48 unidades completamente inmovilizadas representan el mayor volumen de capital trabado individual del portafolio. Sin conversión, cada mes de stock agrega costo financiero (mantenimiento, impuestos, costo de oportunidad) sin perspectiva de recupero.',
    consecuencia: 'Si no se interviene en los próximos 60 días con repricing agresivo, cambio de comercializadora o redefinición de producto, el capital permanecerá paralizado hasta 2027, comprometiendo la capacidad de CLAMACO para iniciar nuevos emprendimientos o responder a contingencias operativas.',
    ritmoCronograma: 'S/D — campo null en sistema. La obra carece de cronograma comercial claro o el seguimiento está desconectado. Imperativo actualizar para todas las obras con avance >80%.',
  },
  {
    obra: 'URUGUAY 563',
    avance: 100, vendido: 0, unidades: '0/4', mesesSinVenta: 'S/D', brecha: 100,
    causa: 'Misma situación que RAUCH 2220 en escala menor: 100% avance técnico, 0% ventas, 4 unidades sin absorción. Etiquetas "SIN_TRACCION + FRENADA_90D". Datos de velocidad y sell-out proyectado no disponibles (null), confirmando ausencia de seguimiento comercial estructurado.',
    impactoFinanciero: 'Aunque menor en volumen absoluto, 4 unidades inmovilizadas erosionan la eficiencia global de la cartera y proyectan imagen de sobrestock crónico que afecta la percepción de inversores y entidades financieras.',
    consecuencia: 'Persistir sin intervención consolidará a URUGUAY 563 como "activo muerto" en balance. Se requiere diagnóstico urgente de frenos actuales (precio, producto, ubicación, estrategia de canales) antes de cualquier acción táctica.',
    ritmoCronograma: 'S/D — sin cronograma comercial en sistema. Sin velocidad histórica ni proyección de absorción disponible.',
  },
  {
    obra: 'MURIAS 385',
    avance: 100, vendido: 0, unidades: '0/19', mesesSinVenta: 'S/D', brecha: 100,
    causa: 'Patrón idéntico: obra finalizada (100%), sin ventas (0%), 19 unidades disponibles sin rotación. Marcadores "SIN_TRACCION + FRENADA_90D" confirman estancamiento prolongado. La ausencia de datos de ritmo y velocidad imposibilita proyectar escenarios de recuperación comercial.',
    impactoFinanciero: '19 unidades representan un volumen intermedio de inmovilización que, sumado a RAUCH 2220 y URUGUAY 563, conforma un pasivo consolidado de 71 unidades (48+4+19) completamente paralizadas sin perspectiva inmediata.',
    consecuencia: 'El capital inmovilizado disminuye la capacidad de financiamiento del holding para emprendimientos de mayor dinámica. Sin shock comercial inmediato (repricing, tercerización de ventas, redefinición de mix), el escenario es de inmovilización estructural hasta 2027-2028.',
    ritmoCronograma: 'S/D — sin cronograma comercial en sistema ni velocidad histórica de venta disponible.',
  },
];

export const stockInmovilizado = [
  { obra: 'RAUCH 2220',     avance: 100, vendido: 0, disponibles: 48, disponiblesTotal: '48/48', diasSinVenta: 'S/D', velocidadVenta: 'S/D', selloutProyectado: 'Stock no rotativo', hipotesis: 'Desajuste producto-mercado o falla en comercialización; sin cronograma comercial. Obra frenada >90 días sin actividad.' },
  { obra: 'AMERICA 4158',   avance: 100, vendido: 0, disponibles: 33, disponiblesTotal: '33/33', diasSinVenta: 'S/D', velocidadVenta: 'S/D', selloutProyectado: 'Stock no rotativo', hipotesis: 'Sin tracción comercial; ausencia de datos impide diagnóstico preciso.' },
  { obra: 'PUEYRREDON 265', avance: 100, vendido: 0, disponibles: 24, disponiblesTotal: '24/24', diasSinVenta: 'S/D', velocidadVenta: 'S/D', selloutProyectado: 'Stock no rotativo', hipotesis: 'Obra frenada >90 días; sin velocidad histórica ni proyección de absorción.' },
];

export const lecturaAnaliticaStock = 'La ausencia sistemática de datos de "días sin venta", "velocidad de venta mensual" y "meses para sellout" en todas las obras del ranking no es un detalle técnico: es un indicador de ausencia de gestión comercial activa. Sin estos KPIs, no es posible distinguir una obra con "venta lenta pero sostenida" de un "activo muerto sin movimiento". La consecuencia operativa es que cualquier decisión (repricing, relanzamiento, baja) se toma a ciegas, sin fundamento cuantitativo. Recomendamos implementación urgente de tablero de velocidad comercial semanal para todas las obras con stock >10 unidades.';

export const entregaInminente = [];

export const entregaInminenteNota = 'El ranking ENTREGA_INMINENTE está vacío: no existen obras con fechas de posesión cercanas y stock pendiente significativo al momento del corte. Esto reduce la presión inmediata sobre compromisos contractuales. Sin embargo, la ausencia de entregas inminentes no mitiga el problema estructural de fondo: el capital invertido en las 105 obras activas permanece inmovilizado sin retorno proyectado. La ventana de "riesgo bajo por entrega" no debe interpretarse como salud comercial, sino como una pausa temporal en la presión contractual.';

export const motoresSolvencia = [
  { obra: 'AMERICA 347', avance: 100, vendido: 100.3, vendidas: 110, total: 110, rol: 'Motor de solvencia y referencia de eficiencia; sell-out absoluto con sobrecolocación marginal (0.3%).' },
  { obra: 'MORENO 762',  avance: 100, vendido: 100,   vendidas: 19,  total: 19,  rol: 'Modelo de sincronización perfecta obra-venta; conversión total sin stock remanente.' },
  { obra: 'VIGNES 250',  avance: 100, vendido: 100,   vendidas: 19,  total: 19,  rol: 'Ejemplo de ejecución sin fisuras; capital invertido totalmente recuperado.' },
];

export const lecturaAnaliticaMotores = 'AMERICA 347 no solo alcanzó el sell-out: lo superó marginalmente (100.3%), lo que sugiere venta de unidades adicionales (posiblemente cocheras o amenities) o ajustes en el conteo inicial. Este desempeño, junto con MORENO 762 y VIGNES 250, demuestra que el modelo comercial de CLAMACO sí funciona cuando se ejecuta correctamente. El patrón común en estas tres obras debería ser documentado como "playbook" para replicar en emprendimientos futuros: segmentación adecuada, precio alineado con mercado, tracción comercial desde etapa temprana, y ausencia de desajustes entre avance técnico y ventas. Estas obras son el benchmark interno que justifica por qué el problema no es de capacidad sino de ejecución en las obras descalzadas.';

export const estresCaja = {
  causa: 'Inversión masiva en construcción sin conversión comercial sincronizada.',
  mecanismo: 'CLAMACO ha finalizado o avanzado significativamente 105 obras hasta un promedio ponderado de 89.1%, comprometiendo capital en materiales, mano de obra, permisos, honorarios y costos financieros. Sin embargo, solo el 22.0% de las unidades se ha convertido en ventas efectivas, lo que significa que el 78.0% del stock construido (1.983 unidades) permanece sin generar flujo de ingreso para recuperar la inversión.',
  cifras: {
    unidadesInmovilizadas: 1983,
    pctObrasGapPositivo:   89,
    obrasGapMas50pp:       10,
  },
  impacto: [
    'Inmovilización de capital: cada mes sin venta agrega costo de mantenimiento, impuestos y costo de oportunidad sin perspectiva de retorno.',
    'Presión sobre líneas de crédito: la falta de conversión comercial reduce la capacidad de pago de pasivos y limita el acceso a nuevo financiamiento para contingencias o nuevos emprendimientos.',
    'Concentración de riesgo: solo 3 obras (AMERICA 347, MORENO 762, VIGNES 250) con sell-out total generan flujo positivo, mientras 71 unidades (RAUCH 2220, URUGUAY 563, MURIAS 385) permanecen completamente paralizadas sin proyección de absorción.',
    'Erosión de solvencia: la relación activo circulante/pasivo circulante se deteriora sostenidamente mientras persista el descalce, comprometiendo la salud financiera estructural del holding.',
  ],
  consecuencias: [
    'Corto plazo (0-90 días): sin acción correctiva inmediata (repricing agresivo, liquidación de stock estratégico, cambio de modelo comercial), el estrés de caja escalará hasta comprometer la viabilidad operativa.',
    'Mediano plazo (90-180 días): deterioro de reputación crediticia, pérdida de poder de negociación con proveedores, imposibilidad de lanzar nuevos proyectos por falta de capital.',
    'Largo plazo (>180 días): La ventana de acción es de 90 días máximo para revertir la tendencia mediante conversión acelerada de al menos el 30% del stock disponible de las obras críticas.',
  ],
};

export const embudo = {
  boletos:              28,
  reservas:             23,
  ratio:                1.217,
  agingMas60:           0,
  montoBoletos:         1304705,
  montoReservas:        1120450,
  boletoIngresado:      1160665,
  boletoIngresadoPct:   88.9,
  reservaIngresada:     72500,
  reservaIngresadaPct:  6.5,
  periodoLabel:         '4 abril – 4 mayo 2026',
};

export const estadoEmbudoDetalle = [
  { metrica: 'Boletos generados (período)',                valor: '28',      benchmark: 'N/A',           interpretacion: 'Volumen de cierre efectivo; indica pipeline activo en los últimos 30 días.' },
  { metrica: 'Reservas generadas (período)',               valor: '23',      benchmark: 'N/A',           interpretacion: 'Actividad comercial genuina; oportunidades en proceso de cierre.' },
  { metrica: 'Reservas pendientes (período)',              valor: '0',       benchmark: '<5% del total', interpretacion: 'EXCELENTE: 0% de mora reciente; embudo limpio sin acumulación de preventivos.' },
  { metrica: 'Ratio conversión boleto/reserva (período)', valor: '121.7%',  benchmark: '>100% óptimo',  interpretacion: 'SOBRESALIENTE: conversión inmediata + rescate de operaciones de backlog previo.' },
  { metrica: 'Promedio días pendientes (período)',         valor: '0 días',  benchmark: '<30 días',       interpretacion: 'ÓPTIMO: no hay acumulación de preventivos sin seguimiento activo.' },
  { metrica: 'Reservas pendientes >90 días (período)',    valor: '0',       benchmark: '0 esperado',     interpretacion: 'PERFECTO: no se generan nuevos pasivos operativos en el período reciente.' },
];

export const lecturaAnaliticaEmbudo = 'El ratio de conversión de 121.7% (28 boletos sobre 23 reservas) es inusualmente alto y merece explicación: indica que el equipo no solo está procesando todas las reservas nuevas del período sino también rescatando operaciones de backlog previo o acelerando la conversión de reservas históricas recientes. Esto es positivo operativamente (muestra capacidad de cierre), pero requiere seguimiento: si el ratio se mantiene >120% de forma sostenida, podría indicar que las reservas nuevas están siendo subestimadas o que existe un desfase temporal en la carga de datos.';

export const tendenciaYoY = [];

export const canalInmobiliaria = [
  { inmobiliaria: 'Zelaschi',      boletos: 11, reservas: 8, ratio: 138, clasificacion: 'Motor' },
  { inmobiliaria: 'Particular',    boletos: 4,  reservas: 7, ratio: 57,  clasificacion: 'Cuello de botella' },
  { inmobiliaria: 'Marcelo Russo', boletos: 3,  reservas: 1, ratio: 300, clasificacion: 'Normal' },
  { inmobiliaria: 'Yamil Remax',   boletos: 2,  reservas: 1, ratio: 200, clasificacion: 'Normal' },
  { inmobiliaria: 'Di Paolo',      boletos: 2,  reservas: 3, ratio: 67,  clasificacion: 'Cuello de botella' },
  { inmobiliaria: 'Otros (5+)',    boletos: 6,  reservas: 3, ratio: 200, clasificacion: 'Normal' },
];

export const lecturaAnaliticaCanal = 'Zelaschi concentra el 39.3% de los boletos del período (11 de 28) y opera con la mayor eficiencia: 137.5% de conversión, 0 reservas pendientes, y monto gestionado de $544.460. Este desempeño sugiere mejor acceso a compradores calificados, procesos internos más eficientes, o mayor expertise en el producto CLAMACO. Desde una perspectiva estratégica, Zelaschi debe recibir prioridad administrativa (respuesta preferente, acceso anticipado a nuevas unidades, condiciones comerciales competitivas) para capitalizar su capacidad de tracción. En contraste, Particular muestra 7 reservas pero solo 4 boletos (57.1%), indicando que 3 operaciones no se concretaron o están en proceso. Di Paolo presenta un cuadro similar (66.7% de conversión). Ambos canales requieren contacto específico esta semana para diagnosticar causas de no cierre y ajustar prácticas.';

export const agingReservas = {
  moraMas30:    0,
  moraMas60:    0,
  promedioDias: 0,
  obrasCriticas: [],
  backlog: {
    total:             646,
    promedioDias:      541,
    maximo:            903,
    montoInmovilizado: 30697982,
    sinMotivo:         642,
  },
  responsableCritico: {
    nombre:            'JOSE',
    cantidad:          374,
    porcentajeBacklog: 58,
    promedioDias:      548,
    maximo:            903,
    monto:             18798878,
    causa:             'Ausencia de seguimiento estructurado y falta de definición estado por estado',
  },
  obraCriticaBacklog: {
    nombre:       'EL PORTAL DE ROCA',
    cantidad:     127,
    promedioDias: 517,
    maximo:       788,
    monto:        8336348,
    causa:        'Patrón recurrente de estancamiento; posible desajuste producto-mercado o traba documental no resuelta',
  },
};

export const firmaBoleto = {
  kpis: [
    { metrica: 'Total respuestas encuesta',     valor: '87',    interpretacion: 'Muestra representativa con 0 duplicados; base limpia' },
    { metrica: 'Satisfacción "Muy Buena"',      valor: '70.1% (61 de 87)', interpretacion: 'BUENO: mayoría con experiencia positiva; marca fuerte' },
    { metrica: 'Satisfacción "Buena"',          valor: '25.3% (22 de 87)', interpretacion: 'Segmento conforme pero con margen de mejora' },
    { metrica: 'Satisfacción "Regular"',        valor: '4.6% (4 de 87)',   interpretacion: 'ALERTA MENOR: casos puntuales que requieren seguimiento' },
    { metrica: 'Cumplimiento de plazo',         valor: '55.2% (48 de 87)', interpretacion: 'ACEPTABLE pero con margen crítico: 44.8% no cumplió o aún no entregó' },
    { metrica: 'Incumplimiento de plazo',       valor: '13.8% (12 de 87)', interpretacion: 'CRÍTICO: 1 de cada 7 compradores reporta retraso efectivo' },
    { metrica: 'Departamento de pozo',          valor: '31.0% (27 de 87)', interpretacion: 'Segmento que aún no puede evaluar cumplimiento; natural en ciclo de obra' },
    { metrica: 'Recompra declarada ("Sí")',      valor: '77.0% (67 de 87)', interpretacion: 'EXCELENTE: alta fidelización y confianza en la marca' },
    { metrica: 'Recompra incierta ("Tal Vez")', valor: '19.5% (17 de 87)', interpretacion: 'Oportunidad de conversión mediante post-venta activo' },
    { metrica: 'Rechazo de recompra ("No")',    valor: '3.4% (3 de 87)',   interpretacion: 'BAJO: casos aislados; requieren análisis individual' },
  ],
  lecturaAnaliticaKpis: 'El 70.1% de satisfacción "Muy Buena" es un activo estratégico que debe protegerse: indica que CLAMACO genera experiencias positivas en la mayoría de los casos. Sin embargo, el 13.8% de incumplimiento de plazos es una amenaza directa a la reputación: cada comprador insatisfecho por retraso puede contaminar la percepción de múltiples prospectos vía recomendaciones negativas. El dato de 77% de recompra declarada es excepcional, pero debe contrastarse con el 13.8% de incumplimiento: si los retrasos se acumulan, ese 77% puede erosionarse rápidamente.',
  satisfaccion: [
    { nivel: 'Muy Buena (5★)', pct: 70.1, cantidad: 61 },
    { nivel: 'Buena (4★)',     pct: 25.3, cantidad: 22 },
    { nivel: 'Regular (3★)',   pct: 4.6,  cantidad: 4  },
  ],
  recompra: [
    { respuesta: 'Sí volvería a invertir',      pct: 77.0, cantidad: 67 },
    { respuesta: 'Tal Vez',                     pct: 19.5, cantidad: 17 },
    { respuesta: 'No volvería a invertir',      pct: 3.4,  cantidad: 3  },
  ],
  lecturaAnaliticaSatisfaccion: 'El dominio de inmobiliarias como canal de captación (53.4%) confirma que el modelo comercial de CLAMACO depende críticamente de la red de brokers externos. Esto tiene dos implicancias: (1) cualquier deterioro en la relación con inmobiliarias clave afecta directamente el flujo de oportunidades; (2) la capacidad de venta directa o digital es limitada (solo 8.2% vía publicidad), lo que reduce el control sobre el embudo comercial. El 15.1% de captación vía "Contacto de referencia" es un activo subestimado: los compradores satisfechos están generando recomendaciones orgánicas, un canal de costo cero que debe incentivarse mediante programas de referidos formales.',
  captacion: [
    { canal: 'Inmobiliarias',                        pct: 53.4, cantidad: 39 },
    { canal: 'Contacto de referencia',               pct: 15.1, cantidad: 11 },
    { canal: 'Publicidad',                           pct: 8.2,  cantidad: 6  },
    { canal: 'Contacto + Inmobiliarias (combinado)', pct: 8.2,  cantidad: 6  },
    { canal: 'Referencia de comprador anterior',     pct: 1.4,  cantidad: 1  },
    { canal: 'Sin respuesta',                        pct: 16.1, cantidad: 14 },
  ],
  cumplimientoPlazo: [
    { estado: 'Sí, se cumplió el plazo',              pct: 55.2, cantidad: 48, riesgo: 'BAJO — Experiencia positiva consolidada.' },
    { estado: 'Departamento en pozo (no aplica aún)', pct: 31.0, cantidad: 27, riesgo: 'NEUTRO — No aplicable aún; natural en ciclo de obra.' },
    { estado: 'No se cumplió el plazo',               pct: 13.8, cantidad: 12, riesgo: 'ALTO — Daño reputacional y riesgo legal/contractual.' },
  ],
  lecturaAnaliticaCumplimiento: 'El 13.8% de incumplimiento no es un detalle operativo: es un foco de riesgo reputacional y legal. Cada retraso genera potencial conflicto con el comprador, activa cláusulas de penalidad en contratos, y alimenta percepciones negativas que se amplifican en redes y boca a boca. El hecho de que existan 12 casos reportados en una muestra de 87 sugiere que el problema puede ser más grave en la base completa de compradores. Recomendamos auditoría exhaustiva de todas las obras con entregas 2024-2025 para cuantificar el universo real de retrasos y activar plan de contingencia contractual.',
  riesgos: [
    { severidad: 'alta',  texto: 'Incumplimiento de plazos (13.8%)', causa: 'Desajustes en cronogramas, falta de coordinación obra-comercial, o contingencias no previstas', consecuencia: 'Erosión de reputación, activación de cláusulas de penalidad, pérdida de recompras futuras y daño a marca CLAMACO' },
    { severidad: 'media', texto: 'Falta de datos de canal de captación (16.1%)', causa: 'Ausencia de carga sistemática en CRM o ficha de boleto', consecuencia: 'Imposibilidad de medir ROI por canal, optimizar inversión comercial, o replicar modelos exitosos' },
    { severidad: 'media', texto: 'Comentarios de post-venta negativos (ruidos entre unidades, demoras en entrega de llaves)', causa: 'Falta de insonorización adecuada, coordinación deficiente en posesión', consecuencia: 'Insatisfacción post-venta que contamina experiencia global y reduce probabilidad de recompra' },
    { severidad: 'baja',  texto: 'Ausencia de diferencial para inversores recompradores', causa: 'Modelo comercial sin segmentación por perfil de comprador', consecuencia: 'Pérdida de oportunidad de fidelización y captación de inversores recurrentes mediante incentivos estructurados' },
  ],
  oportunidades: [
    'Programa de referidos formales: con 15.1% de captación vía contacto de referencia y 77% de recompra declarada, existe base para estructurar incentivos económicos. Diseñar programa con comisión o descuento por referido efectivo en próximos 60 días.',
    'Segmentación de inversores recurrentes: un comprador señala explícitamente la necesidad de "diferencial en valores para recompra, no pagar igual que alguien que entra por primera vez". Crear esquema de descuentos escalonados (5-10-15%) para segunda, tercera y cuarta compra.',
    'Optimización de proceso de entrega de llaves: varios comentarios mencionan "demoras en entrega de llaves" y "mejorar cordialidad en entrega". Rediseñar protocolo con checklist obligatorio, asignación de responsable exclusivo por obra, y encuesta de satisfacción inmediata post-posesión.',
    'Upselling de tecnologías de confort: un comprador valora "silencio y luminosidad" y sugiere mejorar insonorización. Ofrecer paquete de insonorización premium (ventanas DVH, aislación acústica) como add-on en preventas futuras, generando margen adicional.',
  ],
  planAccion7dias: [],
  conclusion: 'Los indicadores de satisfacción son sólidos (70.1% Muy Buena, 77% recompra declarada) y el embudo convierte bien (121.7% en período reciente), pero el 13.8% de incumplimiento de plazos amenaza directamente esos activos y el backlog histórico de 646 reservas bloquea stock real sin reflejarse en reportes.',
};

export const emblue = [
  { campana: 'Inversiones',                             envios: 8992,  openRate: 25,  ctr: 19, ctor: 130, bounceRate: 5.3,  clasificacion: 'Destacada' },
  { campana: 'No todos buscan lo mismo - Disparador',   envios: 42197, openRate: 12,  ctr: 6,  ctor: 64,  bounceRate: 11.1, clasificacion: 'Normal' },
  { campana: 'Envío General Diciembre 2025 - Branding', envios: 45852, openRate: 7,   ctr: 8,  ctor: 174, bounceRate: 16.6, clasificacion: 'Problema grave' },
];

export const embleaBenchmarks = [
  { metrica: 'Open Rate — Inversiones',                valorCampana: '25.0%', benchmark: '8-12%', brecha: '+13 a +17 pp',  interpretacion: 'SOBRESALIENTE: segmentación quirúrgica y asunto altamente relevante. 3.5x el OR de "Branding".' },
  { metrica: 'Open Rate — No todos buscan lo mismo',   valorCampana: '12.0%', benchmark: '8-12%', brecha: 'En rango',       interpretacion: 'ACEPTABLE: en el límite superior del benchmark. Requiere mejora de asunto y timing.' },
  { metrica: 'Open Rate — Envío General Branding',     valorCampana: '7.0%',  benchmark: '8-12%', brecha: '-1 a -5 pp',    interpretacion: 'INFERIOR: bajo el mínimo del benchmark. Solo 2.614 de 38.256 usuarios abren el email (93.2% desperdicio).' },
  { metrica: 'CTR — Inversiones',                      valorCampana: '19.0%', benchmark: '2-5%',  brecha: '+14 a +17 pp',  interpretacion: 'EXCEPCIONAL: contenido altamente relevante; calls-to-action muy efectivos.' },
  { metrica: 'CTR — No todos buscan lo mismo',         valorCampana: '6.0%',  benchmark: '2-5%',  brecha: '+1 a +4 pp',    interpretacion: 'BUENO: supera benchmark aunque con menor margen que "Inversiones".' },
  { metrica: 'CTR — Envío General Branding',           valorCampana: '8.0%',  benchmark: '2-5%',  brecha: '+3 a +6 pp',    interpretacion: 'BUENO en clics, pero paradójico: el problema radica en la apertura, no en el contenido.' },
  { metrica: 'Bounce Rate — Inversiones',              valorCampana: '5.3%',  benchmark: '<5%',   brecha: '+0.3 pp',        interpretacion: 'ACEPTABLE: ligeramente sobre benchmark pero manejable con limpieza de lista.' },
  { metrica: 'Bounce Rate — No todos buscan lo mismo', valorCampana: '11.1%', benchmark: '<5%',   brecha: '+6.1 pp',        interpretacion: 'ELEVADO: lista desactualizada. Requiere limpieza urgente antes del próximo envío masivo.' },
  { metrica: 'Bounce Rate — Envío General Branding',   valorCampana: '16.6%', benchmark: '<5%',   brecha: '+11.6 pp',       interpretacion: 'CRÍTICO: compromete reputación del sender; riesgo inminente de penalización ISP y blacklist.' },
  { metrica: 'CTOR — Inversiones',                     valorCampana: '130%',  benchmark: '15-25%', brecha: '+105 a +115 pp', interpretacion: 'Contenido excepcionalmente atractivo; usuarios hacen múltiples clics dentro del email.' },
  { metrica: 'CTOR — No todos buscan lo mismo',        valorCampana: '64%',   benchmark: '15-25%', brecha: '+39 a +49 pp',   interpretacion: 'Muy por encima del benchmark; exploración activa del contenido.' },
  { metrica: 'CTOR — Envío General Branding',          valorCampana: '174%',  benchmark: '15-25%', brecha: '+149 a +159 pp', interpretacion: 'El más alto de todas, paradójico con el OR bajo: el contenido interesa pero el asunto no.' },
];

export const lecturaAnaliticaEmblue = 'El CTOR superior al 100% en todas las campañas (130%, 64%, 174%) es un indicador poco común que merece explicación técnica: sugiere que usuarios están haciendo múltiples clics dentro del mismo email (ej: clic en varias propiedades, clic en botón CTA y luego en imagen). Esto es positivo desde el punto de vista de engagement (el contenido genera exploración activa), pero también puede indicar problemas de diseño UX: si el usuario necesita varios clics para encontrar lo que busca, el email podría optimizarse para reducir fricción. Recomendamos heatmap de clics en próxima campaña para identificar patrones de navegación y simplificar el journey.';

export const emblueAnalisis = {
  destacada: {
    campana: 'Inversiones (actionId: 5763929)',
    puntos: [
      { label: 'Open Rate 25.0%', texto: '3.5x superior al promedio de las otras dos campañas (9.5%), indicando segmentación quirúrgica y asunto altamente relevante para la audiencia objetivo.' },
      { label: 'CTR 19.0%', texto: 'Tasa de clics excepcional, 2.4x el promedio de las otras campañas (7.0%), demostrando que el contenido y la oferta resuenan fuertemente.' },
      { label: 'CTOR 130%', texto: 'Conversión consistente de aperturas a clics, aunque menor que "Branding" (174%), sugiere múltiples interacciones por usuario.' },
      { label: 'Bounce Rate 5.3%', texto: 'El más bajo de todas las campañas, evidenciando lista de alta calidad y mantenimiento adecuado.' },
      { label: 'Volumen eficiente', texto: 'Aunque es la campaña de menor envío (8.992 mensajes), logra máxima eficiencia por contacto.' },
    ],
    causaExito: [
      'Mayor afinidad con el contenido (propuestas de inversión vs comunicación genérica)',
      'Segmentación más precisa (lista depurada de compradores históricos o leads calificados)',
      'Expectativa alineada (audiencia que espera contenido de CLAMACO, no sorprendida por email no solicitado)',
    ],
    recomendacion: 'Documentar "playbook" de esta campaña (segmentación, asunto, estructura de contenido, timing) y replicar elementos clave en futuras campañas de Branding y Disparadores.',
  },
  problema: {
    campana: 'Envío General Diciembre 2025 - Branding (actionId: 5697530)',
    metricas: [
      { label: 'Open Rate 7.0%', texto: 'Extremadamente bajo (65% inferior a "Inversiones"), indicando problemas con asunto, send time, o segmentación inadecuada.' },
      { label: 'Bounce Rate 16.6%', texto: 'CATASTRÓFICO: 5.5x el umbral aceptable (<3%), representando 7.596 emails rebotados de 45.852 enviados.' },
      { label: 'Envíos efectivos', texto: 'Solo 38.256 de 45.852 llegaron a destino (83.4% de entregabilidad), perdiendo 16.6% de oportunidades por problemas técnicos.' },
    ],
    causaRaiz: [
      'Falta de validación al momento de captura de leads (sin doble opt-in)',
      'Lista no depurada en >12 meses (acumulación de cuentas cerradas, typos, spam traps)',
      'Mezcla de base propia con listas compradas o scrapeadas (mala práctica que genera alto bounce)',
      'Falta de segmentación por engagement previo (envío masivo a contactos fríos >6 meses sin interacción)',
    ],
    impactoReal: [
      'Riesgo de blacklist: proveedores ISP (Gmail, Outlook, Yahoo) monitorean bounce rates; a partir del 5% comienzan a penalizar el sender score. A 16.6%, el dominio y la IP de envío están en riesgo ALTO de ser bloqueados o enviados automáticamente a carpeta de spam, afectando la entregabilidad de TODAS las campañas futuras, incluso "Inversiones".',
      'Pérdida de oportunidades: 7.596 emails que no llegaron representan prospectos potenciales sin contacto, erosionando el ROI de la campaña.',
      'Contaminación de reputación corporativa: el sender score dañado puede tardar meses en recuperarse, incluso después de limpiar la base.',
    ],
    accion: 'Suspender inmediatamente envíos masivos de "Branding" hasta ejecutar validación completa de la base con herramienta externa (ZeroBounce, BriteVerify), eliminar bounces hard, y segmentar por engagement antes de reactivar.',
  },
};

export const embleaAlertas = [
  { alerta: 'ALERTA 1: Bounce Rate catastrófico — "Envío General Diciembre 2025 - Branding"', metrica: 'Bounce Rate: 16.6% (7.596 rebotes de 45.852 enviados)', umbral: '<5% aceptable', riesgo: 'CRÍTICO: Riesgo inminente de blacklist del sender. Afecta también a campañas futuras efectivas como "Inversiones". Recuperación del sender score puede tardar 6-12 meses.' },
  { alerta: 'ALERTA 2: Bounce Rate alto — "No todos buscan lo mismo - Disparador"',           metrica: 'Bounce Rate: 11.1% (4.683 rebotes de 42.197 enviados)', umbral: '<5%',           riesgo: 'ALTO: Deterioro progresivo de entregabilidad. Pérdida de 4.683 oportunidades de contacto. Patrón confirma problema sistémico de higiene de base de datos.' },
  { alerta: 'ALERTA 3: Open Rate bajo — "Envío General Diciembre 2025 - Branding"',           metrica: 'Open Rate: 7.0% (vs benchmark 8-12%)',                   umbral: '8-12%',         riesgo: 'MEDIO: Solo 2.614 de 38.256 usuarios efectivos abren el email (93.2% de desperdicio). Asunto irrelevante, send time inadecuado o lista de baja calidad.' },
  { alerta: 'ALERTA 4: Unsubscribes elevados — "No todos buscan lo mismo - Disparador"',      metrica: '96 bajas de 42.197 enviados = 0.23%',                    umbral: '<0.5%',         riesgo: 'BAJO-MEDIO: Dentro del rango aceptable, pero 2.5x más bajas que "Branding". Señal de contenido no alineado con expectativas o exceso de frecuencia de envío.' },
];

export const crucesModulos = [
  {
    causa:       'Stock inmovilizado (RAUCH 2220, MURIAS 385, URUGUAY 563: 71 unidades, 100% avance, 0% venta) + Bounce rate 16.6% en Emblue "Branding"',
    mecanismo:   'Las obras con 100% avance y 0% venta no reciben tracción comercial efectiva porque las campañas masivas de email no llegan a los prospectos (16.6% bounce) ni generan apertura (7% OR). De 45.852 envíos, solo ~2.600 personas abrieron el mensaje.',
    impacto:     '71 unidades paralizadas sin conversión + 7.596 emails perdidos = doble fallo de comercialización (offline y digital). Costo de oportunidad doble: dinero invertido en obra sin vender + inversión en campaña sin resultado.',
    consecuencia: 'Las obras críticas permanecerán sin venta hasta 2027-2028 acumulando costo financiero, mientras los prospectos digitales nunca reciben la oferta. La reputación del sender se deteriorará hasta que incluso "Inversiones" caiga en spam.',
  },
  {
    causa:       'Backlog histórico (646 reservas, 541 días promedio) concentrado en JOSE (58%) + obras descalzadas sin cronograma comercial (ritmo_obra_pct = null)',
    mecanismo:   'Ausencia de gestión comercial estructurada genera pasivos paralelos: reservas antiguas bloquean unidades en sistema + obras finalizadas sin proyección de sell-out porque no existen KPIs de velocidad comercial.',
    impacto:     'Stock real disponible es menor al reportado (unidades "reservadas" por 903 días no son oportunidades activas). Imposibilidad de tomar decisiones de repricing sin baseline de velocidad histórica.',
    consecuencia: 'Falsa percepción de salud comercial que oculta inmovilización real. El directorio toma decisiones estratégicas basadas en datos contaminados. Obras viables no reciben inversión porque parecen tener "reservas activas".',
  },
  {
    causa:       'Conversión inmobiliarias desigual (Zelaschi 137.5% vs Particular 57.1%) + satisfacción alta pero 13.8% incumplimiento de plazos',
    mecanismo:   'Inmobiliarias con baja conversión generan reservas de baja calidad (compradores sin financiación, perfiles especulativos) que caen, mientras los retrasos en entrega erosionan la capacidad de cierre de todos los canales.',
    impacto:     'Volumen de reservas no se traduce en ventas efectivas. Compradores insatisfechos por retrasos generan recomendaciones negativas que afectan captación futura de todas las inmobiliarias.',
    consecuencia: 'Deterioro progresivo del pipeline: Zelaschi pierde motivación ante retrasos recurrentes, las ineficientes siguen generando reservas que no cierran, y el embudo se contamina con oportunidades fantasma.',
  },
  {
    causa:       'Top 3 motores de solvencia (AMERICA 347, MORENO 762, VIGNES 250) con sell-out 100% + CTOR >100% en todas las campañas Emblue',
    mecanismo:   'Las obras exitosas comparten sincronización obra-venta desde etapa temprana. El contenido de emails genera múltiples clics por usuario (CTOR 130-174%), demostrando interés real en la oferta cuando la segmentación es correcta.',
    impacto:     'El modelo comercial de CLAMACO SÍ funciona cuando se ejecuta correctamente: segmentación adecuada + contenido atractivo + sincronización temprana = conversión total.',
    consecuencia: 'Si no se documenta y replica el "playbook" de las 3 joyas + se optimizan campañas digitales, el éxito quedará como caso aislado. Obras futuras repetirán los errores de RAUCH 2220 en lugar de replicar AMERICA 347.',
  },
  {
    causa:       '8 obras frenadas >90 días + 0 reservas pendientes recientes pero 646 históricas',
    mecanismo:   'La gestión comercial reciente es eficiente (0% mora en 30 días) pero el backlog histórico indica que el problema de stock inmovilizado no es nuevo: obras llevan trimestres sin venta sin que nadie activara plan de choque.',
    impacto:     'Dualidad operativa: el equipo ejecuta bien en tiempo real pero arrastra pasivos no resueltos de gestiones anteriores. Falta de accountability histórica que nadie asumió.',
    consecuencia: 'Si no se sanea el backlog en 60 días, la "eficiencia reciente" será una ilusión. Las obras frenadas seguirán acumulando días sin venta y el problema se transferirá a la próxima gestión.',
  },
  {
    causa:       'Canal dominante: inmobiliarias 53.4% (encuesta) + Zelaschi lidera con 39.3% de boletos del período (11 de 28)',
    mecanismo:   'El modelo depende críticamente de la red de brokers externos. La venta directa o digital es marginal (8.2% vía publicidad). Alta concentración de riesgo en un único canal y un único operador.',
    impacto:     'Cualquier deterioro en relación con Zelaschi afecta directamente el 40% del flujo de oportunidades. La capacidad de control sobre el embudo es limitada y el modelo es frágil ante cambios externos.',
    consecuencia: 'Si Zelaschi reduce actividad (por mejores condiciones en competencia, conflicto contractual, o saturación de cartera), CLAMACO pierde 40% de capacidad de cierre sin alternativa inmediata.',
  },
  {
    causa:       '77% recompra declarada + 15.1% captación vía referidos + ausencia de programa formal de incentivos',
    mecanismo:   'Compradores satisfechos están generando recomendaciones orgánicas (canal de costo cero) pero no existe estructura para capitalizar ni medir ese flujo de forma sistemática.',
    impacto:     'Pérdida de oportunidad de fidelización: inversores que comprarían segunda o tercera unidad con incentivo no reciben oferta diferenciada. Canal orgánico activo sin capitalización.',
    consecuencia: 'LTV del inversor queda limitado a una sola compra. Costo de adquisición no se amortiza con recompras. La competencia con programas de referidos activos puede capturar los compradores satisfechos de CLAMACO.',
  },
  {
    causa:       'Incumplimiento de plazos 13.8% (encuesta: 12 de 87 compradores) + obras con brecha avance-venta >80pp',
    mecanismo:   'Los retrasos en entrega no son casos aislados: reflejan desincronización estructural entre cronogramas técnicos y comerciales, el mismo problema que explica el descalce obra-venta generalizado.',
    impacto:     'Compradores insatisfechos activan cláusulas de penalidad + erosión de reputación que reduce conversión de nuevas oportunidades + ciclo vicioso: obras atrasadas no venden, generando más presión financiera.',
    consecuencia: 'Si 13.8% en una muestra de 87 reporta retraso, el universo real puede ser >50 casos en cartera activa. Riesgo legal acumulado + daño permanente a marca CLAMACO que tomará años revertir.',
  },
];

export const lecturaAnaliticaCruces = 'El patrón dominante que emerge del análisis integrado es la desconexión entre capacidad técnica y ejecución comercial: CLAMACO sabe construir (89.1% de avance promedio, 0 obras atrasadas en cronograma), sabe cerrar ventas cuando el producto es correcto (AMERICA 347, MORENO 762, VIGNES 250 con sell-out 100%), y tiene compradores satisfechos que recomprarían (77%). Sin embargo, estas fortalezas no se traducen en resultados porque existen fallas sistémicas en la cadena de gestión comercial: obras finalizadas sin tracción coexisten con campañas de email que no llegan a destino (16.6% bounce); backlog histórico de 646 reservas contamina reportes sin que nadie active saneamiento; inmobiliarias clave (Zelaschi) concentran 40% de la conversión sin alternativas de canal desarrolladas; y retrasos en entrega (13.8%) erosionan la reputación que sostiene la recompra del 77%. La consecuencia no es un problema puntual: es riesgo de colapso estructural del modelo comercial si no se interviene en los próximos 90 días con acciones simultáneas en todos los frentes.';

export const riesgos = [
  { riesgo: 'Estrés de caja por descalce obra-venta (67.1pp, 1.983 unidades disponibles; solo 22.0% vendidas con 89.1% de avance promedio)', probabilidad: 'alta', impacto: 'alta', areaResponsable: 'Dirección Comercial + CFO', fuente: 'Estadísticas ventas x periodo: 89.1% avance vs 22.0% venta' },
  { riesgo: 'Blacklist del sender por bounce rate catastrófico en "Branding" (16.6%; 7.596 rebotes de 45.852 enviados; ISPs ya en zona de alerta)', probabilidad: 'alta', impacto: 'alta', areaResponsable: 'Marketing Digital + IT', fuente: 'Reporte Emblue: campaña 5697530 con 7.596 rebotes' },
  { riesgo: 'Colapso de pipeline por contaminación de backlog histórico (646 reservas, 541 días promedio, 99.4% sin motivo documentado; $30.697.982 inmovilizados)', probabilidad: 'media', impacto: 'media', areaResponsable: 'Administración Comercial + JOSE + CHRISTIAN', fuente: 'Ventas y reservas: 646 pendientes con 99.4% sin motivo documentado' },
  { riesgo: 'Pérdida de Zelaschi como inmobiliaria líder (concentra 39.3% de boletos del período: 11 de 28)', probabilidad: 'baja', impacto: 'alta', areaResponsable: 'Dirección Comercial + Gerencia de Canales', fuente: 'Auditoría canal Ventas y reservas: 11 boletos de 28 concentrados en Zelaschi' },
  { riesgo: 'Erosión de reputación por incumplimiento de plazos (13.8% en encuesta: 12 de 87 compradores reportan retraso efectivo)', probabilidad: 'media', impacto: 'alta', areaResponsable: 'Dirección de Obra + Dirección Comercial', fuente: 'Firma Boleto: 12 de 87 reportan retraso efectivo' },
  { riesgo: 'Inmovilización irreversible de obras críticas: RAUCH 2220 (48u), MURIAS 385 (19u), URUGUAY 563 (4u) = 71 unidades, 100% avance, 0% venta', probabilidad: 'alta', impacto: 'alta', areaResponsable: 'Dirección Comercial + CFO + Dirección General', fuente: 'Rankings ventas x periodo: 71 unidades con 100% avance, 0% venta, sin cronograma comercial' },
  { riesgo: 'Falta de trazabilidad para decisiones: ritmo_obra_pct = null en obras críticas y 642 de 646 reservas históricas sin motivo documentado', probabilidad: 'alta', impacto: 'media', areaResponsable: 'Administración Comercial + IT', fuente: 'Ventas x periodo (campo ritmo_obra_pct = null) + Ventas y reservas (642/646 sin motivo)' },
  { riesgo: 'Deterioro progresivo de conversión en canales ineficientes: Particular 57.1% y Di Paolo 66.7% vs ratio período de 121.7%', probabilidad: 'media', impacto: 'media', areaResponsable: 'Gerencia de Canales + Administración Comercial', fuente: 'Auditoría canal Ventas y reservas: ratios sub-óptimos en Particular y Di Paolo' },
];

export const planAccion = {
  h72: [
    {
      accion: 'Suspender envíos masivos de "Branding" y ejecutar validación completa de base con ZeroBounce/BriteVerify',
      porQue: 'Bounce rate 16.6% sitúa al sender en riesgo inminente de blacklist. Cada envío adicional daña más la reputación del dominio y afecta incluso campañas efectivas como "Inversiones".',
      areaLider: 'Marketing Digital',
      kpi: 'Bounce rate: 16.6% → <3% en 7 días',
      riesgoMitigado: 'Blacklist del sender',
    },
    {
      accion: 'Solicitar informe estado por estado a JOSE de sus 374 reservas pendientes históricas',
      porQue: 'JOSE concentra 58% del backlog total (548 días promedio, $18.798.878 inmovilizados). Sin definición de estado, estas reservas seguirán bloqueando unidades indefinidamente.',
      areaLider: 'Dirección Comercial',
      kpi: 'Reservas pendientes históricas JOSE: 374 → <100 en 30 días (objetivo: 73% de depuración)',
      riesgoMitigado: 'Contaminación de backlog histórico',
    },
    {
      accion: 'Activar repricing inmediato de RAUCH 2220 (48 unidades, 0% venta) con descuento 15-20% vs precio lista',
      porQue: 'Obra 100% finalizada sin tracción en >90 días. Capital totalmente inmovilizado sin proyección de conversión. Ventana de acción antes de que la inmovilización se vuelva irreversible.',
      areaLider: 'Dirección Comercial + CFO',
      kpi: 'Unidades vendidas RAUCH 2220: 0 → 10+ en 60 días',
      riesgoMitigado: 'Inmovilización irreversible de obra crítica',
    },
    {
      accion: 'Contactar a Zelaschi para ofrecer condiciones comerciales preferenciales y asegurar continuidad de volumen',
      porQue: 'Zelaschi genera 39.3% de boletos del período (11 de 28). Perder este canal implica colapso del 40% de la conversión sin alternativa inmediata.',
      areaLider: 'Gerencia de Canales',
      kpi: 'Volumen Zelaschi: mantener >10 boletos/mes',
      riesgoMitigado: 'Pérdida de inmobiliaria líder',
    },
    {
      accion: 'Implementar alertas automáticas en emBlue para bounce >5%, OR <8% y CTR con anomalías >2 desvíos estándar',
      porQue: 'Sin monitoreo en tiempo real, problemas críticos (como bounce 16.6%) pasan semanas sin detección. Cada día sin acción amplifica el daño al sender score.',
      areaLider: 'Marketing Digital + IT',
      kpi: 'Tiempo de detección de alertas: de semanas a <24 horas',
      riesgoMitigado: 'Blacklist del sender + desperdicio de inversión en campañas',
    },
  ],
  d30: [
    {
      accion: 'Ejecutar limpieza masiva de backlog histórico: dar de baja todas las reservas >180 días sin justificación documentada',
      porQue: '646 reservas pendientes con 541 días promedio contaminan reportes, bloquean unidades y falsean disponibilidad real. Sin saneamiento, el pasivo seguirá creciendo.',
      areaLider: 'Administración Comercial',
      kpi: 'Reservas pendientes históricas: 646 → <200 en 30 días',
      riesgoMitigado: 'Contaminación de backlog histórico',
    },
    {
      accion: 'Implementar tablero de velocidad comercial semanal para todas las obras con stock >10 unidades',
      porQue: 'Ausencia de KPIs de velocidad (ritmo_obra_pct = null en todas las obras críticas) imposibilita proyectar sell-out o tomar decisiones de repricing basadas en datos reales.',
      areaLider: 'Administración Comercial + IT',
      kpi: 'Obras con datos de velocidad actualizados: 0% → 100% en 30 días',
      riesgoMitigado: 'Falta de trazabilidad para decisiones',
    },
    {
      accion: 'Lanzar campaña intensiva de repricing para MURIAS 385 (19u, 0% venta) y URUGUAY 563 (4u, 0% venta)',
      porQue: 'Ambas obras comparten el patrón de RAUCH 2220: 100% avance, sin tracción, capital inmovilizado. Ventana de acción antes de que se consolide como stock muerto permanente.',
      areaLider: 'Dirección Comercial',
      kpi: 'MURIAS 385: 0 → 5+ unidades vendidas en 60 días; URUGUAY 563: 0 → 2+ en 60 días',
      riesgoMitigado: 'Inmovilización irreversible',
    },
    {
      accion: 'Auditoría exhaustiva de obras con entregas 2024-2025 para cuantificar universo real de retrasos',
      porQue: '13.8% de incumplimiento en muestra de 87 sugiere que el problema puede ser >50 casos en cartera activa. Sin diagnóstico, imposible activar plan de contingencia contractual.',
      areaLider: 'Dirección de Obra + Legal',
      kpi: 'Casos de retraso identificados y con plan de contingencia: 12 conocidos → universo real cuantificado',
      riesgoMitigado: 'Erosión de reputación + riesgo legal por incumplimiento',
    },
    {
      accion: 'Crear segmento de "contactos en riesgo" (sin apertura hace >90 días) en Emblue y aplicar campaña de re-engagement',
      porQue: 'Bounce rate alto (11.1% y 16.6%) indica listas con contactos inactivos. Re-engagement rescata prospectos antes de darlos de baja y mejora la higiene de base de datos.',
      areaLider: 'Marketing Digital',
      kpi: 'Bounce rate campaña "Disparador": 11.1% → <5% en 60 días',
      riesgoMitigado: 'Blacklist del sender',
    },
    {
      accion: 'Contactar a Particular y Di Paolo para diagnosticar causas de baja conversión (57.1% y 66.7%)',
      porQue: 'Inmobiliarias con volumen relevante de reservas pero conversión sub-óptima generan oportunidades de baja calidad que contaminan el embudo y desperdician esfuerzo comercial.',
      areaLider: 'Gerencia de Canales',
      kpi: 'Ratio conversión Particular: 57.1% → >90% en 60 días; Di Paolo: 66.7% → >90%',
      riesgoMitigado: 'Deterioro de conversión en canales ineficientes',
    },
    {
      accion: 'Diseñar protocolo estandarizado de entrega de llaves con checklist obligatorio y responsable exclusivo por obra',
      porQue: 'Compradores reportan demoras en entrega de llaves y falta de cordialidad. Proceso no estandarizado genera insatisfacción post-venta que afecta recompra y referencias.',
      areaLider: 'Dirección de Obra + Administración',
      kpi: 'Satisfacción post-entrega: objetivo >90% "Muy Buena" (hoy 70.1%)',
      riesgoMitigado: 'Erosión de reputación',
    },
  ],
  d90: [
    {
      accion: 'Documentar "playbook" de AMERICA 347, MORENO 762, VIGNES 250 y replicar en emprendimientos futuros',
      porQue: 'Las 3 joyas comparten patrón de sincronización obra-venta desde etapa temprana. Sin documentación, el éxito quedará como caso aislado sin escalabilidad. Obras futuras repetirán errores de RAUCH 2220.',
      areaLider: 'Dirección Comercial + Marketing',
      kpi: 'Obras nuevas con sell-out >80% en 12 meses: objetivo 50% del pipeline futuro',
      riesgoMitigado: 'Repetición de errores de RAUCH 2220',
    },
    {
      accion: 'Implementar programa formal de referidos con comisión o descuento por referido efectivo',
      porQue: '15.1% de captación vía contacto de referencia es canal orgánico activo sin capitalización formal. 77% de recompra declarada indica base dispuesta a recomendar con incentivo.',
      areaLider: 'Marketing + Administración Comercial',
      kpi: 'Captación vía referidos: 15.1% → 25% en 12 meses',
      riesgoMitigado: 'Pérdida de oportunidad de fidelización',
    },
    {
      accion: 'Crear esquema de descuentos escalonados para inversores recurrentes (5-10-15% por segunda, tercera y cuarta compra)',
      porQue: 'Compradores señalan ausencia de diferencial para recompra. Sin incentivo estructurado, inversores satisfechos (77%) no tienen motivo para elegir CLAMACO sobre la competencia en futuras operaciones.',
      areaLider: 'Dirección Comercial + CFO',
      kpi: 'LTV del inversor: incremento objetivo 30% mediante recompras en 12 meses',
      riesgoMitigado: 'Pérdida de oportunidad de fidelización',
    },
    {
      accion: 'Decisión estratégica sobre continuidad de obras con stock muerto crónico (RAUCH 2220, AMERICA 4158, PUEYRREDON 265)',
      porQue: 'Si repricing y relanzamiento no generan absorción en 60 días, estas obras requieren liquidación en bloque, venta a inversor institucional, o conversión a otro uso (alquiler, venta corporativa).',
      areaLider: 'Dirección General + CFO',
      kpi: 'Capital liberado de obras inmovilizadas: objetivo recuperar 50% del CAPEX mediante liquidación',
      riesgoMitigado: 'Inmovilización irreversible de activos',
    },
    {
      accion: 'Desarrollar canal de venta directa o digital para reducir dependencia de inmobiliarias',
      porQue: '53.4% de captación vía inmobiliarias genera concentración de riesgo. Venta directa es marginal (8.2%). Perder Zelaschi implica perder 40% de capacidad de cierre sin alternativa.',
      areaLider: 'Marketing Digital + Dirección Comercial',
      kpi: 'Captación vía venta directa: 8.2% → 20% en 12 meses',
      riesgoMitigado: 'Pérdida de inmobiliaria líder',
    },
    {
      accion: 'Implementar dashboard semanal de métricas comerciales con reunión de 15 min para revisar alertas críticas',
      porQue: 'Sin monitoreo continuo, problemas críticos (bounce 16.6%, backlog 646, descalce 67.1pp) pasan semanas sin detección ni acción correctiva. El costo de la inacción es exponencial.',
      areaLider: 'Dirección Comercial + IT',
      kpi: 'Alertas detectadas y resueltas: objetivo <7 días desde aparición hasta acción correctiva',
      riesgoMitigado: 'Falta de trazabilidad + escalada de problemas',
    },
    {
      accion: 'Auditoría legal de riesgo contractual por incumplimientos de plazo y activación de plan de contingencia',
      porQue: '13.8% de incumplimiento en muestra de 87 compradores sugiere universo real de 40-60 casos. Sin plan, cada caso puede escalar a litigio, penalidades o rescisión contractual.',
      areaLider: 'Legal + Dirección de Obra',
      kpi: 'Casos con plan de contingencia activo: 0% → 100% de los casos identificados en auditoría',
      riesgoMitigado: 'Erosión de reputación + riesgo legal',
    },
  ],
};
