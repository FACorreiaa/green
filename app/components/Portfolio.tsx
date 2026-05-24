"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "gardens", label: "Jardins" },
    { id: "irrigation", label: "Regas" },
    { id: "pools", label: "Piscinas" },
  ];

  const items = [
    {
      title: "Jardim Residencial Luxo",
      subtitle: "Construção & Design",
      category: "gardens",
      image: "/images/hero_garden.png",
      details: "Área de estar exterior moderna integrada com relvado premium, canteiros minimalistas e caminhos pedonais.",
    },
    {
      title: "Aspersão Automatizada",
      subtitle: "Sistemas de Rega",
      category: "irrigation",
      image: "/images/irrigation.png",
      details: "Instalação técnica de rega pop-up programável para cobertura perfeita e aproveitamento sustentável.",
    },
    {
      title: "Piscina Cénica Moderna",
      subtitle: "Manutenção & Integração",
      category: "pools",
      image: "/images/pool.png",
      details: "Projeto de tratamento químico e estrutural de piscina integrada em deck de madeira exótica.",
    },
    {
      title: "Alinhamento & Limpeza",
      subtitle: "Limpeza de Terrenos",
      category: "gardens",
      image: "/images/clearing.png",
      details: "Limpeza e desbaste florestal completo com regularização de terreno para implantação de olival.",
    },
    {
      title: "Masterplan Paisagista",
      subtitle: "Projetos de Arquitetura",
      category: "gardens",
      image: "/images/design.png",
      details: "Estudo botânico e modelagem 3D para renovação completa de logradouro de moradia unifamiliar.",
    },
  ];

  const filteredItems = filter === "all" ? items : items.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section-y bg-zinc-50/50 dark:bg-zinc-950/30 relative">
      <div className="site-container relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center justify-center mb-12 gap-6">
          <div className="flex flex-col items-center max-w-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
              Portfólio
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-950 dark:text-white tracking-tight leading-tight">
              A Nossa Galeria de Projetos
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center gap-2.5 bg-white dark:bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/80 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10"
                    : "text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-[380px] rounded-[2rem] overflow-hidden border border-zinc-200/50 dark:border-zinc-800/80 shadow-md hover:shadow-xl hover:border-emerald-500/10 transition-all duration-500 flex flex-col justify-end animate-[fadeIn_0.5s_ease-out_both]"
            >
              {/* Image Frame */}
              <div className="absolute inset-0 bg-zinc-950 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-85 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Custom Gradient Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500 z-10" />
              </div>

              {/* Float Category Tag */}
              <span className="absolute top-6 left-6 z-20 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-black/40 backdrop-blur-md border border-white/10 uppercase tracking-wider">
                {item.category === "gardens" ? "Jardins" : item.category === "irrigation" ? "Rega" : "Piscina"}
              </span>

              {/* Action Circle Button */}
              <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 group-hover:bg-emerald-600/90 backdrop-blur-md border border-white/10 group-hover:border-emerald-400/20 flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <Plus className="w-5 h-5 text-white" />
              </div>

              {/* Information Overlay */}
              <div className="relative z-20 p-8 flex flex-col translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">
                  {item.subtitle}
                </span>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-xs leading-relaxed text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 line-clamp-2 max-w-sm">
                  {item.details}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State Fallback if no items */}
        {filteredItems.length === 0 && (
          <div className="glass p-12 rounded-3xl text-center flex flex-col items-center justify-center border border-glass-border">
            <span className="text-zinc-400 dark:text-zinc-500 text-lg font-medium">
              Nenhum projeto encontrado nesta categoria.
            </span>
          </div>
        )}

      </div>
    </section>
  );
}
