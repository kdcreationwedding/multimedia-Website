import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogData } from '@/data/blogData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ArrowLeft, 
  Share2, 
  MessageSquare, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | KD MULTIMEDIA Insights`,
    description: post.metaDesc,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `https://kdmultimedia.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDesc,
      url: `https://kdmultimedia.in/blog/${post.slug}`,
      siteName: 'KD MULTIMEDIA',
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author.name],
      images: [
        {
          url: 'https://kdmultimedia.in/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `https://kdmultimedia.in/blog/${post.slug}#article`,
        headline: post.title,
        description: post.metaDesc,
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        mainEntityOfPage: `https://kdmultimedia.in/blog/${post.slug}`,
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          '@type': 'Organization',
          name: 'KD Multimedia Productions',
          url: 'https://kdmultimedia.in',
          logo: {
            '@type': 'ImageObject',
            url: 'https://kdmultimedia.in/kd-symbol.png',
          },
        },
        image: 'https://kdmultimedia.in/og-image.jpg',
        keywords: post.keywords.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://kdmultimedia.in',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Insights & Blog',
            item: 'https://kdmultimedia.in/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://kdmultimedia.in/blog/${post.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((faq) => ({
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

  return (
    <div className="bg-obsidian text-white min-h-screen selection:bg-gold/30 selection:text-white">
      <CustomCursor />
      <Navbar />
      <WhatsAppWidget />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Header */}
      <article className="pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb Nav */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link href="/blog" className="hover:text-gold transition-colors">Insights</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-gold truncate max-w-[200px]">{post.category}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono tracking-widest uppercase mb-6">
            {post.category}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight leading-[1.2] mb-6">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author & Meta Meta-bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gold/15 mb-12 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold">
                {post.author.name.charAt(3)}
              </div>
              <div>
                <div className="text-white font-sans font-semibold text-sm">{post.author.name}</div>
                <div className="text-[11px] text-gold">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>{post.publishedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Main Body */}
          <div className="space-y-10 text-zinc-300 leading-relaxed text-base md:text-lg font-light">
            {post.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold font-sans text-white tracking-tight border-l-2 border-gold pl-4">
                  {section.h2}
                </h2>
                <p className="leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* FAQs Section */}
          {post.faqs.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gold/20">
              <h3 className="text-xl md:text-2xl font-bold font-sans text-white mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {post.faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-obsidian-light border border-gold/15">
                    <h4 className="font-bold text-white mb-2 text-base">{faq.q}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio Box */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-obsidian-light to-obsidian border border-gold/30 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-gold text-2xl font-bold shrink-0">
              {post.author.name.charAt(3)}
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="font-bold text-white text-lg">{post.author.name}</div>
              <div className="text-xs font-mono text-gold">{post.author.role} — KD MULTIMEDIA</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Directing commercial productions, high-conversion ad creative funnels, and luxury brand stories across Ahmedabad, Gujarat, and Pan-India.
              </p>
            </div>
          </div>

          {/* WhatsApp Direct CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-gold/10 border border-gold text-center space-y-4">
            <h3 className="text-2xl font-bold font-sans text-white">
              Elevate Your Brand With KD MULTIMEDIA
            </h3>
            <p className="text-sm text-zinc-300 max-w-lg mx-auto">
              Ready to shoot your commercial ad or scale your Meta Ads profitably? Connect with our founders directly.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/917016563129?text=${encodeURIComponent(`Hi KD Multimedia, I read your article on "${post.title}" and would like to discuss our project.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gold text-obsidian font-bold font-mono text-xs uppercase tracking-wider hover:bg-gold-light transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)]"
              >
                <MessageSquare className="w-4 h-4" />
                Chat with Studio on WhatsApp (+91 70165 63129)
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
