'use client';

import React from 'react';
import UniqueArrow from './UniqueArrow';
import { Bot } from 'lucide-react';

export default function Hero() {
  const handleScrollClick = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center px-6 md:px-12 pt-36 pb-12 overflow-hidden z-10">
      {/* Background Subtle Volumetric Light Radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/10 via-obsidian/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center text-center relative z-10 my-auto">
        {/* Editorial AI & Production Sub-badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-glass-gold border border-gold/20 mb-8 backdrop-blur-md animate-float">
          <Bot className="w-4 h-4 text-gold animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-gold-light uppercase">
            AI INTEGRATION MASTERY • CREATIVE PRODUCTION • DIGITAL MARKETING
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-[0.08em] uppercase text-white leading-none text-glow-white mb-6 select-none">
          KD <span className="text-metallic-gold font-light tracking-[0.1em]">MULTIMEDIA</span>
        </h1>

        {/* Secondary Tagline Statement */}
        <p className="text-sm sm:text-lg md:text-xl font-mono tracking-[0.35em] md:tracking-[0.45em] text-slate-300 uppercase max-w-3xl mb-12 text-glow">
          WHERE VISUALS BECOME EXPERIENCES.
        </p>

        {/* CTA Button: ENTER THE EXPERIENCE */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={handleScrollClick}
            className="group relative px-10 py-5 rounded-full overflow-hidden border border-gold/50 bg-obsidian-surface/60 backdrop-blur-xl text-xs sm:text-sm uppercase tracking-[0.25em] font-semibold text-white transition-all duration-500 hover:border-gold hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]"
            data-cursor="ENTER"
          >
            <span className="relative z-10 flex items-center gap-3 text-gold-light group-hover:text-white transition-colors duration-300">
              ENTER THE EXPERIENCE
              <UniqueArrow direction="down" className="group-hover:translate-y-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/30 via-gold/50 to-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>
      </div>

      {/* Bottom Hero Bar */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-8 border-t border-white/10 text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-gold">01</span>
          <span>// EST. 2026</span>
        </div>
        <div className="hidden sm:block">AI INTEGRATION • CINEMATOGRAPHY • PERFORMANCE MARKETING</div>
        <div className="flex items-center gap-2">
          <span>SCROLL TO EXPLORE</span>
          <div className="w-4 h-8 rounded-full border border-slate-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
