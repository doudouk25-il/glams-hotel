"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:reception@leglamshotel.com?subject=Message de ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0A${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-bordeaux text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            {t.contact.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {t.contact.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                ),
                value: t.contact.address,
                href: "https://maps.google.com/?q=47+Rue+Beaunier+Paris+75014",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                value: t.contact.phone,
                href: "tel:+33145409353",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                value: t.contact.email,
                href: "mailto:reception@leglamshotel.com",
              },
            ].map(({ icon, value, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-bordeaux/10 flex items-center justify-center text-bordeaux flex-shrink-0 group-hover:bg-bordeaux group-hover:text-white transition-colors">
                  {icon}
                </div>
                <div className="pt-2">
                  <p className="text-text-dark text-sm font-medium group-hover:text-bordeaux transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 mt-2 bg-blush rounded-xl p-4 border border-rose/20">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.109 1.524 5.833L0 24l6.344-1.496A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.847 0-3.58-.504-5.065-1.382l-.361-.216-3.769.889.922-3.663-.236-.374A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <div>
                <p className="text-text-dark text-sm font-medium">WhatsApp</p>
                <a
                  href="https://wa.me/33145409353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-bordeaux hover:underline"
                >
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>

            <p className="text-xs text-text-mid flex items-center gap-2">
              <svg className="w-4 h-4 text-bordeaux" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.contact.hours}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1.5">
                {t.contact.name}
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-rose/40 rounded-xl px-4 py-3 text-sm text-text-dark focus:outline-none focus:border-bordeaux transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1.5">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-rose/40 rounded-xl px-4 py-3 text-sm text-text-dark focus:outline-none focus:border-bordeaux transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-bordeaux uppercase tracking-wider mb-1.5">
                {t.contact.message}
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-rose/40 rounded-xl px-4 py-3 text-sm text-text-dark focus:outline-none focus:border-bordeaux transition-colors bg-white resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-bordeaux hover:bg-bordeaux-dark text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
            >
              {sent ? "✓ Message envoyé" : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
