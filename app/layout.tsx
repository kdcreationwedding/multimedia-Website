import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kdmultimedia.in'),
  title: 'KD MULTIMEDIA — 8K Cinematography, Production & Performance Marketing Agency Ahmedabad',
  description:
    'KD MULTIMEDIA is Ahmedabad’s premier 8K cinema production and performance marketing agency. Specializing in commercial video shooting, Adobe Creative Suite editing (Premiere Pro & After Effects), Meta/Google ads & luxury weddings (KD Creation).',
  keywords: [
    'KD MULTIMEDIA',
    'KD Creation',
    'Wedding Photographer Ahmedabad',
    'Commercial Videography Ahmedabad',
    'Pre Wedding Photographer Ahmedabad',
    '8K Cinema Shooting',
    'Adobe Premiere Pro Editing',
    'After Effects Motion FX',
    'Meta Ads Agency Ahmedabad',
    'Google Ads Performance Marketing',
    'Multimedia Production Agency Gujarat',
  ],
  alternates: {
    canonical: 'https://kdmultimedia.in',
  },
  openGraph: {
    title: 'KD MULTIMEDIA — 8K Cinematography, Production & Performance Marketing Agency Ahmedabad',
    description:
      'Ultra-premium 8K cinema production, Adobe Creative Suite post-production, and high-ROAS Meta & Google ads agency in Ahmedabad, Gujarat.',
    url: 'https://kdmultimedia.in',
    siteName: 'KD MULTIMEDIA',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://kdmultimedia.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KD MULTIMEDIA Productions & Performance Marketing Ahmedabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KD MULTIMEDIA — 8K Cinematography & Performance Marketing Agency Ahmedabad',
    description: 'Premier 8K cinema production and performance marketing studio in Ahmedabad, Gujarat.',
    images: ['https://kdmultimedia.in/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        "@type": "LocalBusiness",
        "@id": "https://kdmultimedia.in/#organization",
        "name": "KD Multimedia",
        "legalName": "KD Multimedia Productions & Marketing",
        "url": "https://kdmultimedia.in",
        "logo": "https://kdmultimedia.in/kd-symbol.png",
        "image": "https://kdmultimedia.in/og-image.jpg",
        "telephone": "+917016563129",
        "email": "kdmultimedia.co@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.0225",
          "longitude": "72.5714"
        },
        "priceRange": "₹₹₹",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/kdmultimedia",
          "https://www.youtube.com/@kdmultimedia",
          "https://kdcreations.in"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://kdmultimedia.in/#website",
        "url": "https://kdmultimedia.in",
        "name": "KD Multimedia",
        "publisher": {
          "@id": "https://kdmultimedia.in/#organization"
        }
      }
    ]
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
