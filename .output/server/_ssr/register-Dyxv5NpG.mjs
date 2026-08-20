import { o as __toESM } from "../_runtime.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Lock, T as Mail, a as User, it as ArrowRight } from "../_libs/lucide-react.mjs";
import { c as Input, d as useAuth, f as Button } from "./router-CDLd4puj.mjs";
import { t as Label } from "./label-CG8S7mEM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-Dyxv5NpG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Register() {
	const [isLoading, setIsLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const navigate = useNavigate();
	const { register } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen bg-background lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col justify-center px-6 py-12 sm:px-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "mb-12 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/favicon.svg",
					alt: "AquaMinerals",
					className: "h-9 w-9 rounded-xl shadow-glow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-bold",
					children: "AquaMinerals"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "mx-auto w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-bold",
						children: "Junte-se à expedição"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Crie sua conta para monitorar os oceanos."
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-600 dark:bg-red-950/50 dark:border-red-900 dark:text-red-400",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 space-y-4",
						onSubmit: async (e) => {
							e.preventDefault();
							setIsLoading(true);
							setError("");
							const formData = new FormData(e.currentTarget);
							const name = formData.get("name");
							const email = formData.get("email");
							const password = formData.get("password");
							try {
								await register(name, email, password);
								navigate({ to: "/dashboard" });
							} catch (err) {
								setError(err.response?.data?.message || "Erro ao criar conta. Tente novamente.");
								setIsLoading(false);
							}
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Nome completo"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "name",
										name: "name",
										placeholder: "Seu nome",
										className: "pl-9",
										required: true,
										disabled: isLoading
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "E-mail"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "email",
										name: "email",
										type: "email",
										placeholder: "voce@oceano.io",
										className: "pl-9",
										required: true,
										disabled: isLoading
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "password",
									children: "Senha"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "password",
										name: "password",
										type: "password",
										placeholder: "Mínimo 6 caracteres",
										className: "pl-9",
										required: true,
										minLength: 6,
										disabled: isLoading
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								className: "w-full bg-gradient-ocean text-white shadow-glow",
								disabled: isLoading,
								children: isLoading ? "Criando conta..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Criar conta ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })] })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-sm text-muted-foreground",
						children: [
							"Já tem conta?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "font-medium text-primary hover:underline",
								children: "Fazer login"
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden overflow-hidden bg-gradient-ocean lg:block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "absolute inset-x-0 top-1/3 w-full text-white animate-wave",
					viewBox: "0 0 1440 320",
					preserveAspectRatio: "none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						fill: "currentColor",
						d: "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,224C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex h-full flex-col justify-between p-16 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-strong inline-flex rounded-full border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium",
							children: "Comunidade Científica"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-4xl font-bold leading-tight",
							children: "\"A água do mar é a maior mina de minerais do planeta.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-white/80",
							children: "Cadastre-se para acessar dados em tempo real sobre salinidade, pH e extração sustentável em Madre de Deus."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 text-sm text-white/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-eco-light" }), "Junte-se a nós · AquaMinerals 2026"]
					})
				]
			})]
		})]
	});
}
//#endregion
export { Register as component };
