# Arquitetura AquaMinerals — Documentação Técnica

## Visão Geral da Arquitetura

O AquaMinerals segue uma arquitetura moderna full-stack baseada em React, projetada para escalabilidade, manutenibilidade e experiência do usuário excepcional.

```
┌─────────────────────────────────────────────────────────────┐
│                     Camada de Apresentação                   │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐  ┌──────────┐ │
│  │   Home    │  │ Dashboard │  │   Mapa    │  │  AquaAI  │ │
│  └───────────┘  └───────────┘  └───────────┘  └──────────┘ │
├─────────────────────────────────────────────────────────────┤
│                    Componentes & UI Kit                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Button  │  Input  │  Card  │  Badge  │  Table  │ ... │ │
│  └────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                     Serviços & Hooks                         │
│  ┌──────────────────┐  ┌─────────────────────────────────┐ │
│  │  aquaAiService   │  │  useConversation, useSearch...  │ │
│  │  (RAG System)    │  │                                 │ │
│  └──────────────────┘  └─────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                      Base de Conhecimento                    │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  /knowledge/*.md - Documentos estruturados em Markdown │ │
│  └────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                        Backend API                           │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         Fastify + Node.js + Prisma + PostgreSQL        │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Stack Tecnológico

### Frontend

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| React | 19 | Framework UI |
| TypeScript | 5.x | Tipagem estática |
| TanStack Router | 1.170+ | Roteamento tipo-safe |
| TailwindCSS | 4.x | Estilização utilitária |
| Framer Motion | 12.x | Animações |
| Recharts | 2.x | Visualização de dados |
| React Leaflet | 4.x | Mapas interativos |
| Radix UI | Latest | Componentes acessíveis |

### Backend

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| Node.js | 18+ | Runtime JavaScript |
| Fastify | 5.x | Servidor HTTP |
| Prisma | 6.x | ORM tipo-safe |
| PostgreSQL | 14+ | Banco de dados |

### Inteligência Artificial

| Componente | Descrição |
|------------|-----------|
| RAG System | Retrieval Augmented Generation |
| Knowledge Base | Documentos Markdown estruturados |
| Intent Classification | Classificação baseada em keywords |
| Semantic Search | Busca por relevância semântica |

## Estrutura de Diretórios

```
/workspace
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── ui/              # Componentes de UI básicos
│   │   └── site/            # Componentes específicos do site
│   ├── routes/              # Rotas da aplicação (TanStack Router)
│   │   ├── index.tsx        # Página inicial
│   │   ├── dashboard.tsx    # Dashboard ambiental
│   │   ├── mapa.tsx         # Mapa interativo
│   │   └── aqua-ai.tsx      # Assistente IA
│   ├── services/            # Lógica de negócios e serviços
│   │   └── aquaAiService.ts # Serviço RAG da AquaAI
│   ├── types/               # Definições TypeScript
│   │   └── ai.ts            # Tipos da IA
│   ├── hooks/               # Hooks customizados
│   ├── lib/                 # Utilitários e configurações
│   │   └── utils.ts         # Funções utilitárias
│   └── styles.css           # Estilos globais
├── knowledge/               # Base de conhecimento da IA
│   ├── projeto.md
│   ├── sustentabilidade.md
│   ├── minerais_oceanicos.md
│   ├── tecnologia.md
│   ├── impacto_economico.md
│   ├── impacto_ambiental.md
│   └── perguntas_frequentes.md
├── docs/                    # Documentação técnica
│   └── architecture.md
├── backend/                 # Código do backend
├── public/                  # Assets estáticos
└── package.json
```

## Fluxo da Aplicação

### Navegação

```
Usuário → TanStack Router → Layout → Página → Componentes
                              ↓
                          Navbar/Footer
```

### Sistema RAG da AquaAI

```
1. Usuário faz pergunta
         ↓
2. processQuestion() é chamado
         ↓
3. classifyIntent() identifica categoria
         ↓
4. searchKnowledge() busca documentos relevantes
         ↓
5. generateResponse() cria resposta contextualizada
         ↓
6. Resposta exibida com fontes citadas
```

## Componentes Principais

### SiteLayout

Wrapper de layout consistente em todas as páginas:
- Navbar responsiva
- Footer informativo
- Container centralizado

### Dashboard

Visualização de dados ambientais:
- KPIs em tempo real
- Gráficos (Recharts)
- Tabela de pontos monitorados
- Filtros e exportação CSV

### Mapa Interativo

Geolocalização de pontos de monitoramento:
- React Leaflet + OpenStreetMap
- Marcadores coloridos por status
- Popup com detalhes
- Sidebar responsiva

### AquaAI Chat

Interface conversacional inteligente:
- Processamento RAG
- Histórico de mensagens
- Sugestões de perguntas
- Fontes citadas
- Copiar resposta

## Padrões de Código

### Componentização

```typescript
// Componente funcional com TypeScript
interface Props {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: Props) {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <h3 className="font-display font-semibold">{title}</h3>
      {children}
    </div>
  );
}
```

### Hooks Customizados

```typescript
// Hook para gerenciamento de conversa
export function useConversation() {
  const [messages, setMessages] = useState<Message[]>([]);
  
  const sendMessage = async (content: string) => {
    // Lógica de envio
  };
  
  return { messages, sendMessage };
}
```

### Serviços

```typescript
// Serviço com tipagem forte
export async function processQuestion(
  query: string,
  context?: Message[]
): Promise<ServiceResponse<RAGResponse>> {
  // Implementação RAG
}
```

## Segurança

### Headers (Helmet)

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security

### Rate Limiting

- Limite de requisições por IP
- Proteção contra abuso da IA
- Throttling de API

### Validação

- Zod schema validation
- Sanitização de inputs
- Prevenção de XSS

## Performance

### Otimizações Frontend

- Code splitting por rota
- Lazy loading de componentes pesados (mapa)
- Cache de queries (React Query)
- Imagens otimizadas

### Otimizações Backend

- Connection pooling (PostgreSQL)
- Query optimization (Prisma)
- Response compression
- Caching estratégico

### Metas

| Métrica | Target |
|---------|--------|
| FCP | < 1.5s |
| LCP | < 2.5s |
| CLS | < 0.1 |
| TTI | < 3.5s |

## Escalabilidade

### Horizontal

- Múltiplas instâncias do servidor
- Load balancing
- Session externalization (Redis)

### Vertical

- Aumento de recursos conforme demanda
- Database scaling
- CDN para assets

## Monitoramento

### Métricas Técnicas

- Uptime da API
- Latência de endpoints
- Taxa de erro
- Uso de recursos

### Métricas de Negócio

- Usuários ativos
- Perguntas à IA
- Acessos ao dashboard
- Exportações de dados

## Deploy

### Ambiente

- Desenvolvimento: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

### CI/CD Pipeline

1. Testes automatizados
2. Build da aplicação
3. Deploy em staging
4. Validação
5. Deploy em produção

## Decisões Arquiteturais

### Por que TanStack Router?

- Type-safe routing
- Data loading no router
- Code splitting automático
- Ótima DX

### Por que RAG para IA?

- Respostas baseadas em conhecimento real
- Atualização fácil da base
- Transparência (fontes citadas)
- Custo menor que LLM puro

### Por que TailwindCSS 4?

- CSS moderno com @theme
- Menor bundle size
- DX melhorado
- Design system consistente

## Futuro da Arquitetura

### Curto Prazo

- Integração com sensores IoT reais
- WebSocket para dados em tempo real
- PWA para mobile

### Médio Prazo

- GraphQL API
- Machine Learning preditivo
- Digital twin do ecossistema

### Longo Prazo

- Edge computing
- Blockchain para rastreabilidade
- API pública para parceiros

## Referências

- [Documentação TanStack](https://tanstack.com/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [RAG Pattern](https://arxiv.org/abs/2005.11401)
- [ODS 14 - Vida na Água](https://odsbrasil.gov.br/objetivo14)
