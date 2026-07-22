import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, MessageSquareWarning, Lightbulb, Calendar, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteLayout } from "@/components/site/SiteLayout";
import { api } from "@/lib/api";
import { showToast } from "@/lib/utils";

export const Route = createFileRoute("/comunidade")({
  head: () => ({ meta: [{ title: "Comunidade — AquaMinerals" }] }),
  component: Community,
});

type CardAction =
  | { type: "toast"; message: string; kind?: "success" | "info" | "error" }
  | { type: "navigate"; to: string };

const cards: Array<{
  icon: typeof GraduationCap;
  tag: string;
  title: string;
  desc: string;
  cta: string;
  action: CardAction;
}> = [
  {
    icon: GraduationCap,
    tag: "Educação",
    title: "Curso Oceano em Dados",
    desc: "Formação gratuita sobre ciência oceânica para estudantes e educadores.",
    cta: "Inscrever-se",
    action: { type: "toast", message: "Inscrição iniciada! Verifique seu e-mail para continuar.", kind: "success" },
  },
  {
    icon: Users,
    tag: "Projetos",
    title: "Guardiões da Baía",
    desc: "Rede de moradores que colaboram no monitoramento comunitário.",
    cta: "Participar",
    action: { type: "toast", message: "Bem-vindo à rede Guardiões da Baía! Em breve você receberá o kit de monitoramento.", kind: "success" },
  },
  {
    icon: MessageSquareWarning,
    tag: "Denúncias",
    title: "Reporte um incidente",
    desc: "Registre anomalias observadas no litoral com fotos e localização.",
    cta: "Enviar denúncia",
    action: { type: "toast", message: "Canal de denúncias aberto. Faça login para registrar sua denúncia com geolocalização.", kind: "info" },
  },
  {
    icon: Lightbulb,
    tag: "Sugestões",
    title: "Envie sua ideia",
    desc: "Contribua com melhorias para a plataforma e novos indicadores.",
    cta: "Sugerir",
    action: { type: "toast", message: "Obrigado! Sua sugestão foi registrada e será analisada pela equipe.", kind: "success" },
  },
  {
    icon: Calendar,
    tag: "Eventos",
    title: "Fórum da Economia Azul",
    desc: "Encontro anual com pesquisadores, gestores e comunidade.",
    cta: "Ver agenda",
    action: { type: "toast", message: "📅 Fórum da Economia Azul — Novembro de 2026, Madre de Deus/BA. Inscrições em breve!", kind: "info" },
  },
  {
    icon: GraduationCap,
    tag: "Educação",
    title: "Trilha ambiental infantil",
    desc: "Material didático para o ensino fundamental sobre o oceano.",
    cta: "Acessar",
    action: { type: "toast", message: "Material didático infantil disponível! Baixe o PDF na sua área de estudante.", kind: "success" },
  },
];

export default function Community() {
  const navigate = useNavigate();

  // 🆕 States da newsletter
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  // 🆕 Handler dos cards
  const handleCardAction = (action: CardAction) => {
    if (action.type === "toast") {
      showToast(action.message, action.kind || "info");
    } else if (action.type === "navigate") {
      navigate({ to: action.to });
    }
  };

  // 🆕 Handler da newsletter (conecta ao Backend real)
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) {
      showToast("Por favor, digite seu e-mail.", "error");
      return;
    }

    setIsSubscribing(true);
    try {
      const response = await api.post("/community/newsletter/subscribe", {
        email: newsletterEmail,
      });
      showToast(response.data.message || "Inscrição realizada com sucesso!", "success");
      setNewsletterEmail("");
    } catch (err: any) {
      const msg = err.response?.data?.message || "Erro ao assinar newsletter. Tente novamente.";
      showToast(msg, "error");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="outline" className="glass mb-6">Comunidade</Badge>
          <h1 className="font-display text-4xl font-bold sm:text-6xl">
            Ciência é <span className="text-gradient-ocean">coletiva</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Educação, participação e ação em rede. Faça parte da comunidade AquaMinerals.
          </p>

          {/* 🆕 FORM da newsletter conectado ao Backend */}
          <form onSubmit={handleNewsletterSubmit} className="mx-auto mt-8 flex max-w-md gap-2">
            <Input
              type="email"
              placeholder="seu@email.com"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              disabled={isSubscribing}
              required
            />
            <Button
              type="submit"
              className="bg-gradient-ocean text-white"
              disabled={isSubscribing}
            >
              {isSubscribing ? "Assinando..." : "Assinar"}
            </Button>
          </form>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-6 shadow-elegant transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-ocean text-white">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary">{c.tag}</Badge>
                </div>
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>

                {/* 🆕 Botão com ação */}
                <Button
                  variant="ghost"
                  className="mt-4 justify-start p-0 text-primary hover:bg-transparent"
                  onClick={() => handleCardAction(c.action)}
                >
                  {c.cta} <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}