import { createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Waves, LayoutDashboard, Users, MapPin, FlaskConical, Bell, Settings,
  Search, Plus, MoreHorizontal, TrendingUp, TrendingDown, LogOut, ArrowUpRight,
} from "lucide-react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — AquaMinerals" }] }),
  component: Admin,
});

const nav = [
  { icon: LayoutDashboard, label: "Visão geral", to: "/admin" },
  { icon: MapPin, label: "Pontos", to: "/mapa" },
  { icon: FlaskConical, label: "Análises", to: "/dashboard" },
  { icon: Users, label: "Usuários", to: "/admin" },
  { icon: Bell, label: "Alertas", to: "/admin" },
  { icon: Settings, label: "Configurações", to: "/admin" },
];

const kpis = [
  { label: "Coletas hoje", value: "128", delta: 12, up: true },
  { label: "Alertas ativos", value: "4", delta: 1, up: false },
  { label: "Usuários ativos", value: "372", delta: 24, up: true },
  { label: "Uptime sensores", value: "99.4%", delta: 0.2, up: true },
];

const trend = Array.from({ length: 14 }).map((_, i) => ({
  d: `${i + 1}`,
  coletas: 40 + Math.round(Math.sin(i / 2) * 12 + Math.random() * 8),
  alertas: Math.round(Math.random() * 5),
}));

const users = [
  { name: "Marina Costa", role: "Pesquisadora", email: "marina@aqua.io", status: "Ativo" },
  { name: "Rafael Lima", role: "Analista", email: "rafael@aqua.io", status: "Ativo" },
  { name: "Julia Souza", role: "Educadora", email: "julia@aqua.io", status: "Convidado" },
  { name: "Pedro Alves", role: "Admin", email: "pedro@aqua.io", status: "Ativo" },
  { name: "Ana Ribeiro", role: "Comunidade", email: "ana@aqua.io", status: "Inativo" },
];

const statusBadge: Record<string, string> = {
  Ativo: "bg-eco/15 text-eco border-eco/30",
  Convidado: "bg-primary/15 text-primary border-primary/30",
  Inativo: "bg-muted text-muted-foreground border-border",
};

function Admin() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-[260px_1fr]">
      {/* Sidebar */}
      <aside className="hidden border-r border-border/60 bg-sidebar text-sidebar-foreground lg:flex lg:flex-col">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-ocean text-white">
            <Waves className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-sm font-bold">AquaMinerals</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Admin</div>
          </div>
        </div>
        <nav className="flex-1 p-3">
          {nav.map((n, i) => {
            const active = i === 0 && pathname === "/admin";
            return (
              <Link
                key={n.label + i}
                to={n.to}
                className={cn(
                  "mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground",
                )}
              >
                <n.icon className="h-4 w-4" />
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <div className="flex items-center gap-3 rounded-lg p-2">
            <Avatar className="h-9 w-9"><AvatarFallback>PA</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">Pedro Alves</div>
              <div className="truncate text-xs text-muted-foreground">Administrador</div>
            </div>
            <Button variant="ghost" size="icon" asChild><Link to="/"><LogOut className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-col">
        <header className="flex h-16 items-center justify-between gap-4 border-b border-border/60 bg-background/60 px-4 backdrop-blur sm:px-8">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar em pontos, análises, usuários..." className="pl-9" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon"><Bell className="h-4 w-4" /></Button>
            <Button className="bg-gradient-ocean text-white"><Plus className="mr-1 h-4 w-4" /> Novo ponto</Button>
          </div>
        </header>

        <div className="min-w-0 flex-1 p-4 sm:p-8">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-2">Painel administrativo</Badge>
            <h1 className="font-display text-3xl font-bold">Visão geral</h1>
            <p className="text-muted-foreground">Métricas consolidadas da plataforma.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant"
              >
                <div className="flex items-start justify-between">
                  <div className="text-sm text-muted-foreground">{k.label}</div>
                  <Button variant="ghost" size="icon" className="h-6 w-6"><MoreHorizontal className="h-4 w-4" /></Button>
                </div>
                <div className="mt-2 font-display text-3xl font-bold">{k.value}</div>
                <div className={cn("mt-1 flex items-center gap-1 text-xs", k.up ? "text-eco" : "text-destructive")}>
                  {k.up ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                  {k.delta} vs. ontem
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-display font-semibold">Coletas — últimos 14 dias</h3>
                  <p className="text-xs text-muted-foreground">Volume diário agregado</p>
                </div>
                <Button variant="ghost" size="sm">Ver relatório <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></Button>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trend}>
                    <defs>
                      <linearGradient id="ad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="d" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                    <Area type="monotone" dataKey="coletas" stroke="var(--chart-1)" strokeWidth={2.5} fill="url(#ad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant">
              <h3 className="font-display font-semibold">Alertas por dia</h3>
              <div className="mt-4 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                    <XAxis dataKey="d" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                    <Bar dataKey="alertas" fill="var(--chart-4)" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border/60 bg-card shadow-elegant">
            <div className="flex items-center justify-between border-b border-border/60 p-6">
              <div>
                <h3 className="font-display font-semibold">Usuários recentes</h3>
                <p className="text-xs text-muted-foreground">Últimos acessos à plataforma</p>
              </div>
              <Button variant="outline" size="sm">Gerenciar</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Papel</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((u) => (
                  <TableRow key={u.email}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8"><AvatarFallback>{u.name.split(" ").map(n => n[0]).join("").slice(0,2)}</AvatarFallback></Avatar>
                        <span className="font-medium">{u.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{u.email}</TableCell>
                    <TableCell>{u.role}</TableCell>
                    <TableCell><Badge variant="outline" className={cn("border", statusBadge[u.status])}>{u.status}</Badge></TableCell>
                    <TableCell><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
