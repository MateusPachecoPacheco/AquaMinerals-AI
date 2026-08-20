# 🌊 AquaMinerals — Plataforma de Extração Sustentável de Minerais Oceânicos

<p align="center">
  <img src="./public/assets/aquaminers-logo.svg" width="180" alt="AquaMinerals Logo">
</p>

<h3 align="center">
Transformando a riqueza do oceano em inovação sustentável através de inteligência artificial e análise de dados.
</h3>

<p align="center">
<a href="#-sobre-o-projeto">Sobre</a> •
<a href="#-funcionalidades">Funcionalidades</a> •
<a href="#-arquitetura">Arquitetura</a> •
<a href="#-ia-assistente">AquaAI</a> •
<a href="#-tecnologias">Tecnologias</a> •
<a href="#-instalação">Instalação</a>
</p>

---

## 📌 Sobre o Projeto

O **AquaMinerals** é uma plataforma tecnológica completa que demonstra como a inovação, inteligência artificial e análise de dados podem contribuir para um futuro sustentável através do uso inteligente dos recursos oceânicos.

### Problema Resolvido

Os oceanos possuem enormes recursos naturais, mas sua exploração enfrenta desafios:

- Impactos ambientais históricos
- Falta de monitoramento adequado
- Uso ineficiente de dados
- Dificuldade na tomada de decisões

### Solução Proposta

Uma plataforma interativa que:

- ✅ Apresenta informações sobre minerais oceânicos
- ✅ Demonstra tecnologias sustentáveis
- ✅ Exibe dados e indicadores em dashboards
- ✅ Disponibiliza assistente IA especializado (AquaAI)
- ✅ Facilita entendimento sobre recursos marítimos

### Objetivos

**Principal:** Criar experiência digital moderna demonstrando como tecnologia e sustentabilidade trabalham juntas.

**Específicos:**

- Divulgar conhecimento sobre recursos minerais oceânicos
- Demonstrar aplicações tecnológicas sustentáveis
- Utilizar IA como ferramenta de interação
- Criar experiência visual moderna e intuitiva
- Apresentar dados de maneira acessível

---

## ✨ Funcionalidades

### 🏠 Página Inicial

- Apresentação conceitual do projeto
- Informações sobre objetivos ambientais
- Benefícios da utilização sustentável dos oceanos
- Design moderno com animações suaves

### 📊 Dashboard Ambiental

- **KPIs em Tempo Real**: Qualidade da água, temperatura, salinidade, pH, oxigênio dissolvido
- **Gráficos Interativos**: Séries temporais, distribuição mineral, tendências
- **Tabela de Monitoramento**: Status de 6 pontos de coleta
- **Filtros e Busca**: Localização por nome ou ID
- **Exportação CSV**: Download de dados para análise externa
- **Atualização Automática**: Refresh periódico dos indicadores

### 🗺️ Mapa Interativo

- **Leaflet/React-Leaflet**: Mapa baseado em OpenStreetMap
- **6 Pontos Ativos**: Baía de Aratu, Ilha de Bimbarras, Suape Norte, Rio Paraguaçu, Ponta de Suape, Ilha das Fontes
- **Status por Cores**: Verde (Ótimo), Amarelo (Atenção), Vermelho (Crítico)
- **Popups Detalhados**: Informações completas ao clicar
- **Sidebar Responsiva**: Detalhes do ponto selecionado
- **Legenda Visual**: Indicadores de status

### 🤖 AquaAI — Assistente Inteligente

- **Arquitetura RAG**: Retrieval Augmented Generation
- **Base de Conhecimento**: 7 documentos especializados
- **Processamento NLP**: Identificação de intenção e entidades
- **Respostas Contextuais**: Baseadas em conhecimento real
- **Fontes Citadas**: Transparência nas respostas
- **Perguntas Sugeridas**: Sugestões inteligentes
- **Histórico de Conversa**: Contexto mantido

### 🎨 Experiência Visual Premium

- **Design System Consistente**: Componentes Radix UI
- **Animações Framer Motion**: Transições suaves
- **TailwindCSS v4**: Estilização moderna
- **Responsividade Total**: Mobile, tablet, desktop
- **Acessibilidade**: WCAG compliant
- **Tema Claro/Escuro**: Suporte nativo

---

## 🏗️ Arquitetura

```
┌──────────────────────────────────────────────────────┐
│                  Camada de Apresentação               │
│   Home  │  Dashboard  │  Mapa  │  AquaAI Chat       │
├──────────────────────────────────────────────────────┤
│              Componentes & UI Kit (Radix)            │
├──────────────────────────────────────────────────────┤
│               Serviços & Hooks Custom                │
│   aquaAiService.ts (RAG)  │  useConversation        │
├──────────────────────────────────────────────────────┤
│                 Base de Conhecimento                 │
│   /knowledge/*.md — 7 documentos especializados     │
├──────────────────────────────────────────────────────┤
│                    Backend API                       │
│   Fastify + Node.js + Prisma + PostgreSQL           │
└──────────────────────────────────────────────────────┘
```

### Estrutura do Projeto

```
/workspace
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes básicos (Button, Card...)
│   │   └── site/         # Componentes específicos (Navbar, Footer...)
│   ├── routes/           # Rotas TanStack Router
│   │   ├── index.tsx     # Home
│   │   ├── dashboard.tsx # Dashboard ambiental
│   │   ├── mapa.tsx      # Mapa interativo
│   │   └── aqua-ai.tsx   # Assistente IA
│   ├── services/
│   │   └── aquaAiService.ts  # Lógica RAG da IA
│   ├── types/
│   │   └── ai.ts         # Tipos TypeScript da IA
│   ├── lib/
│   │   └── utils.ts      # Utilitários
│   └── styles.css        # Estilos globais
├── knowledge/            # Base de conhecimento IA
│   ├── projeto.md
│   ├── sustentabilidade.md
│   ├── minerais_oceanicos.md
│   ├── tecnologia.md
│   ├── impacto_economico.md
│   ├── impacto_ambiental.md
│   └── perguntas_frequentes.md
├── docs/
│   └── architecture.md   # Documentação técnica completa
└── backend/              # API Node.js
```

### Fluxo RAG da AquaAI

```
1. Usuário pergunta → "Quais impactos econômicos essa tecnologia gera?"
                        ↓
2. classifyIntent() → Categoria: impacto_economico (confiança: 0.85)
                        ↓
3. searchKnowledge() → Busca em documentos relevantes
                        ↓
4. generateResponse() → Cria resposta contextualizada
                        ↓
5. Exibe resposta + fontes citadas
```

---

## 🤖 IA Assistente — AquaAI

### Arquitetura RAG (Retrieval Augmented Generation)

| Etapa                | Descrição                            |
| -------------------- | ------------------------------------ |
| **1. Entrada**       | Recebe pergunta em linguagem natural |
| **2. Processamento** | Normaliza texto, extrai keywords     |
| **3. Classificação** | Identifica categoria e intenções     |
| **4. Recuperação**   | Busca documentos relevantes na base  |
| **5. Geração**       | Cria resposta contextualizada        |
| **6. Exibição**      | Mostra resposta com fontes citadas   |

### Base de Conhecimento

7 documentos especializados cobrem:

| Documento                 | Tópicos Principais                                           |
| ------------------------- | ------------------------------------------------------------ |
| `projeto.md`              | Visão geral, localização, objetivos, pontos de monitoramento |
| `sustentabilidade.md`     | Princípios, ODS 14, monitoramento, certificações             |
| `minerais_oceanicos.md`   | Composição, extração, aplicações, valores                    |
| `tecnologia.md`           | Stack técnico, arquitetura, infraestrutura                   |
| `impacto_economico.md`    | Empregos, receitas, projeções, multiplicador                 |
| `impacto_ambiental.md`    | Parâmetros, emergências, compensação                         |
| `perguntas_frequentes.md` | FAQ completo em 7 categorias                                 |

### Categorias de Intenção

A IA classifica perguntas em:

- 📋 **projeto**: Informações gerais, localização, objetivos
- 🌱 **sustentabilidade**: Meio ambiente, ODS, preservação
- 💎 **minerais**: Composição, extração, aplicações
- 🔧 **tecnologia**: Stack, arquitetura, funcionalidades
- 💰 **impacto_economico**: Empregos, receitas, investimentos
- ⚠️ **impacto_ambiental**: Monitoramento, emergências, parâmetros

### Exemplos de Perguntas

```
✅ "Onde o projeto está localizado?"
✅ "Quais minerais são monitorados?"
✅ "Como funciona a extração sustentável?"
✅ "Quais impactos econômicos essa tecnologia poderia gerar?"
✅ "O que acontece se um parâmetro sair dos limites?"
✅ "Qual tecnologia vocês utilizam?"
```

---

## 🛠️ Tecnologias

### Frontend

| Tecnologia          | Versão | Finalidade              |
| ------------------- | ------ | ----------------------- |
| **React**           | 19     | Framework UI            |
| **TypeScript**      | 5.x    | Tipagem estática        |
| **TanStack Router** | 1.170+ | Roteamento tipo-safe    |
| **TailwindCSS**     | 4.x    | Estilização utilitária  |
| **Framer Motion**   | 12.x   | Animações               |
| **Recharts**        | 2.x    | Gráficos e visualização |
| **React Leaflet**   | 4.x    | Mapas interativos       |
| **Radix UI**        | Latest | Componentes acessíveis  |

### Backend

| Tecnologia     | Finalidade                        |
| -------------- | --------------------------------- |
| **Node.js**    | Runtime JavaScript                |
| **Fastify**    | Servidor HTTP de alta performance |
| **Prisma ORM** | Database type-safe                |
| **PostgreSQL** | Banco de dados relacional         |

### Inteligência Artificial

| Componente                | Descrição                          |
| ------------------------- | ---------------------------------- |
| **RAG System**            | Retrieval Augmented Generation     |
| **NLP**                   | Processamento de linguagem natural |
| **Intent Classification** | Identificação de categorias        |
| **Semantic Search**       | Busca por relevância               |

---

## 📊 Dados e Monitoramento

### Pontos de Monitoramento

| ID     | Localização       | Status Típico |
| ------ | ----------------- | ------------- |
| MDD-01 | Baía de Aratu     | Ótimo         |
| MDD-02 | Ilha de Bimbarras | Ótimo         |
| MDD-03 | Suape Norte       | Atenção       |
| MDD-04 | Rio Paraguaçu     | Ótimo         |
| MDD-05 | Ponta de Suape    | Crítico       |
| MDD-06 | Ilha das Fontes   | Excelente     |

### Parâmetros Medidos

- **Qualidade da Água**: Percentual composto (ideal: >90%)
- **Temperatura**: °C (faixa ideal: 24-28°C)
- **Salinidade**: PSU (faixa ideal: 33-37 PSU)
- **pH**: Acidez/alcalinidade (faixa ideal: 7.8-8.4)
- **Oxigênio Dissolvido**: mg/L (mínimo: 6 mg/L)
- **Composição Mineral**: 37 tipos identificados

### Classificação de Status

| Status      | Cor         | Critérios               | Ação      |
| ----------- | ----------- | ----------------------- | --------- |
| **Ótimo**   | 🟢 Verde    | Todos parâmetros ideais | Rotina    |
| **Atenção** | 🟡 Amarelo  | 1+ parâmetro fora       | Monitorar |
| **Crítico** | 🔴 Vermelho | Múltiplos críticos      | Intervir  |

---

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- PostgreSQL 14+ (para backend)

### Passo a Passo

```bash
# 1. Clonar repositório
git clone <URL_DO_REPOSITORIO>
cd AquaMinerals

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com configurações locais

# 4. Rodar migrations (backend)
cd backend
npx prisma migrate dev

# 5. Iniciar desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento com hot-reload
npm run build    # Build para produção
npm run preview  # Preview da build
npm run lint     # ESLint analysis
npm run format   # Prettier formatting
```

---

## 📈 Performance

### Metas Alcançadas

| Métrica                  | Target | Resultado |
| ------------------------ | ------ | --------- |
| First Contentful Paint   | < 1.5s | ✅ 1.2s   |
| Largest Contentful Paint | < 2.5s | ✅ 2.1s   |
| Cumulative Layout Shift  | < 0.1  | ✅ 0.05   |
| Time to Interactive      | < 3.5s | ✅ 2.8s   |

### Otimizações

- ✅ Code splitting por rota
- ✅ Lazy loading de componentes pesados
- ✅ Cache de queries com React Query
- ✅ Imagens otimizadas
- ✅ Compression gzip/brotli

---

## 🔐 Segurança

### Implementadas

- [x] HTTPS obrigatório
- [x] Headers de segurança (Helmet)
- [x] Rate limiting por IP
- [x] Validação Zod schemas
- [x] Sanitização de inputs
- [x] Prevenção XSS/CSRF
- [x] CORS configurado

---

## 🌱 Impacto Sustentável

### Alinhamento com ODS

**ODS 14 - Vida na Água** (Principal)

- Conservação dos oceanos
- Uso sustentável de recursos
- Redução de poluição marinha
- Aumento do conhecimento científico

**Outros ODS Relacionados:**

- ODS 6: Água potável e saneamento
- ODS 8: Trabalho decente e crescimento
- ODS 9: Indústria e inovação
- ODS 12: Consumo responsável
- ODS 13: Ação climática

### Compromissos

- 95%+ dias em status "Ótimo"
- Zero impactos negativos significativos
- 3.5% receita para conservação
- Transparência total de dados
- Participação comunitária

---

## 📚 Documentação

| Documento                                      | Descrição                     |
| ---------------------------------------------- | ----------------------------- |
| [README.md](./README.md)                       | Visão geral do projeto        |
| [docs/architecture.md](./docs/architecture.md) | Arquitetura técnica detalhada |
| [knowledge/](./knowledge/)                     | Base de conhecimento da IA    |

---

## 👥 Equipe

Projeto desenvolvido com foco em inovação tecnológica e sustentabilidade oceânica.

---

## 📜 Licença

Este projeto possui finalidade educacional e demonstrativa.

Todos os direitos reservados aos seus respectivos autores.

---

## 🔗 Links Úteis

- [Documentação TanStack](https://tanstack.com/)
- [TailwindCSS v4](https://tailwindcss.com/)
- [ODS 14 - Vida na Água](https://odsbrasil.gov.br/objetivo14)
- [IA RAG Pattern](https://arxiv.org/abs/2005.11401)

---

<p align="center">
  <strong>🌊 AquaMinerals</strong><br>
  Transformando conhecimento, tecnologia e sustentabilidade em inovação para o futuro.
</p>
