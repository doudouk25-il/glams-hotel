"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useBooking } from "./BookingContext";

export default function Promotions() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("SOGLAMS");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBook = () => openBooking();

  return (
    <section id="offres" className="py-20 lg:py-28 bg-bordeaux relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-rose" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-rose" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main offer */}
          <div className="text-white">
            <p className="text-rose/80 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
              {t.promotions.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {t.promotions.title}
            </h2>
            <p className="text-white/75 text-lg mb-8">
              {t.promotions.subtitle}
            </p>

            {/* Discount badge */}
            <div className="inline-flex items-baseline gap-2 bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-4 mb-8">
              <span
                className="text-6xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {t.promotions.discount}
              </span>
              <span className="text-white/80 text-lg">{t.promotions.discountText}</span>
            </div>

            {/* Promo code */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-white/70 text-sm">{t.promotions.code} :</span>
              <button
                onClick={copyCode}
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm tracking-widest border border-white/20"
              >
                {t.promotions.codeValue}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              </button>
              {copied && (
                <span className="text-green-300 text-sm">✓ Copié !</span>
              )}
            </div>

            <button
              onClick={handleBook}
              className="bg-white text-bordeaux hover:bg-rose font-bold px-8 py-4 rounded-xl transition-colors text-base"
            >
              {t.promotions.cta}
            </button>
          </div>

          {/* Right: Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.promotions.advantages.map((adv, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
