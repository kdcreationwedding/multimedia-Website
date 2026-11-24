'use client';

import React, { useState } from 'react';
import { Camera, Film, Bot, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<'all' | 'filming' | 'adobe' | 'ai' | 'marketing'>('all');

  const skills = [
    {
      id: 'filming-8k',
      category: 'filming',
      categoryLabel: '8K CINEMATOGRAPHY',
      title: '8K Commercial Video Shooting & Direction',
      icon: Camera,
      description: 'Anamorphic prime lenses, 8K RAW camera rigs, 4K FPV drone tracking & soundstage softbox lighting.',
      tags: ['8K Cinema Camera Rigs', 'Anamorphic Primes', 'FPV Drone Pilots', 'Soundstage Lighting'],
      mastery: 99,
    },
    {
      id: 'adobe-suite',
      category: 'adobe',
      categoryLabel: 'ADOBE CREATIVE SUITE',
      title: 'Adobe Premiere Pro 8K & After Effects 3D',
      icon: Film,
      description: 'Primary editing suite: Adobe Premiere Pro multitrack cutting, After Effects 2D/3D kinetic subtitles & Photoshop/Illustrator graphic design.',
      tags: ['Adobe Premiere Pro 8K', 'Adobe After Effects', 'Photoshop Retouching', 'Adobe Audition SFX'],
      mastery: 98,
    },
    {
      id: 'ai-gen-tech',
      category: 'ai',
      categoryLabel: 'AI GENERATIVE PRODUCTION',
      title: 'AI Generative Video, Voice & Visual FX',
      icon: Bot,
      description: 'Sora & Runway Gen-3 AI video FX, ElevenLabs synthetic voice cloning, Topaz 8K neural upscaling & Midjourney visual prompts.',
      tags: ['Sora & Runway Gen-3', 'ElevenLabs Voice', 'Topaz Video AI', 'Midjourney v6'],
      mastery: 95,
    },
    {
      id: 'meta-google-ads',
      category: 'marketing',
      categoryLabel: 'PERFORMANCE MEDIA',
      title: 'Meta Advantage+ & Google PMax Paid Ads',
      icon: TrendingUp,
      tagline: 'High-ROAS Meta Paid Acquisition Engine',
      description: 'Direct-response video ad creative testing (DCT), Meta Advantage+ Shopping (ASC), Google Performance Max & ROAS scaling.',
      tags: ['Meta Ads Manager', 'Meta ASC Funnels', 'Google PMax Ads', 'ROAS Scaling'],
      mastery: 96,
    },
  ];

  const filteredSkills = activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills-matrix" className="relative w-full py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden bg-obsidian-surface/60 border-b border-gold/20 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-gold/10 via-transparent to-transparent blur-[140px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>05 // CORE PRODUCTION DNA</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              TECHNICAL <span className="text-metallic-gold font-light">MASTERY MATRIX</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-300 max-w-md tracking-wider">
            From 8K Cinema Camera Rigs & Adobe Creative Suite (Premiere Pro / After Effects) to AI Video Production & Meta/Google Ads.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-3 pb-4 border-b border-white/10">
          {[
            { id: 'all', label: 'ALL DNA' },
            { id: 'filming', label: '8K CINEMATOGRAPHY' },
            { id: 'adobe', label: 'ADOBE CREATIVE SUITE' },
            { id: 'ai', label: 'AI GENERATIVE TECH' },
            { id: 'marketing', label: 'PERFORMANCE MARKETING' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-5 py-2.5 rounded-full border text-xs font-mono tracking-widest uppercase transition-all ${
                activeTab === tab.id
                  ? 'bg-metallic-gold text-obsidian font-bold border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with Live Animated Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="group p-8 rounded-3xl bg-glass border border-gold/30 hover:border-gold/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 shadow-2xl space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-mono text-gold-light uppercase tracking-widest font-bold">
                    {skill.categoryLabel}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-obsidian transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-extrabold text-white uppercase group-hover:text-metallic-gold transition-colors">
                  {skill.title}
                </h3>

                <p className="text-slate-300 text-xs font-sans font-light leading-relaxed">
                  {skill.description}
                </p>

                {/* Animated Mastery Progress Bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-300 uppercase">
                    <span>STUDIO MASTERY INDEX</span>
                    <span className="text-gold font-bold">{skill.mastery}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-obsidian border border-white/10 overflow-hidden">
                    <div
                      className="h-full bg-metallic-gold transition-all duration-1000 ease-out"
                      style={{ width: `${skill.mastery}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {skill.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 tracking-wider flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-gold" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
