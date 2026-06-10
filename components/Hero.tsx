"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  const { t } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Détecte desktop une seule fois au montage
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  return (
    <section id="accueil" className="relative min-h-screen flex flex-col">

      {/* Vidéo — rendue UNIQUEMENT sur desktop, jamais téléchargée sur mobile */}
      {isDesktop && (
        <video
          src="/Video/Logo IA.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="https://webbox.imgix.net/images/rfnestsxnethraiw/7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp?auto=format,compress&w=1920&h=1080&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <track kind="captions" />
        </video>
      )}

      {/* Image statique — mobile uniquement, priorité maximale pour LCP */}
      {!isDesktop && (
        <Image
          src="https://webbox.imgix.net/images/rfnestsxnethraiw/7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp?auto=format,compress&w=828&h=1200&fit=crop&q=80"
          alt="Glam's Hôtel Paris — Hôtel boutique 3 étoiles"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/75" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 pt-24 pb-8 text-center">
        <p
          className="text-rose/90 text-sm font-medium tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          {t.hero.tagline}
        </p>
        <h1
          className="text-white font-bold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="block text-4xl sm:text-5xl lg:text-7xl">Glam&apos;s Hôtel</span>
          {t.hero.title.includes(" — ") && (
            <span className="block text-base sm:text-lg lg:text-xl font-normal tracking-wide text-white/80 mt-2">
              {t.hero.title.split(" — ")[1]}
            </span>
          )}
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Stars */}
        <div className="flex gap-1 mb-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="text-gold text-2xl">★</span>
          ))}
        </div>

        {/* Booking widget */}
        <div className="w-full max-w-4xl">
          <BookingWidget />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#hotel"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5" />
        </svg>
      </a>
    </section>
  );
}
