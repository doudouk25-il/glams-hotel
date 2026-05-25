"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span
              className="text-white text-xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Glam&apos;s Hôtel
            </span>
            <span className="text-xs tracking-widest text-white/50">
              {t.footer.tagline}
            </span>
          </div>

          {/* Address */}
          <div className="text-center text-xs leading-relaxed">
            <p>47 Rue Beaunier, Paris 75014, France</p>
            <p>
              <a href="tel:+33145409353" className="hover:text-white transition-colors">
                +33 1 45 40 93 53
              </a>
              {" · "}
              <a href="mailto:reception@leglamshotel.com" className="hover:text-white transition-colors">
                reception@leglamshotel.com
              </a>
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-2 text-xs w-full md:w-auto">
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a href="https://wa.me/33145409353" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                WhatsApp
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center md:items-end gap-x-4 gap-y-1">
              <a href="#" className="hover:text-white transition-colors">{t.footer.legal}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            </div>
            <p className="text-center md:text-right">© {year} Glam&apos;s Hôtel. {t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
