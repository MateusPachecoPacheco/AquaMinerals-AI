import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Droplet, Thermometer, FlaskConical, Calendar, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mapa")({
  head: () => ({ meta: [{ title: "Mapa Interativo — AquaMinerals" }] }),
  component: MapPage,
});

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

const points: Point[] = [
  { id: "MDD-01", name: "Baía de Aratu", lat: -12.79, lng: -38.60, quality: 94, temp: 26.5, minerals: ["Na", "Mg", "Ca"], lastAnalysis: "há 2 min", status: "Ótimo" },
  { id: "MDD-02", name: "Ilha de Bimbarras", lat: -12.75, lng: -38.62, quality: 92, temp: 26.8, minerals: ["Na", "K", "Mg"], lastAnalysis: "há 4 min", status: "Ótimo" },
  { id: "MDD-03", name: "Suape Norte", lat: -12.73, lng: -38.65, quality: 78, temp: 27.6, minerals: ["Na", "Ca"], lastAnalysis: "há 6 min", status: "Atenção" },
  { id: "MDD-04", name: "Rio Paraguaçu", lat: -12.80, lng: -38.68, quality: 89, temp: 26.3, minerals: ["Na", "Mg"], lastAnalysis: "há 8 min", status: "Ótimo" },
  { id: "MDD-05", name: "Ponta de Suape", lat: -12.77, lng: -38.55, quality: 62, temp: 28.2, minerals: ["Na"], lastAnalysis: "há 10 min", status: "Crítico" },
  { id: "MDD-06", name: "Ilha das Fontes", lat: -12.82, lng: -38.58, quality: 91, temp: 26.7, minerals: ["Na", "Mg", "K"], lastAnalysis: "há 12 min", status: "Ótimo" },
];

const statusColor: Record<Point["status"], string> = {
  "Ótimo": "bg-eco",
  "Atenção": "bg-amber-500",
  "Crítico": "bg-destructive",
};

const statusBadge: Record<Point["status"], string> = {
  "Ótimo": "bg-eco/15 text-eco border-eco/30",
  "Atenção": "bg-amber-500/15 text-amber-600 border-amber-500/30 dark:text-amber-400",
  "Crítico": "bg-destructive/15 text-destructive border-destructive/30",
};

function MapPage() {
  const [selected, setSelected] = useState<Point | null>(null);
  const [MapComp, setMapComp] = useState<React.ComponentType<{ points: Point[]; onSelect: (p: Point) => void; selected: Point | null }> | null>(null);

  useEffect(() => {
    let mounted = true;
    import("@/components/site/LeafletMap").then((m) => {
      if (mounted) setMapComp(() => m.LeafletMap);
    });
    return () => { mounted = false; };
  }, []);

  return (
    <SiteLayout>
      <div className="relative h-[calc(100vh-4rem)]">
        <div className="absolute inset-0">
          {MapComp ? (
            <MapComp points={points} onSelect={setSelected} selected={selected} />
          ) : (
            <div className="grid h-full place-items-center bg-secondary/30">
              <div className="text-sm text-muted-foreground">Carregando mapa...</div>
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-4 flex justify-center px-4">
          <div className="pointer-events-auto glass-strong flex items-center gap-3 rounded-full border border-border/60 px-5 py-2.5 shadow-elegant">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold">Madre de Deus — BA</span>
            <span className="text-xs text-muted-foreground">{points.length} pontos ativos</span>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 hidden lg:block">
          <div className="pointer-events-auto glass-strong rounded-2xl border border-border/60 p-4 shadow-elegant">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Legenda</div>
            {(["Ótimo", "Atenção", "Crítico"] as const).map((s) => (
              <div key={s} className="flex items-center gap-2 py-1 text-sm">
                <span className={cn("h-2.5 w-2.5 rounded-full", statusColor[s])} />
                {s}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.aside
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 z-10 h-full w-full max-w-md overflow-y-auto border-l border-border/60 bg-card p-6 shadow-glow sm:w-96"
            >
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="outline" className={cn("border", statusBadge[selected.status])}>
                    <span className={cn("mr-1.5 h-1.5 w-1.5 rounded-full", statusColor[selected.status])} />
                    {selected.status}
                  </Badge>
                  <h2 className="mt-3 font-display text-2xl font-bold">{selected.name}</h2>
                  <p className="text-xs font-mono text-muted-foreground">{selected.id} · {selected.lat.toFixed(3)}, {selected.lng.toFixed(3)}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelected(null)}><X className="h-4 w-4" /></Button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border/60 p-4">
                  <Droplet className="h-4 w-4 text-chart-1" />
                  <div className="mt-2 font-display text-2xl font-bold">{selected.quality}%</div>
                  <div className="text-xs text-muted-foreground">Qualidade</div>
                </div>
                <div className="rounded-xl border border-border/60 p-4">
                  <Thermometer className="h-4 w-4 text-chart-5" />
                  <div className="mt-2 font-display text-2xl font-bold">{selected.temp}°C</div>
                  <div className="text-xs text-muted-foreground">Temperatura</div>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-border/60 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <FlaskConical className="h-3.5 w-3.5" /> Minerais detectados
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.minerals.map((m) => (
                    <Badge key={m} variant="secondary" className="font-mono">{m}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-border/60 p-4">
                <Calendar className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Última análise</div>
                  <div className="text-sm font-semibold">{selected.lastAnalysis}</div>
                </div>
              </div>

              <Button className="mt-6 w-full bg-gradient-ocean text-white">Ver histórico completo</Button>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </SiteLayout>
  );
}