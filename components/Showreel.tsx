'use client';

import React, { useState } from 'react';
import { Play, X, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Cinematic high-res demo stream video URL
  const videoSrc = "https://assets.mixkit.co/videos/preview/mixkit-camera-lens-zooming-in-and-out-41474-large.mp4";

  return (
    <section className="relative min-h-screen w-full py-32 px-6 md:px-12 z-10 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* Section Header */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-gold/60" />
          <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase">
            04 // CINEMATIC REEL
          </span>
          <span className="h-[1px] w-12 bg-gold/60" />
        </div>

        <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tight uppercase text-white mb-12">
          PLAY THE <span className="text-metallic-gold font-light">WORK.</span>
        </h2>

        {/* Premium Video Frame Trigger */}
        <div
          onClick={() => setIsPlaying(true)}
          className="group relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-3xl overflow-hidden border border-gold/30 bg-obsidian-card backdrop-blur-xl shadow-[0_0_80px_rgba(212,175,55,0.2)] cursor-pointer flex items-center justify-center transition-all duration-700 hover:scale-[1.02] hover:border-gold"
          data-cursor="PLAY REEL"
        >
          {/* Subtle Ambient Video Preview Poster */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 filter brightness-90 saturate-125"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Film Grain & Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian/40 to-transparent" />

          {/* Large Cinematic Play Button */}
          <div className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gold/20 backdrop-blur-md border border-gold/60 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-gold group-hover:text-obsidian transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.4)]">
            <Play className="w-10 h-10 sm:w-14 sm:h-14 fill-current translate-x-1" />
          </div>

          {/* Reel Info Floating Overlay */}
          <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-xs font-mono tracking-widest text-slate-300 uppercase z-10">
            <span>KD SHOWREEL // 2026 EDITION</span>
            <span className="text-gold">4K ULTRA HD • 60 FPS</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Cinematic Video Player Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-[10000] bg-obsidian-deep/98 backdrop-blur-3xl flex flex-col justify-between p-6 animate-fade-in">
          {/* Custom Player Top Bar */}
          <div className="flex items-center justify-between text-white relative z-20">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-mono tracking-widest text-gold uppercase">
                NOW PLAYING // KD MULTIMEDIA OFFICIAL SHOWREEL
              </span>
            </div>

            <button
              onClick={() => setIsPlaying(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-gold hover:text-obsidian text-white transition-colors duration-300 flex items-center gap-2 text-xs font-mono"
            >
              <X className="w-5 h-5" />
              <span className="hidden sm:inline">EXIT [ESC]</span>
            </button>
          </div>

          {/* Center Main Video Stream */}
          <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 my-auto">
            <video
              autoPlay
              controls
              muted={isMuted}
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>

          {/* Bottom Player Controls */}
          <div className="flex items-center justify-between max-w-6xl mx-auto w-full text-slate-400 font-mono text-xs relative z-20">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="hover:text-gold transition-colors flex items-center gap-2"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-gold" />}
                <span>{isMuted ? 'UNMUTE' : 'MUTED'}</span>
              </button>
            </div>

            <span>CINEMATIC AUDIO ENGINE ACTIVE</span>
          </div>
        </div>
      )}
    </section>
  );
}
