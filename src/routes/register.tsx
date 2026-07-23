import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Criar Conta — AquaMinerals" }] }),
  component: Register,
});

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register } = useAuth();

  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-12 sm:px-16">
        <Link to="/" className="mb-12 flex items-center gap-2">
          <img
            src="/favicon.svg"
            alt="AquaMinerals"
            className="h-9 w-9 rounded-xl shadow-glow"
          />
          <span className="font-display text-lg font-bold">AquaMinerals</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-full max-w-sm"
        >
          <h1 className="font-display text-3xl font-bold">Junte-se à expedição</h1>
          <p className="mt-2 text-sm text-muted-foreground">Crie sua conta para monitorar os oceanos.</p>

          {error && (
            <div className="mt-4 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-600 dark:bg-red-950/50 dark:border-red-900 dark:text-red-400">
              {error}
            </div>
          )}

          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsLoading(true);
              setError("");

              const formData = new FormData(e.currentTarget);
              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const password = formData.get("password") as string;

              try {
                await register(name, email, password);
                navigate({ to: "/dashboard" });
              } catch (err: any) {
                setError(err.response?.data?.message || "Erro ao criar conta. Tente novamente.");
                setIsLoading(false);
              }
            }}
          >
            <div className="space-y-1.5">
              <Label htmlFor="name">Nome completo</Label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Seu nome" 
                  className="pl-9" 
                  required 
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="voce@oceano.io" 
                  className="pl-9" 
                  required 
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="Mínimo 6 caracteres" 
                  className="pl-9" 
                  required 
                  minLength={6}
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-ocean text-white shadow-glow" 
              disabled={isLoading}
            >
              {isLoading ? "Criando conta..." : (<>Criar conta <ArrowRight className="ml-2 h-4 w-4" /></>)}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Já tem conta? <Link to="/login" className="font-medium text-primary hover:underline">Fazer login</Link>
          </p>
        </motion.div>
      </div>

      <div className="relative hidden overflow-hidden bg-gradient-ocean lg:block">
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-x-0 top-1/3 w-full text-white animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,224C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z" />
          </svg>
        </div>
        <div className="relative flex h-full flex-col justify-between p-16 text-white">
          <div />
          <div>
            <div className="glass-strong inline-flex rounded-full border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium">
              Comunidade Científica
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight">
              "A água do mar é a maior mina de minerais do planeta."
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              Cadastre-se para acessar dados em tempo real sobre salinidade, pH e extração sustentável em Madre de Deus.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <div className="h-1.5 w-1.5 rounded-full bg-eco-light" />
            Junte-se a nós · AquaMinerals 2026
          </div>
        </div>
      </div>
    </div>
  );
}