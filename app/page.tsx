import { LanguageProvider } from "@/components/LanguageContext";
import { BookingProvider } from "@/components/BookingContext";
import dynamic from "next/dynamic";

// Above the fold — chargement immédiat (critique pour LCP)
import Navbar from "@/components/Navbar";
import BookingReferrerBanner from "@/components/BookingReferrerBanner";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";

// Sous le fold — lazy load
const Rooms      = dynamic(() => import("@/components/Rooms"));
const Video      = dynamic(() => import("@/components/Video"));
const Promotions = dynamic(() => import("@/components/Promotions"));
const Attractions = dynamic(() => import("@/components/Attractions"));
const Contact    = dynamic(() => import("@/components/Contact"));
const Footer     = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const PromoPopup = dynamic(() => import("@/components/PromoPopup"));

export default function Home() {
  return (
    <LanguageProvider>
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
