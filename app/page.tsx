import { LanguageProvider } from "@/components/LanguageContext";
import { BookingProvider } from "@/components/BookingContext";
import Navbar from "@/components/Navbar";
import BookingReferrerBanner from "@/components/BookingReferrerBanner";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Video from "@/components/Video";
import Promotions from "@/components/Promotions";
import Attractions from "@/components/Attractions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoPopup from "@/components/PromoPopup";

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
