import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ValueStrip } from './components/sections/ValueStrip';
import { Problems } from './components/sections/Problems';
import { DashboardShowcase } from './components/sections/DashboardShowcase';
import { Features } from './components/sections/Features';
import { Workflow } from './components/sections/Workflow';
import { Traceability } from './components/sections/Traceability';
import { Audience } from './components/sections/Audience';
import { Benefits } from './components/sections/Benefits';
import { ContactSection } from './components/sections/ContactSection';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#131b2e] flex flex-col font-sans overflow-x-hidden w-full max-w-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#FB5921] focus:font-bold focus:shadow-xl focus:rounded-lg focus:border focus:border-orange-200"
      >
        Passer au contenu principal
      </a>
      <Header />
      <main id="main-content" className="pt-16 sm:pt-20 overflow-x-hidden flex-1">
        <Hero />
        <ValueStrip />
        <Problems />
        <DashboardShowcase />
        <Features />
        <Workflow />
        <Traceability />
        <Audience />
        <Benefits />
        <ContactSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
