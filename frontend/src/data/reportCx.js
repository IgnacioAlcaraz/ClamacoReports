// ── MÓDULO 4: CX (Customer Experience) ───────────────────────────────────────
// Período: Marzo 2026

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
// color: 'green' | 'yellow' | 'orange' | 'red'
export const semaforo = [
  {
    subarea: 'Postventa',
    estado: 'Mejorando',
    color: 'green',
    metrica: 'Tasa de resolución 3.00x (Marzo 2026)',
    umbral: '>1.0 indica reducción de backlog',
  },
  {
    subarea: 'Encuesta Postventa',
    estado: 'Satisfactoria',
    color: 'green',
    metrica: '79.2% conforme / 69.8% atención "muy buena"',
    umbral: '>70% conforme es satisfactorio',
  },
  {
    subarea: 'Tráfico Web',
    estado: 'Peligro',
    color: 'yellow',
    metrica: 'Rebote página principal 62.5% / engagement -11.6%',
    umbral: '>60% rebote y caída >10% engagement = Amarillo',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'Tasa de resolución de postventa acelerada: en marzo 2026 la tasa de resoluciones superó ampliamente los casos entrantes (3.00x), reduciendo el stock de reclamos a 57 activos.',
  'Satisfacción cliente robusta pero frágil en ciertos segmentos: 79.2% de conformidad y 71.7% con tiempo de resolución esperado, pero un 18.9% insatisfecho constituye un riesgo de reputación latente.',
  'Presión digital por experiencia deficiente en la landing principal: altísima tasa de rebote (62.5%) y caída de engagement (-11.6%) limitan la conversión de leads y la satisfacción global.',
];

// ── POSTVENTA — KPIs GLOBALES ─────────────────────────────────────────────────
export const kpisPostventa = [
  { label: 'Reclamos activos',         actual: 57,   anterior: null, unidad: '',  tendenciaBuena: 'down' },
  { label: 'En proceso',               actual: 19,   anterior: null, unidad: '',  tendenciaBuena: 'down' },
  { label: 'Cerrados históricos',      actual: 726,  anterior: 639,  unidad: '',  tendenciaBuena: 'up' },
  { label: 'Tasa resolución (Mar 26)', actual: 3.00, anterior: 0.93, unidad: 'x', tendenciaBuena: 'up' },
];

// ── EVOLUCIÓN MENSUAL ─────────────────────────────────────────────────────────
export const evolucionMensual = [
  { mes: 'Febrero 2026', entrados: 29, salidos: 27, tasa: 0.93, neto: -2,  interpretacion: 'Preocupante: resolución menor que ingresos' },
  { mes: 'Marzo 2026',   entrados: 14, salidos: 42, tasa: 3.00, neto: -28, interpretacion: 'Mejor mes: backlog disminuye claramente' },
];

// ── CASOS CRÍTICOS POR ANTIGÜEDAD ─────────────────────────────────────────────
export const casosCriticos = [
  { reclamo: 'N/D', obra: 'Yatay y Pellegrini', diasAbierto: 656, estado: 'Abierto' },
];

// ── RANKING DE RUBROS POR VOLUMEN ─────────────────────────────────────────────
export const rubrosPorVolumen = [
  { rubro: 'Humedad y Filtraciones', cantidad: 232, pct: 29.6, prioridad: 1 },
  { rubro: 'Otros',                  cantidad: 202, pct: 25.8, prioridad: 2 },
];

// ── ENCUESTA POSTVENTA — KPIs ─────────────────────────────────────────────────
export const kpisEncuesta = [
  { label: 'Total respuestas',                actual: 53,   anterior: 52,   unidad: '',  tendenciaBuena: 'up' },
  { label: 'Conformidad con servicio ("Sí")', actual: 79.2, anterior: 78.8, unidad: '%', tendenciaBuena: 'up' },
  { label: 'No conformes ("No")',             actual: 18.9, anterior: 19.2, unidad: '%', tendenciaBuena: 'down' },
  { label: 'Atención "Muy Buena"',            actual: 69.8, anterior: 69.2, unidad: '%', tendenciaBuena: 'up' },
  { label: 'Tiempo resolución cumplido',      actual: 71.7, anterior: 71.2, unidad: '%', tendenciaBuena: 'up' },
];

// ── TRÁFICO WEB — KPIs GLOBALES ───────────────────────────────────────────────
export const kpisTrafico = [
  { label: 'Vistas totales',       actual: 35387, anterior: 34934, unidad: '',  tendenciaBuena: 'up' },
  { label: 'Usuarios activos',     actual: 23208, anterior: 22576, unidad: '',  tendenciaBuena: 'up' },
  { label: 'Engagement time (seg)', actual: 23,   anterior: 26,    unidad: 's', tendenciaBuena: 'up' },
];

// ── TRÁFICO WEB — LANDING PAGES ───────────────────────────────────────────────
export const landingPages = [
  { landing: '/',            sesiones: 15453, pctTotal: 43.7, rebote: 62.5, engagement: 37.5, interpretacion: 'Dominante pero vulnerable, alto rebote' },
  { landing: '/hornos-2719', sesiones: 5359,  pctTotal: 15.1, rebote: 46.0, engagement: 54.0, interpretacion: 'Equilibrado, buena retención' },
  { landing: '/proyectos',   sesiones: 26,    pctTotal: 0.07, rebote: 27.0, engagement: 73.0, interpretacion: 'Mejor performance, pero muy poco tráfico' },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
// probabilidad / impacto: 'alta' | 'media' | 'baja'
export const riesgos = [
  {
    riesgo: 'Persistencia de backlog en reclamos antiguos (casos >656 días)',
    probabilidad: 'media',
    impacto: 'alta',
    area: 'Operaciones / Postventa',
    consecuencia: 'Daño reputacional sostenido y riesgo de litigios',
  },
  {
    riesgo: 'Segmento insatisfecho estable (18.9% no conforme)',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Postventa / Comercial',
    consecuencia: 'Genera detractores que erosionan recomendación y ventas futuras',
  },
  {
    riesgo: 'Rebote alto (62.5%) y caída de engagement web (-11.6%)',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Marketing / Digital',
    consecuencia: 'Limita generación de leads calificados y percepción de marca digital',
  },
  {
    riesgo: 'Inconsistencia en asignación de responsables de reclamos',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Operaciones',
    consecuencia: 'Cuello de botella persistente y dificultad de reacción ágil',
  },
  {
    riesgo: 'Muestra limitada y posible error metodológico en encuesta (53 casos)',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Comercial / CX',
    consecuencia: 'Ceguera estratégica: no permite segmentar oportunidades de mejora',
  },
];

// ── CONCLUSIÓN MAESTRA DEL REPORTE COMPLETO ───────────────────────────────────
export const conclusionMaestra = {
  modulos: [
    {
      modulo: 'Obras',
      resumen: 'Subsisten focos de reclamos antiguos, especialmente en "Yatay y Pellegrini" y "San Martín 861", donde patologías de humedad demandan atención prioritaria.',
    },
    {
      modulo: 'Comercial',
      resumen: 'La percepción de calidad postventa se mantiene robusta (79.2% satisfacción), aunque persisten focos de insatisfacción ligados a demoras. El canal digital crece en tráfico pero requiere intervención para traducir visitas en conversión.',
    },
    {
      modulo: 'Finanzas',
      resumen: 'Dato no disponible en el documento fuente.',
    },
    {
      modulo: 'CX',
      resumen: 'Tasa de resolución supera ingreso de incidentes (3.00x marzo), bajando stock activo; sin embargo, segmentos insatisfechos y cuellos de botella técnicos pueden minar la fidelidad si no se actúa con inmediatez.',
    },
  ],
  riesgosSistemicos: [
    'Persistencia de reclamos antiguos: casos sin resolución en años (>656 días) perpetúan daño reputacional.',
    'Concentración de insatisfacción en ciertos rubros: alta incidencia en "Humedad y filtraciones"/instalaciones refleja fragilidad en calidad constructiva.',
    'Desalineación entre experiencia digital y real: alto rebote web indica inconsistencia en la propuesta de valor de marca.',
    'Deficiente trazabilidad: falta de información actualizada sobre responsables genera ceguera operativa.',
    'Segmento insatisfecho persistente: el 18.9% no conforme puede convertirse en fuente de reputación negativa.',
  ],
  accionesPrioritarias: [
    'Resolver backlog histórico asignando responsables visibles y acelerando cierre de casos antiguos.',
    'Rediseñar e intervenir procesos sobre rubros y obras de mayor volumen de reclamos ("Humedad y filtraciones", "San Martín 861", "Yatay y Pellegrini").',
    'Capacitar a fondo equipos de postventa y mantenimiento para elevar calidad y rapidez de respuestas.',
    'Rediseñar la landing principal del sitio, alineando experiencia digital con los valores y servicio prometidos.',
    'Implementar seguimiento proactivo y cruzar sistemáticamente resultados de postventa, encuestas y analytics.',
  ],
  narrativa: 'La empresa se encuentra en un punto de equilibrio precario, con logros concretos en reducción de backlog y satisfacción visible en mayoría de clientes, pero expuesta a riesgos significativos de reputación y eficiencia operativa. Las tensiones detectadas —en procesos no automatizados, segmentos insatisfechos y la desconexión experiencia digital-real— requieren soluciones de raíz y gobernanza más integrada y ágil.',
};

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Contactar proactivamente a los clientes insatisfechos del último mes',
      porQue: 'Ataque inmediato al 18.9% de insatisfacción para evitar daño reputacional',
      areaLider: 'Postventa',
      kpi: '% clientes conformes',
      riesgoMitigado: 'Segmento insatisfecho reputacional',
    },
    {
      accion: 'Auditar casos abiertos >365 días y asignar responsable explícito',
      porQue: 'Casos antiguos impactan reputación y confianza del comprador',
      areaLider: 'Operaciones',
      kpi: 'Stock reclamos antiguos',
      riesgoMitigado: 'Persistencia de backlog',
    },
    {
      accion: 'Revisar copy y UX de la landing principal del sitio web',
      porQue: 'Alto rebote (62.5%) con oportunidad de mejora temprana y bajo costo',
      areaLider: 'Marketing / Digital',
      kpi: 'Engagement y tasa de rebote',
      riesgoMitigado: 'Baja conversión web',
    },
  ],
  d30: [
    {
      accion: 'Implementar capacitación técnica intensiva de mantenimiento',
      porQue: 'Encuesta revela falencias en técnica y rapidez de resolución',
      areaLider: 'Postventa / Recursos Humanos',
      kpi: 'Satisfacción técnica y tiempos',
      riesgoMitigado: 'Brecha entre expectativa y servicio',
    },
    {
      accion: 'Redefinir procesos para atacar "Humedad y filtraciones" (rubro #1)',
      porQue: 'Mayor volumen de reclamos y principal driver de backlog',
      areaLider: 'Operaciones',
      kpi: '% reclamos resueltos Humedad',
      riesgoMitigado: 'Ciclo vicioso de saturación operativa',
    },
    {
      accion: 'Instaurar protocolo de seguimiento post-cierre de reclamos',
      porQue: 'Aumentar confianza y percepción de resolución en el cliente',
      areaLider: 'CX / Comercial',
      kpi: '% satisfacción con seguimiento',
      riesgoMitigado: 'Brecha percepción/realidad',
    },
    {
      accion: 'Relanzar encuesta postventa corregida y segmentada por obra',
      porQue: 'Dataset actual de 53 casos es insuficiente para decisiones granulares',
      areaLider: 'CX',
      kpi: 'Volumen y precisión de insights',
      riesgoMitigado: 'Ceguera estratégica',
    },
  ],
  d90: [
    {
      accion: 'Rediseño integral de la landing principal y journeys clave',
      porQue: 'Rebote sostenido requiere impacto duradero, no solo ajustes cosméticos',
      areaLider: 'Digital',
      kpi: 'Tasa de rebote / Engagement',
      riesgoMitigado: 'Dificultad para convertir leads',
    },
    {
      accion: 'Automatización del seguimiento de reclamos postventa',
      porQue: 'Eficiencia y trazabilidad para evitar acumulación de backlog futuro',
      areaLider: 'IT / Postventa',
      kpi: 'Tiempo de ciclo de reclamo',
      riesgoMitigado: 'Backlog estructural',
    },
    {
      accion: 'Cross-check mensual Postventa – Encuesta – Tráfico Web',
      porQue: 'Activar loop de feedback y alerta temprana ante focos emergentes',
      areaLider: 'CX / Data',
      kpi: 'Tiempo de reacción ante focos',
      riesgoMitigado: 'Ceguera y latencia en problemas',
    },
  ],
};
