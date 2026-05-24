"use client";

import React from "react";
import { ShieldCheck, Award, Ruler, Compass } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Compromisso Absoluto",
      description: "Executamos cada obra como se fosse para nós próprios, com o rigor técnico, capricho e o detalhe minucioso que cada espaço exige.",
    },
    {
      icon: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Profissionalismo Sólido",
      description: "Contamos com 17 anos de experiência comprovada no ramo, aliando tradição prática a inovações botânicas e tecnológicas.",
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Arquitetura Paisagista",
      description: "Fazemos projetos personalizados sob consulta, modelando os seus desejos botânicos com estética arquitetónica de alto nível.",
    },
    {
      icon: <Ruler className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Rápido & Confiável",
      description: "Garantimos a aplicação de orçamentos competitivos e entregas rápidas, sem nunca comprometer os materiais ou a qualidade final.",
    },
  ];

  return (
    <section id="about" className="section-y bg-zinc-50/50 dark:bg-zinc-950/30 relative">
      <div className="site-container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block */}
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 dark:text-white tracking-tight mb-6 leading-tight">
              Damos Forma e Vida ao Seu Espaço Exterior
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
              A <strong>VerdePresente</strong> é especialista no planeamento integrado, modelagem, implantação técnica e manutenção de jardins residenciais, corporativos, sistemas de rega eficientes e tratamento de piscinas.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
              A nossa missão baseia-se na sustentabilidade ecológica e na harmonia visual, concebendo espaços verdes que valorizam o seu património e proporcionam bem-estar absoluto à sua família.
            </p>
            
            {/* Visual Quote Box */}
            <div className="w-full glass p-6 rounded-2xl border-l-4 border-emerald-500 shadow-md text-left">
              <p className="italic text-emerald-950 dark:text-emerald-100 font-medium text-base mb-2">
                &ldquo;Um belo jardim não é apenas um espaço de terra, é a extensão natural da harmonia do seu lar.&rdquo;
              </p>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                — Equipa VerdePresente
              </span>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-zinc-900/40 p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/[0.02] flex flex-col justify-between"
              >
                {/* Glowing glow bubble underneath on hover */}
                <div className="absolute inset-0 rounded-3xl bg-mesh opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-emerald-950 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
