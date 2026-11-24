'use client';

import React, { useState } from 'react';
import UniqueArrow from './UniqueArrow';
import { Calculator, Sparkles, TrendingUp, Eye, Gauge } from 'lucide-react';

export default function RoiCalculator() {
  const [budget, setBudget] = useState<number>(20000);
  const [goal, setGoal] = useState<string>('Performance Ads & Meta/Google');

  const goals = [
    'Performance Ads & Meta/Google',
    'Web & Mobile App Ecosystem',
    'Instagram Reels Viral Engine',
    'YouTube Channel 1M Scale',
    '8K Cinema Brand Film',
  ];

  // Dynamic calculations based on spend in INR (₹)
  const estimatedROAS = goal.includes('Performance') ? 4.8 : goal.includes('Web') ? 5.0 : goal.includes('Reels') ? 5.2 : 4.5;
  const estimatedRevenue = Math.round(budget * estimatedROAS);
  const estimatedImpressions = (budget * 150).toLocaleString('en-IN');

  const handleBookStrategy = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="relative w-full py-32 px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-glass p-8 md:p-14 rounded-3xl border border-gold/40 backdrop-blur-2xl shadow-[0_0_80px_rgba(212,175,55,0.2)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="w-5 h-5 text-gold" />
                <span className="text-xs font-mono text-gold-light uppercase tracking-widest">
                  GROWTH FORECASTER // ROAS CALCULATOR
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase text-white">
                CALCULATE YOUR <span className="text-metallic-gold font-light">GROWTH POTENTIAL</span>
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-xs tracking-wider">
              Adjust monthly budget (starting at ₹20,000) & campaign objective to project reach and estimated return.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-8">
              {/* Spend Slider */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 uppercase tracking-widest">MONTHLY AD & PRODUCTION BUDGET:</span>
                  <span className="text-2xl font-bold text-metallic-gold font-sans">
                    ₹{budget.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>₹20,000 / MO</span>
                  <span>₹5,00,000 / MO</span>
                  <span>₹10,00,000+ / MO</span>
                </div>
              </div>

              {/* Goal Selector */}
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  CAMPAIGN OBJECTIVE:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {goals.map((g) => (
                    <button
                      key={g}
                      onClick={() => setGoal(g)}
                      className={`p-3 rounded-xl border text-xs font-mono text-left transition-all ${
                        goal === g
                          ? 'bg-metallic-gold text-obsidian font-bold border-gold shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/40'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Result Card with Circular ROAS Gauge Meter */}
            <div className="lg:col-span-6 bg-obsidian-surface p-8 rounded-2xl border border-gold/30 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="text-[10px] font-mono text-gold-light uppercase tracking-widest flex items-center justify-between">
                <span>PROJECTED METRICS OVERVIEW</span>
                <Sparkles className="w-4 h-4 text-gold" />
              </div>

              {/* ROAS Circular Gauge Meter & Numbers */}
              <div className="flex items-center justify-around p-4 rounded-2xl bg-white/5 border border-white/10">
                {/* Circular Gauge Ring */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="38" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="transparent" />
                    <circle
                      cx="48"
                      cy="48"
                      r="38"
                      stroke="#d4af37"
                      strokeWidth="8"
                      strokeDasharray="238"
                      strokeDashoffset={238 - (238 * (estimatedROAS / 6))}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center font-mono">
                    <span className="text-xl font-bold text-white">{estimatedROAS}x</span>
                    <span className="text-[9px] text-gold uppercase">ROAS</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase">
                      <Eye className="w-3.5 h-3.5 text-gold" />
                      <span>ESTIMATED REACH</span>
                    </div>
                    <div className="text-xl font-display font-extrabold text-metallic-gold">
                      {estimatedImpressions}
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase">
                      <Gauge className="w-3.5 h-3.5 text-gold" />
                      <span>CONVERSION RATE</span>
                    </div>
                    <div className="text-sm font-mono font-bold text-white">
                      3.8% – 5.2% ESTIMATED
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-gold/10 border border-gold/30 text-center space-y-1 shadow-xl">
                <div className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">
                  PROJECTED CAMPAIGN REVENUE RETURN
                </div>
                <div className="text-4xl font-display font-extrabold text-white">
                  ₹{estimatedRevenue.toLocaleString('en-IN')}
                </div>
              </div>

              <button
                onClick={handleBookStrategy}
                className="w-full py-4 rounded-xl bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg group"
              >
                <span>INITIATE THIS STRATEGY</span>
                <UniqueArrow direction="right" className="group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
