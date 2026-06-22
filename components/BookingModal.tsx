"use client";

import { useEffect, useRef, useState } from "react";

interface BookingModalProps {
  url: string;
  onClose: () => void;
}

export default function BookingModal({ url, onClose }: BookingModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    // Fallback si l'iframe ne charge pas du tout après 8s
    const timeout = setTimeout(() => {
      if (loading) setFailed(true);
    }, 8000);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, [onClose, loading]);

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
          <div className="flex items-center gap-2">
            <button
              onClick={openDirectly}
              className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-white text-xs transition-colors px-3 py-1.5 rounded-lg hover:bg-white/10"
              title="Ouvrir dans un nouvel onglet"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Nouvel onglet
            </button>
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
        </div>

        {/* Body */}
        <div className="flex-1 relative overflow-hidden">

          {/* Loading spinner */}
          {loading && !failed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream z-10 gap-4">
              <div className="w-10 h-10 border-4 border-rose border-t-bordeaux rounded-full animate-spin" />
              <p className="text-text-mid text-sm">Chargement du moteur de réservation…</p>
            </div>
          )}

          {/* Fallback si l'iframe échoue complètement */}
          {failed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream z-10 px-6 text-center gap-6">
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
              <button
                onClick={openDirectly}
                className="flex items-center gap-2 bg-bordeaux hover:bg-bordeaux-dark text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base shadow-lg"
              >
                Accéder à la réservation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <p className="text-xs text-text-mid/50">S&apos;ouvre dans un nouvel onglet sécurisé</p>
            </div>
          )}

          {/* iframe — sandbox bloque le breakout automatique (window.top.location)
              tout en autorisant les redirections paiement initiées par l'utilisateur */}
          <iframe
            ref={iframeRef}
            src={url}
            className="w-full h-full border-0"
            title="Réservation Glam's Hôtel"
            allow="payment"
            loading="eager"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation allow-modals"
            onLoad={() => setLoading(false)}
            onError={() => setFailed(true)}
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
          <button onClick={openDirectly} className="underline hover:text-bordeaux transition-colors">
            Ouvrir dans un onglet
          </button>
        </div>
      </div>
    </div>
  );
}
