import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kdmultimedia.in'),
  title: 'KD MULTIMEDIA — 8K Cinematography, Video Production & Meta Ads Agency Ahmedabad',
  description:
    'KD MULTIMEDIA is Ahmedabad’s premier 8K cinema production and performance marketing agency. Specializing in commercial video shooting, Adobe Creative Suite editing (Premiere Pro & After Effects), Meta & Google ads, 3D animations, and luxury destination weddings (KD Creation). Call: +91 70165 63129.',
  keywords: [
    'KD MULTIMEDIA',
    'KD Creation',
    'Video Production Company in Ahmedabad',
    'Commercial Video Shoot Ahmedabad',
    '8K Cinema Shooting Ahmedabad',
    'Product Photography Ahmedabad',
    'Best Video Editing Studio Ahmedabad',
    'Adobe Premiere Pro Editor Ahmedabad',
    'After Effects Motion Graphics Studio Ahmedabad',
    'Meta Ads Agency Ahmedabad',
    'Facebook Ads Agency Ahmedabad',
    'Instagram Reels Viral Video Agency Ahmedabad',
    'Google Ads Agency Ahmedabad',
    'Performance Marketing Agency Gujarat',
    'Corporate Film Maker Ahmedabad',
    'TV Commercial Production House Gujarat',
    'Luxury Wedding Cinematography Ahmedabad',
    'Destination Wedding Photographer Gujarat',
    'Pre Wedding Shoot Ahmedabad',
    'Drone Videography Services Ahmedabad',
    'Full Stack Web Development Ahmedabad',
    'SaaS Product Animation Video Gujarat',
    'Commercial Ad Film Maker Ahmedabad',
    'Brand Filmmaker Gujarat',
    'Fashion Photography Studio Ahmedabad',
  ],
  authors: [
    { name: 'Mr. Mahesh', url: 'https://www.kdmultimedia.in' },
    { name: 'Mr. Harshad Chavda' },
    { name: 'Mr. Aniket Vaghela' },
  ],
  creator: 'KD MULTIMEDIA Productions',
  publisher: 'KD MULTIMEDIA Productions & Marketing',
  alternates: {
    canonical: 'https://www.kdmultimedia.in',
  },
  verification: {
    google: 'sNiOkkjJDtkFA8enRV9OO49mwq7C1CY5E7ltnPZi-Og',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'KD MULTIMEDIA — 8K Cinematography, Production & Performance Marketing Agency Ahmedabad',
    description:
      'Ultra-premium 8K cinema production, Adobe Creative Suite post-production, high-ROAS Meta & Google ads, and luxury destination weddings in Ahmedabad, Gujarat. Phone: +91 70165 63129.',
    url: 'https://www.kdmultimedia.in',
    siteName: 'KD MULTIMEDIA',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.kdmultimedia.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KD MULTIMEDIA Productions & Performance Marketing Ahmedabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KD MULTIMEDIA — 8K Cinematography & Performance Marketing Agency Ahmedabad',
    description: 'Premier 8K cinema production, Adobe editing, and performance marketing studio in Ahmedabad, Gujarat.',
    images: ['https://www.kdmultimedia.in/og-image.jpg'],
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
    'geo.position': '23.0225;72.5714',
    'ICBM': '23.0225, 72.5714',
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
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://www.kdmultimedia.in/#organization',
        name: 'KD Multimedia',
        legalName: 'KD Multimedia Productions & Marketing',
        url: 'https://www.kdmultimedia.in',
        logo: 'https://www.kdmultimedia.in/kd-symbol.png',
        image: 'https://www.kdmultimedia.in/og-image.jpg',
        telephone: '+917016563129',
        email: 'kdmultimedia.co@gmail.com',
        priceRange: '₹₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer, UPI',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ahmedabad Soundstage Studio Hub',
          addressLocality: 'Ahmedabad',
          addressRegion: 'Gujarat',
          postalCode: '380001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '23.0225',
          longitude: '72.5714',
        },
        areaServed: [
          { '@type': 'City', name: 'Ahmedabad' },
          { '@type': 'City', name: 'Gandhinagar' },
          { '@type': 'City', name: 'Vadodara' },
          { '@type': 'City', name: 'Surat' },
          { '@type': 'City', name: 'Rajkot' },
          { '@type': 'AdministrativeArea', name: 'Gujarat' },
          { '@type': 'City', name: 'Mumbai' },
          { '@type': 'Country', name: 'India' },
        ],
        founder: [
          {
            '@type': 'Person',
            name: 'Mr. Mahesh',
            jobTitle: 'Founder & Creative Director',
          },
          {
            '@type': 'Person',
            name: 'Mr. Harshad Chavda',
            jobTitle: 'Co-Founder & Head of Commercial Shoots',
          },
          {
            '@type': 'Person',
            name: 'Mr. Aniket Vaghela',
            jobTitle: 'Co-Founder & Chief Operating Officer',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          bestRating: '5',
          ratingCount: '138',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'KD Multimedia Production & Marketing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '8K Commercial Video Shooting & Film Production',
                description: 'Full-frame 8K cinema camera rigs, anamorphic optics, 4K FPV drone footage, and soundstage lighting for TV commercials and brand films.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Adobe Creative Suite Post-Production & Color Grading',
                description: 'Adobe Premiere Pro multitrack editing, After Effects 2D/3D kinetic motion graphics, and DaVinci Resolve HDR color grading.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Meta Ads & Google Performance Marketing',
                description: 'Direct-response Meta Advantage+ Shopping Campaigns (ASC), Google Performance Max (PMax), and high-converting video creative funnels.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'KD Creation Luxury Wedding Cinematography',
                description: 'Royal destination wedding films, candid photography, concept pre-wedding teasers, and drone coverage across Gujarat and India.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial Product Photography & Retouching',
                description: '360 studio turntable product photography, e-commerce catalog shoots, and high-end beauty and texture retouching.',
              },
            },
          ],
        },
        sameAs: [
          'https://www.instagram.com/kdmultimedia',
          'https://www.youtube.com/@kdmultimedia',
          'https://kdcreations.in',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.kdmultimedia.in/#website',
        url: 'https://www.kdmultimedia.in',
        name: 'KD Multimedia',
        description: 'Ahmedabad Premier 8K Cinema Production, Adobe Video Editing & Performance Marketing Agency',
        publisher: {
          '@id': 'https://www.kdmultimedia.in/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="sNiOkkjJDtkFA8enRV9OO49mwq7C1CY5E7ltnPZi-Og" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
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
