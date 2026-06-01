"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { useBooking } from "./BookingContext";

const MESSAGES: Record<string, {
  title: string; sub: string; best: string;
  codeLabel: string; direct: string; cta: string;
}> = {
  fr: {
    title: "Pourquoi payer plus cher ailleurs ?",
    sub: "Sur le site officiel, bénéficiez toujours du",
    best: "meilleur tarif garanti.",
    codeLabel: "Code exclusif",
    direct: "Réservez en direct et économisez immédiatement.",
    cta: "Je réserve au meilleur prix",
  },
  en: {
    title: "Why pay more elsewhere?",
    sub: "On the official site, always enjoy our",
    best: "best rate guarantee.",
    codeLabel: "Exclusive code",
    direct: "Book direct and save immediately.",
    cta: "Book at the best price",
  },
  de: {
    title: "Warum woanders mehr zahlen?",
    sub: "Auf der offiziellen Website profitieren Sie stets von unserem",
    best: "Bestpreisgarantie.",
    codeLabel: "Exklusivcode",
    direct: "Direkt buchen und sofort sparen.",
    cta: "Zum besten Preis buchen",
  },
  it: {
    title: "Perché pagare di più altrove?",
    sub: "Sul sito ufficiale, goditi sempre il nostro",
    best: "miglior prezzo garantito.",
    codeLabel: "Codice esclusivo",
    direct: "Prenota direttamente e risparmia subito.",
    cta: "Prenota al miglior prezzo",
  },
  es: {
    title: "¿Por qué pagar más en otro sitio?",
    sub: "En el sitio oficial, disfruta siempre de nuestra",
    best: "mejor tarifa garantizada.",
    codeLabel: "Código exclusivo",
    direct: "Reserva directamente y ahorra de inmediato.",
    cta: "Reservar al mejor precio",
  },
  pt: {
    title: "Por que pagar mais em outro lugar?",
    sub: "No site oficial, aproveite sempre a nossa",
    best: "melhor tarifa garantida.",
    codeLabel: "Código exclusivo",
    direct: "Reserve diretamente e economize imediatamente.",
    cta: "Reservar ao melhor preço",
  },
  zh: {
    title: "为什么要在其他地方多付钱？",
    sub: "在官方网站上，享受我们的",
    best: "最优惠价格保证。",
    codeLabel: "专属优惠码",
    direct: "直接预订，立即节省。",
    cta: "以最优惠价格预订",
  },
  ar: {
    title: "لماذا تدفع أكثر في مكان آخر؟",
    sub: "على الموقع الرسمي، استمتع دائماً بـ",
    best: "ضمان أفضل سعر.",
    codeLabel: "كود حصري",
    direct: "احجز مباشرة ووفّر فوراً.",
    cta: "احجز بأفضل سعر",
  },
  he: {
    title: "למה לשלם יותר במקום אחר?",
    sub: "באתר הרשמי, תמיד תהנה מ",
    best: "ערובת המחיר הטוב ביותר.",
    codeLabel: "קוד בלעדי",
    direct: "הזמן ישירות וחסוך מיד.",
    cta: "הזמן במחיר הטוב ביותר",
  },
};

const SPARKLES = ["✦", "✧", "✦", "✧"];

export default function PromoPopup() {
  const { locale } = useLanguage();
  const { openBooking } = useBooking();
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [copied, setCopied] = useState(false);

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
    setAnimating(true);
    setTimeout(() => setAnimating(false), 1200);
    setTimeout(() => {
      handleClose();
      openBooking();
    }, 900);
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText("SOGLAMS").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 hidden md:flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Panel */}
      <div className="relative z-10 animate-popup-in bg-[#faf6f0] rounded-3xl shadow-2xl overflow-hidden w-full max-w-2xl mx-6 flex">

        {/* ── LEFT — illustration ── */}
        <div className="relative w-52 flex-shrink-0 bg-gradient-to-b from-[#f5ede0] to-[#ede0cc] flex items-end justify-center overflow-hidden">

          {/* Sparkles on animation */}
          {animating && SPARKLES.map((s, i) => (
            <span
              key={i}
              className="animate-sparkle absolute text-yellow-500 font-bold pointer-events-none"
              style={{
                left: `${15 + i * 18}%`,
                bottom: `${30 + (i % 2) * 20}%`,
                fontSize: `${14 + i * 3}px`,
                animationDelay: `${i * 0.12}s`,
              }}
            >
              {s}
            </span>
          ))}

          <Image
            src="/glamour-girl.png"
            alt="Glam's Hôtel"
            width={200}
            height={260}
            className={`object-contain select-none${animating ? " animate-marilyn" : ""}`}
            draggable={false}
            priority
          />
        </div>

        {/* ── RIGHT — content ── */}
        <div className="flex-1 p-7 flex flex-col gap-4 justify-center relative">

          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1"
            aria-label="Fermer"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Brand */}
          <div>
            <p className="text-[10px] tracking-[0.35em] text-[#9a8a6a] uppercase font-semibold mb-1">
              GLAM&apos;S HOTEL · PARIS
            </p>
            {/* Decorative line */}
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gradient-to-r from-[#c9a84c] to-transparent" />
              <span className="text-[#c9a84c] text-xs">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#c9a84c] to-transparent" />
            </div>
          </div>

          {/* Title */}
          <h2
            className="text-xl font-bold text-[#1a1a1a] leading-snug"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {m.title}
          </h2>

          {/* Sub */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {m.sub}{" "}
            <span className="text-[#a8365a] font-semibold">{m.best}</span>
          </p>

          {/* Code SOGLAMS */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500">{m.codeLabel} :</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white px-4 py-2 rounded-xl font-bold tracking-[0.2em] text-sm transition-colors"
            >
              SOGLAMS
              {copied ? (
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
            {copied && <span className="text-xs text-green-600 font-medium">Copié !</span>}
          </div>

          <p className="text-xs text-gray-400 -mt-2">{m.direct}</p>

          {/* CTA */}
          <button
            onClick={handleCTA}
            className="w-full bg-[#1a1a1a] hover:bg-[#a8365a] text-white font-semibold py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2.5 text-sm shadow-lg group"
          >
            <span className="text-base">🛎️</span>
            <span>{m.cta}</span>
            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Trust */}
          <div className="flex flex-wrap gap-2 mt-1">
            {["🔒 SSL", "✓ Meilleur tarif", "⚡ Confirmation immédiate"].map((badge) => (
              <span key={badge} className="text-[11px] text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
