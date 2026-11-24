import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AwardsTicker from "@/components/AwardsTicker";
import ProductionEthos from "@/components/ProductionEthos";
import About from "@/components/About";
import Services from "@/components/Services";
import SkillsMatrix from "@/components/SkillsMatrix";
import Portfolio from "@/components/Portfolio";
import GearLab from "@/components/GearLab";
import CinematicCameraRig from "@/components/CinematicCameraRig";
import AiStrategyTeaser from "@/components/AiStrategyTeaser";
import AudioMixerStudio from "@/components/AudioMixerStudio";
import RoiCalculator from "@/components/RoiCalculator";
import Testimonials from "@/components/Testimonials";
import FoundersSection from "@/components/FoundersSection";
import WeddingSection from "@/components/WeddingSection";
import FaqSection from "@/components/FaqSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import KDOrbitCanvas from "@/components/3d/KDOrbitCanvas";
import AudioEngine from "@/components/AudioEngine";
import KeyShortcutHandler from "@/components/KeyShortcutHandler";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  verification: {
    google: 'sNiOkkjJDtkFA8enRV9OO49mwq7C1CY5E7ltnPZi-Og',
  },
};

export default function Home() {
  return (
    <main className="relative bg-obsidian text-white overflow-x-hidden font-sans selection:bg-gold/30 selection:text-obsidian">
      {/* Invisible Google Site Verification Tag (Completely hidden from visitors, read by Googlebot) */}
      <head>
        <meta name="google-site-verification" content="sNiOkkjJDtkFA8enRV9OO49mwq7C1CY5E7ltnPZi-Og" />
      </head>

      {/* 3D WebGL Canvas Layer */}
      <KDOrbitCanvas />

      {/* Global Interactive Utilities */}
      <CustomCursor />
      <AudioEngine />
      <KeyShortcutHandler />
      <WhatsAppWidget />

      {/* Header & Navigation */}
      <Navbar />

      {/* Section 01: Hero */}
      <Hero />

      {/* Section 02: Marquee Ticker */}
      <AwardsTicker />

      {/* Section 02.5: The KD Studio Code // Production Ethos */}
      <ProductionEthos />

      {/* Section 03: Executive Vision / About */}
      <About />

      {/* Section 04: Full Spectrum Capabilities */}
      <Services />

      {/* Section 05: Core Production DNA & Technical Skills Matrix */}
      <SkillsMatrix />

      {/* Section 06: Featured Case Studies & Portfolio */}
      <Portfolio />

      {/* Section 07: Studio Hardware Gear Lab */}
      <GearLab />

      {/* Section 07.2: Interactive 8K Cinema Camera Viewfinder & Control Panel */}
      <CinematicCameraRig />

      {/* Section 07.5: Interactive AI 30-Day Campaign Blueprint Generator */}
      <AiStrategyTeaser />

      {/* Section 07.8: Interactive Adobe Audition 4-Stem Cinema Soundstage Audio Mixer */}
      <AudioMixerStudio />

      {/* Section 08: Growth & ROAS Calculator */}
      <RoiCalculator />

      {/* Section 09: Executive Verdict Testimonials */}
      <Testimonials />

      {/* Section 10: Executive Leadership & Founders */}
      <FoundersSection />

      {/* Section 11: Dedicated KD Creation Luxury Wedding Division */}
      <WeddingSection />

      {/* Section 11.5: Client Knowledge Base & FAQ */}
      <FaqSection />

      {/* Section 12: Climax Contact & Project Inquiry */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
