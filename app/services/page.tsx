import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/data/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import AudioEngine from '@/components/AudioEngine';
import KeyShortcutHandler from '@/components/KeyShortcutHandler';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import UniqueArrow from '@/components/UniqueArrow';
import { Sparkles, Layers, ArrowRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Services & Capabilities — 8K Cinema & Performance Marketing | KD Multimedia',
  description:
    'Explore all 20 creative, video production, and performance marketing services by KD Multimedia in Ahmedabad. 8K video shoots, Adobe editing, Meta/Google ads & branding. Call +91 70165 63129.',
  keywords: [
    'KD Multimedia Services',
    'Video Production Services Ahmedabad',
    'Digital Marketing Services Gujarat',
    'Meta Ads Agency Ahmedabad',
    'Commercial Photography Studio Ahmedabad',
  ],
  alternates: {
    canonical: 'https://kdmultimedia.in/services',
  },
};

export default function ServicesHubPage() {
  return (
    <main className="relative min-h-screen bg-obsidian text-white overflow-hidden font-sans selection:bg-gold/30">
      <CustomCursor />
      <AudioEngine />
      <KeyShortcutHandler />
      <WhatsAppWidget />
      <Navbar />

      <section className="relative pt-40 pb-28 px-6 md:px-12 z-10 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-mono text-gold-light uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-gold" />
            <span>20 CORE PRODUCTION & MARKETING CAPABILITIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
            OUR <span className="text-metallic-gold font-light">SERVICES</span>
          </h1>
          <p className="text-sm md:text-base font-mono text-slate-300 tracking-wider max-w-2xl mx-auto">
            From Hollywood-grade 8K cinema shoots to high-ROAS Meta Advantage+ ad funnels, explore our complete end-to-end studio solutions.
          </p>
        </div>

        {/* 20 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group p-8 rounded-3xl bg-glass border border-white/10 hover:border-gold/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gold font-bold">
                    0{idx + 1} // STUDIO SERVICE
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-gold/10 border border-gold/30 text-[9px] font-mono text-gold-light uppercase flex items-center gap-1">
                    <Zap className="w-3 h-3 text-gold" />
                    <span>{service.turnaroundTime.split(' ')[0]} {service.turnaroundTime.split(' ')[1]}</span>
                  </span>
                </div>

                <h2 className="text-2xl font-display font-bold text-white uppercase group-hover:text-gold-light transition-colors">
                  {service.title}
                </h2>

                <p className="text-xs font-sans text-slate-300 font-light leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gold">
                <span>VIEW COMPLETE SPECIFICATIONS</span>
                <UniqueArrow direction="right" className="group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
