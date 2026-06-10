import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glam's Hôtel Paris 14 — Hôtel Boutique 3 Étoiles | Paris 75014",
  description:
    "Glam's Hôtel, hôtel boutique 3 étoiles au cœur du 14e arrondissement de Paris. 27 chambres décorées avec art, jardin & terrasse. Réservez en direct et économisez 7%. 47 Rue Beaunier, Paris.",
  keywords: [
    "hôtel Paris 14",
    "hotel boutique paris",
    "glams hotel",
    "hotel 3 etoiles paris",
    "hotel denfert rochereau",
    "hotel paris 14eme",
    "boutique hotel paris",
    "hotel charme paris",
    "glamour hotel paris",
  ],
  authors: [{ name: "Glam's Hôtel" }],
  creator: "Glam's Hôtel",
  publisher: "Glam's Hôtel",
  metadataBase: new URL("https://www.leglamshotel.com"),
  alternates: {
    canonical: "https://www.leglamshotel.com",
    languages: {
      "fr": "https://www.leglamshotel.com",
      "en": "https://www.leglamshotel.com",
      "de": "https://www.leglamshotel.com",
      "es": "https://www.leglamshotel.com",
      "it": "https://www.leglamshotel.com",
      "pt": "https://www.leglamshotel.com",
      "zh": "https://www.leglamshotel.com",
      "ar": "https://www.leglamshotel.com",
      "he": "https://www.leglamshotel.com",
      "x-default": "https://www.leglamshotel.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US", "es_ES"],
    url: "https://www.leglamshotel.com",
    siteName: "Glam's Hôtel Paris",
    title: "Glam's Hôtel Paris — Hôtel Boutique 3 Étoiles au 14e",
    description:
      "Découvrez Glam's Hôtel, un hôtel boutique d'exception au cœur du 14e arrondissement de Paris. 27 chambres uniques, jardin et terrasse. Réservez en direct.",
    images: [
      {
        url: "https://webbox.imgix.net/images/rfnestsxnethraiw/7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp?auto=format,compress&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Glam's Hôtel Paris — Chambre boutique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glam's Hôtel Paris — Hôtel Boutique 3 Étoiles",
    description:
      "Hôtel boutique de charme au 14e arrondissement de Paris. 27 chambres uniques, jardin & terrasse. Réservez en direct.",
    images: [
      "https://webbox.imgix.net/images/rfnestsxnethraiw/7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp?auto=format,compress&w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "VCjJWrH-VRr6TEYCJA3buIKceqBnJr8-faJBjhVFJvY",
  },
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.leglamshotel.com",
  name: "Glam's Hôtel Paris",
  description:
    "Hôtel boutique 3 étoiles au cœur du 14e arrondissement de Paris. 27 chambres uniques, jardin & terrasse.",
  inLanguage: ["fr-FR", "en-US", "es-ES"],
};

const jsonLdNavigation = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Navigation Glam's Hôtel",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "L'Hôtel",
      description:
        "Maison d'hôtes boutique de 27 chambres au cœur du 14e arrondissement de Paris",
      url: "https://www.leglamshotel.com/#hotel",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Nos Chambres",
      description:
        "9 chambres uniques décorées avec passion — Marie Antoinette, L'Effeuilleuse, La Ballerine, Femme Fatale...",
      url: "https://www.leglamshotel.com/#chambres",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Galerie Photos",
      description:
        "Découvrez l'hôtel en images — chambres, terrasse, petit-déjeuner, réception",
      url: "https://www.leglamshotel.com/#galerie",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Offre Exclusive",
      description:
        "Réservez en direct et économisez 7% avec le code promo SOGLAMS",
      url: "https://www.leglamshotel.com/#offres",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "À Proximité",
      description:
        "Catacombes de Paris, Tour Montparnasse, Porte d'Orléans — Paris à votre porte",
      url: "https://www.leglamshotel.com/#attractions",
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Contact & Réservation",
      description:
        "Contactez Glam's Hôtel — 47 Rue Beaunier Paris 75014 · +33 1 45 40 93 53",
      url: "https://www.leglamshotel.com/#contact",
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Glam's Hôtel",
  description:
    "Hôtel boutique 3 étoiles au cœur du 14e arrondissement de Paris. 27 chambres décorées avec art, jardin & terrasse.",
  url: "https://www.leglamshotel.com",
  telephone: "+33145409353",
  email: "reception@leglamshotel.com",
  starRating: { "@type": "Rating", ratingValue: "3" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "8.4",
    bestRating: "10",
    worstRating: "1",
    ratingCount: 312,
    reviewCount: 312,
  },
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47 Rue Beaunier",
    addressLocality: "Paris",
    postalCode: "75014",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8214,
    longitude: 2.3246,
  },
  image: [
    "https://webbox.imgix.net/images/rfnestsxnethraiw/7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp",
    "https://webbox.imgix.net/images/rfnestsxnethraiw/28313d67-01ba-487b-a349-04683b8b7b92.webp",
  ],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Jardin", value: true },
    { "@type": "LocationFeatureSpecification", name: "Terrasse", value: true },
    { "@type": "LocationFeatureSpecification", name: "Petit-déjeuner disponible", value: true },
    { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Chambres accessibles", value: true },
  ],
  checkinTime: "15:00",
  checkoutTime: "11:00",
  numberOfRooms: 27,
  sameAs: [
    "https://www.booking.com/hotel/fr/glams.fr.html",
    "https://www.tripadvisor.fr/Hotel_Review-g187147-d1037281-Reviews-Glam_s_Hotel-Paris_Ile_de_France.html",
    "https://www.instagram.com/leglamshotel",
  ],
  hasMap: "https://maps.google.com/?q=47+Rue+Beaunier+Paris+75014",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://direct-book.com/properties/GlamshotelDirect",
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: {
      "@type": "LodgingReservation",
      name: "Réservation Glam's Hôtel",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${lato.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Preconnect — réduit le render-blocking */}
        <link rel="preconnect" href="https://webbox.imgix.net" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://direct-book.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdNavigation) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Google Ads — gtag.js AW-18203255112 */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18203255112"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18203255112');
        `}
      </Script>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
