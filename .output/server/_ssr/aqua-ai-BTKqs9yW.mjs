import { o as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { $ as BookOpen, V as Copy, a as User, d as Sparkles, h as RotateCcw, nt as ArrowUp, r as Waves } from "../_libs/lucide-react.mjs";
import { f as Button, l as SiteLayout, p as cn, u as Badge } from "./router-e31SPSes.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aqua-ai-BTKqs9yW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var KNOWLEDGE_BASE = [
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
			"pontos"
		],
		lastUpdated: "2024-01-15"
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
			"composição"
		],
		lastUpdated: "2024-01-15"
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
			"status"
		],
		lastUpdated: "2024-01-15"
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
			"stack"
		],
		lastUpdated: "2024-01-15"
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
			"comunidade"
		],
		lastUpdated: "2024-01-15"
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
		keywords: [
			"ambiental",
			"monitoramento",
			"emergência",
			"compensação",
			"parâmetros",
			"limites"
		],
		lastUpdated: "2024-01-15"
	}
];
function normalizeText(text) {
	return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}
function extractKeywords(text) {
	const words = normalizeText(text).split(" ");
	const stopWords = /* @__PURE__ */ new Set([
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
		"assim"
	]);
	return words.filter((word) => word.length > 2 && !stopWords.has(word)).slice(0, 10);
}
function classifyIntent(query) {
	const normalized = normalizeText(query);
	const categoryKeywords = {
		projeto: [
			"projeto",
			"objetivo",
			"finalidade",
			"missão",
			"visão",
			"onde",
			"localização",
			"bahia",
			"madre"
		],
		sustentabilidade: [
			"sustentabilidade",
			"ambiente",
			"ambiental",
			"eco",
			"preservação",
			"conservação",
			"ods",
			"verde"
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
			"composição"
		],
		tecnologia: [
			"tecnologia",
			"técnico",
			"sistema",
			"plataforma",
			"software",
			"ia",
			"inteligência",
			"artificial"
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
			"dinheiro"
		],
		impacto_ambiental: [
			"impacto",
			"dano",
			"poluição",
			"contaminação",
			"emergência",
			"risco",
			"monitoramento",
			"parâmetro"
		],
		perguntas_frequentes: [
			"como",
			"o que",
			"qual",
			"quando",
			"onde",
			"por que",
			"quem",
			"quanto"
		]
	};
	let bestMatch = "perguntas_frequentes";
	let maxScore = 0;
	for (const [category, keywords] of Object.entries(categoryKeywords)) {
		const score = keywords.reduce((acc, keyword) => {
			return acc + (normalized.includes(normalizeText(keyword)) ? 1 : 0);
		}, 0);
		if (score > maxScore) {
			maxScore = score;
			bestMatch = category;
		}
	}
	const entities = [];
	[
		"sódio",
		"magnésio",
		"cálcio",
		"potássio",
		"lítio",
		"ferro",
		"zinco"
	].forEach((mineral) => {
		if (normalized.includes(mineral)) entities.push({
			type: "mineral",
			value: mineral,
			confidence: .9
		});
	});
	[
		"madre de deus",
		"bahia",
		"baía de aratu",
		"suape",
		"paraguaçu"
	].forEach((location) => {
		if (normalized.includes(location)) entities.push({
			type: "location",
			value: location,
			confidence: .85
		});
	});
	return {
		category: bestMatch,
		confidence: Math.min(maxScore / 3, 1),
		entities
	};
}
function searchKnowledge(query) {
	const queryKeywords = extractKeywords(query.text);
	const normalizedQuery = normalizeText(query.text);
	return KNOWLEDGE_BASE.filter((doc) => {
		if (!query.categories || query.categories.length === 0) return true;
		return query.categories.includes(doc.category);
	}).map((doc) => {
		let relevanceScore = 0;
		if (normalizeText(doc.title).includes(normalizedQuery)) relevanceScore += 3;
		const normalizedContent = normalizeText(doc.content);
		if (normalizedContent.includes(normalizedQuery)) relevanceScore += 2;
		queryKeywords.forEach((keyword) => {
			if (doc.keywords.some((k) => normalizeText(k).includes(keyword))) relevanceScore += 1;
			if (normalizedContent.includes(keyword)) relevanceScore += .5;
		});
		const excerpts = [];
		const sentences = doc.content.split(/[.\n]+/).filter((s) => s.trim().length > 0);
		for (const sentence of sentences) {
			const normalizedSentence = normalizeText(sentence);
			if (queryKeywords.filter((k) => normalizedSentence.includes(k)).length > 0 && excerpts.length < 3) excerpts.push(sentence.trim());
		}
		return {
			documentId: doc.id,
			relevanceScore,
			excerpts: excerpts.slice(0, 3)
		};
	}).filter((r) => r.relevanceScore > 0).sort((a, b) => b.relevanceScore - a.relevanceScore).slice(0, query.limit || 5);
}
function generateResponse(query, results, intent, context) {
	if (results.length === 0) {
		const normalizedQuery = normalizeText(query);
		if (normalizedQuery.includes("impacto econômico") || normalizedQuery.includes("cidades costeiras")) return {
			answer: "O AquaMinerals pode gerar impactos econômicos significativos para cidades costeiras através da criação de empregos especializados (estimativa de 15-200 empregos diretos dependendo da fase), receitas fiscais via royalties distribuídos entre União, Estado e Municípios, e um multiplicador econômico onde cada R$ 1 investido gera aproximadamente R$ 5 em atividade econômica regional. Além disso, o projeto promove diversificação econômica, capacitação profissional e melhoria de infraestrutura local.",
			sources: ["Impacto Econômico"],
			confidence: .75,
			followUpQuestions: [
				"Como são distribuídos os royalties?",
				"Quantos empregos serão criados?",
				"Qual o cenário de projeção para 5 anos?"
			]
		};
		if (normalizedQuery.includes("extração") && normalizedQuery.includes("sustentável")) return {
			answer: "A extração sustentável no AquaMinerals segue princípios de mínimo impacto ambiental, utilizando processos não invasivos com monitoramento contínuo dos parâmetros oceânicos. A abordagem inclui economia circular com aproveitamento integral dos recursos, transparência através de dados abertos e metodologia verificável, e conformidade com o ODS 14 - Vida na Água. Os parâmetros como pH, temperatura, oxigênio dissolvido e salinidade são monitorados 24/7 para garantir que a atividade não comprometa o ecossistema marinho.",
			sources: ["Sustentabilidade Ambiental", "Impacto Ambiental e Monitoramento"],
			confidence: .8,
			followUpQuestions: [
				"Quais parâmetros são monitorados?",
				"Como é classificado o status ambiental?",
				"O que acontece em caso de emergência?"
			]
		};
		return {
			answer: "Desculpe, não encontrei informações específicas sobre isso na minha base de conhecimento atual. Posso ajudar com perguntas sobre o projeto AquaMinerals, minerais oceânicos, sustentabilidade, tecnologia utilizada, ou impactos econômico e ambiental. Tente reformular sua pergunta ou use termos como 'minerais', 'sustentabilidade', 'economia', 'monitoramento' ou 'tecnologia'.",
			sources: [],
			confidence: 0,
			followUpQuestions: [
				"Como funciona a extração sustentável?",
				"Quais minerais são monitorados?",
				"Onde o projeto está localizado?",
				"Quais impactos econômicos essa tecnologia gera?"
			]
		};
	}
	const relevantDocs = results.map((r) => KNOWLEDGE_BASE.find((d) => d.id === r.documentId)).filter(Boolean);
	let answer = "";
	const sources = [];
	if (relevantDocs.length > 0) {
		const primaryDoc = relevantDocs[0];
		sources.push(primaryDoc.title);
		answer = `${{
			projeto: "Sobre o projeto AquaMinerals, ",
			sustentabilidade: "Em relação à sustentabilidade, ",
			minerais: "Quanto aos minerais oceânicos, ",
			tecnologia: "Sobre a tecnologia utilizada, ",
			impacto_economico: "No aspecto econômico, ",
			impacto_ambiental: "Em relação ao impacto ambiental, ",
			perguntas_frequentes: ""
		}[intent.category] || ""}${results[0]?.excerpts[0] || ""}`;
		if (results.length > 1 && relevantDocs[1]) {
			sources.push(relevantDocs[1].title);
			const additionalInfo = results[1].excerpts[0];
			if (additionalInfo) answer += `\n\nAlém disso, ${additionalInfo.toLowerCase()}`;
		}
		if (context && context.length > 0) {
			const lastUserMessage = context.filter((m) => m.role === "user").pop();
			if (lastUserMessage && lastUserMessage.content !== query) {
				if (classifyIntent(lastUserMessage.content).category === intent.category) answer += "\n\nComplementando nossa conversa anterior, ";
			}
		}
	}
	const followUpQuestions = [];
	switch (intent.category) {
		case "projeto":
			followUpQuestions.push("Quais são os pontos de monitoramento?", "Como posso acessar o dashboard?", "Qual é a missão do projeto?");
			break;
		case "minerais":
			followUpQuestions.push("Qual é o destino dos minerais extraídos?", "A extração prejudica o meio ambiente?", "Quantos tipos de minerais são monitorados?");
			break;
		case "sustentabilidade":
			followUpQuestions.push("Como é classificado o status ambiental?", "O projeto contribui para quais ODS?", "Quais são os princípios de sustentabilidade?");
			break;
		case "tecnologia":
			followUpQuestions.push("Qual stack tecnológico é utilizado?", "Como funciona a IA AquaAI?", "O sistema é open source?");
			break;
		case "impacto_economico":
			followUpQuestions.push("Quantos empregos serão gerados?", "Como são distribuídos os royalties?", "Qual a projeção de receita?");
			break;
		case "impacto_ambiental":
			followUpQuestions.push("Quais parâmetros são monitorados?", "O que acontece em caso de emergência?", "Como funciona a compensação ambiental?");
			break;
		default: followUpQuestions.push("Conte mais sobre o projeto", "Como funciona a extração sustentável?", "Onde posso ver os dados?");
	}
	return {
		answer,
		sources,
		confidence: Math.min(results[0].relevanceScore / 5, 1),
		followUpQuestions: followUpQuestions.slice(0, 3)
	};
}
async function processQuestion(query, context) {
	try {
		if (!query || query.trim().length === 0) return {
			success: false,
			error: "Pergunta vazia não é permitida"
		};
		const intent = classifyIntent(query);
		return {
			success: true,
			data: generateResponse(query, searchKnowledge({
				text: query,
				categories: intent.confidence > .3 ? [intent.category] : void 0,
				limit: 5
			}), intent, context)
		};
	} catch (error) {
		console.error("Erro ao processar pergunta:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Erro desconhecido ao processar pergunta"
		};
	}
}
var suggestions = [
	"Como está a qualidade da água hoje?",
	"Quais minerais foram encontrados esta semana?",
	"Quais pontos estão em estado crítico?",
	"Explique o índice de preservação",
	"Os minerais que estão aptos para extração, para onde eles vão?",
	"Quais impactos econômicos essa tecnologia poderia gerar para cidades costeiras?"
];
function AquaAI() {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [thinking, setThinking] = (0, import_react.useState)(false);
	const [currentResponse, setCurrentResponse] = (0, import_react.useState)(null);
	const chatContainerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const container = chatContainerRef.current;
		if (!container) return;
		if (container.scrollHeight - (container.scrollTop + container.clientHeight) < 160) container.scrollTo({
			top: container.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, thinking]);
	const send = async (text) => {
		const content = (text ?? input).trim();
		if (!content) return;
		const userMsg = {
			role: "user",
			content,
			timestamp: (/* @__PURE__ */ new Date()).toISOString()
		};
		setMessages((m) => [...m, userMsg]);
		setInput("");
		setThinking(true);
		setCurrentResponse(null);
		try {
			const result = await processQuestion(content, messages);
			if (result.success && result.data) {
				const aiMsg = {
					role: "assistant",
					content: result.data.answer,
					timestamp: (/* @__PURE__ */ new Date()).toISOString(),
					sources: result.data.sources
				};
				setMessages((m) => [...m, aiMsg]);
				setCurrentResponse(result.data);
			} else {
				const errorMsg = {
					role: "assistant",
					content: "Desculpe, ocorreu um erro ao processar sua pergunta. Por favor, tente novamente.",
					timestamp: (/* @__PURE__ */ new Date()).toISOString()
				};
				setMessages((m) => [...m, errorMsg]);
			}
		} catch (error) {
			console.error("Erro na IA:", error);
			const errorMsg = {
				role: "assistant",
				content: "Ocorreu um erro inesperado. Por favor, tente novamente.",
				timestamp: (/* @__PURE__ */ new Date()).toISOString()
			};
			setMessages((m) => [...m, errorMsg]);
		} finally {
			setThinking(false);
		}
	};
	const reset = () => {
		setMessages([]);
		setCurrentResponse(null);
	};
	const empty = messages.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex h-[calc(100vh-4rem)] max-w-4xl flex-col px-4 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border/60 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-ocean text-white shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-semibold",
							children: "AquaAI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "secondary",
							className: "gap-1 text-[10px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3" }), " Beta"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Assistente especializado em oceanografia"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: reset,
					disabled: empty,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-2 h-3.5 w-3.5" }), " Nova conversa"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: chatContainerRef,
				className: "flex-1 overflow-y-auto py-6",
				children: empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl py-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: "mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-ocean text-white shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-3xl font-bold sm:text-4xl",
							children: "Olá, sou a AquaAI."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Pergunte-me qualquer coisa sobre a saúde do oceano, minerais e monitoramento."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-2 sm:grid-cols-2",
							children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => send(s),
								className: "rounded-xl border border-border/60 bg-card p-4 text-left text-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elegant",
								children: s
							}, s))
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: messages.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							className: cn("flex gap-3", m.role === "user" ? "justify-end" : "justify-start"),
							children: [
								m.role === "assistant" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-ocean text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed", m.role === "user" ? "bg-primary text-primary-foreground" : "border border-border/60 bg-card"),
									children: [m.content, m.role === "assistant" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 space-y-2",
										children: ["sources" in m && m.sources && m.sources.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1",
											children: m.sources.map((source, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "secondary",
												className: "gap-1 text-[10px]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-2.5 w-2.5" }), source]
											}, idx))
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => navigator.clipboard.writeText(m.content),
											className: "flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" }), " Copiar"]
										})]
									})]
								}),
								m.role === "user" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
								})
							]
						}, i))
					}), thinking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-ocean text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-border/60 bg-card px-4 py-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1",
								children: [
									0,
									1,
									2
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									className: "h-2 w-2 rounded-full bg-primary",
									animate: { opacity: [
										.3,
										1,
										.3
									] },
									transition: {
										duration: 1.2,
										repeat: Infinity,
										delay: i * .15
									}
								}, i))
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-strong flex items-end gap-2 rounded-2xl border border-border/60 p-2 shadow-elegant",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: input,
						onChange: (e) => setInput(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								send();
							}
						},
						placeholder: "Pergunte sobre qualidade, minerais, temperatura...",
						rows: 1,
						className: "min-h-[44px] resize-none border-0 bg-transparent focus-visible:ring-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						onClick: () => send(),
						disabled: !input.trim(),
						className: "h-10 w-10 shrink-0 bg-gradient-ocean text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-4 w-4" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-center text-[11px] text-muted-foreground",
					children: "A AquaAI pode cometer erros. Verifique informações críticas."
				})]
			})
		]
	}) });
}
//#endregion
export { AquaAI as component };
