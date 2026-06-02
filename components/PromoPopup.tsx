"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useBooking } from "./BookingContext";

const MESSAGES: Record<string, {
  title1: string; title2: string; title3: string;
  sub: string; best: string;
  direct1: string; direct2: string; directBold: string;
  cta: string;
}> = {
  fr: {
    title1: "Pourquoi payer",
    title2: "plus cher",
    title3: "ailleurs ?",
    sub: "Sur le site officiel du Glam’s Hotel, vous bénéficiez toujours de notre",
    best: "meilleur tarif garanti.",
    direct1: "Réservez en direct,",
    directBold: "économisez",
    direct2: "immédiatement.",
    cta: "Je réserve au meilleur prix",
  },
  en: {
    title1: "Why pay",
    title2: "more",
    title3: "elsewhere?",
    sub: "On the official Glam’s Hotel website, you always benefit from our",
    best: "best rate guarantee.",
    direct1: "Book direct,",
    directBold: "save",
    direct2: "immediately.",
    cta: "Book at the best price",
  },
  de: {
    title1: "Warum",
    title2: "mehr zahlen",
    title3: "woanders?",
    sub: "Auf der offiziellen Website des Glam’s Hotel profitieren Sie stets von unserem",
    best: "Bestpreisgarantie.",
    direct1: "Direkt buchen,",
    directBold: "sofort sparen.",
    direct2: "",
    cta: "Zum besten Preis buchen",
  },
  it: {
    title1: "Perché pagare",
    title2: "di più",
    title3: "altrove?",
    sub: "Sul sito ufficiale del Glam’s Hotel, goditi sempre il nostro",
    best: "miglior prezzo garantito.",
    direct1: "Prenota direttamente,",
    directBold: "risparmia",
    direct2: "subito.",
    cta: "Prenota al miglior prezzo",
  },
  es: {
    title1: "¿Por qué pagar",
    title2: "más caro",
    title3: "en otro sitio?",
    sub: "En el sitio oficial del Glam’s Hotel, disfruta siempre de nuestra",
    best: "mejor tarifa garantizada.",
    direct1: "Reserva directamente,",
    directBold: "ahorra",
    direct2: "de inmediato.",
    cta: "Reservar al mejor precio",
  },
  pt: {
    title1: "Por que pagar",
    title2: "mais caro",
    title3: "em outro lugar?",
    sub: "No site oficial do Glam’s Hotel, aproveite sempre a nossa",
    best: "melhor tarifa garantida.",
    direct1: "Reserve diretamente,",
    directBold: "economize",
    direct2: "imediatamente.",
    cta: "Reservar ao melhor preço",
  },
  zh: {
    title1: "为什么要",
    title2: "多花酷",
    title3: "在别处？",
    sub: "在Glam’s Hotel官方网站，您始终享受我们的",
    best: "最优惠价格保证。",
    direct1: "直接预订，",
    directBold: "立即节省。",
    direct2: "",
    cta: "以最优惠价格预订",
  },
  ar: {
    title1: "لماذا تدفع",
    title2: "أكثر",
    title3: "في مكان آخر؟",
    sub: "على الموقع الرسمي لفندق Glam’s، استمتع دائماً بـ",
    best: "ضمان أفضل سعر.",
    direct1: "احجز مباشرة،",
    directBold: "وفّر",
    direct2: "فوراً.",
    cta: "أحجز بأفضل سعر",
  },
  he: {
    title1: "למה לשלם",
    title2: "יותר",
    title3: "במקום אחר?",
    sub: "באתר הרשמי של Glam’s Hotel, תמיד תהנה מ",
    best: "ערובת המחיר הטוב ביותר.",
    direct1: "הזמן ישירות,",
    directBold: "חסוך",
    direct2: "מיד.",
    cta: "הזמן במחיר הטוב ביותר",
  },
};

export default function PromoPopup() {
  const { locale } = useLanguage();
  const { openBooking } = useBooking();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  const m = MESSAGES[locale] ?? MESSAGES.fr;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    if (sessionStorage.getItem("promo-popup-seen")) return;

    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("promo-popup-seen", "1");
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setVisible(false);

  const handleCTA = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setPlaying(true);
    }
    // Open booking after the animation plays (~2s)
    setTimeout(() => {
      handleClose();
      openBooking();
    }, 2000);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 hidden md:flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Panel — gold border */}
      <div
        className="relative z-10 bg-[#faf6ec] rounded-2xl overflow-hidden shadow-2xl flex w-full max-w-3xl mx-6"
        style={{ border: "1.5px solid #c9a84c" }}
      >
        {/* ── LEFT — video ── */}
        <div className="relative w-[42%] flex-shrink-0 overflow-hidden bg-[#f0e8d8]">
          <video
            ref={videoRef}
            src="/glamour-girl.mp4"
            autoPlay
            muted
            loop={!playing}
            playsInline
            className="w-full h-full object-cover"
            style={{ minHeight: "400px" }}
            onEnded={() => setPlaying(false)}
          >
            <track kind="captions" />
          </video>
        </div>

        {/* ── RIGHT — content ── */}
        <div className="flex-1 px-8 py-8 flex flex-col justify-between relative">

          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-5 text-gray-400 hover:text-gray-700 transition-colors text-xl leading-none"
            aria-label="Fermer"
          >
            &#x2715;
          </button>

          {/* Logo GH */}
          <div className="flex flex-col items-center gap-1 mb-2">
            {/* GH monogram */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-1"
              style={{ border: "1.5px solid #c9a84c" }}
            >
              <span
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#c9a84c", fontFamily: "var(--font-playfair)" }}
              >
                GH
              </span>
            </div>
            <p className="text-xs tracking-[0.3em] font-semibold text-[#1a1a1a] uppercase">
              GLAM&apos;S HOTEL
            </p>
            {/* Decorative separator */}
            <div className="flex items-center gap-2 w-32 mt-0.5">
              <div className="h-px flex-1 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[10px]">PARIS</span>
              <div className="h-px flex-1 bg-[#c9a84c]" />
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-3xl font-bold leading-tight text-[#1a1a1a] text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {m.title1}{" "}
            <span style={{ color: "#c9a84c" }}>{m.title2}</span>{" "}
            {m.title3}
          </h2>

          {/* Divider */}
          <div className="flex items-center gap-3 my-1">
            <div className="h-px flex-1 bg-[#c9a84c]/30" />
            <span className="text-[#c9a84c] text-sm">&#10022;</span>
            <div className="h-px flex-1 bg-[#c9a84c]/30" />
          </div>

          {/* Body — 2 cols */}
          <div className="flex gap-4 items-start">
            <p className="flex-1 text-sm text-gray-600 leading-relaxed text-center">
              {m.sub}{" "}
              <span className="font-semibold" style={{ color: "#c9a84c" }}>
                {m.best}
              </span>
            </p>
            <div className="w-px bg-gray-200 self-stretch" />
            <p className="flex-1 text-sm text-center">
              <span className="block">
                <span className="text-gray-500">{m.direct1}</span>
              </span>
              <span className="block font-semibold mt-0.5" style={{ color: "#c9a84c" }}>
                {m.directBold}
              </span>
              {m.direct2 && (
                <span className="block text-gray-500">{m.direct2}</span>
              )}
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleCTA}
            className="mt-4 w-full text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-base shadow-lg hover:opacity-90"
            style={{
              background: "#1a1a1a",
              border: "1.5px solid #c9a84c",
            }}
          >
            <span style={{ fontSize: "1.2em" }}>🛎️</span>
            {m.cta}
          </button>

          {/* Bottom ornament */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="h-px w-12 bg-[#c9a84c]/30" />
            <span className="text-[#c9a84c]/50 text-base">&#10022;</span>
            <div className="h-px w-12 bg-[#c9a84c]/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
