import { a as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn, t as Button } from "./button-B2LyfGb_.mjs";
import { t as Badge } from "./badge-DZWKOgwu.mjs";
import { I as Droplet, J as Calendar, M as FlaskConical, l as Thermometer, t as X, x as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-Bc4BM6pC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mapa-D_2yFdJc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var points = [
	{
		id: "MDD-01",
		name: "Baía de Aratu",
		lat: -12.79,
		lng: -38.6,
		quality: 94,
		temp: 26.5,
		minerals: [
			"Na",
			"Mg",
			"Ca"
		],
		lastAnalysis: "há 2 min",
		status: "Ótimo"
	},
	{
		id: "MDD-02",
		name: "Ilha de Bimbarras",
		lat: -12.75,
		lng: -38.62,
		quality: 92,
		temp: 26.8,
		minerals: [
			"Na",
			"K",
			"Mg"
		],
		lastAnalysis: "há 4 min",
		status: "Ótimo"
	},
	{
		id: "MDD-03",
		name: "Suape Norte",
		lat: -12.73,
		lng: -38.65,
		quality: 78,
		temp: 27.6,
		minerals: ["Na", "Ca"],
		lastAnalysis: "há 6 min",
		status: "Atenção"
	},
	{
		id: "MDD-04",
		name: "Rio Paraguaçu",
		lat: -12.8,
		lng: -38.68,
		quality: 89,
		temp: 26.3,
		minerals: ["Na", "Mg"],
		lastAnalysis: "há 8 min",
		status: "Ótimo"
	},
	{
		id: "MDD-05",
		name: "Ponta de Suape",
		lat: -12.77,
		lng: -38.55,
		quality: 62,
		temp: 28.2,
		minerals: ["Na"],
		lastAnalysis: "há 10 min",
		status: "Crítico"
	},
	{
		id: "MDD-06",
		name: "Ilha das Fontes",
		lat: -12.82,
		lng: -38.58,
		quality: 91,
		temp: 26.7,
		minerals: [
			"Na",
			"Mg",
			"K"
		],
		lastAnalysis: "há 12 min",
		status: "Ótimo"
	}
];
var statusColor = {
	"Ótimo": "bg-eco",
	"Atenção": "bg-amber-500",
	"Crítico": "bg-destructive"
};
var statusBadge = {
	"Ótimo": "bg-eco/15 text-eco border-eco/30",
	"Atenção": "bg-amber-500/15 text-amber-600 border-amber-500/30 dark:text-amber-400",
	"Crítico": "bg-destructive/15 text-destructive border-destructive/30"
};
function MapPage() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [MapComp, setMapComp] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let mounted = true;
		import("./LeafletMap-j5JwhgMh.mjs").then((m) => {
			if (mounted) setMapComp(() => m.LeafletMap);
		});
		return () => {
			mounted = false;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-[calc(100vh-4rem)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: MapComp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapComp, {
					points,
					onSelect: setSelected,
					selected
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full place-items-center bg-secondary/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: "Carregando mapa..."
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 top-4 flex justify-center px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto glass-strong flex items-center gap-3 rounded-full border border-border/60 px-5 py-2.5 shadow-elegant",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: "Madre de Deus — BA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted-foreground",
							children: [points.length, " pontos ativos"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-4 left-4 hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto glass-strong rounded-2xl border border-border/60 p-4 shadow-elegant",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: "Legenda"
					}), [
						"Ótimo",
						"Atenção",
						"Crítico"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 py-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2.5 w-2.5 rounded-full", statusColor[s]) }), s]
					}, s))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
				initial: {
					x: 400,
					opacity: 0
				},
				animate: {
					x: 0,
					opacity: 1
				},
				exit: {
					x: 400,
					opacity: 0
				},
				transition: {
					type: "spring",
					damping: 28,
					stiffness: 260
				},
				className: "absolute right-0 top-0 z-10 h-full w-full max-w-md overflow-y-auto border-l border-border/60 bg-card p-6 shadow-glow sm:w-96",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "outline",
								className: cn("border", statusBadge[selected.status]),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mr-1.5 h-1.5 w-1.5 rounded-full", statusColor[selected.status]) }), selected.status]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-2xl font-bold",
								children: selected.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-mono text-muted-foreground",
								children: [
									selected.id,
									" · ",
									selected.lat.toFixed(3),
									", ",
									selected.lng.toFixed(3)
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							onClick: () => setSelected(null),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border/60 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplet, { className: "h-4 w-4 text-chart-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 font-display text-2xl font-bold",
									children: [selected.quality, "%"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Qualidade"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border/60 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, { className: "h-4 w-4 text-chart-5" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 font-display text-2xl font-bold",
									children: [selected.temp, "°C"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Temperatura"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 rounded-xl border border-border/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-3.5 w-3.5" }), " Minerais detectados"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: selected.minerals.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "secondary",
								className: "font-mono",
								children: m
							}, m))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2 rounded-xl border border-border/60 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Última análise"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: selected.lastAnalysis
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6 w-full bg-gradient-ocean text-white",
						children: "Ver histórico completo"
					})
				]
			}) })
		]
	}) });
}
//#endregion
export { MapPage as component };
