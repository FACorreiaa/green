"use client";

import React from "react";
import { Leaf, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950/80 border-t border-zinc-200/50 dark:border-zinc-800/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background soft mesh decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-emerald-600/5 blur-[80px] pointer-events-none" />
      
      <div className="site-container relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600/10 border border-emerald-500/20">
                <Leaf className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-lg font-bold tracking-wider text-emerald-950 dark:text-white">
                VERDEPRESENTE<span className="text-emerald-500">.PT</span>
              </span>
            </a>
            
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-sm">
              Criamos e mantemos espaços verdes com extremo profissionalismo, dedicação botânica e rigor técnico. 17 anos de excelência ao serviço da natureza.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-950 dark:text-white">
              Navegação
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              >
                Início
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              >
                Sobre Nós
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              >
                Nossos Serviços
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
                className="text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              >
                Nosso Portfólio
              </a>
            </div>
          </div>

          {/* Contact Quick Details */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-950 dark:text-white">
              Fale Connosco
            </h4>
            
            <div className="flex flex-col gap-3">
              <a
                href="tel:+351910645565"
                className="flex items-center gap-2.5 text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                +351 910 645 565
              </a>

              <a
                href="mailto:verdepresente@outlook.pt"
                className="flex items-center gap-2.5 text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                verdepresente@outlook.pt
              </a>

              <div className="flex items-center gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                Seg-Sex: 9h-18h | Sáb: 9h-13h
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800/80 mb-8" />

        {/* Bottom copyright / policy section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500">
          <span>
            © {new Date().getFullYear()} VerdePresente. Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-600 transition-colors">
              Políticas de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-emerald-600 transition-colors">
              Termos e Condições
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
