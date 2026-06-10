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
  title: "Glam's Hôtel Paris 14 — Boutique Hotel 3 Stars | Paris 75014",
  description:
    "Glam's Hôtel, a 3-star boutique hotel in the heart of Paris 14th arrondissement. 27 uniquely decorated rooms, private garden & terrace. Book direct and save 7%. 47 Rue Beaunier, Paris.",
  keywords: [
    "boutique hotel paris 14th",
    "hotel paris 14th arrondissement",
    "glams hotel paris",
    "hotel near denfert rochereau",
    "hotel near montparnasse paris",
    "charming hotel paris",
    "hotel with garden paris",
  ],
  alternates: {
    canonical: "https://www.leglamshotel.com/en",
    languages: {
      "fr": "https://www.leglamshotel.com/",
      "en": "https://www.leglamshotel.com/en",
      "x-default": "https://www.leglamshotel.com/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.leglamshotel.com/en",
    siteName: "Glam's Hôtel Paris",
    title: "Glam's Hôtel Paris — Boutique Hotel 3 Stars, Paris 14th",
    description:
      "Charming boutique hotel in Paris 14th arrondissement. 27 unique rooms, private garden & terrace. Book direct and save 7%.",
    images: [
      {
        url: "https://webbox.imgix.net/images/rfnestsxnethraiw/7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp?auto=format,compress&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Glam's Hôtel Paris — Boutique hotel room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glam's Hôtel Paris — Boutique Hotel 3 Stars",
    description: "Charming boutique hotel in Paris 14th. 27 unique rooms, private garden. Book direct and save 7%.",
  },
};

export default function EnHomePage() {
  return (
    <LanguageProvider defaultLocale="en">
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
