import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KD MULTIMEDIA — Where Visuals Become Experiences',
  description:
    'KD MULTIMEDIA is a modern multimedia, creative production and digital marketing company combining visual production, content, branding, social media and performance marketing.',
  keywords: [
    'KD MULTIMEDIA',
    'Multimedia Production',
    'Brand Films',
    'Photography',
    'Reels',
    'Social Media Management',
    'Creative Strategy',
    'Performance Marketing',
    'Digital Marketing',
    'Content Production',
    'Brand Communication',
  ],
  openGraph: {
    title: 'KD MULTIMEDIA — Where Visuals Become Experiences',
    description:
      'Ultra-premium creative production, luxury branding, and high-performance digital marketing studio.',
    url: 'https://kdmultimedia.com',
    siteName: 'KD MULTIMEDIA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KD MULTIMEDIA — Where Visuals Become Experiences',
    description: 'Ultra-premium creative production and digital marketing company.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProductionCompany',
    name: 'KD MULTIMEDIA',
    tagline: 'WHERE VISUALS BECOME EXPERIENCES.',
    url: 'https://kdmultimedia.com',
    description:
      'A premium multimedia and creative company combining visual production, content, branding, social media and performance marketing.',
    sameAs: ['https://instagram.com', 'https://youtube.com', 'https://linkedin.com'],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian text-white font-sans antialiased bg-noise selection:bg-gold/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
