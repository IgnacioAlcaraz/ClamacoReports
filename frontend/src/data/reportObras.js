// ── MÓDULO 1: OBRAS ───────────────────────────────────────────────────────────
// Para actualizar mensualmente: modificar los valores de cada sección.
// No tocar la estructura de los objetos — solo los valores.

// ── SEMÁFORO EJECUTIVO ────────────────────────────────────────────────────────
// color: 'green' | 'yellow' | 'orange' | 'red'
export const semaforo = [
  {
    subarea: 'Arquitectura',
    estado: 'Moderado',
    color: 'yellow',
    metrica: 'Backlog: 1.611 ítems (-10 netos); 6 obras clave estancadas',
    umbral: 'Backlog pendiente >1.000 = Amarillo',
  },
  {
    subarea: 'Detalle de Obra',
    estado: 'Heterogéneo',
    color: 'orange',
    metrica: '24.9% obras en limbo, 23.1% no arrancó',
    umbral: '>20% limbo/no arranque = Naranja',
  },
  {
    subarea: 'Programación',
    estado: 'Limitado',
    color: 'yellow',
    metrica: 'Solo 8.9% de obras activas; concentración de avance en pocas obras',
    umbral: '<10% activas = Amarillo',
  },
  {
    subarea: 'Gestoría',
    estado: 'Riesgoso',
    color: 'red',
    metrica: '28 obras atrasadas, 26 estancadas >30 días, 4 pasos por vencer',
    umbral: '>10% con atrasos estancados = Rojo',
  },
];

// ── HALLAZGOS PRINCIPALES ─────────────────────────────────────────────────────
export const hallazgos = [
  'Riesgo por falta de visibilidad: un cuarto del portfolio (56 obras) está en limbo, impidiendo control operativo, financiero y comercial.',
  'Concentración operativa: Morón y Tres de Febrero suman más del 70% de las obras; la disrupción local afecta toda la cartera.',
  'Alertas de gestión municipal y trámites: 28 obras con atrasos y 26 estancadas por más de 30 días, principalmente por demoras municipales, de arquitectura o de terrenos.',
];

// ── KPIs — ARQUITECTURA ───────────────────────────────────────────────────────
export const kpisArquitectura = [
  { label: 'Total ítems', actual: 1611, anterior: 1621, unidad: '', tendenciaBuena: 'down' },
  { label: 'Cerrados en el período', actual: 10, anterior: 0, unidad: '', tendenciaBuena: 'up' },
  { label: 'Nuevos ingresados', actual: 0, anterior: 0, unidad: '', tendenciaBuena: 'down' },
  { label: 'Balance neto', actual: -10, anterior: 0, unidad: ' ítems', tendenciaBuena: 'down' },
];

// ── OBRAS ESTANCADAS (TOP 6) ──────────────────────────────────────────────────
export const obrasEstancadas = [
  { obra: 'El Portal de Morón — Abel Costa al 800 / Yatay 846/50/862', avance: 22.86, pendientes: 34, score: null },
  { obra: 'Mitre 4872, Caseros', avance: 2.94, pendientes: 33, score: null },
  { obra: 'Hurlingham Park', avance: 3.03, pendientes: 32, score: null },
  { obra: 'Av. Gral Paz y Mosconi, Sáenz Peña', avance: 3.23, pendientes: 30, score: null },
  { obra: 'Benito Chas & Juan XXIII, Martín Coronado', avance: 12.12, pendientes: 29, score: null },
  { obra: 'Gral. José de San Martín 451 (Obispado)', avance: 18.18, pendientes: 27, score: null },
];

// ── OBRAS >80% BLOQUEADAS POR DEPENDENCIAS ────────────────────────────────────
export const obrasBlockeadas = [
  { obra: 'Abel Costa 761 (FASECO)', avance: 96.88, pendientes: 1, dependencia: 'Plano PH' },
  { obra: 'Mitre 1185', avance: 93.75, pendientes: 2, dependencia: 'Conforme a obra, Plano PH' },
  { obra: 'Virasoro 325', avance: 91.18, pendientes: 3, dependencia: 'Conforme a obra, Lista precios, Plano PH' },
  { obra: 'Yatay 754 (FASECO)', avance: 88.24, pendientes: 4, dependencia: 'Diversos cómputos y Plano PH' },
  { obra: 'Hornos 2719', avance: 89.66, pendientes: 3, dependencia: 'Conforme a obra, Baldosa, Topo, Plano PH' },
  { obra: 'Roca 1680 (Terrazas)', avance: 81.25, pendientes: 6, dependencia: 'Baldosas, Guardas, Precios, Iluminación, Plano PH' },
  { obra: 'Roca 1636 (El Portal)', avance: 81.25, pendientes: 6, dependencia: 'Baldosas, Guardas, Precios, Iluminación, Plano PH' },
  { obra: 'Valentín Gómez 4736/44', avance: 80.65, pendientes: 6, dependencia: 'Herrajes, Accesorios, Plano PH, otros' },
];

// ── PORTFOLIO GENERAL ─────────────────────────────────────────────────────────
export const portfolio = [
  { estado: 'Finalizadas', cantidad: 97, descripcion: 'Obras completamente terminadas' },
  { estado: 'En curso', cantidad: 20, descripcion: 'Obras en ejecución activa' },
  { estado: 'No arrancó', cantidad: 52, descripcion: 'Proyectos aún no iniciados' },
  { estado: 'Limbo / Desconocido', cantidad: 56, descripcion: 'Sin estado definido — requieren revisión urgente' },
];

// ── TOP 5 OBRAS POR UNIDADES ──────────────────────────────────────────────────
export const topObras = [
  { obra: 'Zafiro (Nordelta)', unidades: 162, cocheras: 0,   entrega: '01/12/2027', estado: 'En curso' },
  { obra: 'Urquiza 4550',      unidades: 128, cocheras: 85,  entrega: '21/11/2028', estado: 'En curso' },
  { obra: 'El Portal de Roca', unidades: 124, cocheras: 111, entrega: '11/11/2026', estado: 'En curso' },
  { obra: 'Hornos 2719',       unidades: 88,  cocheras: 34,  entrega: '01/10/2026', estado: 'En curso' },
  { obra: 'Valentín Gómez 4736', unidades: 84, cocheras: 46, entrega: '01/12/2027', estado: 'En curso' },
];

// ── OBRAS CON ENTREGA VENCIDA O PRÓXIMA (<6 MESES) ───────────────────────────
export const obrasEntregaProxima = [
  { obra: 'Las Malvinas', entrega: '01/04/2026', estado: 'En curso', alerta: 'alta' },
  { obra: 'Mitre 1185',   entrega: '01/04/2026', estado: 'En curso', alerta: 'alta' },
  { obra: 'Virasoro 325', entrega: '01/09/2026', estado: 'En curso', alerta: 'media' },
];

// ── DESCALCE AVANCE VS. VENDIDO ───────────────────────────────────────────────
// tipo: 'comercial' | 'operativo' | 'inconsistencia'
export const descalces = [
  { obra: 'Roca 1276',         avance: 100,   vendido: 26.19, descalce: 73.81,  tipo: 'comercial' },
  { obra: 'Bustillo 357',      avance: 29.17, vendido: 0,     descalce: 29.17,  tipo: 'operativo' },
  { obra: 'Urquiza 4550',      avance: 33.33, vendido: 11.05, descalce: 22.28,  tipo: 'comercial' },
  { obra: 'Valentín G. 4736',  avance: 53.33, vendido: 77.86, descalce: -24.53, tipo: 'operativo' },
];

// ── KPIs — GESTORÍA ───────────────────────────────────────────────────────────
export const kpisGestoria = [
  { label: 'Obras bajo seguimiento', actual: 60,  anterior: null, unidad: '', tendenciaBuena: 'neutral' },
  { label: 'Obras con pasos atrasados', actual: 28, anterior: null, unidad: '', tendenciaBuena: 'down' },
  { label: 'Estancadas >30 días', actual: 26,    anterior: null, unidad: '', tendenciaBuena: 'down' },
  { label: 'Vencimientos próximos 14 días', actual: 4, anterior: null, unidad: '', tendenciaBuena: 'down' },
];

// ── VENCIMIENTOS URGENTES ─────────────────────────────────────────────────────
// urgencia: 'critica' | 'alta' | 'media'
export const vencimientos = [
  {
    obra: 'Valentín Gómez 4736/44',
    paso: 'Comodato firmado',
    fecha: '17/03/2026',
    responsable: 'Terrenos',
    urgencia: 'critica',
  },
  {
    obra: 'Carlos Pellegrini 645-667',
    paso: 'Estudio de suelos',
    fecha: '18/03/2026',
    responsable: 'Gestoría',
    urgencia: 'critica',
  },
  {
    obra: 'Wenceslao de Tata 4538',
    paso: 'Posesión del terreno',
    fecha: '20/03/2026',
    responsable: 'Terrenos',
    urgencia: 'critica',
  },
  {
    obra: 'Buen Viaje 150, Morón',
    paso: 'Posesión del terreno',
    fecha: '20/03/2026',
    responsable: 'Terrenos',
    urgencia: 'critica',
  },
];

// ── OBRAS CON ATRASO >90 DÍAS ─────────────────────────────────────────────────
export const obrasAtraso90 = [
  { obra: 'Virasoro 354, Morón',         paso: 'Trámite Gestoría',      dias: 191, responsable: 'Gestoría' },
  { obra: 'Gral. José de San Martín 451', paso: 'Gestión Municipal',    dias: 178, responsable: 'Municipio' },
  { obra: 'Buen Viaje 146, Morón',        paso: 'Posesión del terreno', dias: 173, responsable: 'Terrenos' },
  { obra: 'Manuel Quintana 762-766',      paso: 'Gestión Municipal',    dias: 172, responsable: 'Municipio' },
  { obra: 'MELIAN 7A/7B/7C/5B',           paso: 'Definición arquitectónica', dias: 165, responsable: 'Arquitectura' },
];

// ── BLOQUEOS POR RESPONSABLE ──────────────────────────────────────────────────
export const bloqueosPorResponsable = [
  { responsable: 'Municipio',    cantidad: 2, obras: 'Gral. José de San Martín 451, Manuel Quintana 762-766' },
  { responsable: 'Terrenos',     cantidad: 3, obras: 'Buen Viaje 146, San Martín 729, Virasoro 354' },
  { responsable: 'Arquitectura', cantidad: 2, obras: 'MELIAN 7A/7B/7C/5B, MELIAN ESQ. SAN RAMON' },
  { responsable: 'Gestoría',     cantidad: 1, obras: 'Virasoro 354' },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
// probabilidad / impacto: 'alta' | 'media' | 'baja'
export const riesgos = [
  {
    riesgo: '24.9% de obras en limbo (56/225)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Proyectos / Planeamiento',
    consecuencia: 'Imposibilidad de forecasting, riesgos financieros y operativos',
  },
  {
    riesgo: 'Concentración geográfica >70% en Morón y Tres de Febrero',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Proyectos / Comercial',
    consecuencia: 'Riesgo de portafolio ante incidentes o restricciones locales',
  },
  {
    riesgo: '28 obras con pasos atrasados / 26 estancadas >30 días',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Arquitectura / Gestoría',
    consecuencia: 'Parálisis operativa y riesgo de sanciones municipales',
  },
  {
    riesgo: 'Pipeline con fechas inconsistentes o sin asignar',
    probabilidad: 'media',
    impacto: 'alta',
    area: 'Planeamiento',
    consecuencia: 'Planificación errónea y uso ineficiente de recursos',
  },
  {
    riesgo: 'Entregas próximas sin preparación documental suficiente',
    probabilidad: 'media',
    impacto: 'alta',
    area: 'Operaciones',
    consecuencia: 'Riesgo de multas y daño reputacional ante clientes',
  },
];

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Auditar y actualizar estado de las 56 obras en limbo',
      porQue: 'Necesario para restablecer control operativo y financiero',
      areaLider: 'Dirección de Proyectos',
      kpi: '% obras con estado actualizado',
      riesgoMitigado: 'Obras en limbo',
    },
    {
      accion: 'Revisión de las 3 obras con entrega en próximos 6 meses',
      porQue: 'Garantizar preparación documental y logística a tiempo',
      areaLider: 'Operaciones',
      kpi: 'Cumplimiento de entregas (%)',
      riesgoMitigado: 'Entregas riesgosas',
    },
    {
      accion: 'Reporte urgente a responsables de obras con atraso >90 días',
      porQue: 'Evitar extensión de bloqueos críticos ya cronificados',
      areaLider: 'Gestoría',
      kpi: 'Días promedio de atraso',
      riesgoMitigado: 'Parálisis de trámites',
    },
  ],
  d30: [
    {
      accion: 'Limpieza y depuración del pipeline de fechas',
      porQue: 'Mejorar la proyección y asignación de recursos futuros',
      areaLider: 'Planeamiento',
      kpi: '% pipeline con fecha válida',
      riesgoMitigado: 'Planificación errónea',
    },
    {
      accion: 'Recoordinación con municipios y áreas responsables de trámites',
      porQue: 'Acortar los pasos atrasados y destrabar gestiones crónicas',
      areaLider: 'Gestión Pública',
      kpi: 'N° de obras con pasos actualizados',
      riesgoMitigado: 'Parálisis gestora',
    },
    {
      accion: 'Revisión comercial proactiva de top 5 obras con descalce',
      porQue: 'Mejorar velocidad de ventas respecto al avance físico',
      areaLider: 'Comercial',
      kpi: 'Ratio venta/avance',
      riesgoMitigado: 'Descalce ventas/avance',
    },
  ],
  d90: [
    {
      accion: 'Estrategia de diversificación geográfica de nuevos proyectos',
      porQue: 'Disminuir la vulnerabilidad por concentración en dos localidades',
      areaLider: 'Desarrollo de Negocios',
      kpi: '% obras en nuevos municipios',
      riesgoMitigado: 'Concentración geográfica',
    },
    {
      accion: 'Implementar rutina mensual de control de obras en limbo',
      porQue: 'Prevenir futuros desvíos informativos y pérdida de control',
      areaLider: 'PM / QA',
      kpi: '% obras limbo reportadas',
      riesgoMitigado: 'Obras no monitoreadas',
    },
    {
      accion: 'Destrabar obras cronificadas en backlog de arquitectura',
      porQue: 'Recuperar velocidad global del portfolio y reducir estancamiento',
      areaLider: 'Dirección de Proyectos',
      kpi: 'Plazo medio de cierre de backlog',
      riesgoMitigado: 'Backlog estructural',
    },
  ],
};
