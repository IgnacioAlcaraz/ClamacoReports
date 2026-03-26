const { StateGraph, START, END, Send, Annotation } = require('@langchain/langgraph');
const { ChatOpenAI } = require('@langchain/openai');

// ── Modelos (lazy init para que la API key exista al momento de uso) ────────────
let _llmFast = null;
let _llmSmart = null;
function getLlmFast() {
  if (!_llmFast) _llmFast = new ChatOpenAI({ model: 'gpt-4.1-mini', temperature: 0 });
  return _llmFast;
}
function getLlmSmart() {
  if (!_llmSmart) _llmSmart = new ChatOpenAI({ model: 'gpt-4.1', temperature: 0.3 });
  return _llmSmart;
}

const AREA_LABELS = {
  obras:     'Obras y Construcción',
  comercial: 'Comercial y Ventas',
  finanzas:  'Finanzas y Cobranzas',
  cx:        'Customer Experience (CX)',
};

// ── Estado del grafo ───────────────────────────────────────────────────────────
const AnalysisAnnotation = Annotation.Root({
  periodo:      Annotation(),
  areas:        Annotation(),
  areaAnalyses: Annotation({
    reducer:  (current, update) => current.concat(update),
    default:  () => [],
  }),
  result:       Annotation(),
});

// ── Nodo worker: analiza un área individual ────────────────────────────────────
async function analyzeArea(state) {
  const { area, data } = state;
  const label = AREA_LABELS[area] || area;

  const semaforoText = (data.semaforo || [])
    .map(s => `  - ${s.subarea}: ${s.estado} — ${s.metrica}`)
    .join('\n');

  const hallazgosText = (data.hallazgos || [])
    .map((h, i) => `  ${i + 1}. ${h}`)
    .join('\n');

  const prompt = `Sos un analista empresarial senior especializado en diagnóstico operativo.
Analizá el siguiente reporte de área con MÁXIMA ESPECIFICIDAD.

ÁREA: ${label}
PERÍODO: ${state.periodo || 'Actual'}

SEMÁFORO DE ESTADO:
${semaforoText}

HALLAZGOS PRINCIPALES:
${hallazgosText}

INSTRUCCIONES CRÍTICAS:
- Cada problema, causa y logro DEBE citar el indicador exacto y su valor numérico del semáforo (ej: "mora en 42% vs meta 20%", NO "problemas de cobranza")
- metricas_en_riesgo: listá SOLO indicadores en rojo o amarillo con sus valores exactos
- logros: listá SOLO indicadores en verde o mejoras concretas con su dato
- Si no hay datos suficientes para ser específico, decí exactamente qué falta
- NUNCA uses frases genéricas como "es importante mejorar", "se debe trabajar en", "hay oportunidades de mejora"

Respondé ÚNICAMENTE con un objeto JSON válido (sin markdown, sin \`\`\`):
{
  "area": "${area}",
  "label": "${label}",
  "problemas_criticos": [
    "problema específico con dato: ej 'Avance de obra en 34% vs meta 60% del período'"
  ],
  "metricas_en_riesgo": [
    { "metrica": "nombre del KPI", "valor_actual": "valor exacto", "estado": "rojo o amarillo", "meta": "valor objetivo" }
  ],
  "logros": [
    "logro concreto con dato: ej 'Satisfacción CX en 4.6/5, superando meta de 4.2'"
  ],
  "causas_raiz": [
    "causa con evidencia específica del reporte"
  ],
  "impacto_cross_area": "cómo los problemas de esta área impactan específicamente a las otras, citando datos"
}`;

  const response = await getLlmFast().invoke(prompt);
  let analysis;
  try {
    const text = typeof response.content === 'string'
      ? response.content
      : response.content[0]?.text || '';
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    analysis = JSON.parse(jsonMatch[0]);
  } catch {
    analysis = {
      area,
      label,
      problemas_criticos: [],
      metricas_en_riesgo: [],
      logros: [],
      causas_raiz: [],
      impacto_cross_area: 'No se pudo analizar esta área.',
    };
  }

  return { areaAnalyses: [analysis] };
}

// ── Nodo fan-out: distribuye análisis en paralelo via Send ─────────────────────
function fanOut(state) {
  return Object.entries(state.areas).map(
    ([area, data]) => new Send('analyze_area', { area, data, periodo: state.periodo })
  );
}

// ── Nodo síntesis: unifica los 4 análisis en resultado ejecutivo ───────────────
async function synthesize(state) {
  const analysesJson = JSON.stringify(state.areaAnalyses, null, 2);

  const prompt = `Sos un director estratégico con visión sistémica. Tenés los análisis detallados de 4 áreas del período ${state.periodo}.

ANÁLISIS POR ÁREA (con métricas exactas):
${analysesJson}

Tu tarea es generar un análisis ejecutivo cruzado que conecte patrones entre áreas.

INSTRUCCIONES CRÍTICAS — ESPECIFICIDAD OBLIGATORIA:
- NUNCA uses frases genéricas como "es importante mejorar X", "se recomienda trabajar en", "hay oportunidades de mejora"
- Cada punto DEBE citar el dato o métrica exacta del reporte que lo sustenta
- interdependencias: identificá cómo el problema de un área causa o agrava el de otra (con datos específicos de ambas)
- alertas_tempranas: SOLO indicadores actualmente en amarillo que podrían volverse rojo; explicá por qué con el dato actual
- logros_destacados: SOLO cosas que realmente están bien (verde), con su impacto concreto en el negocio
- Si dos áreas tienen problemas relacionados, conectalos explícitamente

Respondé ÚNICAMENTE con un objeto JSON válido (sin markdown, sin \`\`\`):
{
  "resumen_ejecutivo": "2-3 oraciones con los números clave: qué está crítico, qué está bien, cuál es el patrón dominante del período",
  "cuellos_de_botella": [
    {
      "titulo": "nombre corto del cuello de botella",
      "descripcion": "por qué frena a la organización, con dato exacto",
      "areas_afectadas": ["obras", "finanzas"]
    }
  ],
  "causas_raiz": [
    {
      "causa": "causa raíz identificada",
      "evidencia": "dato numérico concreto del reporte que la evidencia",
      "areas": ["comercial", "cx"]
    }
  ],
  "alertas_tempranas": [
    {
      "alerta": "descripción de qué puede deteriorarse",
      "area": "nombre_area",
      "metrica_actual": "valor actual del indicador en amarillo",
      "riesgo": "qué pasa si no se actúa en los próximos 30 días"
    }
  ],
  "logros_destacados": [
    {
      "logro": "descripción concreta del logro con el dato",
      "areas": ["area1"],
      "impacto": "por qué esto es relevante para el negocio"
    }
  ],
  "interdependencias": [
    {
      "area_origen": "area que genera el problema",
      "areas_impactadas": ["area1", "area2"],
      "descripcion": "cómo el problema en área_origen afecta a las otras, con datos de ambas"
    }
  ],
  "recomendaciones": [
    {
      "prioridad": "alta",
      "accion": "título corto de la acción concreta",
      "responsable": "área o rol responsable",
      "contexto": "por qué es necesaria esta acción: qué problema específico del reporte la origina, con el dato exacto",
      "como_implementar": "pasos concretos para ejecutarla, en 2-4 oraciones",
      "impacto_esperado": "resultado medible: qué métrica mejora y en cuánto aproximadamente",
      "plazo": "inmediato | 30 días | 60 días | 90 días"
    }
  ]
}

Reglas de cantidad:
- 2-4 cuellos de botella, ordenados de mayor a menor criticidad
- 2-4 causas raíz con evidencia numérica
- 2-4 alertas tempranas (solo amarillos reales)
- 1-3 logros destacados (solo verdes reales, no inventes)
- 1-3 interdependencias (solo las realmente evidentes en los datos)
- 3-5 recomendaciones ordenadas de mayor a menor urgencia`;

  const response = await getLlmSmart().invoke(prompt);
  let result;
  try {
    const text = typeof response.content === 'string'
      ? response.content
      : response.content[0]?.text || '';
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    result = JSON.parse(jsonMatch[0]);
  } catch {
    result = {
      resumen_ejecutivo: 'No se pudo generar el análisis ejecutivo.',
      cuellos_de_botella: [],
      causas_raiz: [],
      alertas_tempranas: [],
      logros_destacados: [],
      interdependencias: [],
      recomendaciones: [],
    };
  }

  return { result };
}

// ── Construcción del grafo ─────────────────────────────────────────────────────
const graph = new StateGraph(AnalysisAnnotation)
  .addNode('analyze_area', analyzeArea)
  .addNode('synthesize', synthesize)
  .addConditionalEdges(START, fanOut, ['analyze_area'])
  .addEdge('analyze_area', 'synthesize')
  .addEdge('synthesize', END)
  .compile();

module.exports = { graph };
