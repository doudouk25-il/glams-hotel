"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

const MESSAGES: Record<string, { title: string; sub: string; cta: string; dismiss: string }> = {
  fr: { title: "Vous venez de Booking.com ?", sub: "Réservez directement ici et économisez 7% avec le code", cta: "Réserver en direct", dismiss: "Fermer" },
  en: { title: "Coming from Booking.com?", sub: "Book directly here and save 7% with code", cta: "Book direct", dismiss: "Close" },
  de: { title: "Kommen Sie von Booking.com?", sub: "Direkt buchen und 7% sparen mit dem Code", cta: "Direkt buchen", dismiss: "Schließen" },
  it: { title: "Arrivate da Booking.com?", sub: "Prenotate direttamente qui e risparmiate il 7% con il codice", cta: "Prenota diretto", dismiss: "Chiudi" },
  es: { title: "¿Viene de Booking.com?", sub: "Reserve directamente aquí y ahorre 7% con el código", cta: "Reservar directo", dismiss: "Cerrar" },
  pt: { title: "Vindo do Booking.com?", sub: "Reserve diretamente aqui e economize 7% com o código", cta: "Reservar direto", dismiss: "Fechar" },
  zh: { title: "您来自Booking.com吗？", sub: "直接在此预订，使用优惠码节省7%", cta: "直接预订", dismiss: "关闭" },
  ar: { title: "هل أتيتَ من Booking.com؟", sub: "احجز مباشرة هنا ووفر 7% باستخدام الرمز", cta: "احجز مباشرة", dismiss: "إغلاق" },
  he: { title: "הגעתם מ-Booking.com?", sub: "הזמינו ישירות כאן וחסכו 7% עם הקוד", cta: "הזמן ישירות", dismiss: "סגור" },
};

export default function BookingReferrerBanner() {
  const { locale } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("booking-banner-dismissed")) return;

    const fromBooking =
      document.referrer.includes("booking.com") ||
      window.location.search.includes("ref=booking") ||
      window.location.search.includes("utm_source=booking");

    if (fromBooking) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("booking-banner-dismissed", "1");
    setVisible(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText("SOGLAMS").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!visible) return null;

  const msg = MESSAGES[locale] ?? MESSAGES.fr;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 px-4 py-2">
      <div className="max-w-3xl mx-auto bg-white border border-bordeaux/30 rounded-2xl shadow-xl px-5 py-4 flex flex-col sm:flex-row items-center gap-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-full bg-bordeaux/10 flex items-center justify-center flex-shrink-0 text-xl">
          💰
        </div>

        {/* Text */}
        <div className="flex-1 text-center sm:text-left">
          <p className="font-semibold text-text-dark text-sm">{msg.title}</p>
          <p className="text-text-mid text-xs mt-0.5">
            {msg.sub}&nbsp;
            <button
              onClick={copyCode}
              className="inline-flex items-center gap-1 bg-bordeaux/10 hover:bg-bordeaux/20 text-bordeaux font-bold px-2 py-0.5 rounded-md text-xs transition-colors"
            >
              SOGLAMS
              {copied ? (
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              )}
            </button>
          </p>
        </div>

        {/* CTA */}
        <a
          href="#hero-booking"
          onClick={dismiss}
          className="flex-shrink-0 bg-bordeaux hover:bg-bordeaux-dark text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap"
        >
          {msg.cta} — <span className="text-gold font-bold">-7%</span>
        </a>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label={msg.dismiss}
          className="flex-shrink-0 text-text-mid hover:text-text-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
