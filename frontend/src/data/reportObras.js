// ── MÓDULO 1: OBRAS ───────────────────────────────────────────────────────────
// Período: Abril 2026

export const semaforo = [
  { subarea: 'Factibilidades', estado: 'CRÍTICO', color: 'red',    metrica: '50% de obras con factibilidades vencidas (33 de 66)', umbral: '> 30% vencidas = crítico' },
  { subarea: 'Arquitectura',   estado: 'ALERTA',  color: 'yellow', metrica: '42.8% de obras estancadas (15 de 35) + 916 ítems acumulados', umbral: '> 40% estancadas = alerta' },
  { subarea: 'Detalle de Obra',estado: 'ALERTA',  color: 'yellow', metrica: '68% de obras activas con 0% vendido (15 de 22) + descalce promedio +19pp', umbral: 'Descalce > 15pp = alerta' },
  { subarea: 'Programación',   estado: 'ESTABLE', color: 'green',  metrica: '0 entregas vencidas sin finalizar', umbral: '< 5% entregas incumplidas = estable' },
  { subarea: 'Gestoría',       estado: 'CRÍTICO', color: 'red',    metrica: '52 de 60 obras con alertas (86.7%) + 23 obras con atraso > 30 días', umbral: '> 70% obras con alertas = crítico' },
];

export const hallazgos = [
  'Colapso normativo en factibilidades: 33 obras vencidas coexisten con 33 vigentes (paridad 50/50). El backlog más antiguo data de marzo 2020 (6 años). Con 20 factibilidades vencidas de Edenor, una auditoría de concesionaria puede paralizar simultáneamente el 60% del portfolio vencido a un costo de USD 40.000-160.000 diarios.',
  'Estancamiento masivo en arquitectura: 15 de 35 obras activas (42.8%) sin movimiento en abril. El 58% del backlog (532 de 916 ítems) está en 14 obras con avance menor al 10%, sugiriendo bloqueos de origen estructural. Balance neto positivo (+31 ítems) no alcanza para compensar el volumen acumulado.',
  'Desacople comercial severo: 68% de las obras en curso (15 de 22) tienen 0% vendido. Tres obras de Nordelta (Puentes lotes 14, 23, 36) están entre 80-100% avanzadas con cero ventas. Capital inmovilizado estimado: USD 15-20 millones. Riesgo de sobrestock masivo en 2027-2028 con necesidad de liquidación a descuentos del 20-30%.',
];

// ── FACTIBILIDADES ────────────────────────────────────────────────────────────
export const kpisFactibilidades = [
  { label: 'Vigentes reales',    actual: 33, anterior: null, unidad: '', tendenciaBuena: 'up'      },
  { label: 'Vencidas',           actual: 33, anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Sin fecha asignada', actual: 7,  anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Vencen en <30 días', actual: 2,  anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Total cartera',      actual: 66, anterior: null, unidad: '', tendenciaBuena: 'neutral' },
];

export const vencimientosFactibilidades = [
  { obra: 'ABEL COSTA 761', servicio: 'Electricidad (Edenor)', contratista: 'FSC', fecha: '19/05/2026', diasRestantes: 19, riesgo: 'Paralización instalaciones eléctricas. Multas con FSC por demora no imputable. Costo estimado: USD 2.500/día.', urgencia: 'critica' },
  { obra: 'MELIAN 7912',    servicio: 'Electricidad (Edenor)', contratista: 'CMC', fecha: '28/05/2026', diasRestantes: 28, riesgo: 'Detención en etapa de conexión eléctrica. Imposibilidad de pruebas de instalaciones. Costo estimado: USD 3.200/día.', urgencia: 'critica' },
];

export const falsosVigentes = [
  { obra: 'LAS MALVINAS 7271',  servicio: 'Agua (AYSA)',          contratista: 'CMC',         fechaVencimiento: 'Sin fecha',  anosAtraso: 'Indeterminado',    consecuencia: 'Pérdida total de traza regulatoria. No se puede renovar sin auditoría AYSA (90-120 días, USD 3.000-5.000).' },
  { obra: 'VERGARA 2250',       servicio: 'Electricidad (Edenor)', contratista: 'Sin asignar', fechaVencimiento: '26/03/2020', anosAtraso: '6 años, 1 mes',    consecuencia: 'Proyecto operativamente abandonado. Factibilidad caduca ocupa cupo administrativo ante Edenor.' },
  { obra: 'ROCA GOLF',          servicio: 'Electricidad (Edenor)', contratista: 'Sin asignar', fechaVencimiento: '07/05/2020', anosAtraso: '5 años, 11 meses', consecuencia: 'Requiere cancelación formal ante Edenor para liberar cupo de cartera.' },
  { obra: 'FRUGONE/LA MERCED',  servicio: 'Electricidad (Edenor)', contratista: 'Sin asignar', fechaVencimiento: '27/05/2020', anosAtraso: '5 años, 11 meses', consecuencia: 'Requiere construcción de cámara de transformación (adicional 60-90 días + USD 15.000-25.000).' },
  { obra: '25 DE MAYO 956',     servicio: 'Electricidad (Edenor)', contratista: 'Sin asignar', fechaVencimiento: '05/07/2020', anosAtraso: '5 años, 10 meses', consecuencia: 'Proyecto sin continuidad. Factibilidad debe cancelarse formalmente.' },
];

export const concentracionFactibilidades = [
  { prestadora: 'Edenor',  vencidas: 20, porcentaje: 60.6, riesgo: 'CRÍTICO',  detalle: 'Auditoría masiva puede suspender servicios en 20 obras simultáneamente. Sanción progresiva: 3ª detección = bloqueo de nuevas factibilidades.' },
  { prestadora: 'AYSA',    vencidas: 10, porcentaje: 30.3, riesgo: 'ALTO',     detalle: 'Segundo proveedor más expuesto. Riesgo de clausura de instalaciones sanitarias en obras activas.' },
  { prestadora: 'Naturgy', vencidas: 3,  porcentaje: 9.1,  riesgo: 'MODERADO', detalle: 'Menor concentración, pero gas es crítico para habitabilidad y entrega final.' },
];

// ── ARQUITECTURA ──────────────────────────────────────────────────────────────
export const kpisArquitectura = [
  { label: 'Total ítems',       actual: 1680, anterior: null, unidad: '',       tendenciaBuena: 'down' },
  { label: 'Pendientes totales',actual: 916,  anterior: null, unidad: '',       tendenciaBuena: 'down' },
  { label: 'Cerrados en mes',   actual: 31,   anterior: null, unidad: ' ítems', tendenciaBuena: 'up'   },
  { label: 'Ingresados en mes', actual: 0,    anterior: null, unidad: ' ítems', tendenciaBuena: 'down' },
  { label: 'Balance neto',      actual: 31,   anterior: null, unidad: ' ítems', tendenciaBuena: 'up'   },
];

export const obrasEstancadas = [
  { obra: 'EL PORTAL DE MORÓN — Abel Costa al 800 / Yatay 846/50/862', avance: 2.86,  pendientes: 34, estancada: true,  trello: 'https://trello.com/c/cRX2koGy' },
  { obra: 'Mitre 4872, Caseros',                                        avance: 2.94,  pendientes: 33, estancada: true,  trello: 'https://trello.com/c/NqiVEUPO' },
  { obra: 'David Magdalena 2872',                                       avance: 5.88,  pendientes: 32, estancada: true,  trello: 'https://trello.com/c/UG67WPmr' },
  { obra: 'Av. Gral Paz y Mosconi, Sáenz Peña',                         avance: 3.23,  pendientes: 30, estancada: true,  trello: 'https://trello.com/c/vb8SGaoK' },
  { obra: 'MITRE 538',                                                  avance: 9.09,  pendientes: 30, estancada: true,  trello: 'https://trello.com/c/q8yjI8Dz' },
  { obra: 'Benito Chas & Juan XXIII, Martín Coronado (Consolatta)',     avance: 12.12, pendientes: 29, estancada: true,  trello: 'https://trello.com/c/xhL2d5kT' },
  { obra: 'HURLINGHAM PARK',                                            avance: 15.15, pendientes: 21, estancada: true,  trello: 'https://trello.com/c/IU9LwVKm' },
  { obra: 'Caseros 2950/60, Caseros',                                   avance: 29.41, pendientes: 24, estancada: false, trello: 'https://trello.com/c/6gHvz4B8' },
  { obra: 'Newton 2847, El Palomar',                                    avance: 34.29, pendientes: 23, estancada: false, trello: 'https://trello.com/c/VPaJETX1' },
  { obra: 'Uruguay 518 (República Oriental), Morón',                    avance: 47.06, pendientes: 18, estancada: false, trello: 'https://trello.com/c/OnIpYTUR' },
  { obra: 'Roca 1650',                                                  avance: 65.71, pendientes: 12, estancada: false, trello: 'https://trello.com/c/DWWLAe1F' },
  { obra: 'W. de Tata 4965',                                            avance: 77.14, pendientes: 8,  estancada: false, trello: 'https://trello.com/c/TzSLrVLs' },
  { obra: 'Bustillo 357',                                               avance: 80.65, pendientes: 6,  estancada: false, trello: 'https://trello.com/c/qATRnn68' },
  { obra: 'Andres Ferreira 2930',                                       avance: 88.24, pendientes: 4,  estancada: false, trello: 'https://trello.com/c/7dq7WEb9' },
  { obra: 'Hornos 2719',                                                avance: 93.10, pendientes: 2,  estancada: false, trello: null },
];

export const obrasBlockeadas = [
  { obra: 'Belgrano 4664', avance: 80.65, pendientes: 6, dependencia: 'Visado Parcelaria (Municipio Tres de Febrero)', trello: 'https://trello.com/c/qATRnn68' },
];

export const obrasPlanoPH = [
  { obra: 'Abel Costa 761 (FASECO)', avance: 96.88, trello: 'https://trello.com/c/hAQZwR1A' },
  { obra: 'Roca Oficina',            avance: 96.88, trello: 'https://trello.com/c/CSSSMKOu' },
  { obra: 'Yatay 754 (FASECO)',      avance: 94.12, trello: 'https://trello.com/c/1hWg0hH1' },
  { obra: 'Las Malvinas',            avance: 93.75, trello: 'https://trello.com/c/yWxjIMmF' },
  { obra: 'Mitre 1185',              avance: 93.75, trello: 'https://trello.com/c/gEAm3kgI' },
];

// ── DETALLE Y ESTADO DE OBRAS ─────────────────────────────────────────────────
export const portfolio = [
  { estado: 'En curso',            cantidad: 22,  descripcion: 'Obras con entrega programada y construcción activa' },
  { estado: 'Finalizadas',         cantidad: 103, descripcion: 'Obras completadas y entregadas (46.2% del portfolio histórico)' },
  { estado: 'No arrancada (pozo)', cantidad: 56,  descripcion: 'Pipeline en espera — terreno adquirido sin fecha constructiva definida' },
  { estado: 'Limbo / Desconocido', cantidad: 42,  descripcion: 'Estado desconocido — auditoría urgente (18.8% del portfolio)' },
  { estado: 'TOTAL CARTERA',       cantidad: 223, descripcion: 'Portfolio completo bajo seguimiento' },
];

export const topObras = [
  { obra: 'Zafiro (Nordelta)',    unidades: 162, cocheras: 0,   entrega: '01/12/2027', estado: 'EN CURSO', nota: '⚠️ Sin cocheras — riesgo comercial en zona Nordelta' },
  { obra: 'URQUIZA 4550',        unidades: 128, cocheras: 52,  entrega: '01/11/2028', estado: 'EN CURSO', nota: '' },
  { obra: 'EL PORTAL DE ROCA',   unidades: 124, cocheras: 111, entrega: '01/11/2026', estado: 'EN CURSO', nota: '🔴 Triple bloqueo detectado — entrega Q4 2026 en riesgo' },
  { obra: 'HORNOS 2719',         unidades: 88,  cocheras: 34,  entrega: '01/10/2026', estado: 'EN CURSO', nota: '⚠️ Entrega más próxima del portfolio activo' },
  { obra: 'VALENTIN GOMEZ 4736', unidades: 84,  cocheras: 46,  entrega: '01/12/2027', estado: 'EN CURSO', nota: '' },
];

export const obrasEntregaProxima = [
  { obra: 'HORNOS 2719',      entrega: '01/10/2026', unidades: 88,  alerta: 'alta',   nota: '211 días desde corte. Hitos constructivos con alertas activas.' },
  { obra: 'EL PORTAL DE ROCA', entrega: '01/11/2026', unidades: 124, alerta: 'critica', nota: 'Triple bloqueo: hormigón vencido 516 días + visado municipal vence 14/05/2026.' },
];

export const obrasLimbo = [];
export const totalLimbo = 42;

export const obrasDesacople = [
  { obra: 'Puentes lote 14',      avance: 100,   vendido: 0,    descalce: 100,   tipo: 'CRÍTICO — Obra finalizada, cero ventas. Requiere auditoría comercial urgente.' },
  { obra: 'Puentes lote 23',      avance: 100,   vendido: 0,    descalce: 100,   tipo: 'CRÍTICO — Obra finalizada, cero ventas.' },
  { obra: 'Puentes lote 36',      avance: 80,    vendido: 0,    descalce: 80,    tipo: 'CRÍTICO — Obra casi lista sin comercialización activa.' },
  { obra: 'Puentes lote 217',     avance: 57.89, vendido: 0,    descalce: 57.89, tipo: 'ALTO — Más de mitad de obra ejecutada sin ventas.' },
  { obra: 'Bustillo 357',         avance: 33.33, vendido: 0,    descalce: 33.33, tipo: 'CRÍTICO — Un tercio ejecutado sin estrategia de preventa.' },
  { obra: 'Roca 1650',            avance: 19.44, vendido: 0,    descalce: 19.44, tipo: 'ALTO — Avance sin validación comercial.' },
  { obra: 'BOSCH Y ORO',          avance: 19.44, vendido: 5.43, descalce: 13.99, tipo: 'ALTO — Única obra con tracción comercial, pero descalce significativo.' },
  { obra: 'MITRE 538',            avance: 4.17,  vendido: 0,    descalce: 4.17,  tipo: 'POTENCIAL — Obra recién iniciada.' },
  { obra: 'Uruguay 1048',         avance: 3.23,  vendido: 0,    descalce: 3.23,  tipo: 'POTENCIAL — Obra recién iniciada.' },
  { obra: 'MELIAN 7912/15',       avance: null,  vendido: 0,    descalce: null,  tipo: 'COMERCIAL — Sin datos de avance registrados.' },
  { obra: 'URQUIZA 4550',         avance: null,  vendido: 0,    descalce: null,  tipo: 'COMERCIAL — Sin ventas registradas.' },
  { obra: 'W. de Tata 4965',      avance: null,  vendido: 0,    descalce: null,  tipo: 'COMERCIAL — Sin ventas registradas.' },
  { obra: 'Andres Ferreira 2930', avance: null,  vendido: 0,    descalce: null,  tipo: 'COMERCIAL — Sin ventas registradas.' },
  { obra: 'GRANT 186',            avance: 100,   vendido: 100,  descalce: 0,     tipo: 'EQUILIBRADO — Entrega vencida desde marzo 2023. Requiere auditoría de cierre.' },
];

// ── PROGRAMACIÓN ──────────────────────────────────────────────────────────────
export const concentracionGeografica = [
  { localidad: 'Morón',           cantidad: 73, obras: 'Mayor concentración histórica. 2.384 unidades planificadas.' },
  { localidad: 'Tres de Febrero', cantidad: 49, obras: 'HORNOS 2719, VALENTIN GOMEZ 4736, MELIAN 7912/15. 2.276 unidades.' },
  { localidad: 'Hurlingham',      cantidad: 24, obras: 'EL PORTAL DE ROCA, Terrazas de Roca, Roca 1650. 1.016 unidades.' },
  { localidad: 'Nordelta',        cantidad: 10, obras: 'Zafiro (162 unidades), Puentes (múltiples lotes).' },
  { localidad: 'Palomar',         cantidad: 1,  obras: 'Virasoro 325 (31 unidades).' },
];

// ── GESTORÍA ──────────────────────────────────────────────────────────────────
export const kpisGestoria = [
  { label: 'Obras bajo seguimiento',    actual: 60, anterior: null, unidad: '', tendenciaBuena: 'neutral' },
  { label: 'Obras con alertas críticas',actual: 52, anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Obras atrasadas >30 días',  actual: 23, anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Estancadas >30 días',       actual: 29, anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Pasos vencen <14 días',     actual: 4,  anterior: null, unidad: '', tendenciaBuena: 'down'    },
  { label: 'Sin alertas',               actual: 8,  anterior: null, unidad: '', tendenciaBuena: 'up'      },
];

export const vencimientos = [
  { obra: 'Newton 2847, El Palomar',     paso: '9.6. Factibilidad GAS — RESPONDIDA',      fecha: '11/05/2026', responsable: 'Municipio', urgencia: 'alta'    },
  { obra: 'Caseros 2950/60, Caseros',    paso: '9.6. Factibilidad GAS — RESPONDIDA',      fecha: '11/05/2026', responsable: 'Municipio', urgencia: 'alta'    },
  { obra: 'Wenceslao de Tata 4538-4544', paso: '10. Dibujo de Plano Municipal',           fecha: '12/05/2026', responsable: 'Gestoría',  urgencia: 'alta'    },
  { obra: 'EL PORTAL DE ROCA',           paso: '13. Visado Parcelaria (Tres de Febrero)', fecha: '14/05/2026', responsable: 'Municipio', urgencia: 'critica' },
];

export const obrasAtraso90 = [
  { obra: 'Virasoro 354, Morón / El Palomar',    paso: '15. Colegio Profesional (Aportes)', dias: 236, responsable: 'Gestoría'     },
  { obra: 'Manuel Quintana 762-766, Villa Bosch', paso: '9.6. Factibilidad GAS',            dias: 217, responsable: 'Municipio'    },
  { obra: 'MELIAN 7A/7B/7C/5B',                  paso: '6. Anteproyecto definido',         dias: 210, responsable: 'Arquitectura' },
  { obra: 'Buen Viaje 146, Morón',               paso: '10. Dibujo de Plano Municipal',    dias: 165, responsable: 'Gestoría'     },
  { obra: 'La Merced 4484, Caseros',             paso: '6. Anteproyecto definido',         dias: 165, responsable: 'Arquitectura' },
  { obra: 'Gral. Paz 2690-Granero',              paso: '6. Anteproyecto definido',         dias: 159, responsable: 'Arquitectura' },
  { obra: 'MELIAN ESQ. SAN RAMON',               paso: '6. Anteproyecto definido',         dias: 153, responsable: 'Arquitectura' },
  { obra: 'Av. Marquez y Peron',                 paso: '6. Anteproyecto definido',         dias: 128, responsable: 'Arquitectura' },
  { obra: 'Roca 1582, Hurlingham',               paso: '19. Presentación Plano Municipal', dias: 106, responsable: 'Gestoría'     },
];

export const obrasEstancadasGestoria = [
  { obra: 'Gral. José de San Martín 451, Morón',  diasEstancada: 238, paso: '14. Visado Previo Ascensor',             responsable: 'Municipio'    },
  { obra: 'Manuel Quintana 762-766, Villa Bosch',  diasEstancada: 237, paso: '9.6. Factibilidad GAS',                 responsable: 'Municipio'    },
  { obra: 'MELIAN 7A/7B/7C/5B',                   diasEstancada: 237, paso: '6. Anteproyecto definido',              responsable: 'Arquitectura' },
  { obra: 'MELIAN ESQ. SAN RAMON',                diasEstancada: 237, paso: '6. Anteproyecto definido',              responsable: 'Arquitectura' },
  { obra: 'Roca 2014 & Bocayuva, Hurlingham',     diasEstancada: 223, paso: '2. Escritura Simple firmada',           responsable: 'Terrenos'     },
  { obra: 'Av. Marquez y Peron',                  diasEstancada: 216, paso: '6. Anteproyecto definido',              responsable: 'Arquitectura' },
  { obra: 'La Merced 4484, Caseros',              diasEstancada: 180, paso: '6. Anteproyecto definido',              responsable: 'Arquitectura' },
  { obra: 'Gral. Paz 2690-Granero',               diasEstancada: 174, paso: '6. Anteproyecto definido',              responsable: 'Arquitectura' },
  { obra: 'Melián 7915, Martín Coronado',         diasEstancada: 174, paso: '13. Visado Parcelaria (Tres de Febrero)', responsable: 'Municipio'  },
];

export const bloqueosPorResponsable = [
  { responsable: 'Arquitectura', cantidad: 8, obras: 'MELIAN 7A/7B/7C/5B, MELIAN ESQ. SAN RAMON, La Merced 4484, Gral. Paz 2690-Granero, Av. Marquez y Peron, HURLINGHAM PARK y otros' },
  { responsable: 'Municipio',    cantidad: 7, obras: 'Manuel Quintana 762-766, Gral. José de San Martín 451, Melián 7915, Jose Maria Bosch 1394, Belgrano 4664, Mitre 1185 y otros' },
  { responsable: 'Gestoría',     cantidad: 5, obras: 'Virasoro 354, Buen Viaje 146, Urquiza 4638, Roca 1582 y otros' },
  { responsable: 'Terrenos',     cantidad: 3, obras: 'Roca 2014 & Bocayuva, Roca 1972, Roca 1717' },
];

export const concentracionGeoProblemas = [
  { localidad: 'Tres de Febrero', obrasCon: 6, tipoPredominante: 'Visado de Parcelaria (3 obras), Anteproyecto (2), Visado Ascensor (1)' },
  { localidad: 'Morón',           obrasCon: 5, tipoPredominante: 'Anteproyecto (2 obras), Dibujo Plano Municipal (1), Colegio Profesional (1)' },
  { localidad: 'Hurlingham',      obrasCon: 4, tipoPredominante: 'Escritura/Posesión de terreno (3 obras), Presentación Plano Municipal (1)' },
  { localidad: 'Caseros',         obrasCon: 3, tipoPredominante: 'Anteproyecto (1), Factibilidad GAS (1), Unificación de lotes (1)' },
  { localidad: 'El Palomar',      obrasCon: 2, tipoPredominante: 'Colegio Profesional (1), Factibilidad GAS (1)' },
];

// ── RIESGOS ───────────────────────────────────────────────────────────────────
export const riesgos = [
  {
    riesgo: 'Suspensión de servicios por 33 factibilidades vencidas — 20 con Edenor (60.6%)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Gerencia de Operaciones / Factibilidades',
    consecuencia: 'Auditoría Edenor puede paralizar 20 obras simultáneamente. Costo: USD 40.000-160.000/día. Acumulado 30 días: USD 1.2-4.8 millones.',
  },
  {
    riesgo: 'Sobrestock masivo — 68% obras activas con 0% vendido (15 de 22)',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Gerencia Comercial / Obras',
    consecuencia: 'Capital inmovilizado USD 15-20 millones. Liquidación con descuentos 20-30%. Pérdida de rentabilidad estimada: USD 3-5 millones.',
  },
  {
    riesgo: 'Incumplimiento entregas Q4 2026 — EL PORTAL DE ROCA y HORNOS 2719 con triple bloqueo',
    probabilidad: 'alta',
    impacto: 'alta',
    area: 'Gerencia de Obras / Gestoría',
    consecuencia: '212 unidades en riesgo. Impacto flujo de caja Q4: USD 3-4 millones + penalidades estimadas USD 150.000-300.000.',
  },
  {
    riesgo: 'Ceguera operativa — 42 obras en limbo + 7 factibilidades sin fecha + 56 no arrancadas',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Gerencia de Administración / IT',
    consecuencia: 'Rechazo de líneas de crédito o sobretasa de 2pp. Para cartera USD 50M: USD 1 millón/año adicional en intereses.',
  },
  {
    riesgo: 'Estancamiento arquitectura bloquea pipeline — 15 obras sin movimiento (42.8%)',
    probabilidad: 'media',
    impacto: 'media',
    area: 'Gerencia de Arquitectura / Comercial',
    consecuencia: 'Brecha de ingresos USD 5-8 millones en 2027-2028 por obras que no ingresan a etapa constructiva.',
  },
  {
    riesgo: 'Colapso gestión municipal Tres de Febrero — 6 obras bloqueadas en Visado Parcelaria',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Gerencia de Gestoría / Relaciones Institucionales',
    consecuencia: 'Demora de 3-4 meses en entregas 2027. Impacto flujo de caja: USD 2-3 millones por entregas diferidas.',
  },
  {
    riesgo: 'Portfolio inflado por obras zombie (vencidas sin contratista + sin clasificar)',
    probabilidad: 'alta',
    impacto: 'media',
    area: 'Dirección General',
    consecuencia: 'Sobrestimación de capacidad productiva en 35-40%. En due diligence M&A/IPO: corrección de valuación estimada USD 10-15 millones.',
  },
];

// ── CUELLO DE BOTELLA: CÁMARA EDENOR ─────────────────────────────────────────
// 8 obras requieren construcción de cámara de transformación Edenor.
// Solo FRUGONE/LA MERCED está identificada nominalmente en el reporte fuente.
export const cuellosBotella = [
  {
    obra: 'FRUGONE/LA MERCED',
    servicio: 'Electricidad (Edenor)',
    requerimiento: 'Cámara de transformación',
    diasDemora: '105-155 días (vs. obra estándar)',
    motivo: 'Aprobación planos cámara (30-45 días) + construcción bóveda (60-90 días) + habilitación Edenor (15-20 días). Bloqueante total: sin cámara aprobada no hay conexión eléctrica.',
    costoAdicional: 'USD 15.000-25.000',
    contratista: 'Sin asignar',
    nota: 'Factibilidad vencida desde 27/05/2020. Con factibilidad vencida el plazo total se extiende a 135-200 días.',
  },
  {
    obra: '7 obras adicionales',
    servicio: 'Electricidad (Edenor)',
    requerimiento: 'Cámara de transformación',
    diasDemora: '105-155 días (vs. obra estándar)',
    motivo: 'Misma lógica estructural. Las obras no están identificadas nominalmente en el reporte fuente.',
    costoAdicional: 'USD 15.000-25.000 c/u (estimado)',
    contratista: 'S/D',
    nota: 'Si alguna de las 8 tiene además factibilidad vencida y atrasos en gestoría (165 días promedio), el atraso acumulado supera 270-320 días (9-10 meses).',
  },
];

// ── CONCENTRACIÓN DE RIESGO POR CONTRATISTA ───────────────────────────────────
export const concentracionContratista = [
  {
    contratista: 'Sin asignar',
    cantidad: 4,
    detalle: 'VERGARA 2250, ROCA GOLF, FRUGONE/LA MERCED, 25 DE MAYO 956 — todas vencidas desde 2020 (5-6 años). Abandono operativo confirmado. Requieren cancelación formal ante Edenor para liberar cupo administrativo.',
  },
  {
    contratista: 'CMC',
    cantidad: 2,
    detalle: 'LAS MALVINAS 7271 (AYSA, sin fecha registrada) y MELIAN 7912 (Edenor, vence 28/05/2026). Contratista con múltiples factibilidades críticas — requiere revisión de cartera asignada.',
  },
  {
    contratista: 'FSC',
    cantidad: 1,
    detalle: 'ABEL COSTA 761 (Edenor, vence 19/05/2026). Una sola obra en ventana crítica — gestión focalizada posible si se activa fast track inmediato.',
  },
];

// ── TOP 3 DESCALCES — ANÁLISIS AMPLIADO ───────────────────────────────────────
export const top3DescalcesDetalle = [
  {
    obra: 'Puentes lote 14',
    avance: 100,
    vendido: 0,
    causa: 'Obra finalizada operativamente pero sin tracción comercial registrada. Posibles factores: precio fuera de mercado para Nordelta, deficiencia de amenities, falta de activación comercial post-entrega, o error de registro en sistema (ventas no cargadas).',
    consecuencia: 'Si es error de registro: distorsión de métricas. Si es problema comercial real: stock muerto con costos de mantenimiento USD 500-800/mes y pérdida de oportunidad de capital inmovilizado (USD 2-3 millones).',
    ritmoCronograma: 'S/D — obra finalizada. El cronograma constructivo se cumplió; el riesgo es exclusivamente comercial.',
  },
  {
    obra: 'Puentes lote 36',
    avance: 80,
    vendido: 0,
    causa: 'Obra en etapa final de construcción sin haber iniciado comercialización. Desconexión entre cronograma de obra y estrategia comercial: el área comercial no activó plan de ventas anticipadas.',
    consecuencia: 'Llegada a entrega final (estimada 2-3 meses) con 100% de stock disponible, generando presión inmediata de liquidación. Si el mercado no absorbe el stock en 6 meses, se requieren descuentos del 20-30% para acelerar rotación.',
    ritmoCronograma: 'S/D — no disponible en reporte fuente. La obra avanza físicamente pero sin cronograma comercial paralelo.',
  },
  {
    obra: 'Bustillo 357',
    avance: 33.33,
    vendido: 0,
    causa: 'Obra con avance razonable (un tercio completado) pero sin haber iniciado ventas. Ausencia de estrategia de preventa: el proyecto avanzó a etapa constructiva sin validación comercial previa.',
    consecuencia: 'Si se completa la obra (~12-15 meses restantes) sin iniciar comercialización, se llegará a entrega con stock completo y sin pipeline de compradores. Absorción de mercado para ~32 unidades en Morón: 8-12 meses en condiciones normales. Capital inmovilizado 20-27 meses desde inicio de obra.',
    ritmoCronograma: 'S/D — sin cronograma de preventa registrado en sistema.',
  },
];

// ── CRUCES ENTRE LOS 6 REPORTES ───────────────────────────────────────────────
export const crucesModulos = [
  {
    causa: '33 factibilidades vencidas (50% cartera) + 15 obras estancadas en arquitectura',
    mecanismo: 'Las obras con factibilidades vencidas no pueden avanzar en diseño porque no tienen garantía de conexión a servicios. Arquitectura depende de factibilidades vigentes para definir medidores, cajas de agua y puntos de gas.',
    impacto: 'Cuello de botella bidireccional: Arquitectura no cierra diseños → Obras no ingresan a gestoría municipal → Factibilidades no se renuevan porque "la obra no arranca" → Arquitectura sigue sin poder cerrar diseños.',
    consecuencia: 'Perpetuación del círculo vicioso. Las 15 obras estancadas en arquitectura seguirán sin avanzar mientras sus factibilidades estén vencidas. La empresa quedará con 15 proyectos zombie que consumen recursos administrativos pero nunca ingresan a etapa productiva.',
  },
  {
    causa: '22 obras en curso con 68% (15 obras) sin ventas + backlog de 916 ítems en arquitectura sin priorización',
    mecanismo: 'Comercial no tiene visibilidad de qué obras están próximas a completarse en arquitectura, por lo que no puede preparar campañas de preventa. Arquitectura no sabe qué obras son prioritarias para comercial, distribuyendo esfuerzo uniformemente.',
    impacto: 'Desconexión operativa entre diseño y venta: obras que completan diseño no tienen plan comercial listo → salen a venta con demora de 2-3 meses → llegan a entrega final con stock sin vender.',
    consecuencia: 'Sobrestock masivo en 2027-2028 por obras que completan construcción sin pipeline de compradores. Capital inmovilizado de USD 15-20 millones. Presión de liquidación con descuentos del 20-30%.',
  },
  {
    causa: '3 obras con riesgo ALTO en programación (hormigón/mampostería vencidos) + 4 obras con vencimientos urgentes en gestoría (<14 días)',
    mecanismo: 'Las 3 obras con hitos constructivos vencidos (EL PORTAL DE ROCA, Virasoro 325, HORNOS 2719) tienen además trámites municipales próximos a vencer. Si los trámites vencen, la obra enfrenta triple bloqueo: constructivo + normativo + municipal.',
    impacto: 'Paralización cascada: la obra no puede avanzar físicamente (hormigón vencido) + no puede conectarse a servicios (factibilidad vencida) + no puede obtener aprobaciones finales (visado vencido). Demora de 90-120 días mínimo para regularización.',
    consecuencia: 'EL PORTAL DE ROCA (nov-2026) enfrenta atraso de 3-4 meses mínimo. HORNOS 2719 (oct-2026) también en riesgo. Impacto en flujo de caja Q4 2026: USD 3-4 millones por entregas diferidas.',
  },
  {
    causa: '42 obras en limbo (18.8% portfolio) + 7 factibilidades sin fecha asignada + 56 obras "no arrancadas"',
    mecanismo: 'Existe un segmento del portfolio (~100 obras) en estado de indefinición: no se sabe si están activas, canceladas, vendidas o detenidas. Esto genera ceguera operativa sobre el 40-45% de la cartera.',
    impacto: 'Riesgo de sorpresas negativas en auditoría: si un auditor externo (banco, inversor, regulador) solicita detalle de estas 100 obras, la empresa no puede responder con certeza. Deteriora credibilidad y gobernanza corporativa.',
    consecuencia: 'Pérdida de acceso a financiamiento externo. Los bancos exigen transparencia total sobre portfolio activo. Si la empresa no puede demostrar que conoce el estado del 100% de su cartera, enfrenta rechazo de créditos o tasas punitivas de 2-3pp adicionales.',
  },
  {
    causa: '8 obras con requerimiento de cámara Edenor + atrasos promedio de 165 días en gestoría',
    mecanismo: 'Las obras que requieren cámara de transformación tienen un atraso estructural de 105-155 días respecto a obras estándar. Si además tienen atrasos en gestoría (165 días promedio), el atraso acumulado supera 270-320 días (9-10 meses).',
    impacto: 'Desajuste de cronogramas: las 8 obras fueron planificadas con cronograma estándar (18-24 meses) sin considerar el adicional de 9-10 meses por cámara + gestión municipal. Desvíos de entrega de casi 1 año.',
    consecuencia: 'Las 8 obras no cumplen fecha de entrega comprometida. Si tienen pre-ventas con fecha contractual, enfrentan penalidades de 0.5-1% del precio de venta por mes de atraso. Para 8 obras con precio promedio USD 150.000/unidad, el costo de penalidades puede superar USD 100.000-200.000.',
  },
  {
    causa: '68% de obras en curso con 0% vendido + concentración de 76.2% de obras en Morón y Tres de Febrero',
    mecanismo: 'La concentración geográfica implica que estas obras compiten entre sí por el mismo pool de compradores. Sin estrategia de preventa, las 15 obras sin ventas enfrentan canibalización comercial: el comprador potencial elige entre múltiples ofertas de la misma empresa en la misma zona, dilatando su decisión.',
    impacto: 'Presión de descuentos para diferenciación: para acelerar ventas en mercado saturado (15 obras sin ventas en 2 localidades), la empresa se ve forzada a ofrecer descuentos del 10-15% en algunas obras para diferenciarlas de sus propias competidoras.',
    consecuencia: 'Deterioro de márgenes netos del 18-20% actual al 12-15% por guerras de precios internas. Pérdida de rentabilidad estimada: USD 2-3 millones en cartera 2026-2027. Genera percepción de "empresa desesperada por vender" que deteriora posicionamiento de marca.',
  },
];

// ── PLAN DE ACCIÓN ────────────────────────────────────────────────────────────
export const planAccion = {
  h72: [
    {
      accion: 'Activar renovación acelerada de ABEL COSTA 761 y MELIAN 7912 con Edenor (vencen en 12-19 días)',
      porQue: 'Estamos fuera del plazo de renovación estándar (30-45 días). Fast track es la única vía viable. Si no se activa en 72hs, la paralización de obra es inevitable.',
      areaLider: 'Contratistas FSC y CMC (supervisión Gerencia de Operaciones)',
      kpi: 'Factibilidades vencidas (reducción de 33 a 31)',
      riesgoMitigado: 'Suspensión de servicios por factibilidades vencidas',
    },
    {
      accion: 'Convocar reunión de emergencia para decidir viabilidad de entrega nov-2026 de EL PORTAL DE ROCA',
      porQue: 'Triple bloqueo activo: hormigón vencido 516 días + mampostería vencida 272 días + Visado Parcelaria vence en 14 días. Decidir: ¿replanificar Q1 2027 o acelerar con sobrecosto?',
      areaLider: 'Gerencia de Obras (con Gestoría, Factibilidades y Finanzas)',
      kpi: 'Incumplimientos de entrega (prevención)',
      riesgoMitigado: 'Incumplimiento entregas Q4 2026',
    },
    {
      accion: 'Solicitar a Arquitectura lista priorizada de 3 obras para cierre en mayo',
      porQue: 'De 15 obras estancadas, solo 3 deben priorizarse para desbloquear pipeline. Arquitectura debe identificar cuáles tienen mayor impacto en flujo de caja 2027.',
      areaLider: 'Gerencia de Arquitectura (validación Dirección Comercial)',
      kpi: 'Obras estancadas en arquitectura (reducción de 15 a 12)',
      riesgoMitigado: 'Estancamiento arquitectura que bloquea pipeline productivo',
    },
  ],
  d30: [
    {
      accion: 'Auditoría de estado de 42 obras en limbo + 7 factibilidades sin fecha + 56 obras no arrancadas',
      porQue: 'La empresa no conoce el estado de 105 obras (47% del portfolio). Cada obra debe reclasificarse: Activa / Finalizada / Cancelada / En espera.',
      areaLider: 'Gerencia de Administración (soporte Obras, Comercial, Factibilidades)',
      kpi: 'Obras en limbo (reducción de 42 a 0), Factibilidades sin fecha (reducción de 7 a 0)',
      riesgoMitigado: 'Ceguera operativa sobre portfolio real',
    },
    {
      accion: 'Cancelar formalmente las 4 obras vencidas sin contratista: VERGARA 2250, ROCA GOLF, FRUGONE/LA MERCED, 25 DE MAYO 956',
      porQue: 'Vencidas desde 2020 (6 años) y sin contratista = abandono operativo confirmado. Cancelación libera cupo ante Edenor y limpia portfolio de obras zombie.',
      areaLider: 'Gerencia de Factibilidades (validación Dirección General)',
      kpi: 'Factibilidades vencidas (reducción de 33 a 29)',
      riesgoMitigado: 'Portfolio inflado por obras zombie',
    },
    {
      accion: 'Implementar sistema de priorización comercial en Arquitectura (scoring por impacto en flujo de caja)',
      porQue: 'Backlog de 916 ítems sin criterio de priorización. Obras con score alto reciben 70% del esfuerzo del equipo. Reducción esperada de ítems estancados en 30 días.',
      areaLider: 'Gerencia de Arquitectura (coordinación Dirección Comercial)',
      kpi: 'Balance neto de ítems cerrados (aumento de +31 a +50/mes)',
      riesgoMitigado: 'Estancamiento en arquitectura',
    },
    {
      accion: 'Activar campañas de preventa para BOSCH Y ORO, Bustillo 357 y Roca 1650 (descuento 5-8%)',
      porQue: 'Estas 3 obras suman descalce promedio de +22pp. Objetivo: vender 20-25% del stock en 30 días para reducir exposición a sobrestock.',
      areaLider: 'Gerencia Comercial',
      kpi: 'Descalce avance/vendido (reducción de +19pp promedio a +12pp)',
      riesgoMitigado: 'Sobrestock masivo por desacople comercial',
    },
    {
      accion: 'Gestionar reunión institucional con Municipio de Tres de Febrero para destrabar Visados de Parcelaria',
      porQue: '3 obras bloqueadas en el mismo municipio. Causa aún no diagnosticada (normativa nueva vs. capacidad administrativa colapsada). Requiere intervención política.',
      areaLider: 'Gerencia de Gestoría (soporte Relaciones Institucionales)',
      kpi: 'Obras atrasadas en gestoría (reducción de 23 a 20)',
      riesgoMitigado: 'Colapso de gestión municipal en Tres de Febrero',
    },
  ],
  d90: [
    {
      accion: 'Plan masivo de renovación de las 33 factibilidades vencidas (ritmo: 10/mes, prioridad Edenor)',
      porQue: 'Paridad 33/33 no es sostenible. Requiere contratación temporal de 2 gestores adicionales de factibilidades para sostener el ritmo sin colapsar equipo actual.',
      areaLider: 'Gerencia de Operaciones (soporte Contratistas y Factibilidades)',
      kpi: 'Factibilidades vencidas (reducción de 33 a 0), ratio vigentes/vencidas (de 50/50 a 100/0)',
      riesgoMitigado: 'Suspensión masiva de servicios por Edenor / AYSA',
    },
    {
      accion: 'Implementar sincronización mensual obligatoria entre Obras y Comercial',
      porQue: '15 obras con 0% vendido evidencian desconexión operativa estructural. Reunión mensual define: qué obras cierran diseño en próximos 60 días y qué campaña comercial se activa.',
      areaLider: 'Dirección General (supervisión reunión mensual)',
      kpi: 'Obras con 0% vendido (reducción de 15 a <5)',
      riesgoMitigado: 'Sobrestock por desacople comercial',
    },
    {
      accion: 'Auditar y regularizar las 8 obras con requerimiento de cámara Edenor — replanificar cronogramas',
      porQue: 'Atraso estructural de 105-155 días no reflejado en fechas de entrega oficiales. Compradores deben recibir nuevas fechas proactivamente antes de que perciban el incumplimiento.',
      areaLider: 'Gerencia de Obras (con Factibilidades y Gestoría)',
      kpi: 'Cronogramas realistas (ajuste), incumplimientos de entrega (prevención)',
      riesgoMitigado: 'Desajuste de cronogramas por cámara no considerada',
    },
    {
      accion: 'Decisión estratégica sobre 14 obras de arquitectura con <10% avance: continuar vs. cancelar',
      porQue: '532 ítems pendientes en proyectos que prácticamente no iniciaron (58% del backlog). Evaluar viabilidad comercial + impacto en flujo de caja para liberar recursos hacia proyectos críticos.',
      areaLider: 'Dirección General (con Arquitectura, Comercial, Finanzas)',
      kpi: 'Backlog arquitectura (reducción de 916 a <400)',
      riesgoMitigado: 'Estancamiento que bloquea pipeline productivo',
    },
    {
      accion: 'Implementar dashboard de alertas automáticas para triple bloqueo cruzado',
      porQue: 'EL PORTAL DE ROCA no fue detectada a tiempo. Sistema debe alertar a Dirección General cuando una obra acumula 2 de 3 condiciones: factibilidad vencida + hito constructivo vencido + trámite municipal próximo a vencer.',
      areaLider: 'Gerencia de Sistemas (validación Operaciones)',
      kpi: 'Tiempo de reacción a bloqueos (de 30 días a 5 días)',
      riesgoMitigado: 'Bloqueos operativos no detectados a tiempo',
    },
  ],
};
