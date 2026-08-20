// AquaAI Knowledge Base Service
// Implements RAG (Retrieval Augmented Generation) pattern for intelligent responses

import type {
  KnowledgeDocument,
  KnowledgeCategory,
  Message,
  IntentClassification,
  RetrievalResult,
  RAGResponse,
  SearchQuery,
  ServiceResponse,
} from "@/types/ai";

// Base de conhecimento estática - em produção seria carregada dinamicamente
const KNOWLEDGE_BASE: KnowledgeDocument[] = [
  {
    id: "projeto",
    title: "Visão Geral do Projeto",
    category: "projeto",
    content: `O AquaMinerals é uma plataforma tecnológica de demonstração sobre extração sustentável de minerais presentes na água do oceano. O projeto utiliza inovação, inteligência artificial e análise de dados para apresentar como a exploração responsável dos recursos marítimos pode gerar desenvolvimento econômico sem causar impactos ambientais negativos.

Localização: Baía de Madre de Deus, Bahia, Brasil.

Pontos de monitoramento: MDD-01 (Baía de Aratu), MDD-02 (Ilha de Bimbarras), MDD-03 (Suape Norte), MDD-04 (Rio Paraguaçu), MDD-05 (Ponta de Suape), MDD-06 (Ilha das Fontes).

Objetivos: Demonstrar que é possível conciliar desenvolvimento econômico com preservação ambiental através de tecnologia e inovação.`,
    keywords: [
      "projeto",
      "objetivo",
      "localização",
      "madre de deus",
      "bahia",
      "monitoramento",
      "pontos",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "minerais",
    title: "Minerais Oceânicos",
    category: "minerais",
    content: `Os oceanos contêm aproximadamente 3,5% de sais dissolvidos. Os principais minerais monitorados são:

Sódio (Na): 38% - Indústria química, dessalinização
Magnésio (Mg): 22% - Ligas metálicas leves, suplementos
Cálcio (Ca): 14% - Construção, suplementos alimentícios
Potássio (K): 12% - Fertilizantes agrícolas, farmacêutica
Outros: 14% - 33 elementos adicionais incluindo lítio, ferro, zinco

Total de minerais monitorados: 37 tipos distintos.

Destino dos minerais: Indústria tecnológica, setor energético, materiais avançados, pesquisa científica, aplicações medicinais.`,
    keywords: [
      "minerais",
      "sódio",
      "magnésio",
      "cálcio",
      "potássio",
      "lítio",
      "extração",
      "composição",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "sustentabilidade",
    title: "Sustentabilidade Ambiental",
    category: "sustentabilidade",
    content: `Princípios de sustentabilidade do AquaMinerals:

1. Mínimo Impacto Ambiental: Processos não invasivos, monitoramento contínuo
2. Economia Circular: Aproveitamento integral, minimização de resíduos
3. Transparência: Dados abertos, metodologia verificável

Monitoramento de parâmetros: pH (7.8-8.4 ideal), temperatura (24-28°C), oxigênio dissolvido (>6 mg/L), salinidade (33-37 PSU), turbidez (<5 NTU).

Classificação de status:
- Ótimo (Verde): Todos parâmetros dentro da faixa ideal
- Atenção (Amarelo): Um ou mais parâmetros fora da faixa
- Crítico (Vermelho): Múltiplos parâmetros críticos, requer intervenção

ODS 14 - Vida na Água: Contribuição direta para conservação dos oceanos e uso sustentável dos recursos marinhos.`,
    keywords: [
      "sustentabilidade",
      "meio ambiente",
      "impacto",
      "ods",
      "monitoramento",
      "ph",
      "temperatura",
      "status",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "tecnologia",
    title: "Tecnologia Utilizada",
    category: "tecnologia",
    content: `Stack tecnológico do AquaMinerals:

Frontend: React 19 com TypeScript, TanStack Router, TailwindCSS 4, Framer Motion, Recharts, React Leaflet.

Backend: Node.js com Fastify, Prisma ORM, PostgreSQL, APIs REST.

Inteligência Artificial: Processamento de linguagem natural, Sistema RAG (Retrieval Augmented Generation), Base de conhecimento especializada.

Arquitetura da AquaAI:
1. Recebe pergunta em linguagem natural
2. Processa e identifica intenção
3. Busca informações na base de conhecimento
4. Gera resposta contextualizada

Infraestrutura: Docker, CI/CD, Monitoramento e observabilidade.`,
    keywords: [
      "tecnologia",
      "react",
      "typescript",
      "nodejs",
      "ia",
      "inteligência artificial",
      "arquitetura",
      "stack",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "impacto_economico",
    title: "Impacto Econômico",
    category: "impacto_economico",
    content: `Impactos econômicos do AquaMinerals para regiões costeiras:

Geração de Empregos:
- Pesquisa: 15-25 empregos diretos
- Implementação: 50-100 empregos diretos
- Operação: 30-60 empregos diretos
- Expansão: 100-200 empregos diretos
Cada emprego direto gera ~3 empregos indiretos.

Receitas Fiscais: Royalties distribuídos entre União (45%), Estado (25%) e Municípios (30%).

Multiplicador Econômico: Cada R$ 1 investido gera R$ 5 em atividade econômica regional.

Projeções (5 anos):
- Cenário Conservador: R$ 20 milhões/ano
- Cenário Moderado: R$ 80 milhões/ano
- Cenário Otimista: R$ 250 milhões/ano

Benefícios para comunidades: Diversificação econômica, capacitação profissional, melhoria de infraestrutura, desenvolvimento regional.`,
    keywords: [
      "econômico",
      "empregos",
      "receita",
      "royalties",
      "investimento",
      "desenvolvimento",
      "comunidade",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "impacto_ambiental",
    title: "Impacto Ambiental e Monitoramento",
    category: "impacto_ambiental",
    content: `Compromisso ambiental do AquaMinerals:

Parâmetros Monitorados Continuamente:
- pH: Limite crítico < 7.5 ou > 8.5
- Temperatura: Variação máxima 2°C
- Oxigênio Dissolvido: Mínimo 5 mg/L
- Turbidez: Máximo 10 NTU
- Salinidade: 33-40 PSU

Protocolos de Emergência:
Nível 1 - Anomalia Leve: Alerta e monitoramento intensificado
Nível 2 - Incidente Moderado: Notificação ao gestor ambiental
Nível 3 - Emergência: Suspensão total, notificação aos órgãos ambientais

Compensação Ambiental: 3.5% da receita destinado a projetos de conservação, pesquisa e educação ambiental.

Resultados: 95%+ dos dias em status "Ótimo" nos pontos principais.`,
    keywords: ["ambiental", "monitoramento", "emergência", "compensação", "parâmetros", "limites"],
    lastUpdated: "2024-01-15",
  },
];

// Normalização de texto para busca
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Extração de palavras-chave da pergunta
function extractKeywords(text: string): string[] {
  const normalized = normalizeText(text);
  const words = normalized.split(" ");

  // Remove stop words em português
  const stopWords = new Set([
    "o",
    "a",
    "os",
    "as",
    "um",
    "uma",
    "uns",
    "umas",
    "de",
    "do",
    "da",
    "dos",
    "das",
    "em",
    "no",
    "na",
    "nos",
    "nas",
    "para",
    "por",
    "per",
    "com",
    "sem",
    "que",
    "qual",
    "quais",
    "quanto",
    "quantos",
    "como",
    "quando",
    "onde",
    "se",
    "não",
    "sim",
    "é",
    "são",
    "foi",
    "foram",
    "ser",
    "estar",
    "eu",
    "você",
    "nós",
    "eles",
    "me",
    "te",
    "se",
    "nos",
    "vos",
    "este",
    "esta",
    "estes",
    "estas",
    "esse",
    "essa",
    "esses",
    "essas",
    "aquele",
    "aquela",
    "aqueles",
    "aquelas",
    "ao",
    "aos",
    "às",
    "mais",
    "menos",
    "muito",
    "pouco",
    "tudo",
    "todo",
    "toda",
    "todos",
    "todas",
    "algo",
    "nada",
    "alguém",
    "ninguém",
    "cada",
    "outro",
    "outros",
    "outra",
    "outras",
    "mesmo",
    "mesma",
    "mesmos",
    "mesmas",
    "próprio",
    "própria",
    "próprios",
    "próprias",
    "tal",
    "tais",
    "já",
    "ainda",
    "sempre",
    "nunca",
    "jamais",
    "bem",
    "mal",
    "só",
    "somente",
    "apenas",
    "também",
    "inclusive",
    "exceto",
    "mas",
    "porém",
    "contudo",
    "entretanto",
    "todavia",
    "ou",
    "ora",
    "quer",
    "porque",
    "pois",
    "portanto",
    "logo",
    "assim",
  ]);

  return words.filter((word) => word.length > 2 && !stopWords.has(word)).slice(0, 10);
}

// Classificação de intenção baseada em palavras-chave
function classifyIntent(query: string): IntentClassification {
  const normalized = normalizeText(query);

  const categoryKeywords: Record<KnowledgeCategory, string[]> = {
    projeto: [
      "projeto",
      "objetivo",
      "finalidade",
      "missão",
      "visão",
      "onde",
      "localização",
      "bahia",
      "madre",
    ],
    sustentabilidade: [
      "sustentabilidade",
      "ambiente",
      "ambiental",
      "eco",
      "preservação",
      "conservação",
      "ods",
      "verde",
    ],
    minerais: [
      "mineral",
      "minerais",
      "extração",
      "sódio",
      "magnésio",
      "cálcio",
      "potássio",
      "lítio",
      "composição",
    ],
    tecnologia: [
      "tecnologia",
      "técnico",
      "sistema",
      "plataforma",
      "software",
      "ia",
      "inteligência",
      "artificial",
    ],
    impacto_economico: [
      "econômico",
      "economia",
      "emprego",
      "receita",
      "lucro",
      "investimento",
      "custo",
      "valor",
      "dinheiro",
    ],
    impacto_ambiental: [
      "impacto",
      "dano",
      "poluição",
      "contaminação",
      "emergência",
      "risco",
      "monitoramento",
      "parâmetro",
    ],
    perguntas_frequentes: ["como", "o que", "qual", "quando", "onde", "por que", "quem", "quanto"],
  };

  let bestMatch: KnowledgeCategory = "perguntas_frequentes";
  let maxScore = 0;

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    const score = keywords.reduce((acc, keyword) => {
      return acc + (normalized.includes(normalizeText(keyword)) ? 1 : 0);
    }, 0);

    if (score > maxScore) {
      maxScore = score;
      bestMatch = category as KnowledgeCategory;
    }
  }

  // Extrair entidades
  const entities: Array<{ type: string; value: string; confidence: number }> = [];

  // Detectar minerais mencionados
  const minerals = ["sódio", "magnésio", "cálcio", "potássio", "lítio", "ferro", "zinco"];
  minerals.forEach((mineral) => {
    if (normalized.includes(mineral)) {
      entities.push({ type: "mineral", value: mineral, confidence: 0.9 });
    }
  });

  // Detectar locais mencionados
  const locations = ["madre de deus", "bahia", "baía de aratu", "suape", "paraguaçu"];
  locations.forEach((location) => {
    if (normalized.includes(location)) {
      entities.push({ type: "location", value: location, confidence: 0.85 });
    }
  });

  return {
    category: bestMatch,
    confidence: Math.min(maxScore / 3, 1),
    entities,
  };
}

// Busca semântica simplificada na base de conhecimento
function searchKnowledge(query: SearchQuery): RetrievalResult[] {
  const queryKeywords = extractKeywords(query.text);
  const normalizedQuery = normalizeText(query.text);

  const results: RetrievalResult[] = KNOWLEDGE_BASE.filter((doc) => {
    if (!query.categories || query.categories.length === 0) return true;
    return query.categories.includes(doc.category);
  })
    .map((doc) => {
      // Calcular score de relevância
      let relevanceScore = 0;

      // Match com título
      const normalizedTitle = normalizeText(doc.title);
      if (normalizedTitle.includes(normalizedQuery)) {
        relevanceScore += 3;
      }

      // Match com conteúdo
      const normalizedContent = normalizeText(doc.content);
      if (normalizedContent.includes(normalizedQuery)) {
        relevanceScore += 2;
      }

      // Match com palavras-chave
      queryKeywords.forEach((keyword) => {
        if (doc.keywords.some((k) => normalizeText(k).includes(keyword))) {
          relevanceScore += 1;
        }
        if (normalizedContent.includes(keyword)) {
          relevanceScore += 0.5;
        }
      });

      // Extrair trechos relevantes
      const excerpts: string[] = [];
      const sentences = doc.content.split(/[.\n]+/).filter((s) => s.trim().length > 0);

      for (const sentence of sentences) {
        const normalizedSentence = normalizeText(sentence);
        const matchCount = queryKeywords.filter((k) => normalizedSentence.includes(k)).length;
        if (matchCount > 0 && excerpts.length < 3) {
          excerpts.push(sentence.trim());
        }
      }

      return {
        documentId: doc.id,
        relevanceScore,
        excerpts: excerpts.slice(0, 3),
      };
    })
    .filter((r) => r.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, query.limit || 5);

  return results;
}

// Gerar resposta baseada nos resultados recuperados
function generateResponse(
  query: string,
  results: RetrievalResult[],
  intent: IntentClassification,
): RAGResponse {
  if (results.length === 0) {
    return {
      answer:
        "Desculpe, não encontrei informações específicas sobre isso na minha base de conhecimento atual. Posso ajudar com perguntas sobre o projeto AquaMinerals, minerais oceânicos, sustentabilidade, tecnologia utilizada, ou impactos econômico e ambiental.",
      sources: [],
      confidence: 0,
      followUpQuestions: [
        "Como funciona a extração sustentável?",
        "Quais minerais são monitorados?",
        "Onde o projeto está localizado?",
      ],
    };
  }

  // Construir resposta contextualizada
  const relevantDocs = results
    .map((r) => KNOWLEDGE_BASE.find((d) => d.id === r.documentId))
    .filter(Boolean) as KnowledgeDocument[];

  // Combinar informações dos documentos relevantes
  let answer = "";
  const sources: string[] = [];

  if (relevantDocs.length > 0) {
    // Usar o documento mais relevante como base
    const primaryDoc = relevantDocs[0];
    sources.push(primaryDoc.title);

    // Resposta inicial baseada na categoria
    const categoryIntros: Record<KnowledgeCategory, string> = {
      projeto: "Sobre o projeto AquaMinerals, ",
      sustentabilidade: "Em relação à sustentabilidade, ",
      minerais: "Quanto aos minerais oceânicos, ",
      tecnologia: "Sobre a tecnologia utilizada, ",
      impacto_economico: "No aspecto econômico, ",
      impacto_ambiental: "Regarding o impacto ambiental, ",
      perguntas_frequentes: "",
    };

    const intro = categoryIntros[intent.category] || "";

    // Extrair informação mais relevante
    const firstExcerpt = results[0]?.excerpts[0] || "";
    answer = `${intro}${firstExcerpt}`;

    // Adicionar contexto adicional se houver
    if (results.length > 1 && relevantDocs[1]) {
      sources.push(relevantDocs[1].title);
      const additionalInfo = results[1].excerpts[0];
      if (additionalInfo) {
        answer += `\n\nAlém disso, ${additionalInfo.toLowerCase()}`;
      }
    }
  }

  // Gerar perguntas de acompanhamento
  const followUpQuestions: string[] = [];
  if (intent.category === "projeto") {
    followUpQuestions.push(
      "Quais são os pontos de monitoramento?",
      "Como posso acessar o dashboard?",
    );
  } else if (intent.category === "minerais") {
    followUpQuestions.push(
      "Qual é o destino dos minerais extraídos?",
      "A extração prejudica o meio ambiente?",
    );
  } else if (intent.category === "sustentabilidade") {
    followUpQuestions.push(
      "Como é classificado o status ambiental?",
      "O projeto contribui para quais ODS?",
    );
  }

  return {
    answer,
    sources,
    confidence: Math.min(results[0].relevanceScore / 5, 1),
    followUpQuestions: followUpQuestions.slice(0, 3),
  };
}

// Função principal de processamento de perguntas
export async function processQuestion(
  query: string,
  context?: Message[],
): Promise<ServiceResponse<RAGResponse>> {
  try {
    if (!query || query.trim().length === 0) {
      return {
        success: false,
        error: "Pergunta vazia não é permitida",
      };
    }

    // 1. Classificar intenção
    const intent = classifyIntent(query);

    // 2. Buscar na base de conhecimento
    const searchResults = searchKnowledge({
      text: query,
      categories: intent.confidence > 0.3 ? [intent.category] : undefined,
      limit: 5,
    });

    // 3. Gerar resposta
    const response = generateResponse(query, searchResults, intent);

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error("Erro ao processar pergunta:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erro desconhecido ao processar pergunta",
    };
  }
}

// Exportar funções utilitárias para testes e uso direto
export { classifyIntent, searchKnowledge, extractKeywords, KNOWLEDGE_BASE };
