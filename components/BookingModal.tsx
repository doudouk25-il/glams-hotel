"use client";

import { useEffect, useRef, useState } from "react";

interface BookingModalProps {
  url: string;
  onClose: () => void;
}

export default function BookingModal({ url, onClose }: BookingModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    // Fallback : masque le spinner après 8s quoi qu'il arrive
    const timeout = setTimeout(() => setLoading(false), 8000);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Réservation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 flex flex-col w-full h-full max-w-5xl mx-auto my-4 sm:my-8 rounded-2xl overflow-hidden shadow-2xl bg-white">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-bordeaux flex-shrink-0">
          <div className="flex items-center gap-3">
            <span
              className="text-white font-bold text-base"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Glam&apos;s Hôtel — Réservation
            </span>
            <span className="hidden sm:inline text-white/60 text-xs">
              ✦ Réservez en direct et économisez 7%
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fermer"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 relative overflow-hidden">

          {/* Spinner — disparaît dès que l'iframe charge */}
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream z-10 gap-4">
              <div className="w-10 h-10 border-4 border-rose border-t-bordeaux rounded-full animate-spin" />
              <p className="text-text-mid text-sm">Chargement du moteur de réservation…</p>
            </div>
          )}

          {/* iframe SiteMinder — whitelisté, chargement direct */}
          <iframe
            ref={iframeRef}
            src={url}
            className="w-full h-full border-0"
            title="Réservation Glam's Hôtel"
            allow="payment"
            loading="eager"
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-4 px-4 py-2 bg-blush border-t border-rose/20 flex-shrink-0 text-xs text-text-mid">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Paiement sécurisé SSL
          </span>
          <span className="text-rose/40">·</span>
          <span>Meilleur tarif garanti sur ce site</span>
          <span className="text-rose/40">·</span>
          <span>Confirmation immédiate</span>
        </div>
      </div>
    </div>
  );
}
