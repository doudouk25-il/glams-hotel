import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Petit-déjeuner & Jardin — Glam's Hôtel Paris 14e",
  description:
    "Commencez votre journée parisienne avec le petit-déjeuner de Glam's Hôtel, servi dans notre jardin privé. Viennoiseries, fruits frais, produits locaux — un moment suspendu au cœur du 14e arrondissement.",
  keywords: [
    "hôtel avec jardin Paris",
    "petit-déjeuner hôtel Paris 14",
    "hôtel petit-déjeuner jardin Paris",
    "hotel with garden Paris",
    "breakfast garden hotel Paris",
    "hôtel terrasse Paris 14e",
  ],
  alternates: { canonical: "https://www.leglamshotel.com/petit-dejeuner" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Petit-déjeuner — Glam's Hôtel Paris",
  description: "Petit-déjeuner servi chaque matin dans le jardin privé de l'hôtel. Viennoiseries, fruits frais et produits locaux.",
  url: "https://www.leglamshotel.com/petit-dejeuner",
  servesCuisine: "French",
  openingHours: "Mo-Su 07:30-10:30",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47 Rue Beaunier",
    addressLocality: "Paris",
    postalCode: "75014",
    addressCountry: "FR",
  },
};

const menuItems = [
  { emoji: "🥐", name: "Viennoiseries maison", desc: "Croissants, pains au chocolat et brioche du boulanger du quartier, livrés chaque matin" },
  { emoji: "🍓", name: "Corbeille de fruits frais", desc: "Fruits de saison sélectionnés selon les arrivages du marché Daguerre" },
  { emoji: "🥖", name: "Pains & tartines", desc: "Pain de campagne, baguette tradition, beurre et confitures artisanales" },
  { emoji: "🍳", name: "Œufs à la demande", desc: "Œufs brouillés, à la coque ou en omelette, préparés sur commande" },
  { emoji: "🧀", name: "Plateau de fromages", desc: "Sélection de fromages français — camembert, comté, chèvre frais" },
  { emoji: "🥤", name: "Jus de fruits frais", desc: "Jus d'orange pressé minute ou smoothie du jour" },
  { emoji: "☕", name: "Cafés & Thés", desc: "Expresso, café crème, cappuccino — thés et infusions biologiques" },
  { emoji: "🥣", name: "Céréales & Yaourts", desc: "Granola maison, yaourts nature ou aux fruits, muesli" },
];

export default function PetitDejeunerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="h-16" />

      <main className="bg-cream min-h-screen">

        {/* Hero */}
        <div className="bg-bordeaux py-16 lg:py-24 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4">Glam&apos;s Hôtel Paris</p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Petit-déjeuner & Jardin
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Commencez votre journée parisienne dans notre jardin privé — un moment suspendu, loin du bruit de la ville
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

          {/* Jardin description */}
          <section className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-bordeaux text-xs font-semibold tracking-[0.25em] uppercase mb-3">Notre jardin privé</p>
              <h2
                className="text-3xl font-bold text-text-dark mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Un havre de verdure au cœur de Paris
              </h2>
              <div className="space-y-4 text-text-mid text-sm leading-relaxed">
                <p>
                  L&apos;un des atouts les plus rares à Paris : un <strong className="text-text-dark">jardin privé</strong> accessible à tous nos clients, été comme printemps. Au cœur du 14e arrondissement, ce jardin intérieur offre une parenthèse verte et apaisante.
                </p>
                <p>
                  Le <strong className="text-text-dark">petit-déjeuner est servi chaque matin</strong> de 7h30 à 10h30, à l&apos;intérieur ou dans le jardin selon la météo. Viennoiseries du boulanger local, fruits frais, fromages français — une table qui célèbre les saveurs parisiennes.
                </p>
                <p>
                  Le soir et tout au long de la journée, le jardin reste accessible pour se détendre, lire, ou savourer un verre en toute tranquillité — un luxe rare dans la capitale.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: "🌿", title: "Jardin privé", sub: "Accessible 24h/24" },
                { emoji: "☀️", title: "Terrasse", sub: "Printemps & été" },
                { emoji: "🤫", title: "Calme garanti", sub: "Loin de la rue" },
                { emoji: "📸", title: "Cadre unique", sub: "Vue verdoyante" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-rose/20 p-5 text-center shadow-sm">
                  <span className="text-4xl block mb-2">{item.emoji}</span>
                  <p className="font-semibold text-text-dark text-sm">{item.title}</p>
                  <p className="text-text-mid text-xs mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Menu */}
          <section>
            <p className="text-bordeaux text-xs font-semibold tracking-[0.25em] uppercase mb-3">Ce matin au menu</p>
            <h2
              className="text-3xl font-bold text-text-dark mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Le petit-déjeuner parisien
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuItems.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl border border-rose/20 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl block mb-3">{item.emoji}</span>
                  <h3 className="font-semibold text-text-dark text-sm mb-2">{item.name}</h3>
                  <p className="text-text-mid text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Horaires */}
          <section className="bg-white rounded-3xl border border-rose/20 p-8 shadow-sm">
            <h2
              className="text-2xl font-bold text-text-dark mb-6 text-center"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Informations pratiques
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl mb-2">🕢</p>
                <p className="font-semibold text-text-dark text-sm">Horaires</p>
                <p className="text-bordeaux font-medium text-sm mt-1">7h30 — 10h30</p>
                <p className="text-text-mid text-xs mt-1">7 jours sur 7</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🌍</p>
                <p className="font-semibold text-text-dark text-sm">Produits</p>
                <p className="text-text-mid text-xs mt-2">Viennoiseries du boulanger du quartier, fruits de saison, fromages artisanaux</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🌿</p>
                <p className="font-semibold text-text-dark text-sm">Lieu</p>
                <p className="text-text-mid text-xs mt-2">Dans le jardin (beau temps) ou en salle avec vue sur le jardin</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-bordeaux rounded-3xl p-10 text-center text-white">
            <div className="flex gap-1 justify-center mb-4 text-gold text-xl">★★★</div>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Réservez votre séjour avec petit-déjeuner
            </h2>
            <p className="text-white/80 text-sm max-w-md mx-auto mb-7">
              Profitez de notre jardin et d&apos;un petit-déjeuner maison dès le lendemain de votre arrivée.
            </p>
            <Link
              href="/#hero-booking"
              className="inline-flex items-center gap-2 bg-white text-bordeaux font-semibold px-8 py-3.5 rounded-full hover:bg-blush transition-colors text-sm shadow"
            >
              Vérifier les disponibilités
            </Link>
            <p className="text-white/50 text-xs mt-4">Meilleur tarif garanti en réservant en direct</p>
          </section>

          <div className="flex justify-center pb-4">
            <Link href="/" className="flex items-center gap-2 text-sm text-bordeaux hover:text-bordeaux-dark font-medium transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
