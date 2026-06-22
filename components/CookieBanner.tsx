"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentChoice = "granted" | "denied" | null;

const STORAGE_KEY = "glams_consent_v2";

function applyConsent(choice: "granted" | "denied") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    ad_storage:          choice,
    analytics_storage:   choice,
    ad_user_data:        choice,
    ad_personalization:  choice,
  });
}

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentChoice;
    if (stored === "granted" || stored === "denied") {
      applyConsent(stored);
    } else {
      setShow(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "granted");
    applyConsent("granted");
    setShow(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "denied");
    applyConsent("denied");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement cookies"
      aria-modal="true"
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-rose/30 shadow-2xl px-4 py-5 sm:px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 text-sm text-gray-600 leading-relaxed">
          <p>
            <span className="font-semibold text-gray-800">Glam&apos;s Hôtel</span> utilise des cookies pour mesurer
            l&apos;audience et améliorer votre expérience (Google Analytics, Google Ads).{" "}
            <Link href="/cgv" className="underline hover:text-bordeaux">
              En savoir plus
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm font-medium border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold bg-bordeaux text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
