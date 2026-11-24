'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import KDLogo from '@/components/KDLogo';
import UniqueArrow from '@/components/UniqueArrow';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import AudioEngine from '@/components/AudioEngine';
import KeyShortcutHandler from '@/components/KeyShortcutHandler';
import { Mail, Phone, Send, CheckCircle, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '₹1,00,000 — ₹2,50,000',
    service: 'Meta Ads (Facebook & Instagram Ads)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const whatsappMessage = 
`*NEW PROJECT INQUIRY // KD MULTIMEDIA*

👤 *Client Name:* ${formData.name}
📱 *Phone / WhatsApp:* ${formData.phone}
📧 *Email:* ${formData.email}
🏢 *Company / Brand:* ${formData.company || 'N/A'}
🎯 *Service Required:* ${formData.service}
💰 *Estimated Budget:* ${formData.budget}
📝 *Project Vision & Goals:*
${formData.message || 'Not specified'}

---
⚡ *Sent directly via kdmultimedia.in/contact*`;

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

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '₹1,00,000 — ₹2,50,000',
        service: 'Meta Ads (Facebook & Instagram Ads)',
        message: '',
      });
    }, 4000);
  };

  return (
    <main className="relative min-h-screen bg-obsidian text-white overflow-hidden font-sans selection:bg-gold/30">
      <CustomCursor />
      <AudioEngine />
      <KeyShortcutHandler />
      <WhatsAppWidget />
      <Navbar />

      {/* ContactPage Schema.org Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact KD Multimedia Productions',
            description: 'Direct contact desk for 8K commercial shooting, video editing, and performance marketing inquiries in Ahmedabad.',
            url: 'https://kdmultimedia.in/contact',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'KD Multimedia',
              telephone: '+917016563129',
              email: 'kdmultimedia.co@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ahmedabad',
                addressRegion: 'Gujarat',
                postalCode: '380001',
                addressCountry: 'IN',
              },
            },
          }),
        }}
      />

      <section className="relative pt-40 pb-24 px-6 md:px-12 z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-glass-gold border border-gold/20 backdrop-blur-md mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono tracking-[0.35em] text-gold-light uppercase">
                DIRECT STUDIO DESK // CONTACT US
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold tracking-tight uppercase text-white leading-tight">
              GET IN <span className="text-metallic-gold font-light">TOUCH</span>
            </h1>

            <p className="text-sm md:text-base font-mono text-slate-300 tracking-wider max-w-2xl mx-auto">
              Ready to create content and campaigns impossible to ignore? Contact our executive producer team directly or submit a project inquiry below.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a
              href="mailto:kdmultimedia.co@gmail.com"
              className="group p-8 rounded-3xl bg-glass border border-white/10 hover:border-gold/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-obsidian transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                  DIRECT EMAIL INQUIRY
                </div>
                <h3 className="text-xl font-mono font-bold text-white group-hover:text-gold-light transition-colors">
                  kdmultimedia.co@gmail.com
                </h3>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-mono text-gold-light">
                <span>SEND DIRECT MAIL</span>
                <UniqueArrow direction="up-right" className="group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>

            {/* Phone / WhatsApp Card */}
            <a
              href="tel:+917016563129"
              className="group p-8 rounded-3xl bg-glass border border-white/10 hover:border-gold/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-obsidian transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                  PHONE / WHATSAPP DESK
                </div>
                <h3 className="text-xl font-mono font-bold text-white group-hover:text-gold-light transition-colors">
                  +91 70165 63129
                </h3>
              </div>
              <div className="pt-6 flex items-center justify-between text-xs font-mono text-gold-light">
                <span>CALL / CHAT NOW</span>
                <UniqueArrow direction="up-right" className="group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </a>

            {/* Studio Hours Card */}
            <div className="p-8 rounded-3xl bg-glass border border-white/10 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">
                  STUDIO OPERATING HOURS
                </div>
                <h3 className="text-lg font-mono font-bold text-white">
                  MON – SAT // 09:00 – 20:00 IST
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">Priority Support for Active Production Shoots</p>
              </div>
              <div className="pt-6 text-xs font-mono text-gold">
                STATUS: STUDIO ONLINE
              </div>
            </div>
          </div>

          {/* Form & Brand Logo Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Brand Badge */}
            <div className="lg:col-span-5 bg-glass p-8 md:p-12 rounded-3xl border border-gold/30 backdrop-blur-2xl text-center space-y-8 flex flex-col items-center justify-center">
              <KDLogo size="hero" showText={true} layout="vertical" animated={true} />
              
              <div className="pt-6 border-t border-white/10 w-full">
                <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                  We combine visual production, full-stack web & mobile app development, cinema-grade filming & editing, 2D/3D SaaS animation, social growth, Meta/Google ads, and AI integration for high-growth brands.
                </p>
              </div>
            </div>

            {/* Right Detailed Inquiry Form */}
            <div className="lg:col-span-7 bg-obsidian-surface p-8 md:p-12 rounded-3xl border border-gold/40 shadow-2xl space-y-6">
              <div>
                <h2 className="text-3xl font-display font-extrabold text-white uppercase tracking-wide">
                  PROJECT INQUIRY FORM
                </h2>
                <p className="text-xs font-mono text-gold-light mt-1">
                  DIRECT WHATSAPP: +91 70165 63129 | EMAIL: KDMULTIMEDIA.CO@GMAIL.COM
                </p>
              </div>

              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <CheckCircle className="w-16 h-16 text-gold mx-auto animate-bounce" />
                  <h3 className="text-3xl font-display font-bold text-white uppercase">
                    INQUIRY TRANSMITTED TO WHATSAPP
                  </h3>
                  <p className="text-sm font-mono text-slate-300">
                    WhatsApp is opening with your project brief. Mr. Mahesh & the executive team will respond to you immediately!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                        YOUR FULL NAME *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold font-sans"
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold font-sans"
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
                        placeholder="+91 70165 63129"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold font-sans"
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
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold font-sans"
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
                        className="w-full bg-obsidian border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold font-sans"
                      >
                        <option value="Full-Stack Web Development & Design">Full-Stack Web Development & Design</option>
                        <option value="iOS & Android Mobile App Development">iOS & Android Mobile App Development</option>
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
                        className="w-full bg-obsidian border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold font-sans"
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
                      PROJECT VISION & GOALS
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe your production, animation, or marketing campaign objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-gold font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-xl bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg group"
                  >
                    <MessageCircle className="w-4 h-4 text-obsidian" />
                    <span>SEND DIRECT INQUIRY VIA WHATSAPP (+91 70165 63129)</span>
                    <UniqueArrow direction="right" className="group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
