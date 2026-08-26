import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Droplet, FlaskConical, Cpu, LineChart, Eye, GaugeCircle, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como Funciona — AquaMinerals" },
      { name: "description", content: "Do oceano ao insight: veja o fluxo científico e tecnológico da plataforma AquaMinerals." },
    ],
  }),
  component: HowItWorks,
});

const flow = [
  { icon: Droplet, title: "Água do Mar", desc: "Ecossistema fonte, monitorado in situ com bóias e sensores autônomos." },
  { icon: FlaskConical, title: "Coleta", desc: "Amostras periódicas capturadas por equipes técnicas e sensores IoT." },
  { icon: FlaskConical, title: "Análise Química", desc: "Espectrometria e cromatografia identificam composição mineral." },
  { icon: Cpu, title: "Processamento IA", desc: "Modelos ML normalizam, correlacionam e detectam anomalias." },
  { icon: LineChart, title: "Visualização", desc: "Dashboards, mapas e relatórios em tempo real." },
  { icon: Eye, title: "Tomada de decisão", desc: "Comunidade, ciência e gestão pública decidem com base em evidências." },
];

export default function HowItWorks() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="glass mb-6">Fluxo científico</Badge>
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            Do oceano ao <span className="text-gradient-ocean">insight</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Cada gota de água percorre um caminho estruturado de ciência, tecnologia e transparência.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {flow.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-start gap-5 rounded-2xl border border-border/60 bg-card p-6 shadow-elegant">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-ocean text-white shadow-elegant">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-xs font-bold tracking-widest text-primary">
                    ETAPA {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-1 text-muted-foreground">{s.desc}</p>
                </div>
              </div>
              {i < flow.length - 1 && (
                <div className="flex justify-center py-3 text-muted-foreground/50">
                  <ArrowDown className="h-5 w-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-secondary/30 py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <GaugeCircle className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Rigor calibrado. Resultados replicáveis.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Toda etapa segue protocolos científicos internacionais, com auditoria e dados abertos.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
