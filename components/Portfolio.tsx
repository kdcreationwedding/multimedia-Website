'use client';

import React, { useState } from 'react';
import UniqueArrow from './UniqueArrow';
import { ExternalLink, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  chapter: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'youtube-scale',
      chapter: 'CHAPTER 01',
      title: '0 TO 1M SUBSCRIBERS // YOUTUBE CHANNEL ECOSYSTEM',
      client: 'Neural Tech Media',
      category: 'YouTube Strategy, Editing & SEO',
      description: 'End-to-end YouTube channel engineering: scriptwriting, 4K documentary editing, high-CTR thumbnail design, and YouTube SEO scaling a technology channel from zero to 1 Million active subscribers.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
      tags: ['1M Subscribers', 'High-CTR Thumbnails', '4K Documentary Editing'],
    },
    {
      id: 'insta-viral-reels',
      chapter: 'CHAPTER 02',
      title: '50M+ VIRAL REELS ENGINE // INSTAGRAM ECOSYSTEM',
      client: 'Luxe Attire & Couture',
      category: 'Instagram Reels & Short-Form Video',
      description: 'A 90-day Instagram Reels takeover generating 50 Million+ organic views using micro-hook scripting, cinematic 4K vertical footage, kinematic subtitles, and audio sound triggers.',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop',
      tags: ['50M+ Organic Views', 'Micro-Hook Scripting', 'Daily Reels Pipeline'],
    },
    {
      id: 'cinema-film-shoot',
      chapter: 'CHAPTER 03',
      title: 'APEX AUTOMOTIVE // 8K CINEMA SHOOT & EDITING',
      client: 'Apex Global Motors',
      category: 'Video Shooting, Editing & 3D VFX',
      description: 'An 8K RED V-Raptor cinema camera shoot and DaVinci Resolve color grading campaign blending anamorphic live-action footage with 3D ray-traced graphics.',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
      tags: ['RED V-Raptor 8K', 'DaVinci Resolve Studio', 'Ray-Traced CGI'],
    },
    {
      id: 'performance-marketing-meta',
      chapter: 'CHAPTER 04',
      title: 'NEURAL WEALTH // META & GOOGLE ADS ACQUISITION',
      client: 'Synapse Financial',
      category: 'Performance Marketing & Meta Ads',
      description: 'Direct response paid advertising ecosystem generating $42M in new asset under management via high-converting ad creative variations, landing page CRO, and Meta/Google ad scaling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      tags: ['Performance Marketing', '4.8x ROAS', 'Meta & Google Paid Ads'],
    },
  ];

  return (
    <section id="portfolio" className="relative min-h-screen w-full py-32 px-6 md:px-12 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-gold/60" />
              <span className="text-xs font-mono tracking-[0.35em] text-gold-light uppercase">
                05 // FEATURED CASE ARCHIVE
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tight uppercase text-white">
              FEATURED <span className="text-metallic-gold font-light">PRODUCTIONS</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md tracking-wider">
            From 1M+ YouTube Channels & 50M+ Instagram Reels to 8K Commercial Filming & Performance Meta Ads.
          </p>
        </div>

        {/* Floating Film-Strip / Asymmetrical Chapter Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => {
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
                {/* Floating Image Frame */}
                <div
                  className={`lg:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 group-hover:border-gold/60 transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_50px_rgba(212,175,55,0.25)] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:rotate-1 filter brightness-90 contrast-105 group-hover:brightness-100"
                  />

                  {/* Dark Glass Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                  {/* Floating Chapter Badge */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-obsidian-deep/80 border border-gold/30 backdrop-blur-md text-[10px] font-mono tracking-widest text-gold-light uppercase">
                    {project.chapter}
                  </div>
                </div>

                {/* Chapter Description Box */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
                  }`}
                >
                  <div className="text-xs font-mono tracking-[0.3em] text-slate-400 uppercase">
                    {project.client} // {project.category}
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
                    <span>INSPECT CASE STUDY</span>
                    <UniqueArrow direction="up-right" className="group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[10000] bg-obsidian-deep/95 backdrop-blur-2xl flex items-center justify-center p-6">
          <div className="bg-obsidian-surface border border-gold/40 rounded-3xl max-w-3xl w-full p-8 md:p-12 relative overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.25)] animate-fade-in max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white font-mono text-xs px-3 py-1.5 rounded-full border border-white/10"
            >
              CLOSE [X]
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-mono text-gold-light uppercase tracking-widest">
                {selectedProject.chapter} // CASE ARCHIVE
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-white uppercase mb-4">
              {selectedProject.title}
            </h3>

            <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-slate-200 text-base leading-relaxed mb-6 font-light">{selectedProject.description}</p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-300 mb-6">
              <div><span className="text-slate-500">CLIENT:</span> {selectedProject.client}</div>
              <div><span className="text-slate-500">CATEGORY:</span> {selectedProject.category}</div>
              <div><span className="text-slate-500">STATUS:</span> COMPLETED / SCALED</div>
              <div><span className="text-slate-500">IMPACT:</span> HIGH VIRALITY / HIGH ROAS</div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="w-full py-4 rounded-xl bg-metallic-gold text-obsidian font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
