"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Leaf, Star, Sparkles } from "lucide-react";

export default function Hero() {
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
    <section id="home" className="home-hero relative flex items-center overflow-hidden bg-mesh">
      {/* Background Mesh Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-green-400/5 blur-[100px] pointer-events-none animate-pulse-slow" />

      <div className="site-container w-full grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-emerald-700 bg-emerald-600/10 border border-emerald-500/10 dark:text-emerald-300 dark:bg-emerald-500/5 dark:border-emerald-500/20 mb-6 uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin-slow" />
            LÍDER EM CONSTRUÇÃO E MANUTENÇÃO
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-950 dark:text-white leading-[1.1] mb-6">
            Transformamos o seu Espaço num <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 dark:from-emerald-400 dark:via-emerald-300 dark:to-green-300">Oásis Natural</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8 max-w-2xl">
            Desde 2009 a dar vida, beleza e rigor a jardins, relvados e áreas exteriores. Planeamento sofisticado, sistemas inteligentes de rega e manutenção de excelência.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all duration-300 border border-emerald-500/25"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>

            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-zinc-800 bg-white hover:bg-zinc-50 border border-zinc-200 dark:text-zinc-200 dark:bg-zinc-900/40 dark:hover:bg-zinc-900 dark:border-zinc-800 hover:border-emerald-500/30 transition-all duration-300 shadow-sm"
            >
              Explorar Serviços
            </a>
          </div>

          {/* Quick stats on bottom left */}
          <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 w-full">
            <div>
              <span className="block text-3xl font-bold text-emerald-950 dark:text-white">17+</span>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Anos de Experiência</span>
            </div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-800" />
            <div>
              <span className="block text-3xl font-bold text-emerald-950 dark:text-white">500+</span>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Projetos Concluídos</span>
            </div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-800" />
            <div>
              <span className="block text-3xl font-bold text-emerald-950 dark:text-white">100%</span>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Rigor & Confiabilidade</span>
            </div>
          </div>
        </div>

        {/* Right Media Frame */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-8 lg:mt-0">
          <div className="relative w-full max-w-[480px] aspect-square rounded-[2rem] overflow-hidden border border-emerald-500/10 shadow-2xl shadow-emerald-950/20 group">
            {/* Ambient image border glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent opacity-60 z-10" />
            
            <Image
              src="/images/hero_garden.png"
              alt="Lush green garden landscaping"
              fill
              className="object-cover image-zoom"
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            
            {/* Glowing active outline */}
            <div className="absolute inset-0 border-2 border-emerald-500/10 group-hover:border-emerald-500/30 rounded-[2rem] transition-colors duration-500 pointer-events-none z-20" />
          </div>

          {/* Floating Trust glass cards */}
          <div className="absolute -bottom-6 -left-6 glass px-5 py-4 rounded-2xl flex items-center gap-3 shadow-xl shadow-emerald-950/5 border border-glass-border animate-float z-30">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Compromisso</span>
              <span className="block text-sm font-bold text-emerald-950 dark:text-white">Espaços Verdes Perfeitos</span>
            </div>
          </div>

          <div className="absolute -top-6 -right-4 glass px-5 py-4 rounded-2xl flex items-center gap-3 shadow-xl shadow-emerald-950/5 border border-glass-border animate-float [animation-delay:2s] z-30">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Qualidade</span>
              <span className="block text-sm font-bold text-emerald-950 dark:text-white">Rigor Profissional</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
