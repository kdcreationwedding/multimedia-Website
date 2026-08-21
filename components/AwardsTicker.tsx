'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AwardsTicker() {
  const items = [
    'WHERE VISUALS BECOME EXPERIENCES',
    '8K CINEMA PRODUCTION & EDITING',
    '100M+ VISUAL IMPRESSIONS GENERATED',
    'PERFORMANCE ACQUISITION ENGINE',
    '2D/3D SAAS PRODUCT ANIMATIONS',
    'AI INTEGRATION MASTERY',
    'MUMBAI • DUBAI • LONDON',
    '4.9X AVERAGE CLIENT ROAS',
    'KDMULTIMEDIA.CO@GMAIL.COM',
    '+91 90330 32926',
  ];

  return (
    <div className="relative w-full py-5 bg-obsidian-deep/90 border-y border-gold/20 overflow-hidden z-10 select-none backdrop-blur-md">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center gap-6 mx-6 text-xs font-mono tracking-[0.3em] uppercase text-slate-300">
            <span className="hover:text-gold transition-colors">{text}</span>
            <Sparkles className="w-3.5 h-3.5 text-gold" />
          </div>
        ))}
      </div>
    </div>
  );
}
