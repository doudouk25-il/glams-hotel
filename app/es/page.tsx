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
  title: "Glam's Hôtel París 14 — Hotel Boutique 3 Estrellas | París 75014",
  description:
    "Glam's Hôtel, hotel boutique de 3 estrellas en el corazón del 14.º distrito de París. 27 habitaciones únicas, jardín privado y terraza. Reserve directamente y ahorre 7%. 47 Rue Beaunier, París.",
  keywords: [
    "hotel boutique paris 14",
    "hotel paris 14 distrito",
    "glams hotel paris",
    "hotel 3 estrellas paris",
    "hotel cerca denfert rochereau",
    "hotel cerca montparnasse paris",
    "hotel con jardin paris",
    "alojamiento paris 14",
  ],
  alternates: {
    canonical: "https://www.leglamshotel.com/es",
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
    locale: "es_ES",
    url: "https://www.leglamshotel.com/es",
    siteName: "Glam's Hôtel Paris",
    title: "Glam's Hôtel París — Hotel Boutique 3 Estrellas, 14.º distrito",
    description:
      "Hotel boutique de charme en el 14.º distrito de París. 27 habitaciones únicas, jardín privado y terraza. Reserve directamente y ahorre 7%.",
    images: [
      {
        url: "https://webbox.imgix.net/images/rfnestsxnethraiw/7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp?auto=format,compress&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Glam's Hôtel París — Habitación boutique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glam's Hôtel París — Hotel Boutique 3 Estrellas",
    description: "Hotel boutique de charme en el 14.º distrito de París. 27 habitaciones únicas. Reserve directamente y ahorre 7%.",
  },
};

export default function EsHomePage() {
  return (
    <LanguageProvider defaultLocale="es">
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
