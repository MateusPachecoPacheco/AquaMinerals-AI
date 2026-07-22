import { Waves, Mail, MapPin, Phone, MessageCircle, Instagram, Github, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Abrir WhatsApp com mensagem personalizada
const openWhatsApp = () => {
  const phone = "5571987952529";
  const message = encodeURIComponent(
    "Olá! Vim através da plataforma AquaMinerals e gostaria de saber mais sobre o projeto."
  );
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
};

// Abrir Instagram
const openInstagram = () => {
  window.open("https://instagram.com/_mateuspacheco__", "_blank");
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-secondary/20 backdrop-blur-sm">
      {/* Onda decorativa superior (mantendo identidade oceânica) */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Coluna 1: Marca */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-ocean text-white shadow-glow">
                <Waves className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold">AquaMinerals</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Plataforma científica dedicada ao estudo e extração sustentável de minerais da água do mar em Madre de Deus, BA.
            </p>
            
            {/* 🌊 ÍCONES SOCIAIS — ESTILIZADOS NO TEMA OCEÂNICO */}
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp com gradiente ocean do projeto */}
              <button
                onClick={openWhatsApp}
                aria-label="WhatsApp AquaMinerals"
                className="group relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-ocean text-white shadow-elegant transition-all hover:scale-110 hover:shadow-glow"
              >
                <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card px-2 py-1 text-xs text-foreground opacity-0 shadow-elegant transition-opacity group-hover:opacity-100 border border-border/60">
                  +55 71 98795-2529
                </span>
              </button>

              {/* Instagram com gradiente ocean do projeto */}
              <button
                onClick={openInstagram}
                aria-label="Instagram AquaMinerals"
                className="group relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-ocean text-white shadow-elegant transition-all hover:scale-110 hover:shadow-glow"
              >
                <Instagram className="h-5 w-5 transition-transform group-hover:rotate-12" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-card px-2 py-1 text-xs text-foreground opacity-0 shadow-elegant transition-opacity group-hover:opacity-100 border border-border/60">
                  @_mateuspacheco__
                </span>
              </button>

              {/* Email */}
              <a
                href="mailto:contato@aquaminerals.com"
                aria-label="Email AquaMinerals"
                className="group grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-card text-foreground shadow-elegant transition-all hover:scale-110 hover:border-primary/50 hover:shadow-glow"
              >
                <Mail className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Plataforma */}
          <div>
            <h4 className="font-display font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/mapa" className="text-muted-foreground hover:text-primary transition-colors">Mapa Interativo</Link></li>
              <li><Link to="/comunidade" className="text-muted-foreground hover:text-primary transition-colors">Comunidade</Link></li>
              <li><Link to="/aqua-ai" className="text-muted-foreground hover:text-primary transition-colors">AquaAI</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div>
            <h4 className="font-display font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link to="/como-funciona" className="text-muted-foreground hover:text-primary transition-colors">Como Funciona</Link></li>
              <li><Link to="/impacto" className="text-muted-foreground hover:text-primary transition-colors">Impacto</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Madre de Deus, Bahia — Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+55 71 98795-2529</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>contato@aquaminerals.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AquaMinerals. Ciência, tecnologia e preservação em Madre de Deus.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-eco animate-pulse" />
            <span>Monitoramento ativo na Baía de Todos-os Santos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}