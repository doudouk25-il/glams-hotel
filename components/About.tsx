"use client";

import { useLanguage } from "./LanguageContext";

const FEATURES = [
  { icon: "★★★", labelKey: "stars" as const },
  { icon: "🏨", labelKey: "rooms" as const },
  { icon: "🌿", labelKey: "garden" as const },
  { icon: "☕", labelKey: "breakfast" as const },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="hotel" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p
              className="text-bordeaux text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            >
              {t.about.label}
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {t.about.title}
            </h2>
            <p className="text-text-mid leading-relaxed mb-6 text-base sm:text-lg">
              {t.about.text1}
            </p>
            <p className="text-text-mid leading-relaxed text-base sm:text-lg">
              {t.about.text2}
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-4">
            {FEATURES.map(({ icon, labelKey }) => (
              <div
                key={labelKey}
                className="bg-blush rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-rose/20 hover:border-bordeaux/30 transition-colors"
              >
                <span className="text-2xl">{icon}</span>
                <span
                  className="font-semibold text-text-dark text-sm"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {t.about[labelKey]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Address bar */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 bg-blush rounded-2xl px-6 py-5 border border-rose/20">
          <div className="flex items-center gap-2 text-text-mid text-sm">
            <svg className="w-4 h-4 text-bordeaux flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            47 Rue Beaunier, Paris 75014
          </div>
          <div className="hidden sm:block w-px h-4 bg-rose/40" />
          <div className="flex items-center gap-2 text-text-mid text-sm">
            <svg className="w-4 h-4 text-bordeaux flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +33 1 45 40 93 53
          </div>
          <div className="hidden sm:block w-px h-4 bg-rose/40" />
          <div className="flex items-center gap-2 text-text-mid text-sm">
            <svg className="w-4 h-4 text-bordeaux flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            reception@leglamshotel.com
          </div>
        </div>
      </div>
    </section>
  );
}
