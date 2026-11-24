'use client';

import React from 'react';
import UniqueArrow from './UniqueArrow';
import { Heart, Camera, Film, Sparkles, ExternalLink, Award } from 'lucide-react';

export default function WeddingSection() {
  const weddingServices = [
    {
      title: 'LUXURY WEDDING CINEMATOGRAPHY',
      desc: 'Cinema-grade 4K/8K wedding films, royal teaser edits, and emotional story highlight reels.',
      icon: Film,
      badge: 'DESTINATION WEDDING FILM REEL',
    },
    {
      title: 'CANDID & TRADITIONAL PHOTOGRAPHY',
      desc: 'High-detail wedding photography capturing raw emotions, rituals, and royal portraits.',
      icon: Camera,
      badge: 'ROYAL RITUAL COVERAGE 8K',
    },
    {
      title: 'PRE-WEDDING CONCEPT FILMS',
      desc: 'Destination pre-wedding shoots, cinematic story concepts, and song videography.',
      icon: Heart,
      badge: 'CONCEPT SONG VIDEOGRAPHY',
    },
  ];

  return (
    <section id="weddings" className="relative w-full py-32 px-6 md:px-12 z-10 overflow-hidden bg-obsidian-surface/60 border-y border-gold/30 backdrop-blur-xl">
      {/* Background Volumetric Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-gold/15 via-gold/5 to-transparent blur-[160px] pointer-events-none -top-20 -left-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 fill-gold text-gold" />
                <span>KD CREATION // WEDDING DIVISION</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              LUXURY <span className="text-metallic-gold font-light">WEDDINGS</span>
            </h2>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-mono text-slate-300 max-w-md tracking-wider">
              We weave your most cherished wedding moments into eternal cinematic films and high-status photography.
            </p>
            <a
              href="https://kdcreations.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              <span>VISIT KDCREATIONS.IN</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {weddingServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-glass border border-white/10 hover:border-gold/60 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-[9px] font-mono text-gold-light uppercase tracking-widest font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span>{service.badge}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold uppercase text-white mb-3 group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-sans font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gold-light">
                  <span>KD CREATION EXCLUSIVE</span>
                  <Award className="w-4 h-4 text-gold" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Link Banner */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-gold/15 via-gold/5 to-obsidian-card border border-gold/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[10px] font-mono tracking-widest text-gold-light uppercase block">
              OFFICIAL WEDDING PORTAL
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white uppercase">
              EXPLORE KD CREATION WEDDING PORTAL
            </h3>
            <p className="text-xs font-mono text-slate-300">
              Direct access to our dedicated wedding films, pre-wedding teasers & photo galleries on <span className="text-gold font-bold">kdcreations.in</span>
            </p>
          </div>

          <a
            href="https://kdcreations.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 rounded-full bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-[0.25em] shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:scale-105 transition-all whitespace-nowrap flex items-center gap-3"
            data-cursor="WEDDINGS"
          >
            <span>OPEN KDCREATIONS.IN</span>
            <UniqueArrow direction="up-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
