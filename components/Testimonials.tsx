'use client';

import React from 'react';
import UniqueArrow from './UniqueArrow';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metrics: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 'apex',
      quote: "KD MULTIMEDIA didn't just produce our brand film — they completely redefined how our hypercar launch was perceived globally. The 3D CGI and cinematic direction set a new industry benchmark.",
      author: "Julian Vance",
      role: "Global Marketing Director",
      company: "Apex Hypercars",
      metrics: "34M+ Views • 5.2x ROI",
    },
    {
      id: 'velour',
      quote: "Working with KD MULTIMEDIA gave our Paris Fashion Week release the dark luxury aesthetic we needed. Their attention to lighting, material textures, and social ecosystem strategy is unmatched.",
      author: "Elena Rostova",
      role: "Creative Director",
      company: "Maison Velour Paris",
      metrics: "100% Sold Out Collection",
    },
    {
      id: 'synapse',
      quote: "Their short-form content team engineered a vertical video engine that drove $42M in direct asset acquisition. Their performance marketing strategy is pure gold.",
      author: "Marcus Thorne",
      role: "Chief Growth Officer",
      company: "Synapse Financial",
      metrics: "$42M AUM Growth",
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase">
                EXECUTIVE VERDICT
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              BUILT FOR <span className="text-metallic-gold font-light">LEADERS</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md tracking-wider">
            Testimonials from industry pioneers, luxury founders, and enterprise executives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-3xl bg-glass border border-white/10 hover:border-gold/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-gold opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-200 text-sm font-sans font-light leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-base font-display font-bold text-white uppercase group-hover:text-gold-light transition-colors">
                    {item.author}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {item.role} // <span className="text-gold">{item.company}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-gold-light px-2.5 py-1 rounded-md bg-gold/10 border border-gold/20">
                  {item.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
