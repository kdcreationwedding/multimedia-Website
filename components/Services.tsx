'use client';

import React, { useState } from 'react';
import UniqueArrow from './UniqueArrow';
import {
  Film,
  Camera,
  Share2,
  Search,
  Target,
  Megaphone,
  Palette,
  Image as ImageIcon,
  Heart,
  ExternalLink,
  SlidersHorizontal,
  Box,
  Cpu,
  Bot,
  MessageSquare,
  Sparkles,
  Youtube,
  Instagram,
  Clapperboard,
  Video,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  features: string[];
  tools: string[];
  category: 'AI Integration' | 'Marketing & Ads' | 'SEO & Growth' | 'Production & Photography' | 'Animation' | 'Editing' | 'Social' | 'Design & Photo Editing' | 'Wedding & Film';
  link?: string;
}

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  // Reshuffled strictly by high-business priority order
  const services: ServiceItem[] = [
    {
      id: 'ai-video-generative-mastery',
      number: '01',
      title: 'AI Integration & Generative Production',
      icon: Bot,
      tagline: 'Master AI Video, Voice & Visual Ecosystems',
      description: 'We master AI integration for video production, visual FX, synthetic audio, and performance workflows. We leverage state-of-the-art AI models to create cinematic AI visuals, automated editing, neural upscaling, and predictive ad targeting.',
      features: ['AI Video Generation & Generative FX', 'ElevenLabs AI Voice Cloning & Audio', 'Topaz Neural 8K Upscaling & Retouching', 'AI Predictive Ad Target & Copywriting'],
      tools: ['Sora & Runway Gen-3', 'Midjourney v6', 'ElevenLabs AI Voice', 'Topaz Video AI', 'Meta Advantage+ AI'],
      category: 'AI Integration',
    },
    {
      id: 'meta-ads-mastery',
      number: '02',
      title: 'Meta Ads (Facebook & Instagram Ads)',
      icon: Megaphone,
      tagline: 'High-ROAS Meta Paid Acquisition Engine',
      description: 'End-to-end Meta Ads management. We engineer high-converting video ad creatives, Advantage+ Shopping Campaigns (ASC), Dynamic Creative Testing (DCT), custom lookalike audiences, and direct-response funnels.',
      features: ['Advantage+ Shopping & Catalog Ads', 'Dynamic Creative Testing (DCT)', 'Custom & Lookalike Audience Scaling', 'High-CTR Ad Creatives & Copies'],
      tools: ['Meta Ads Manager', 'Meta Pixel & CAPI', 'Triple Whale', 'Hyperscaling Funnels', 'AdSpy'],
      category: 'Marketing & Ads',
    },
    {
      id: 'google-ads-mastery',
      number: '03',
      title: 'Google Ads & Performance Max (PMax)',
      icon: Target,
      tagline: 'High-Intent Google Search, PMax & Shopping Ads',
      description: 'Full-funnel Google Ads architecture. High-intent Google Search keyword bidding, Performance Max (PMax) AI campaigns, Google Shopping feed optimization, and YouTube Action Video Ads.',
      features: ['Google Search High-Intent Bidding', 'Performance Max (PMax) Campaigns', 'Google Shopping Feed Optimization', 'YouTube Action Video Ad Funnels'],
      tools: ['Google Ads Editor', 'Google Merchant Center', 'Keyword Planner', 'GA4 Analytics', 'Google Tag Manager'],
      category: 'Marketing & Ads',
    },
    {
      id: 'seo-search-engine-optimization',
      number: '04',
      title: 'SEO & Search Engine Dominance',
      icon: Search,
      tagline: 'Organic Google Rank 1 & Technical SEO',
      description: 'Comprehensive Organic Search Engine Optimization (SEO). Technical site speed audits, high-authority backlink building, E-E-A-T content strategy, and Local SEO Google Business Profile dominance.',
      features: ['Technical SEO & Site Speed Audit', 'High-Authority Backlink Building', 'E-E-A-T Keyword Content Strategy', 'Local SEO & Google Business Rank'],
      tools: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'SurferSEO'],
      category: 'SEO & Growth',
    },
    {
      id: 'commercial-product-photography',
      number: '05',
      title: 'Commercial & Product Photography',
      icon: Camera,
      tagline: 'High-Detail Fashion, E-Commerce & Product Shoots',
      description: 'Professional commercial photography for fashion brands, e-commerce products, jewelry, automotive, and corporate portraits. High-resolution studio lighting and precision shadow sculpting.',
      features: ['Fashion & Model Lookbook Shoots', 'E-Commerce Product Catalogue Photography', 'Jewelry & Macro Detail Photography', 'Architectural & Interior Photography'],
      tools: ['8K High-Res Cameras', 'Prime Studio Lenses', 'Profoto Lighting', 'Capture One', 'Photoshop'],
      category: 'Production & Photography',
    },
    {
      id: 'professional-videography-filming',
      number: '06',
      title: 'Professional Videography & TV Commercials',
      icon: Video,
      tagline: '8K Commercial Video Shooting & TVCs',
      description: 'End-to-end professional videography for TV commercials (TVC), brand documentaries, product launches, corporate films, and fashion video shoots using 8K cinema camera rigs.',
      features: ['TV Commercials & Brand Ad Shoots', 'Corporate Documentary Videography', 'Product Showcase & Demo Videos', 'Drone Aerial Cinematography'],
      tools: ['8K Cinema Camera Rigs', 'Anamorphic Primes', 'Studio Softbox Lighting', '3-Axis Gimbals'],
      category: 'Production & Photography',
    },
    {
      id: 'saas-product-animation',
      number: '07',
      title: 'SaaS & 3D Product Animation',
      icon: Box,
      tagline: 'High-Converting 2D/3D SaaS Explainer Animations',
      description: 'Ultra-sleek 2D vector & 3D product animation videos for SaaS platforms, tech products, and mobile apps. We transform complex software workflows into high-converting visual UI animations.',
      features: ['SaaS Product Explainer Videos', '3D UI/UX Screen Animations', 'Kinematic Motion Typography', 'App Launch Promos & Micro-Demos'],
      tools: ['Blender 3D', 'After Effects', 'Cinema 4D', 'Spline 3D', 'Rive / Lottie'],
      category: 'Animation',
    },
    {
      id: 'video-editing-post',
      number: '08',
      title: 'Video Editing & Motion FX',
      icon: Film,
      tagline: 'Latest Editing Suites, Color & VFX',
      description: 'Precision video editing, Hollywood-grade color grading, 3D VFX motion graphics, sound design, kinematic subtitles, and high-retention post-production using industry-standard suites.',
      features: ['Premiere Pro & DaVinci Editing', 'HDR Color Grading & LUTs', 'After Effects Motion Graphics', 'Spatial Sound Design & SFX'],
      tools: ['Adobe Premiere Pro', 'DaVinci Resolve Studio', 'After Effects', 'Pro Tools', 'Logic Pro X'],
      category: 'Editing',
    },
    {
      id: 'reels-short-form',
      number: '09',
      title: 'Instagram Reels & Short-Form',
      icon: Instagram,
      tagline: 'Viral Vertical Video Engineering',
      description: 'High-retention vertical video production for Instagram Reels, Shorts, and TikTok. Engineered with psychological micro-hooks, kinematic subtitles, and sound effects to drive organic virality.',
      features: ['Micro-Hook Scripting', 'Kinematic Subtitles & Graphics', 'Viral Sound FX Triggers', 'Daily/Weekly Reels Pipeline'],
      tools: ['Vertical Video Suite', 'Kinematic Graphics', 'Sound Effects', 'Meta Suite'],
      category: 'Social',
    },
    {
      id: 'youtube-growth-management',
      number: '10',
      title: 'YouTube Ecosystem & Growth',
      icon: Youtube,
      tagline: 'Long-Form Channel Management & SEO',
      description: 'End-to-end YouTube channel growth: scriptwriting, high-CTR thumbnail design, long-form documentary editing, podcast production, YouTube SEO, and channel monetization scaling.',
      features: ['Long-Form Video Editing', 'High-CTR Custom Thumbnails', 'YouTube SEO & Keyword Optimization', 'Video Podcast Production Hub'],
      tools: ['YouTube Studio', 'Custom Thumbnails', 'SEO Suite', 'Audio Podcast Desk'],
      category: 'Social',
    },
    {
      id: 'photo-editing-retouching',
      number: '11',
      title: 'Commercial Photo Editing & Retouching',
      icon: ImageIcon,
      tagline: 'High-End Beauty Retouching & E-Commerce Editing',
      description: 'Professional photo editing and high-end image retouching. Skin smoothing, frequency separation, e-commerce product cutout, ghost mannequin, background replacement, and commercial color grading.',
      features: ['High-End Beauty & Skin Retouching', 'E-Commerce Product Background Removal', 'Color Grading & Lighting Correction', 'Jewelry & Commercial Photo Enhancement'],
      tools: ['Adobe Photoshop', 'Lightroom Classic', 'Capture One', 'Topaz Gigapixel AI', 'Wacom Intuos'],
      category: 'Design & Photo Editing',
    },
    {
      id: 'graphic-design-branding',
      number: '12',
      title: 'Graphic Design & Brand Identity',
      icon: Palette,
      tagline: 'High-Status Graphic Design & Banners',
      description: 'Comprehensive graphic design and branding solutions. 3D logo design, social media banner suites, print advertising, billboard designs, album layouts, and brand identity guidelines.',
      features: ['3D Vector Logo Design & Brand Identity', 'Social Media Banner & Ad Creatives', 'Billboard & Print Advertising Design', 'Photo Album Layout & Book Design'],
      tools: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'CorelDRAW'],
      category: 'Design & Photo Editing',
    },
    {
      id: 'social-media-management',
      number: '13',
      title: 'Social Media Management',
      icon: Share2,
      tagline: 'Omnichannel Brand Ecosystem Governance',
      description: 'Complete management of your social presence on Instagram, YouTube, LinkedIn, and Facebook. Strategic content calendars, grid aesthetic curation, community engagement, and growth reporting.',
      features: ['Omnichannel Content Calendar', 'Grid Curation & Aesthetics', 'Community Moderation', 'Monthly Growth Analytics'],
      tools: ['Social Scheduling', 'Analytics Suite', 'Grid Curator', 'Community Desk'],
      category: 'Social',
    },
    {
      id: 'virtual-production-ue5',
      number: '14',
      title: 'Unreal Engine & Virtual Production',
      icon: Cpu,
      tagline: 'Real-Time 3D Environments & Virtual Sets',
      description: 'Cutting-edge real-time virtual production using Unreal Engine 5 for photorealistic 3D environment backgrounds, combined with live camera tracking and compositing.',
      features: ['Unreal Engine 5 Environments', 'Real-Time Camera Tracking', 'Virtual Set Compositing', '8K AI Video Enhancement'],
      tools: ['Unreal Engine 5', 'Nuke VFX', 'Blender', 'Topaz Video AI'],
      category: 'Animation',
    },
    {
      id: 'brand-communication-pr',
      number: '15',
      title: 'Brand Communication & PR',
      icon: MessageSquare,
      tagline: 'PR Strategy & High-Status Communications',
      description: 'Articulate executive messaging, press releases, media placements, investor deck design, and crisis communication management.',
      features: ['Press Release Distribution', 'Executive Investor Decks', 'PR & Media Outlet Pitching', 'Crisis Communication Plan'],
      tools: ['Press Distribution', 'Investor Decks', 'Media Relations', 'Tone Guidelines'],
      category: 'Marketing & Ads',
    },
    {
      id: 'wedding-photography-cinematography',
      number: '16',
      title: 'Luxury Weddings & Cinematography (KD Creation)',
      icon: Heart,
      tagline: 'Eternal Wedding Memories on KDCREATIONS.IN',
      description: 'Dedicated wedding production division under KD Creation. Royal wedding cinematography, candid & traditional photography, pre-wedding films, drone highlights, and photobooks.',
      features: ['Royal Wedding Cinematography & Teasers', 'Pre-Wedding Concept Songs & Shoots', 'Candid & Ritual Photo Coverage', 'Custom Luxury Flush Mount Albums'],
      tools: ['8K Cinema Rigs', 'Anamorphic Primes', 'DaVinci Resolve', 'Lightroom', 'Drone Aerials'],
      category: 'Wedding & Film',
      link: 'https://kdcreations.in',
    },
  ];

  const categories = ['All', 'AI Integration', 'Marketing & Ads', 'SEO & Growth', 'Production & Photography', 'Animation', 'Editing', 'Social', 'Design & Photo Editing', 'Wedding & Film'];

  const filteredServices = activeFilter === 'All'
    ? services
    : services.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="relative min-h-screen w-full py-32 px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase">
                03 // FULL SPECTRUM CAPABILITIES
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              OUR <span className="text-metallic-gold font-light">CAPABILITIES</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md tracking-wider">
            AI Integration, Meta/Google Ads, SEO, Commercial Photography, Professional Videography, SaaS 3D Animation & Editing.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12 pb-4 border-b border-white/10">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2 mr-2">
            <SlidersHorizontal className="w-4 h-4 text-gold" />
            <span>FILTER:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-metallic-gold text-obsidian font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-glass border border-white/10 text-slate-300 hover:border-gold/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Spatial Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className="group relative p-8 rounded-2xl bg-glass border border-white/10 hover:border-gold/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] cursor-pointer overflow-hidden flex flex-col justify-between min-h-[320px]"
                data-cursor="EXPAND"
              >
                {/* Background Subtle Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Top */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-gold-light tracking-widest px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                      {service.number} // {service.category}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-obsidian transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-white mb-2 group-hover:text-gold-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 tracking-wider mb-4">
                    {service.tagline}
                  </p>
                </div>

                {/* Card Bottom */}
                <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-white uppercase">
                    {service.link ? 'VISIT KDCREATIONS.IN ↗' : 'VIEW CAPABILITY'}
                  </span>
                  <UniqueArrow direction={service.link ? 'up-right' : 'right'} className="group-hover:translate-x-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Modal / Drawer for Detailed View */}
      {activeService && (
        <div className="fixed inset-0 z-[10000] bg-obsidian-deep/90 backdrop-blur-2xl flex items-center justify-center p-6">
          <div className="bg-obsidian-surface border border-gold/40 p-8 md:p-12 rounded-3xl max-w-2xl w-full relative shadow-[0_0_60px_rgba(212,175,55,0.2)] animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white font-mono text-xs px-3 py-1 rounded-full border border-white/10"
            >
              CLOSE [X]
            </button>

            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-xs font-mono text-gold-light tracking-widest">
                CAPABILITY // {activeService.number} ({activeService.category})
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-white uppercase mb-2">
              {activeService.title}
            </h3>
            <p className="text-sm font-mono text-gold-light mb-6">{activeService.tagline}</p>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">{activeService.description}</p>

            {activeService.link && (
              <div className="mb-8 p-4 rounded-xl bg-gold/10 border border-gold/40 flex items-center justify-between">
                <span className="text-xs font-mono text-white">OFFICIAL WEDDING PORTAL LINK:</span>
                <a
                  href={activeService.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gold text-obsidian font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                >
                  <span>OPEN KDCREATIONS.IN</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                  CORE DELIVERABLES:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-200 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                  SOFTWARE & AD PLATFORMS:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-gold/10 border border-gold/20 text-xs font-mono text-gold-light"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
