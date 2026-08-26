import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Waves,
  Droplet,
  Activity,
  MapPin,
  FlaskConical,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Brain,
  Leaf,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";
import { OceanBackdrop } from "@/components/site/OceanBackdrop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AquaMinerals — Inteligência Oceânica Sustentável" },
      {
        name: "description",
        content:
          "Plataforma que transforma dados do oceano em conhecimento sustentável através de monitoramento ambiental, análise mineral e economia azul.",
      },
      { property: "og:title", content: "AquaMinerals — Inteligência Oceânica" },
      { property: "og:description", content: "Ciência e tecnologia a serviço do oceano." },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

const kpis = [
  { label: "Qualidade da Água", value: "94%", icon: Droplet },
  { label: "Minerais Monitorados", value: "37", icon: FlaskConical },
  { label: "Regiões Analisadas", value: "12", icon: MapPin },
  { label: "Pesquisas Realizadas", value: "1.284", icon: Activity },
];

const features = [
  {
    icon: Brain,
    title: "IA Ambiental",
    desc: "Modelos de machine learning interpretam padrões químicos e biológicos do oceano em tempo real.",
  },
  {
    icon: BarChart3,
    title: "Dashboards Científicos",
    desc: "Visualizações interativas com métricas de pH, salinidade, oxigênio dissolvido e composição mineral.",
  },
  {
    icon: MapPin,
    title: "Mapeamento Territorial",
    desc: "Monitoramento georreferenciado dos pontos costeiros de Madre de Deus e regiões adjacentes.",
  },
  {
    icon: ShieldCheck,
    title: "Ciência Verificável",
    desc: "Dados abertos, metodologia rastreável e conformidade com padrões internacionais de oceanografia.",
  },
  {
    icon: Leaf,
    title: "Economia Azul",
    desc: "Insumos para políticas públicas, projetos regenerativos e cadeias produtivas sustentáveis.",
  },
  {
    icon: Globe2,
    title: "Impacto Global",
    desc: "Contribuição direta para ODS 14 — vida na água — através de dados replicáveis.",
  },
];

const steps = [
  { step: "01", title: "Coleta", desc: "Amostras de água captadas em pontos estratégicos do litoral." },
  { step: "02", title: "Análise Química", desc: "Determinação de composição mineral, salinidade e parâmetros físico-químicos." },
  { step: "03", title: "Processamento IA", desc: "Modelos identificam padrões, anomalias e correlações ambientais." },
  { step: "04", title: "Visualização", desc: "Dashboards, mapas e relatórios acessíveis a comunidade e pesquisadores." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-16 pb-24 sm:pt-24 sm:pb-32">
        <OceanBackdrop />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge
              variant="outline"
              className="glass mb-6 gap-2 border-primary/30 px-4 py-1.5 text-xs font-medium"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Inteligência Oceânica Sustentável
            </Badge>
            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              A tecnologia que transforma{" "}
              <span className="text-gradient-ocean">dados do oceano</span> em conhecimento sustentável.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A AquaMinerals integra sensores, ciência oceanográfica e inteligência artificial para
              monitorar a saúde do mar e impulsionar a economia azul.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-gradient-ocean text-white shadow-glow hover:opacity-95">
                <Link to="/dashboard">
                  Explorar Plataforma <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30">
                <Link to="/sobre">Conhecer Projeto</Link>
              </Button>
            </div>
          </motion.div>

          {/* KPI ORB */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {kpis.map((k) => (
              <div
                key={k.label}
                className="glass rounded-2xl p-6 shadow-elegant transition-transform hover:-translate-y-1"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <k.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-3xl font-bold tracking-tight">{k.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{k.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Diferenciais</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">
              Ciência oceânica, refinada para escala.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Uma plataforma que combina rigor científico com experiência de produto de nível mundial.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
              >
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-ocean opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-ocean text-white shadow-elegant">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="border-y border-border/60 bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">Como funciona</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-5xl">Do oceano ao insight, em quatro etapas.</h2>
          </motion.div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative rounded-2xl border border-border/60 bg-card p-7 shadow-elegant"
              >
                <div className="mb-4 font-display text-xs font-bold tracking-widest text-primary">
                  ETAPA {s.step}
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute -right-2.5 top-1/2 hidden h-px w-5 bg-border lg:block" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="ghost" className="text-primary">
              <Link to="/como-funciona">
                Ver processo completo <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-ocean p-10 text-white shadow-glow sm:p-16"
          >
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <Waves className="h-8 w-8" />
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
                Explore o oceano em tempo real.
              </h2>
              <p className="mt-4 text-white/80">
                Acesse dashboards, mapas e nossa IA especializada para decisões ambientais melhores.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/dashboard">Abrir Dashboard</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10">
                  <Link to="/aqua-ai">Falar com AquaAI</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}