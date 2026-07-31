globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/LeafletMap-B1iyNkQp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"259e8-mQrkebpFM0WIHe1hxooks2Hh31M\"",
		"mtime": "2026-07-31T07:33:06.565Z",
		"size": 154088,
		"path": "../public/assets/LeafletMap-B1iyNkQp.js"
	},
	"/assets/admin-CqErcBOF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31d9-Azf47qqcQZH/AXrmmYHe0Hc9fTU\"",
		"mtime": "2026-07-31T07:33:06.566Z",
		"size": 12761,
		"path": "../public/assets/admin-CqErcBOF.js"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"49c-2GUBB+lBSaAeith+cHGegI72YnY\"",
		"mtime": "2026-07-31T07:33:07.878Z",
		"size": 1180,
		"path": "../public/favicon.svg"
	},
	"/assets/aqua-ai-FhnjZgjH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b5f-8k5LwCiHj3qGqFgXBSw553uz8WE\"",
		"mtime": "2026-07-31T07:33:06.566Z",
		"size": 7007,
		"path": "../public/assets/aqua-ai-FhnjZgjH.js"
	},
	"/assets/aquaminers-logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"2716-Ad5DsgRCcDY/J4AMBHmPDrEI1T0\"",
		"mtime": "2026-07-31T07:33:07.876Z",
		"size": 10006,
		"path": "../public/assets/aquaminers-logo.svg"
	},
	"/assets/dist-DbQUR53h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b910-IEekovYl/CzBMm/6RUm1Y4GDgJQ\"",
		"mtime": "2026-07-31T07:33:06.566Z",
		"size": 178448,
		"path": "../public/assets/dist-DbQUR53h.js"
	},
	"/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2": {
		"type": "font/woff2",
		"etag": "\"6568-cF1iUGbboMFZ8TfnP5HiMgl9II0\"",
		"mtime": "2026-07-31T07:33:06.569Z",
		"size": 25960,
		"path": "../public/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2"
	},
	"/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2": {
		"type": "font/woff2",
		"etag": "\"493c-n3Oy9D6jvzfMjpClqox+Zo7ERQQ\"",
		"mtime": "2026-07-31T07:33:06.569Z",
		"size": 18748,
		"path": "../public/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2"
	},
	"/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2": {
		"type": "font/woff2",
		"etag": "\"2be0-BP5iTzJeB8nLqYAgKpWNi5o1Zm8\"",
		"mtime": "2026-07-31T07:33:06.570Z",
		"size": 11232,
		"path": "../public/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2"
	},
	"/assets/inter-greek-wght-normal-CkhJZR-_.woff2": {
		"type": "font/woff2",
		"etag": "\"4a34-xor/hj4YNqI52zFecXnUbzQ4Xs4\"",
		"mtime": "2026-07-31T07:33:06.571Z",
		"size": 18996,
		"path": "../public/assets/inter-greek-wght-normal-CkhJZR-_.woff2"
	},
	"/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2": {
		"type": "font/woff2",
		"etag": "\"14c4c-zz61D7IQFMB9QxHvTAOk/Vh4ibQ\"",
		"mtime": "2026-07-31T07:33:06.571Z",
		"size": 85068,
		"path": "../public/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2"
	},
	"/assets/inter-latin-wght-normal-Dx4kXJAl.woff2": {
		"type": "font/woff2",
		"etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
		"mtime": "2026-07-31T07:33:06.571Z",
		"size": 48256,
		"path": "../public/assets/inter-latin-wght-normal-Dx4kXJAl.woff2"
	},
	"/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2": {
		"type": "font/woff2",
		"etag": "\"280c-nBythjoDQ0+5wVAendJ6wU7Xz2M\"",
		"mtime": "2026-07-31T07:33:06.571Z",
		"size": 10252,
		"path": "../public/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2"
	},
	"/assets/label-BI1mRcCo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2eb-61fJzMMOmBKM6YG2Pnnb6Xemgp0\"",
		"mtime": "2026-07-31T07:33:06.567Z",
		"size": 747,
		"path": "../public/assets/label-BI1mRcCo.js"
	},
	"/assets/jsx-runtime-BCldrbVS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2fa9-/bvMVGHfdh5F/jn2ZgOM+OTWE3Y\"",
		"mtime": "2026-07-31T07:33:06.567Z",
		"size": 12201,
		"path": "../public/assets/jsx-runtime-BCldrbVS.js"
	},
	"/assets/login-B6LF15Ps.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22c4-yFQ/TvfnMD6CcfEg2Vas+1tMWjw\"",
		"mtime": "2026-07-31T07:33:06.567Z",
		"size": 8900,
		"path": "../public/assets/login-B6LF15Ps.js"
	},
	"/assets/mapa-BJGRHf3V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1643-Cxb7Ag4qvUFnexI36R235lma4oY\"",
		"mtime": "2026-07-31T07:33:06.568Z",
		"size": 5699,
		"path": "../public/assets/mapa-BJGRHf3V.js"
	},
	"/assets/register-B5Pota4p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124c-ZFuz71SVuYwF9QgJn3K487zSJEU\"",
		"mtime": "2026-07-31T07:33:06.568Z",
		"size": 4684,
		"path": "../public/assets/register-B5Pota4p.js"
	},
	"/assets/routes-CpgZ57D6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"291f-DOzsBZ+tHfb63+AtfdSckjF2Qu8\"",
		"mtime": "2026-07-31T07:33:06.568Z",
		"size": 10527,
		"path": "../public/assets/routes-CpgZ57D6.js"
	},
	"/assets/sora-latin-ext-wght-normal-CawQDOvP.woff2": {
		"type": "font/woff2",
		"etag": "\"3cbc-zoMcEI36/uoJ/Z+j80Liw6+D5rk\"",
		"mtime": "2026-07-31T07:33:06.572Z",
		"size": 15548,
		"path": "../public/assets/sora-latin-ext-wght-normal-CawQDOvP.woff2"
	},
	"/assets/sora-latin-wght-normal-DdqRvwsR.woff2": {
		"type": "font/woff2",
		"etag": "\"8374-k/MiEzpWzVjLE/2dPjVVQmh14lU\"",
		"mtime": "2026-07-31T07:33:06.572Z",
		"size": 33652,
		"path": "../public/assets/sora-latin-wght-normal-DdqRvwsR.woff2"
	},
	"/assets/sparkles-CipeqONR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e2-KY7xgJ6KR37KNFBC/XCSNXIt0WI\"",
		"mtime": "2026-07-31T07:33:06.569Z",
		"size": 482,
		"path": "../public/assets/sparkles-CipeqONR.js"
	},
	"/assets/styles-DIN2rAps.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b6a3-I1WOoVAAxtyaH5ZcKkygMps/fAM\"",
		"mtime": "2026-07-31T07:33:06.573Z",
		"size": 112291,
		"path": "../public/assets/styles-DIN2rAps.css"
	},
	"/assets/user-Dg2bcVpd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-Y6H+ADasHVGlzodjgDLbpINHmQ8\"",
		"mtime": "2026-07-31T07:33:06.569Z",
		"size": 184,
		"path": "../public/assets/user-Dg2bcVpd.js"
	},
	"/assets/index-zQ89FAnP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e4b90-Sro/6aV2+qm1446avXflt15X4Lc\"",
		"mtime": "2026-07-31T07:33:06.527Z",
		"size": 936848,
		"path": "../public/assets/index-zQ89FAnP.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_olPEXp = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_olPEXp
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
