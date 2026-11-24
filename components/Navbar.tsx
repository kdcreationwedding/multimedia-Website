'use client';

import React, { useState, useEffect } from 'react';
import KDLogo from './KDLogo';
import UniqueArrow from './UniqueArrow';
import LoginModal from './LoginModal';
import { Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SERVICES', href: '/services' },
    { name: 'PORTFOLIO', href: '/#portfolio' },
    { name: 'LOCATIONS', href: '/locations' },
    { name: 'INSIGHTS', href: '/blog' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-obsidian-deep/80 backdrop-blur-2xl border-b border-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo Component - Navigates directly to Home Page (/) */}
          <a href="/" className="flex items-center gap-2 group cursor-pointer" data-cursor="KD HOME">
            <KDLogo size="nav" showText={true} layout="horizontal" animated={true} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 bg-glass border border-gold/20 px-8 py-3 rounded-full backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-widest text-slate-300 hover:text-gold transition-colors duration-300 relative group flex items-center gap-1.5"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-metallic-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action CTA & Login Portal */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-gold/10 hover:border-gold/40 text-xs font-mono text-slate-200 transition-all flex items-center gap-2"
            >
              <User className="w-3.5 h-3.5 text-gold" />
              <span>CLIENT LOGIN</span>
            </button>

            <a
              href="/contact"
              className="group relative px-6 py-2.5 rounded-full border border-gold bg-glass-gold overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center gap-2"
              data-cursor="INQUIRE"
            >
              <span className="text-xs font-mono font-bold tracking-widest text-gold-light uppercase">
                INITIATE PROJECT
              </span>
              <UniqueArrow direction="right" className="group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-glass border border-gold/30 text-gold"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian-deep/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden">
          <a href="/" onClick={() => setMobileMenuOpen(false)}>
            <KDLogo size="hero" showText={true} layout="vertical" animated={true} />
          </a>
          
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-mono tracking-widest text-slate-200 hover:text-gold uppercase"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsLoginOpen(true);
              }}
              className="px-6 py-3 rounded-full border border-gold/40 bg-gold/10 text-xs font-mono text-gold flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>CLIENT LOGIN PORTAL</span>
            </button>
          </div>
        </div>
      )}

      {/* Login Portal Drawer */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
