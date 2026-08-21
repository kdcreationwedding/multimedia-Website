'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import KDLogo from './KDLogo';
import UniqueArrow from './UniqueArrow';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '₹1,00,000 — ₹2,50,000',
    service: 'Meta Ads (Facebook & Instagram Ads)',
    message: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for ESC key when Inquiry Modal is open
  useEffect(() => {
    if (isInquiryOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
          setIsInquiryOpen(false);
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
  }, [isInquiryOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const mailtoSubject = encodeURIComponent(`New Inquiry from ${formData.name} (${formData.company || 'Individual'})`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nBudget: ${formData.budget}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );

    window.open(`mailto:kdmultimedia.co@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');

    setTimeout(() => {
      setSubmitted(false);
      setIsInquiryOpen(false);
    }, 3000);
  };

  const modalContent = isInquiryOpen && (
    <div
      onClick={(e) => {
        // Close if backdrop clicked outside modal
        if (e.target === e.currentTarget) {
          setIsInquiryOpen(false);
        }
      }}
      className="fixed inset-0 z-[9999999] bg-obsidian-deep flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-obsidian-surface border border-gold/50 p-6 sm:p-8 md:p-12 rounded-3xl max-w-2xl w-full relative shadow-[0_0_120px_rgba(212,175,55,0.4)] animate-fade-in my-auto">
        <button
          onClick={() => setIsInquiryOpen(false)}
          className="absolute top-6 right-6 text-slate-400 hover:text-white font-mono text-xs px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-gold/50 transition-colors"
        >
          CLOSE [ESC / X]
        </button>

        {submitted ? (
          <div className="py-16 text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-gold mx-auto animate-bounce" />
            <h3 className="text-3xl font-display font-bold text-white uppercase">
              INQUIRY TRANSMITTED
            </h3>
            <p className="text-sm font-mono text-slate-300">
              Your mail app has been launched to send your details to <span className="text-gold">kdmultimedia.co@gmail.com</span>. Our team will get back to you shortly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-2xl font-display font-extrabold text-white uppercase tracking-wide">
                INITIATE A PROJECT INQUIRY
              </h3>
              <p className="text-xs font-mono text-gold-light mt-1">
                DIRECT EMAIL: KDMULTIMEDIA.CO@GMAIL.COM | CALL: +91 90330 32926
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  YOUR NAME *
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  EMAIL ADDRESS *
                </label>
                <input
                  required
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  MOBILE / PHONE NUMBER *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 90330 32926"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
                />
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  COMPANY / BRAND NAME
                </label>
                <input
                  type="text"
                  placeholder="Brand Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  SELECT CAPABILITY
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
                >
                  <option value="Meta Ads (Facebook & Instagram Ads)">Meta Ads (Facebook & Instagram Ads)</option>
                  <option value="Google Ads & Performance Max (PMax)">Google Ads & Performance Max (PMax)</option>
                  <option value="SEO & Search Engine Dominance">SEO & Search Engine Dominance</option>
                  <option value="AI Integration & Generative Production">AI Integration & Generative Production</option>
                  <option value="SaaS & 3D Product Animation">SaaS & 3D Product Animation</option>
                  <option value="Commercial & Product Photography">Commercial & Product Photography</option>
                  <option value="Professional Videography & TV Commercials">Professional Videography & TV Commercials</option>
                  <option value="Video Editing & Motion FX">Video Editing & Motion FX</option>
                  <option value="Instagram Reels & Viral Short-Form">Instagram Reels & Viral Short-Form</option>
                  <option value="YouTube Ecosystem & Channel Growth">YouTube Ecosystem & Channel Growth</option>
                  <option value="Social Media Management">Social Media Management</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                  ESTIMATED BUDGET (IN INR)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-obsidian border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
                >
                  <option value="₹1,00,000 — ₹2,50,000">₹1,00,000 — ₹2,50,000 (₹1 L – ₹2.5 L)</option>
                  <option value="₹2,50,000 — ₹5,00,000">₹2,50,000 — ₹5,00,000 (₹2.5 L – ₹5 L)</option>
                  <option value="₹5,00,000 — ₹10,00,000">₹5,00,000 — ₹10,00,000 (₹5 L – ₹10 L)</option>
                  <option value="₹10,00,000+">₹10,00,000+ (₹10 Lakhs+)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                PROJECT VISION & DETAILS
              </label>
              <textarea
                rows={4}
                placeholder="Describe your goals or project requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>SEND INQUIRY TO KDMULTIMEDIA.CO@GMAIL.COM</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );

  return (
    <section id="contact" className="relative min-h-screen w-full py-36 px-6 md:px-12 z-10 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute w-[800px] h-[800px] bg-gradient-radial from-gold/15 via-gold/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-12">
        {/* The KD Orbit locks precisely around this centered KD Logo */}
        <div className="inline-flex flex-col items-center justify-center p-8 md:p-12 rounded-full bg-glass border border-gold/40 shadow-[0_0_60px_rgba(212,175,55,0.3)] animate-pulse-glow">
          <KDLogo size="hero" showText={true} layout="vertical" animated={true} />
        </div>

        <div className="space-y-4">
          <div className="text-xs font-mono tracking-[0.4em] text-gold-light uppercase">
            10 // FINAL CLIMAX & INQUIRY
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight uppercase text-white leading-tight">
            LET'S CREATE SOMETHING <br />
            <span className="text-metallic-gold font-light tracking-wide text-glow">
              IMPOSSIBLE TO IGNORE.
            </span>
          </h2>
        </div>

        {/* Direct Contact Info Bar (Email & Phone) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full pt-4">
          {/* Email Direct Contact Card */}
          <a
            href="mailto:kdmultimedia.co@gmail.com"
            className="group p-5 rounded-2xl bg-glass border border-white/10 hover:border-gold/60 backdrop-blur-xl transition-all duration-300 flex items-center justify-between text-left"
            data-cursor="EMAIL US"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  DIRECT EMAIL INQUIRY
                </div>
                <div className="text-sm font-mono font-bold text-white group-hover:text-gold-light transition-colors">
                  kdmultimedia.co@gmail.com
                </div>
              </div>
            </div>
            <UniqueArrow direction="up-right" className="group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          {/* Phone Direct Contact Card */}
          <a
            href="tel:+919033032926"
            className="group p-5 rounded-2xl bg-glass border border-white/10 hover:border-gold/60 backdrop-blur-xl transition-all duration-300 flex items-center justify-between text-left"
            data-cursor="CALL US"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  DIRECT PHONE / WHATSAPP
                </div>
                <div className="text-sm font-mono font-bold text-white group-hover:text-gold-light transition-colors">
                  +91 90330 32926
                </div>
              </div>
            </div>
            <UniqueArrow direction="up-right" className="group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          <button
            onClick={() => setIsInquiryOpen(true)}
            className="group relative px-10 py-5 rounded-full overflow-hidden border border-gold bg-metallic-gold text-obsidian font-bold text-xs sm:text-sm uppercase tracking-[0.25em] shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-105 flex items-center gap-3"
            data-cursor="START"
          >
            <span>SUBMIT DETAILED INQUIRY →</span>
          </button>
        </div>
      </div>

      {/* Render Modal via React Portal directly at document.body level */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </section>
  );
}
