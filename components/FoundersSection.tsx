'use client';

import React from 'react';
import UniqueArrow from './UniqueArrow';
import { UserCheck, Award, ShieldCheck, Mail, Sparkles, Star } from 'lucide-react';

interface Founder {
  name: string;
  roleTitle: string;
  roleSub: string;
  badge: string;
  bio: string;
  highlights: string[];
  image: string;
  email: string;
}

export default function FoundersSection() {
  const founders: Founder[] = [
    {
      name: 'MR. MAHESH',
      roleTitle: 'FOUNDER & DIRECTOR',
      roleSub: 'CHIEF EXECUTIVE OFFICER & CREATIVE DIRECTOR',
      badge: 'DIRECTOR // 8K CINEMA & AI VISION',
      bio: 'Leading KD Multimedia Productions with relentless focus on studio vision, 8K cinema direction, generative AI integration, and high-impact brand storytelling.',
      highlights: ['8K Cinema Direction', 'Generative AI Architecture', 'Film & Commercial Direction', 'Strategic Brand Scaling'],
      image: '/founder-mahesh.jpg?v=1',
      email: 'kdmultimedia.co@gmail.com',
    },
    {
      name: 'MR. HARSHAD CHAVDA',
      roleTitle: 'CO-FOUNDER & MANAGING DIRECTOR',
      roleSub: 'HEAD OF COMMERCIAL SHOOTS & PHOTO EDITING',
      badge: 'HEAD // 8K SHOOTING & PHOTO EDITING',
      bio: 'Managing on-location 8K commercial video shoots, camera crew unit coordination, and high-end commercial photo editing & beauty retouching.',
      highlights: ['Commercial Video Shooting', 'On-Location Camera Unit', 'Commercial Photo Editing', 'High-End Image Retouching'],
      image: '/founder-harshad.jpg?v=1',
      email: 'kdmultimedia.co@gmail.com',
    },
    {
      name: 'MR. ANIKET VAGHELA',
      roleTitle: 'CO-FOUNDER & MANAGING DIRECTOR',
      roleSub: 'CHIEF OPERATING OFFICER & STUDIO MANAGING HEAD',
      badge: 'HEAD // STUDIO OPERATIONS & GOVERNANCE',
      bio: 'The central operational pillar of KD Multimedia. Overseeing all studio operations, end-to-end project execution, department governance (Shooting, Editing, Marketing), and overall studio management.',
      highlights: ['Overall Studio Management', 'Complete Project Supervision', 'Cross-Department Governance', 'Executive Operations Head'],
      image: '/founder-aniket.jpg?v=1',
      email: 'kdmultimedia.co@gmail.com',
    },
  ];

  return (
    <section id="founders" className="relative w-full py-32 px-6 md:px-12 z-10 overflow-hidden bg-obsidian-surface/40 border-y border-gold/20 backdrop-blur-xl">
      {/* Volumetric Radial Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-gold/10 via-transparent to-transparent blur-[160px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-gold" />
                <span>EXECUTIVE BOARD // THE FOUNDERS</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              LEADERSHIP <span className="text-metallic-gold font-light">BOARD</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-300 max-w-md tracking-wider">
            Director & Managing Directors governing cinema direction, commercial shoots, photo editing, and overall studio management.
          </p>
        </div>

        {/* Founders Cards Grid - 3 Large Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-glass border border-gold/30 hover:border-gold/60 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                {/* Large Portrait Image Container */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-gold/40 relative bg-obsidian-surface shadow-xl">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/90 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-obsidian/90 border border-gold/40 text-[9px] font-mono text-gold-light uppercase flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                    <ShieldCheck className="w-3 h-3 text-gold" />
                    <span>EXECUTIVE BOARD</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-obsidian-deep/90 border border-gold/40 text-[9px] font-mono text-gold font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-gold fill-current" />
                    <span>{founder.badge}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-gold uppercase tracking-widest font-bold flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    <span>{founder.roleTitle}</span>
                  </div>
                  <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-wide">
                    {founder.name}
                  </h3>
                  <div className="text-[11px] font-mono text-gold-light uppercase tracking-wider">
                    {founder.roleSub}
                  </div>
                  <p className="text-slate-300 text-xs font-sans font-light leading-relaxed pt-2">
                    {founder.bio}
                  </p>
                </div>
              </div>

              {/* Highlights Pill Badges */}
              <div className="space-y-3 border-t border-white/10 pt-4">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span>CORE SPECIALIZATION:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {founder.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-200 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <a
                  href={`mailto:${founder.email}`}
                  className="text-gold-light hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
                  <span>DIRECT EMAIL</span>
                </a>
                <UniqueArrow direction="right" className="group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
