import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageContext";
import { BookingProvider } from "@/components/BookingContext";
import dynamic from "next/dynamic";

import Navbar from "@/components/Navbar";
import BookingReferrerBanner from "@/components/BookingReferrerBanner";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";

const Rooms        = dynamic(() => import("@/components/Rooms"));
const Video        = dynamic(() => import("@/components/Video"));
const Promotions   = dynamic(() => import("@/components/Promotions"));
const Attractions  = dynamic(() => import("@/components/Attractions"));
const Contact      = dynamic(() => import("@/components/Contact"));
const Footer       = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const PromoPopup   = dynamic(() => import("@/components/PromoPopup"));

export const metadata: Metadata = {
  title: "Glam's Hôtel Paris 14 — Boutique-Hotel 3 Sterne | Paris 75014",
  description:
    "Glam's Hôtel, ein 3-Sterne-Boutique-Hotel im Herzen des 14. Arrondissements von Paris. 27 einzigartig dekorierte Zimmer, Privatgarten & Terrasse. Direkt buchen und 7% sparen. 47 Rue Beaunier, Paris.",
  keywords: [
    "boutique hotel paris 14",
    "hotel paris 14 arrondissement",
    "glams hotel paris",
    "hotel 3 sterne paris",
    "hotel denfert rochereau",
    "hotel montparnasse paris",
    "hotel mit garten paris",
    "unterkunft paris 14",
  ],
  alternates: {
    canonical: "https://www.leglamshotel.com/de",
    languages: {
      "fr": "https://www.leglamshotel.com/",
      "en": "https://www.leglamshotel.com/en",
      "es": "https://www.leglamshotel.com/es",
      "de": "https://www.leglamshotel.com/de",
      "x-default": "https://www.leglamshotel.com/",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.leglamshotel.com/de",
    siteName: "Glam's Hôtel Paris",
    title: "Glam's Hôtel Paris — Boutique-Hotel 3 Sterne, 14. Arrondissement",
    description:
      "Charmantes Boutique-Hotel im 14. Arrondissement von Paris. 27 einzigartige Zimmer, Privatgarten & Terrasse. Direkt buchen und 7% sparen.",
    images: [
      {
        url: "https://webbox.imgix.net/images/rfnestsxnethraiw/7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp?auto=format,compress&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Glam's Hôtel Paris — Boutique-Zimmer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glam's Hôtel Paris — Boutique-Hotel 3 Sterne",
    description: "Charmantes Boutique-Hotel in Paris 14. 27 einzigartige Zimmer, Privatgarten. Direkt buchen und 7% sparen.",
  },
};

export default function DeHomePage() {
  return (
    <LanguageProvider defaultLocale="de">
      <BookingProvider>
        <Navbar />
        <BookingReferrerBanner />
        <main>
          <Hero />
          <Gallery />
          <About />
          <Rooms />
          <Video />
          <Promotions />
          <Attractions />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
        <PromoPopup />
      </BookingProvider>
    </LanguageProvider>
  );
}
