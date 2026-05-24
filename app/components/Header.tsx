"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Leaf, PhoneCall } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre Nós" },
    { id: "services", label: "Serviços" },
    { id: "portfolio", label: "Portfólio" },
    { id: "contact", label: "Contacto" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass py-4 shadow-lg shadow-emerald-950/5 border-b border-glass-border"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-300">
              <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors duration-300 animate-float" />
            </div>
            <span className="text-xl font-bold tracking-wider text-emerald-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
              VERDEPRESENTE<span className="text-emerald-500">.PT</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-zinc-600 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-400"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full animate-pulse" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/10 hover:shadow-emerald-600/20 active:scale-95 transition-all duration-300 border border-emerald-500/25"
            >
              <PhoneCall className="w-4 h-4" />
              Pedir Orçamento
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-glass-border hover:bg-emerald-600/5 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
            ) : (
              <Menu className="w-6 h-6 text-zinc-800 dark:text-zinc-200" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-mesh glass flex flex-col p-8 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="text-lg font-bold tracking-wider text-emerald-950 dark:text-white">
              Navegação
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg border border-glass-border hover:bg-emerald-600/5 transition-colors"
            >
              <X className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 mb-12">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-lg font-medium py-2 border-b border-glass-border transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-emerald-600 dark:text-emerald-400 pl-2 border-emerald-500"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/10 active:scale-95 transition-all duration-300"
          >
            <PhoneCall className="w-5 h-5" />
            Pedir Orçamento
          </a>
        </div>
      </div>
    </>
  );
}
