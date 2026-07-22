import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/como-funciona", label: "Como Funciona" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/mapa", label: "Mapa" },
  { to: "/impacto", label: "Impacto" },
  { to: "/comunidade", label: "Comunidade" },
  { to: "/aqua-ai", label: "AquaAI" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-strong border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            {/* 🎨 NOVA LOGO OFICIAL */}
            <img
              src="/favicon.svg"
              alt="AquaMinerals"
              className="h-9 w-9 rounded-xl shadow-glow"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-tight">AquaMinerals</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Ocean Intelligence
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-md bg-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
  <ThemeToggle />  {/* ← ADICIONE AQUI */}
  <Button asChild variant="ghost" size="sm">
    <Link to="/login">Entrar</Link>
  </Button>
            <Button asChild size="sm" className="bg-gradient-ocean text-white shadow-elegant hover:opacity-90">
              <Link to="/dashboard">Explorar</Link>
            </Button>
          </div>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border/60 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
  {/* Linha do ThemeToggle no mobile */}
  <div className="flex items-center justify-between py-2 mb-2 border-b border-border/60">
    <span className="text-sm font-medium text-muted-foreground">Tema</span>
    <ThemeToggle />
  </div>
  
  {nav.map((item) => ( 
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm font-medium",
                      pathname === item.to
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary/60",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 flex gap-2">
                  <Button asChild variant="outline" className="flex-1">
                    <Link to="/login" onClick={() => setOpen(false)}>Entrar</Link>
                  </Button>
                  <Button asChild className="flex-1 bg-gradient-ocean text-white">
                    <Link to="/dashboard" onClick={() => setOpen(false)}>Explorar</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}