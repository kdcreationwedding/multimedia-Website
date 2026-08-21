'use client';

import React, { useEffect, useState } from 'react';
import KDLogo from './KDLogo';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1800; // 1.8s fast, high-end loading
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 600); // smooth fade exit
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-obsidian-deep flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isDone ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Volumetric Dark Studio Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* Orbit Formation Canvas SVG */}
      <div className="relative w-52 h-52 mb-6 flex items-center justify-center">
        {/* Assembling Metallic Ring Path */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1.5"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#loaderGold)"
            strokeWidth="2"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            strokeLinecap="round"
            className="transition-all duration-75"
          />
          <defs>
            <linearGradient id="loaderGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff5cb" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#aa820a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Standalone Emblem Logo */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <KDLogo size="lg" showText={false} animated={true} />
        </div>
      </div>

      {/* Brand Title */}
      <div className="text-center space-y-2">
        <KDLogo size="sm" showText={true} layout="vertical" />
      </div>

      {/* Counter Percentage */}
      <div className="absolute bottom-12 font-mono text-sm tracking-widest text-gold-light/80">
        {progress.toString().padStart(3, '0')} <span className="text-[10px] text-slate-500">%</span>
      </div>
    </div>
  );
}
