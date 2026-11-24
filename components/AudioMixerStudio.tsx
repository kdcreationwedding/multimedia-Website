'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sliders, Music, Mic, Zap, Play, Pause, Sparkles } from 'lucide-react';

export default function AudioMixerStudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scoreVol, setScoreVol] = useState(80);
  const [foleyVol, setFoleyVol] = useState(90);
  const [voiceVol, setVoiceVol] = useState(100);
  const [ambientVol, setAmbientVol] = useState(50);
  const [activePreset, setActivePreset] = useState<'commercial' | 'wedding' | 'reels'>('commercial');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainsRef = useRef<GainNode[]>([]);

  const stopAudio = () => {
    try {
      oscillatorsRef.current.forEach((osc) => {
        try { osc.stop(); } catch (e) {}
      });
      oscillatorsRef.current = [];
      gainsRef.current = [];
      setIsPlaying(false);
    } catch (e) {}
  };

  const startAudio = () => {
    try {
      stopAudio();
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioCtxRef.current = ctx;

      // Stem 1: Cinematic Score (Warm Synth Chord)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(220, ctx.currentTime); // A3
      gain1.gain.setValueAtTime((scoreVol / 100) * 0.15, ctx.currentTime);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();

      // Stem 2: Foley / Rumbles (Low Sub-Bass Pulse)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(60, ctx.currentTime); // Sub-bass
      gain2.gain.setValueAtTime((foleyVol / 100) * 0.2, ctx.currentTime);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start();

      // Stem 3: Voiceover / High Detail (Melodic Lead)
      const osc3 = ctx.createOscillator();
      const gain3 = ctx.createGain();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(440, ctx.currentTime); // A4
      gain3.gain.setValueAtTime((voiceVol / 100) * 0.1, ctx.currentTime);
      osc3.connect(gain3);
      gain3.connect(ctx.destination);
      osc3.start();

      oscillatorsRef.current = [osc1, osc2, osc3];
      gainsRef.current = [gain1, gain2, gain3];
      setIsPlaying(true);
    } catch (e) {
      console.log('Audio Context unavailable');
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const handlePreset = (preset: 'commercial' | 'wedding' | 'reels') => {
    setActivePreset(preset);
    if (preset === 'commercial') {
      setScoreVol(90);
      setFoleyVol(85);
      setVoiceVol(100);
      setAmbientVol(40);
    } else if (preset === 'wedding') {
      setScoreVol(100);
      setFoleyVol(50);
      setVoiceVol(90);
      setAmbientVol(70);
    } else {
      setScoreVol(100);
      setFoleyVol(100);
      setVoiceVol(60);
      setAmbientVol(30);
    }
    if (isPlaying) {
      startAudio();
    }
  };

  return (
    <section className="relative w-full py-28 md:py-36 px-6 md:px-12 border-b border-gold/20 z-10 overflow-hidden bg-obsidian-surface/60 backdrop-blur-xl">
      {/* Glow Radial */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-gold/10 via-transparent to-transparent blur-[140px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
                <Music className="w-4 h-4 text-gold animate-pulse" />
                <span>ADOBE AUDITION // 4-STEM SOUNDSTAGE MASTERING DESK</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              MASTER THE <span className="text-metallic-gold font-light">SOUND DESIGN</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-300 max-w-md tracking-wider">
            Experience how KD Multimedia masters multi-channel audio: adjust orchestral scores, foley sound effects, studio voiceovers, and ambient tracks.
          </p>
        </div>

        {/* Interactive Audio Console Card */}
        <div className="bg-glass p-6 md:p-10 rounded-3xl border border-gold/40 shadow-2xl space-y-8 backdrop-blur-2xl">
          {/* Header Bar & Presets */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => (isPlaying ? stopAudio() : startAudio())}
                className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-xl ${
                  isPlaying
                    ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                    : 'bg-metallic-gold text-obsidian shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>STOP SOUNDSTAGE MASTERING</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>PLAY MULTI-STEM CINEMA AUDIO</span>
                  </>
                )}
              </button>
            </div>

            {/* Presets Selector */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-slate-400 uppercase text-[10px] tracking-widest mr-2 hidden md:inline">PRESET MIX:</span>
              {[
                { id: 'commercial', label: 'COMMERCIAL TVC' },
                { id: 'wedding', label: 'LUXURY WEDDING' },
                { id: 'reels', label: 'VIRAL REELS' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => handlePreset(p.id as any)}
                  className={`px-4 py-2 rounded-xl border text-[10px] font-bold uppercase transition-all ${
                    activePreset === p.id
                      ? 'bg-gold/20 text-gold-light border-gold shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/40'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Multi-Channel Stem Fader Sliders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stem 1: Orchestral Score */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-gold">
                  <Music className="w-4 h-4" />
                  <span className="font-bold">STEM 1 // SCORE</span>
                </div>
                <span className="text-slate-400">{scoreVol}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={scoreVol}
                onChange={(e) => setScoreVol(Number(e.target.value))}
                className="w-full accent-gold bg-obsidian rounded-lg cursor-pointer"
              />
              <div className="text-[10px] font-mono text-slate-400 uppercase">
                Orchestral Violins & Sub Brass
              </div>
            </div>

            {/* Stem 2: Foley & Sound FX */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-gold">
                  <Zap className="w-4 h-4" />
                  <span className="font-bold">STEM 2 // FOLEY & SFX</span>
                </div>
                <span className="text-slate-400">{foleyVol}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={foleyVol}
                onChange={(e) => setFoleyVol(Number(e.target.value))}
                className="w-full accent-gold bg-obsidian rounded-lg cursor-pointer"
              />
              <div className="text-[10px] font-mono text-slate-400 uppercase">
                Sub Rumbles & Camera Shutters
              </div>
            </div>

            {/* Stem 3: Voiceover & Dialogue */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-gold">
                  <Mic className="w-4 h-4" />
                  <span className="font-bold">STEM 3 // VOICE & VO</span>
                </div>
                <span className="text-slate-400">{voiceVol}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={voiceVol}
                onChange={(e) => setVoiceVol(Number(e.target.value))}
                className="w-full accent-gold bg-obsidian rounded-lg cursor-pointer"
              />
              <div className="text-[10px] font-mono text-slate-400 uppercase">
                Studio Vocal & Crystal Dialogue
              </div>
            </div>

            {/* Stem 4: Ambient Atmosphere */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-gold">
                  <Sliders className="w-4 h-4" />
                  <span className="font-bold">STEM 4 // AMBIENCE</span>
                </div>
                <span className="text-slate-400">{ambientVol}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={ambientVol}
                onChange={(e) => setAmbientVol(Number(e.target.value))}
                className="w-full accent-gold bg-obsidian rounded-lg cursor-pointer"
              />
              <div className="text-[10px] font-mono text-slate-400 uppercase">
                Crowd Cheering & Environmental Room
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>SPATIAL AUDIO // MASTERED IN ADOBE AUDITION & LOGIC PRO X</span>
            </span>
            <span className="hidden md:inline text-gold">SAMPLE RATE: 96KHZ / 24-BIT BWF</span>
          </div>
        </div>
      </div>
    </section>
  );
}
