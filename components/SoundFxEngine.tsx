'use client';

import React, { useEffect, useRef } from 'react';

export default function SoundFxEngine() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastScrollTime = useRef<number>(0);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Play Cinematic Gold Impact Whoosh on Click / Touch
  const playCinematicClickSfx = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      // Primary Impact Oscillator
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      // High Crystal Chime Layer
      const chimeOsc = ctx.createOscillator();
      const chimeGain = ctx.createGain();

      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(1200, ctx.currentTime);
      chimeOsc.frequency.exponentialRampToValueAtTime(2400, ctx.currentTime + 0.06);

      chimeGain.gain.setValueAtTime(0.08, ctx.currentTime);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(ctx.destination);

      osc.start();
      chimeOsc.start();

      osc.stop(ctx.currentTime + 0.08);
      chimeOsc.stop(ctx.currentTime + 0.06);
    } catch {
      // Autoplay fallback
    }
  };

  // Play Crystal Gold Chime Hover SFX
  const playCinematicHoverSfx = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(660, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(990, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Autoplay fallback
    }
  };

  // Play Cosmic Riser Scroll SFX
  const playCinematicScrollSfx = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(90, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // Autoplay fallback
    }
  };

  useEffect(() => {
    // Click & Touch Event Listener
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('input[type="range"]')
      ) {
        playCinematicClickSfx();
      }
    };

    // Hover Event Listener
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor]')
      ) {
        playCinematicHoverSfx();
      }
    };

    // Scroll Threshold Event Listener
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current > 180) {
        lastScrollTime.current = now;
        playCinematicScrollSfx();
      }
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleClick);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleClick);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
