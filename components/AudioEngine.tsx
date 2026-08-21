'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{
    subOsc?: OscillatorNode;
    highOsc?: OscillatorNode;
    lfo?: OscillatorNode;
    filter?: BiquadFilterNode;
    masterGain?: GainNode;
  }>({});

  const startCosmicSoundscape = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 3);

      // Lowpass Filter (Galaxy Resonance)
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.Q.setValueAtTime(4, ctx.currentTime);

      // LFO for Cosmic Breathing Effect
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // 0.12 Hz slow galaxy pulse
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(140, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      // Deep Sub Drone Oscillator (Cosmic Vacuum)
      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(55, ctx.currentTime); // 55Hz A1 Deep Sub

      // High Shimmer Oscillator (Stellar Resonance)
      const highOsc = ctx.createOscillator();
      highOsc.type = 'triangle';
      highOsc.frequency.setValueAtTime(220, ctx.currentTime); // 220Hz A3 Shimmer

      // Connect Nodes
      subOsc.connect(filter);
      highOsc.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(ctx.destination);

      // Start Oscillators
      subOsc.start();
      highOsc.start();
      lfo.start();

      nodesRef.current = { subOsc, highOsc, lfo, filter, masterGain };
      setIsPlaying(true);
    } catch {
      // AudioContext fallback
    }
  };

  const stopCosmicSoundscape = () => {
    try {
      if (nodesRef.current.masterGain && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        nodesRef.current.masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
        setTimeout(() => {
          nodesRef.current.subOsc?.stop();
          nodesRef.current.highOsc?.stop();
          nodesRef.current.lfo?.stop();
          audioCtxRef.current?.close();
          audioCtxRef.current = null;
          setIsPlaying(false);
        }, 1000);
      } else {
        setIsPlaying(false);
      }
    } catch {
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopCosmicSoundscape();
    } else {
      startCosmicSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      stopCosmicSoundscape();
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      <button
        onClick={toggleAudio}
        className="group relative p-3 rounded-full bg-obsidian-surface border border-gold/40 backdrop-blur-xl shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:scale-105 transition-all flex items-center gap-3"
        data-cursor="AUDIO"
      >
        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors">
          {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
        </div>

        {/* Animated Equalizer Bars */}
        <div className="flex items-center gap-1 pr-2">
          <span className={`w-0.5 rounded-full bg-gold transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse' : 'h-1.5 opacity-40'}`} />
          <span className={`w-0.5 rounded-full bg-gold transition-all duration-300 ${isPlaying ? 'h-6 animate-pulse delay-75' : 'h-2 opacity-40'}`} />
          <span className={`w-0.5 rounded-full bg-gold transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse delay-150' : 'h-1.5 opacity-40'}`} />
          <span className={`w-0.5 rounded-full bg-gold transition-all duration-300 ${isPlaying ? 'h-5 animate-pulse delay-100' : 'h-2 opacity-40'}`} />
        </div>

        <span className="text-[10px] font-mono text-gold-light uppercase tracking-widest hidden sm:inline-block pr-2">
          {isPlaying ? 'GALAXY AMBIENT ACTIVE' : 'COSMIC AUDIO'}
        </span>
      </button>
    </div>
  );
}
