import { a as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as useMap, i as CircleMarker, n as Popup, r as MapContainer, t as TileLayer } from "../_libs/react-leaflet.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LeafletMap-j5JwhgMh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusFill = {
	"Ótimo": "#10b981",
	"Atenção": "#f59e0b",
	"Crítico": "#ef4444"
};
function Recenter({ selected }) {
	const map = useMap();
	(0, import_react.useEffect)(() => {
		if (selected) map.flyTo([selected.lat, selected.lng], 13, { duration: .8 });
	}, [selected, map]);
	return null;
}
function LeafletMap({ points, onSelect, selected }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MapContainer, {
		center: [-12.78, -38.62],
		zoom: 12,
		className: "h-full w-full",
		scrollWheelZoom: true,
		zoomControl: false,
		attributionControl: false,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileLayer, { url: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recenter, { selected }),
			points.map((p) => {
				const color = statusFill[p.status];
				const isSel = selected?.id === p.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleMarker, {
					center: [p.lat, p.lng],
					radius: isSel ? 14 : 10,
					pathOptions: {
						color,
						fillColor: color,
						fillOpacity: .55,
						weight: isSel ? 4 : 2
					},
					eventHandlers: { click: () => onSelect(p) },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popup, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"Qualidade: ",
							p.quality,
							"%"
						] })]
					}) })
				}, p.id);
			})
		]
	});
}
//#endregion
export { LeafletMap };
