// ── MÓDULO 3: FINANZAS ────────────────────────────────────────────────────────
// Período: Abril 2026

export const semaforo = [
  {
    subarea: 'Cobranzas',
    estado: 'ESTABLE CON VOLATILIDAD',
    color: 'amarillo',
    metrica: 'Cobro abr 2026 (parcial): $1.369.689 — 10,3% por debajo del promedio histórico ($1.526.706). Volatilidad últimos 12 meses: -37,4% a +82,7% mensual.',
    umbral: 'Desviación >10% vs promedio histórico = Amarillo; >25% = Rojo',
  },
  {
    subarea: 'Deudores / Mora',
    estado: 'RIESGO DE CONCENTRACIÓN',
    color: 'rojo',
    metrica: 'Mora total: $152.045 (4,0% del pendiente). Concentración crítica: 45,8% en 1 obra (EL PORTAL DE ROCA), 39,3% en 1 canal (Particular). Concepto no estándar REFUERZO = 21% de mora total.',
    umbral: 'Top 1 obra >40% mora = Rojo; conceptos no estándar >15% mora total = Rojo',
  },
];

export const hallazgos = [
  'Concentración crítica en EL PORTAL DE ROCA y canal Particular: el 45,8% de la mora ($69.688) proviene de EL PORTAL DE ROCA y el 39,3% ($59.788) del canal Particular. 7 de los 9 deudores morosos de Particular están en esa obra. Un evento adverso comprometería casi la mitad de la recuperación posible.',
  'Concepto no estándar REFUERZO distorsiona la lectura de mora: JORGE CAMPI registra $32.486 bajo concepto "REFUERZO" en EL PORTAL DE ROCA (UF:8ºI), representando el 21% de la mora total. Ningún otro deudor tiene este concepto. Sin validación urgente, la mora real podría estar sobrestimada en 21%.',
  'Volatilidad extrema de cobranzas impide previsibilidad de caja: los últimos 12 meses muestran fluctuaciones entre -37,4% (oct 2025) y +82,7% (nov 2025). CV implícito ~35%. El área no puede proyectar caja con certeza, forzando colchones de liquidez innecesariamente altos.',
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
  pendienteTotal: 3789562,
  pctPendienteVsHistorico: 3.8,
};

export const evolucionMensual = [
  { mes: 'Abr 25', cobrado: 2199711, pagos: 261, variacion: 12.0 },
  { mes: 'May 25', cobrado: 1624629, pagos: 290, variacion: -26.1 },
  { mes: 'Jun 25', cobrado: 1066765, pagos: 206, variacion: -34.3 },
  { mes: 'Jul 25', cobrado: 1989709, pagos: 268, variacion: 86.4 },
  { mes: 'Ago 25', cobrado: 1999152, pagos: 237, variacion: 0.5 },
  { mes: 'Sep 25', cobrado: 1386301, pagos: 236, variacion: -30.6 },
  { mes: 'Oct 25', cobrado: 867205,  pagos: 167, variacion: -37.4 },
  { mes: 'Nov 25', cobrado: 1584008, pagos: 238, variacion: 82.7 },
  { mes: 'Dic 25', cobrado: 1987947, pagos: 223, variacion: 25.5 },
  { mes: 'Ene 26', cobrado: 1500165, pagos: 240, variacion: -24.5 },
  { mes: 'Feb 26', cobrado: 1559555, pagos: 220, variacion: 3.9 },
  { mes: 'Mar 26', cobrado: 1324075, pagos: 204, variacion: -15.1 },
  { mes: 'Abr 26*', cobrado: 1369689, pagos: 204, variacion: 3.4 },
];

export const topObrasCobro = [
  { obra: 'America',      cobrado: 15820150, pendiente: 246,    efectividad: 99.998, interpretacion: 'Cartera cerrada — prácticamente sin pendiente. Obra finalizada y cobrada.' },
  { obra: 'Maipu 2555',   cobrado: 10624028, pendiente: 812650, efectividad: 92.9,   interpretacion: 'Mayor pendiente absoluto del top 5 ($812.650). Requiere seguimiento activo.' },
  { obra: 'HORNOS 2719',  cobrado: 5670453,  pendiente: 345114, efectividad: 94.3,   interpretacion: 'Pendiente significativo. 13 deudores morosos con mora promedio baja.' },
  { obra: 'MITRE 1185',   cobrado: 3482227,  pendiente: 51468,  efectividad: 98.5,   interpretacion: 'Situación sana — pendiente bajo.' },
  { obra: 'SAN MARTIN 861', cobrado: 3177890, pendiente: 19000, efectividad: 99.4,   interpretacion: 'Cartera casi cerrada.' },
];

export const topObrasPendiente = [
  { obra: 'Maipu 2555',   pendiente: 812650, cobrado: 10624028, pctPendiente: 7.1,  riesgo: '🔴 ALTO — Mayor pendiente absoluto (21,4% del total). Sin mora visible — ventana preventiva.' },
  { obra: 'URQUIZA 4550', pendiente: 648139, cobrado: 1021861,  pctPendiente: 38.8, riesgo: '🔴 CRÍTICO — 38,8% de pendiente vs total obra. Efectividad 61,2%. Requiere intervención inmediata.' },
  { obra: 'HORNOS 2719',  pendiente: 345114, cobrado: 5670453,  pctPendiente: 5.7,  riesgo: '⚠️ MEDIO — Pendiente significativo. Segunda obra con más morosos (13 deudores).' },
  { obra: 'MITRE 1185',   pendiente: 51468,  cobrado: 3482227,  pctPendiente: 1.5,  riesgo: '🟢 BAJO — Pendiente bajo relativo a su total.' },
];

export const topInmobiliarias = [
  { inmobiliaria: 'Particular',    cobrado: 20131562, pendiente: 639289, efectividad: 97, morosos: 14, clasificacion: 'RIESGO ALTO' },
  { inmobiliaria: 'Zelaschi',      cobrado: 15433104, pendiente: 143666, efectividad: 99, morosos: 3,  clasificacion: 'PERFORMANCE ÓPTIMA' },
  { inmobiliaria: 'Yamil Remax',   cobrado: 9008564,  pendiente: 724843, efectividad: 93, morosos: 5,  clasificacion: 'RIESGO MEDIO' },
  { inmobiliaria: 'Di Paolo',      cobrado: 8928447,  pendiente: 472610, efectividad: 95, morosos: 12, clasificacion: 'RIESGO MEDIO-ALTO' },
  { inmobiliaria: 'Marcelo Russo', cobrado: 7787560,  pendiente: 256700, efectividad: 97, morosos: 8,  clasificacion: 'PERFORMANCE ACEPTABLE' },
];

export const topInmobiliariasConPendiente = [
  { inmobiliaria: 'DIRECTO / S/D',    pendiente: 848270, cobrado: 4577840,  efectividad: 81, morosos: 0,  riesgo: 'CRÍTICO',    alerta: '0 morosos registrados pero efectividad 81% — discrepancia estructural. Posible error de categorización o acuerdos no documentados. Auditoría urgente.' },
  { inmobiliaria: 'Yamil Remax',      pendiente: 724843, cobrado: 9008564,  efectividad: 93, morosos: 5,  riesgo: 'ALTO',       alerta: 'Segundo mayor pendiente. Efectividad por debajo del promedio (93% vs 97%). Requiere seguimiento.' },
  { inmobiliaria: 'Particular',       pendiente: 639289, cobrado: 20131562, efectividad: 97, morosos: 14, riesgo: 'CRÍTICO',    alerta: 'Mayor cantidad de morosos (14). Canal más grande en deterioro activo.' },
  { inmobiliaria: 'Di Paolo',         pendiente: 472610, cobrado: 8928447,  efectividad: 95, morosos: 12, riesgo: 'MEDIO-ALTO', alerta: '12 morosos. Pendiente material. Segundo canal por cantidad de morosos.' },
  { inmobiliaria: 'Veronica Espinosa', pendiente: 68580, cobrado: 6783420,  efectividad: 99, morosos: 6,  riesgo: 'BAJO',       alerta: 'Pendiente bajo relativo a su total. Efectividad sana.' },
];

export const mora = {
  deudaTotal:     152045,
  moraTotal:      152045,
  pctMora:        4.0,
  deudoresUnicos: 52,
  noVencida:      0,
  gini:           0.518,
  hhi:            0.065,
  // Composición interna de los $152.045
  desglose: [
    { concepto: 'Deuda promedio (cuotas mes actual)',           monto: 83560, pct: 55, nota: 'Cuotas del mes corriente (marzo 2026) no pagadas.' },
    { concepto: 'Deuda vencida — cuotas atrasadas',            monto: 35999, pct: 24, nota: 'Cuotas de meses anteriores arrastradas.' },
    { concepto: 'Deuda vencida — conceptos no estándar ⚠️',   monto: 32486, pct: 21, nota: 'Concepto REFUERZO de JORGE CAMPI. Umbral crítico: >15% mora total. Requiere validación inmediata.' },
  ],
};

export const topDeudoresMora = [
  { deudor: 'JORGE CAMPI',              montomora: 32486, obra: 'EL PORTAL DE ROCA', uf: '8ºI', inmobiliaria: 'Particular',  concepto: 'REFUERZO ⚠️' },
  { deudor: 'ROBERTO H. ZARLENGA',      montomora: 7748,  obra: 'EL PORTAL DE ROCA', uf: '—',   inmobiliaria: 'Particular',  concepto: 'Cuota' },
  { deudor: 'CLAUDIO CARUSSO',          montomora: 7200,  obra: 'LIONI',             uf: '—',   inmobiliaria: 'Zelaschi',    concepto: 'Cuota' },
  { deudor: 'MARCELO CASCALES',         montomora: 6940,  obra: 'EL PORTAL DE ROCA', uf: '—',   inmobiliaria: 'Becerra',     concepto: 'Cuota' },
  { deudor: 'LIZA A. PALLADINO PRADO',  montomora: 6603,  obra: 'URQUIZA 4550',      uf: '—',   inmobiliaria: 'Yamil Remax', concepto: 'Cuota' },
];

export const topObrasMora = [
  { obra: 'EL PORTAL DE ROCA',         montomora: 69688, pct: 45.8, deudores: 9  },
  { obra: 'HORNOS 2719',               montomora: 20050, pct: 13.2, deudores: 13 },
  { obra: 'Yatay 754 y A. Costa 761',  montomora: 11148, pct: 7.3,  deudores: 7  },
  { obra: 'VALENTIN GOMEZ 4736',       montomora: 11080, pct: 7.3,  deudores: 5  },
  { obra: 'URQUIZA 4550',              montomora: 8503,  pct: 5.6,  deudores: 3  },
];

export const topInmobiliariasMora = [
  { inmobiliaria: 'Particular',    montomora: 59788, deudores: 9,  moraPromedio: 6643 },
  { inmobiliaria: 'Di Paolo',      montomora: 18680, deudores: 11, moraPromedio: 1698 },
  { inmobiliaria: 'Zelaschi',      montomora: 15870, deudores: 8,  moraPromedio: 1984 },
  { inmobiliaria: 'Becerra',       montomora: 11590, deudores: 2,  moraPromedio: 5795 },
  { inmobiliaria: 'Marcelo Russo', montomora: 9780,  deudores: 3,  moraPromedio: 3260 },
];

export const segmentacionTactica = [
  {
    segmento: 'A — Críticos',
    criterio: 'Mora > $5.000',
    cantidad: 9,
    deudores: 'JORGE CAMPI, ROBERTO H. ZARLENGA, CLAUDIO CARUSSO, MARCELO CASCALES, LIZA A. PALLADINO, ALEJANDRA AROSTEGUY, SERGIO A. CRUZ, EDUARDO J. FERREIRA, LUCILA SACCANI',
    tactica: 'Negociación directa con Gerencia. Reunión presencial. Planes de pago con descuentos por pago anticipado. Sin respuesta en 15 días → acciones legales. Para JORGE CAMPI: validar concepto REFUERZO antes de negociar.',
  },
  {
    segmento: 'B — Alto riesgo',
    criterio: '$2.000 – $5.000 mora',
    cantidad: 18,
    deudores: '18 deudores en HORNOS 2719, EL PORTAL DE ROCA, VALENTIN GOMEZ 4736 y URQUIZA 4550.',
    tactica: 'Cobranza intensiva con seguimiento semanal. Contacto telefónico + email + notificación formal. Descuento 5-10% por pago en 30 días. Escalar a legal si no paga en 45 días.',
  },
  {
    segmento: 'C — Mora futura inminente',
    criterio: 'Deuda no vencida <30 días',
    cantidad: 0,
    deudores: 'Segmento vacío — deuda no vencida $0 en sistema de deudores. Hay $3.637.517 en pendiente (fuente: cobranzas) sin alertas activas.',
    tactica: 'Reconciliar reportes para identificar vencimientos próximos. Implementar alertas a 30/15/7 días previos al vencimiento.',
  },
  {
    segmento: 'D — Rezago pequeño',
    criterio: 'Mora < $2.000',
    cantidad: 25,
    deudores: '25 deudores en HORNOS 2719, Yatay 754 y A. Costa 761, VALENTIN GOMEZ 4736 y otras obras.',
    tactica: 'Cobranza automatizada + facilidades de pago express. Email y SMS con link de pago. 3 cuotas sin interés para regularización.',
  },
];

export const conceptoNoEstandar = [
  {
    deudor:       'JORGE CAMPI',
    obra:         'EL PORTAL DE ROCA',
    uf:           '8ºI',
    inmobiliaria: 'Particular',
    concepto:     'REFUERZO',
    monto:        32486,
    recordatorio: '02/02',
    pctMoraTotal: 21.4,
    riesgo:       'CRÍTICO',
    descripcion:  'Concepto único en toda la cartera. Posibles causas: ajuste retroactivo, reestructuración no formalizada o error de sistema. Requiere validación inmediata — si es error, la mora real baja 21% instantáneamente.',
  },
];

export const riesgos = [
  { riesgo: 'Concepto REFUERZO de JORGE CAMPI ($32.486 = 21% de mora): posible error de sistema o cargo no consensuado', probabilidad: 'alta', impacto: 'medio-alto', area: 'Finanzas + Legal + Administración EL PORTAL DE ROCA' },
  { riesgo: 'Colapso de EL PORTAL DE ROCA (45,8% de mora, 9 deudores resistentes) por problema estructural en la obra', probabilidad: 'media', impacto: 'crítico', area: 'Administración de obra + Finanzas + Legal' },
  { riesgo: 'Canal Particular deteriora efectividad de 97% a <90% — ya concentra 39,3% de mora y 26,9% de deudores morosos', probabilidad: 'media-alta', impacto: 'alto', area: 'Comercial + Finanzas' },
  { riesgo: 'DIRECTO/S/D: $848.270 en pendiente (22,4% total) con efectividad 81% y 0 morosos registrados — discrepancia estructural oculta mora real', probabilidad: 'alta', impacto: 'crítico', area: 'Sistemas + Finanzas + Legal' },
  { riesgo: 'Volatilidad de cobranzas (-37,4% a +82,7% mensual) genera imprevisibilidad de caja y costos financieros indirectos ($50-100K/año estimados)', probabilidad: 'alta', impacto: 'medio', area: 'Finanzas + Sistemas' },
  { riesgo: 'Maipu 2555: $812.650 en pendiente (21,4% total) sin mora visible — riesgo latente de conversión masiva si hay shock económico', probabilidad: 'media', impacto: 'medio-alto', area: 'Finanzas + Administración Maipu 2555' },
  { riesgo: 'Discrepancia de $3.637.517 entre pendiente (cobranzas) y deuda no vencida (deudores) oculta vencimientos próximos sin alertas tempranas', probabilidad: 'alta', impacto: 'medio-alto', area: 'Sistemas + Finanzas' },
  { riesgo: 'HORNOS 2719: 13 morosos con mora promedio baja ($1.542) — riesgo de escalamiento si no se gestiona rápido', probabilidad: 'media', impacto: 'medio', area: 'Finanzas' },
];

// ── SECCIÓN 4 — CRUCES ENTRE LOS 2 REPORTES ──────────────────────────────────
export const crucesModulos = [
  {
    causa:       'Concentración de mora en EL PORTAL DE ROCA correlaciona con pendiente bajo en cobranzas',
    mecanismo:   'EL PORTAL DE ROCA tiene $69.688 en mora (45,8% del total) pero no aparece en el top 5 de obras por pendiente. La cartera original fue mayormente cobrada, pero los 9 deudores morosos son resistentes a gestiones estándar.',
    impacto:     'Casi la mitad de la mora concentrada en una sola obra. El resto de la cartera debe absorber el déficit de caja si no se resuelve.',
    consecuencia: 'Sin intervención en 6 meses, el efecto contagio puede duplicar la mora de la obra. Posible disputa legal colectiva que paralice recuperación 12-24 meses.',
  },
  {
    causa:       'Canal Particular concentra mora desproporcionada vs su efectividad histórica del 97%',
    mecanismo:   'Particular tiene efectividad del 97% en cobros históricos (reporte cobranzas) pero concentra el 39,3% de la mora actual ($59.788) y 14 de los 52 deudores morosos (26,9%). Su cartera se deterioró recientemente.',
    impacto:     'El canal con mayor volumen histórico ($20.131.562) es ahora el de mayor riesgo. Si no mejora la gestión, su efectividad futura caerá y arrastrará la performance global.',
    consecuencia: 'Si la mora de Particular crece al 10% de su pendiente ($639.289), agregaría $63.929 a la mora total (+42%). Si además reduce volumen de nuevas ventas, el impacto sobre caja futura es doble.',
  },
  {
    causa:       'DIRECTO/S/D tiene mayor pendiente ($848.270) pero 0 morosos registrados — discrepancia estructural',
    mecanismo:   'DIRECTO/S/D concentra el 22,4% del pendiente total con efectividad del 81% (19 puntos por debajo del promedio), pero el reporte de deudores no registra ningún moroso en ese canal.',
    impacto:     'La clasificación de la deuda puede ser incorrecta (el pendiente debería estar en mora pero no migró al sistema), o existen acuerdos no documentados que mantienen la deuda "al día" técnicamente.',
    consecuencia: 'Si hay error de categorización, la mora real podría ser $1.000.315 (+558% sobre la reportada), cambiando radicalmente el diagnóstico y requiriendo intervención del Directorio.',
  },
  {
    causa:       'Maipu 2555 tiene el mayor pendiente absoluto ($812.650) pero no aparece en top 5 de mora — ventana preventiva',
    mecanismo:   'Maipu 2555 tiene el mayor pendiente de todas las obras pero 0 mora visible en el top 5. La cartera está "al día" técnicamente, pero el volumen introduce riesgo latente.',
    impacto:     'Si el 5% del pendiente migra a mora (tasa observada en HORNOS 2719), agregaría $40.633 (+26,7% sobre mora actual). Si el 10% migra, sumarían $81.265 (+53,5%).',
    consecuencia: 'Sin seguimiento preventivo, Maipu 2555 podría convertirse en el próximo EL PORTAL DE ROCA. La ventana de acción existe hoy — actuar ahora evita crisis reactiva en 3-6 meses.',
  },
  {
    causa:       'Yamil Remax tiene el mayor pendiente entre inmobiliarias ($724.843) y efectividad por debajo del promedio (93%), correlacionando con 5 morosos',
    mecanismo:   'Yamil Remax aparece en ambos reportes como canal de alto riesgo: mayor pendiente en cobranzas y 5.º lugar en mora. Efectividad del 93% está 4 puntos por debajo del promedio del top 5 (97%).',
    impacto:     'El canal está en deterioro progresivo. Si efectividad cae otros 4 puntos (a 89%), su pendiente podría superar $800.000 y su mora podría duplicarse.',
    consecuencia: 'Si Yamil Remax replica el patrón de Particular (alto volumen histórico → alta mora), afectaría el 9% de la cartera total ($9.008.564 cobrado histórico).',
  },
  {
    causa:       'URQUIZA 4550 tiene alta concentración de pendiente (38,8% vs total obra) y ya está en top 5 de mora — obra en crisis',
    mecanismo:   'URQUIZA 4550 tiene $648.139 en pendiente (segundo mayor) y $8.503 en mora (quinto lugar). Efectividad solo del 61,2% vs 96,2% promedio de cartera. Solo el 1,3% de su pendiente está en mora.',
    impacto:     '$639.636 están "al día" pero en riesgo inminente de migrar a mora. Si el 10% migra en 90 días, agregaría $63.964 (+42% sobre mora total actual).',
    consecuencia: 'URQUIZA 4550 podría colapsar completamente. Su perfil es de muchos deudores con pendiente alto próximos a vencer. Acción urgente: verificar si hay problema de entrega o disputa contractual.',
  },
  {
    causa:       'Concepto REFUERZO de JORGE CAMPI distorsiona la lectura de mora en 21%, concentrado en el canal de mayor riesgo y la obra con mayor mora',
    mecanismo:   'El concepto no estándar de $32.486 es el 21,4% de la mora total. Está asociado a Particular (39,3% de mora) y EL PORTAL DE ROCA (45,8% de mora). Ningún otro deudor tiene este concepto.',
    impacto:     'Si es error o se negocia con descuento, la mora baja 21% instantáneamente, mejorando todos los KPIs. Si es válido y no se cobra, refuerza la concentración de riesgo en Particular + EL PORTAL DE ROCA.',
    consecuencia: 'Sin resolución, el REFUERZO es un "activo tóxico" que distorsiona la cartera. Si otros deudores de EL PORTAL DE ROCA disputan sus cargos usándolo como precedente, podría generarse una ola de impugnaciones que paralice cobranza en toda la obra.',
  },
  {
    causa:       'Correlación entre inmobiliarias con alta mora y obras con alta mora — efecto red entre Particular y EL PORTAL DE ROCA',
    mecanismo:   '7 de los 9 deudores morosos de Particular están en EL PORTAL DE ROCA. Di Paolo (segundo canal por mora) tiene 11 deudores pero dispersos en múltiples obras — su problema es diferente al de Particular.',
    impacto:     'El problema no es solo Particular ni solo EL PORTAL DE ROCA, sino la combinación de ambos. Posible causa: criterios crediticios laxos en ventas directas de esa obra, o problema estructural compartido (defectos, retraso en entrega).',
    consecuencia: 'Sin resolver la causa raíz en EL PORTAL DE ROCA, la mora de Particular no se reducirá aunque mejore su gestión. Y sin mejorar la gestión de Particular, otras obras donde opere ese canal podrían replicar el patrón.',
  },
];

// ── CONCENTRACIÓN DE COBRANZA ─────────────────────────────────────────────────
export const concentracionCobranza = [
  {
    segmento:  'Top 3 obras',
    detalle:   'Maipu 2555 ($10.624.028) + HORNOS 2719 ($5.670.453) + America ($15.820.150)',
    cobrado:   32114631,
    pctTotal:  32.4,
    formula:   '32.114.631 / 99.083.129 × 100',
  },
  {
    segmento:  'Top 5 obras',
    detalle:   'Top 3 + MITRE 1185 ($3.482.227) + SAN MARTIN 861 ($3.177.890)',
    cobrado:   38774748,
    pctTotal:  39.1,
    formula:   '38.774.748 / 99.083.129 × 100',
  },
  {
    segmento:  'Top 3 inmobiliarias',
    detalle:   'Particular ($20.131.562) + Zelaschi ($15.433.104) + Yamil Remax ($9.008.564)',
    cobrado:   44573230,
    pctTotal:  45.0,
    formula:   '44.573.230 / 99.083.129 × 100',
  },
  {
    segmento:  'Top 5 inmobiliarias',
    detalle:   'Top 3 + Di Paolo ($8.928.447) + Marcelo Russo ($7.787.560)',
    cobrado:   61289237,
    pctTotal:  61.9,
    formula:   '61.289.237 / 99.083.129 × 100',
  },
];

// ── IMPACTO POTENCIAL DE RECUPERACIÓN RÁPIDA ─────────────────────────────────
export const impactoRecuperacion = [
  {
    escenario:        'Recuperación Top 3 obras con más pendiente',
    descripcion:      'Maipu 2555 ($812.650) + URQUIZA 4550 ($648.139) + HORNOS 2719 ($345.114)',
    montoRecuperable: 1805903,
    pctPendiente:     47.7,
    plazo:            'Campaña inmediata focalizada',
  },
  {
    escenario:        'Recuperación Top 3 inmobiliarias con más pendiente',
    descripcion:      'DIRECTO/S/D ($848.270) + Yamil Remax ($724.843) + Particular ($639.289)',
    montoRecuperable: 2212402,
    pctPendiente:     58.4,
    plazo:            'Campaña inmediata focalizada',
  },
];

// ── RIESGO DE TRANSFORMACIÓN (DEUDA NO VENCIDA → MORA) ───────────────────────
export const riesgoTransformacion = [
  {
    escenario:   'Conservador (2% de conversión)',
    descripcion: 'Si el 2% del pendiente no vencido ($3.637.517) migra a mora en 90 días — tasa baja, sin shocks adicionales.',
    montoRiesgo: 72750,
    moraProyectada: 224795,
    variacionPct:   48,
    probabilidad:   'Media-alta — patrón ya observado con vencimientos sin alertas activas (90% de prob. si no se reconcilian reportes).',
  },
  {
    escenario:   'Medio (5% de conversión)',
    descripcion: 'Tasa observada en HORNOS 2719 aplicada al pendiente total no vencido. Escenario probable si se mantiene el déficit de seguimiento actual.',
    montoRiesgo: 181876,
    moraProyectada: 333921,
    variacionPct:   120,
    probabilidad:   'Media — requiere que el patrón de HORNOS 2719 se replique en otras obras sin intervención.',
  },
  {
    escenario:   'Crítico (10% de conversión)',
    descripcion: 'Posible ante shock económico, deterioro en alguna obra clave (ej: URQUIZA 4550 o Maipu 2555) o colapso de canal DIRECTO/S/D.',
    montoRiesgo: 363752,
    moraProyectada: 515797,
    variacionPct:   239,
    probabilidad:   'Baja-media (30% en 90 días) — requiere evento adverso puntual en obra o canal con alto pendiente.',
  },
];

export const planAccion = {
  h72: [
    {
      accion: 'Validar concepto REFUERZO de JORGE CAMPI ($32.486 = 21% de mora)',
      porQue: 'Si es error → mora cae -21% instantáneamente. Si es válido → riesgo de incobrabilidad de $32.486 si no se actúa.',
      areaLider: 'Gerencia de Finanzas + Administración de EL PORTAL DE ROCA',
      kpi: 'Concepto clasificado y acción definida (corrección o plan de pago)',
      riesgoMitigado: 'Distorsión de mora total, pérdida de $32.486 sin gestión',
    },
    {
      accion: 'Auditar cartera completa de DIRECTO/S/D ($848.270 pendiente, 0 morosos registrados)',
      porQue: 'Efectividad 81% sin morosos es estadísticamente improbable — posible mora real oculta de hasta $848.270.',
      areaLider: 'Gerencia de Finanzas + Gerencia Comercial',
      kpi: 'Reconciliación completada; mora real de DIRECTO/S/D identificada',
      riesgoMitigado: 'CRÍTICO: 22,4% del pendiente total sin visibilidad real de riesgo',
    },
    {
      accion: 'Reunión urgente con administrador de EL PORTAL DE ROCA + muestra de 3 deudores morosos',
      porQue: '45,8% de mora total concentrada en una obra. Sin causa raíz identificada no se puede intervenir.',
      areaLider: 'Gerencia de Finanzas + Dirección Comercial',
      kpi: 'Causa raíz documentada; plan de recuperación iniciado',
      riesgoMitigado: 'Concentración sistémica de mora sin diagnóstico ni acción',
    },
  ],
  d30: [
    {
      accion: 'Campaña de cobranza intensiva en EL PORTAL DE ROCA',
      porQue: '9 deudores morosos, $69.688 = 45,8% de mora total. Contacto semanal + plan de pago con descuento 10% por pago en 30 días.',
      areaLider: 'Gerencia de Finanzas',
      kpi: 'Recuperar 40% ($27.875) → mora total -18,3%',
      riesgoMitigado: 'Mora cronificada, pérdida de recuperación por prescripción',
    },
    {
      accion: 'Reunión con Particular para revisar cartera de 14 deudores morosos',
      porQue: 'Canal con 39,3% de mora y el mayor riesgo de concentración. Sin protocolo conjunto, la mora seguirá creciendo.',
      areaLider: 'Gerencia Comercial + Gerencia de Finanzas',
      kpi: 'Protocolo de seguimiento preventivo implementado en Particular',
      riesgoMitigado: 'Dependencia de canal con alta mora, riesgo reputacional',
    },
    {
      accion: 'Cobranza automatizada en HORNOS 2719 (13 deudores, mora promedio $1.542)',
      porQue: 'Alta dispersión de deudores con montos medianos — la automatización (emails + SMS + link de pago) es más eficiente que gestión individual.',
      areaLider: 'Gerencia de Finanzas + IT',
      kpi: 'Mora en HORNOS 2719 reducida -30% en 30 días',
      riesgoMitigado: 'Mora dispersa no gestionada, costo operativo de cobranza manual',
    },
    {
      accion: 'Reconciliar reportes de cobranzas y deudores: identificar los $3.637.517 de diferencia',
      porQue: 'Brecha sistémica entre sistemas impide visibilidad real del riesgo. Implementar alertas a 30/15/7 días previos al vencimiento.',
      areaLider: 'Gerencia de Finanzas + IT + Administración',
      kpi: '$3.637.517 clasificados; alertas de vencimiento operativas',
      riesgoMitigado: 'Sorpresas de mora, decisiones financieras basadas en datos incompletos',
    },
    {
      accion: 'Auditar distribución de fechas de vencimiento y redistribuir calendarios de pago',
      porQue: 'Volatilidad de -37,4% a +82,7% mensual impide proyección de caja. Redistribuir vencimientos suaviza el flujo.',
      areaLider: 'Gerencia de Finanzas',
      kpi: 'CV de cobranza mensual reducido a <20% en 6 meses',
      riesgoMitigado: 'Imprevisibilidad de caja, colchones de liquidez innecesariamente altos',
    },
    {
      accion: 'Negociación directa con top 9 deudores críticos (mora >$5.000)',
      porQue: 'Reunión presencial + planes de pago estructurados con descuento por pago anticipado. Representan 80%+ de mora total.',
      areaLider: 'Gerencia de Finanzas + Legal',
      kpi: '70% de deudores críticos con plan de pago firmado en 30 días',
      riesgoMitigado: 'Mora cronificada en deudores de alto impacto',
    },
  ],
  d90: [
    {
      accion: 'Implementar scoring crediticio para ventas nuevas en canal Particular',
      porQue: 'Canal genera 39,3% de mora actual. Sin filtro preventivo, cada nueva venta en Particular tiene alta probabilidad de convertirse en mora.',
      areaLider: 'Gerencia Comercial + Gerencia de Finanzas',
      kpi: 'Mora de nuevas ventas en Particular <2% a 12 meses',
      riesgoMitigado: 'Acumulación sistemática de mora por canal sin filtro crediticio',
    },
    {
      accion: 'KPIs de efectividad y mora por inmobiliaria con revisión trimestral',
      porQue: 'Incentivos actuales basados solo en volumen de venta generan selección adversa de compradores. Penalizar mora creada.',
      areaLider: 'Gerencia Comercial + Directorio',
      kpi: 'Dashboard de efectividad/mora por canal activo; revisión Q1 2027',
      riesgoMitigado: 'Concentración de mora en canales sin consecuencias por desempeño',
    },
    {
      accion: 'Auditoría completa de URQUIZA 4550: entrega, defectos constructivos, disputa contractual',
      porQue: 'Efectividad 61,2% con $648.139 en riesgo. Sin causa raíz identificada, el pendiente puede migrar a mora.',
      areaLider: 'Gerencia de Finanzas + Gerencia de Obras + Legal',
      kpi: 'Causa raíz identificada; plan de recuperación definido',
      riesgoMitigado: 'Pérdida de $648.139 por mora no detectada a tiempo',
    },
    {
      accion: 'Diversificar canales de venta: incorporar 2-3 inmobiliarias nuevas',
      porQue: 'Top 3 inmobiliarias concentran 45% del cobro histórico. Alta dependencia = riesgo sistémico si alguna reduce volumen.',
      areaLider: 'Gerencia Comercial + Dirección General',
      kpi: 'Participación del top 3 reducida a <35% del cobro en 12 meses',
      riesgoMitigado: 'Dependencia estructural de canales concentrados',
    },
    {
      accion: 'Protocolo de seguimiento preventivo para obras con pendiente alto y mora baja',
      porQue: 'Maipu 2555 ($812.650 pendiente, sin mora registrada) es riesgo latente. Sin monitoreo, puede acumular mora rápidamente.',
      areaLider: 'Gerencia de Finanzas',
      kpi: 'Alertas activas para 100% de obras con pendiente >$500k',
      riesgoMitigado: 'Migración silenciosa de pendiente sano a mora sin detección temprana',
    },
    {
      accion: 'Dashboard ejecutivo integrado de cobranzas + deudores con actualización semanal',
      porQue: 'Actualmente los dos sistemas no están reconciliados. Sin vista unificada, el Directorio toma decisiones con información parcial.',
      areaLider: 'Gerencia de Finanzas + IT',
      kpi: 'Dashboard operativo con actualización semanal desde Q3 2026',
      riesgoMitigado: 'Decisiones financieras con información incompleta o contradictoria',
    },
  ],
};
