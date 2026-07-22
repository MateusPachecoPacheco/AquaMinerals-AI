import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";

type Point = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  quality: number;
  temp: number;
  minerals: string[];
  lastAnalysis: string;
  status: "Ótimo" | "Atenção" | "Crítico";
};

const statusFill: Record<Point["status"], string> = {
  "Ótimo": "#10b981",
  "Atenção": "#f59e0b",
  "Crítico": "#ef4444",
};

function Recenter({ selected }: { selected: Point | null }) {
  const map = useMap();
  useEffect(() => {
    if (selected) map.flyTo([selected.lat, selected.lng], 13, { duration: 0.8 });
  }, [selected, map]);
  return null;
}

export function LeafletMap({
  points,
  onSelect,
  selected,
}: {
  points: Point[];
  onSelect: (p: Point) => void;
  selected: Point | null;
}) {
  return (
    <MapContainer
      center={[-12.78, -38.62]}
      zoom={12}
      className="h-full w-full"
      scrollWheelZoom
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png" />
      <Recenter selected={selected} />
      {points.map((p) => {
        const color = statusFill[p.status];
        const isSel = selected?.id === p.id;
        return (
          <CircleMarker
            key={p.id}
            center={[p.lat, p.lng]}
            radius={isSel ? 14 : 10}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: 0.55,
              weight: isSel ? 4 : 2,
            }}
            eventHandlers={{ click: () => onSelect(p) }}
          >
            <Popup>
              <div className="text-xs">
                <div className="font-semibold">{p.name}</div>
                <div>Qualidade: {p.quality}%</div>
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
