import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { servicesData, ServiceDetail } from '@/data/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import AudioEngine from '@/components/AudioEngine';
import KeyShortcutHandler from '@/components/KeyShortcutHandler';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import UniqueArrow from '@/components/UniqueArrow';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Clock,
  Zap,
  ChevronRight,
  MessageCircle,
  Phone,
  ArrowRight,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found | KD Multimedia' };
  }

  const pageUrl = `https://www.kdmultimedia.in/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: pageUrl,
      siteName: 'KD MULTIMEDIA',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: 'https://www.kdmultimedia.in/og-image.jpg',
          width: 1200,
          height: 630,
          alt: service.h1,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDesc,
      images: ['https://www.kdmultimedia.in/og-image.jpg'],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.kdmultimedia.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.kdmultimedia.in/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://www.kdmultimedia.in/services/${service.slug}`,
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'KD Multimedia Productions',
      telephone: '+917016563129',
      url: 'https://www.kdmultimedia.in',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Gujarat',
    },
    description: service.shortDesc,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const whatsappInquiryUrl = `https://api.whatsapp.com/send?phone=917016563129&text=${encodeURIComponent(
    `Hello KD Multimedia! I want to inquire about *${service.title}* in Ahmedabad. Please share availability & package details.`
  )}`;

  const relatedServices = servicesData.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <main className="relative min-h-screen bg-obsidian text-white overflow-hidden font-sans selection:bg-gold/30">
      <CustomCursor />
      <AudioEngine />
      <KeyShortcutHandler />
      <WhatsAppWidget />
      <Navbar />

      {/* Schema Microdata */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 z-10 border-b border-gold/20">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link href="/" className="hover:text-gold transition-colors">HOME</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
            <Link href="/services" className="hover:text-gold transition-colors">SERVICES</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold/60" />
            <span className="text-gold font-bold uppercase">{service.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-mono text-gold-light uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>OFFICIAL STUDIO SERVICE // AHMEDABAD & GUJARAT</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
                {service.h1}
              </h1>
              <p className="text-sm md:text-base font-mono text-slate-300 max-w-2xl leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            {/* Quick Service Meta Box */}
            <div className="bg-glass p-6 rounded-2xl border border-gold/30 space-y-3 min-w-[280px]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">TURNAROUND:</span>
                <span className="text-gold font-bold">{service.turnaroundTime}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 uppercase">PRICING:</span>
                <span className="text-white font-bold">{service.pricingEstimate}</span>
              </div>
              <div className="pt-2 border-t border-white/10">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>BOOK INQUIRY VIA WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware & Spec Highlight Banner */}
      <section className="py-6 px-6 md:px-12 bg-obsidian-surface border-b border-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-gold">
            <Zap className="w-4 h-4 fill-current" />
            <span className="font-bold uppercase">EQUIPMENT & CAPABILITY:</span>
          </div>
          <div className="text-slate-300 tracking-wider text-center md:text-right">
            {service.hardwareHighlight}
          </div>
        </div>
      </section>

      {/* Deliverables & Production Pipeline */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
        {/* Core Deliverables */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-mono text-gold-light uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>WHAT WE DELIVER</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase text-white">
              KEY PROJECT <span className="text-metallic-gold font-light">DELIVERABLES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((d, i) => (
              <div key={i} className="p-6 rounded-2xl bg-glass border border-white/10 flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-white uppercase">{d}</h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">Master quality files formatted for TV, social, and digital deployment.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Production Pipeline */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-mono text-gold-light uppercase tracking-widest flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              <span>PROVEN METHODOLOGY</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase text-white">
              HOW WE <span className="text-metallic-gold font-light">EXECUTE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.pipelineSteps.map((step, i) => (
              <div key={i} className="p-6 rounded-2xl bg-glass border border-gold/30 space-y-4">
                <div className="text-3xl font-display font-extrabold text-gold opacity-80">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-display font-bold text-white uppercase">{step.title}</h3>
                <p className="text-xs font-sans text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs Section */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-mono text-gold-light uppercase tracking-widest flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-gold" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase text-white">
              CLIENT <span className="text-metallic-gold font-light">KNOWLEDGE BASE</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl bg-glass border border-white/10 space-y-2">
                <h3 className="text-lg font-display font-bold text-white uppercase">{faq.question}</h3>
                <p className="text-sm font-sans text-slate-300 font-light leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        <div className="space-y-6 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold text-white uppercase">EXPLORE COMPLEMENTARY CAPABILITIES</h3>
            <Link href="/services" className="text-xs font-mono text-gold hover:underline flex items-center gap-1">
              <span>VIEW ALL 20 SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedServices.map((rel, i) => (
              <Link
                key={i}
                href={`/services/${rel.slug}`}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all group"
              >
                <div className="text-[10px] font-mono text-gold uppercase mb-1">SERVICE</div>
                <div className="text-sm font-display font-bold text-white uppercase group-hover:text-gold-light transition-colors">
                  {rel.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Direct Action Climax Box */}
        <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-r from-gold/15 via-gold/5 to-obsidian-surface border border-gold/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono tracking-widest text-gold uppercase block">DIRECT STUDIO INTAKE</span>
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white uppercase">
              READY TO INITIATE YOUR {service.title.toUpperCase()}?
            </h3>
            <p className="text-xs font-mono text-slate-300">
              Speak directly with Mr. Mahesh & executive producers on WhatsApp desk (+91 70165 63129).
            </p>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 rounded-full bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_35px_rgba(212,175,55,0.4)] whitespace-nowrap flex items-center gap-3"
          >
            <span>SEND WHATSAPP INQUIRY</span>
            <UniqueArrow direction="right" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
