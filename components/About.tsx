'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Film, ShieldCheck, Award, Sparkles, TrendingUp, UserCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const headlineText = "WE DON'T JUST CREATE CONTENT. WE ENGINEER ATTENTION & SCALE BRANDS.";

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
      className="relative min-h-screen w-full flex items-center justify-center py-28 md:py-36 px-6 md:px-12 border-b border-gold/20 z-10 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-gold/10 via-transparent to-transparent blur-[160px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        {/* Section Label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-12 bg-gold/60" />
            <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>03 // ABOUT KD MULTIMEDIA</span>
            </span>
          </div>

          {/* Executive Founder Lockup Badges */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-mono text-gold-light uppercase">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>EXECUTIVE BOARD: MR. MAHESH • MR. HARSHAD • MR. ANIKET</span>
          </div>
        </div>

        {/* Oversized Editorial Text Reveal */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight uppercase leading-[1.05] text-white">
          {headlineText.split(' ').map((word, index) => (
            <span
              key={index}
              ref={(el) => {
                if (el) wordsRef.current[index] = el;
              }}
              className="inline-block mr-4 transition-colors duration-300 hover:text-metallic-gold"
            >
              {word === 'ENGINEER' || word === 'ATTENTION' || word === 'BRANDS.' ? (
                <span className="text-metallic-gold font-light">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h2>

        {/* Brand Story Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10">
          <div className="md:col-span-7">
            <p className="text-lg md:text-2xl font-sans text-slate-200 font-light leading-relaxed">
              KD MULTIMEDIA is an ultra-premium multimedia, creative production, and digital marketing powerhouse. We combine visual artistry, 8K cinema-grade production, Adobe Creative Suite mastery, and precision performance strategy to design content and campaigns that command attention and drive scaled revenue growth.
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm font-mono text-slate-400 leading-relaxed tracking-wider">
              From high-impact commercial brand films and high-converting viral short-form content to end-to-end performance media ecosystem management, we bridge the gap between pure artistic direction and digital commercial scale.
            </p>
          </div>
        </div>

        {/* Big Spacious Full-Width 4-Column Credential Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-6 md:p-8 rounded-3xl bg-glass border border-gold/30 hover:border-gold/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-gold-light uppercase tracking-widest font-bold">
                CREATIVE DIRECTION
              </span>
              <Film className="w-5 h-5 text-gold flex-shrink-0" />
            </div>
            <div className="text-lg sm:text-xl font-sans font-extrabold tracking-wide text-metallic-gold uppercase">
              WORLD CLASS
            </div>
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              8K Cinema Filming & Direction
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-glass border border-gold/30 hover:border-gold/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-gold-light uppercase tracking-widest font-bold">
                PERFORMANCE MEDIA
              </span>
              <TrendingUp className="w-5 h-5 text-gold flex-shrink-0" />
            </div>
            <div className="text-lg sm:text-xl font-sans font-extrabold tracking-wide text-white uppercase">
              FULL STACK
            </div>
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              Meta & Google Paid Ad Scaling
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-glass border border-gold/30 hover:border-gold/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-gold-light uppercase tracking-widest font-bold">
                CREATIVE SOFTWARE
              </span>
              <Award className="w-5 h-5 text-gold flex-shrink-0" />
            </div>
            <div className="text-lg sm:text-xl font-sans font-extrabold tracking-wide text-white uppercase">
              MULTIMEDIA
            </div>
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              Adobe Master Creative Suite
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-glass border border-gold/30 hover:border-gold/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-gold-light uppercase tracking-widest font-bold">
                BRAND AUTHORITY
              </span>
              <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
            </div>
            <div className="text-lg sm:text-xl font-sans font-extrabold tracking-wide text-metallic-gold uppercase">
              ENTERPRISE
            </div>
            <div className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              Strategic Growth & Scaling
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
