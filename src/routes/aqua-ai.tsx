import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, ArrowUp, Sparkles, Copy, RotateCcw, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SiteLayout } from "@/components/site/SiteLayout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/aqua-ai")({
  head: () => ({ meta: [{ title: "AquaAI — Assistente Oceânico" }] }),
  component: AquaAI,
});

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  "Como está a qualidade da água hoje?",
  "Quais minerais foram encontrados esta semana?",
  "Quais pontos estão em estado crítico?",
  "Explique o índice de preservação",
];

const canned: Record<string, string> = {
  default:
    "Com base nos últimos dados coletados na Baía de Madre de Deus, os principais indicadores estão dentro dos limites saudáveis. Posso detalhar qualidade, minerais, pH ou temperatura por região — o que você gostaria de explorar?",
  qualidade:
    "A qualidade média das últimas 24 horas está em 94%, com leve tendência de alta (+2.4%). Os pontos MDD-01 e MDD-02 lideram, enquanto MDD-05 (Ponta de Suape) está sob atenção com 62%.",
  minerais:
    "Nesta semana foram identificados 37 minerais distintos. Os predominantes são Sódio (38%), Magnésio (22%) e Cálcio (14%). Detectamos um pico incomum de Potássio no ponto MDD-03.",
  criticos:
    "Atualmente 1 ponto está classificado como crítico: MDD-05 (Ponta de Suape), com pH 7.4 e temperatura 28.2°C. Recomenda-se coleta manual de confirmação nas próximas 6 horas.",
};

function reply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("qualidade")) return canned.qualidade;
  if (q.includes("mineral")) return canned.minerais;
  if (q.includes("crític")) return canned.criticos;
  return canned.default;
}

function AquaAI() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  const send = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;
    setMessages((m) => [...m, { role: "user", content }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: reply(content) }]);
      setThinking(false);
    }, 900);
  };

  const reset = () => setMessages([]);
  const empty = messages.length === 0;

  return (
    <SiteLayout>
      <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-4xl flex-col px-4 sm:px-6">
        <div className="flex items-center justify-between border-b border-border/60 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-ocean text-white shadow-glow">
              <Waves className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold">AquaAI</span>
                <Badge variant="secondary" className="gap-1 text-[10px]"><Sparkles className="h-3 w-3" /> Beta</Badge>
              </div>
              <div className="text-xs text-muted-foreground">Assistente especializado em oceanografia</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={reset} disabled={empty}>
            <RotateCcw className="mr-2 h-3.5 w-3.5" /> Nova conversa
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-6">
          {empty ? (
            <div className="mx-auto max-w-2xl py-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-ocean text-white shadow-glow"
              >
                <Waves className="h-8 w-8" />
              </motion.div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Olá, sou a AquaAI.</h1>
              <p className="mt-3 text-muted-foreground">
                Pergunte-me qualquer coisa sobre a saúde do oceano, minerais e monitoramento.
              </p>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-xl border border-border/60 bg-card p-4 text-left text-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elegant"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn("flex gap-3", m.role === "user" ? "justify-end" : "justify-start")}
                  >
                    {m.role === "assistant" && (
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-ocean text-white">
                        <Waves className="h-4 w-4" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                        m.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "border border-border/60 bg-card",
                      )}
                    >
                      {m.content}
                      {m.role === "assistant" && (
                        <button
                          onClick={() => navigator.clipboard.writeText(m.content)}
                          className="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                        >
                          <Copy className="h-3 w-3" /> Copiar
                        </button>
                      )}
                    </div>
                    {m.role === "user" && (
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {thinking && (
                <div className="flex gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-ocean text-white">
                    <Waves className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-card px-4 py-3">
                    <div className="flex gap-1">
                      {[0,1,2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-2 w-2 rounded-full bg-primary"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>
          )}
        </div>

        <div className="border-t border-border/60 py-4">
          <div className="glass-strong flex items-end gap-2 rounded-2xl border border-border/60 p-2 shadow-elegant">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
              }}
              placeholder="Pergunte sobre qualidade, minerais, temperatura..."
              rows={1}
              className="min-h-[44px] resize-none border-0 bg-transparent focus-visible:ring-0"
            />
            <Button
              size="icon"
              onClick={() => send()}
              disabled={!input.trim()}
              className="h-10 w-10 shrink-0 bg-gradient-ocean text-white"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">
            A AquaAI pode cometer erros. Verifique informações críticas.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
