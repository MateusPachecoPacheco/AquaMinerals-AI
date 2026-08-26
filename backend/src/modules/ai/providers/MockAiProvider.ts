import type { IAiProvider } from "./IAiProvider.js";

export class MockAiProvider implements IAiProvider {
  // Normalização robusta: remove diacríticos, pontuação comum, trim, lower-case
  private static normalizeText(s: string): string {
    return (s || "")
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .trim()
      .toLowerCase()
      .replace(/[.?!]+$/g, "")
      .replace(/["'“”‘’(),;:\/\\]/g, "")
      .replace(/\s+/g, " ");
  }

  // Perguntas e respostas pré-configuradas (chaves normalizadas)
  private static preconfiguredQA: Record<string, string> = {
    [MockAiProvider.normalizeText("O que é o AquaMinerals?")]:
      "O AquaMinerals é uma startup que utiliza tecnologia e inteligência artificial para mapear o potencial de minerais presentes no mar de Madre de Deus, incentivando pesquisas sustentáveis.",
    [MockAiProvider.normalizeText("Por que procurar minerais no mar?")]:
      "Porque a água do mar e os sedimentos marinhos contêm diversos minerais que podem ser estudados como alternativas futuras de obtenção desses recursos.",
    [MockAiProvider.normalizeText("Como a AquaAI funciona?")]:
      "A AquaAI combina uma base de conhecimento com regras heurísticas para interpretar dados ambientais e responder perguntas sobre qualidade da água, minerais e pontos de monitoramento.",
    [MockAiProvider.normalizeText("Como a inteligência artificial ajuda?")]:
      "A inteligência artificial organiza e interpreta grandes volumes de dados ambientais para identificar padrões e áreas com maior potencial para pesquisas sustentáveis.",
    [MockAiProvider.normalizeText("O que é o mapa interativo?")]:
      "O Mapa Interativo mostra os pontos reais de monitoramento em Madre de Deus, BA, com coordenadas, indicadores e dados por estação de coleta.",
    [MockAiProvider.normalizeText("Os minerais que estão aptos para extração, para onde eles vão?")]:
      "Os minerais extraídos por meio da tecnologia AquaMinerals possuem como destino principal a cadeia produtiva industrial e tecnológica, onde podem ser componentes tecnológicos, indústria segmentos que dependem desses recursos. O objetivo do projeto não é minimizar impactos ambientais. utilizados como matéria-prima estratégica para diferentes setores. Após o processo sustentável de extração e tratamento, esses minerais podem ser direcionados para aplicações como fabricação de energética, produção de materiais avançados, pesquisa científica e outros apenas retirar minerais do oceano, mas criar uma solução sustentável capaz de transformar recursos naturais em oportunidades econômicas, promovendo inovação, desenvolvimento regional e geração de valor, sempre buscando minimizar impactos ambientais.",
    // Mantive as entradas longas preexistentes que você já tinha no projeto:
    [MockAiProvider.normalizeText(
      "Ela responde perguntas sobre o projeto e interpreta informações ambientais para explicar como o mapeamento inteligente pode auxiliar pesquisas."
    )]:
      "Ela responde perguntas sobre o projeto e interpreta informações ambientais para explicar como o mapeamento inteligente pode auxiliar pesquisas.",
    [MockAiProvider.normalizeText(
      "Ela organiza e interpreta dados ambientais para indicar áreas com maior potencial para futuras pesquisas."
    )]:
      "Ela organiza e interpreta dados ambientais para indicar áreas com maior potencial para futuras pesquisas.",
    [MockAiProvider.normalizeText(
      "É uma ferramenta que representa a região da Baía de Todos-os-Santos, mostrando áreas estudadas e informações ambientais."
    )]:
      "É uma ferramenta que representa a região da Baía de Todos-os-Santos, mostrando áreas estudadas e informações ambientais.",
    [MockAiProvider.normalizeText(
      "Priorizando o estudo e o mapeamento antes de qualquer exploração, reduzindo riscos e incentivando decisões responsáveis."
    )]:
      "Priorizando o estudo e o mapeamento antes de qualquer exploração, reduzindo riscos e incentivando decisões responsáveis.",
    [MockAiProvider.normalizeText(
      "Os minerais extraídos por meio da tecnologia AquaMinerals possuem como destino principal a cadeia produtiva industrial e tecnológica, onde podem ser componentes tecnológicos, indústria segmentos que dependem desses recursos. O objetivo do projeto não é minimizar impactos ambientais. utilizados como matéria-prima estratégica para diferentes setores. Após o processo sustentável de extração e tratamento, esses minerais podem ser direcionados para aplicações como fabricação de energética, produção de materiais avançados, pesquisa científica e outros apenas retirar minerais do oceano, mas criar uma solução sustentável capaz de transformar recursos naturais em oportunidades econômicas, promovendo inovação, desenvolvimento regional e geração de valor, sempre buscando minimizar impactos ambientais."
    )]:
      "Os minerais extraídos por meio da tecnologia AquaMinerals possuem como destino principal a cadeia produtiva industrial e tecnológica, onde podem ser componentes tecnológicos, indústria segmentos que dependem desses recursos. O objetivo do projeto não é minimizar impactos ambientais. utilizados como matéria-prima estratégica para diferentes setores. Após o processo sustentável de extra"
  };

  private knowledgeBase = {
    plataforma: {
      keywords: [
        "plataforma",
        "aquaminerals",
        "sistema",
        "site",
        "app",
        "o que é",
        "o que faz",
        "para que serve",
        "como funciona",
      ],
      response:
        "A AquaMinerals é uma plataforma web educativa e científica dedicada ao estudo e à extração sustentável de minerais presentes na água do mar, usando dados de monitoramento, mapas interativos e análise para apoiar pesquisas e decisões responsáveis.",
    },
    cadastro: {
      keywords: ["cadastrar", "cadastro", "criar conta", "registrar", "conta", "signup", "inscrever"],
      response:
        "Criar sua conta na AquaMinerals é simples e gratuito. Após o cadastro você poderá acessar dashboards, salvar relatórios e participar da comunidade.",
    },
    denuncia: {
      keywords: ["denúncia", "denuncia", "denunciar", "reportar", "incidente", "poluição", "mancha", "óleo"],
      response:
        "A seção de Denúncias Ambientais permite reportar incidentes como derramamentos e poluição. Informe local, descrição e evidências (fotos) para que a equipe acompanhe o caso.",
    },
    dashboard: {
      keywords: ["dashboard", "painel", "gráficos", "métricas", "indicadores", "dados", "estatísticas"],
      response:
        "O Dashboard apresenta indicadores como salinidade e pH, gráficos temporais e filtros para análise. Use-o para monitorar tendências e exportar dados.",
    },
    mapa: {
      keywords: ["mapa", "localização", "pontos", "geolocalização", "madre de deus", "bahia", "praia", "coleta"],
      response:
        "O Mapa Interativo mostra os pontos reais de monitoramento em Madre de Deus, BA, com coordenadas e dados científicos por estação.",
    },
    minerios: {
      keywords: ["minério", "minerio", "minerais", "magnésio", "litio", "lítio", "sal", "sódio", "cloreto", "extração"],
      response:
        "A AquaMinerals estuda minerais como magnésio, lítio e sais, investigando métodos sustentáveis de recuperação sem comprometer ecossistemas locais.",
    },
    comunidade: {
      keywords: ["comunidade", "newsletter", "assinar", "email", "fórum", "participar", "guardiões"],
      response:
        "A Comunidade AquaMinerals reúne cientistas, moradores e estudantes; você pode assinar a newsletter e participar de atividades locais.",
    },
    eventos: {
      keywords: ["evento", "eventos", "fórum", "agenda", "encontro", "reunião", "workshop"],
      response:
        "A Agenda de Eventos inclui fóruns, workshops e cursos sobre economia azul e monitoramento costeiro.",
    },
    sustentabilidade: {
      keywords: ["sustentável", "sustentabilidade", "preservação", "ecologia", "meio ambiente", "mangue", "manguezal"],
      response:
        "A sustentabilidade é o pilar central: monitoramento responsável, preservação de manguezais e práticas que priorizam impacto ambiental mínimo.",
    },
    destino: {
      keywords: ["destino", "para onde", "aptos para extração", "extração", "industrial", "tecnológica", "materia-prima"],
      response:
        "Minerais estudados podem ter usos industriais/tecnológicos, mas propostas de extração passam por avaliações ambientais e de pesquisa.",
    },
    contato: {
      keywords: ["contato", "falar", "whatsapp", "instagram", "suporte", "ajuda", "dúvida"],
      response:
        "Fale com a equipe AquaMinerals: WhatsApp +55 (71) 98795-2529 (atendimento em dias úteis).",
    },
    madrededeus: {
      keywords: ["madre de deus", "madre", "bahia", "todos os santos", "baía", "região", "local"],
      response:
        "Madre de Deus, Bahia é a região foco do projeto, com pontos de coleta na Baía de Todos-os-Santos para estudos locais.",
    },
  };

  async generateResponse(prompt: string, _context?: string): Promise<string> {
    const norm = MockAiProvider.normalizeText(prompt || "");

    // 0) Resposta pré-configurada: prioridade máxima (checagem por chave normalizada e por inclusão)
    const fixed = MockAiProvider.preconfiguredQA[norm];
    if (fixed) return fixed;

    // tentativa tolerante por inclusão
    for (const [key, answer] of Object.entries(MockAiProvider.preconfiguredQA)) {
      if (norm.includes(key) || key.includes(norm)) return answer;
    }

    // 1) Busca por correspondência na base de conhecimento (normalizando keywords)
    for (const [_category, data] of Object.entries(this.knowledgeBase)) {
      if (
        data.keywords.some((keyword: string) =>
          norm.includes(MockAiProvider.normalizeText(keyword)),
        )
      ) {
        return data.response;
      }
    }

    // 2) Respostas específicas por palavra-chave técnica (prioritárias)
    if (norm.includes("magnesio") || norm.includes("magnesium")) {
      return "O magnésio é um dos minerais presentes na água do mar; estudamos sua concentração e métodos sustentáveis de recuperação.";
    }

    if (norm.includes("salinidade") || norm.includes("sal")) {
      return "A salinidade média do Atlântico é ~35 ppt; em Madre de Deus observamos variações locais por influência fluvial e manguezais.";
    }

    if (norm.includes("ph") || norm.includes("acido") || norm.includes("acidez") || norm.includes("alcalino")) {
      return "O pH do mar é levemente alcalino (tipicamente 7.8–8.3). Monitorar pH é essencial para detectar acidificação e seus efeitos.";
    }

    // 3) Fallback inteligente para perguntas não mapeadas
    return `Olá! Sou a AquaAI, sua assistente na plataforma AquaMinerals.

Posso ajudar com:
- Sobre a plataforma e como funciona
- Dashboard: salinidade, pH, minerais
- Mapa e pontos de coleta em Madre de Deus
- Comunidade e denúncias
- Contato

Pergunte algo específico, por exemplo: "O que é o AquaMinerals?"`;
  }
}