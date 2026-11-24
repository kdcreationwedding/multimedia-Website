'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import UniqueArrow from './UniqueArrow';
import { Sparkles, Play, Film, Award, ShieldCheck, X } from 'lucide-react';

interface Project {
  id: string;
  chapter: string;
  title: string;
  client: string;
  category: 'youtube' | 'reels' | 'cinema' | 'ads';
  categoryLabel: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'youtube' | 'reels' | 'cinema' | 'ads'>('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and listen for ESC key when Case Study Modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
          setSelectedProject(null);
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
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: 'youtube-scale',
      chapter: 'CH. 01',
      title: 'AUTHORITY YOUTUBE CHANNEL ECOSYSTEM ENGINEERING',
      client: 'Apex Tech Reviews',
      category: 'youtube',
      categoryLabel: 'YouTube Strategy & Adobe Premiere Pro',
      description: 'End-to-end YouTube channel engineering in Adobe Premiere Pro & After Effects: scriptwriting, 4K documentary editing, Photoshop high-CTR thumbnail design, and YouTube SEO optimization.',
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop',
      metrics: [
        { label: 'CHANNEL STATUS', value: 'VERIFIED BRAND' },
        { label: 'EDITING SUITE', value: 'ADOBE PREMIERE PRO' },
        { label: 'GRAPHICS STACK', value: 'PHOTOSHOP & AFTER EFFECTS' },
      ],
      tags: ['Adobe Premiere Pro 8K', 'Adobe After Effects', 'Photoshop Thumbnails', 'YouTube SEO'],
    },
    {
      id: 'insta-viral-reels',
      chapter: 'CH. 02',
      title: 'HIGH-RETENTION VIRAL REELS ENGINE // SHORT-FORM',
      client: 'Luxe Couture Brand',
      category: 'reels',
      categoryLabel: 'Instagram Reels & After Effects Motion FX',
      description: 'A dedicated Instagram Reels takeover using micro-hook scripting, Adobe After Effects motion graphics, kinematic subtitles, fast-paced Premiere Pro cutting, and audio sound triggers.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      metrics: [
        { label: 'VIRALITY RATING', value: 'ALGORITHM TAKEOVER' },
        { label: 'MOTION GRAPHICS', value: 'ADOBE AFTER EFFECTS' },
        { label: 'FOOTAGE TYPE', value: '4K CINEMA VERTICAL' },
      ],
      tags: ['Adobe After Effects', 'Adobe Premiere Pro', 'Kinematic Subtitles', 'Trending Audio'],
    },
    {
      id: 'cinema-film-shoot',
      chapter: 'CH. 03',
      title: 'COMMERCIAL BRAND FILM // CINEMATOGRAPHY & EDITING',
      client: 'Elevate Lifestyle',
      category: 'cinema',
      categoryLabel: '8K Video Shooting & Adobe Motion FX',
      description: 'A commercial cinema camera shoot and Adobe Creative Suite post-production campaign blending Premiere Pro 8K cutting, After Effects 3D motion graphics, and DaVinci Resolve color grading.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
      metrics: [
        { label: 'PRIMARY SUITE', value: 'ADOBE CREATIVE SUITE' },
        { label: 'MOTION GRAPHICS', value: 'AFTER EFFECTS 3D' },
        { label: 'COLOR PIPELINE', value: 'DAVINCI HDR STUDIO' },
      ],
      tags: ['Adobe Premiere Pro 8K', 'Adobe After Effects', '3D Motion Graphics', 'DaVinci Resolve'],
    },
    {
      id: 'commercial-photo-video-shoot',
      chapter: 'CH. 04',
      title: 'COMMERCIAL PHOTO & VIDEO SHOOT // FASHION & PRODUCT',
      client: 'Royale Apparel & Studio',
      category: 'cinema',
      categoryLabel: 'Commercial Video Shooting & Photo Editing',
      description: 'On-location commercial video shoot and high-fashion product photography: multi-angle studio lighting, camera crew unit coordination, and high-end image retouching in Photoshop & Lightroom.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      metrics: [
        { label: 'CAMERA UNIT', value: '8K CINEMA CAMERA RIGS' },
        { label: 'LIGHTING STAGE', value: 'STUDIO SOUNDSTAGE' },
        { label: 'PHOTO EDITING', value: 'PHOTOSHOP RETOUCHING' },
      ],
      tags: ['Commercial Photo Shoot', '8K Video Shooting', 'Commercial Photo Editing', 'High-End Image Retouching'],
    },
    {
      id: 'performance-marketing-meta',
      chapter: 'CH. 05',
      title: 'E-COMMERCE ACQUISITION // META & GOOGLE ADS',
      client: 'Valence D2C Store',
      category: 'ads',
      categoryLabel: 'Performance Marketing & Meta/Google Ads',
      description: 'Direct response paid advertising ecosystem generating high-converting ad creative variations engineered in Adobe Premiere Pro & After Effects, landing page CRO, and Meta/Google Advantage+ campaign scaling.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      metrics: [
        { label: 'AD CREATIVE STACK', value: 'ADOBE SUITE CREATIVES' },
        { label: 'PAID MEDIA STACK', value: 'META & GOOGLE PMAX' },
        { label: 'OPTIMIZATION', value: 'DIRECT RESPONSE' },
      ],
      tags: ['Adobe Creative Suite', 'Performance Marketing', 'Meta Advantage+', 'Google PMax'],
    },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  const modalContent = selectedProject && (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setSelectedProject(null);
        }
      }}
      className="fixed inset-0 z-[9999999] bg-obsidian-deep/98 backdrop-blur-3xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-obsidian-surface border border-gold/50 rounded-3xl max-w-3xl w-full p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-[0_0_140px_rgba(212,175,55,0.4)] animate-fade-in my-auto">
        {/* Prominent Top-Right Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-6 right-6 text-slate-300 hover:text-white font-mono text-xs px-4 py-2 rounded-full border border-gold/40 bg-gold/10 hover:bg-gold hover:text-obsidian transition-all flex items-center gap-1.5 shadow-lg group z-20"
        >
          <X className="w-4 h-4 text-gold group-hover:text-obsidian" />
          <span>CLOSE [ESC]</span>
        </button>

        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs font-mono text-gold-light uppercase tracking-widest">
            {selectedProject.chapter} // CASE ARCHIVE DEEP-DIVE
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-display font-extrabold text-white uppercase mb-4 pr-16">
          {selectedProject.title}
        </h3>

        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-gold/30 relative group shadow-2xl">
          <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian-deep/40 flex items-center justify-center">
            <div className="px-5 py-2.5 rounded-full bg-gold/90 text-obsidian text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
              <Play className="w-4 h-4 fill-current" />
              <span>PREVIEW REEL ARCHIVE</span>
            </div>
          </div>
        </div>

        <p className="text-slate-200 text-sm leading-relaxed mb-6 font-light">{selectedProject.description}</p>

        {/* Campaign Performance Metrics Grid - Authoritative Stack Labels */}
        <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-gold/10 border border-gold/30 text-center mb-6">
          {selectedProject.metrics.map((m, i) => (
            <div key={i} className="space-y-1">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{m.label}</div>
              <div className="text-xs md:text-sm font-display font-extrabold text-metallic-gold uppercase">{m.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300 mb-6">
          <div><span className="text-slate-500">CLIENT:</span> {selectedProject.client}</div>
          <div><span className="text-slate-500">CATEGORY:</span> {selectedProject.categoryLabel}</div>
          <div><span className="text-slate-500">STATUS:</span> COMPLETED / LIVE SCALED</div>
          <div><span className="text-slate-500">PRIMARY TOOL:</span> ADOBE CREATIVE SUITE</div>
        </div>

        {/* Prominent Bottom Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="w-full py-4 rounded-xl bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl flex items-center justify-center gap-2"
        >
          <X className="w-4 h-4 text-obsidian" />
          <span>CLOSE CASE STUDY [ESC]</span>
        </button>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="relative min-h-screen w-full py-28 md:py-36 px-6 md:px-12 border-b border-gold/20 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase flex items-center gap-2">
                <Film className="w-4 h-4 text-gold" />
                <span>06 // FEATURED CASE ARCHIVE</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              FEATURED <span className="text-metallic-gold font-light">PRODUCTIONS</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-300 max-w-md tracking-wider">
            From Authority YouTube Channels & Commercial Photo/Video Shoots to After Effects Viral Reels & Meta Ads.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/10 pb-6">
          {[
            { id: 'all', label: 'ALL PRODUCTIONS' },
            { id: 'youtube', label: 'YOUTUBE ECOSYSTEM' },
            { id: 'reels', label: 'INSTA VIRAL REELS' },
            { id: 'cinema', label: '8K SHOOT & PHOTO EDITING' },
            { id: 'ads', label: 'META & GOOGLE ADS' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id as typeof activeFilter)}
              className={`px-5 py-2.5 rounded-full border text-xs font-mono tracking-wider transition-all uppercase ${
                activeFilter === f.id
                  ? 'bg-metallic-gold text-obsidian font-bold border-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:border-gold/40'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Floating Asymmetrical Production Cards */}
        <div className="space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
                data-cursor="INSPECT"
              >
                {/* Floating Image Frame with Lens Ring Pulse & Play Overlay */}
                <div
                  className={`lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-gold/30 group-hover:border-gold transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 filter brightness-90 contrast-105 group-hover:brightness-100"
                  />

                  {/* Dark Glass Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Floating Chapter Badge */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-obsidian-deep/80 border border-gold/40 backdrop-blur-md text-[10px] font-mono tracking-widest text-gold-light uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span>{project.chapter}</span>
                  </div>

                  {/* Top Right Live 8K Reel Badge on Hover */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3.5 py-1 rounded-full bg-gold text-obsidian text-[9px] font-mono font-bold uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>8K CINEMA REEL ACTIVE</span>
                  </div>

                  {/* Play Reel Trigger Button with Golden Lens Pulse Ring */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full border-2 border-gold opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                      <div className="w-16 h-16 rounded-full bg-obsidian/80 border border-gold/60 backdrop-blur-xl flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-metallic-gold group-hover:text-obsidian transition-all duration-500 shadow-2xl relative z-10">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Highlight Metric Pills Bar on Image */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="px-3.5 py-1.5 rounded-xl bg-obsidian-deep/90 border border-white/10 text-[10px] font-mono backdrop-blur-md flex items-center gap-2"
                      >
                        <span className="text-slate-400">{m.label}:</span>
                        <span className="text-gold font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chapter Description Box */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
                  }`}
                >
                  <div className="text-xs font-mono tracking-[0.3em] text-slate-400 uppercase">
                    {project.client} // {project.categoryLabel}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase text-white group-hover:text-metallic-gold transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-sans font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 tracking-wider"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-3 text-xs font-mono tracking-widest text-gold-light group-hover:text-white uppercase">
                    <span>INSPECT FULL CASE STUDY & CREDENTIALS</span>
                    <UniqueArrow direction="up-right" className="group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Render Modal via React Portal directly at document.body level */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </section>
  );
}
