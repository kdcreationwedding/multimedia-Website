'use client';

import React, { useState } from 'react';
import KDLogo from './KDLogo';
import UniqueArrow from './UniqueArrow';
import { X, Lock, Mail, Eye, EyeOff, CheckCircle, ShieldCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setIsLoggedIn(true);
      setTimeout(() => {
        setIsLoggedIn(false);
        onClose();
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-obsidian-deep/95 backdrop-blur-2xl flex items-center justify-center p-6 text-left">
      <div className="bg-obsidian-surface border border-gold/50 p-8 md:p-12 rounded-3xl max-w-md w-full relative shadow-[0_0_80px_rgba(212,175,55,0.3)] animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1"
        >
          <X className="w-3.5 h-3.5" />
          <span>CLOSE</span>
        </button>

        {isLoggedIn ? (
          <div className="py-12 text-center space-y-4">
            <ShieldCheck className="w-16 h-16 text-gold mx-auto animate-bounce" />
            <h3 className="text-2xl font-display font-extrabold text-white uppercase">
              ACCESS GRANTED
            </h3>
            <p className="text-xs font-mono text-gold-light">
              Welcome to KD Client Production Hub.
            </p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="text-center space-y-2">
              <KDLogo size="md" showText={true} layout="vertical" />
              <div className="pt-2 text-[10px] font-mono tracking-[0.35em] text-gold-light uppercase">
                CLIENT & STUDIO PORTAL // LOGIN
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  CLIENT EMAIL / ACCESS ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type="email"
                    placeholder="client@brand.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  PASSWORD
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-11 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-gold rounded" defaultChecked />
                  <span>REMEMBER DEVICE</span>
                </label>
                <a href="#" className="hover:text-gold transition-colors">FORGOT PASSWORD?</a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-4 rounded-xl bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg group"
            >
              <span>{isLoggingIn ? 'AUTHENTICATING...' : 'ENTER CLIENT PORTAL'}</span>
              <UniqueArrow direction="right" className="group-hover:translate-x-1" />
            </button>

            <div className="text-center text-[10px] font-mono text-slate-500">
              Need client portal access? Email <a href="mailto:kdmultimedia.co@gmail.com" className="text-gold">kdmultimedia.co@gmail.com</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
