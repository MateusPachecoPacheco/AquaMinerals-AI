globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
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
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"49c-2GUBB+lBSaAeith+cHGegI72YnY\"",
		"mtime": "2026-08-20T01:19:29.213Z",
		"size": 1180,
		"path": "../public/favicon.svg"
	},
	"/assets/admin-DKd_Vmgb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"317c-jLqNAcw9NMC/AJKhuAH1yw6kNyw\"",
		"mtime": "2026-08-20T01:19:27.362Z",
		"size": 12668,
		"path": "../public/assets/admin-DKd_Vmgb.js"
	},
	"/assets/aqua-ai-DxfuI56e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43a6-yUCA4USYQs/G2Y9DFX2x49wHu08\"",
		"mtime": "2026-08-20T01:19:27.362Z",
		"size": 17318,
		"path": "../public/assets/aqua-ai-DxfuI56e.js"
	},
	"/assets/LeafletMap-CJFEUEDX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"259e2-OYh+9Rf08ksnWUpQk9M/MRpIiDo\"",
		"mtime": "2026-08-20T01:19:27.362Z",
		"size": 154082,
		"path": "../public/assets/LeafletMap-CJFEUEDX.js"
	},
	"/assets/aquaminers-logo.svg": {
		"type": "image/svg+xml",
		"etag": "\"2716-Ad5DsgRCcDY/J4AMBHmPDrEI1T0\"",
		"mtime": "2026-08-20T01:19:29.213Z",
		"size": 10006,
		"path": "../public/assets/aquaminers-logo.svg"
	},
	"/assets/dist-DyM1NmqZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b505-SO2vjpMMFpHmC43zirnLWJy1dl0\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 177413,
		"path": "../public/assets/dist-DyM1NmqZ.js"
	},
	"/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2": {
		"type": "font/woff2",
		"etag": "\"6568-cF1iUGbboMFZ8TfnP5HiMgl9II0\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 25960,
		"path": "../public/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2"
	},
	"/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2": {
		"type": "font/woff2",
		"etag": "\"493c-n3Oy9D6jvzfMjpClqox+Zo7ERQQ\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 18748,
		"path": "../public/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2"
	},
	"/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2": {
		"type": "font/woff2",
		"etag": "\"2be0-BP5iTzJeB8nLqYAgKpWNi5o1Zm8\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 11232,
		"path": "../public/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2"
	},
	"/assets/inter-greek-wght-normal-CkhJZR-_.woff2": {
		"type": "font/woff2",
		"etag": "\"4a34-xor/hj4YNqI52zFecXnUbzQ4Xs4\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 18996,
		"path": "../public/assets/inter-greek-wght-normal-CkhJZR-_.woff2"
	},
	"/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2": {
		"type": "font/woff2",
		"etag": "\"14c4c-zz61D7IQFMB9QxHvTAOk/Vh4ibQ\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 85068,
		"path": "../public/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2"
	},
	"/assets/inter-latin-wght-normal-Dx4kXJAl.woff2": {
		"type": "font/woff2",
		"etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 48256,
		"path": "../public/assets/inter-latin-wght-normal-Dx4kXJAl.woff2"
	},
	"/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2": {
		"type": "font/woff2",
		"etag": "\"280c-nBythjoDQ0+5wVAendJ6wU7Xz2M\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 10252,
		"path": "../public/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2"
	},
	"/assets/jsx-runtime-qedvcxWt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2fc3-yyFuwa2kTlIItbMarNWGHyyZW+M\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 12227,
		"path": "../public/assets/jsx-runtime-qedvcxWt.js"
	},
	"/assets/label-oW9On0iW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"327-T+wzvM5PyadwbGxs5zvDRfSreSI\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 807,
		"path": "../public/assets/label-oW9On0iW.js"
	},
	"/assets/login-CJTqprYP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24a6-3/waf2RFekwx1pzQ8IhZNffot5w\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 9382,
		"path": "../public/assets/login-CJTqprYP.js"
	},
	"/assets/mapa-CSDVI7XT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1643-Pwzv+J9iHZYMwSV2yPGQlpHXxQc\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 5699,
		"path": "../public/assets/mapa-CSDVI7XT.js"
	},
	"/assets/register-CrJPeyWi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124f-BH53lBkJzZAHtcWdmdqYk15hKg0\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 4687,
		"path": "../public/assets/register-CrJPeyWi.js"
	},
	"/assets/routes-DMYxm4Ol.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"291f-6lr5ZZip9QX6M2XKQ3wDY+ep1T8\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 10527,
		"path": "../public/assets/routes-DMYxm4Ol.js"
	},
	"/assets/sora-latin-ext-wght-normal-CawQDOvP.woff2": {
		"type": "font/woff2",
		"etag": "\"3cbc-zoMcEI36/uoJ/Z+j80Liw6+D5rk\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 15548,
		"path": "../public/assets/sora-latin-ext-wght-normal-CawQDOvP.woff2"
	},
	"/assets/sora-latin-wght-normal-DdqRvwsR.woff2": {
		"type": "font/woff2",
		"etag": "\"8374-k/MiEzpWzVjLE/2dPjVVQmh14lU\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 33652,
		"path": "../public/assets/sora-latin-wght-normal-DdqRvwsR.woff2"
	},
	"/assets/sparkles-Ch4RGY1m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e2-j53zHQOlty3JdKWaHmunJPfsFXs\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 482,
		"path": "../public/assets/sparkles-Ch4RGY1m.js"
	},
	"/assets/styles-T6Zodsb4.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1b6a3-w2S9edYnv7S4Vx/BEpwI/m3D1Ac\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 112291,
		"path": "../public/assets/styles-T6Zodsb4.css"
	},
	"/assets/user-BrjzLhYs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b8-c1fWSmK0OGrMSRT5e22wETWPkSI\"",
		"mtime": "2026-08-20T01:19:27.363Z",
		"size": 184,
		"path": "../public/assets/user-BrjzLhYs.js"
	},
	"/assets/index-DLp5o22Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6f75-baggl0LWDDNHxChv9fQcr4EK54k\"",
		"mtime": "2026-08-20T01:19:27.362Z",
		"size": 946037,
		"path": "../public/assets/index-DLp5o22Z.js"
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
var _lazy_IO091Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IO091Z
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
