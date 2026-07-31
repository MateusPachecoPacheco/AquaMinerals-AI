import { o as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn, t as Button } from "./button-CFsQTJc0.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Menu, E as LogOut, J as Check, K as ChevronRight, S as MessageCircle, T as Mail, U as Circle, b as Moon, j as Instagram, r as Waves, t as X, u as Sun, w as MapPin, y as Phone } from "../_libs/lucide-react.mjs";
import { r as useAuth } from "./AuthContext-D3DM7c_S.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-Cj46bYj8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeProviderContext = (0, import_react.createContext)({
	theme: "system",
	setTheme: () => null
});
function ThemeProvider({ children, defaultTheme = "system", storageKey = "aquaminerals-theme" }) {
	const [theme, setThemeState] = (0, import_react.useState)(defaultTheme);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const stored = localStorage.getItem(storageKey);
		if (stored) setThemeState(stored);
	}, [storageKey]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const root = window.document.documentElement;
		root.classList.remove("light", "dark");
		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
			root.classList.add(systemTheme);
		} else root.classList.add(theme);
	}, [theme]);
	const setTheme = (newTheme) => {
		if (typeof window !== "undefined") localStorage.setItem(storageKey, newTheme);
		setThemeState(newTheme);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProviderContext.Provider, {
		value: {
			theme,
			setTheme
		},
		children
	});
}
var useTheme = () => {
	const context = (0, import_react.useContext)(ThemeProviderContext);
	if (context === void 0) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function ThemeToggle() {
	const { setTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			size: "icon",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Alternar tema"
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
		align: "end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => setTheme("light"),
				children: "Claro"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => setTheme("dark"),
				children: "Escuro"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: () => setTheme("system"),
				children: "Sistema"
			})
		]
	})] });
}
var nav = [
	{
		to: "/",
		label: "Início"
	},
	{
		to: "/sobre",
		label: "Sobre"
	},
	{
		to: "/como-funciona",
		label: "Como Funciona"
	},
	{
		to: "/dashboard",
		label: "Dashboard"
	},
	{
		to: "/mapa",
		label: "Mapa"
	},
	{
		to: "/impacto",
		label: "Impacto"
	},
	{
		to: "/comunidade",
		label: "Comunidade"
	},
	{
		to: "/aqua-ai",
		label: "AquaAI"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const { user, isAuthenticated, logout } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong border-b border-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/favicon.svg",
							alt: "AquaMinerals",
							className: "h-9 w-9 rounded-xl shadow-glow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base font-bold tracking-tight",
								children: "AquaMinerals"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-medium uppercase tracking-widest text-muted-foreground",
								children: "Ocean Intelligence"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: nav.map((item) => {
							const active = pathname === item.to;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: cn("relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
								children: [item.label, active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layoutId: "nav-active",
									className: "absolute inset-0 -z-10 rounded-md bg-secondary",
									transition: {
										type: "spring",
										stiffness: 380,
										damping: 30
									}
								})]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center gap-2 lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), isAuthenticated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/dashboard",
								className: "flex items-center gap-2 hover:opacity-80 transition-opacity",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-9 h-9 rounded-full bg-gradient-ocean flex items-center justify-center shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white font-bold text-sm",
										children: user?.name?.charAt(0).toUpperCase()
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden xl:flex flex-col leading-tight",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-foreground",
										children: user?.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground capitalize",
										children: user?.role
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: logout,
								className: "gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sair"]
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								children: "Entrar"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "bg-gradient-ocean text-white shadow-elegant hover:opacity-90",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/register",
								children: "Cadastrar"
							})
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary",
						onClick: () => setOpen((v) => !v),
						"aria-label": "Menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					height: 0,
					opacity: 0
				},
				animate: {
					height: "auto",
					opacity: 1
				},
				exit: {
					height: 0,
					opacity: 0
				},
				className: "overflow-hidden border-t border-border/60 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between py-2 mb-2 border-b border-border/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-muted-foreground",
								children: "Tema"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
						}),
						isAuthenticated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 py-3 mb-2 border-b border-border/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-white font-bold text-lg",
									children: user?.name?.charAt(0).toUpperCase()
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-foreground truncate",
										children: user?.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground truncate",
										children: user?.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground capitalize mt-0.5",
										children: user?.role
									})
								]
							})]
						}),
						nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: cn("rounded-md px-3 py-2 text-sm font-medium", pathname === item.to ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/60"),
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 pt-3 border-t border-border/60 flex gap-2",
							children: isAuthenticated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								className: "flex-1 gap-2",
								onClick: () => {
									logout();
									setOpen(false);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sair"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								className: "flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									onClick: () => setOpen(false),
									children: "Entrar"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								className: "flex-1 bg-gradient-ocean text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/register",
									onClick: () => setOpen(false),
									children: "Cadastrar"
								})
							})] })
						})
					]
				})
			}) })]
		})
	});
}
var openWhatsApp = () => {
	const phone = "5571987952529";
	const message = encodeURIComponent("Olá! Vim através da plataforma AquaMinerals e gostaria de saber mais sobre o projeto.");
	window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};
var openInstagram = () => {
	window.open("https://instagram.com/_mateuspacheco__", "_blank");
};
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative border-t border-border/60 bg-secondary/20 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-ocean text-white shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waves, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-bold",
									children: "AquaMinerals"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: "Plataforma científica dedicada ao estudo e extração sustentável de minerais da água do mar em Madre de Deus, BA."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: openWhatsApp,
										"aria-label": "WhatsApp AquaMinerals",
										className: "group relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-ocean text-white shadow-elegant transition-all hover:scale-110 hover:shadow-glow",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5 transition-transform group-hover:rotate-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card px-2 py-1 text-xs text-foreground opacity-0 shadow-elegant transition-opacity group-hover:opacity-100 border border-border/60",
											children: "+55 71 98795-2529"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: openInstagram,
										"aria-label": "Instagram AquaMinerals",
										className: "group relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-ocean text-white shadow-elegant transition-all hover:scale-110 hover:shadow-glow",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 transition-transform group-hover:rotate-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card px-2 py-1 text-xs text-foreground opacity-0 shadow-elegant transition-opacity group-hover:opacity-100 border border-border/60",
											children: "@_mateuspacheco__"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: void 0,
										"aria-label": "Email AquaMinerals",
										className: "group grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-card text-foreground shadow-elegant transition-all hover:scale-110 hover:border-primary/50 hover:shadow-glow",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 transition-transform group-hover:-translate-y-0.5" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display font-semibold mb-4",
						children: "Plataforma"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Dashboard"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/mapa",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Mapa Interativo"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/comunidade",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Comunidade"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/aqua-ai",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "AquaAI"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display font-semibold mb-4",
						children: "Institucional"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/sobre",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Sobre"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/como-funciona",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Como Funciona"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/impacto",
								className: "text-muted-foreground hover:text-primary transition-colors",
								children: "Impacto"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display font-semibold mb-4",
						children: "Contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Madre de Deus, Bahia — Brasil" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+55 71 98795-2529" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email oficial em breve" })]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" AquaMinerals. Ciência, tecnologia e preservação em Madre de Deus."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-eco animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Monitoramento ativo na Baía de Todos-os Santos" })]
				})]
			})]
		})]
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ThemeProvider as n, SiteLayout as t };
