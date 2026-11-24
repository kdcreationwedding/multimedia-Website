'use client';

import React, { useState } from 'react';
import { Bot, Sparkles, Zap, ArrowRight, ShieldCheck, Target, Film } from 'lucide-react';

export default function AiStrategyTeaser() {
  const [businessType, setBusinessType] = useState('Influencers, Content Creators & YouTube Channels (Personal Brands & Podcasters)');
  const [goal, setGoal] = useState('YouTube Channel Scaling & Personal Brand');
  const [isGenerating, setIsGenerating] = useState(false);
  const [blueprint, setBlueprint] = useState<null | {
    title: string;
    shootingPipeline: string;
    postProdStack: string;
    adStrategy: string;
    expectedOutcome: string;
  }>(null);

  const handleGenerate = () => {
    setIsGenerating(true);
    setBlueprint(null);

    setTimeout(() => {
      setIsGenerating(false);

      // Generate 100% Unique Blueprint based on BOTH Industry & Goal
      const ind = businessType.split(' ')[0]; // Industry keyword
      const isReels = goal.includes('Viral Reels');
      const isAds = goal.includes('Meta & Google Ads');
      const isFilm = goal.includes('Brand Film');
      const isShoot = goal.includes('Photo & Video');

      let title = '';
      let shoot = '';
      let post = '';
      let strategy = '';
      let outcome = '';

      if (businessType.includes('Influencers')) {
        title = `INFLUENCER & CREATOR // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = isShoot
          ? 'Podcast Soundstage 4K Camera Unit + Studio Portrait Photography for Personal Brand Assets.'
          : isFilm
          ? 'Cinematic Docu-Style 8K Cinema Camera Shoot capturing Creator Lifestyle & Vision.'
          : isReels
          ? 'High-Speed 4K Vertical Camera Setup with Softbox Lighting for Daily Reels Production.'
          : 'Multi-Cam Podcast Soundstage Setup with Softbox Lighting, Teleprompter & 4K Talking-Head Unit.';
        post = 'Adobe Premiere Pro talking-head editing + After Effects kinetic subtitles & Photoshop high-CTR thumbnails.';
        strategy = isAds
          ? 'Meta Retargeting Funnel + Sponsor Brand Placement Ads.'
          : 'Instagram Reels & YouTube Shorts micro-hook viral engine + YouTube SEO channel optimization.';
        outcome = '100K+ Subscriber Channel Growth & High Personal Brand Authority.';
      } else if (businessType.includes('E-Commerce')) {
        title = `D2C E-COMMERCE // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = isShoot
          ? '1-Day Studio Product Photo Shoot with 360 Turntables & Macro 8K Camera Rigs.'
          : isFilm
          ? 'Cinematic Brand Film Shoot capturing Product Craftsmanship & Soundstage Lighting.'
          : isReels
          ? 'Fast-Paced UGC Style Product Filming with Macro Angles & Sound FX.'
          : '1-Day Studio Product Shoot with 8K Cinema Camera Rigs & Soundstage Lighting.';
        post = 'Adobe Premiere Pro fast-cut editing + After Effects 2D/3D Motion FX & kinetic overlays.';
        strategy = isAds
          ? 'Meta Advantage+ Shopping Campaigns (ASC) with 5 Dynamic Creative Testing variations.'
          : 'Instagram Reels E-Commerce Tagging & Meta Retargeting Pixel Funnel.';
        outcome = '3.8x — 4.8x Campaign ROAS & Scaled E-Commerce Revenue.';
      } else if (businessType.includes('Weddings')) {
        title = `LUXURY WEDDINGS // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = 'Multi-Camera Cinema Crew Unit, 4K FPV Drones & Slow-Motion Anamorphic Lenses.';
        post = 'DaVinci Resolve HDR Color Grading + Premiere Pro Feature Film Cut + Teaser Reels.';
        strategy = 'Private Client Viewing Gallery + High-Society Word-of-Mouth Digital Showcase.';
        outcome = 'Royal Heritage Cinema Film & Timeless Heirloom Quality.';
      } else if (businessType.includes('Jewelry')) {
        title = `PRECIOUS JEWELRY // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = isShoot
          ? 'Macro 8K Camera Lenses, High-Res Product Photography & Sparkle Lighting Rigs.'
          : 'Macro 8K Cinema Lenses, 360 Turntable Soundstage & Sparkle Lighting Rigs.';
        post = 'Adobe Photoshop Precision Diamond Retouching + After Effects Metallic Glow FX.';
        strategy = 'High-Net-Worth Individual (HNI) Meta & Instagram Catalog Ads.';
        outcome = 'Ultra-Luxury Brand Authority & Premium Buyer Acquisition.';
      } else if (businessType.includes('Real Estate')) {
        title = `LUXURY REAL ESTATE // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = '2-Day On-Location Cinematic Drone & Gimbal Property Walkthrough Shoot.';
        post = 'DaVinci Resolve HDR Color Grading + Premiere Pro 8K Editing + After Effects Motion Graphics.';
        strategy = 'Google Performance Max (PMax) & High-Intent YouTube In-Stream Ads targeting HNI investors.';
        outcome = 'High-Intent HNI Lead Acquisition & Tier-1 Property Sales.';
      } else if (businessType.includes('Automotive')) {
        title = `AUTOMOTIVE & SUPERCARS // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = 'Tracking Car Arm Rig, High-Speed FPV Drone Pilot & Night Cinematic Lighting.';
        post = 'Adobe After Effects Speed-Ramping & Motion Tracking + Premiere Pro 8K Editing.';
        strategy = 'Viral Instagram Reels Engine + YouTube Commercial Ads.';
        outcome = 'Massive Enthusiast Reach & High Engagement Virality.';
      } else if (businessType.includes('Fashion')) {
        title = `HIGH-FASHION COUTURE // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = isShoot
          ? 'High-Fashion Model Shoot, Studio Soundstage Lighting & Lookbook Photography.'
          : 'Studio Soundstage High-Fashion Lighting & 4K Vertical Camera Unit.';
        post = 'Adobe Photoshop & Lightroom Beauty Retouching + After Effects Kinematic Subtitles.';
        strategy = 'Instagram Reels takeover algorithm pipeline + Meta Retargeting Funnel.';
        outcome = 'Algorithm Takeover & Massive Organic Follower Retention.';
      } else if (businessType.includes('Restaurants')) {
        title = `FMCG FOOD & RESTAURANT // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = 'High-Speed Sizzling Soundstage Shoot, Sizzler Macro Shots & Chef Storytelling.';
        post = 'Adobe Premiere Pro Quick-Paced Editing + Audition Sound FX + After Effects Subtitles.';
        strategy = 'Geo-Targeted Meta Local Ads + Instagram Foodie Reels Pipeline.';
        outcome = 'Footfall Dominance & Viral Local Brand Buzz.';
      } else if (businessType.includes('Healthcare')) {
        title = `HEALTHCARE & FITNESS // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = '4K Studio Interview Setup with Softbox Lighting & B-Roll Workout/Clinic Shots.';
        post = 'Adobe Premiere Pro Educational Editing + After Effects Infographics.';
        strategy = 'Meta Conversion Ads + Google Search Lead Generation Funnels.';
        outcome = 'Patient/Client Consultation Bookings & Medical Authority.';
      } else if (businessType.includes('Education')) {
        title = `EDTECH & ACADEMY // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = 'Studio Soundstage Course Filming & Student Testimonial Multi-Cam Rigs.';
        post = 'Adobe Premiere Pro Course Editing + Photoshop High-CTR Ad Creatives.';
        strategy = 'Direct Response Meta Leads Campaign + YouTube In-Stream Ads.';
        outcome = 'High Student Enrollment & Low Cost-Per-Acquisition.';
      } else {
        title = `CORPORATE ENTERPRISE // ${goal.toUpperCase()} BLUEPRINT`;
        shoot = 'A-Roll Executive Soundstage Camera Setup with Teleprompter & Multi-Angle Lighting.';
        post = 'Adobe Premiere Pro Corporate Editing + Photoshop High-CTR Thumbnails.';
        strategy = 'Targeted LinkedIn Ads + YouTube SEO ranking + Meta Retargeting Ad Ecosystem.';
        outcome = 'Verified Enterprise Authority & B2B Client Acquisition.';
      }

      setBlueprint({
        title,
        shootingPipeline: shoot,
        postProdStack: post,
        adStrategy: strategy,
        expectedOutcome: outcome,
      });
    }, 1500);
  };

  return (
    <section id="ai-blueprint" className="relative w-full py-32 px-6 md:px-12 z-10 overflow-hidden bg-obsidian-surface/60 border-y border-gold/20 backdrop-blur-xl">
      {/* Radial Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-radial from-gold/10 via-transparent to-transparent blur-[160px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-mono text-gold-light uppercase tracking-widest">
            <Bot className="w-4 h-4 text-gold animate-pulse" />
            <span>AI CREATIVE STRATEGY ENGINE</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-extrabold uppercase text-white tracking-tight">
            GENERATE YOUR <span className="text-metallic-gold font-light">30-DAY BLUEPRINT</span>
          </h2>
          <p className="text-sm font-mono text-slate-300 tracking-wider">
            Select your industry & campaign goal to generate a customized AI production & marketing strategy teaser in 1.5 seconds.
          </p>
        </div>

        {/* Generator Controls Card */}
        <div className="bg-glass p-8 md:p-12 rounded-3xl border border-gold/40 shadow-2xl space-y-8 backdrop-blur-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-mono uppercase text-slate-300 block mb-3 font-bold flex items-center gap-2">
                <Target className="w-4 h-4 text-gold" />
                <span>SELECT YOUR INDUSTRY CATEGORY:</span>
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full bg-obsidian-surface border border-gold/40 rounded-2xl px-5 py-4 text-white text-sm font-mono focus:outline-none focus:border-gold"
              >
                <option value="Influencers, Content Creators & YouTube Channels (Personal Brands & Podcasters)">Influencers, Content Creators & YouTube Channels (Personal Brands & Podcasters)</option>
                <option value="E-Commerce D2C Brand (Fashion, Beauty & Lifestyle)">E-Commerce D2C Brand (Fashion, Beauty & Lifestyle)</option>
                <option value="Luxury Weddings & Destination Celebrations">Luxury Weddings & Destination Celebrations</option>
                <option value="Jewelry, Gems & Precious Diamonds">Jewelry, Gems & Precious Diamonds</option>
                <option value="Real Estate, Developers & Architectural Luxury">Real Estate, Developers & Architectural Luxury</option>
                <option value="Automotive, Supercars & Mobility">Automotive, Supercars & Mobility</option>
                <option value="High-Fashion Couture & Premium Apparel">High-Fashion Couture & Premium Apparel</option>
                <option value="Restaurants, Cafes & FMCG Food Brands">Restaurants, Cafes & FMCG Food Brands</option>
                <option value="Healthcare, Fitness & Wellness Clinics">Healthcare, Fitness & Wellness Clinics</option>
                <option value="SaaS, Tech Startups & Corporate Enterprise">SaaS, Tech Startups & Corporate Enterprise</option>
                <option value="Education, Academies & EdTech Platforms">Education, Academies & EdTech Platforms</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-slate-300 block mb-3 font-bold flex items-center gap-2">
                <Film className="w-4 h-4 text-gold" />
                <span>SELECT PRIMARY CAMPAIGN GOAL:</span>
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full bg-obsidian-surface border border-gold/40 rounded-2xl px-5 py-4 text-white text-sm font-mono focus:outline-none focus:border-gold"
              >
                <option value="YouTube Channel Scaling & Personal Brand">YouTube Channel Scaling & Personal Brand</option>
                <option value="Viral Reels & Mass Reach">Viral Reels & Mass Reach</option>
                <option value="High-ROAS Meta & Google Ads">High-ROAS Meta & Google Ads</option>
                <option value="Commercial 8K Brand Film">Commercial 8K Brand Film</option>
                <option value="Commercial Photo & Video Shooting">Commercial Photo & Video Shooting</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-5 rounded-2xl bg-metallic-gold text-obsidian font-bold text-xs md:text-sm uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(212,175,55,0.4)] disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Zap className="w-5 h-5 animate-spin text-obsidian" />
                <span>ANALYZING & GENERATING AI STRATEGY...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 text-obsidian" />
                <span>GENERATE CUSTOMIZED 30-DAY BLUEPRINT →</span>
              </>
            )}
          </button>

          {/* Generated Blueprint Result Card */}
          {blueprint && (
            <div className="pt-8 border-t border-gold/30 space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40 text-[10px] font-mono text-gold-light uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span>AI STRATEGY VERIFIED</span>
                </div>
                <span className="text-xs font-mono text-slate-400">EST. EXECUTION: 30 DAYS</span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-metallic-gold uppercase">
                {blueprint.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-slate-400 uppercase text-[10px]">1. SHOOTING & CAMERA PIPELINE</div>
                  <div className="text-white font-sans">{blueprint.shootingPipeline}</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-slate-400 uppercase text-[10px]">2. ADOBE POST-PROD & MOTION FX</div>
                  <div className="text-white font-sans">{blueprint.postProdStack}</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-slate-400 uppercase text-[10px]">3. VIRALITY & CAMPAIGN MEDIA STACK</div>
                  <div className="text-white font-sans">{blueprint.adStrategy}</div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-gold/30 bg-gold/5 space-y-1">
                  <div className="text-gold uppercase text-[10px] font-bold">4. EXPECTED CAMPAIGN OUTCOME</div>
                  <div className="text-gold-light font-sans font-bold">{blueprint.expectedOutcome}</div>
                </div>
              </div>

              <a
                href={`https://wa.me/917016563129?text=${encodeURIComponent(
                  `Hello KD Multimedia! I generated the AI Blueprint for ${businessType} (${goal}). I want to lock this strategy.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-obsidian border border-gold text-gold font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors"
              >
                <span>LOCK THIS BLUEPRINT VIA WHATSAPP (+91 70165 63129)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
