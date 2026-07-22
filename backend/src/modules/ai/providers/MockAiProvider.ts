import type { IAiProvider } from "./IAiProvider.js";

export class MockAiProvider implements IAiProvider {
  private knowledgeBase = {
    plataforma: {
      keywords: ["plataforma", "aquaminerals", "sistema", "site", "app", "o que é", "o que faz", "para que serve", "como funciona"],
      response: "A **AquaMinerals** é uma plataforma web educativa e científica dedicada ao estudo e à extração sustentável de minerais presentes na água do mar, usando **Madre de Deus (Bahia)** como laboratório natural de referência.\n\n**Nossos principais recursos:**\n\n🌊 **Dashboard Interativo**: Visualize em tempo real indicadores como salinidade, pH, concentração de lítio e magnésio nos pontos de coleta.\n\n🗺️ **Mapa Geolocalizado**: Explore os pontos de monitoramento na Baía de Todos-os Santos (Praia de Sua, Ponta do Padre, Ilha de São Paulo).\n\n🌍 **Comunidade Ativa**: Denuncie incidentes ambientais, sugira melhorias e participe de projetos educativos.\n\n🤖 **AquaAI (eu!)**: Sua assistente especializada em oceanografia e economia azul.\n\n📚 **Educação**: Cursos, trilhas ambientais e materiais didáticos sobre ciência oceânica.\n\nTudo isso com dados **reais, verificáveis e cientificamente embasados**. Quer saber mais sobre algum recurso específico?"
    },
    cadastro: {
      keywords: ["cadastrar", "cadastro", "criar conta", "registrar", "conta", "signup", "inscrever"],
      response: "Criar sua conta na AquaMinerals é **simples e gratuito**! 🌊\n\n**Passo a passo:**\n\n1️⃣ Clique em **'Criar conta'** na tela inicial\n2️⃣ Preencha: Nome completo, e-mail válido e uma senha (mínimo 6 caracteres)\n3️⃣ Clique em **'Criar conta'**\n4️️ Você será redirecionado para o login\n5️⃣ Faça login e acesse o Dashboard completo!\n\n**Benefícios de ter uma conta:**\n✅ Acesso completo ao Dashboard com dados em tempo real\n✅ Criar denúncias ambientais geolocalizadas\n✅ Enviar sugestões para a plataforma\n✅ Conversar comigo (AquaAI) ilimitadamente\n✅ Participar de projetos educativos\n✅ Receber notificações de eventos\n\nSe tiver problemas no cadastro, verifique se o e-mail já não está em uso!"
    },
    denuncia: {
      keywords: ["denúncia", "denuncia", "denunciar", "reportar", "incidente", "poluição", "problema ambiental", "mancha", "óleo"],
      response: "A seção de **Denúncias Ambientais** é uma das ferramentas mais poderosas da comunidade AquaMinerals! 🌍\n\n**Como fazer uma denúncia:**\n\n1️⃣ Acesse a seção **'Comunidade'** no menu\n2️⃣ Clique em **'Enviar denúncia'**\n3️⃣ Preencha:\n   • Título descritivo\n   • Descrição detalhada do incidente\n   • Tipo (Problema Ambiental, Sugestão ou Elogio)\n   • Localização (o mapa captura suas coordenadas GPS automaticamente!)\n   • Endereço de referência\n4️⃣ Envie e acompanhe o status!\n\n**Status das denúncias:**\n🟡 **PENDENTE**: Aguardando análise\n🔵 **EM ANÁLISE**: Moderadores estão verificando\n🟢 **RESOLVIDO**: Ação foi tomada\n🔴 **REJEITADO**: Não atende aos critérios\n\n**Importante:** Todas as denúncias são revisadas por moderadores humanos e podem gerar ações reais de preservação na região de Madre de Deus!"
    },
    dashboard: {
      keywords: ["dashboard", "painel", "gráficos", "métricas", "indicadores", "dados", "estatísticas"],
      response: "O **Dashboard AquaMinerals** é o coração analítico da plataforma! 📊\n\n**Indicadores disponíveis:**\n\n🧂 **Sal Extraído (toneladas)**: Volume de sais minerais coletados de forma sustentável\n💧 **Qualidade da Água (%)**: Índice composto de pureza e equilíbrio ecológico\n⚡ **Lítio Identificado (ppm)**: Concentração de lítio (crucial para baterias de veículos elétricos)\n🧪 **Salinidade Média**: Em partes por mil (ppt) - o Atlântico tem ~35 ppt\n🔬 **pH da Água**: Entre 7.8 e 8.3 (levemente alcalino, ideal para vida marinha)\n📚 **Projetos Ativos**: Número de iniciativas educativas em andamento\n\n**Funcionalidades do Dashboard:**\n• 📥 **Exportar**: Baixe os dados em CSV para análise\n• 🔄 **Recarregar**: Atualize os dados em tempo real\n• 🔍 **Filtros**: Filtre por período e tipo de indicador\n• 🔎 **Pesquisa**: Busque métricas específicas\n\nTodos os dados são coletados dos pontos geolocalizados no mapa!"
    },
    mapa: {
      keywords: ["mapa", "localização", "pontos", "geolocalização", "madre de deus", "bahia", "praia", "coleta"],
      response: "O **Mapa Interativo** mostra os pontos reais de monitoramento em **Madre de Deus, BA**! 🗺️\n\n**Pontos de coleta cadastrados:**\n\n📍 **Praia de Sua** (-12.7415, -38.6218)\n   Área próxima ao cais, monitorada para extração de sais minerais\n   Salinidade: 35.2 ppt | pH: 8.1\n\n📍 **Ponta do Padre** (-12.7520, -38.6150)\n   Ponto em área de manguezal, rico em biodiversidade\n   Salinidade: 34.8 ppt | pH: 8.0\n\n📍 **Ilha de São Paulo** (-12.7280, -38.6050)\n   Mar aberto na Baía de Todos-os Santos, água pura para extração de Magnésio\n   Salinidade: 36.1 ppt | pH: 8.2\n\nClique em cada pino no mapa para ver detalhes científicos completos! Os dados são atualizados periodicamente por nossa equipe de campo."
    },
    minerios: {
      keywords: ["minério", "minerio", "minerais", "magnésio", "litio", "lítio", "sal", "sódio", "cloreto", "extração"],
      response: "Os oceanos são a **maior mina de minerais do planeta**! 💎\n\n**Principais minerais na água do mar:**\n\n🧂 **Cloreto de Sódio (Sal)**: ~85% dos sais dissolvidos\n   Usos: Alimentação, indústria química, degelo de estradas\n\n⚗️ **Magnésio**: 3º mais abundante (~1.3g/L)\n   Usos: Indústria farmacêutica, ligas aeroespaciais, saúde humana\n\n⚡ **Lítio**: ~0.17 ppm (partes por milhão)\n   Usos: Baterias de veículos elétricos, smartphones\n   Fronteira tecnológica: extração direta do mar é mais limpa que mineração terrestre!\n\n🔬 **Outros**: Cálcio, Potássio, Bromo, Iodo, Estrôncio\n\n**Extração Sustentável:**\nA AquaMinerals estuda métodos que devolvem a água ao mar mantendo o equilíbrio ecológico, respeitando os manguezais e a biodiversidade da Baía de Todos-os Santos."
    },
    comunidade: {
      keywords: ["comunidade", "newsletter", "assinar", "email", "fórum", "participar", "guardiões"],
      response: "A **Comunidade AquaMinerals** é o coração pulsante da plataforma! 🤝\n\n**Formas de participar:**\n\n🌊 **Guardiões da Baía**: Rede de moradores que colaboram no monitoramento comunitário. Inscreva-se para fazer parte!\n\n📚 **Curso Oceano em Dados**: Formação **gratuita** sobre ciência oceânica para estudantes e educadores.\n\n🎒 **Trilha Ambiental Infantil**: Material didático para ensino fundamental sobre o oceano.\n\n📢 **Fórum da Economia Azul**: Encontro anual com pesquisadores, gestores e comunidade.\n\n📧 **Newsletter**: Assine com seu e-mail na seção Comunidade para receber:\n   • Atualizações sobre os indicadores\n   • Convites para eventos\n   • Novos cursos e materiais\n   • Notícias sobre Madre de Deus\n\n**Assinatura da Newsletter:**\nDigite seu e-mail no campo da seção Comunidade e clique em **'Assinar'**. Você receberá uma confirmação e passará a fazer parte da nossa rede de oceanógrafos cidadãos!"
    },
    eventos: {
      keywords: ["evento", "eventos", "fórum", "agenda", "encontro", "reunião", "workshop"],
      response: "A **Agenda de Eventos** da AquaMinerals é rica em oportunidades! 📅\n\n**Principais eventos de 2026:**\n\n🎓 **Fórum da Economia Azul** (Encontro Anual)\n   Data: Novembro de 2026\n   Local: Madre de Deus, BA\n   Público: Pesquisadores, gestores públicos, comunidade e estudantes\n   Temas: Mineração sustentável, preservação de manguezais, inovação tecnológica\n\n🌍 **Workshops Mensais**\n   • Ciência Cidadã no Monitoramento Marinho\n   • Tecnologias de Extração de Lítio\n   • Educação Ambiental nas Escolas\n   • Fotografia Subaquática Científica\n\n📚 **Webinars Trimestrais**\n   Transmitidos online, gratuitos, com especialistas internacionais\n\n💡 **Mutirões de Limpeza**\n   Ações práticas nas praias de Madre de Deus\n\nClique em **'Ver agenda'** na seção de Eventos para ver o calendário completo e se inscrever!"
    },
    sustentabilidade: {
      keywords: ["sustentável", "sustentabilidade", "preservação", "ecologia", "meio ambiente", "mangue", "manguezal", "verde"],
      response: "A **sustentabilidade** é o pilar central da AquaMinerals! 🌱\n\n**Nossos compromissos:**\n\n🌿 **Monitoramento Constante**: Acompanhamos pH, salinidade e biodiversidade 24/7\n\n🌳 **Proteção dos Manguezais**: Os mangues de Madre de Deus são berçários marinhos e filtros naturais essenciais\n\n🔄 **Economia Circular**: A água usada na extração é tratada e devolvida ao mar em equilíbrio\n\n📊 **Transparência Total**: Todos os dados são públicos e verificáveis\n\n🤝 **Comunidade Engajada**: Moradores locais são parte ativa do monitoramento\n\n🎓 **Educação Ambiental**: Formamos a próxima geração de oceanógrafos e preservacionistas\n\n**Madre de Deus como laboratório:**\nA Baía de Todos-os Santos é um ecossistema único, onde a mineração sustentável convive com a preservação. Nosso modelo é estudado internacionalmente como referência em **economia azul**!"
    },
    contato: {
      keywords: ["contato", "falar", "whatsapp", "instagram", "suporte", "ajuda", "dúvida"],
      response: "Fale com a equipe AquaMinerals! 📞\n\n**Canais oficiais:**\n\n📱 **WhatsApp**: +55 (71) 98795-2529\n   Atendimento: Seg-Sex, 9h às 18h\n\n📸 **Instagram**: @\\_mateuspacheco\\_\\_\n   Siga para novidades, bastidores e conteúdo educativo!\n\n📧 **Newsletter**: Assine na seção Comunidade para receber atualizações\n\n🌐 **Redes da Plataforma**:\n   • Ícones do WhatsApp e Instagram no rodapé do site\n   • Clique e seja redirecionado automaticamente!\n\n**Tipos de contato:**\n• Dúvidas técnicas sobre a plataforma\n• Parcerias institucionais\n• Sugestões de melhorias\n• Imprensa e mídia\n• Denúncias urgentes (use também a seção Denúncias!)\n\nEstamos aqui para ajudar a construir um oceano mais sustentável! 🌊"
    },
    madrededeus: {
      keywords: ["madre de deus", "madre", "bahia", "todos os santos", "baía", "região", "local"],
      response: "**Madre de Deus, Bahia** é o coração geográfico do projeto AquaMinerals! 🏝️\n\n**Sobre a região:**\n\n📍 **Localização**: Município insular na Baía de Todos-os Santos, a ~60km de Salvador\n🏖️ **Praias**: Praia de Sua, Ponta do Padre, Ilha de São Paulo\n🌳 **Ecossistemas**: Manguezais preservados, restingas, recifes\n🎣 **Cultura**: Forte tradição pesqueira e marítima\n\n**Por que Madre de Deus?**\n\n🔬 **Laboratório Natural**: A Baía de Todos-os Santos oferece condições ideais para estudo de minerais marinhos\n\n🌊 **Biodiversidade**: Berçário de espécies marinhas e ecossistemas únicos\n\n👥 **Comunidade Engajada**: Moradores participam ativamente da preservação\n\n📊 **Dados Históricos**: Séries temporais longas permitem análises científicas robustas\n\n🚢 **Acessibilidade**: Proximidade com centros de pesquisa (UFBA, IFBA)\n\nMadre de Deus é o **modelo vivo** de como economia azul e preservação podem coexistir!"
    }
  };

  async generateResponse(prompt: string, _context?: string): Promise<string> {
    const lowerPrompt = prompt.toLowerCase();

    // Busca por correspondência na base de conhecimento
    for (const [_category, data] of Object.entries(this.knowledgeBase)) {
      if (data.keywords.some(keyword => lowerPrompt.includes(keyword))) {
        return data.response;
      }
    }

    // Respostas específicas por palavra-chave técnica
    if (lowerPrompt.includes("magnésio") || lowerPrompt.includes("magnesio")) {
      return "O **magnésio** é o 3º mineral mais abundante na água do mar (~1.3g/L), ficando atrás apenas do sódio e do cloro. Na AquaMinerals, estudamos sua extração sustentável em Madre de Deus, pois ele é vital para:\n\n• 💊 **Indústria farmacêutica**: Suplementos e antiácidos\n• ✈️ **Aeroespacial**: Ligas leves e resistentes\n• 💪 **Saúde humana**: Função muscular e nervosa\n• 🔋 **Baterias**: Componente de baterias de nova geração\n\nA extração sustentável devolve a água ao mar em equilíbrio, sem prejudicar os manguezais!";
    }

    if (lowerPrompt.includes("salinidade") || lowerPrompt.includes("sal")) {
      return "A **salinidade média** da água do mar no Atlântico é de aproximadamente **35 partes por mil (ppt)**, o que equivale a cerca de 35 gramas de sais dissolvidos por litro de água.\n\n🧂 **Composição principal:**\n• Cloreto de Sódio: ~85%\n• Cloreto de Magnésio: ~10%\n• Sulfatos, Cálcio, Potássio: ~5%\n\nEm Madre de Deus, nossos pontos de coleta mostram variações sutis:\n• Praia de Sua: 35.2 ppt\n• Ponta do Padre: 34.8 ppt\n• Ilha de São Paulo: 36.1 ppt\n\nEssas variações indicam a influência dos manguezais e rios da região!";
    }

    if (lowerPrompt.includes("ph") || lowerPrompt.includes("ácido") || lowerPrompt.includes("alcalino")) {
      return "O **pH da água do mar** é levemente alcalino, variando tipicamente entre **7.8 e 8.3**.\n\n🔬 **Por que isso importa?**\n\n• A **acidificação dos oceanos** (causada pelo excesso de CO₂ atmosférico) é uma das maiores ameaças à vida marinha\n• Organismos com conchas de carbonato de cálcio (corais, moluscos) são especialmente vulneráveis\n• O equilíbrio do pH mantém a dissolução adequada de minerais\n\n📊 **Em Madre de Deus:**\nNossos pontos de coleta mostram pH estável entre 8.0 e 8.2, indicando um ecossistema saudável e bem preservado!\n\nA monitoria constante do pH é crucial para a preservação da Baía de Todos-os Santos.";
    }

    // Fallback inteligente para perguntas não mapeadas
    return `Olá! Sou a **AquaAI**, sua assistente especializada em oceanografia e na plataforma AquaMinerals! 🌊\n\nPosso te ajudar com:\n\n🤔 **Sobre a Plataforma**\n   • O que é e como funciona\n   • Como criar conta e navegar\n   • Recursos disponíveis\n\n📊 **Dashboard e Dados**\n   • Indicadores (salinidade, pH, lítio, magnésio)\n   • Como exportar e filtrar dados\n   • Interpretação dos gráficos\n\n🗺️ **Mapa e Localização**\n   • Pontos de coleta em Madre de Deus\n   • Coordenadas e dados científicos\n   • Região da Baía de Todos-os Santos\n\n🌍 **Comunidade**\n   • Como fazer denúncias ambientais\n   • Participar de projetos educativos\n   • Assinar a newsletter\n\n💎 **Ciência dos Minerais**\n   • Magnésio, lítio, sal e outros minerais\n   • Extração sustentável\n   • Economia azul\n\n📅 **Eventos e Educação**\n   • Fórum da Economia Azul\n   • Cursos e trilhas ambientais\n   • Workshops e mutirões\n\n📞 **Contato**\n   • WhatsApp: +55 (71) 98795-2529\n   • Instagram: @_mateuspacheco__\n\n**Experimente perguntar:**\n• \"O que é a AquaMinerals?\"\n• \"Como fazer uma denúncia?\"\n• \"Qual a salinidade em Madre de Deus?\"\n• \"Como assinar a newsletter?\"\n\nEstou aqui para sanar **TODAS** as suas dúvidas! 💙`;
  }
}