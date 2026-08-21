'use client';

import React from 'react';

export default function WhyKD() {
  return (
    <section className="relative min-h-[80vh] w-full py-40 px-6 md:px-12 z-10 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Subtle Volumetric Glow */}
      <div className="absolute w-[700px] h-[700px] bg-gold/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        <div className="inline-flex items-center gap-3">
          <span className="h-[1px] w-12 bg-gold/60" />
          <span className="text-xs font-mono tracking-[0.4em] text-gold-light uppercase">
            07 // THE KD STANDARD
          </span>
          <span className="h-[1px] w-12 bg-gold/60" />
        </div>

        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tight uppercase leading-[0.95] text-white">
          BUILT TO BE <br />
          <span className="text-metallic-gold font-light tracking-widest text-glow">
            REMEMBERED.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg font-sans font-light text-slate-300 leading-relaxed pt-6">
          In a world drowned in disposable content and generic template design, KD MULTIMEDIA builds unforgettable visual assets and campaign ecosystems designed to stand out, command respect, and generate enduring commercial impact.
        </p>
      </div>
    </section>
  );
}
