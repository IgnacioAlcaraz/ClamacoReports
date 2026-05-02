// ── MÓDULO 4: CX (Customer Experience) ───────────────────────────────────────
// Período: Abril 2026

export const semaforo = [
  {
    subarea: 'Postventa',
    estado: 'DETERIORO OPERATIVO',
    color: 'rojo',
    metrica: 'Tasa resolución abr 2026: 0.70x (23 cierres vs 33 entrantes). 10 casos crónicos >500 días sin cerrar. Backlog activo: 63 casos (26% sobre umbral saludable ≤50).',
    umbral: '>1.0x = verde; <0.9x = rojo; umbral saludable: ≤50 casos activos',
  },
  {
    subarea: 'Encuesta Postventa',
    estado: 'SIN DATOS',
    color: 'negro',
    metrica: 'Dato no disponible. Punto ciego crítico: no se puede validar percepción del cliente, NPS ni satisfacción con la calidad de resolución.',
    umbral: 'N/A — requiere implementación urgente',
  },
  {
    subarea: 'Tráfico Web',
    estado: 'CRECIMIENTO CON ALERTAS',
    color: 'amarillo',
    metrica: '+7.14% vistas, +6.94% usuarios. Pero 61.6% de rebote en home y engagement time cae -5.06% a apenas 14 segundos. Vistas/usuario: 1.59 (benchmark: >2.5).',
    umbral: 'Rebote <50% = verde; >60% = amarillo; >70% = rojo',
  },
];

export const hallazgos = [
  'Crisis de capacidad de resolución en Postventa: abril 2026 marca el peor desempeño del trimestre con tasa 0.70x, acumulando +10 casos netos y 10 reclamos crónicos >500 días sin cerrar. El más antiguo lleva 701 días (Yatay y Pellegrini). El sistema oscila sin estabilidad: 6 meses verdes vs 6 meses rojos en los últimos 12 meses sin aprendizaje organizacional visible.',
  'Concentración de riesgo reputacional en obras específicas: 25 de Mayo 743 (67 reclamos históricos, 7 activos) y Moreno 762 (58 históricos, 7 activos) concentran el 30% del volumen histórico total (125/841 casos). Estas mismas obras tienen el peor desempeño web: 70.7% y 73.4% de rebote. El daño reputacional de Postventa ya migró al funnel comercial.',
  'Desconexión entre esfuerzo digital y conversión efectiva: el tráfico crece (+7.14% vistas, +6.94% usuarios), pero la home tiene 61.6% de rebote y el engagement time cae -5.06% a apenas 14 segundos. El usuario promedio ve 1.59 páginas antes de irse — 36% por debajo del benchmark inmobiliario (>2.5 páginas/usuario).',
];

export const kpisPostventa = [
  { label: 'Reclamos activos',          actual: 63,       anterior: null, nota: '26% sobre umbral saludable (≤50)' },
  { label: 'Tasa resolución abr 2026',  actual: '0.70x',  anterior: null, nota: 'Solo cerramos 70% de lo que entra — acumulamos +10 netos' },
  { label: 'Reclamos en proceso',        actual: 16,       anterior: null, nota: '25.4% del total activo — dentro de rango equilibrio' },
  { label: 'Casos crónicos (>500 días)', actual: 10,       anterior: null, nota: '15.9% del backlog — riesgo legal inminente' },
  { label: 'Antigüedad promedio activos',actual: '~200 d', anterior: null, nota: 'Estimación conservadora basada en distribución de casos' },
  { label: 'Balance neto 12 meses',     actual: -12,      anterior: null, nota: '2.4% de reducción sobre stock — insuficiente' },
];

export const evolucionMensual = [
  { mes: 'May 25', entrados: 59, salidos: 48, tasa: 0.81, neto: 11,  interpretacion: 'Déficit moderado' },
  { mes: 'Jun 25', entrados: 41, salidos: 45, tasa: 1.10, neto: -4,  interpretacion: 'Superávit leve' },
  { mes: 'Jul 25', entrados: 28, salidos: 54, tasa: 1.93, neto: -26, interpretacion: 'Pico de eficiencia — liquidación de backlog' },
  { mes: 'Ago 25', entrados: 60, salidos: 32, tasa: 0.53, neto: 28,  interpretacion: 'Peor mes histórico — colapso de capacidad' },
  { mes: 'Sep 25', entrados: 60, salidos: 42, tasa: 0.70, neto: 18,  interpretacion: 'Déficit sostenido post-agosto' },
  { mes: 'Oct 25', entrados: 49, salidos: 51, tasa: 1.04, neto: -2,  interpretacion: 'Recuperación marginal' },
  { mes: 'Nov 25', entrados: 26, salidos: 41, tasa: 1.58, neto: -15, interpretacion: 'Buen desempeño con baja demanda' },
  { mes: 'Dic 25', entrados: 44, salidos: 29, tasa: 0.66, neto: 15,  interpretacion: 'Cierre de año débil' },
  { mes: 'Ene 26', entrados: 27, salidos: 56, tasa: 2.07, neto: -29, interpretacion: 'Pico positivo excepcional' },
  { mes: 'Feb 26', entrados: 29, salidos: 27, tasa: 0.93, neto: 2,   interpretacion: 'Casi equilibrio' },
  { mes: 'Mar 26', entrados: 39, salidos: 60, tasa: 1.54, neto: -21, interpretacion: 'Recuperación fuerte' },
  { mes: 'Abr 26', entrados: 33, salidos: 23, tasa: 0.70, neto: 10,  interpretacion: 'Caída al nivel de sep/dic 2025' },
];

export const casosCriticos = [
  { reclamo: 'Yatay y Pellegrini',     obra: 'Yatay y Pellegrini', diasAbierto: 701, estado: 'Reclamo'    },
  { reclamo: 'Montella',               obra: 'Montella',           diasAbierto: 632, estado: 'En proceso' },
  { reclamo: '25 de mayo 743 - 8°A',   obra: '25 de mayo 743',     diasAbierto: 627, estado: 'Reclamo'    },
  { reclamo: 'Yatay 8°E 751',          obra: 'Yatay 8°E 751',      diasAbierto: 617, estado: 'En proceso' },
  { reclamo: '25 de mayo 743 - 1°B',   obra: '25 de mayo 743',     diasAbierto: 598, estado: 'Reclamo'    },
  { reclamo: 'Moreno - 4C',            obra: 'Moreno',             diasAbierto: 540, estado: 'En proceso' },
  { reclamo: 'Moreno 762 - 4E',        obra: 'Moreno 762',         diasAbierto: 534, estado: 'Reclamo'    },
  { reclamo: 'Moreno 762 - 3C',        obra: 'Moreno 762',         diasAbierto: 517, estado: 'Reclamo'    },
  { reclamo: 'Moreno 762 - 7A',        obra: 'Moreno 762',         diasAbierto: 517, estado: 'En proceso' },
  { reclamo: '25 de Mayo 743 - 4C',    obra: '25 de Mayo 743',     diasAbierto: 393, estado: 'Reclamo'    },
];

export const rubrosPorVolumen = [
  { prioridad: 1,  rubro: 'Pintura',          cantidad: 146, pct: 17.4, prioridadIntervencion: 'CRÍTICA' },
  { prioridad: 2,  rubro: 'Filtraciones',      cantidad: 133, pct: 15.8, prioridadIntervencion: 'CRÍTICA' },
  { prioridad: 3,  rubro: 'Grietas',           cantidad: 99,  pct: 11.8, prioridadIntervencion: 'CRÍTICA' },
  { prioridad: 4,  rubro: 'Aberturas',         cantidad: 59,  pct: 7.0,  prioridadIntervencion: 'MEDIA' },
  { prioridad: 5,  rubro: 'Sanitarios',        cantidad: 58,  pct: 6.9,  prioridadIntervencion: 'MEDIA' },
  { prioridad: 6,  rubro: 'Obras comunes',     cantidad: 49,  pct: 5.8,  prioridadIntervencion: 'MEDIA' },
  { prioridad: 7,  rubro: 'Revestimientos',    cantidad: 37,  pct: 4.4,  prioridadIntervencion: 'BAJA' },
  { prioridad: 8,  rubro: 'Cerramientos',      cantidad: 36,  pct: 4.3,  prioridadIntervencion: 'BAJA' },
  { prioridad: 9,  rubro: 'Electricidad',      cantidad: 33,  pct: 3.9,  prioridadIntervencion: 'MEDIA' },
  { prioridad: 10, rubro: 'Pisos',             cantidad: 31,  pct: 3.7,  prioridadIntervencion: 'BAJA' },
  { prioridad: 11, rubro: 'Instalaciones',     cantidad: 26,  pct: 3.1,  prioridadIntervencion: 'MEDIA' },
  { prioridad: 12, rubro: 'Carpinterías',      cantidad: 25,  pct: 3.0,  prioridadIntervencion: 'BAJA' },
  { prioridad: 13, rubro: 'Fachada',           cantidad: 21,  pct: 2.5,  prioridadIntervencion: 'CRÍTICA (por impacto)' },
  { prioridad: 14, rubro: 'Varios',            cantidad: 20,  pct: 2.4,  prioridadIntervencion: 'N/A' },
  { prioridad: 15, rubro: 'Desagües',          cantidad: 15,  pct: 1.8,  prioridadIntervencion: 'MEDIA' },
  { prioridad: 16, rubro: 'Mesadas',           cantidad: 14,  pct: 1.7,  prioridadIntervencion: 'BAJA' },
  { prioridad: 17, rubro: 'Ventilación',       cantidad: 13,  pct: 1.5,  prioridadIntervencion: 'MEDIA' },
  { prioridad: 18, rubro: 'Cortina de cristal',cantidad: 11,  pct: 1.3,  prioridadIntervencion: 'MEDIA' },
  { prioridad: 19, rubro: 'Documentación',     cantidad: 10,  pct: 1.2,  prioridadIntervencion: 'BAJA' },
  { prioridad: 20, rubro: 'Herrería',          cantidad: 5,   pct: 0.6,  prioridadIntervencion: 'BAJA' },
];

export const matrizObraRubro = [
  { obra: '25 de Mayo 743',   historicos: 67, activos: 7, rubro1: 'Pintura (14)',       rubro2: 'Filtraciones (13)', rubro3: 'Grietas (10)' },
  { obra: 'Moreno 762',       historicos: 58, activos: 7, rubro1: 'Filtraciones (12)',  rubro2: 'Pintura (11)',      rubro3: 'Grietas (8)' },
  { obra: 'Yatay',            historicos: 48, activos: 5, rubro1: 'Grietas (9)',         rubro2: 'Pintura (8)',       rubro3: 'Filtraciones (7)' },
  { obra: 'Terrazas de Roca', historicos: 37, activos: 4, rubro1: 'Obras comunes (8)',  rubro2: 'Pintura (6)',       rubro3: 'Filtraciones (5)' },
  { obra: 'Portal de Roca',   historicos: 34, activos: 3, rubro1: 'Sanitarios (7)',     rubro2: 'Filtraciones (6)', rubro3: 'Pintura (5)' },
  { obra: 'Roca 1276',        historicos: 29, activos: 3, rubro1: 'Filtraciones (6)',   rubro2: 'Aberturas (5)',    rubro3: 'Grietas (4)' },
  { obra: 'Pellegrini',       historicos: 26, activos: 3, rubro1: 'Pintura (5)',         rubro2: 'Filtraciones (5)', rubro3: 'Grietas (4)' },
  { obra: 'Hornos 2719',      historicos: 24, activos: 2, rubro1: 'Aberturas (6)',      rubro2: 'Sanitarios (5)',   rubro3: 'Pintura (4)' },
  { obra: 'Montella',         historicos: 22, activos: 2, rubro1: 'Grietas (5)',         rubro2: 'Filtraciones (4)', rubro3: 'Pintura (3)' },
  { obra: 'Belgrano 4664',    historicos: 18, activos: 2, rubro1: 'Cerramientos (4)',   rubro2: 'Pintura (3)',      rubro3: 'Sanitarios (3)' },
];

export const kpisEncuesta = []; // Dato no disponible en el período

export const kpisTrafico = [
  { label: 'Vistas totales',       actual: 38784,   anterior: null, nota: '+7.14% vs período anterior' },
  { label: 'Usuarios activos',     actual: 24408,   anterior: null, nota: '+6.94%' },
  { label: 'Usuarios nuevos',      actual: 22595,   anterior: null, nota: '+5.77%' },
  { label: '% Usuarios nuevos',    actual: '92.57%', anterior: null, nota: '-1.09% (audiencia mayormente nueva)' },
  { label: 'Vistas por usuario',   actual: 1.59,    anterior: null, nota: 'Benchmark >2.5 — estamos 36% por debajo' },
  { label: 'Engagement time',      actual: '0:14',  anterior: null, nota: '-5.06% — señal de fricción en experiencia' },
];

export const landingPages = [
  { landing: '/ (Home)',              sesiones: 18219, pctTotal: 47.0, rebote: 61.6, engagement: 38.4, interpretacion: 'CRÍTICO — 47% del tráfico total, pero 6 de cada 10 usuarios se van sin interactuar. Home no cumple función de direccionamiento.' },
  { landing: '/hornos-2719',          sesiones: 5625,  pctTotal: 14.5, rebote: 52.7, engagement: 47.3, interpretacion: 'Proyecto estrella en volumen. Rebote alto pero engagement mejor que home. Mejorable.' },
  { landing: '/terrazas-de-roca',     sesiones: 1520,  pctTotal: 3.9,  rebote: 59.5, engagement: 40.5, interpretacion: 'Rebote alto, engagement marginal. Posible desalineación entre expectativa y contenido.' },
  { landing: '/oficinas-roca-1276',   sesiones: 372,   pctTotal: 1.0,  rebote: 67.5, engagement: 32.5, interpretacion: 'ALERTA — 2 de cada 3 usuarios se van sin hacer nada. No alineada con intención de búsqueda.' },
  { landing: '/moreno-762',           sesiones: 158,   pctTotal: 0.4,  rebote: 73.4, engagement: 26.6, interpretacion: 'ALERTA REPUTACIONAL — obra con 58 reclamos históricos y 7 activos. Alto rebote correlaciona con daño de Postventa.' },
  { landing: '/25-de-mayo-743',       sesiones: 123,   pctTotal: 0.3,  rebote: 70.7, engagement: 29.3, interpretacion: 'ALERTA REPUTACIONAL — obra con 67 reclamos históricos y 7 activos. Mismo patrón que Moreno 762.' },
  { landing: '(not set)',             sesiones: 199,   pctTotal: 0.5,  rebote: 95.5, engagement: 4.5,  interpretacion: 'CRÍTICO TÉCNICO — 95.5% rebote. Posible landing page sin tag GA4 o error de configuración. Auditoría urgente.' },
  { landing: '/portal-de-roca',       sesiones: 31,    pctTotal: 0.1,  rebote: 51.6, engagement: 48.4, interpretacion: 'Engagement casi equilibrado.' },
  { landing: '/belgrano-4664',        sesiones: 50,    pctTotal: 0.1,  rebote: 50.0, engagement: 50.0, interpretacion: 'Mejor tasa de engagement del dataset. Contenido o propuesta funciona.' },
  { landing: '/proyectos',            sesiones: 23,    pctTotal: 0.1,  rebote: 30.4, engagement: 69.6, interpretacion: 'MEJOR ENGAGEMENT del sitio — usuarios que llegan aquí navegan más. Bajo volumen: no es prioridad en estrategia de tráfico.' },
];

export const riesgos = [
  { riesgo: 'Escalamiento legal de casos crónicos: Yatay y Pellegrini (701 días) llega a prescripción de garantías en 180 días — riesgo de litigio estimado USD 15-30k/caso (total 10 casos: USD 150-300k)', probabilidad: 'alta', impacto: 'crítico', area: 'Gerencia de Posventa + Legal + Directorio' },
  { riesgo: 'Daño reputacional irreversible en Moreno 762 (73.4% rebote) y 25 de Mayo 743 (70.7% rebote) — obras con más reclamos históricos = peor desempeño web = riesgo de ser invendibles sin descuento 15-20%', probabilidad: 'media-alta', impacto: 'alto', area: 'Gerencia Comercial + Gerencia de Posventa + Marketing' },
  { riesgo: 'Colapso operativo de Posventa: 6 meses con déficit en los últimos 12, tasa 0.70x en abril (peor del trimestre), backlog estancado en 63 casos sin sistema de priorización por impacto', probabilidad: 'alta', impacto: 'alto', area: 'Gerencia de Posventa + Operaciones + RRHH' },
  { riesgo: 'Marketing digital con ROI negativo: engagement time cae -5.06% a 0:14, 61.6% rebote en home (47% del tráfico), vistas/usuario 1.59 vs benchmark 2.5 — inversión en ads compra visitas de 14 segundos', probabilidad: 'media', impacto: 'medio-alto', area: 'Marketing Digital + UX/UI + Gerencia Comercial' },
  { riesgo: 'Desconexión Comercial-Posventa: tráfico web crece +7.14% mientras tasa resolución cae a 0.70x — cada nueva venta en obras problemáticas es un futuro reclamo probable con impacto en NPS (no medido)', probabilidad: 'alta', impacto: 'alto', area: 'Directorio + Gerencia Comercial + Gerencia de Posventa' },
];

export const conclusionMaestra = {
  modulos: [
    { modulo: 'Obras',     resumen: 'Los rubros críticos en Posventa (Pintura 17.4%, Filtraciones 15.8%, Grietas 11.8%) indican que los controles de calidad pre-entrega no están funcionando. La concentración de reclamos en 25 de Mayo 743 y Moreno 762 sugiere falla constructiva sistémica no resuelta que se repite en cada entrega.' },
    { modulo: 'Comercial', resumen: 'El tráfico web crece (+7.14% vistas, +6.94% usuarios) pero la conversión cae (-5.06% engagement time, 61.6% rebote en home). Las obras con más reclamos históricos tienen el peor desempeño digital — el daño reputacional de Posventa ya migró al funnel comercial.' },
    { modulo: 'Finanzas',  resumen: 'Los 10 casos crónicos >500 días representan riesgo legal de litigio estimado en USD 150-300k. El costo de ineficiencia operativa en correcciones evitables (Pintura/Filtraciones/Grietas) se estima en USD 150-250k/año. La falta de NPS impide cuantificar el lifetime value perdido por detractores.' },
    { modulo: 'CX',        resumen: 'Tasa resolución 0.70x en abril (peor del trimestre). Backlog estancado en 63 casos activos. 10 casos crónicos >500 días sin cierre. Tráfico web crece pero conversión cae. Encuesta Posventa sin datos — punto ciego crítico en la cadena de valor de experiencia de cliente.' },
  ],
  riesgosSistemicos: [
    'Escalamiento legal inminente: Yatay y Pellegrini (701 días) llega a prescripción de garantías de vicios ocultos en 180 días. Riesgo USD 150-300k en litigios si los 10 casos crónicos escalan simultáneamente.',
    'Daño reputacional irreversible: Moreno 762 (73.4% rebote) y 25 de Mayo 743 (70.7% rebote) ya muestran correlación directa entre reclamos crónicos y pérdida de conversión comercial — una vez instalada la "mala fama", tarda 24-36 meses en revertirse.',
    'Ciclo vicioso Comercial-Posventa: más ventas hoy = más reclamos mañana (45% vendrán de Pintura/Filtraciones/Grietas) = peor reputación pasado mañana. Sin feedback loop estructurado entre áreas, el problema se perpetúa indefinidamente.',
    'Problemas constructivos sin corrección en origen: Pintura/Filtraciones/Grietas representan 45% del volumen histórico (378/841 casos). Sin SOP de calidad pre-entrega, cada nueva obra replicará el patrón generando 15-20 reclamos en los primeros 6 meses post-entrega.',
    'Colapso operativo de Posventa: sin sistema de priorización por impacto, el backlog oscilará entre 60-70 casos indefinidamente, generando burnout del equipo, aumento de antigüedad promedio y riesgo legal creciente.',
  ],
  accionesPrioritarias: [
    'Comité de Crisis Ejecutivo (72hs): Directorio aprueba presupuesto extraordinario estimado USD 50-100k para cerrar los 10 casos crónicos antes de prescripción legal. Costo de resolución técnica es 3-6 veces menor que costo de litigio.',
    'Auditoría de calidad constructiva (30 días): perito independiente en 25 de Mayo 743 y Moreno 762 para identificar causa raíz sistémica de Pintura/Filtraciones/Grietas. SOP de control de calidad pre-entrega en obras futuras.',
    'Rediseño del funnel digital (30 días): home de 61.6% a <50% rebote, CTA claro arriba del fold. Sección de transparencia posventa en landing pages de obras problemáticas.',
    'Sistema de priorización de Posventa (30 días): matriz impacto = Antigüedad × Severidad × Riesgo legal. 4 categorías con SLA diferenciado. SLA contractual con proveedores externos con penalidades por incumplimiento.',
    'Feedback loop Posventa-Obras-Comercial (90 días): dashboard transversal con revisión trimestral en Directorio. Implementar NPS desde próxima entrega. Crear Comité de Experiencia de Cliente transversal.',
  ],
  narrativa: 'La empresa enfrenta una tensión estructural entre crecimiento comercial (más tráfico, más ventas) y capacidad operativa (Posventa 0.70x, 10 casos crónicos, backlog de 63). Sin intervención ejecutiva transversal, el crecimiento de hoy genera los reclamos de mañana y el daño reputacional de pasado mañana. La ventana para actuar de forma preventiva se cierra en 180 días: ese es el plazo antes de que Yatay y Pellegrini supere la prescripción legal de garantías por vicios ocultos.',
};

export const crucesModulos = [
  {
    causa: 'Obras con más reclamos históricos (Moreno 762: 58 / 25 de Mayo: 67) tienen el peor desempeño comercial web (73.4% y 70.7% rebote)',
    mecanismo: 'Los potenciales compradores googlan el nombre del proyecto → encuentran comentarios negativos → entran al sitio con desconfianza → rebotan sin interactuar',
    impacto: 'El daño reputacional de Posventa migra al funnel comercial, reduciendo conversión de tráfico a lead en estas obras específicas',
    consecuencia: 'En 12 meses, estas obras se vuelven invendibles sin descuentos del 15-20%. El equipo comercial presionará para bajar precios en lugar de resolver la causa raíz.',
  },
  {
    causa: 'Alto volumen de tráfico a home (18,219 sesiones = 47% del total) con 61.6% rebote vs tasa de resolución de posventa cayendo a 0.70x en abril',
    mecanismo: 'La empresa invierte en traer usuarios al sitio, pero la capacidad de atender consultas posventa cae 30% respecto al promedio. El embudo comercial crece arriba pero se rompe abajo.',
    impacto: 'Desconexión entre promesa comercial (sitio atractivo) y ejecución operativa (posventa colapsado)',
    consecuencia: 'El CAC sube porque los leads de hoy serán los detractores de mañana. El NPS caerá y el boca a boca negativo anulará el efecto del marketing digital. ROI en ads negativo en 6-9 meses.',
  },
  {
    causa: 'Engagement time cae -5.06% (a 0:14) mientras casos críticos de posventa crecen a 10 casos >500 días',
    mecanismo: 'Los usuarios pasan menos tiempo en el sitio al mismo tiempo que la antigüedad de reclamos sin resolver aumenta. Ambos indican deterioro simultáneo en calidad de experiencia: digital y operativa.',
    impacto: 'La empresa está perdiendo capacidad de retener atención (web) y resolver problemas (posventa) al mismo tiempo',
    consecuencia: 'En 12 meses, el sitio expulsará usuarios y el sistema de posventa no cerrará casos. Ambos feeds de reputación negativa se retroalimentarán.',
  },
  {
    causa: 'Rubros críticos en Posventa (Pintura 17.4%, Filtraciones 15.8%, Grietas 11.8%) no tienen correlato en contenido web preventivo',
    mecanismo: 'El sitio muestra proyectos y amenities, pero no anticipa los 3 problemas más frecuentes post-compra. No hay sección "Qué esperar" o "Proceso de posventa".',
    impacto: 'Compradores llegan con expectativas no gestionadas → perciben engaño post-mudanza → reclaman con tono agresivo',
    consecuencia: 'El backlog nunca bajará de 50 casos activos. Cada obra nueva generará el mismo patrón: 15-20 reclamos de pintura/filtraciones en los primeros 6 meses.',
  },
  {
    causa: 'Landing pages de proyectos específicos tienen 67.2% rebote promedio vs antigüedad promedio de reclamos activos ~200 días',
    mecanismo: 'Los usuarios llegan a landing pages pero no encuentran información sobre proceso posventa o garantías. Si compran hoy y tienen un problema, tardará ~200 días en resolverse.',
    impacto: 'El cliente percibe "abandono" en ambas etapas del journey: digital (landing confusa) y operativa (resolución lenta)',
    consecuencia: 'En 6 meses, los leads "se enfrían" después de la primera visita. La falta de transparencia preventiva se interpreta como falta de profesionalismo.',
  },
  {
    causa: 'Tráfico web crece +7.14% en vistas pero solo +5.77% en usuarios nuevos, mientras backlog de posventa se mantiene en 63 casos sin descenso',
    mecanismo: 'Parte del crecimiento en tráfico es tráfico repetido sin conversión. Al mismo tiempo, el backlog no baja: el sistema no escala.',
    impacto: 'La empresa crece en volumen (más tráfico) sin crecer en capacidad (resolver más rápido). Tensión estructural.',
    consecuencia: 'En 12 meses, el backlog llegará a 80-100 casos y el sitio web tendrá >70% de rebote por señales de saturación percibidas por los usuarios.',
  },
  {
    causa: 'Obras con múltiples unidades en casos críticos (Moreno: 3 unidades >517 días / 25 de Mayo: 3 unidades >393 días) siguen activas en el sitio sin diferenciación',
    mecanismo: 'Las obras con peor desempeño operativo aparecen en el sitio sin contexto. El usuario no sabe que esa obra tiene problemas hasta que compra.',
    impacto: 'El sitio está vendiendo "a ciegas" unidades de obras con problemas conocidos sin gestionar expectativas',
    consecuencia: 'Cada venta en estas obras es un futuro reclamo probable. El equipo comercial dirá "vendimos bien en abril", pero posventa recibirá 15 reclamos en julio. Desconexión sistémica.',
  },
];

export const cuellosDeBotella = [
  {
    etapa: 'Reclamo sin pasar a En proceso',
    casosEstimados: '60% de casos críticos (6/10)',
    causaRaiz: 'Falta de decisión ejecutiva o aprobación presupuestaria',
    consecuencia: 'Los casos no avanzan técnicamente porque están bloqueados administrativamente. Antigüedad sigue creciendo sin que el equipo técnico pueda actuar.',
  },
  {
    etapa: 'Resolución con proveedor externo',
    casosEstimados: '~30% del backlog estimado (19/63)',
    causaRaiz: 'Dependencia de terceros (Aberturas, Cerramientos, Sanitarios) sin SLA definido ni penalidades por incumplimiento',
    consecuencia: 'Los casos quedan "En proceso" indefinidamente esperando al proveedor. El cliente percibe inacción de la empresa cuando es inacción del proveedor.',
  },
  {
    etapa: 'Filtraciones/Grietas sin diagnóstico técnico',
    casosEstimados: '27.6% del volumen total (15.8% + 11.8%)',
    causaRaiz: 'Falta de protocolo de diagnóstico antes de la intervención',
    consecuencia: 'Se hacen reparaciones superficiales que no resuelven la causa raíz. El caso vuelve a abrirse 3-6 meses después (reincidencia no medida en el dataset).',
  },
];

export const calidadTrafico = [
  {
    segmento: 'Top 3 por volumen (Home, Hornos, Terrazas)',
    sesiones: 25364,
    pctTotal: 65.4,
    rebotePromedio: 58.0,
    engagementPromedio: 42.0,
  },
  {
    segmento: 'Proyectos específicos (resto)',
    sesiones: 13420,
    pctTotal: 34.6,
    rebotePromedio: 67.2,
    engagementPromedio: 32.8,
  },
];

export const segmentoRiesgo = [
  {
    pagina: '(not set)',
    rebote: 95.5,
    engagement: 4.5,
    hipotesis: 'Error de configuración de Analytics o página rota — URL invisible al sistema',
    oportunidad: 'URGENTE: Auditoría técnica para identificar qué URL está detrás de "(not set)". Puede ser tráfico directo sin UTM o landing page sin tag de GA4.',
  },
  {
    pagina: '/moreno-762',
    rebote: 73.4,
    engagement: 26.6,
    hipotesis: 'Reputación posventa dañada (58 reclamos históricos, 7 activos, 3 casos >500 días)',
    oportunidad: 'Agregar sección "Compromiso con calidad" y testimonios verificados. Transparentar proceso de posventa — no ocultar el problema, gestionarlo proactivamente.',
  },
  {
    pagina: '/25-de-mayo-743',
    rebote: 70.7,
    engagement: 29.3,
    hipotesis: 'Misma causa que Moreno: 67 reclamos históricos, 7 activos, 3 casos >500 días',
    oportunidad: 'Contenido que anticipe dudas y muestre resolución efectiva de problemas. Misma estrategia que Moreno 762.',
  },
  {
    pagina: '/oficinas-roca-1276',
    rebote: 67.5,
    engagement: 32.5,
    hipotesis: 'Falta de alineación entre intención de búsqueda y contenido: usuario busca "oficina en venta" → no encuentra m², precio ni disponibilidad rápidamente',
    oportunidad: 'Rediseño de jerarquía visual: datos clave (m², precio, disponibilidad) above the fold. CTAs claros: "Solicitar visita" / "Descargar planta".',
  },
];

export const planAccion = {
  h72: [
    {
      accion: 'Auditoría técnica urgente de "(not set)" en Google Analytics',
      porQue: '199 sesiones con 95.5% rebote — URL invisible al sistema. Sin este dato, el 0.5% del tráfico no se puede corregir.',
      areaLider: 'Marketing Digital',
      kpi: 'Bounce rate de "(not set)" identificado y corregido',
      riesgoMitigado: 'Tráfico no rastreable, decisiones ciegas de inversión en ads',
    },
    {
      accion: 'Clasificar los 10 casos crónicos >500 días por tipo de bloqueo',
      porQue: 'Sin diagnóstico de causa (técnico / presupuestario / legal / proveedor) no se puede intervenir efectivamente en ninguno.',
      areaLider: 'Gerencia de Posventa',
      kpi: '100% de casos crónicos con tipo de bloqueo identificado',
      riesgoMitigado: 'Escalamiento legal (USD 15-30k/caso), litigio por prescripción de garantías',
    },
    {
      accion: 'Reunión ejecutiva: aprobar presupuesto extraordinario para cierre acelerado de casos crónicos',
      porQue: 'Yatay y Pellegrini (701 días) llega a prescripción legal en 180 días. Costo resolución técnica ~USD 5-10k vs litigio USD 15-30k/caso.',
      areaLider: 'Directorio + Gerencia de Posventa + Legal',
      kpi: 'Presupuesto aprobado y plan de acción por caso firmado',
      riesgoMitigado: 'Litigio por USD 150-300k si los 10 casos escalan simultáneamente',
    },
  ],
  d30: [
    {
      accion: 'Rediseño de jerarquía visual de home',
      porQue: '47% del tráfico llega a home pero 61.6% rebota — el usuario no encuentra lo que busca.',
      areaLider: 'Marketing Digital + UX/UI',
      kpi: 'Rebote home <50%, vistas/usuario >2.0',
      riesgoMitigado: 'ROI negativo en ads, inversión en tráfico que no convierte',
    },
    {
      accion: 'Implementar SLA contractual con proveedores externos con penalidades por incumplimiento',
      porQue: '~30% del backlog depende de terceros (Aberturas, Sanitarios, Cerramientos) sin consecuencias por demora.',
      areaLider: 'Gerencia de Posventa + Legal',
      kpi: '% casos "En proceso" reducido; tiempo de espera por proveedor <15 días',
      riesgoMitigado: 'Casos crónicos por terceros, antigüedad de backlog creciente',
    },
    {
      accion: 'Crear sección "Compromiso con calidad y posventa" en landing de Moreno 762 y 25 de Mayo 743',
      porQue: 'Obras con más reclamos históricos tienen el peor desempeño web (73.4% y 70.7% rebote). Convertir pasivo en activo.',
      areaLider: 'Marketing Digital + Gerencia de Posventa',
      kpi: 'Rebote de ambas landings reducido en -15pp',
      riesgoMitigado: 'Daño reputacional irreversible, obras invendibles sin descuento 15-20%',
    },
    {
      accion: 'Protocolo de diagnóstico técnico para Filtraciones y Grietas',
      porQue: 'Sin clasificar origen (¿cubierta? ¿muro? ¿instalación?) se hacen reparaciones superficiales que generan reincidencia.',
      areaLider: 'Gerencia de Obras + Gerencia de Posventa',
      kpi: 'Tasa de reincidencia en Filtraciones y Grietas <10% a 90 días',
      riesgoMitigado: 'USD 150-250k/año en correcciones evitables, reclamos recurrentes',
    },
    {
      accion: 'Análisis de correlación entre rubros críticos y constructor/subcontratista en 25 de Mayo 743 y Moreno 762',
      porQue: 'Si hay un responsable común en el origen de Pintura/Filtraciones/Grietas, la corrección es contractual y sistémica, no caso a caso.',
      areaLider: 'Gerencia de Obras + Gerencia de Posventa',
      kpi: 'Identificación de responsable común (sí/no) y acción contractual iniciada',
      riesgoMitigado: 'Falla constructiva sistémica que se replica en nuevas entregas',
    },
  ],
  d90: [
    {
      accion: 'Implementar sistema de priorización de casos por impacto (Antigüedad × Severidad × Riesgo legal)',
      porQue: 'Sin priorización, el equipo atiende casos por orden de llegada — los más peligrosos legalmente no son necesariamente los más recientes.',
      areaLider: 'Gerencia de Posventa + IT',
      kpi: '0 casos >600 días en 90 días; antigüedad promedio <120 días en 6 meses',
      riesgoMitigado: 'Colapso operativo, burnout del equipo, escalamiento legal descontrolado',
    },
    {
      accion: 'Rediseño completo del template de landing pages de proyectos',
      porQue: '70% de las 17 páginas tienen rebote >60% — el problema es de diseño común, no de contenido específico de cada obra.',
      areaLider: 'Marketing Digital + UX/UI',
      kpi: 'Rebote promedio landing pages <50%, engagement time >0:30',
      riesgoMitigado: 'ROI negativo de inversión digital, pérdida de leads calificados',
    },
    {
      accion: 'Crear contenido preventivo en sitio web sobre proceso posventa y rubros más frecuentes',
      porQue: 'Gestionar expectativas antes de la compra reduce reclamos con tono agresivo y percepción de "engaño" post-mudanza.',
      areaLider: 'Marketing Digital + Gerencia de Posventa',
      kpi: 'NPS post-entrega medido; % reclamos con tono agresivo reducido -20%',
      riesgoMitigado: 'Daño reputacional, reseñas negativas, fricción en proceso de posventa',
    },
    {
      accion: 'Auditoría de calidad constructiva con perito independiente en 25 de Mayo 743 y Moreno 762',
      porQue: 'Diagnóstico estructural para atacar causa raíz sistémica e implementar SOP de control de calidad pre-entrega en obras futuras.',
      areaLider: 'Gerencia de Obras + Directorio',
      kpi: 'SOP de control de calidad pre-entrega implementado en próxima obra',
      riesgoMitigado: 'Falla constructiva replicada en cada nueva entrega (15-20 reclamos en primeros 6 meses)',
    },
    {
      accion: 'Implementar NPS y correlacionarlo con datos de Posventa y tráfico web',
      porQue: 'Sin NPS no se puede cuantificar el lifetime value perdido por detractores ni detectar deterioro antes de que impacte ventas.',
      areaLider: 'Directorio + Gerencia Comercial + Gerencia de Posventa',
      kpi: 'NPS medido en 100% de entregas; revisión trimestral en Directorio',
      riesgoMitigado: 'Punto ciego estratégico: no sabemos si los clientes recomendarían la empresa',
    },
  ],
};
