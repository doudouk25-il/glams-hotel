"use client";

import { useLanguage } from "./LanguageContext";

const ICONS = ["⚰️", "🗼", "🏟️", "🌳", "🚇", "🎨"];

const URLS = [
  "https://www.catacombes.paris.fr",
  "https://www.tourmontparnasse56.com",
  "https://www.viparis.com",
  "https://www.paris.fr",
  "https://www.ratp.fr",
  "https://www.fondationcartier.com",
];

export default function Attractions() {
  const { t } = useLanguage();

  return (
    <section id="attractions" className="py-20 lg:py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-bordeaux text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            {t.attractions.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {t.attractions.title}
          </h2>
          <p className="text-text-mid text-lg max-w-xl mx-auto">
            {t.attractions.subtitle}
          </p>
        </div>

        {/* Map embed + list */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-md h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.0!2d2.3246!3d48.8214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6706ec428a8c7%3A0x6e9aae2a2b0e30e1!2s47%20Rue%20Beaunier%2C%2075014%20Paris!5e0!3m2!1sfr!2sfr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Glam's Hôtel — 47 Rue Beaunier, Paris 75014"
            />
          </div>

          {/* Attractions list */}
          <div className="grid gap-3">
            {([...t.attractions.items] as { name: string; distance: string; desc: string }[]).map((item, i) => (
              <a
                key={i}
                href={URLS[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 bg-white rounded-xl p-4 border border-rose/20 hover:border-bordeaux/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-bordeaux/10 transition-colors">
                  {ICONS[i]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-text-dark text-sm group-hover:text-bordeaux transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs text-bordeaux font-medium bg-bordeaux/10 px-2 py-0.5 rounded-full">
                      {item.distance}
                    </span>
                    <svg className="w-3 h-3 text-bordeaux/40 group-hover:text-bordeaux transition-colors ml-auto flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-text-mid text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
