"use client";

import React, { useState } from "react";
import { Clock, Phone, Mail, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "rega",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "rega",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-y bg-mesh relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-emerald-600/5 blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="site-container relative z-10">
        
        {/* Title Block */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
            Fale Connosco
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-emerald-950 dark:text-white tracking-tight leading-tight">
            Solicite um Orçamento Gratuito
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-base md:text-lg">
            Estamos prontos para analisar o seu projeto botânico ou manutenção técnica. Preencha o formulário e responderemos em menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Form Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900/40 p-8 sm:p-10 rounded-[2.5rem] border border-zinc-200/50 dark:border-zinc-800/80 shadow-xl shadow-emerald-950/[0.01] relative overflow-hidden">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-[fadeIn_0.5s_ease-out_both]">
                <div className="w-16 h-16 rounded-full bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 dark:text-white mb-3">
                  Mensagem Enviada!
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mb-8 leading-relaxed">
                  Agradecemos o seu contacto. A nossa equipa técnica analisará os seus dados e entrará em contacto muito brevemente.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: João Silva"
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-sm focus:outline-none focus:border-emerald-500 transition-colors dark:text-white"
                    />
                  </div>

                  {/* Telefone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Contacto Telefónico
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ex: 912 345 678"
                      className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-sm focus:outline-none focus:border-emerald-500 transition-colors dark:text-white"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Endereço de E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: joao.silva@exemplo.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-sm focus:outline-none focus:border-emerald-500 transition-colors dark:text-white"
                  />
                </div>

                {/* Serviço pretendido */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Serviço Pretendido
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-sm focus:outline-none focus:border-emerald-500 transition-colors dark:text-white dark:bg-zinc-950"
                  >
                    <option value="rega">Sistemas de Rega Automática</option>
                    <option value="piscina">Manutenção de Piscinas</option>
                    <option value="limpeza">Limpeza de Terrenos</option>
                    <option value="arquitetura">Arquitetura Paisagista</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Mensagem / Detalhes da Obra
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o seu espaço, área aproximada ou intervenção desejada..."
                    className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-sm focus:outline-none focus:border-emerald-500 transition-colors dark:text-white resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/10 active:scale-[0.99] disabled:opacity-50 transition-all duration-300 border border-emerald-500/25 cursor-pointer mt-2"
                >
                  {formState === "submitting" ? (
                    "A processar..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Solicitação
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

          {/* Right: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            
            {/* Hour Details */}
            <div className="glass p-8 rounded-3xl border border-glass-border flex items-start gap-5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400 animate-float" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-950 dark:text-white mb-2">
                  Horário de Atendimento
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                  Segunda a Sexta-feira: <span className="font-bold text-emerald-600 dark:text-emerald-400">9h - 18h</span>
                </p>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mt-1">
                  Sábados: <span className="font-bold text-emerald-600 dark:text-emerald-400">9h - 13h</span>
                </p>
              </div>
            </div>

            {/* Quick Contact methods */}
            <div className="bg-white dark:bg-zinc-900/40 p-8 rounded-[2.5rem] border border-zinc-200/50 dark:border-zinc-800/80 shadow-md flex flex-col gap-8">
              <h3 className="text-lg font-bold text-emerald-950 dark:text-white">
                Contactos Diretos
              </h3>
              
              {/* Telephone */}
              <a
                href="tel:+351910645565"
                className="group flex items-center gap-5 hover:translate-x-1.5 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Ligar Agora</span>
                  <span className="block text-lg font-extrabold text-emerald-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    +351 910 645 565
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:verdepresente@outlook.pt"
                className="group flex items-center gap-5 hover:translate-x-1.5 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-400/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Enviar E-mail</span>
                  <span className="block text-base sm:text-lg font-extrabold text-emerald-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors break-all">
                    verdepresente@outlook.pt
                  </span>
                </div>
              </a>

              {/* WhatsApp Quick message */}
              <a
                href="https://wa.me/351910645565"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-sm font-bold text-white bg-green-600 hover:bg-green-700 shadow-md shadow-green-600/10 active:scale-[0.98] transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                Enviar Mensagem no WhatsApp
              </a>

            </div>

            {/* Geographical coverage banner */}
            <div className="glass p-6 rounded-2xl text-center border border-glass-border">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest">
                📍 Atuamos em toda a região de Portugal
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
