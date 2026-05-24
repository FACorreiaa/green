"use client";

import React from "react";
import Image from "next/image";
import { Droplet, Waves, Trash2, Palette, ArrowUpRight } from "lucide-react";

export default function Services() {
  const serviceList = [
    {
      icon: <Droplet className="w-6 h-6 text-white" />,
      title: "Sistemas de Rega",
      subtitle: "Instalação & Reparação",
      image: "/images/irrigation.png",
      description: "Planeamos e instalamos sistemas inteligentes de rega automática (pop-up, aspersão e gota-a-gota) otimizados para poupança hídrica e total saúde do relvado.",
    },
    {
      icon: <Waves className="w-6 h-6 text-white" />,
      title: "Manutenção de Piscinas",
      subtitle: "Tratamento & Bombas",
      image: "/images/pool.png",
      description: "Asseguramos tratamento químico minucioso (cloro, sal, pH), limpeza física profunda das superfícies e manutenção técnica de bombas e filtros de circulação.",
    },
    {
      icon: <Trash2 className="w-6 h-6 text-white" />,
      title: "Limpeza de Terrenos",
      subtitle: "Desbaste & Prevenção",
      image: "/images/clearing.png",
      description: "Serviço de limpeza e desmatamento de parcelas, lotes e quintas. Remoção eficiente de resíduos e corte de mato denso em conformidade com as regras de segurança.",
    },
    {
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Arquitetura Paisagista",
      subtitle: "Design & Execução",
      image: "/images/design.png",
      description: "Criamos projetos paisagísticos sob consulta, combinando o estudo botânico da flora local com harmonia estrutural (caminhos, muros, canteiros e iluminação cénica).",
    },
  ];

  return (
    <section id="services" className="section-y bg-mesh relative">
      <div className="site-container relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
            O Que Fazemos
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-950 dark:text-white tracking-tight mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Soluções completas e integradas de engenharia naturalista para criar, revitalizar e manter o seu espaço exterior no mais alto patamar de excelência.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {serviceList.map((service, idx) => (
            <div
              key={idx}
              className="group relative min-h-[400px] sm:min-h-[420px] rounded-[2rem] overflow-hidden border border-zinc-200/50 dark:border-zinc-800/80 hover:border-emerald-500/20 transition-all duration-500 shadow-xl shadow-emerald-950/[0.01] hover:shadow-emerald-950/[0.04] flex flex-col justify-end"
            >
              {/* Service Background Image */}
              <div className="absolute inset-0 bg-zinc-950 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500 z-10" />
              </div>

              {/* Float Service Icon */}
              <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-2xl bg-emerald-600/90 backdrop-blur-md flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300">
                {service.icon}
              </div>

              {/* Arrow Indicator on Top Right */}
              <a
                href="#contact"
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                aria-label="Pedir orçamento"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </a>

              {/* Service Content Details inside frosted banner */}
              <div className="relative z-20 p-8 sm:p-10 flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 dark:text-emerald-300 mb-2">
                  {service.subtitle}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-zinc-300 dark:text-zinc-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 max-w-xl">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
