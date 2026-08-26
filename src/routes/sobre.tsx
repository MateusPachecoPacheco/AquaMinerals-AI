import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Waves, Target, Leaf, Compass, Users, TrendingUp, Anchor } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — AquaMinerals" },
      { name: "description", content: "Nossa missão de transformar dados oceânicos em ferramentas de sustentabilidade e economia azul." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Missão", text: "Democratizar dados oceânicos para acelerar decisões ambientais informadas." },
  { icon: Compass, title: "Visão", text: "Ser a referência global em inteligência oceânica sustentável até 2030." },
  { icon: Leaf, title: "Valores", text: "Rigor científico, transparência, sustentabilidade e impacto comunitário." },
];

const timeline = [
  { year: "2023", title: "Pesquisa inicial", desc: "Primeiros estudos sobre composição mineral marinha em Madre de Deus." },
  { year: "2024", title: "Prova de conceito", desc: "Sensores IoT e primeiro protótipo do dashboard ambiental." },
  { year: "2025", title: "Plataforma AquaMinerals", desc: "Lançamento da plataforma integrada com IA e mapeamento." },
  { year: "2026", title: "Expansão nacional", desc: "Escala para novas regiões costeiras e parcerias institucionais." },
];

const benefits = [
  { icon: Users, title: "Comunidade", desc: "Educação ambiental e engajamento local." },
  { icon: TrendingUp, title: "Economia Azul", desc: "Insumos para setores produtivos sustentáveis." },
  { icon: Anchor, title: "Madre de Deus", desc: "Foco territorial e pertencimento local." },
];

export default function About() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="glass mb-6">Sobre nós</Badge>
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            Ciência oceânica <span className="text-gradient-ocean">acessível</span> e transformadora.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A AquaMinerals nasce em Madre de Deus, na Baía de Todos os Santos, para conectar
            pesquisa, tecnologia e comunidade em torno da saúde do oceano.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card p-8 shadow-elegant"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-ocean text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border/60 bg-secondary/30 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <Badge variant="secondary" className="mb-4">Nossa jornada</Badge>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Uma trajetória de descoberta.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}
              >
                <div className={`absolute top-2 h-4 w-4 rounded-full bg-gradient-ocean shadow-glow ${i % 2 ? "left-2 md:-left-2" : "left-2 md:-right-2 md:left-auto"}`} />
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-elegant">
                  <div className="font-display text-xs font-bold tracking-widest text-primary">{t.year}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Economia Azul</Badge>
              <h2 className="font-display text-3xl font-bold sm:text-5xl">
                O oceano como ativo estratégico.
              </h2>
              <p className="mt-6 text-muted-foreground">
                A Economia Azul propõe usar recursos marinhos de forma responsável, gerando renda,
                ciência e conservação. A AquaMinerals fornece a base de dados que torna essas
                cadeias mais transparentes e regenerativas.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {benefits.map((b) => (
                  <div key={b.title} className="rounded-xl border border-border/60 p-4">
                    <b.icon className="h-5 w-5 text-primary" />
                    <div className="mt-2 text-sm font-semibold">{b.title}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-ocean shadow-glow">
              <div className="absolute inset-0 flex items-center justify-center">
                <Waves className="h-40 w-40 text-white/30" strokeWidth={1} />
              </div>
              <svg className="absolute inset-x-0 bottom-0 w-full text-white/20" viewBox="0 0 400 200" preserveAspectRatio="none">
                <path fill="currentColor" d="M0,100 C100,60 200,140 400,100 L400,200 L0,200 Z" />
                <path fill="currentColor" fillOpacity="0.5" d="M0,130 C120,90 220,170 400,130 L400,200 L0,200 Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}