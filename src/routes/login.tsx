import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Lock, Github, Chrome, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Entrar — AquaMinerals" }] }),
  component: Login,
});

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleOAuth = (provider: string) => {
    setError(`Login com ${provider} será implementado em breve. Use e-mail e senha por enquanto.`);
  };

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
          <h1 className="font-display text-3xl font-bold">Bem-vindo de volta</h1>
          <p className="mt-2 text-sm text-muted-foreground">Entre para acessar seus painéis e insights.</p>

          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            <Button 
              variant="outline" 
              className="gap-2" 
              onClick={() => handleOAuth("Google")}
              disabled={isLoading}
            >
              <Chrome className="h-4 w-4" /> Google
            </Button>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => handleOAuth("GitHub")}
              disabled={isLoading}
            >
              <Github className="h-4 w-4" /> GitHub
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" />
            OU CONTINUE COM E-MAIL
            <div className="h-px flex-1 bg-border" />
          </div>

          {error && (
            <div className="mb-4 rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-600 dark:bg-red-950/50 dark:border-red-900 dark:text-red-400">
              {error}
            </div>
          )}

          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setIsLoading(true);
              setError("");

              const formData = new FormData(e.currentTarget);
              const email = formData.get("email") as string;
              const password = formData.get("pw") as string;

              try {
                await login(email, password);
                navigate({ to: "/dashboard" });
              } catch (err: any) {
                const message = err.response?.data?.message || "Falha ao conectar ao servidor.";
                setError(message);
                setIsLoading(false);
              }
            }}
          >
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
                  defaultValue="usuario@aquaminerals.com"
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="pw">Senha</Label>
                <a href="#" className="text-xs text-primary hover:underline">Esqueceu?</a>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  id="pw" 
                  name="pw" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-9" 
                  required 
                  defaultValue="123456"
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="rm" disabled={isLoading} />
              <Label htmlFor="rm" className="text-sm font-normal">Manter conectado</Label>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-ocean text-white shadow-glow" 
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : (<>Entrar <ArrowRight className="ml-2 h-4 w-4" /></>)}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Não tem conta? <Link to="/register" className="font-medium text-primary hover:underline">Criar conta</Link>
          </p>
        </motion.div>
      </div>

      <div className="relative hidden overflow-hidden bg-gradient-ocean lg:block">
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-x-0 top-1/3 w-full text-white animate-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,224C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L0,320Z" />
          </svg>
          <svg className="absolute inset-x-0 top-1/2 w-full text-white/70" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="currentColor" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L0,320Z" />
          </svg>
        </div>
        <div className="relative flex h-full flex-col justify-between p-16 text-white">
          <div />
          <div>
            <div className="glass-strong inline-flex rounded-full border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium">
              Inteligência Oceânica
            </div>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight">
              "Cuidar do oceano é cuidar do futuro da humanidade."
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              A plataforma da AquaMinerals conecta ciência, tecnologia e comunidade para uma nova era da economia azul.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/70">
            <div className="h-1.5 w-1.5 rounded-full bg-eco-light" />
            Monitoramento ativo · Madre de Deus, BA
          </div>
        </div>
      </div>
    </div>
  );
}