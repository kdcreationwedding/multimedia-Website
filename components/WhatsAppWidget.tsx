'use client';

import React, { useState } from 'react';
import UniqueArrow from './UniqueArrow';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phone = '7016563129';
  const whatsappUrl = `https://wa.me/917016563129?text=${encodeURIComponent(
    'Hello KD MULTIMEDIA, I would like to inquire about production & digital marketing services.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Action Panel */}
      {isOpen && (
        <div className="mb-4 bg-obsidian-surface border border-gold/40 p-6 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.3)] backdrop-blur-2xl max-w-xs w-full text-left space-y-4 animate-fade-in">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <div className="text-[10px] font-mono tracking-widest text-gold uppercase font-bold">
                KD DIRECT DESK
              </div>
              <div className="text-xs text-slate-300 font-sans font-light">
                Instant Studio Connect
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* WhatsApp Link */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-white/5 hover:bg-gold/15 border border-white/10 hover:border-gold/50 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase">WHATSAPP CHAT</div>
                  <div className="text-xs font-mono font-bold text-white">+91 70165 63129</div>
                </div>
              </div>
              <UniqueArrow direction="up-right" />
            </a>

            {/* Direct Phone Link */}
            <a
              href={`tel:+91${phone}`}
              className="group p-3 rounded-xl bg-white/5 hover:bg-gold/15 border border-white/10 hover:border-gold/50 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/20 text-gold flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase">DIRECT PHONE</div>
                  <div className="text-xs font-mono font-bold text-white">+91 70165 63129</div>
                </div>
              </div>
              <UniqueArrow direction="up-right" />
            </a>

            {/* Direct Email Link */}
            <a
              href="mailto:kdmultimedia.co@gmail.com"
              className="group p-3 rounded-xl bg-white/5 hover:bg-gold/15 border border-white/10 hover:border-gold/50 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-slate-400 uppercase">EMAIL DESK</div>
                  <div className="text-xs font-mono font-bold text-white">kdmultimedia.co@gmail.com</div>
                </div>
              </div>
              <UniqueArrow direction="up-right" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-3 rounded-full bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest flex items-center gap-3 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 border border-gold-light"
        data-cursor="CONNECT"
      >
        <span className="w-2 h-2 rounded-full bg-obsidian animate-ping" />
        <span>INSTANT INQUIRY</span>
        <MessageCircle className="w-4 h-4 fill-current" />
      </button>
    </div>
  );
}
