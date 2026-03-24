// ── MÓDULO 2: COMERCIAL ───────────────────────────────────────────────────────
// Período: Marzo 2026

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
// color: 'green' | 'yellow' | 'orange' | 'red'
export const semaforo = [
  {
    subarea: 'Ventas x periodo',
    estado: 'Descalzado',
    color: 'red',
    metrica: 'Gap promedio ventas/avance: 88.7% vs 90.9% (Δ = -2.2%)',
    umbral: 'Ventas = avance (±2%)',
  },
  {
    subarea: 'Ventas y reservas',
    estado: 'En vigilancia',
    color: 'yellow',
    metrica: 'Caída YoY boletos: 141→48 (-65.9%), reservas: 135→69 (-48.9%)',
    umbral: 'No caída >30% YoY',
  },
  {
    subarea: 'Firma boleto',
    estado: 'Con observaciones',
    color: 'yellow',
    metrica: '76.2% recompra, 69% satisfacción "Muy Buena", 54.8% cumplimiento de plazos',
    umbral: 'Satisfacción >80%, cumplimiento plazos >70%',
  },
  {
    subarea: 'Emblue',
    estado: 'Bajo estándar',
    color: 'orange',
    metrica: 'Bounce rate hasta 16.6% (umbral <3%), Open rate en 2/3 campañas <10%',
    umbral: 'Bounce <3%, Open >20%',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'Descalce crítico en obras terminadas: Proyectos como ROCA 1276 y Bustillo 357 exhiben grandes brechas entre avance físico y ventas, generando inmovilización de capital y potencial déficit de caja.',
  'Debilidad en generación y gestión de leads: el embudo de ventas disminuyó interanualmente más del 50% en boletos y reservas, señalando caída en oportunidades comerciales y posible agotamiento de la base de captación.',
  'Problemas de entregabilidad en email marketing: bounce rate de hasta 16.6% y campañas por debajo del benchmark limitan la capacidad de adquisición y calentamiento de leads.',
];

// ── BRECHA AVANCE VS. VENTAS ──────────────────────────────────────────────────
export const brechaAvance = [
  { obra: 'Roca 1276',         avance: 100.0, vendido: 26.2, brecha: 73.8,  tipo: 'Stock terminado'           },
  { obra: 'Bustillo 357',      avance: 29.2,  vendido: 0.0,  brecha: 29.2,  tipo: 'Inicio sin ventas'         },
  { obra: 'Mitre 929',         avance: 100.0, vendido: 76.2, brecha: 23.8,  tipo: 'Remanente terminado'       },
  { obra: 'Roca 1650',         avance: 16.7,  vendido: 0.0,  brecha: 16.7,  tipo: 'Stock inmovilizado inicial'},
  { obra: 'W. de Tata 4965',   avance: 11.1,  vendido: 0.0,  brecha: 11.1,  tipo: 'Stock inmovilizado inicial'},
  { obra: 'Belgrano 4664',     avance: 48.6,  vendido: 60.4, brecha: -11.8, tipo: 'Venta anticipada (salud)'  },
  { obra: 'Hornos 2719',       avance: 83.3,  vendido: 97.0, brecha: -13.7, tipo: 'Venta anticipada (salud)'  },
  { obra: 'Valentín G. 4736',  avance: 53.3,  vendido: 77.9, brecha: -24.6, tipo: 'Venta anticipada (salud)'  },
];

// ── STOCK INMOVILIZADO ────────────────────────────────────────────────────────
export const stockInmovilizado = [
  { obra: 'Bustillo 357',    avance: 29.2, vendido: 0, hipotesis: 'Oferta sin ajuste al target, alto precio'          },
  { obra: 'Roca 1650',       avance: 16.7, vendido: 0, hipotesis: 'Baja visibilidad, falta de fit demográfico'         },
  { obra: 'W. de Tata 4965', avance: 11.1, vendido: 0, hipotesis: 'Producto no atractivo o mal comercializado'         },
];

// ── MOTORES DE SOLVENCIA ──────────────────────────────────────────────────────
export const motoresSolvencia = [
  { obra: 'Valentín Gómez 4736', avance: 53.3, vendido: 77.9, rol: 'Líder de ventas anticipadas'     },
  { obra: 'Hornos 2719',         avance: 83.3, vendido: 97.0, rol: 'Generador de caja inmediato'      },
  { obra: 'Belgrano 4664',       avance: 48.6, vendido: 60.4, rol: 'Sustento regular de cashflow'     },
];

// ── EMBUDO COMERCIAL ──────────────────────────────────────────────────────────
export const embudo = {
  boletos: 1217,
  reservas: 1136,
  ratio: 1.071,
  agingMas60: 0,
};

// ── CANAL POR INMOBILIARIA ────────────────────────────────────────────────────
export const canalInmobiliaria = [
  { inmobiliaria: 'Particular', boletos: 245, reservas: null, ratio: 115, clasificacion: 'Motor'           },
  { inmobiliaria: 'Jorge Cota', boletos: 2,   reservas: 8,    ratio: 25,  clasificacion: 'Cuello de botella'},
];

// ── FIRMA BOLETO ──────────────────────────────────────────────────────────────
export const firmaBoleto = {
  kpis: [
    { label: 'Total respuestas',               actual: 84,   unidad: '',  tendenciaBuena: 'up'   },
    { label: 'Recompra / volvería a invertir', actual: 76.2, unidad: '%', tendenciaBuena: 'up'   },
    { label: 'Satisfacción "Muy Buena"',       actual: 69.0, unidad: '%', tendenciaBuena: 'up'   },
    { label: 'Canal dominante (Inmobiliarias)',actual: 52.9, unidad: '%', tendenciaBuena: 'neutral'},
    { label: 'Cumplimiento de plazos "Sí"',    actual: 54.8, unidad: '%', tendenciaBuena: 'up'   },
  ],
  insights: [
    'Alta intención de recompra: 76.2% de clientes dispuestos a volver a invertir.',
    'Atención percibida como Muy Buena por casi 7 de cada 10 clientes.',
    'El canal inmobiliario es la principal vía de captación, muy por encima de otras fuentes.',
  ],
  riesgos: [
    { severidad: 'media', texto: 'Cumplimiento de plazos aprobado solo por el 54.8%; segmento significativo que no ve cumplimiento total.' },
    { severidad: 'baja',  texto: 'Alta proporción de respuestas vacías en comentarios (91.7%) y sugerencias (42.9%) limitan visión profunda.' },
    { severidad: 'media', texto: 'Quejas puntuales sobre comisiones y proceso de recompra podrían generar descontento si no se abordan.' },
  ],
  oportunidades: [
    'Mejorar comunicación y atención en postventa y entrega para elevar satisfacción y plazo percibido.',
    'Implementar condiciones diferenciadas en recompra para pequeños inversores, atendiendo sugerencias de clientes fidelizados.',
    'Fortalecer relaciones con inmobiliarias y ampliar estrategias de captación en ese canal dominante.',
  ],
  planAccion7dias: [
    'Analizar segmentación de cumplimiento de plazos para identificar causales de demoras.',
    'Diseñar propuesta para diferenciar comisiones y condiciones en recompra según perfil inversor.',
    'Comunicar resultados de satisfacción internamente para mejora continua del equipo de atención.',
    'Contactar principales inmobiliarias para reforzar alianza y obtener feedback directo.',
    'Revisar criterios y procesos de entrega para anticipar y mitigar inconvenientes.',
    'Generar encuesta focalizada para captar feedback en aspectos con alta tasa de respuestas vacías.',
  ],
  conclusion: 'La firma evidenció sólida satisfacción y alta intención de recompra, con oportunidades claras en gestión de plazos y postventa para consolidar la confianza del cliente.',
};

// ── CAMPAÑAS EMBLUE ───────────────────────────────────────────────────────────
export const emblue = [
  { campana: 'Inversiones',                       openRate: 25,   ctr: 19,   ctor: 130, bounceRate: 5.3,  clasificacion: 'Destacada'         },
  { campana: 'Envío General Dic 2025 - Branding', openRate: 7,    ctr: 6,    ctor: 86,  bounceRate: 16.6, clasificacion: 'Bajo estándar'     },
  { campana: 'No todos buscan lo mismo',          openRate: null, ctr: null, ctor: 64,  bounceRate: 11.1, clasificacion: 'Bajo estándar'     },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
// probabilidad / impacto: 'alta' | 'media' | 'baja'
export const riesgos = [
  {
    riesgo: 'Déficit de liquidez por brechas avance/venta (Roca 1276: 73.8%)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Dirección Comercial / Finanzas',
    consecuencia: 'Deterioro de caja y eventual paralización de nuevas obras',
  },
  {
    riesgo: 'Pérdida de ventas por canal ineficaz (Jorge Cota — conversión 25%)',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Gerente de Canales / Comercial',
    consecuencia: 'Stock detenido y menor cash disponible',
  },
  {
    riesgo: 'Disminución severa de leads calificados (boletos/reservas caen >50% YoY)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Marketing / Preventa',
    consecuencia: 'Pipeline en secado y caída de ventas futuras',
  },
  {
    riesgo: 'Blacklist de dominio/email por rebotes (bounce 16.6%)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Marketing Digital',
    consecuencia: 'Bloqueo por ISPs y pérdida del canal digital',
  },
  {
    riesgo: 'Vulnerabilidad por concentración en canal Particular',
    probabilidad: 'media',
    impacto: 'alta',
    area: 'Dirección Comercial',
    consecuencia: 'Caída abrupta de ventas si el canal deja de operar',
  },
  {
    riesgo: 'Inventario estructural sin vender (Bustillo 357, Roca 1650, W. de Tata 4965)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Comercial / Producto',
    consecuencia: 'Pérdida de margen y costo de oportunidad creciente',
  },
];

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Depurar base de emails Emblue (eliminar rebotes e inactivos)',
      porQue: 'Bounce rate muy alto genera daño reputacional y riesgo de blacklist',
      areaLider: 'Marketing Digital',
      kpi: 'Bounce Rate Emblue ↓ <3%',
      riesgoMitigado: 'Blacklist, baja entregabilidad',
    },
    {
      accion: 'Ruta urgente de descuento/precios para Roca 1276 (17 uds. terminadas)',
      porQue: 'Brecha del 73.8% con capital inmovilizado en unidades entregadas',
      areaLider: 'Dirección Comercial',
      kpi: '% de stock vendido',
      riesgoMitigado: 'Liquidez y deterioro de caja',
    },
    {
      accion: 'Auditar reservas inactivas de Jorge Cota',
      porQue: 'Cuello de botella en canal: conversión del 25% (2 boletos sobre 8 reservas)',
      areaLider: 'Gerente Canales',
      kpi: 'Ratio conversión reservas/boletos',
      riesgoMitigado: 'Stock parado y oportunidades perdidas',
    },
  ],
  d30: [
    {
      accion: 'Nueva campaña hiper-segmentada para Bustillo 357',
      porQue: '0% ventas pese a 29.2% de avance; desajuste producto-mercado actual',
      areaLider: 'Marketing / Producto',
      kpi: 'Open rate, oportunidades generadas',
      riesgoMitigado: 'Stock deadlock y margen negativo',
    },
    {
      accion: 'Cambio de comercializadora en Roca 1650',
      porQue: 'Sin ventas ni tracción; necesario explorar nuevos targets o canales',
      areaLider: 'Dirección Comercial',
      kpi: '% ventas nuevas',
      riesgoMitigado: 'Inventario ocioso',
    },
    {
      accion: 'Implementar proceso de registro post-venta y satisfacción de compradores',
      porQue: 'Sección firma boleto sin ningún dato cuantitativo disponible',
      areaLider: 'Compliance / Comercial',
      kpi: 'Tasa de satisfacción, % recompra',
      riesgoMitigado: 'Incertidumbre sobre experiencia del comprador',
    },
  ],
  d90: [
    {
      accion: 'Revisión y actualización de segmentación total de audiencia Emblue',
      porQue: 'Performance de campañas por debajo de benchmark en 2 de 3 envíos',
      areaLider: 'Marketing Digital',
      kpi: 'Open rate, CTR, leads generados',
      riesgoMitigado: 'Ineficiencia multicanal',
    },
    {
      accion: 'Rebalanceo estratégico del stock hacia canal Motor (Particular)',
      porQue: 'Dependencia peligrosa de un solo canal sin diversificación',
      areaLider: 'Dirección Comercial',
      kpi: 'Participación vendida en canales alternativos',
      riesgoMitigado: 'Vulnerabilidad por canal único',
    },
    {
      accion: 'Investigación de mercado para W. de Tata 4965',
      porQue: 'Sin ventas ni match con la demanda actual del target',
      areaLider: 'Comercial / Inteligencia',
      kpi: '% interés, ventas, leads generados',
      riesgoMitigado: 'Mantener oferta poco pertinente en el mercado',
    },
  ],
};
