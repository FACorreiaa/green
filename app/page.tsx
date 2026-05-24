import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-800 dark:selection:text-emerald-200">
      {/* Decorative subtle header background overlay blur */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-emerald-500/[0.015] to-transparent pointer-events-none z-0" />
      
      {/* Dynamic Navigation Sticky Header */}
      <Header />

      {/* Main content grid */}
      <main className="flex-grow flex flex-col">
        
        {/* Full visual high impact Hero Banner */}
        <Hero />
        
        {/* Story details & Core Pillars */}
        <About />
        
        {/* Services interactive list */}
        <Services />
        
        {/* Filterable gallery grid */}
        <Portfolio />
        
        {/* Beautiful Contact directory & Forms */}
        <Contact />

      </main>

      {/* Footer information */}
      <Footer />
    </div>
  );
}
