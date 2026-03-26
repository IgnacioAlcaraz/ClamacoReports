const { StateGraph, START, END, Send, Annotation } = require('@langchain/langgraph');
const { ChatAnthropic } = require('@langchain/anthropic');

// ── Modelos (lazy init para que la API key exista al momento de uso) ────────────
let _llmFast = null;
let _llmSmart = null;
function getLlmFast() {
  if (!_llmFast) _llmFast = new ChatAnthropic({ model: 'claude-haiku-4-5-20251001', temperature: 0 });
  return _llmFast;
}
function getLlmSmart() {
  if (!_llmSmart) _llmSmart = new ChatAnthropic({ model: 'claude-sonnet-4-6', temperature: 0.3 });
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
  periodo:      Annotation(),                    // string
  areas:        Annotation(),                    // { obras, comercial, finanzas, cx }
  areaAnalyses: Annotation({                     // acumula resultados de los 4 workers
    reducer:  (current, update) => current.concat(update),
    default:  () => [],
  }),
  result:       Annotation(),                    // output final estructurado
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

  const prompt = `Sos un analista empresarial senior. Analizá el siguiente reporte de área.

ÁREA: ${label}
PERÍODO: ${state.periodo || 'Actual'}

SEMÁFORO DE ESTADO:
${semaforoText}

HALLAZGOS PRINCIPALES:
${hallazgosText}

Respondé ÚNICAMENTE con un objeto JSON válido (sin markdown, sin \`\`\`):
{
  "area": "${area}",
  "label": "${label}",
  "problemas_criticos": ["descripción breve del problema 1", "..."],
  "causas_raiz": ["causa identificada 1", "..."],
  "impacto_cross_area": "descripción de cómo este área impacta a las demás"
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

  const prompt = `Sos un director estratégico. Tenés los análisis individuales de 4 áreas del período ${state.periodo}.

ANÁLISIS POR ÁREA:
${analysesJson}

Tu tarea es generar un análisis ejecutivo unificado que conecte los problemas entre áreas.
Respondé ÚNICAMENTE con un objeto JSON válido (sin markdown, sin \`\`\`):
{
  "resumen_ejecutivo": "párrafo ejecutivo de 2-3 oraciones que describe el estado general",
  "cuellos_de_botella": [
    {
      "titulo": "nombre corto del cuello de botella",
      "descripcion": "explicación de por qué frena a la organización",
      "areas_afectadas": ["obras", "finanzas"]
    }
  ],
  "causas_raiz": [
    {
      "causa": "causa raíz identificada",
      "evidencia": "dato concreto del reporte que la evidencia",
      "areas": ["comercial", "cx"]
    }
  ],
  "recomendaciones": [
    {
      "prioridad": "alta",
      "accion": "acción concreta a tomar",
      "impacto_esperado": "qué mejora si se implementa",
      "plazo": "inmediato | 30 días | 60 días | 90 días"
    }
  ]
}

Reglas:
- Incluí 2-4 cuellos de botella ordenados de mayor a menor criticidad
- Incluí 2-4 causas raíz con evidencia numérica del reporte
- Incluí 3-5 recomendaciones ordenadas de mayor a menor urgencia
- Sé específico con números y datos del reporte
- Conectá problemas entre áreas cuando exista relación`;

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
