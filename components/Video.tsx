"use client";

import { useEffect, useRef, useState } from "react";

export default function Video() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="video" ref={sectionRef} className="py-20 lg:py-28 bg-blush overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)" }}
        >
          <p className="text-bordeaux text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Découvrez
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            L&apos;hôtel en vidéo
          </h2>
          <p className="text-text-mid text-lg max-w-xl mx-auto">
            À 3 minutes du métro, au cœur du 14e arrondissement
          </p>
        </div>

        {/* Video container */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-bordeaux/10 transition-all duration-1000"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.96)" }}
        >
          {/* Decorative border */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-bordeaux/10 pointer-events-none z-10" />

          <video
            src="/Video/3minutes du metro.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full aspect-video object-cover bg-text-dark"
            poster=""
          >
            <track kind="captions" srcLang="fr" label="Français" />
          </video>
        </div>

        {/* Caption */}
        <div
          className="text-center mt-6 transition-all duration-700 delay-300"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)" }}
        >
          <p className="text-text-mid text-sm">
            Glam&apos;s Hôtel Paris · 47 Rue Beaunier, Paris 14e
          </p>
        </div>
      </div>
    </section>
  );
}
