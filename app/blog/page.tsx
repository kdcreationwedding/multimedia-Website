import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogData } from '@/data/blogData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights, Production Playbooks & Growth Engineering | KD MULTIMEDIA Blog',
  description:
    'Expert articles on 8K commercial video production, Meta Ads scaling, corporate filmmaking, and brand strategy in Ahmedabad, Gujarat, and India.',
  alternates: {
    canonical: 'https://kdmultimedia.in/blog',
  },
  openGraph: {
    title: 'KD MULTIMEDIA Production & Marketing Insights',
    description: 'Expert playbooks on 8K cinema, Meta Ads, and brand dominance.',
    url: 'https://kdmultimedia.in/blog',
    siteName: 'KD MULTIMEDIA',
    type: 'website',
  },
};

export default function BlogHubPage() {
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
            <BookOpen className="w-3.5 h-3.5 text-gold" />
            The KD Studio Journal // Strategic Insights
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight mb-6">
            Production Playbooks & Performance Marketing
          </h1>

          <p className="text-base md:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            Direct from our directors, editors, and growth engineers in Ahmedabad: real strategies for 8K video production, high-ROAS Meta Ads, and brand dominance.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogData.map((post) => (
            <article
              key={post.slug}
              className="p-8 rounded-3xl bg-obsidian-light border border-gold/20 hover:border-gold transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold" />
                      {post.publishedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl font-bold font-sans text-white group-hover:text-gold transition-colors mb-3 leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-gold/10 flex items-center justify-between">
                <div className="text-xs font-mono text-zinc-400">
                  By <span className="text-white font-medium">{post.author.name}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-mono text-gold flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
