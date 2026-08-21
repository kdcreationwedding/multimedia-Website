import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AwardsTicker from "@/components/AwardsTicker";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import GearLab from "@/components/GearLab";
import RoiCalculator from "@/components/RoiCalculator";
import Testimonials from "@/components/Testimonials";
import FoundersSection from "@/components/FoundersSection";
import WeddingSection from "@/components/WeddingSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import KDOrbitCanvas from "@/components/3d/KDOrbitCanvas";
import AudioEngine from "@/components/AudioEngine";
import KeyShortcutHandler from "@/components/KeyShortcutHandler";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="relative bg-obsidian text-white overflow-x-hidden font-sans selection:bg-gold/30 selection:text-obsidian">
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

      {/* Section 03: Executive Vision / About */}
      <About />

      {/* Section 04: Full Spectrum Capabilities */}
      <Services />

      {/* Section 05: Featured Case Studies & Portfolio */}
      <Portfolio />

      {/* Section 06: Studio Hardware Gear Lab */}
      <GearLab />

      {/* Section 07: Growth & ROAS Calculator */}
      <RoiCalculator />

      {/* Section 08: Executive Verdict Testimonials */}
      <Testimonials />

      {/* Section 09: Executive Leadership & Founders (Moved to Bottom) */}
      <FoundersSection />

      {/* Section 10: Dedicated KD Creation Luxury Wedding Division */}
      <WeddingSection />

      {/* Section 11: Climax Contact & Project Inquiry */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
