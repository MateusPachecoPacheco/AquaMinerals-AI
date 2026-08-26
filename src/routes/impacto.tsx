import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, Droplet, Recycle, TrendingUp, ShieldCheck } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/impacto")({
  head: () => ({ meta: [{ title: "Impacto Ambiental — AquaMinerals" }] }),
  component: Impact,
});

const stats = [
  { icon: Droplet, value: "8.2M L", label: "Água analisada", color: "text-chart-1" },
  { icon: Leaf, value: "3.4 tCO₂", label: "Emissões evitadas", color: "text-chart-2" },
  { icon: Recycle, value: "42%", label: "Redução de descarte", color: "text-chart-3" },
  { icon: ShieldCheck, value: "12", label: "Áreas preservadas", color: "text-chart-4" },
];

const trend = Array.from({ length: 12 }).map((_, i) => ({
  mes: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"][i],
  preservacao: 40 + i * 4 + Math.random() * 6,
}));

const pillars = [
  { title: "Redução de impactos", desc: "Identificação precoce de poluentes reduz danos aos ecossistemas costeiros." },
  { title: "Preservação", desc: "Mapeamento contínuo de áreas sensíveis e biodiversidade marinha." },
  { title: "Sustentabilidade", desc: "Insumos técnicos para políticas públicas e projetos regenerativos." },
  { title: "Economia Azul", desc: "Base científica para cadeias produtivas responsáveis." },
];

export default function Impact() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="glass mb-6">Impacto ambiental</Badge>
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            Cada dado gera <span className="text-gradient-ocean">preservação</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Medimos, monitoramos e reportamos o efeito real da AquaMinerals no oceano e nas comunidades.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant"
              >
                <s.icon className={`h-6 w-6 ${s.color}`} />
                <div className="mt-4 font-display text-3xl font-bold">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border/60 bg-card p-6 shadow-elegant">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-display font-semibold">Índice de preservação — 12 meses</h3>
                <p className="text-xs text-muted-foreground">Composto por qualidade, biodiversidade e conformidade</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-eco/15 px-3 py-1 text-xs font-medium text-eco">
                <TrendingUp className="h-3.5 w-3.5" /> +38% ano/ano
              </div>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trend}>
                  <defs>
                    <linearGradient id="ecoArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-2)" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="var(--chart-2)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Area type="monotone" dataKey="preservacao" stroke="var(--chart-2)" strokeWidth={2.5} fill="url(#ecoArea)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border/60 bg-card p-8 shadow-elegant"
              >
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
