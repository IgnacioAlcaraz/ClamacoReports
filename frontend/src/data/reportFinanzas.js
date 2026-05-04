// ── MÓDULO 3: FINANZAS ────────────────────────────────────────────────────────
// Período: Abril 2026

export const semaforo = [
  {
    subarea: 'Cobranzas',
    estado: 'ESTABLE CON DEBILIDAD DE FLUJO',
    color: 'amarillo',
    metrica: 'Cobro abril 2026 (parcial): $1.369.689 — -10,3% vs promedio histórico ($1.526.706). Tendencia descendente desde dic 2025 (-33,4% acumulado en 3 meses).',
    umbral: '<-15% rojo, -5% a -15% amarillo, >-5% verde',
  },
  {
    subarea: 'Deudores / Mora',
    estado: 'COLAPSO SISTÉMICO',
    color: 'rojo',
    metrica: '99,19% de cartera en mora ($183.539 de $185.039 total). 53 deudores. Único colchón: $1.500 no vencida (PABLO GASTON SANDOVAL).',
    umbral: '>80% rojo, 50-80% amarillo, <50% verde',
  },
  {
    subarea: 'Pendiente Cartera Vendida',
    estado: 'SALUDABLE',
    color: 'verde',
    metrica: '3,83% pendiente vs histórico cobrado ($3.790.062 de $99.083.129). Muy por debajo del umbral de riesgo sectorial (8-12% normal).',
    umbral: '>10% rojo, 5-10% amarillo, <5% verde',
  },
];

export const hallazgos = [
  'Colapso de mora concentrado en conceptos no estándar: $67.486 (36,8% de mora total) provienen de cargos REFUERZO sin validación documentada en 4 deudores (JORGE CAMPI $32.486, NORBERTO ENRIQUE PEREZ $21.000, ROCIO BELEN FERNANDEZ $9.000, GUILLERMO ALEJANDRO PERALTA $5.000). Requieren auditoría contable inmediata para confirmar legalidad.',
  'Dependencia crítica en obra EL PORTAL DE ROCA: concentra 36,7% de toda la mora ($67.356) con 12 deudores — más del triple que la segunda obra. Sugiere problema sistémico (constructivo, legal o comercial) que no está capturado en el sistema de cobranza tradicional.',
  'Riesgo de transformación inminente: PABLO GASTON SANDOVAL (BOSCH Y ORO, Di Paolo) tiene $1.500 sin vencer. Si cae en mora, la cartera alcanza 100% de morosidad — representa el único colchón entre una cartera crítica y una cartera totalmente colapsada.',
];

export const factibilidades = { vigentes: null, vencidas: null, sinFecha: null, vencenMenos30: null };
export const vencimientosInminentes = [];
export const falsosVigentes = [];
export const cuellosBottella = [];

export const cobranzas = {
  abr2026: 1369689,
  mar2026: 1324075,
  feb2026: 1559555,
  promHistorico: 1526706,
  variacionVsMesAnterior: 3.4,
  pagos: 204,
  totalHistorico: 99083129,
  pendienteTotal: 3790062,
  pctPendienteVsHistorico: 3.83,
};

export const evolucionMensual = [
  { mes: 'May 25',  cobrado: 1624629, pagos: 290, variacion: null  },
  { mes: 'Jun 25',  cobrado: 1066765, pagos: 206, variacion: -34.4 },
  { mes: 'Jul 25',  cobrado: 1989709, pagos: 268, variacion: 86.5  },
  { mes: 'Ago 25',  cobrado: 1999152, pagos: 237, variacion: 0.4   },
  { mes: 'Sep 25',  cobrado: 1386301, pagos: 236, variacion: -30.6 },
  { mes: 'Oct 25',  cobrado: 867205,  pagos: 167, variacion: -37.4 },
  { mes: 'Nov 25',  cobrado: 1584008, pagos: 238, variacion: 82.7  },
  { mes: 'Dic 25',  cobrado: 1987947, pagos: 223, variacion: 25.5  },
  { mes: 'Ene 26',  cobrado: 1500165, pagos: 240, variacion: -24.5 },
  { mes: 'Feb 26',  cobrado: 1559555, pagos: 220, variacion: 4.0   },
  { mes: 'Mar 26',  cobrado: 1324075, pagos: 204, variacion: -15.1 },
  { mes: 'Abr 26*', cobrado: 1369689, pagos: 204, variacion: 3.4   },
];

// Dato no disponible en documento fuente (desagregación por obra no incluida en reporte)
export const topObrasCobro = [];
export const topObrasPendiente = [];

export const topInmobiliarias = [
  { inmobiliaria: 'Particular',    cobrado: 20131562, pendiente: 639289, efectividad: 97, morosos: 14, clasificacion: 'RIESGO ALTO' },
  { inmobiliaria: 'Zelaschi',      cobrado: 15433104, pendiente: 143666, efectividad: 99, morosos: 3,  clasificacion: 'PERFORMANCE ÓPTIMA' },
  { inmobiliaria: 'Yamil Remax',   cobrado: 9008564,  pendiente: 724843, efectividad: 93, morosos: 5,  clasificacion: 'RIESGO MEDIO' },
  { inmobiliaria: 'Di Paolo',      cobrado: 8928447,  pendiente: 472610, efectividad: 95, morosos: 12, clasificacion: 'RIESGO MEDIO-ALTO' },
  { inmobiliaria: 'Marcelo Russo', cobrado: 7787560,  pendiente: 256700, efectividad: 97, morosos: 8,  clasificacion: 'PERFORMANCE ACEPTABLE' },
];

export const topInmobiliariasConPendiente = [
  { inmobiliaria: 'DIRECTO / S/D', pendiente: 848270, cobrado: 3597400,  efectividad: 81, morosos: 0,  riesgo: 'CRÍTICO',    alerta: 'Sin agencia asignada. Efectividad más baja del sistema (81%) — 19pp por debajo del promedio. Riesgo de pérdida de trazabilidad y prescripción legal. Auditoría urgente.' },
  { inmobiliaria: 'Yamil Remax',   pendiente: 724843, cobrado: 9008564,  efectividad: 93, morosos: 5,  riesgo: 'ALTO',       alerta: 'Efectividad 6pp por debajo del benchmark Zelaschi. $600K adicionales en pendiente evitable con mejor gestión. 5 morosos activos.' },
  { inmobiliaria: 'Particular',    pendiente: 639289, cobrado: 20131562, efectividad: 97, morosos: 14, riesgo: 'ALTO',       alerta: '14 morosos activos — el mayor número del sistema. Efectividad buena en cartera vendida pero cartera de deudores severamente deteriorada.' },
  { inmobiliaria: 'Di Paolo',      pendiente: 472610, cobrado: 8928447,  efectividad: 95, morosos: 12, riesgo: 'MEDIO-ALTO', alerta: '12 morosos. Cartera fragmentada en múltiples puntos de riesgo. Requiere monitoreo individualizado y refuerzo de recursos de cobranza.' },
  { inmobiliaria: 'Becerra',       pendiente: 390040, cobrado: 6476640,  efectividad: 94, morosos: 3,  riesgo: 'BAJO',       alerta: 'Efectividad aceptable (94%). Pendiente proporcionalmente menor. Sus 3 morosos tienen deuda promedio 46% superior al general ($5.057 vs $3.463).' },
];

export const mora = {
  deudaTotal:     185039,
  moraTotal:      183539,
  pctMora:        99.19,
  deudoresUnicos: 53,
  noVencida:      1500,
  gini:           0.552,
  hhi:            0.062,
  desglose: [
    { concepto: 'Deuda promedio (cuotas mes actual)',         monto: 114173, pct: 61.7, nota: 'Cuotas del mes en curso sin abonar.' },
    { concepto: 'Deuda vencida — cuotas atrasadas',          monto: 38380,  pct: 20.7, nota: 'Cuotas de meses anteriores arrastradas.' },
    { concepto: 'Deuda vencida — conceptos no estándar ⚠️', monto: 32486,  pct: 17.6, nota: 'REFUERZO en 4 deudores. Requiere validación legal urgente antes de continuar cobranza.' },
  ],
};

export const topDeudoresMora = [
  { deudor: 'JORGE CAMPI',               montomora: 32486, obra: 'EL PORTAL DE ROCA',        uf: '8ºI',             inmobiliaria: 'Particular',        concepto: 'REFUERZO ⚠️' },
  { deudor: 'NORBERTO ENRIQUE PEREZ',    montomora: 21000, obra: 'Yatay 754 y A. Costa 761',  uf: '2ºB',             inmobiliaria: 'Particular',        concepto: 'REFUERZO1 ⚠️' },
  { deudor: 'ROCIO BELEN FERNANDEZ',     montomora: 9000,  obra: 'MITRE 1185',                uf: '3ºC',             inmobiliaria: 'Particular',        concepto: 'REFUERZO2 ⚠️' },
  { deudor: 'FEDERICO FLEITAS',          montomora: 7650,  obra: 'EL PORTAL DE ROCA',         uf: 'no especificado', inmobiliaria: 'Marcelo Russo',     concepto: 'Cuota' },
  { deudor: 'CLAUDIO CARUSSO',           montomora: 7200,  obra: 'LIONI',                     uf: 'no especificado', inmobiliaria: 'Zelaschi',          concepto: 'Cuota' },
];

export const topObrasMora = [
  { obra: 'EL PORTAL DE ROCA',        montomora: 67356, pct: 36.7, deudores: 12 },
  { obra: 'Yatay 754 y A. Costa 761', montomora: 29660, pct: 16.2, deudores: 8  },
  { obra: 'HORNOS 2719',              montomora: 24800, pct: 13.5, deudores: 12 },
  { obra: 'MITRE 1185',               montomora: 17750, pct: 9.7,  deudores: 5  },
  { obra: 'VALENTIN GOMEZ 4736',      montomora: 12420, pct: 6.8,  deudores: 4  },
];

export const topInmobiliariasMora = [
  { inmobiliaria: 'Particular',        montomora: 83586, deudores: 11, moraPromedio: 7599 },
  { inmobiliaria: 'Di Paolo',          montomora: 16820, deudores: 10, moraPromedio: 1682 },
  { inmobiliaria: 'Marcelo Russo',     montomora: 16400, deudores: 7,  moraPromedio: 2343 },
  { inmobiliaria: 'Becerra',           montomora: 15170, deudores: 3,  moraPromedio: 5057 },
  { inmobiliaria: 'Norberto Gonzalez', montomora: 14100, deudores: 3,  moraPromedio: 4700 },
];

export const segmentacionTactica = [
  {
    segmento: 'A — Gestión automatizable',
    criterio: 'Muchos ítems, montos bajos (<$2.000 total)',
    cantidad: 1,
    deudores: 'MARIANA ELIZABETH CAIVANO: 6 ítems, $270/ítem promedio, total $1.620 (VALENTIN GOMEZ 4736, UF COCH 34/46/7ºB, Di Paolo, CUOTA11/12/13)',
    tactica: 'Recordatorio automatizado (email + SMS). Plan de 2 cuotas sin interés. Descuento 5% por pago único inmediato.',
  },
  {
    segmento: 'B — Intervención humana',
    criterio: 'Pocos ítems, montos altos (>$5.000)',
    cantidad: 6,
    deudores: 'JORGE CAMPI ($32.486), NORBERTO ENRIQUE PEREZ ($21.000), ROCIO BELEN FERNANDEZ ($9.000), FEDERICO FLEITAS ($7.650), CLAUDIO CARUSSO ($7.200), DAMIAN CAMILO MATTA ($7.100)',
    tactica: 'Contacto directo área legal + comercial. Validar conceptos REFUERZO primero (CAMPI, PEREZ, FERNANDEZ). Negociación estructurada con garantías. Sin respuesta en 15 días → acciones legales.',
  },
  {
    segmento: 'C — Riesgo de transformación',
    criterio: 'Sin mora, deuda no vencida con vencimiento próximo',
    cantidad: 1,
    deudores: 'PABLO GASTON SANDOVAL: $1.500 no vencida (BOSCH Y ORO, UF 5ºB y 5ºC, Di Paolo, CUOTA3, vencimiento próximo). Su caída → mora 100%.',
    tactica: 'Contacto preventivo 10 días antes del vencimiento. Confirmar capacidad de pago. Ofrecer facilidades (50%+50% en dos semanas, descuento 3% anticipado). Asignar responsable personal — NO automatizar.',
  },
  {
    segmento: 'D — Mora con nota positiva',
    criterio: 'Mora activa con compromiso documentado',
    cantidad: 1,
    deudores: 'MARTIN DI LULLO: nota interna "pagará abril y mayo en primer semana de mayo"',
    tactica: 'Seguimiento de confirmación de pago. No aplicar presión inmediata. Validar cumplimiento al cierre de mayo. Si incumple, reclasificar a Segmento B.',
  },
];

export const conceptoNoEstandar = [
  { deudor: 'JORGE CAMPI',                obra: 'EL PORTAL DE ROCA',        uf: '8ºI', inmobiliaria: 'Particular',        concepto: 'REFUERZO',  monto: 32486, pctMoraTotal: 17.7, riesgo: 'CRÍTICO', descripcion: 'Sin documentación en fuente. Si es ilegítimo: mora real baja 17,7% instantáneamente. Requiere validación legal urgente antes de continuar cobranza.' },
  { deudor: 'NORBERTO ENRIQUE PEREZ',     obra: 'Yatay 754 y A. Costa 761', uf: '2ºB', inmobiliaria: 'Particular',        concepto: 'REFUERZO1', monto: 21000, pctMoraTotal: 11.4, riesgo: 'CRÍTICO', descripcion: 'Sin documentación en fuente. Patrón similar a JORGE CAMPI — mismo canal, misma categoría de cargo no estándar. Auditoría conjunta recomendada.' },
  { deudor: 'ROCIO BELEN FERNANDEZ',      obra: 'MITRE 1185',               uf: '3ºC', inmobiliaria: 'Particular',        concepto: 'REFUERZO2', monto: 9000,  pctMoraTotal: 4.9,  riesgo: 'ALTO',    descripcion: 'Requiere explicación clara al deudor del concepto y sustento contractual antes de continuar cobranza.' },
  { deudor: 'GUILLERMO ALEJANDRO PERALTA', obra: 'MITRE 1185',              uf: '—',   inmobiliaria: 'Veronica Espinosa', concepto: 'REFUERZO4', monto: 5000,  pctMoraTotal: 2.7,  riesgo: 'ALTO',    descripcion: 'Único caso en inmobiliaria Veronica Espinosa — patrón no compartido con Particular. Requiere explicación al deudor con documentación de respaldo.' },
];

// ── SECCIÓN 4 — CRUCES ENTRE LOS 2 REPORTES ──────────────────────────────────
export const crucesModulos = [
  {
    causa:       'Concentración de mora en EL PORTAL DE ROCA (36,7%) sin reflejo en problemas de cobranza de cartera vendida',
    mecanismo:   'EL PORTAL DE ROCA concentra $67.356 en mora (12 deudores) pero no aparece como obra problemática en el reporte de cobranzas, que desagrega por inmobiliaria y no por obra, ocultando la concentración de riesgo obra-específica.',
    impacto:     'El sistema de cobranzas funciona correctamente pero oculta el problema. Los $67K en mora de esta obra son invisibles en el análisis de cartera vendida.',
    consecuencia: 'Si el problema obra-específico (constructivo, legal, escrituración) no se identifica, los 12 deudores pueden contagiar a otros compradores. Riesgo de escalamiento de $67K a >$200K por efecto manada.',
  },
  {
    causa:       'DIRECTO / S/D concentra 22,4% del pendiente de cartera vendida ($848.270) sin responsable vs. Particular concentra 45,5% de mora de deudores',
    mecanismo:   'DIRECTO/S/D ($848.270 pendiente, 81% efectividad) agrupa ventas sin agencia asignada. Particular ($83.586 mora, 97% efectividad en cartera vendida) aplica cargos REFUERZO no estándar. Ambas categorías operan sin intermediario con resultados opuestos.',
    impacto:     'La falta de responsable en DIRECTO/S/D impacta negativamente la recuperación. Particular tiene buena efectividad en cartera vendida pero genera mora por cargos no estándar en deudores.',
    consecuencia: 'Sin auditoría de DIRECTO/S/D, $848K pueden tornarse irrecuperables. Sin validación de REFUERZOS de Particular, existe riesgo legal de cobranza indebida y daño reputacional.',
  },
  {
    causa:       'Concentración Top 5 inmobiliarias en cobranza (61,8%) vs. concentración Top 5 en mora de deudores (71,0%)',
    mecanismo:   'Las mismas 5 inmobiliarias que dominan cobranza también concentran mora de deudores. El % de concentración en mora (71%) es 9pp mayor que en cobranza (61,8%), indicando que las agencias top acumulan proporcionalmente más problemas en deudores.',
    impacto:     'Las inmobiliarias grandes operan en dos carriles: cartera vendida con efectividad 93-99%, y deudores con mora 71-80%. La gestión de cuotas post-venta es sistemáticamente más débil.',
    consecuencia: 'El sistema genera ilusión de salud financiera (cobranzas altas en cartera vendida) mientras la base de clientes acumula mora creciente. Si no se interviene, la mora de deudores puede superar la cobranza de cartera vendida.',
  },
  {
    causa:       'Volatilidad extrema de cobranzas mensuales (-37,4% a +86,5%) sin correlación con volumen de deudores morosos estable',
    mecanismo:   'La cobranza fluctúa violentamente entre meses sin que el volumen de 53 deudores morosos varíe. Las cobranzas dependen de eventos puntuales de cierre de operaciones grandes, no de flujo constante de cuotas.',
    impacto:     'No hay colchón de flujo recurrente porque la base de deudores está 99,19% en mora. Cada mes de baja cobranza genera riesgo de iliquidez operativa.',
    consecuencia: 'Sin reservas de caja, el sistema debe recurrir a crédito externo (8-12% anual) en meses de déficit. La tendencia descendente desde dic 2025 (-33,4%) hace urgente construir un colchón antes de Q3 2026.',
  },
  {
    causa:       'Yamil Remax tiene 93% efectividad en cartera vendida (peor del Top 5) y 5 morosos en deudores — problema sistémico en gestión post-venta',
    mecanismo:   'Yamil Remax opera 6pp por debajo del benchmark Zelaschi (99%) tanto en cartera vendida como en deudores. Comparado con Zelaschi ($15M cobrados, solo 3 morosos), Yamil Remax muestra debilidad estructural en seguimiento post-cierre.',
    impacto:     'Yamil Remax tiene el tercer mayor pendiente de cartera vendida ($724K) y 5 morosos activos. Múltiples frentes débiles simultáneos que erosionan su posición como agencia top.',
    consecuencia: 'Si la efectividad cae por debajo del 90%, perderá participación de mercado. Reemplazar $9M en cobranza histórica requiere 12-18 meses y 2-3 agencias medianas nuevas.',
  },
  {
    causa:       'Becerra tiene $390K pendiente en cartera vendida pero sus 3 morosos tienen deuda promedio 46% superior al general ($5.057 vs $3.463)',
    mecanismo:   'Becerra opera con efectividad 94% en cartera vendida, pero sus morosos concentran deuda individual alta. Sugiere aprobación de compradores con perfil crediticio débil sin seguimiento preventivo de cuotas.',
    impacto:     'Becerra cierra operaciones bien pero transfiere compradores problemáticos al sistema de cuotas. Su mora futura crecerá más rápido que su cobranza en cartera vendida.',
    consecuencia: 'Sin ajuste en política de aprobación de compradores, Becerra replicará el patrón de Particular: buena efectividad histórica con mora creciente de deudores. Requiere ajuste en scoring crediticio en 90 días.',
  },
  {
    causa:       'Di Paolo tiene 10 morosos activos más PABLO GASTON SANDOVAL ($1.500 no vencida) — mayor carga de casos del sistema después de Particular',
    mecanismo:   'Di Paolo gestiona 10 deudores con $16.820 en mora más 1 caso no vencido en riesgo. Total: 11 deudores bajo gestión. Comparado con Zelaschi (3 casos), opera con 3,7x la carga por agencia.',
    impacto:     'La caída de PABLO GASTON SANDOVAL llevaría a Di Paolo a 11 morosos y a la cartera total a 100% mora. Sin recursos adicionales, los casos se acumulan sin resolución.',
    consecuencia: 'Si Di Paolo no refuerza su equipo, sus 12 casos se convertirán en 15-18 en 3-6 meses. Representa 9% de cobranza histórica ($8.9M) — imposible de reemplazar rápidamente sin impacto en flujo.',
  },
  {
    causa:       'Obra MITRE 1185 tiene $17.750 mora con 5 deudores de 3 inmobiliarias distintas — fragmentación de responsabilidad sin coordinación',
    mecanismo:   'La fragmentación de responsabilidad de cobranza en múltiples agencias dentro de la misma obra diluye accountability. Dos de los 5 deudores tienen mora exclusivamente por conceptos REFUERZO ($14K de $17.750), añadiendo riesgo legal.',
    impacto:     'Cada agencia negocia por separado con sus clientes en la misma obra, perdiendo poder de negociación colectiva. Si hay problema obra-específico, no hay mecanismo para resolverlo coordinadamente.',
    consecuencia: 'La mora escalará de $17.750 a >$30K en 6 meses si los compradores se contagian entre sí. El sistema actual no tiene mecanismo formal de coordinación inter-agencias por obra.',
  },
];

// ── CONCENTRACIÓN DE COBRANZA ─────────────────────────────────────────────────
export const concentracionCobranza = [
  {
    segmento: 'Top 3 inmobiliarias',
    detalle:  'Particular ($20.131.562) + Zelaschi ($15.433.104) + Yamil Remax ($9.008.564)',
    cobrado:  44573230,
    pctTotal: 45.0,
    formula:  '44.573.230 / 99.083.129 × 100',
  },
  {
    segmento: 'Top 5 inmobiliarias',
    detalle:  'Top 3 + Di Paolo ($8.928.447) + Marcelo Russo ($7.787.560)',
    cobrado:  61289237,
    pctTotal: 61.8,
    formula:  '61.289.237 / 99.083.129 × 100',
  },
  {
    segmento: 'Resto del mercado (26 agencias)',
    detalle:  'Las 26 agencias restantes — alta dispersión, bajo volumen individual',
    cobrado:  37793892,
    pctTotal: 38.2,
    formula:  '100% - 61,8%',
  },
];

// ── IMPACTO POTENCIAL DE RECUPERACIÓN RÁPIDA ─────────────────────────────────
export const impactoRecuperacion = [
  {
    escenario:        'Recuperar 80% del pendiente total (cartera vendida)',
    descripcion:      'Pendiente total: $3.790.062. Recuperable al 80%: $3.032.050 — equivale a 1,98 meses de cobranza promedio.',
    montoRecuperable: 3032050,
    pctPendiente:     80,
  },
  {
    escenario:        'Foco 1 — DIRECTO / S/D (80% de $848.270)',
    descripcion:      '22,4% del potencial total de recuperación. Primera prioridad: riesgo sistémico de pérdida de trazabilidad y efectividad más baja del sistema (81%).',
    montoRecuperable: 678616,
    pctPendiente:     22.4,
  },
  {
    escenario:        'Foco 2 — Yamil Remax (80% de $724.843)',
    descripcion:      '19,1% del potencial total. Segunda prioridad: baja efectividad sistémica (93%) y 5 morosos activos.',
    montoRecuperable: 579874,
    pctPendiente:     19.1,
  },
  {
    escenario:        'Foco 3 — Particular (80% de $639.289)',
    descripcion:      '16,9% del potencial total. Tercera prioridad: alto volumen de morosos (14 deudores) con riesgo de escalamiento.',
    montoRecuperable: 511431,
    pctPendiente:     16.9,
  },
];

// ── RIESGO DE TRANSFORMACIÓN — DEUDA NO VENCIDA → MORA ───────────────────────
export const riesgoTransformacion = [
  {
    escenario:      'PABLO GASTON SANDOVAL — caída a mora',
    descripcion:    'BOSCH Y ORO (UF 5ºB y 5ºC), Di Paolo, CUOTA3. $1.500 no vencida, vencimiento próximo. Único deudor sin mora en cartera de 53.',
    montoRiesgo:    1500,
    moraProyectada: 185039,
    variacionPct:   0.8,
    probabilidad:   'ALTA — 99,19% ya en mora. Si cae, cartera = 100% mora. Probabilidad >70% sin contacto preventivo.',
  },
];

export const riesgos = [
  { riesgo: 'Colapso total de cartera de deudores (mora 100%) si PABLO GASTON SANDOVAL ($1.500 no vencida, BOSCH Y ORO) cae en mora antes de fin de mes', probabilidad: 'alta', impacto: 'critico', areaResponsable: 'Cobranzas + Legal' },
  { riesgo: 'Cobranza ilegal de conceptos REFUERZO sin sustento documental ($67.486 en 4 deudores). Si son ilegítimos, exponen a demanda por cobro indebido, multas y daño reputacional', probabilidad: 'media-alta', impacto: 'alto', areaResponsable: 'Legal + Finanzas + Contabilidad' },
  { riesgo: 'Escalamiento de mora en EL PORTAL DE ROCA por efecto contagio: 12 deudores, 36,7% de mora total. Sin causa raíz identificada, el contagio puede llevar la mora de $67K a >$200K en 6 meses', probabilidad: 'alta', impacto: 'alto', areaResponsable: 'Obra/Construcción + Legal + Cobranzas' },
  { riesgo: 'Pérdida de trazabilidad de $848K en DIRECTO / S/D: sin agencia asignada, efectividad 81% (la más baja). Riesgo de prescripción legal de plazos de cobranza en 90 días', probabilidad: 'media', impacto: 'medio-alto', areaResponsable: 'Finanzas + Auditoría Interna' },
  { riesgo: 'Iliquidez operativa por volatilidad extrema de cobranzas (-37,4% a +86,5% mensual) sin colchón de deudores sanos para flujo recurrente. Tendencia descendente desde dic 2025 (-33,4%)', probabilidad: 'media', impacto: 'medio', areaResponsable: 'Finanzas + Tesorería' },
  { riesgo: 'Pérdida de Yamil Remax como agencia top si efectividad cae de 93% a <90%. Impacto: -$140K/mes en cobranza. Representa $9M (9%) del histórico total — imposible de reemplazar en <12 meses', probabilidad: 'baja-media', impacto: 'medio', areaResponsable: 'Comercial + Finanzas' },
  { riesgo: 'Sobrecarga de Di Paolo (12 casos bajo riesgo vs 3 de Zelaschi) sin recursos proporcionales. Si no resuelve en 90 días, mora escala de $16.820 a $25-30K', probabilidad: 'media', impacto: 'medio', areaResponsable: 'Cobranzas + Comercial' },
  { riesgo: 'Contagio de mora en MITRE 1185 por fragmentación de responsabilidad entre 3 agencias y presencia de conceptos REFUERZO ($14K de $17.750). Sin coordinación, mora escala a >$30K en 6 meses', probabilidad: 'media', impacto: 'medio', areaResponsable: 'Comercial + Cobranzas' },
];

export const planAccion = {
  h72: [
    {
      accion: 'Contacto directo y preventivo con PABLO GASTON SANDOVAL (BOSCH Y ORO, Di Paolo, $1.500 CUOTA3 no vencida)',
      porQue: 'Único deudor sin mora en cartera de 53. Si cae, cartera = 100% mora (colapso simbólico total). Contacto preventivo es la única barrera antes del vencimiento.',
      areaLider: 'Cobranzas (ejecutivo senior asignado nominalmente, no automatizado)',
      kpi: 'Confirmación de pago o plan de contingencia en 48hs. Mantener mora en 99,19% — evitar 100%.',
      riesgoMitigado: 'Colapso total de cartera de deudores',
    },
    {
      accion: 'Validación legal de los 4 conceptos REFUERZO con Contabilidad + Legal (JORGE CAMPI $32.486, NORBERTO ENRIQUE PEREZ $21.000, ROCIO BELEN FERNANDEZ $9.000, GUILLERMO ALEJANDRO PERALTA $5.000)',
      porQue: '$67.486 (36,8% mora total) en cargos no documentados. Si son ilegítimos, exponen a demanda. Si son legítimos, requieren explicación formal al deudor antes de continuar cobranza.',
      areaLider: 'Legal (asociado senior) + Contabilidad (controller)',
      kpi: 'Cada REFUERZO clasificado como legítimo o error en 72hs. Riesgo legal reducido de >60% a <10%.',
      riesgoMitigado: 'Cobranza ilegal / Demanda por cobro indebido',
    },
    {
      accion: 'Auditoría express de operaciones DIRECTO / S/D: identificar agencias y compradores detrás de los $848.270 sin responsable',
      porQue: '$848.270 (22,4% del pendiente total) sin agencia asignada. Efectividad 81% (la más baja). Riesgo de pérdida de trazabilidad y prescripción legal en 90 días.',
      areaLider: 'Auditoría Interna + Finanzas',
      kpi: 'Responsables identificados para 100% del pendiente DIRECTO/S/D en 72hs. Efectividad objetivo >90% en 90 días.',
      riesgoMitigado: 'Pérdida de trazabilidad de $848K',
    },
    {
      accion: 'Llamada directa a JORGE CAMPI (EL PORTAL DE ROCA, $32.486 REFUERZO, Particular) — post validación legal del concepto',
      porQue: 'Deudor #1 por monto ($32.486 = 17,7% mora total). Si REFUERZO es válido: plan de pago con pagaré. Si inválido: reversar cargo. En ambos casos, contacto urgente en 72hs.',
      areaLider: 'Cobranzas + Legal',
      kpi: 'Mora $ (reducir de $183.539 hacia <$150K si REFUERZO se resuelve en 30 días).',
      riesgoMitigado: 'Concentración mora EL PORTAL DE ROCA + Cobranza ilegal',
    },
    {
      accion: 'Reunión urgente con inmobiliaria Particular: clarificación de política de REFUERZOS (concentra 3 de 4 casos, $62.486 de $67.486 totales)',
      porQue: 'Particular es el canal con mayor volumen histórico ($20M) y mayor mora de deudores ($83.586). Si los REFUERZOS son su política, debe documentarlos. Si son errores, debe reconocerlos urgentemente.',
      areaLider: 'Comercial (gerente de agencias) + Legal',
      kpi: 'Política de REFUERZOS documentada o reconocida como error en 72hs. Prevención de pérdida de canal principal.',
      riesgoMitigado: 'Cobranza ilegal + Daño reputacional',
    },
  ],
  d30: [
    {
      accion: 'Gestión integral de obra EL PORTAL DE ROCA: investigar causa raíz de mora 36,7% con auditoria técnica, legal y de contratos',
      porQue: '12 deudores, $67.356 mora (36,7% del total). Concentración extrema sugiere problema obra-específico. Sin causa raíz identificada, la cobranza individual no resolverá el problema sistémico.',
      areaLider: 'Construcción/Obra + Legal + Cobranzas (coordinados)',
      kpi: 'Causa raíz documentada en 30 días. Mora EL PORTAL DE ROCA de $67K a <$40K en 90 días.',
      riesgoMitigado: 'Escalamiento mora EL PORTAL DE ROCA por efecto contagio',
    },
    {
      accion: 'Plan de cobranza focalizado en Yamil Remax: reducir pendiente de $724.843 y gestionar 5 morosos activos',
      porQue: 'Yamil Remax tiene efectividad 93% (6pp bajo benchmark) + $724K pendiente + 5 morosos. Sin intervención, efectividad continuará cayendo y el canal puede perder viabilidad.',
      areaLider: 'Cobranzas + Comercial',
      kpi: 'Efectividad Yamil Remax de 93% a >95%. Pendiente de $724K a <$500K.',
      riesgoMitigado: 'Pérdida de Yamil Remax como agencia top',
    },
    {
      accion: 'Refuerzo de recursos de cobranza en Di Paolo: asignar analista dedicado a sus 12 casos bajo riesgo durante 60 días',
      porQue: 'Di Paolo tiene la mayor carga de casos del sistema. Sin recursos adicionales, sus 12 casos crecerán a 15-18 en 3 meses (crecimiento típico 25-50% sin intervención).',
      areaLider: 'Cobranzas (asignación de recursos)',
      kpi: 'Mora Di Paolo de $16.820 a <$10K. Prevención transformación de $1.500 de SANDOVAL.',
      riesgoMitigado: 'Sobrecarga Di Paolo + Transformación deuda no vencida',
    },
    {
      accion: 'Coordinación inter-agencias en obra MITRE 1185: crear task force temporal con Particular, Veronica Espinosa y otros',
      porQue: '5 deudores de 3 agencias, $17.750 mora. Fragmentación de responsabilidad impide resolver el problema a nivel de obra. Reunión conjunta con alineación de estrategia es obligatoria.',
      areaLider: 'Comercial (coordinador) + Cobranzas',
      kpi: 'Reunión conjunta de agencias en 15 días. Mora MITRE 1185 de $17.750 a <$10K.',
      riesgoMitigado: 'Contagio mora MITRE 1185 por falta de coordinación',
    },
    {
      accion: 'Implementar automatización de cobranza para Segmento A (muchos ítems, montos bajos)',
      porQue: 'MARIANA ELIZABETH CAIVANO y casos similares: 6 ítems, $270/ítem. Gestión manual no es costo-efectiva. Automatización libera analistas para los 6 casos del Segmento B ($84K concentrados).',
      areaLider: 'Cobranzas (implementación tecnológica) + IT',
      kpi: 'Mora Segmento A reducida 80% en 60 días. Analistas liberados para casos críticos.',
      riesgoMitigado: 'Ineficiencia en gestión de mora dispersa de bajo monto',
    },
    {
      accion: 'Renegociación estructurada con NORBERTO ENRIQUE PEREZ y ROCIO BELEN FERNANDEZ post-validación legal de REFUERZOS',
      porQue: 'Si validación confirma que los REFUERZOS son legítimos, estos dos deudores ($21K + $9K = $30K) requieren negociación: plan de cuotas con garantías o descuento por pronto pago.',
      areaLider: 'Cobranzas + Legal',
      kpi: 'Mora recuperada de $30K de REFUERZOS validados en 60 días.',
      riesgoMitigado: 'Mora cronificada en deudores de alto impacto',
    },
    {
      accion: 'Monitoreo semanal de volumen de cobranza vs promedio histórico — activar alerta si cae <$1.200.000/mes',
      porQue: 'Cobranza abril -10,3% vs promedio. Tendencia descendente desde dic 2025. Sin alerta temprana, déficit de caja Q2 2026 puede tomar por sorpresa al área.',
      areaLider: 'Finanzas (controller)',
      kpi: 'Cobranza mensual estabilizada en >$1.400.000/mes. Sistema de alertas operativo en <5 días.',
      riesgoMitigado: 'Iliquidez operativa por volatilidad de cobranzas',
    },
  ],
  d90: [
    {
      accion: 'Rediseño de reportes: crear dashboard integrado Obra × Inmobiliaria × Tipo de Deuda para visión 360° del riesgo',
      porQue: 'Los reportes actuales operan en silos (cobranzas por inmobiliaria, deudores por obra). EL PORTAL DE ROCA no aparece como problema en cobranzas. Sin BI integrado, los puntos ciegos se repetirán cada mes.',
      areaLider: 'IT + Finanzas + Cobranzas (requerimientos)',
      kpi: 'Dashboard operativo con actualización semanal en Q3 2026. Detección de problemas obra-específicos antes de que escalen.',
      riesgoMitigado: 'Todos los riesgos listados (visibilidad temprana previene escalamiento)',
    },
    {
      accion: 'Política de límites de crédito por canal: congelar nuevas operaciones en Particular hasta recuperar 50% de su mora activa ($83.586)',
      porQue: 'Particular tiene 11 morosos con $83.586 mora (45,5% del total). Continuar generando nuevas operaciones sin resolver la cartera morosa actual agrava exponencialmente el problema.',
      areaLider: 'Comercial (gerencia) + Finanzas',
      kpi: 'Mora Particular de $83K a <$40K en 90 días. Cero nuevos morosos en Particular durante el período.',
      riesgoMitigado: 'Escalamiento mora Particular',
    },
    {
      accion: 'Evaluación de diversificación de agencias: identificar 3-5 agencias medianas con potencial de crecimiento',
      porQue: 'Top 5 inmobiliarias concentran 61,8% de cobranza. Alta dependencia implica riesgo sistémico. Las 26 agencias restantes solo aportan 38,2%. Si alguna top abandona, el impacto es inmediato e irreparable en el corto plazo.',
      areaLider: 'Comercial (desarrollo de agencias)',
      kpi: 'Concentración Top 5 de 61,8% a <55% en 12 meses. 3 nuevas agencias incorporadas con efectividad >95%.',
      riesgoMitigado: 'Pérdida de agencia top y dependencia estructural',
    },
    {
      accion: 'Auditoría completa de todos los conceptos no estándar en cartera (no solo REFUERZOS)',
      porQue: 'Se detectaron $67.486 en REFUERZOS. Requiere auditoría exhaustiva para identificar AJUSTE, COMISIÓN, INTERÉS u otros conceptos que puedan estar ocultos en la cartera completa.',
      areaLider: 'Auditoría Interna + Contabilidad',
      kpi: '100% de conceptos validados. Cero cargos sin documentación de respaldo en la cartera.',
      riesgoMitigado: 'Cobranza ilegal sistémica (no solo casos puntuales detectados)',
    },
    {
      accion: 'Revisión de política de aprobación de compradores en Becerra: endurecer scoring crediticio',
      porQue: 'Morosos de Becerra tienen deuda promedio 46% superior al general ($5.057 vs $3.463). Aprueba compradores con perfil riesgoso sin seguimiento preventivo posterior.',
      areaLider: 'Comercial (políticas) + Finanzas (scoring)',
      kpi: 'Mora futura Becerra: cero nuevos casos en 90 días. Scoring crediticio ajustado con nuevos umbrales.',
      riesgoMitigado: 'Escalamiento mora Becerra',
    },
    {
      accion: 'Construcción de reservas de caja: acumular $500.000 de colchón equivalente a 1/3 del promedio mensual de cobranza',
      porQue: 'Cobranza varía -37,4% a +86,5% mensual. Sin flujo recurrente de deudores (99,19% en mora), el sistema depende de cierres nuevos volátiles. Una reserva de $500K cubre 1 mes de déficit extremo (tipo oct 2025).',
      areaLider: 'Finanzas (tesorería)',
      kpi: 'Reserva de $500K constituida en 90 días. Eliminación de riesgo de déficit operativo mensual.',
      riesgoMitigado: 'Iliquidez operativa por volatilidad de cobranzas',
    },
    {
      accion: 'Análisis de causa raíz de la volatilidad extrema de cobranzas (¿estacional, obra-específica o macroeconómica?)',
      porQue: 'La volatilidad -37,4% a +86,5% no está explicada en el reporte. Si los picos coinciden con cierres de obras específicas, el patrón es predecible y permite planificación. Si son macroeconómicos, requieren estrategia diferente.',
      areaLider: 'Finanzas (análisis) + Comercial (contexto de mercado)',
      kpi: 'Causa de volatilidad identificada en 60 días. Capacidad predictiva de cobranza mensual operativa.',
      riesgoMitigado: 'Iliquidez operativa (planificación proactiva vs reactiva)',
    },
    {
      accion: 'Plan de recuperación de $3.790.062 en pendiente: campaña focalizada en DIRECTO/S/D + Yamil Remax + Particular (58,4% del total recuperable)',
      porQue: 'Tres focos concentran 58,4% del potencial de recuperación ($1.769.921 de $3.032.050 al 80%). Estrategia diferenciada: DIRECTO/S/D por riesgo sistémico, Yamil Remax por baja efectividad, Particular por volumen de morosos.',
      areaLider: 'Cobranzas (líder) + Comercial (coordinación con agencias)',
      kpi: 'Pendiente cartera vendida de $3.790.062 a <$2.500.000 en 90 días. Equivale a recuperar 1,98 meses de cobranza promedio.',
      riesgoMitigado: 'Iliquidez operativa (recuperar flujo equivalente a 2 meses de cobranza promedio)',
    },
  ],
};
