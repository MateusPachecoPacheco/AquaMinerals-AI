import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/contexts/AuthContext";

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
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-strong border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 shrink-0">
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

          {/* Desktop: Área do usuário */}
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link to="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-9 h-9 rounded-full bg-gradient-ocean flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-sm">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="hidden xl:flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-foreground">{user?.name}</span>
                    <span className="text-xs text-muted-foreground capitalize">{user?.role}</span>
                  </div>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={logout}
                  className="gap-1"
                >
                  <LogOut className="h-4 w-4" />
                  Sair
                </Button>
              </div>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/login">Entrar</Link>
                </Button>
                <Button asChild size="sm" className="bg-gradient-ocean text-white shadow-elegant hover:opacity-90">
                  <Link to="/register">Cadastrar</Link>
                </Button>
              </>
            )}
          </div>

          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-secondary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border/60 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between py-2 mb-2 border-b border-border/60">
                  <span className="text-sm font-medium text-muted-foreground">Tema</span>
                  <ThemeToggle />
                </div>

                {/* Perfil do usuário (se logado) */}
                {isAuthenticated && (
                  <div className="flex items-center gap-3 py-3 mb-2 border-b border-border/60">
                    <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center shadow-glow">
                      <span className="text-white font-bold text-lg">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{user?.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
                      <p className="text-xs text-muted-foreground capitalize mt-0.5">{user?.role}</p>
                    </div>
                  </div>
                )}
                
                {/* Links de navegação */}
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

                {/* Botões de autenticação */}
                <div className="mt-3 pt-3 border-t border-border/60 flex gap-2">
                  {isAuthenticated ? (
                    <Button 
                      variant="outline" 
                      className="flex-1 gap-2" 
                      onClick={() => {
                        logout();
                        setOpen(false);
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Sair
                    </Button>
                  ) : (
                    <>
                      <Button asChild variant="outline" className="flex-1">
                        <Link to="/login" onClick={() => setOpen(false)}>Entrar</Link>
                      </Button>
                      <Button asChild className="flex-1 bg-gradient-ocean text-white">
                        <Link to="/register" onClick={() => setOpen(false)}>Cadastrar</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}