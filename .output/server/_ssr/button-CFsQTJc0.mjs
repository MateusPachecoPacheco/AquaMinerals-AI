import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-CFsQTJc0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function showToast(message, type = "info") {
	const toast = document.createElement("div");
	toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-medium transition-all animate-in slide-in-from-right max-w-md ${type === "success" ? "bg-green-600" : type === "error" ? "bg-red-600" : "bg-blue-600"}`;
	toast.textContent = message;
	document.body.appendChild(toast);
	setTimeout(() => {
		toast.style.opacity = "0";
		setTimeout(() => toast.remove(), 300);
	}, 4e3);
}
function exportToCSV(data, filename) {
	if (!data.length) {
		showToast("Sem dados para exportar", "error");
		return;
	}
	const headers = Object.keys(data[0]);
	const csv = [headers.join(","), ...data.map((row) => headers.map((h) => JSON.stringify(row[h] ?? "")).join(","))].join("\n");
	const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
	const url = URL.createObjectURL(blob);
	const link = document.createElement("a");
	link.href = url;
	link.download = `${filename}_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
	link.click();
	URL.revokeObjectURL(url);
	showToast("Arquivo CSV exportado com sucesso!", "success");
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { showToast as i, cn as n, exportToCSV as r, Button as t };
