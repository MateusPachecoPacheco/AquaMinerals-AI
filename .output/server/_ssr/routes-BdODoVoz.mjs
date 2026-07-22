import { t as motion } from "../_libs/framer-motion.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-B2LyfGb_.mjs";
import { t as Badge } from "./badge-DZWKOgwu.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Leaf, F as Earth, I as Droplet, M as FlaskConical, Y as Brain, d as Sparkles, et as ArrowRight, f as ShieldCheck, q as ChartColumn, r as Waves, rt as Activity, x as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-Bc4BM6pC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BdODoVoz.js
var import_jsx_runtime = require_jsx_runtime();
function OceanBackdrop() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-ocean opacity-20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "absolute inset-x-0 bottom-0 w-full text-primary/10",
				viewBox: "0 0 1440 320",
				preserveAspectRatio: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "currentColor",
					d: "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,224C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "absolute inset-x-0 bottom-0 w-full text-accent/10",
				viewBox: "0 0 1440 320",
				preserveAspectRatio: "none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "currentColor",
					d: "M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.03]",
				style: {
					backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
					backgroundSize: "48px 48px"
				}
			})
		]
	});
}
var fadeUp = {
	initial: {
		opacity: 0,
		y: 24
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	},
	transition: {
		duration: .6,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}
};
var kpis = [
	{
		label: "Qualidade da Água",
		value: "94%",
		icon: Droplet
	},
	{
		label: "Minerais Monitorados",
		value: "37",
		icon: FlaskConical
	},
	{
		label: "Regiões Analisadas",
		value: "12",
		icon: MapPin
	},
	{
		label: "Pesquisas Realizadas",
		value: "1.284",
		icon: Activity
	}
];
var features = [
	{
		icon: Brain,
		title: "IA Ambiental",
		desc: "Modelos de machine learning interpretam padrões químicos e biológicos do oceano em tempo real."
	},
	{
		icon: ChartColumn,
		title: "Dashboards Científicos",
		desc: "Visualizações interativas com métricas de pH, salinidade, oxigênio dissolvido e composição mineral."
	},
	{
		icon: MapPin,
		title: "Mapeamento Territorial",
		desc: "Monitoramento georreferenciado dos pontos costeiros de Madre de Deus e regiões adjacentes."
	},
	{
		icon: ShieldCheck,
		title: "Ciência Verificável",
		desc: "Dados abertos, metodologia rastreável e conformidade com padrões internacionais de oceanografia."
	},
	{
		icon: Leaf,
		title: "Economia Azul",
		desc: "Insumos para políticas públicas, projetos regenerativos e cadeias produtivas sustentáveis."
	},
	{
		icon: Earth,
		title: "Impacto Global",
		desc: "Contribuição direta para ODS 14 — vida na água — através de dados replicáveis."
	}
];
var steps = [
	{
		step: "01",
		title: "Coleta",
		desc: "Amostras de água captadas em pontos estratégicos do litoral."
	},
	{
		step: "02",
		title: "Análise Química",
		desc: "Determinação de composição mineral, salinidade e parâmetros físico-químicos."
	},
	{
		step: "03",
		title: "Processamento IA",
		desc: "Modelos identificam padrões, anomalias e correlações ambientais."
	},
	{
		step: "04",
		title: "Visualização",
		desc: "Dashboards, mapas e relatórios acessíveis a comunidade e pesquisadores."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-hero pt-16 pb-24 sm:pt-24 sm:pb-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OceanBackdrop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .7 },
					className: "mx-auto max-w-4xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "glass mb-6 gap-2 border-primary/30 px-4 py-1.5 text-xs font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), "Inteligência Oceânica Sustentável"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
							children: [
								"A tecnologia que transforma",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-ocean",
									children: "dados do oceano"
								}),
								" em conhecimento sustentável."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl",
							children: "A AquaMinerals integra sensores, ciência oceanográfica e inteligência artificial para monitorar a saúde do mar e impulsionar a economia azul."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "bg-gradient-ocean text-white shadow-glow hover:opacity-95",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dashboard",
									children: ["Explorar Plataforma ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "border-primary/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/sobre",
									children: "Conhecer Projeto"
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .2
					},
					className: "mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: kpis.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-6 shadow-elegant transition-transform hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(k.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-3xl font-bold tracking-tight",
								children: k.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm text-muted-foreground",
								children: k.label
							})
						]
					}, k.label))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "mx-auto max-w-2xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Diferenciais"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-5xl",
							children: "Ciência oceânica, refinada para escala."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Uma plataforma que combina rigor científico com experiência de produto de nível mundial."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: features.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						transition: {
							...fadeUp.transition,
							delay: i * .05
						},
						className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-ocean opacity-0 blur-3xl transition-opacity group-hover:opacity-20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-ocean text-white shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: f.desc
							})
						]
					}, f.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border/60 bg-secondary/30 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "secondary",
							className: "mb-4",
							children: "Como funciona"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold sm:text-5xl",
							children: "Do oceano ao insight, em quatro etapas."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...fadeUp,
							transition: {
								...fadeUp.transition,
								delay: i * .08
							},
							className: "relative rounded-2xl border border-border/60 bg-card p-7 shadow-elegant",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 font-display text-xs font-bold tracking-widest text-primary",
									children: ["ETAPA ", s.step]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: s.desc
								}),
								i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-2.5 top-1/2 hidden h-px w-5 bg-border lg:block" })
							]
						}, s.step))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							className: "text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/como-funciona",
								children: ["Ver processo completo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "relative overflow-hidden rounded-3xl bg-gradient-ocean p-10 text-white shadow-glow sm:p-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-8 w-8" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-3xl font-bold sm:text-5xl",
								children: "Explore o oceano em tempo real."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-white/80",
								children: "Acesse dashboards, mapas e nossa IA especializada para decisões ambientais melhores."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/dashboard",
										children: "Abrir Dashboard"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-white/30 bg-transparent text-white hover:bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/aqua-ai",
										children: "Falar com AquaAI"
									})
								})]
							})
						]
					})]
				})
			})
		})
	] });
}
//#endregion
export { Home as component };
