'use client';

import React from 'react';

interface UniqueArrowProps {
  className?: string;
  direction?: 'right' | 'up-right' | 'left' | 'down' | 'up';
  size?: 'sm' | 'md' | 'lg';
}

export default function UniqueArrow({
  className = '',
  direction = 'right',
  size = 'md',
}: UniqueArrowProps) {
  // Rotation mapping based on direction
  const rotationMap = {
    right: 'rotate-0',
    'up-right': '-rotate-45',
    up: '-rotate-90',
    left: 'rotate-180',
    down: 'rotate-90',
  };

  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={`inline-flex items-center justify-center relative transition-transform duration-500 ease-out group-hover:scale-110 ${rotationMap[direction]} ${sizeMap[size]} ${className}`}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
      >
        <defs>
          {/* Metallic Gold Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA7C11" />
            <stop offset="100%" stopColor="#F3E5AB" />
          </linearGradient>

          {/* Halo Glow */}
          <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Kinetic Halo Ring */}
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          className="opacity-40 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"
        />

        {/* Central Kinetic Diamond Guide Line */}
        <path
          d="M 6 24 L 38 24"
          stroke="url(#goldGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Sleek Beveled Arrowhead */}
        <path
          d="M 26 12 L 38 24 L 26 36"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Precision Accent Dot */}
        <circle cx="12" cy="24" r="2" fill="url(#goldGradient)" />
      </svg>
    </div>
  );
}
