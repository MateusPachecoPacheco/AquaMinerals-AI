// AquaAI Knowledge Base Service
// Implements RAG (Retrieval Augmented Generation) pattern for intelligent responses
// Evolução: Respostas dinâmicas baseadas em contexto e intenções múltiplas
// Atualização: Base de conhecimento oficial do AquaMinerals com foco educacional/científico

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

// ============================================================================
// BASE DE CONHECIMENTO OFICIAL - AQUAMINERALS
// Estas informações representam o conhecimento verificado do projeto.
// A IA deve utilizar APENAS estas fontes para gerar respostas confiáveis.
// ============================================================================

const KNOWLEDGE_BASE: KnowledgeDocument[] = [
  {
    id: "o_que_e_aquaminerals",
    title: "O que é o AquaMinerals?",
    category: "projeto",
    content: `O AquaMinerals é uma startup/projeto que desenvolveu um site e aplicativo para mapear o potencial de minerais marinhos em Madre de Deus, unindo tecnologia, ciência e sustentabilidade.

O projeto prioriza estudo + mapeamento + análise de dados antes de qualquer exploração. O objetivo é incentivar decisões mais sustentáveis.

A tecnologia depende cada vez mais de minerais estratégicos, sendo importante estudar formas mais responsáveis de compreender e utilizar esses recursos.

Objetivo principal: Transformar dados do ambiente marinho em conhecimento que possa apoiar pesquisa, inovação e sustentabilidade, começando por Madre de Deus.`,
    keywords: [
      "aquaminerals",
      "projeto",
      "startup",
      "mapeamento",
      "minerais marinhos",
      "madre de deus",
      "tecnologia",
      "ciência",
      "sustentabilidade",
      "objetivo",
      "finalidade",
      "propósito",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "minerais_estrategicos",
    title: "O que são Minerais Estratégicos?",
    category: "minerais",
    content: `São minerais essenciais para a produção de baterias, celulares, computadores, veículos elétricos e outras tecnologias modernas.

Os oceanos contêm aproximadamente 3,5% de sais dissolvidos. Os principais minerais monitorados incluem:

- Sódio (Na): Indústria química, dessalinização
- Magnésio (Mg): Ligas metálicas leves, suplementos
- Cálcio (Ca): Construção, suplementos alimentícios
- Potássio (K): Fertilizantes agrícolas, farmacêutica
- Lítio (Li): Baterias de alta performance, veículos elétricos
- E outros 33 elementos adicionais

Total de minerais monitorados: 37 tipos distintos.

Destino dos minerais: Indústria tecnológica, setor energético, materiais avançados, pesquisa científica, aplicações medicinais.`,
    keywords: [
      "minerais estratégicos",
      "minerais",
      "baterias",
      "celulares",
      "computadores",
      "veículos elétricos",
      "tecnologias",
      "lítio",
      "magnésio",
      "sódio",
      "cálcio",
      "potássio",
      "extração",
      "composição",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "protecao_ambiental",
    title: "Como o Projeto Protege o Meio Ambiente?",
    category: "sustentabilidade",
    content: `Ao priorizar o estudo e o mapeamento antes de qualquer exploração, o projeto incentiva decisões mais sustentáveis.

Princípios de sustentabilidade do AquaMinerals:

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
      "proteção ambiental",
      "meio ambiente",
      "sustentabilidade",
      "impacto ambiental",
      "preservação",
      "conservação",
      "ods",
      "monitoramento",
      "estudo",
      "mapeamento",
      "exploração",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "importancia_projeto",
    title: "Por que o Projeto é Importante para o Futuro?",
    category: "projeto",
    content: `Porque a tecnologia depende cada vez mais de minerais estratégicos, e precisamos encontrar formas mais responsáveis de estudá-los e utilizá-los.

A tecnologia moderna depende de minerais para:
- Baterias de dispositivos eletrônicos
- Veículos elétricos
- Computadores e smartphones
- Infraestrutura de telecomunicações
- Energias renováveis

O AquaMinerals pode contribuir para:
- Pesquisa científica sobre recursos marinhos
- Inovação tecnológica em extração sustentável
- Sustentabilidade ambiental através do monitoramento
- Desenvolvimento regional começando por Madre de Deus

É fundamental estudar formas responsáveis de compreender e utilizar esses recursos antes de qualquer exploração.`,
    keywords: [
      "importância",
      "futuro",
      "relevância",
      "tecnologia",
      "minerais estratégicos",
      "responsabilidade",
      "pesquisa",
      "inovação",
      "desenvolvimento",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "objetivo_principal",
    title: "Qual é o Objetivo Principal do AquaMinerals?",
    category: "projeto",
    content: `Transformar dados do ambiente marinho em conhecimento que apoie pesquisas, inovação e sustentabilidade, começando por Madre de Deus.

O projeto busca:
- Mapear o potencial de minerais marinhos
- Unir tecnologia, ciência e sustentabilidade
- Priorizar estudo e análise antes da exploração
- Incentivar decisões mais sustentáveis
- Apoiar pesquisas científicas
- Promover inovação tecnológica
- Contribuir para a sustentabilidade ambiental

Localização: Baía de Madre de Deus, Bahia, Brasil.

Pontos de monitoramento: MDD-01 (Baía de Aratu), MDD-02 (Ilha de Bimbarras), MDD-03 (Suape Norte), MDD-04 (Rio Paraguaçu), MDD-05 (Ponta de Suape), MDD-06 (Ilha das Fontes).`,
    keywords: [
      "objetivo principal",
      "missão",
      "finalidade",
      "propósito",
      "meta",
      "foco",
      "transformar dados",
      "conhecimento",
      "pesquisas",
      "inovação",
      "sustentabilidade",
    ],
    lastUpdated: "2024-01-15",
  },
  {
    id: "localizacao_pontos",
    title: "Localização e Pontos de Monitoramento",
    category: "projeto",
    content: `O projeto está localizado na Baía de Madre de Deus, Bahia, Brasil.

Pontos de monitoramento:
- MDD-01: Baía de Aratu
- MDD-02: Ilha de Bimbarras
- MDD-03: Suape Norte
- MDD-04: Rio Paraguaçu
- MDD-05: Ponta de Suape
- MDD-06: Ilha das Fontes

Estes pontos foram selecionados por sua relevância estratégica e importância ecológica para o estudo de minerais marinhos.`,
    keywords: [
      "localização",
      "pontos de monitoramento",
      "madre de deus",
      "bahia",
      "baía",
      "mdd",
      "região",
      "área",
    ],
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
  context?: Message[],
): RAGResponse {
  if (results.length === 0) {
    // FALLBACK INTELIGENTE - Não inventar informações
    // Esta é uma regra crítica: nunca inventar fatos sobre o projeto
    return {
      answer:
        "Essa informação não está disponível na base de conhecimento atual do AquaMinerals. " +
        "Posso explicar o que já sabemos sobre: o que é o AquaMinerals, minerais estratégicos, " +
        "como o projeto protege o meio ambiente, por que o projeto é importante, e qual é o objetivo principal.",
      sources: [],
      confidence: 0,
      followUpQuestions: [
        "O que é o AquaMinerals?",
        "O que são minerais estratégicos?",
        "Como o projeto contribui para a sustentabilidade?",
        "Qual é o objetivo do projeto?",
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
      projeto: "",
      sustentabilidade: "",
      minerais: "",
      tecnologia: "",
      impacto_economico: "",
      impacto_ambiental: "",
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
        answer += `\n\n${additionalInfo}`;
      }
    }

    // Enriquecer resposta com contexto da conversa (memória contextual)
    if (context && context.length > 0) {
      const lastUserMessage = context.filter((m) => m.role === "user").pop();
      if (lastUserMessage && lastUserMessage.content !== query) {
        // Detectar continuidade de tópico
        const prevIntent = classifyIntent(lastUserMessage.content);
        if (prevIntent.category === intent.category) {
          answer += "\n\nComplementando nossa conversa anterior, ";
        }
      }
    }
  }

  // Gerar perguntas de acompanhamento mais inteligentes
  const followUpQuestions: string[] = [];

  // Baseado na categoria detectada
  switch (intent.category) {
    case "projeto":
      followUpQuestions.push(
        "O que são minerais estratégicos?",
        "Como o projeto protege o meio ambiente?",
        "Por que Madre de Deus foi escolhida?",
      );
      break;
    case "minerais":
      followUpQuestions.push(
        "Para que servem esses minerais?",
        "A extração prejudica o meio ambiente?",
        "Quantos tipos de minerais são monitorados?",
      );
      break;
    case "sustentabilidade":
      followUpQuestions.push(
        "Quais parâmetros são monitorados?",
        "O projeto contribui para quais ODS?",
        "Como é classificado o status ambiental?",
      );
      break;
    case "tecnologia":
      followUpQuestions.push(
        "Como funciona a IA AquaAI?",
        "Que tecnologias são utilizadas?",
        "Os dados são acessíveis ao público?",
      );
      break;
    case "impacto_economico":
      followUpQuestions.push(
        "Quais benefícios para a comunidade local?",
        "Como são distribuídos os royalties?",
        "Há geração de empregos?",
      );
      break;
    case "impacto_ambiental":
      followUpQuestions.push(
        "O que acontece em caso de emergência?",
        "Como funciona o monitoramento?",
        "Quais são os limites críticos?",
      );
      break;
    default:
      followUpQuestions.push(
        "O que é o AquaMinerals?",
        "O que são minerais estratégicos?",
        "Qual é o objetivo do projeto?",
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

    // 3. Gerar resposta com contexto da conversa
    const response = generateResponse(query, searchResults, intent, context);

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
