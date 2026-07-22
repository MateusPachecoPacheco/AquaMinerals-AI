import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn, t as Button } from "./button-B2LyfGb_.mjs";
import { t as Badge } from "./badge-DZWKOgwu.mjs";
import { Q as ArrowUp, a as User, d as Sparkles, h as RotateCcw, r as Waves, z as Copy } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-Bc4BM6pC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/aqua-ai-DA2TEzM_.js
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
var suggestions = [
	"Como está a qualidade da água hoje?",
	"Quais minerais foram encontrados esta semana?",
	"Quais pontos estão em estado crítico?",
	"Explique o índice de preservação"
];
var canned = {
	default: "Com base nos últimos dados coletados na Baía de Madre de Deus, os principais indicadores estão dentro dos limites saudáveis. Posso detalhar qualidade, minerais, pH ou temperatura por região — o que você gostaria de explorar?",
	qualidade: "A qualidade média das últimas 24 horas está em 94%, com leve tendência de alta (+2.4%). Os pontos MDD-01 e MDD-02 lideram, enquanto MDD-05 (Ponta de Suape) está sob atenção com 62%.",
	minerais: "Nesta semana foram identificados 37 minerais distintos. Os predominantes são Sódio (38%), Magnésio (22%) e Cálcio (14%). Detectamos um pico incomum de Potássio no ponto MDD-03.",
	criticos: "Atualmente 1 ponto está classificado como crítico: MDD-05 (Ponta de Suape), com pH 7.4 e temperatura 28.2°C. Recomenda-se coleta manual de confirmação nas próximas 6 horas."
};
function reply(input) {
	const q = input.toLowerCase();
	if (q.includes("qualidade")) return canned.qualidade;
	if (q.includes("mineral")) return canned.minerais;
	if (q.includes("crític")) return canned.criticos;
	return canned.default;
}
function AquaAI() {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [thinking, setThinking] = (0, import_react.useState)(false);
	const endRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		endRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, thinking]);
	const send = (text) => {
		const content = (text ?? input).trim();
		if (!content) return;
		setMessages((m) => [...m, {
			role: "user",
			content
		}]);
		setInput("");
		setThinking(true);
		setTimeout(() => {
			setMessages((m) => [...m, {
				role: "assistant",
				content: reply(content)
			}]);
			setThinking(false);
		}, 900);
	};
	const reset = () => setMessages([]);
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
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
										children: [m.content, m.role === "assistant" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => navigator.clipboard.writeText(m.content),
											className: "mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" }), " Copiar"]
										})]
									}),
									m.role === "user" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
									})
								]
							}, i))
						}),
						thinking && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: endRef })
					]
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
