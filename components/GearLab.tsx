'use client';

import React, { useState } from 'react';
import UniqueArrow from './UniqueArrow';
import { Camera, Film, Monitor, Sliders, Radio, Sparkles, ShieldCheck } from 'lucide-react';

interface GearItem {
  id: string;
  name: string;
  category: string;
  specs: string;
  icon: React.ElementType;
  description: string;
  image: string;
}

export default function GearLab() {
  const [activeGear, setActiveGear] = useState<number>(0);

  const gearList: GearItem[] = [
    {
      id: '8k-cinema-cameras',
      name: '8K ULTRA-HD CINEMA CAMERAS',
      category: 'PRIMARY CINEMA RIGS',
      specs: '8K Multi-Format Sensor • 120 FPS High Speed • 17+ Stops Dynamic Range',
      icon: Camera,
      description: 'High-end professional cinema camera bodies equipped with matte boxes, dual shoulder grips, follow-focus rigs, and prime lenses for commercials and 8K visual acquisition.',
      image: '/gear-camera.jpg?v=12',
    },
    {
      id: 'anamorphic-optics',
      name: 'ANAMORPHIC & PRIME LENS SUITE',
      category: 'OPTICAL LENS ARCHITECTURE',
      specs: 'Full-Frame Anamorphic Squeeze • Ultra-Fast T1.5 Apertures • Signature Flare',
      icon: Film,
      description: 'Ultra-fast T1.5 cinema prime lenses and anamorphic optical glass suite capturing sub-millimeter detail, organic bokeh, and horizontal flare.',
      image: '/gear-lens.jpg?v=12',
    },
    {
      id: 'davinci-suite',
      name: 'POST-PRODUCTION & COLOR SUITE',
      category: 'MASTER EDITING & COLOR GRADING',
      specs: 'Timeline Multitrack Suite • Reference HDR OLED Monitors • Color Waveforms',
      icon: Monitor,
      description: 'Professional video editing timeline suite with multitrack audio, node-based color grading waveforms, and 1000-nit HDR master delivery.',
      image: '/gear-timeline.jpg?v=12',
    },
    {
      id: 'aerial-rig',
      name: '8K AERIAL CINEMATOGRAPHY DRONE',
      category: 'AERIAL CAMERA PLATFORM',
      specs: 'Full-Frame 8K Video • 3D Waypoint Navigation • 360° Gimbal Stabilization',
      icon: Radio,
      description: 'Professional aerial cinematography drone fleet equipped with Smart Controllers, multi-battery charging hubs, and 3-axis gimbal stabilization for aerial tracking.',
      image: '/gear-drone.jpg?v=12',
    },
    {
      id: 'volumetric-lighting',
      name: 'VOLUMETRIC STUDIO LIGHTING RIG',
      category: 'STUDIO LIGHTING & SHAPING',
      specs: 'High-Output Daylight & RGBWW • Softbox Modifiers • Overhead Truss Rigs',
      icon: Sliders,
      description: 'Professional video and photo soundstage studio lighting setup equipped with overhead truss LED panels, parabolic softbox umbrellas, and high-output daylight illuminators.',
      image: '/gear-lighting.jpg?v=12',
    },
  ];

  const current = gearList[activeGear];
  const Icon = current.icon;

  return (
    <section className="relative w-full py-32 px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>07 // HARDWARE ARCHITECTURE</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              STUDIO <span className="text-metallic-gold font-light">GEAR LAB</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md tracking-wider">
            Close-up inspection of our 8K cinema camera bodies, prime optical lenses, editing software timelines, and studio lighting setups.
          </p>
        </div>

        {/* Interactive Gear Switcher Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Gear Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {gearList.map((gear, idx) => {
              const ItemIcon = gear.icon;
              const isSelected = activeGear === idx;
              return (
                <button
                  key={gear.id}
                  onClick={() => setActiveGear(idx)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-metallic-gold text-obsidian border-gold font-bold shadow-[0_0_30px_rgba(212,175,55,0.3)] scale-[1.02]'
                      : 'bg-glass border-white/10 text-slate-300 hover:border-gold/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-obsidian text-gold' : 'bg-white/5 text-gold'
                      }`}
                    >
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono opacity-80 uppercase tracking-widest">
                        {gear.category}
                      </div>
                      <div className="text-base font-display uppercase tracking-wide">
                        {gear.name}
                      </div>
                    </div>
                  </div>
                  <UniqueArrow direction="right" className={isSelected ? 'text-obsidian' : ''} />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Preview Card */}
          <div className="lg:col-span-7 bg-glass p-8 md:p-10 rounded-3xl border border-gold/40 backdrop-blur-2xl space-y-6 relative overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 relative bg-obsidian-surface">
              <img
                key={current.id}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-all duration-700 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-obsidian/90 border border-gold/40 text-[10px] font-mono text-gold-light uppercase pointer-events-none backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                <span>{current.category}</span>
              </div>

              <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-gold/90 text-obsidian text-[9px] font-mono font-bold uppercase tracking-widest pointer-events-none shadow-xl flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-current" />
                <span>STUDIO VERIFIED HARDWARE</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-display font-extrabold text-white uppercase">
                  {current.name}
                </h3>
              </div>
              
              <p className="text-xs font-mono text-gold-light tracking-wider uppercase font-bold">
                ⚡ SPECS: {current.specs}
              </p>
              
              <p className="text-slate-300 text-sm font-sans font-light leading-relaxed">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
