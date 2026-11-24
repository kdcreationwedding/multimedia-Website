'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, Filter } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
  tag: 'SHOOTING' | 'EDITING' | 'TURNAROUND' | 'MARKETING' | 'WEDDING';
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTag, setActiveTag] = useState<string>('ALL');

  const faqs: FaqItem[] = [
    {
      tag: 'SHOOTING',
      category: 'PRODUCTION & SHOOTING',
      question: 'What camera equipment & shooting formats do you use for commercial shoots in Ahmedabad?',
      answer: 'We shoot on high-end 8K cinema camera rigs, anamorphic prime lenses, 4K FPV drones, and professional soundstage lighting setups. All footage is captured in 8K/4K RAW or Log formats for maximum dynamic range and cinematic color grading in post-production.',
    },
    {
      tag: 'EDITING',
      category: 'EDITING & POST-PRODUCTION',
      question: 'Which software suites do you use for video editing & motion graphics?',
      answer: 'Our primary post-production suite is Adobe Creative Suite (Adobe Premiere Pro 8K for multitrack editing, Adobe After Effects for 2D/3D kinetic motion graphics, Photoshop & Illustrator for graphics, and Audition for audio mastering). We also utilize DaVinci Resolve Studio for HDR color grading.',
    },
    {
      tag: 'TURNAROUND',
      category: 'TURNAROUND & DELIVERABLES',
      question: 'What is the typical turnaround time for a commercial film or project?',
      answer: 'Short-form Instagram Reels & ad creatives are delivered within 48 to 72 hours. Full commercial brand films, documentary edits, and multi-camera event productions typically take 7 to 14 business days including color grading and client revisions.',
    },
    {
      tag: 'MARKETING',
      category: 'PERFORMANCE MARKETING & ADS',
      question: 'Do you manage Meta (Facebook/Instagram) & Google Paid Ad campaigns in Ahmedabad?',
      answer: 'Yes! We engineer end-to-end direct-response Meta Advantage+ Shopping Campaigns (ASC) and Google Performance Max (PMax) ads. We combine high-converting 8K ad creatives with pixel tracking, custom lookalike audiences, and ROAS optimization.',
    },
    {
      tag: 'WEDDING',
      category: 'LUXURY WEDDING DIVISION',
      question: 'How does KD Creation handle luxury wedding photography & cinematography in Gujarat?',
      answer: 'KD Creation is our dedicated luxury wedding division. We specialize in royal destination weddings, candid photography, cinematic film teasers, FPV drone highlights, and custom flush-mount photobooks across Ahmedabad, Gujarat, and India (visit kdcreations.in).',
    },
  ];

  const filteredFaqs = activeTag === 'ALL' ? faqs : faqs.filter((f) => f.tag === activeTag);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative w-full py-28 md:py-36 px-6 md:px-12 border-b border-gold/20 z-10 overflow-hidden bg-obsidian-surface/60 backdrop-blur-xl">
      {/* Dynamic FAQPage JSON-LD Schema Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-gradient-radial from-gold/10 via-transparent to-transparent blur-[140px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-mono text-gold-light uppercase tracking-widest">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span>11.5 // CLIENT KNOWLEDGE BASE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold uppercase text-white tracking-tight">
            FREQUENTLY ASKED <span className="text-metallic-gold font-light">QUESTIONS</span>
          </h2>
          <p className="text-sm font-mono text-slate-300 tracking-wider max-w-xl mx-auto">
            Everything you need to know about our 8K shooting pipelines, Adobe editing workflows, pricing, and campaign delivery.
          </p>
        </div>

        {/* Instant Topic Filter Tags Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-white/10">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5 text-gold" />
            <span>TOPIC:</span>
          </span>
          {[
            { id: 'ALL', label: '#ALL QUESTIONS' },
            { id: 'SHOOTING', label: '#8K SHOOTING' },
            { id: 'EDITING', label: '#ADOBE EDITING' },
            { id: 'TURNAROUND', label: '#DELIVERY SPEED' },
            { id: 'MARKETING', label: '#META & GOOGLE ADS' },
            { id: 'WEDDING', label: '#LUXURY WEDDINGS' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTag(t.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase transition-all ${
                activeTag === t.id
                  ? 'bg-metallic-gold text-obsidian font-bold border-gold shadow-md'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/40'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-glass border border-gold/30 hover:border-gold/60 backdrop-blur-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 md:p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-gold-light uppercase tracking-widest font-bold">
                      {faq.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-extrabold text-white uppercase group-hover:text-metallic-gold transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-gold text-obsidian' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-8 text-slate-300 font-sans text-sm font-light leading-relaxed border-t border-white/10 pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
