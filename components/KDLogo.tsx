'use client';

import React from 'react';

interface KDLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'nav';
  showText?: boolean;
  animated?: boolean;
  layout?: 'horizontal' | 'vertical';
}

export default function KDLogo({
  className = '',
  size = 'md',
  showText = true,
  animated = false,
  layout = 'horizontal',
}: KDLogoProps) {
  const sizeMap = {
    sm: { imgH: 'h-8 md:h-9', title: 'text-xs md:text-sm', sub: 'text-[8px] md:text-[9px]' },
    md: { imgH: 'h-10 md:h-12', title: 'text-sm md:text-base', sub: 'text-[9px] md:text-[10px]' },
    nav: { imgH: 'h-10 md:h-12', title: 'text-sm md:text-base', sub: 'text-[9px] md:text-[10px]' },
    lg: { imgH: 'h-14 md:h-16', title: 'text-base md:text-lg', sub: 'text-[10px] md:text-[11px]' },
    xl: { imgH: 'h-20 md:h-24', title: 'text-xl md:text-2xl', sub: 'text-[11px] md:text-[12px]' },
    hero: { imgH: 'h-24 md:h-32', title: 'text-xl md:text-3xl', sub: 'text-[11px] md:text-[13px]' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const isVertical = layout === 'vertical';

  return (
    <div
      className={`inline-flex ${
        isVertical ? 'flex-col items-center text-center justify-center max-w-full' : 'items-center gap-3.5'
      } select-none ${className}`}
    >
      {/* 100% Transparent Background 3D KD Emblem PNG */}
      <img
        src="/kd-symbol.png"
        alt="KD Emblem"
        className={`${currentSize.imgH} w-auto object-contain transition-transform duration-500 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] ${
          isVertical ? 'mb-3' : ''
        } ${animated ? 'hover:scale-105 hover:brightness-110' : ''}`}
      />

      {/* Typography: KD MULTIMEDIA PRODUCTIONS */}
      {showText && (
        <div className={`flex flex-col ${isVertical ? 'items-center' : 'items-start'}`}>
          <div className="flex items-center justify-center gap-1.5 leading-none whitespace-nowrap">
            <span className={`font-extrabold tracking-wider text-metallic-gold uppercase font-sans ${currentSize.title}`}>
              KD
            </span>
            <span className={`font-semibold tracking-wider text-white uppercase font-sans ${currentSize.title}`}>
              MULTIMEDIA
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2 w-full">
            <div className="h-[1px] w-4 bg-gradient-to-r from-transparent to-gold/60" />
            <span className={`font-mono tracking-[0.3em] text-gold-light uppercase font-medium ${currentSize.sub}`}>
              PRODUCTIONS
            </span>
            <div className="h-[1px] w-4 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </div>
      )}
    </div>
  );
}
