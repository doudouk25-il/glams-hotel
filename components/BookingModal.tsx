"use client";

import { useEffect, useRef, useState } from "react";

interface BookingModalProps {
  url: string;
  onClose: () => void;
}

export default function BookingModal({ url, onClose }: BookingModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeBlocked, setIframeBlocked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    // Detect if iframe is blocked: after 4s, check if it has content
    const timeout = setTimeout(() => {
      const iframe = iframeRef.current;
      if (!iframe) return;
      try {
        // Cross-origin access throws → iframe loaded (but cross-origin)
        const doc = iframe.contentDocument;
        // If we reach here with null doc, likely blocked
        if (!doc) setIframeBlocked(true);
        setLoading(false);
      } catch {
        // Cross-origin error = iframe loaded successfully (different domain)
        setLoading(false);
      }
    }, 4000);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, [onClose]);

  const handleIframeLoad = () => {
    // iframe fired load event
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const doc = iframe.contentDocument;
      // Loaded but empty/about:blank = blocked by X-Frame-Options
      if (!doc || doc.body?.innerHTML === "") {
        setIframeBlocked(true);
      }
    } catch {
      // Cross-origin = successfully loaded SiteMinder page
    }
    setLoading(false);
  };

  const openDirectly = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
            className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            aria-label="Fermer"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 relative overflow-hidden">

          {/* Loading spinner */}
          {loading && !iframeBlocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream z-10 gap-4">
              <div className="w-10 h-10 border-4 border-rose border-t-bordeaux rounded-full animate-spin" />
              <p className="text-text-mid text-sm">Chargement du moteur de réservation…</p>
            </div>
          )}

          {/* Blocked fallback — interstitiel de marque */}
          {iframeBlocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream z-10 px-6 text-center gap-6">

              {/* Hotel branding */}
              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="flex gap-1 text-gold text-2xl">★★★</div>
                <h2
                  className="text-2xl font-bold text-text-dark"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Glam&apos;s Hôtel Paris
                </h2>
                <p className="text-bordeaux text-xs tracking-widest font-medium uppercase">
                  Glamour · Élégance · Raffinement
                </p>
              </div>

              <div className="max-w-sm">
                <p className="text-text-mid text-sm leading-relaxed mb-1">
                  Vous allez accéder à notre système de réservation sécurisé.
                </p>
                <p className="text-text-mid/70 text-xs">
                  Meilleur tarif garanti · Paiement 100% sécurisé SSL
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: "🔒", label: "Paiement sécurisé" },
                  { icon: "✓", label: "Meilleur tarif garanti" },
                  { icon: "⚡", label: "Confirmation immédiate" },
                  { icon: "↩", label: "Annulation flexible" },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-rose/20 text-xs text-text-dark"
                  >
                    <span>{icon}</span>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={openDirectly}
                className="flex items-center gap-2 bg-bordeaux hover:bg-bordeaux-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base shadow-lg"
              >
                Accéder à la réservation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>

              <p className="text-xs text-text-mid/50">
                S&apos;ouvre dans un nouvel onglet sécurisé
              </p>
            </div>
          )}

          {/* iframe (tentative) */}
          <iframe
            ref={iframeRef}
            src={url}
            className="w-full h-full border-0"
            title="Réservation Glam's Hôtel"
            allow="payment"
            loading="eager"
            onLoad={handleIframeLoad}
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
