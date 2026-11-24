import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locationsData } from '@/data/locationsData';
import { servicesData } from '@/data/servicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { 
  MapPin, 
  Video, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Building2,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const location = locationsData.find((l) => l.slug === city);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDesc,
    alternates: {
      canonical: `https://www.kdmultimedia.in/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDesc,
      url: `https://www.kdmultimedia.in/locations/${location.slug}`,
      siteName: 'KD MULTIMEDIA',
      type: 'website',
      images: [
        {
          url: 'https://www.kdmultimedia.in/og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${location.city} Video Production & Digital Marketing - KD MULTIMEDIA`,
        },
      ],
    },
  };
}

export default async function LocationCityPage({ params }: PageProps) {
  const { city } = await params;
  const location = locationsData.find((l) => l.slug === city);

  if (!location) {
    notFound();
  }

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `https://www.kdmultimedia.in/locations/${location.slug}#localbusiness`,
        name: `KD Multimedia Productions — ${location.city}`,
        url: `https://www.kdmultimedia.in/locations/${location.slug}`,
        telephone: '+917016563129',
        priceRange: '₹₹₹',
        address: {
          '@type': 'PostalAddress',
          addressLocality: location.city,
          addressRegion: 'Gujarat',
          postalCode: location.geo.postalCode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: location.geo.latitude,
          longitude: location.geo.longitude,
        },
        parentOrganization: {
          '@type': 'Organization',
          name: 'KD Multimedia Productions',
          url: 'https://www.kdmultimedia.in',
        },
      },
      {
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
            name: 'Gujarat Regional Hubs',
            item: 'https://www.kdmultimedia.in/locations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: location.city,
            item: `https://www.kdmultimedia.in/locations/${location.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: location.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  const whatsappMessage = encodeURIComponent(
    `Hello KD MULTIMEDIA! I am reaching out from ${location.city}. I would like to discuss video production / digital marketing for our brand.`
  );

  return (
    <div className="bg-obsidian text-white min-h-screen selection:bg-gold/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <WhatsAppWidget />

      {/* JSON-LD Injected */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-gold/15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/15 via-obsidian/80 to-obsidian pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link href="/locations" className="hover:text-gold transition-colors">Locations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-gold">{location.city}</span>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-6">
            <MapPin className="w-3.5 h-3.5 text-gold animate-pulse" />
            Regional Production Hub // {location.city}, Gujarat
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-[1.15] mb-6">
            {location.headline}
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl mb-10">
            {location.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/917016563129?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold to-gold-light text-obsidian font-bold tracking-wider uppercase text-xs hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2.5"
            >
              <MessageSquare className="w-4 h-4" />
              Book {location.city} Shoot on WhatsApp
            </a>
            <a
              href="tel:+917016563129"
              className="px-8 py-4 rounded-xl bg-obsidian-light border border-gold/30 text-zinc-200 hover:text-white hover:border-gold font-mono text-xs tracking-wider uppercase transition-all flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-gold" />
              Call Studio Desk (+91 70165 63129)
            </a>
          </div>
        </div>
      </section>

      {/* Regional Overview & Core Industries */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-gold uppercase tracking-widest block">
              // Economic Landscape & Cinematic Synergy
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-sans tracking-tight">
              Why Brands in {location.city} Partner with KD MULTIMEDIA
            </h2>
            <p className="text-zinc-300 leading-relaxed text-base">
              {location.overview}
            </p>
            <div className="p-6 rounded-2xl bg-obsidian-light border border-gold/20 space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-gold flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gold" />
                Key Targeted Industry Clusters in {location.city}:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {location.coreIndustries.map((ind, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-obsidian-light to-obsidian border border-gold/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-4">
              // Rapid Field Deployment
            </span>
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-extrabold text-gold font-mono">24 Hours</div>
                <div className="text-xs text-zinc-400 mt-1">Full Crew Mobilization to {location.city}</div>
              </div>
              <div className="border-t border-gold/15 pt-4">
                <div className="text-3xl font-extrabold text-white font-mono">8K Cinema</div>
                <div className="text-xs text-zinc-400 mt-1">Broadcast Specification Hardware Fleet</div>
              </div>
              <div className="border-t border-gold/15 pt-4">
                <div className="text-3xl font-extrabold text-gold font-mono">5.2x Avg.</div>
                <div className="text-xs text-zinc-400 mt-1">Meta Ads Direct-Response ROAS Tracked</div>
              </div>
              <div className="border-t border-gold/15 pt-6">
                <a
                  href={`https://wa.me/917016563129?text=${whatsappMessage}`}
                  className="w-full py-3.5 rounded-xl bg-gold text-obsidian text-center font-bold font-mono text-xs uppercase tracking-wider block hover:bg-gold-light transition-colors"
                >
                  Schedule Recce in {location.city}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Local Services */}
      <section className="py-20 bg-obsidian-light border-y border-gold/15">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-3">
              // Specialized Local Deliverables
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight">
              Tailored Creative & Performance Services in {location.city}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {location.localServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-obsidian border border-gold/20 hover:border-gold transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-obsidian transition-colors">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-sans mb-3 text-white group-hover:text-gold transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>
                <a
                  href={`https://wa.me/917016563129?text=${encodeURIComponent(`Hi KD Multimedia, tell me more about ${srv.title} in ${location.city}.`)}`}
                  className="text-xs font-mono text-gold flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-3">
            // Competitive Edge
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight">
            The KD Multimedia Production Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {location.whyChooseUs.map((w, i) => (
            <div key={i} className="p-6 rounded-2xl bg-obsidian-light border border-gold/15 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-1" />
              <p className="text-sm text-zinc-300 leading-relaxed">{w}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-obsidian-light border-t border-gold/15">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-3">
              // Transparency & Logistics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight">
              Frequently Asked Questions for {location.city} Clients
            </h2>
          </div>

          <div className="space-y-6">
            {location.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-obsidian border border-gold/20">
                <h3 className="text-base md:text-lg font-bold font-sans text-white mb-2.5">
                  {faq.q}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Related Gujarat Services */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-gold uppercase tracking-widest block mb-3">
            // Explore All Capabilities
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-sans">
            Our 20 Specialized Production & Marketing Verticals
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {servicesData.slice(0, 10).map((srv) => (
            <Link
              key={srv.slug}
              href={`/services/${srv.slug}`}
              className="px-4 py-2 rounded-lg bg-obsidian-light border border-gold/20 text-xs font-mono text-zinc-300 hover:text-gold hover:border-gold transition-colors"
            >
              {srv.title}
            </Link>
          ))}
          <Link
            href="/services"
            className="px-4 py-2 rounded-lg bg-gold/10 border border-gold text-xs font-mono text-gold hover:bg-gold hover:text-obsidian transition-colors font-bold"
          >
            View All 20 Services →
          </Link>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-obsidian to-black border-t border-gold/20 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tight">
            Ready to Transform Your {location.city} Brand?
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-base">
            Connect with Founder Mr. Mahesh & our executive production desk to schedule your commercial shoot or scale your paid ads.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/917016563129?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gold text-obsidian font-bold font-mono text-xs tracking-wider uppercase hover:bg-gold-light transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Start WhatsApp Discussion
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-obsidian-light border border-gold/30 text-white font-mono text-xs tracking-wider uppercase hover:border-gold transition-all"
            >
              Submit Project Inquiry Form
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
