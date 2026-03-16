// ── MÓDULO 2: COMERCIAL ───────────────────────────────────────────────────────
// Período: Marzo 2026

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
// color: 'green' | 'yellow' | 'orange' | 'red'
export const semaforo = [
  {
    subarea: 'Ventas x periodo',
    estado: 'Bajo presión',
    color: 'yellow',
    metrica: 'Gap avance-ventas: 2.2% negativo; 3 obras con 0% vendido',
    umbral: 'Gap >2% negativo = Amarillo',
  },
  {
    subarea: 'Ventas y reservas',
    estado: 'Robusto con alertas',
    color: 'yellow',
    metrica: 'Boletos 2026: 46 (año en curso); boletos 2025: 142 (año completo)',
    umbral: 'No comparables directamente — requiere seguimiento',
  },
  {
    subarea: 'Firma boleto',
    estado: 'Sólido con riesgos',
    color: 'green',
    metrica: 'Satisfacción 69% Muy Buena / Recompra 76.2% / Incumplimiento plazos 13.1%',
    umbral: 'Satisfacción <65% o incumplimiento >15% = Amarillo',
  },
  {
    subarea: 'Emblue',
    estado: 'Bajo estándar',
    color: 'red',
    metrica: 'Bounce rate: 16.6% / Open rate mínimo: 7%',
    umbral: 'Bounce >2%, Open <15% = Rojo',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'La brecha negativa de 2.2% entre avance de obra y ventas compromete la liquidez e inmoviliza capital, con tres obras sin ninguna venta registrada y dos obras terminadas con stock sin rotar.',
  'El bounce rate de 16.6% en la campaña de mayor alcance erosiona severamente la entregabilidad y limita el canal de prospección digital.',
  'La satisfacción y fidelidad del comprador son fortalezas reales (76.2% volvería a invertir), pero el 13.1% de incumplimiento de plazos y el 32.1% en pozo representan un riesgo reputacional y legal latente.',
];

// ── BRECHA AVANCE VS. VENTAS ──────────────────────────────────────────────────
export const brechaAvance = [
  { obra: 'Roca 1276',        avance: 100.0, vendido: 26.2, brecha: 73.8,  tipo: 'Stock inmovilizado (obra finalizada)' },
  { obra: 'Roca 1650',        avance: 55.6,  vendido: 0.0,  brecha: 55.6,  tipo: 'Riesgo lanzamiento' },
  { obra: 'Bustillo 357',     avance: 29.2,  vendido: 0.0,  brecha: 29.2,  tipo: 'Riesgo lanzamiento' },
  { obra: 'Mitre 929',        avance: 100.0, vendido: 76.2, brecha: 23.8,  tipo: 'Liquidez lenta (obra finalizada)' },
  { obra: 'W. de Tata 4965',  avance: 11.1,  vendido: 0.0,  brecha: 11.1,  tipo: 'Bajo desarrollo' },
  { obra: 'Hornos 2719',      avance: 86.6,  vendido: 73.0, brecha: 13.6,  tipo: 'Bajo' },
  { obra: 'Belgrano 4664',    avance: 48.6,  vendido: 60.4, brecha: -11.8, tipo: 'Motor solvencia' },
  { obra: 'Valentín G. 4736', avance: 63.4,  vendido: 87.9, brecha: -24.5, tipo: 'Motor solvencia' },
];

// ── STOCK INMOVILIZADO ────────────────────────────────────────────────────────
export const stockInmovilizado = [
  { obra: 'Bustillo 357',    avance: 29.2, vendido: 0, hipotesis: 'Desajuste producto-mercado o precio no competitivo' },
  { obra: 'Roca 1650',       avance: 55.6, vendido: 0, hipotesis: 'Diseño, ubicación o canal de venta inadecuado' },
  { obra: 'W. de Tata 4965', avance: 11.1, vendido: 0, hipotesis: 'Canales de publicidad insuficientes, escasa demanda detectada' },
];

// ── MOTORES DE SOLVENCIA ──────────────────────────────────────────────────────
export const motoresSolvencia = [
  { obra: 'Valentín Gómez 4736', avance: 63.4, vendido: 87.9, rol: 'Estabilizador de cashflow; ventas anticipan avance en 24.5 puntos' },
  { obra: 'Belgrano 4664',       avance: 48.6, vendido: 60.4, rol: 'Motor de venta anticipada; demanda supera construcción' },
  { obra: 'Hornos 2719',         avance: 86.6, vendido: 73.0, rol: 'Alto desempeño comercial en obra avanzada' },
];

// ── EMBUDO COMERCIAL ──────────────────────────────────────────────────────────
export const embudo = {
  boletos: 1216,
  reservas: 1130,
  ratio: 1.08,
  agingMas60: 0,
};

// ── CANAL POR INMOBILIARIA ────────────────────────────────────────────────────
export const canalInmobiliaria = [
  { inmobiliaria: 'Particular',  boletos: 245, reservas: null, ratio: null, clasificacion: 'Líder de volumen' },
  { inmobiliaria: 'Jorge Cota',  boletos: 2,   reservas: 8,    ratio: 25,   clasificacion: 'Alerta: baja conversión' },
];

// ── KPIs — FIRMA BOLETO ───────────────────────────────────────────────────────
export const kpisFirmaBoleto = [
  { label: 'Total respuestas encuesta',         actual: 84,   anterior: null, unidad: '',  tendenciaBuena: 'up' },
  { label: '% recompra / volvería a invertir',  actual: 76.2, anterior: null, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Satisfacción "Muy Buena"',          actual: 69.0, anterior: null, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Canal dominante (Inmobiliarias)',   actual: 52.9, anterior: null, unidad: '%', tendenciaBuena: 'neutral' },
  { label: 'Cumplimiento de plazos "Sí"',       actual: 54.8, anterior: null, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Incumplimiento de plazos "No"',     actual: 13.1, anterior: null, unidad: '%', tendenciaBuena: 'down' },
  { label: 'Compradores en pozo',               actual: 32.1, anterior: null, unidad: '%', tendenciaBuena: 'down' },
];

// ── CAMPAÑAS EMBLUE ───────────────────────────────────────────────────────────
export const emblue = [
  { campana: 'Inversiones',                    openRate: 25,  ctr: 19, ctor: null, bounceRate: 5.3,  clasificacion: 'Destacada' },
  { campana: 'No todos buscan lo mismo',       openRate: 7,   ctr: 8,  ctor: null, bounceRate: 11.1, clasificacion: 'Oportunidad de mejora' },
  { campana: 'Envío General Dic 2025 - Branding', openRate: 7, ctr: 8, ctor: null, bounceRate: 16.6, clasificacion: 'Problema grave' },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
// probabilidad / impacto: 'alta' | 'media' | 'baja'
export const riesgos = [
  {
    riesgo: 'Déficit de caja por brecha avance-ventas (2.2% negativo)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Comercial / Finanzas',
    consecuencia: 'Menor liquidez disponible y déficit operativo proyectado al cierre del año',
  },
  {
    riesgo: 'Listas de email con bounce crítico (16.6% en campaña principal)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Marketing',
    consecuencia: 'Entregabilidad deteriorada, pérdida del canal digital y bloqueo por ISPs',
  },
  {
    riesgo: 'Obras terminadas con stock inmovilizado (Roca 1276 — 73.8% sin vender)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Comercial',
    consecuencia: 'Capital sin horizonte de recupero definido, costo de oportunidad creciente',
  },
  {
    riesgo: 'Concentración en canal inmobiliario (52.9% de captación)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Comercial',
    consecuencia: 'Caída abrupta de ventas si el canal se debilita',
  },
  {
    riesgo: 'Baja conversión canal Jorge Cota (25% — 2 boletos sobre 8 reservas)',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Comercial / Operaciones',
    consecuencia: 'Inventario bloqueado sin rotación visible',
  },
  {
    riesgo: 'Riesgo reputacional por incumplimiento de plazos (13.1%)',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Postventa',
    consecuencia: 'Reclamos legales y pérdida de confianza del comprador',
  },
  {
    riesgo: 'Ausencia de programa formal de recompra (76.2% con intención sin mecanismo)',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Comercial',
    consecuencia: 'Pérdida de ventas de bajo costo de adquisición a clientes fidelizados',
  },
];

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Limpiar listas de email eliminando contactos con rebote e inactivos',
      porQue: 'Bounce rate de 16.6% compromete la entregabilidad de todas las campañas futuras',
      areaLider: 'Marketing',
      kpi: 'Bounce rate < 2%',
      riesgoMitigado: 'Deterioro del canal digital',
    },
    {
      accion: 'Lanzar campaña específica para liquidar Roca 1276 (17 uds.) y Mitre 929 (2 uds.)',
      porQue: 'Obras terminadas con stock inmovilizado y costo de oportunidad creciente',
      areaLider: 'Comercial',
      kpi: 'Unidades vendidas, reducción de brecha',
      riesgoMitigado: 'Déficit de caja',
    },
    {
      accion: 'Auditar reservas de Jorge Cota (8 reservas, 2 boletos) y depurar sin justificación',
      porQue: 'Conversión del 25% bloquea inventario sin señal de alerta temprana',
      areaLider: 'Operaciones',
      kpi: 'Ratio de conversión por canal',
      riesgoMitigado: 'Stock inmovilizado',
    },
  ],
  d30: [
    {
      accion: 'Revisar pricing y estrategia de producto en Bustillo 357 y Roca 1650',
      porQue: 'Ambas con 0% vendido pese a avance de obra significativo',
      areaLider: 'Comercial',
      kpi: '% vendido, nuevas reservas',
      riesgoMitigado: 'Stock invendible',
    },
    {
      accion: 'Replicar modelo de campaña "Inversiones" en obras con bajo desempeño',
      porQue: 'Única campaña que supera benchmarks; metodología reproducible',
      areaLider: 'Marketing',
      kpi: 'Open Rate y CTR',
      riesgoMitigado: 'Baja efectividad digital',
    },
    {
      accion: 'Formalizar acuerdos e incentivos con inmobiliarias de mayor conversión',
      porQue: 'Canal dominante (52.9%) sin estructura de incentivos ni diversificación',
      areaLider: 'Comercial',
      kpi: '% captación por canal',
      riesgoMitigado: 'Concentración en canal único',
    },
  ],
  d90: [
    {
      accion: 'Diseñar e implementar programa formal de recompra para inversores',
      porQue: '76.2% manifiesta intención de reinvertir sin mecanismo que la capture',
      areaLider: 'Comercial',
      kpi: 'Tasa de recompra, ventas totales',
      riesgoMitigado: 'Pérdida de clientes fidelizables',
    },
    {
      accion: 'Diversificar canales comerciales más allá del canal inmobiliario',
      porQue: '52.9% de dependencia en canal único es una vulnerabilidad estructural',
      areaLider: 'Comercial',
      kpi: '% ventas por canal secundario',
      riesgoMitigado: 'Concentración de ventas',
    },
    {
      accion: 'Mejorar captura de feedback post-venta (91.7% sin comentario)',
      porQue: 'Sin feedback cualitativo no se pueden detectar mejoras concretas en el proceso',
      areaLider: 'Postventa',
      kpi: '% encuestas con comentario completo',
      riesgoMitigado: 'Ceguera operativa',
    },
  ],
};
