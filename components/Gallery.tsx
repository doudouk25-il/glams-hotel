"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useBooking } from "./BookingContext";

type Cat = "tout" | "chambres" | "terrasse" | "petitdej" | "reception" | "ambiances";

interface Item {
  src: string;
  label: string;
  cat: Exclude<Cat, "tout">;
}

const FILTERS: { id: Cat; label: string }[] = [
  { id: "tout",      label: "Tout" },
  { id: "chambres",  label: "Chambres" },
  { id: "terrasse",  label: "Terrasse" },
  { id: "petitdej",  label: "Petit-déjeuner" },
  { id: "reception", label: "Réception" },
];

const ITEMS: Item[] = [
  { src: "/Images/Reception/Reception 2.jpg",                                        label: "Réception",             cat: "reception" },
  { src: "/Images/Chambres/Marie antoinette/Chambre Toinette 1.jpg",                  label: "Marie Antoinette",      cat: "chambres"  },
  { src: "/Images/Couloirs/Mascotte1.jpeg",                                           label: "Esprit Glam's",         cat: "ambiances" },
  { src: "/Images/Buffet petit dejeuner/IMG_1018.jpg",                                label: "Buffet",                cat: "petitdej"  },
  { src: "/Images/Chambres/Terrasse room/Glamour Terrasse Room Pmr 1.jpg",            label: "Chambre avec terrasse", cat: "chambres"  },
  { src: "/Images/Chambres/L'effeuilleuse/Chambre Effeuilleuse 2.jpg",               label: "L'Effeuilleuse",        cat: "chambres"  },
  { src: "/Images/Couloirs/IMG_1003.jpg",                                             label: "Couloirs",              cat: "ambiances" },
  { src: "/Images/Reception/Reception3.jpg",                                          label: "Lobby",                 cat: "reception" },
  { src: "/Images/Chambres/Nostalgie à paris/Chambre nostalgie 1.jpg",               label: "Nostalgie Paris",       cat: "chambres"  },
  { src: "/Images/Terrasse/WhatsApp Image 2026-05-24 at 22.47.37.jpeg",              label: "Terrasse",              cat: "terrasse"  },
  { src: "/Images/Buffet petit dejeuner/IMG_1818.jpeg",                               label: "Petit-déjeuner",        cat: "petitdej"  },
  { src: "/Images/Chambres/Terrasse room/Glamour Terrasse Room Pmr 2.jpg",            label: "Chambre avec terrasse", cat: "chambres"  },
  { src: "/Images/Couloirs/IMG_1005.jpg",                                             label: "Esprit Glam's",         cat: "ambiances" },
  { src: "/Images/Chambres/Ballerine/Ballerine danseuse room 1.jpg",                  label: "La Ballerine",          cat: "chambres"  },
  { src: "/Images/Salle des Petits dejeuners/IMG_1819.jpg",                           label: "Salle petit-déjeuner",  cat: "petitdej"  },
  { src: "/Images/Chambres/Femme fatale/Masque Bleu Glams hotel.jpg",                 label: "Femme Fatale",          cat: "chambres"  },
  { src: "/Images/Couloirs/Mascotte2.jpeg",                                           label: "Décoration",            cat: "ambiances" },
  { src: "/Images/Chambres/Marie antoinette/Chambre Toinette 3.jpg",                  label: "Marie Antoinette",      cat: "chambres"  },
  { src: "/Images/Buffet petit dejeuner/IMG_1830.jpeg",                               label: "Buffet maison",         cat: "petitdej"  },
  { src: "/Images/Chambres/Terrasse room/Glamour Terrasse Room Pmr 3.jpg",            label: "Chambre avec terrasse", cat: "chambres"  },
  { src: "/Images/Couloirs/IMG_1007.jpg",                                             label: "Ambiances",             cat: "ambiances" },
  { src: "/Images/Chambres/Soleil en fleur/Chambre jaune 1.jpg",                      label: "Soleil en Fleurs",      cat: "chambres"  },
  { src: "/Images/Reception/Réception.jpg",                                           label: "Accueil",               cat: "reception" },
  { src: "/Images/Buffet petit dejeuner/Zoom pdj 1.jpeg",                             label: "Détail buffet",         cat: "petitdej"  },
  { src: "/Images/Chambres/L'effeuilleuse/Chambre Effeuilleuse 3.jpg",               label: "L'Effeuilleuse",        cat: "chambres"  },
  { src: "/Images/Couloirs/IMG_1023.jpg",                                             label: "Décoration",            cat: "ambiances" },
  { src: "/Images/Chambres/Terrasse room/Glamour Terrasse Room Pmr 5.jpg",            label: "Terrasse privée",       cat: "chambres"  },
  { src: "/Images/Chambres/Nostalgie à paris/Chambre nostalgie 3.jpg",               label: "Nostalgie Paris",       cat: "chambres"  },
  { src: "/Images/Salle des Petits dejeuners/IMG_1832.jpg",                           label: "Salle petit-déjeuner",  cat: "petitdej"  },
  { src: "/Images/Chambres/Un regard Glamour/Chambre gant jaune 3.jpg",              label: "Un Regard Glamour",     cat: "chambres"  },
  { src: "/Images/Couloirs/Mascotte 4.jpeg",                                          label: "Couloirs",              cat: "ambiances" },
  { src: "/Images/Chambres/Marie antoinette/Chambre Toinette 6.jpg",                  label: "Marie Antoinette",      cat: "chambres"  },
  { src: "/Images/Buffet petit dejeuner/Zoom pdj 2.jpeg",                             label: "Détail buffet",         cat: "petitdej"  },
  { src: "/Images/Chambres/Terrasse room/Glamour Terrasse Room Pmr 7.jpg",            label: "Terrasse vue",          cat: "chambres"  },
  { src: "/Images/Couloirs/IMG_1057.jpg",                                             label: "Ambiances",             cat: "ambiances" },
  { src: "/Images/Chambres/Ballerine/Ballerine danseuse room 3.jpg",                  label: "La Ballerine",          cat: "chambres"  },
  { src: "/Images/Terrasse/WhatsApp Image 2026-05-24 at 22.47.38 1.jpeg",            label: "Terrasse & potager",    cat: "terrasse"  },
  { src: "/Images/Reception/Réception 3.jpg",                                         label: "Hall d'entrée",         cat: "reception" },
  { src: "/Images/Chambres/Femme fatale/Masque Bleu Glams hotel2.jpg",                label: "Femme Fatale",          cat: "chambres"  },
  { src: "/Images/Buffet petit dejeuner/IMG_1843.jpeg",                               label: "Petit-déjeuner",        cat: "petitdej"  },
  { src: "/Images/Couloirs/IMG_1108.jpg",                                             label: "Esprit Glam's",         cat: "ambiances" },
  { src: "/Images/Chambres/Soleil en fleur/Chambre jaune 3.jpg",                      label: "Soleil en Fleurs",      cat: "chambres"  },
  { src: "/Images/Chambres/Terrasse room/Glamour Terrasse Room Pmr 9.jpg",            label: "Vue extérieure",        cat: "chambres"  },
  { src: "/Images/Chambres/L'effeuilleuse/Chambre Effeuilleuse 5.jpg",               label: "L'Effeuilleuse",        cat: "chambres"  },
  { src: "/Images/Terrasse/WhatsApp Image 2026-05-24 at 22.47.38 2.jpeg",            label: "Terrasse vue",          cat: "terrasse"  },
  { src: "/Images/Buffet petit dejeuner/Zoom pdj 3.jpeg",                             label: "Détail buffet",         cat: "petitdej"  },
  { src: "/Images/Couloirs/IMG_1112.jpg",                                             label: "Couloirs",              cat: "ambiances" },
  { src: "/Images/Chambres/Tourisme à paris/Chambre tourisme 1.jpg",                 label: "Tourisme Paris",        cat: "chambres"  },
  { src: "/Images/Reception/IMG_1001.jpg",                                            label: "Espace accueil",        cat: "reception" },
  { src: "/Images/Chambres/Marie antoinette/Marie antoinette miroir.jpg",              label: "Marie Antoinette",      cat: "chambres"  },
  { src: "/Images/Chambres/Femme fatale/IMG_1092.jpg",                                label: "Femme Fatale",          cat: "chambres"  },
  { src: "/Images/Chambres/Nostalgie à paris/Chambre nostalgie 5 logo.jpg",          label: "Nostalgie Paris",       cat: "chambres"  },
  { src: "/Images/Chambres/Ballerine/Ballerine danseuse room 5.jpg",                  label: "La Ballerine",          cat: "chambres"  },
  { src: "/Images/Chambres/Tourisme à paris/Chambre tourisme 3.jpg",                 label: "Tourisme Paris",        cat: "chambres"  },
  { src: "/Images/Chambres/Femme fatale/IMG_1094.jpg",                                label: "Femme Fatale",          cat: "chambres"  },
  { src: "/Images/Chambres/Un regard Glamour/Chambre gant jaune 7.jpg",              label: "Un Regard Glamour",     cat: "chambres"  },
  { src: "/Images/Chambres/Soleil en fleur/Chambre jaune 5.jpg",                      label: "Soleil en Fleurs",      cat: "chambres"  },
  { src: "/Images/Terrasse/WhatsApp Image 2026-05-24 at 22.47.38 3.jpeg",            label: "Jardin",                cat: "terrasse"  },
  { src: "/Images/Chambres/Tourisme à paris/Chambre tourisme 5.jpg",                 label: "Tourisme Paris",        cat: "chambres"  },
  { src: "/Images/Terrasse/WhatsApp Image 2026-05-24 at 22.47.38 4.jpeg",            label: "Potager",               cat: "terrasse"  },
  { src: "/Images/Chambres/Un regard Glamour/Chambre gant jaune 9.jpg",              label: "Un Regard Glamour",     cat: "chambres"  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const [filter, setFilter] = useState<Cat>("tout");
  const [fade, setFade]     = useState(true);
  const [inView, setInView] = useState(false);
  const [lightbox, setLightbox] = useState<{ item: Item; list: Item[] } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-reveal trigger
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.04 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setLightbox(null); return; }
      const idx = lightbox.list.indexOf(lightbox.item);
      if (e.key === "ArrowRight" && idx < lightbox.list.length - 1)
        setLightbox({ ...lightbox, item: lightbox.list[idx + 1] });
      if (e.key === "ArrowLeft" && idx > 0)
        setLightbox({ ...lightbox, item: lightbox.list[idx - 1] });
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const changeFilter = (f: Cat) => {
    if (f === filter) return;
    setFade(false);
    setTimeout(() => { setFilter(f); setFade(true); }, 180);
  };

  const items = filter === "tout" ? ITEMS : ITEMS.filter(i => i.cat === filter);

  const openLightbox = (item: Item) => setLightbox({ item, list: items });

  return (
    <section id="galerie" ref={sectionRef} className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p className="text-bordeaux text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            {t.gallery.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {t.gallery.title}
          </h2>
          <p className="text-text-mid text-lg max-w-xl mx-auto">{t.gallery.subtitle}</p>
        </div>

        {/* ── Filters ── */}
        <div className="flex overflow-x-auto scrollbar-hide gap-2 mb-10 pb-1 sm:flex-wrap sm:justify-center sm:overflow-x-visible">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => changeFilter(id)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === id
                  ? "bg-bordeaux text-white border-bordeaux shadow-lg shadow-bordeaux/20 scale-105"
                  : "bg-white text-text-mid border-rose/40 hover:border-bordeaux hover:text-bordeaux"
              }`}
            >
              {label}
              {filter === id && (
                <span className="ml-2 bg-white/25 rounded-full px-1.5 py-0.5 text-[11px] font-bold">
                  {items.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div
          className="columns-2 sm:columns-3 lg:columns-4 gap-3"
          style={{ opacity: fade ? 1 : 0, transition: "opacity 0.18s ease" }}
        >
          {items.map((item, i) => (
            <div
              key={`${filter}-${item.src}`}
              className="break-inside-avoid mb-3 group cursor-pointer"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.5s ${Math.min(i * 55, 700)}ms ease,
                             transform 0.5s ${Math.min(i * 55, 700)}ms ease`,
              }}
              onClick={() => openLightbox(item)}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_-8px_rgba(44,22,24,0.25)]">

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Hover overlay — slides up from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/85 via-bordeaux/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-75 ease-out">
                  <p
                    className="text-white font-semibold text-sm leading-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-white/60 text-[10px] tracking-[0.25em] uppercase mt-0.5">
                    Glam&apos;s Hôtel Paris
                  </p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/15 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-12">
          <button
            onClick={() => openBooking()}
            className="inline-flex items-center gap-2 bg-bordeaux hover:bg-bordeaux-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-sm shadow-lg shadow-bordeaux/20"
          >
            Réserver maintenant
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest z-10">
            {lightbox.list.indexOf(lightbox.item) + 1} / {lightbox.list.length}
          </p>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10 disabled:opacity-20"
            disabled={lightbox.list.indexOf(lightbox.item) === 0}
            onClick={e => {
              e.stopPropagation();
              const idx = lightbox.list.indexOf(lightbox.item);
              if (idx > 0) setLightbox({ ...lightbox, item: lightbox.list[idx - 1] });
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10 disabled:opacity-20"
            disabled={lightbox.list.indexOf(lightbox.item) === lightbox.list.length - 1}
            onClick={e => {
              e.stopPropagation();
              const idx = lightbox.list.indexOf(lightbox.item);
              if (idx < lightbox.list.length - 1) setLightbox({ ...lightbox, item: lightbox.list[idx + 1] });
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[88vh] w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.item.src}
              alt={lightbox.item.label}
              className="w-full h-auto object-contain rounded-xl max-h-[82vh]"
            />
            <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl">
              <p className="text-white font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                {lightbox.item.label}
              </p>
              <p className="text-white/50 text-xs tracking-widest uppercase mt-0.5">Glam&apos;s Hôtel Paris</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
