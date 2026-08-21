'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const headlineText = "WE DON'T JUST CREATE CONTENT. WE ENGINEER ATTENTION.";

  useEffect(() => {
    if (!sectionRef.current || wordsRef.current.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        { opacity: 0.15, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 25%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center py-32 px-6 md:px-12 z-10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="h-[1px] w-12 bg-gold/60" />
          <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase">
            02 // ABOUT KD MULTIMEDIA
          </span>
        </div>

        {/* Oversized Editorial Text Reveal */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight uppercase leading-[1.05] text-white mb-16">
          {headlineText.split(' ').map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) wordsRef.current[index] = el;
              }}
              className="inline-block mr-4 transition-colors duration-300 hover:text-metallic-gold"
            >
              {word === 'ENGINEER' || word === 'ATTENTION.' ? (
                <span className="text-metallic-gold font-light">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h2>

        {/* Brand Story & Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t border-white/10">
          <div className="md:col-span-7 space-y-6">
            <p className="text-lg md:text-xl font-sans text-slate-300 font-light leading-relaxed">
              KD MULTIMEDIA is a modern multimedia, creative production, and digital marketing powerhouse. We combine visual artistry, cinema-grade production, and precision performance strategy to design content and campaigns that command attention and drive measurable business growth.
            </p>
            <p className="text-sm font-mono text-slate-400 leading-relaxed tracking-wider">
              From high-impact brand films and high-converting short-form content to end-to-end social media ecosystem management, we bridge the gap between pure artistic direction and digital commercial scale.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-6 bg-glass p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
            <div>
              <div className="text-4xl font-display font-extrabold text-metallic-gold">100M+</div>
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-1">
                Visual Impressions Generated
              </div>
            </div>
            <div>
              <div className="text-4xl font-display font-extrabold text-white">4.9x</div>
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-1">
                Average Client ROI
              </div>
            </div>
            <div>
              <div className="text-4xl font-display font-extrabold text-white">400+</div>
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-1">
                Cinematic Productions
              </div>
            </div>
            <div>
              <div className="text-4xl font-display font-extrabold text-metallic-gold">99.8%</div>
              <div className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mt-1">
                Attention Retention Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
