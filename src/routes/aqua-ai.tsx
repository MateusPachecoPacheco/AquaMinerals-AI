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
  "O que é o AquaMinerals?",
  "Por que procurar minerais no mar?",
  "Como a AquaAI funciona?",
  "Como a inteligência artificial ajuda?",
  "O que é o mapa interativo?",
  "Os minerais que estão aptos para extração, para onde eles vão?"
];

// fallback heurístico (mantive textos similares aos já existentes)
const canned: Record<string, string> = {
  default:
    "O AquaMinerals é uma startup que utiliza tecnologia e inteligência artificial para mapear o potencial de minerais presentes no mar de Madre de Deus, incentivando pesquisas sustentáveis.",
  qualidade:
    "Porque a água do mar e os sedimentos marinhos contêm diversos minerais que podem ser estudados como alternativas futuras de obtenção desses recursos.",
  minerais:
    "Ela responde perguntas sobre o projeto e interpreta informações ambientais para explicar como o mapeamento inteligente pode auxiliar pesquisas.",
  criticos:
    "Ela organiza e interpreta dados ambientais para indicar áreas com maior potencial para futuras pesquisas.",
  plataforma:
    "O Mapa Interativo mostra os pontos reais de monitoramento em Madre de Deus, BA, com coordenadas e dados científicos por estação.",
  suporte:
    "Priorizando o estudo e o mapeamento antes de qualquer exploração, reduzindo riscos e incentivando decisões responsáveis.",
  extração:
    "Os minerais extraídos por meio da tecnologia AquaMinerals possuem como destino principal a cadeia produtiva industrial e tecnológica, onde podem ser componentes tecnológicos, indústria segmentos que dependem desses recursos. O objetivo do projeto não é minimizar impactos ambientais. utilizados como matéria-prima estratégica para diferentes setores. Após o processo sustentável de extração e tratamento, esses minerais podem ser direcionados para aplicações como fabricação de energética, produção de materiais avançados, pesquisa científica e outros apenas retirar minerais do oceano, mas criar uma solução sustentável capaz de transformar recursos naturais em oportunidades econômicas, promovendo inovação, desenvolvimento regional e geração de valor, sempre buscando minimizar impactos ambientais."
};

// Normalização robusta (mesma estratégia usada no backend)
function normalizeText(s: string): string {
  return (s || "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim()
    .toLowerCase()
    .replace(/[.?!]+$/g, "")
    .replace(/["'“”‘’(),;:\/\\]/g, "")
    .replace(/\s+/g, " ");
}

// Preconfigured Q&A (normalizadas) — mapeadas para as sugestões fornecidas
const preconfiguredQA: Record<string, string> = {
  [normalizeText("O que é o AquaMinerals?")]:
    " O AquaMinerals é uma startup que utiliza tecnologia e inteligência artificial para mapear o potencial de minerais presentes no mar de Madre de Deus, incentivando pesquisas sustentáveis.",
  [normalizeText("Por que procurar minerais no mar?")]:
    "Porque a água do mar e os sedimentos marinhos contêm diversos minerais que podem ser estudados como alternativas futuras de obtenção desses recursos.",
  [normalizeText("Como a AquaAI funciona?")]:
    "A AquaAI combina uma base de conhecimento com regras heurísticas para interpretar dados ambientais e responder perguntas sobre qualidade da água, minerais e pontos de monitoramento.",
  [normalizeText("Como a inteligência artificial ajuda?")]:
    "A inteligência artificial organiza e interpreta grandes volumes de dados ambientais para identificar padrões e áreas com maior potencial para pesquisas sustentáveis.",
  [normalizeText("O que é o mapa interativo?")]:
    "O Mapa Interativo mostra os pontos reais de monitoramento em Madre de Deus, BA, com coordenadas, indicadores e dados por estação de coleta.",
  [normalizeText("Como a AquaAI ajuda na pesquisa?")]:
    "Priorizando o estudo e o mapeamento antes de qualquer exploração, reduzindo riscos e incentivando decisões responsáveis.",
  [normalizeText("Os minerais que estão aptos para extração, para onde eles vão?")]:
    "Os minerais extraídos por meio da tecnologia AquaMinerals possuem como destino principal a cadeia produtiva industrial e tecnológica, onde podem ser componentes tecnológicos, indústria segmentos que dependem desses recursos. O objetivo do projeto não é minimizar impactos ambientais. utilizados como matéria-prima estratégica para diferentes setores. Após o processo sustentável de extração e tratamento, esses minerais podem ser direcionados para aplicações como fabricação de energética, produção de materiais avançados, pesquisa científica e outros apenas retirar minerais do oceano, mas criar uma solução sustentável capaz de transformar recursos naturais em oportunidades econômicas, promovendo inovação, desenvolvimento regional e geração de valor, sempre buscando minimizar impactos ambientais."
};

function reply(input: string): string {
  const q = input ?? "";
  const norm = normalizeText(q);

  // 1) Prioridade: preconfigured exact answers (igualdade normalizada ou inclusão tolerante)
  for (const [key, answer] of Object.entries(preconfiguredQA)) {
    if (norm === key || norm.includes(key) || key.includes(norm)) {
      return answer;
    }
  }

  // 2) heurísticas por palavra-chave (fallback)
  const lower = q.toLowerCase();
  if (lower.includes("qualidade")) return canned.qualidade;
  if (lower.includes("mineral")) return canned.minerais;
  if (lower.includes("crític") || lower.includes("critic")) return canned.criticos;
  return canned.default;
}

function AquaAI() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  // container ref + last message ref for precise scrolling
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const lastMessageRef = useRef<HTMLElement | null>(null);

  // scroll to the latest message and center it, after render
  useEffect(() => {
    if (!lastMessageRef.current || !chatContainerRef.current) return;

    // Defer to next frame to ensure DOM is painted
    requestAnimationFrame(() => {
      try {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
      } catch {
        // fallback: smooth scroll to bottom of container
        chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
      }
    });
  }, [messages, thinking]);

  const send = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;

    // Add user message
    setMessages((m) => [...m, { role: "user", content }]);
    setInput("");
    setThinking(true);

    // Simulate assistant response (deterministic)
    setTimeout(() => {
      const answer = reply(content);
      setMessages((m) => [...m, { role: "assistant", content: answer }]);
      setThinking(false);
    }, 700);
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
                <Badge variant="secondary" className="gap-1 text-[10px]">
                  <Sparkles className="h-3 w-3" /> Beta
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground">Assistente especializado em oceanografia</div>
            </div>
          </div>

          <Button variant="ghost" size="sm" onClick={reset} disabled={empty}>
            <RotateCcw className="mr-2 h-3.5 w-3.5" /> Nova conversa
          </Button>
        </div>

        <div ref={chatContainerRef} className="flex-1 overflow-y-auto py-6">
          {empty ? (
            <div className="mx-auto max-w-2xl py-12 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-ocean text-white shadow-glow">
                <Waves className="h-8 w-8" />
              </motion.div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">Olá, sou a AquaAI.</h1>
              <p className="mt-3 text-muted-foreground">Pergunte-me qualquer coisa sobre a saúde do oceano, minerais e monitoramento.</p>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)} className="rounded-xl border border-border/60 bg-card p-4 text-left text-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elegant">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6 px-2">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => {
                  const isLast = i === messages.length - 1;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn("flex gap-3", m.role === "user" ? "justify-end" : "justify-start")}
                      ref={isLast ? ((el) => (lastMessageRef.current = el)) : undefined}
                    >
                      {m.role === "assistant" && (
                        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-ocean text-white">
                          <Waves className="h-4 w-4" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                          m.role === "user" ? "bg-primary text-primary-foreground" : "border border-border/60 bg-card",
                        )}
                      >
                        {m.content}
                        {m.role === "assistant" && (
                          <button onClick={() => navigator.clipboard.writeText(m.content)} className="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
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
                  );
                })}
              </AnimatePresence>

              {thinking && (
                <div className="flex gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-ocean text-white">
                    <Waves className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-card px-4 py-3">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span key={i} className="h-2 w-2 rounded-full bg-primary" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-border/60 py-4">
          <div className="glass-strong flex items-end gap-2 rounded-2xl border border-border/60 p-2 shadow-elegant">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Pergunte sobre qualidade, minerais, temperatura..."
              rows={1}
              className="min-h-[44px] resize-none border-0 bg-transparent focus-visible:ring-0"
            />
            <Button size="icon" onClick={() => send()} disabled={!input.trim()} className="h-10 w-10 shrink-0 bg-gradient-ocean text-white">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-2 text-center text-[11px] text-muted-foreground">A AquaAI pode cometer erros. Verifique informações críticas.</p>
        </div>
      </div>
    </SiteLayout>
  );
}

export default AquaAI;