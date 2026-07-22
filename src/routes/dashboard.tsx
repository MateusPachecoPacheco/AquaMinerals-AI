import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import {
  Droplet, Thermometer, Waves, Beaker, Wind, FlaskConical,
  TrendingUp, TrendingDown, Search, Filter, Calendar, Download, RefreshCcw,
} from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { SiteLayout } from "@/components/site/SiteLayout";
import { cn } from "@/lib/utils";
import { showToast, exportToCSV } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{ title: "Dashboard Ambiental — AquaMinerals" }],
  }),
  component: Dashboard,
});

const kpis = [
  { label: "Qualidade da Água", value: "94", unit: "%", delta: 2.4, up: true, icon: Droplet, tint: "text-chart-1" },
  { label: "Temperatura", value: "26.8", unit: "°C", delta: 0.6, up: true, icon: Thermometer, tint: "text-chart-5" },
  { label: "Salinidade", value: "34.2", unit: "PSU", delta: 0.3, up: false, icon: Waves, tint: "text-chart-2" },
  { label: "pH", value: "8.1", unit: "", delta: 0.05, up: true, icon: Beaker, tint: "text-chart-3" },
  { label: "Oxigênio Dissolvido", value: "7.4", unit: "mg/L", delta: 0.2, up: false, icon: Wind, tint: "text-chart-4" },
  { label: "Minerais Identificados", value: "37", unit: "", delta: 3, up: true, icon: FlaskConical, tint: "text-primary" },
];

const timeSeries = Array.from({ length: 24 }).map((_, i) => ({
  hora: `${String(i).padStart(2, "0")}h`,
  qualidade: 88 + Math.sin(i / 3) * 6 + Math.random() * 2,
  temp: 25 + Math.sin(i / 5) * 2 + Math.random() * 0.5,
  ph: 8 + Math.sin(i / 6) * 0.2,
}));

const barData = [
  { mes: "Jan", coletas: 32, anomalias: 3 },
  { mes: "Fev", coletas: 41, anomalias: 5 },
  { mes: "Mar", coletas: 38, anomalias: 2 },
  { mes: "Abr", coletas: 52, anomalias: 4 },
  { mes: "Mai", coletas: 61, anomalias: 6 },
  { mes: "Jun", coletas: 58, anomalias: 3 },
  { mes: "Jul", coletas: 67, anomalias: 4 },
];

const minerals = [
  { name: "Sódio", value: 38, color: "var(--chart-1)" },
  { name: "Magnésio", value: 22, color: "var(--chart-2)" },
  { name: "Cálcio", value: 14, color: "var(--chart-3)" },
  { name: "Potássio", value: 12, color: "var(--chart-4)" },
  { name: "Outros", value: 14, color: "var(--chart-5)" },
];

const tableRows = [
  { id: "MDD-01", local: "Baía de Aratu", status: "Ótimo", ph: 8.2, temp: 26.5, atualizado: "há 2 min" },
  { id: "MDD-02", local: "Ilha de Bimbarras", status: "Ótimo", ph: 8.1, temp: 26.9, atualizado: "há 4 min" },
  { id: "MDD-03", local: "Suape Norte", status: "Atenção", ph: 7.7, temp: 27.6, atualizado: "há 6 min" },
  { id: "MDD-04", local: "Rio Paraguaçu", status: "Ótimo", ph: 8.0, temp: 26.3, atualizado: "há 8 min" },
  { id: "MDD-05", local: "Ponta de Suape", status: "Crítico", ph: 7.4, temp: 28.2, atualizado: "há 10 min" },
];

const statusStyles: Record<string, string> = {
  "Ótimo": "bg-eco/15 text-eco border-eco/30",
  "Atenção": "bg-amber-500/15 text-amber-600 border-amber-500/30 dark:text-amber-400",
  "Crítico": "bg-destructive/15 text-destructive border-destructive/30",
};

// Períodos de filtro cíclicos
const filterPeriods = [
  { value: "24h", label: "Últimas 24h" },
  { value: "7d", label: "7 dias" },
  { value: "30d", label: "30 dias" },
  { value: "90d", label: "90 dias" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  // 🆕 States para interatividade
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("24h");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // 🆕 Filtragem em tempo real da tabela
  const filteredRows = useMemo(() => {
    if (!searchTerm.trim()) return tableRows;
    const term = searchTerm.toLowerCase();
    return tableRows.filter(
      (row) =>
        row.local.toLowerCase().includes(term) ||
        row.id.toLowerCase().includes(term) ||
        row.status.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // 🆕 Handler do botão Reload
  const handleReload = async () => {
    setIsRefreshing(true);
    showToast("Atualizando dados do dashboard...", "info");
    // Simula refresh (em produção, faria fetch do backend)
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsRefreshing(false);
    showToast("Dados atualizados com sucesso!", "success");
  };

  // 🆕 Handler do botão Filter (cicla entre períodos)
  const handleFilter = () => {
    const currentIndex = filterPeriods.findIndex((p) => p.value === filterPeriod);
    const nextIndex = (currentIndex + 1) % filterPeriods.length;
    const nextPeriod = filterPeriods[nextIndex];
    setFilterPeriod(nextPeriod.value);
    showToast(`Filtro aplicado: ${nextPeriod.label}`, "info");
  };

  // 🆕 Handler do botão Exportar
  const handleExport = () => {
    exportToCSV(tableRows, "aquaminerals_pontos_monitorados");
  };

  return (
    <SiteLayout>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
          <div>
            <Badge variant="secondary" className="mb-2">Ao vivo</Badge>
            <h1 className="font-display text-3xl font-bold sm:text-4xl">Dashboard Ambiental</h1>
            <p className="mt-1 text-muted-foreground">Monitoramento em tempo real da baía de Madre de Deus.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* 🆕 SEARCH com filtragem em tempo real */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar ponto..."
                className="w-56 pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* SELECT de período (sincronizado com filterPeriod) */}
            <Select value={filterPeriod} onValueChange={setFilterPeriod}>
              <SelectTrigger className="w-32">
                <Calendar className="mr-1 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {filterPeriods.map((p) => (
                  <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* 🆕 FILTER (cicla entre períodos) */}
            <Button variant="outline" size="icon" onClick={handleFilter} title="Alternar filtro de período">
              <Filter className="h-4 w-4" />
            </Button>

            {/* 🆕 RELOAD com loading visual */}
            <Button
              variant="outline"
              size="icon"
              onClick={handleReload}
              disabled={isRefreshing}
              title="Recarregar dados"
            >
              <RefreshCcw className={cn("h-4 w-4 transition-transform", isRefreshing && "animate-spin")} />
            </Button>

            {/* 🆕 EXPORT CSV */}
            <Button className="bg-gradient-ocean text-white" onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />Exportar
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-border/60 bg-card p-5 shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <k.icon className={cn("h-5 w-5", k.tint)} />
                <div className={cn("flex items-center gap-1 text-xs font-medium", k.up ? "text-eco" : "text-destructive")}>
                  {k.up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                  {k.delta}
                </div>
              </div>
              <div className="mt-3 font-display text-2xl font-bold">
                {k.value}<span className="ml-1 text-sm font-medium text-muted-foreground">{k.unit}</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{k.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-display font-semibold">Qualidade da água — 24h</h3>
                <p className="text-xs text-muted-foreground">Indicador consolidado por hora</p>
              </div>
              <Tabs defaultValue="qual">
                <TabsList>
                  <TabsTrigger value="qual">Qualidade</TabsTrigger>
                  <TabsTrigger value="temp">Temp.</TabsTrigger>
                  <TabsTrigger value="ph">pH</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={timeSeries}>
                  <defs>
                    <linearGradient id="gArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="hora" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} domain={[80, 100]} />
                  <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Area type="monotone" dataKey="qualidade" stroke="var(--chart-1)" strokeWidth={2.5} fill="url(#gArea)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant">
            <h3 className="font-display font-semibold">Composição mineral</h3>
            <p className="text-xs text-muted-foreground">Distribuição relativa (%)</p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={minerals} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                    {minerals.map((m) => <Cell key={m.name} fill={m.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              {minerals.map((m) => (
                <div key={m.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: m.color }} />
                  <span className="text-muted-foreground">{m.name}</span>
                  <span className="ml-auto font-medium">{m.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant lg:col-span-2">
            <h3 className="font-display font-semibold">Coletas & anomalias mensais</h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Bar dataKey="coletas" fill="var(--chart-1)" radius={[8,8,0,0]} />
                  <Bar dataKey="anomalias" fill="var(--chart-4)" radius={[8,8,0,0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant">
            <h3 className="font-display font-semibold">pH — tendência</h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timeSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="hora" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} domain={[7.7, 8.3]} />
                  <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                  <Line type="monotone" dataKey="ph" stroke="var(--chart-3)" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-border/60 bg-card shadow-elegant">
          <div className="flex items-center justify-between border-b border-border/60 p-6">
            <div>
              <h3 className="font-display font-semibold">
                Pontos monitorados
                {searchTerm && (
                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                    ({filteredRows.length} de {tableRows.length})
                  </span>
                )}
              </h3>
              <p className="text-xs text-muted-foreground">Última atualização automática</p>
            </div>
            {/* 🆕 Botão "Ver todos" navegando para o mapa */}
            <Button variant="outline" size="sm" onClick={() => navigate({ to: "/mapa" })}>
              Ver todos
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Local</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>pH</TableHead>
                <TableHead>Temp. (°C)</TableHead>
                <TableHead className="text-right">Atualizado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    Nenhum ponto encontrado para "{searchTerm}"
                  </TableCell>
                </TableRow>
              ) : (
                filteredRows.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-mono text-xs">{r.id}</TableCell>
                    <TableCell className="font-medium">{r.local}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={cn("border", statusStyles[r.status])}>{r.status}</Badge>
                    </TableCell>
                    <TableCell>{r.ph}</TableCell>
                    <TableCell>{r.temp}</TableCell>
                    <TableCell className="text-right text-muted-foreground">{r.atualizado}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </section>
    </SiteLayout>
  );
}