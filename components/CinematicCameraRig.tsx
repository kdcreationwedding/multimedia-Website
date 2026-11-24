'use client';

import React, { useState } from 'react';
import { Camera, Sliders, Play, Volume2, Sparkles, Film, Disc } from 'lucide-react';

export default function CinematicCameraRig() {
  const [aspectRatio, setAspectRatio] = useState<'2.39:1' | '16:9' | '9:16'>('2.39:1');
  const [colorProfile, setColorProfile] = useState<'kd-gold' | 'hdr-vivid' | 'mono-noir'>('kd-gold');
  const [fps, setFps] = useState<24 | 60 | 120>(24);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sample video frames matching aspect ratio & profile
  const sampleVideos = {
    '2.39:1': 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    '16:9': 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop',
    '9:16': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  };

  const getProfileFilter = () => {
    switch (colorProfile) {
      case 'hdr-vivid':
        return 'contrast-125 saturate-150 brightness-105';
      case 'mono-noir':
        return 'grayscale contrast-150 brightness-90';
      default:
        return 'contrast-110 sepia-[0.15] hue-rotate-[-10deg] brightness-100';
    }
  };

  const playShutterSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.1);

      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.log('Audio Context unavailable');
    }
  };

  return (
    <section className="relative w-full py-28 md:py-36 px-6 md:px-12 border-b border-gold/20 z-10 overflow-hidden bg-obsidian-surface/80 backdrop-blur-xl">
      {/* Glow Radial */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-gold/10 via-transparent to-transparent blur-[160px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
                <Camera className="w-4 h-4 text-gold animate-pulse" />
                <span>INTERACTIVE CINEMA RIG // LIVE VIEWFINDER CONTROLLER</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              CONTROL THE <span className="text-metallic-gold font-light">CAMERA RIG</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-300 max-w-md tracking-wider">
            Test KD Multimedia&apos;s live 8K cinema viewfinder controls: switch anamorphic aspect ratios, color grading profiles, and frame rates in real-time.
          </p>
        </div>

        {/* Live Interactive Viewfinder Container */}
        <div className="bg-glass p-6 md:p-10 rounded-3xl border border-gold/40 shadow-2xl space-y-8 backdrop-blur-2xl">
          {/* Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs">
            {/* 1. Aspect Ratio Selector */}
            <div className="space-y-2">
              <div className="text-slate-400 uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-gold" />
                <span>1. ANAMORPHIC RATIO</span>
              </div>
              <div className="flex gap-2">
                {(['2.39:1', '16:9', '9:16'] as const).map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => {
                      setAspectRatio(ratio);
                      playShutterSound();
                    }}
                    className={`flex-1 py-2 rounded-lg border text-[11px] font-bold uppercase transition-all ${
                      aspectRatio === ratio
                        ? 'bg-metallic-gold text-obsidian border-gold shadow-md'
                        : 'bg-obsidian/60 border-white/10 text-slate-300 hover:border-gold/40'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Color Profile LUT Selector */}
            <div className="space-y-2">
              <div className="text-slate-400 uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>2. COLOR LUT SCIENCE</span>
              </div>
              <div className="flex gap-2">
                {[
                  { id: 'kd-gold', label: 'KD GOLD LOG' },
                  { id: 'hdr-vivid', label: 'HDR VIVID' },
                  { id: 'mono-noir', label: 'MONO NOIR' },
                ].map((lut) => (
                  <button
                    key={lut.id}
                    onClick={() => {
                      setColorProfile(lut.id as any);
                      playShutterSound();
                    }}
                    className={`flex-1 py-2 rounded-lg border text-[10px] font-bold uppercase transition-all ${
                      colorProfile === lut.id
                        ? 'bg-metallic-gold text-obsidian border-gold shadow-md'
                        : 'bg-obsidian/60 border-white/10 text-slate-300 hover:border-gold/40'
                    }`}
                  >
                    {lut.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Frame Rate Selector */}
            <div className="space-y-2">
              <div className="text-slate-400 uppercase text-[10px] tracking-widest flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-gold" />
                <span>3. FRAME RATE (FPS)</span>
              </div>
              <div className="flex gap-2">
                {([24, 60, 120] as const).map((rate) => (
                  <button
                    key={rate}
                    onClick={() => {
                      setFps(rate);
                      playShutterSound();
                    }}
                    className={`flex-1 py-2 rounded-lg border text-[11px] font-bold uppercase transition-all ${
                      fps === rate
                        ? 'bg-metallic-gold text-obsidian border-gold shadow-md'
                        : 'bg-obsidian/60 border-white/10 text-slate-300 hover:border-gold/40'
                    }`}
                  >
                    {rate} FPS
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Simulated 8K Camera Viewfinder Display */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gold/50 bg-obsidian-deep flex items-center justify-center shadow-2xl group">
            {/* Viewfinder Overlay HUD */}
            <div className="absolute inset-0 pointer-events-none z-20 p-6 flex flex-col justify-between border-[12px] border-obsidian-deep/80">
              {/* Top HUD */}
              <div className="flex items-center justify-between font-mono text-[10px] text-gold-light tracking-widest">
                <div className="flex items-center gap-2 bg-obsidian-deep/80 px-3 py-1 rounded-md border border-gold/30">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="font-bold text-red-400">REC [8K RAW]</span>
                </div>
                <div className="flex items-center gap-4 bg-obsidian-deep/80 px-3 py-1 rounded-md border border-gold/30">
                  <span>FPS: {fps}</span>
                  <span>ISO: 800</span>
                  <span>RATIO: {aspectRatio}</span>
                  <span>LUT: {colorProfile.toUpperCase()}</span>
                </div>
              </div>

              {/* Viewfinder Center Crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
              </div>

              {/* Bottom HUD */}
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-300">
                <div className="bg-obsidian-deep/80 px-3 py-1 rounded-md border border-white/10">
                  BATTERY: 98% // MEDIA: 1.2 TB FREE
                </div>
                <div className="bg-obsidian-deep/80 px-3 py-1 rounded-md border border-white/10 text-gold">
                  KD MULTIMEDIA CINEMA RIG v2.4
                </div>
              </div>
            </div>

            {/* Frame Image Container with Dynamic Aspect Masking */}
            <div
              className={`relative transition-all duration-700 overflow-hidden flex items-center justify-center ${
                aspectRatio === '2.39:1'
                  ? 'w-full h-[65%]'
                  : aspectRatio === '9:16'
                  ? 'w-[35%] h-full'
                  : 'w-full h-full'
              }`}
            >
              <img
                src={sampleVideos[aspectRatio]}
                alt="8K Cinema Viewfinder Sample"
                className={`w-full h-full object-cover transition-all duration-500 ${getProfileFilter()}`}
              />
            </div>
          </div>

          {/* Interactive Trigger Sound Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <Disc className="w-4 h-4 text-gold animate-spin-slow" />
              <span>TEST SHUTTER AUDIO & COLOR SCIENCE IN REAL-TIME</span>
            </div>

            <button
              onClick={playShutterSound}
              className="px-6 py-3 rounded-xl bg-obsidian border border-gold text-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-gold hover:text-obsidian transition-colors shadow-lg"
            >
              <Volume2 className="w-4 h-4" />
              <span>TRIGGER 8K SHUTTER SOUND EFFECT</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
