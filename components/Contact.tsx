'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import UniqueArrow from './UniqueArrow';
import KDLogo from './KDLogo';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck, X } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Full-Stack Web/App Development',
    budget: '₹1L - ₹3L',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for ESC key when Contact Modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
          setIsModalOpen(false);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = 
`*NEW PROJECT INQUIRY // KD MULTIMEDIA*

👤 *Client Name:* ${formData.name}
📱 *Phone / WhatsApp:* ${formData.phone}
📧 *Email:* ${formData.email}
🎯 *Service Required:* ${formData.service}
💰 *Estimated Budget:* ${formData.budget}
📝 *Project Details / Vision:*
${formData.message || 'Not specified'}

---
⚡ *Sent directly via kdmultimedia.in Inquiry Form*`;

    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const encoded = encodeURIComponent(whatsappMessage);
    const phone = '917016563129';

    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${phone}&text=${encoded}`;
      setTimeout(() => {
        window.location.href = `https://wa.me/${phone}?text=${encoded}`;
      }, 1000);
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`, '_blank');
    }

    // Send to backend API
    fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).catch((err) => console.error('Inquiry background sync error:', err));

    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Full-Stack Web/App Development',
        budget: '₹1L - ₹3L',
        message: '',
      });
    }, 2500);
  };

  const modalContent = isModalOpen && (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsModalOpen(false);
        }
      }}
      className="fixed inset-0 z-[9999999] bg-obsidian-deep/98 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-obsidian-surface border border-gold/50 p-6 sm:p-8 md:p-12 rounded-3xl max-w-2xl w-full relative shadow-[0_0_140px_rgba(212,175,55,0.4)] animate-fade-in my-auto">
        {/* Prominent Top-Right Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-6 right-6 text-slate-300 hover:text-white font-mono text-xs px-4 py-2 rounded-full border border-gold/40 bg-gold/10 hover:bg-gold hover:text-obsidian transition-all flex items-center gap-1.5 shadow-lg group z-20"
        >
          <X className="w-4 h-4 text-gold group-hover:text-obsidian" />
          <span>CLOSE [ESC]</span>
        </button>

        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-mono text-gold-light uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>DIRECT EXECUTIVE DESK</span>
          </div>
          <h3 className="text-3xl font-display font-extrabold text-white uppercase">
            INITIATE PROJECT <span className="text-metallic-gold font-light">BRIEF</span>
          </h3>
          <p className="text-xs font-mono text-slate-300">
            Submit your requirements. Our creative directors respond within 2 hours.
          </p>
        </div>

        {isSuccess ? (
          <div className="p-8 rounded-2xl bg-gold/10 border border-gold/40 text-center space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-gold text-obsidian mx-auto flex items-center justify-center font-bold text-xl">
              ✓
            </div>
            <h4 className="text-xl font-display font-extrabold text-gold uppercase">BRIEF SENT TO WHATSAPP</h4>
            <p className="text-xs font-mono text-slate-200">
              Thank you {formData.name}! Your inquiry has been sent to our WhatsApp desk (+91 70165 63129). Mr. Mahesh & the executive team will respond immediately.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left font-mono text-xs">
            <div>
              <label className="block text-slate-400 mb-1">FULL NAME *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full bg-obsidian border border-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 mb-1">EMAIL ADDRESS *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-obsidian border border-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">PHONE / WHATSAPP *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 70165 63129"
                  className="w-full bg-obsidian border border-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">PRIMARY SERVICE REQUIRED</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-obsidian border border-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold"
              >
                <option value="Full-Stack Web/App Development">Full-Stack Web/App Development</option>
                <option value="AI Integration & Generative Video">AI Integration & Generative Video</option>
                <option value="8K Commercial Video Shooting">8K Commercial Video Shooting</option>
                <option value="Commercial Photo Shooting & Editing">Commercial Photo Shooting & Editing</option>
                <option value="Meta & Google Ads Campaign">Meta & Google Ads Campaign</option>
                <option value="Instagram Reels & Short-Form">Instagram Reels & Short-Form</option>
                <option value="Luxury Wedding (KD Creation)">Luxury Wedding (KD Creation)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">PROJECT DETAILS / VISION</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your production or marketing goals..."
                className="w-full bg-obsidian border border-gold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-xl"
            >
              {isSubmitting ? (
                <span>OPENING WHATSAPP...</span>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4 text-obsidian" />
                  <span>SUBMIT & SEND VIA WHATSAPP (+91 70165 63129)</span>
                  <UniqueArrow direction="right" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Prominent Bottom Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="w-full mt-4 py-3 rounded-xl bg-obsidian border border-gold/40 text-gold font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-colors flex items-center justify-center gap-2"
        >
          <X className="w-4 h-4" />
          <span>CLOSE INQUIRY FORM [ESC]</span>
        </button>
      </div>
    </div>
  );

  return (
    <section id="contact" className="relative min-h-screen w-full py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-mono text-gold-light uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>12 // FINAL CLIMAX & DIRECT INQUIRY</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-display font-extrabold uppercase text-white tracking-tight">
            LET&apos;S CREATE <span className="text-metallic-gold font-light">SOMETHING ICONIC</span>
          </h2>
          <p className="text-sm font-mono text-slate-300 tracking-wider">
            Ready to elevate your brand with 8K cinema production, Adobe Creative Suite editing, or high-ROAS Meta ads?
          </p>
        </div>

        {/* Floating Official KD Emblem Lockup */}
        <div className="relative my-16 py-10 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center animate-float">
            <img
              src="/kd-symbol.png"
              alt="KD MULTIMEDIA Official Emblem"
              className="w-40 h-40 md:w-56 md:h-56 object-contain filter drop-shadow-[0_0_60px_rgba(212,175,55,0.8)] hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Compact Floating Text Lockup below Emblem */}
          <div className="mt-6 text-center space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-[9px] font-mono text-gold-light uppercase tracking-widest mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>AHMEDABAD SOUNDSTAGE DESK: LIVE (IST)</span>
            </div>

            <div className="text-2xl md:text-4xl font-display font-extrabold tracking-widest text-white uppercase text-glow-white">
              KD MULTIMEDIA
            </div>

            {/* Laser Line Divider Lockup */}
            <div className="flex items-center justify-center gap-3 pt-1">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-[11px] font-mono tracking-[0.35em] text-metallic-gold font-bold uppercase">
                PRODUCTION & MARKETING
              </span>
              <span className="h-[1px] w-12 bg-gold/60" />
            </div>
          </div>
        </div>

        {/* Central Action CTA Buttons & Quick Desk */}
        <div className="max-w-3xl mx-auto space-y-8 text-center pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-metallic-gold text-obsidian font-bold text-xs md:text-sm uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              <span>INITIATE PROJECT BRIEF</span>
              <UniqueArrow direction="right" />
            </button>

            <a
              href={`https://wa.me/917016563129?text=${encodeURIComponent(
                'Hello KD MULTIMEDIA, I would like to inquire about 8K cinema production, Adobe editing, or digital marketing services.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-5 rounded-full bg-glass border border-gold/40 text-gold font-bold text-xs md:text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gold hover:text-obsidian transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP DESK (+91 70165 63129)</span>
            </a>
          </div>

          {/* Quick Desk Contact Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-xs font-mono">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3">
              <Phone className="w-4 h-4 text-gold" />
              <span className="text-slate-200">+91 70165 63129</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3">
              <Mail className="w-4 h-4 text-gold" />
              <span className="text-slate-200">kdmultimedia.co@gmail.com</span>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="text-slate-200">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Render Modal via React Portal directly at document.body level */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </section>
  );
}
