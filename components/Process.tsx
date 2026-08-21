'use client';

import React from 'react';

interface Stage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export default function Process() {
  const stages: Stage[] = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'AUDIT, PSYCHOLOGY & CREATIVE THESIS',
      description: 'We decode your brand positioning, study audience attention behaviors, and establish a bulletproof creative thesis before turning on a single camera.',
      deliverables: ['Audience Attention Audit', 'Visual Identity Strategy', 'Moodboards & Concept Treatment'],
    },
    {
      number: '02',
      title: 'CREATE',
      subtitle: 'CINEMA-GRADE PRODUCTION & VFX',
      description: 'Our world-class director of photography, sound engineers, and 3D animators produce ultra-high-definition visual assets tailored for maximum emotional impact.',
      deliverables: ['8K Cinema Production', 'Spatial Sound Design', '3D Motion Graphics & VFX'],
    },
    {
      number: '03',
      title: 'AMPLIFY',
      subtitle: 'ALGORITHMIC DISTRIBUTION & FUNNELING',
      description: 'We deploy multi-format assets across vertical video channels and paid ad acquisition networks engineered to command retention and drive immediate conversions.',
      deliverables: ['Vertical Video Scaling', 'Meta & TikTok Paid Funnels', 'Omnichannel Content Distribution'],
    },
    {
      number: '04',
      title: 'SCALE',
      subtitle: 'REVENUE OPTIMIZATION & BRAND EQUITY',
      description: 'We continuously analyze retention curves, ROAS metrics, and audience sentiments, iterating on creative hooks to turn initial attention into long-term brand equity.',
      deliverables: ['Real-Time Hook Optimization', 'Monthly ROAS Scaling Reports', 'Long-Term Equity Asset Library'],
    },
  ];

  return (
    <section id="process" className="relative min-h-screen w-full py-32 px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase">
                06 // METHODOLOGY
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              THE KD <span className="text-metallic-gold font-light">PROCESS</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md tracking-wider">
            Connected visually by the continuous 3D KD Orbit timeline. Four stages of precision engineering.
          </p>
        </div>

        {/* 4 Stages Visual Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Horizontal Timeline Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-gold/20 via-gold/80 to-gold/20 z-0" />

          {stages.map((stage) => (
            <div
              key={stage.number}
              className="group relative bg-glass p-8 rounded-3xl border border-white/10 hover:border-gold/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 z-10 flex flex-col justify-between"
              data-cursor="TIMELINE"
            >
              {/* Stage Top Node */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-obsidian-deep border border-gold/40 flex items-center justify-center text-gold font-mono font-bold text-lg group-hover:bg-gold group-hover:text-obsidian transition-all duration-500 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    {stage.number}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    STAGE {stage.number}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-extrabold tracking-wide uppercase text-white mb-2 group-hover:text-metallic-gold transition-colors duration-300">
                  {stage.title}
                </h3>
                <p className="text-[11px] font-mono text-gold-light tracking-wider uppercase mb-4">
                  {stage.subtitle}
                </p>
                <p className="text-slate-300 text-xs font-sans font-light leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-6 border-t border-white/5 space-y-2">
                <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase block mb-2">
                  OUTPUTS:
                </span>
                {stage.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-slate-300">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
