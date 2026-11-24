'use client';

import React from 'react';
import KDLogo from './KDLogo';
import { Mail, Phone, Instagram, Youtube, Linkedin, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-obsidian-deep border-t border-white/10 pt-20 pb-12 px-6 md:px-12 z-10 font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <KDLogo size="lg" showText={true} />
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm font-light">
              KD MULTIMEDIA is an ultra-premium multimedia, creative production, and digital marketing studio combining visual artistry, 3D CGI, and performance acquisition strategy.
            </p>
            <div className="text-[10px] text-gold-light tracking-widest uppercase">
              WHERE VISUALS BECOME EXPERIENCES.
            </div>
          </div>

          {/* Inquiry Contact Details */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <div className="text-slate-500 uppercase tracking-widest text-[10px] mb-2">
              INQUIRY & CONTACT
            </div>

            <a
              href="mailto:kdmultimedia.co@gmail.com"
              className="flex items-center gap-3 text-slate-200 hover:text-gold transition-colors font-sans"
            >
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[9px] font-mono text-slate-400 uppercase">EMAIL INQUIRY</div>
                <div className="font-mono text-xs font-bold">kdmultimedia.co@gmail.com</div>
              </div>
            </a>

            <a
              href="tel:+917016563129"
              className="flex items-center gap-3 text-slate-200 hover:text-gold transition-colors font-sans pt-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[9px] font-mono text-slate-400 uppercase">MOBILE / PHONE</div>
                <div className="font-mono text-xs font-bold">+91 70165 63129</div>
              </div>
            </a>
          </div>

          {/* Social & SEO Quick Links */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <div className="text-slate-500 uppercase tracking-widest text-[10px] mb-2">
              SEO DIRECTORY & NETWORK
            </div>
            <div className="flex flex-col space-y-2 text-zinc-400 font-sans text-xs">
              <a href="/services" className="hover:text-gold transition-colors">All 20 Services Hub</a>
              <a href="/locations" className="hover:text-gold transition-colors">Gujarat Regional Hubs</a>
              <a href="/blog" className="hover:text-gold transition-colors">Insights & Industry Journal</a>
              <a href="/contact" className="hover:text-gold transition-colors">Contact Production Desk</a>
            </div>

            <div className="text-slate-500 uppercase tracking-widest text-[10px] pt-2 mb-2">
              CONNECT & FOLLOW
            </div>
            <div className="flex items-center gap-3">
              {[
                { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/kdmultimedia' },
                { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@kdmultimedia' },
                { name: 'LinkedIn', icon: Linkedin, href: '#' },
                { name: 'Twitter', icon: Twitter, href: '#' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-gold hover:border-gold transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
          <div>© {new Date().getFullYear()} KD MULTIMEDIA LLC. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-slate-300 transition-colors">TERMS OF SERVICE</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gold hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
