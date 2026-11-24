'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ProductionEthos() {
  const ethosPrinciples = [
    {
      code: 'ETHOS // 01',
      title: 'ZERO RAW DELIVERIES',
      description: 'Every single frame is 8K color-graded, audio-mastered in Adobe Audition, and retouched before client preview.',
    },
    {
      code: 'ETHOS // 02',
      title: 'RAPID ADOBE PIPELINE',
      description: 'Streamlined Adobe Premiere Pro & After Effects multitrack editing for fast-paced commercial turnaround.',
    },
    {
      code: 'ETHOS // 03',
      title: '8K CINEMA STANDARDS',
      description: 'Uncompromising 8K RAW capture with anamorphic prime lenses, soundstage lighting & DaVinci HDR studio finishing.',
    },
    {
      code: 'ETHOS // 04',
      title: 'ROAS DRIVEN CREATIVES',
      description: 'Direct response video creatives engineered with psychological micro-hooks for maximum ad conversion.',
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-obsidian-surface/80 border-b border-gold/20 backdrop-blur-xl z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-[1px] w-12 bg-gold/60" />
          <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>THE KD STUDIO CODE // PRODUCTION ETHOS</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ethosPrinciples.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 md:p-8 rounded-2xl bg-glass border border-gold/30 hover:border-gold/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-gold-light uppercase font-bold">
                  {item.code}
                </span>
                <CheckCircle2 className="w-4 h-4 text-gold" />
              </div>
              <h3 className="text-lg font-display font-extrabold text-white uppercase group-hover:text-metallic-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-xs font-sans font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
