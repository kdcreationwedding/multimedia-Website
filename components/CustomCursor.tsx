'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement;

      if (cursorTarget) {
        setIsHovered(true);
        setHoverText(cursorTarget.getAttribute('data-cursor') || '');
      } else if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovered(true);
        setHoverText('');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden hidden md:block">
      {/* Precision Gold Cursor Dot */}
      <div
        className={`fixed top-0 left-0 rounded-full bg-metallic-gold transition-transform duration-100 ease-out shadow-[0_0_12px_rgba(212,175,55,0.8)] ${
          isHovered ? 'w-5 h-5 -translate-x-2.5 -translate-y-2.5 opacity-90' : 'w-3.5 h-3.5 -translate-x-1.75 -translate-y-1.75 opacity-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Hover Text Badge (Only when data-cursor is present) */}
      {hoverText && (
        <div
          className="fixed top-0 left-0 px-2.5 py-1 rounded-md bg-obsidian-surface/90 border border-gold/40 text-[9px] font-mono font-bold text-gold-light uppercase tracking-widest pointer-events-none shadow-lg -translate-x-1/2 -translate-y-9 transition-transform duration-200"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          {hoverText}
        </div>
      )}
    </div>
  );
}
