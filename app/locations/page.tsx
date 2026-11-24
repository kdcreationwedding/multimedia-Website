import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { locationsData } from '@/data/locationsData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { MapPin, ArrowRight, Video, TrendingUp, ShieldCheck, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gujarat Regional Production Hubs & Marketing Offices | KD MULTIMEDIA',
  description:
    'KD MULTIMEDIA operates across major commercial hubs in Gujarat: Ahmedabad, Gandhinagar (GIFT City), Surat, Vadodara, and Rajkot. 8K Video Production & Performance Ads.',
  alternates: {
    canonical: 'https://www.kdmultimedia.in/locations',
  },
  openGraph: {
    title: 'Gujarat Regional Production Hubs | KD MULTIMEDIA',
    description: 'Serving Ahmedabad, Gandhinagar, Surat, Vadodara & Rajkot with 8K Cinema & Meta Ads.',
    url: 'https://www.kdmultimedia.in/locations',
    siteName: 'KD MULTIMEDIA',
    type: 'website',
  },
};

export default function LocationsHubPage() {
  return (
    <div className="bg-obsidian text-white min-h-screen selection:bg-gold/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <WhatsAppWidget />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-24 border-b border-gold/15 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-obsidian/90 to-obsidian pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-6">
            <MapPin className="w-3.5 h-3.5 text-gold animate-pulse" />
            Pan-Gujarat Production Network
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight mb-6">
            Gujarat’s Premier 8K Video & Marketing Ecosystem
          </h1>

          <p className="text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Headquartered in Ahmedabad, KD MULTIMEDIA deploys elite cinema crews, FPV drone units, and growth marketers across all primary economic corridors of Gujarat.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/917016563129?text=Hello%20KD%20Multimedia,%20I%20would%20like%20to%20discuss%20a%20video%20shoot%20in%20Gujarat."
              className="px-6 py-3 rounded-xl bg-gold text-obsidian font-bold text-xs uppercase tracking-wider font-mono hover:bg-gold-light transition-all"
            >
              Direct Studio Desk (+91 70165 63129)
            </a>
          </div>
        </div>
      </section>

      {/* Grid of Cities */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Headquarters: Ahmedabad */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-obsidian-light to-obsidian border-2 border-gold/50 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold text-[10px] font-mono uppercase tracking-wider mb-4 font-bold">
                ★ Primary Headquarters & Soundstage Studio
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-3">
                Ahmedabad (HQ)
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                Full-service 8K camera lab, sound mixing station, DaVinci Resolve color grading suites, and Meta Ads growth marketing war room.
              </p>
              <div className="space-y-2 mb-8">
                <div className="text-xs text-zinc-400 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  Primary Hub: Sindhu Bhavan Road & SG Highway Corridor
                </div>
                <div className="text-xs text-zinc-400 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  In-House Equipment: Sony FX6 / FX3, RED Komodo, DJI Inspire 3
                </div>
              </div>
            </div>
            <Link
              href="/"
              className="py-3 px-6 rounded-xl bg-gold text-obsidian font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-between hover:bg-gold-light transition-colors"
            >
              <span>Explore Ahmedabad Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Regional Cities */}
          {locationsData.map((loc) => (
            <div
              key={loc.slug}
              className="p-8 rounded-3xl bg-obsidian-light border border-gold/20 hover:border-gold transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="text-xs font-mono text-gold uppercase tracking-widest mb-3">
                  // {loc.geo.region} // Pin: {loc.geo.postalCode}
                </div>
                <h2 className="text-2xl font-bold font-sans text-white group-hover:text-gold transition-colors mb-3">
                  {loc.city}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {loc.tagline}
                </p>
                <div className="space-y-2 mb-8">
                  {loc.coreIndustries.slice(0, 3).map((ind, i) => (
                    <div key={i} className="text-xs text-zinc-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/locations/${loc.slug}`}
                className="py-3 px-6 rounded-xl bg-obsidian border border-gold/30 text-white group-hover:border-gold font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-between hover:bg-gold hover:text-obsidian transition-colors"
              >
                <span>View {loc.city} Hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
