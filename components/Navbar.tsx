"use client";

import { useState, useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import type { Locale } from "@/lib/translations";

const NAV_LINKS = [
  { key: "hotel" as const, href: "#hotel" },
  { key: "rooms" as const, href: "#chambres" },
  { key: "gallery" as const, href: "#galerie" },
  { key: "offers" as const, href: "#offres" },
  { key: "attractions" as const, href: "#attractions" },
  { key: "contact" as const, href: "#contact" },
];

const LOCALES: { code: Locale; flag: string; name: string }[] = [
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
  { code: "it", flag: "🇮🇹", name: "Italiano" },
  { code: "es", flag: "🇪🇸", name: "Español" },
  { code: "pt", flag: "🇵🇹", name: "Português" },
  { code: "zh", flag: "🇨🇳", name: "中文" },
  { code: "ar", flag: "🇸🇦", name: "العربية" },
  { code: "he", flag: "🇮🇱", name: "עברית" },
];

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavClick = () => setMenuOpen(false);
  const current = LOCALES.find((l) => l.code === locale)!;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-playfair text-xl font-bold tracking-wide transition-colors ${
            scrolled ? "text-bordeaux" : "text-white"
          }`}
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Glam&apos;s Hôtel
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <a
                href={href}
                className={`text-sm font-medium tracking-wide hover:text-bordeaux transition-colors ${
                  scrolled ? "text-text-dark" : "text-white/90"
                }`}
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language selector — Booking.com style */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 text-sm font-medium px-2.5 py-1.5 rounded-md transition-colors ${
                scrolled
                  ? "text-text-dark hover:bg-blush"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="text-base leading-none">{current.flag}</span>
              <span className="font-semibold tracking-wide">{current.code.toUpperCase()}</span>
              <svg
                className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-rose/20 py-2 w-44 z-50">
                {LOCALES.map(({ code, flag, name }) => (
                  <button
                    key={code}
                    onClick={() => { setLocale(code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors hover:bg-blush ${
                      locale === code ? "text-bordeaux font-semibold bg-blush/60" : "text-text-dark"
                    }`}
                  >
                    <span className="text-base">{flag}</span>
                    <span>{name}</span>
                    {locale === code && (
                      <svg className="w-3.5 h-3.5 text-bordeaux ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Book CTA */}
          <a
            href="#hero-booking"
            className="bg-bordeaux hover:bg-bordeaux-dark text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center ${scrolled ? "text-text-dark" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-rose/30 shadow-lg">
          <ul className="flex flex-col py-4">
            {NAV_LINKS.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className="block px-6 py-3 text-text-dark hover:text-bordeaux hover:bg-blush text-sm font-medium transition-colors"
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 border-t border-rose/20">
            {/* Mobile language grid */}
            <p className="text-xs text-text-mid mb-3 font-medium uppercase tracking-wider">Langue / Language</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {LOCALES.map(({ code, flag, name }) => (
                <button
                  key={code}
                  onClick={() => { setLocale(code); setMenuOpen(false); }}
                  className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-xs font-medium border transition-colors ${
                    locale === code
                      ? "bg-bordeaux/10 border-bordeaux text-bordeaux"
                      : "border-rose/30 text-text-mid hover:border-bordeaux/40 hover:text-bordeaux"
                  }`}
                >
                  <span className="text-lg">{flag}</span>
                  <span>{name.length > 8 ? code.toUpperCase() : name}</span>
                </button>
              ))}
            </div>
            <a
              href="#hero-booking"
              onClick={handleNavClick}
              className="block w-full text-center bg-bordeaux text-white text-sm font-semibold px-4 py-2.5 rounded-full"
            >
              {t.nav.book}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
