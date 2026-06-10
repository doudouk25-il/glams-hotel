import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Le Quartier — Glam's Hôtel Paris 14e | Porte d'Orléans, Denfert-Rochereau, Montparnasse",
  description:
    "Glam's Hôtel est idéalement situé dans le 14e arrondissement de Paris, à 3 min du métro, à 5 min de Denfert-Rochereau et à 10 min de Montparnasse. Découvrez les bonnes adresses du quartier.",
  keywords: [
    "hôtel Paris 14e arrondissement",
    "hôtel porte d'Orléans",
    "hôtel Denfert-Rochereau",
    "hôtel Montparnasse",
    "hôtel 14ème Paris",
    "hotel paris south",
    "boutique hotel paris 14",
  ],
  alternates: { canonical: "https://www.leglamshotel.com/quartier" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: "Glam's Hôtel — Le Quartier",
  description: "Hôtel boutique 3 étoiles dans le 14e arrondissement, à proximité de Denfert-Rochereau, Montparnasse et la Porte d'Orléans.",
  url: "https://www.leglamshotel.com/quartier",
  address: {
    "@type": "PostalAddress",
    streetAddress: "47 Rue Beaunier",
    addressLocality: "Paris",
    postalCode: "75014",
    addressCountry: "FR",
  },
};

const transports = [
  { icon: "🚇", name: "Métro ligne 4", detail: "Station Mouton-Duvernet — 3 min à pied", desc: "Accès direct Montparnasse, Saint-Germain, Châtelet" },
  { icon: "🚇", name: "RER B", detail: "Denfert-Rochereau — 10 min à pied", desc: "CDG en 30 min, Orly en 25 min (Orlyval), gare du Nord" },
  { icon: "🚌", name: "Bus 38, 68, 88", detail: "Arrêt Mouton-Duvernet", desc: "Connexion directe vers le centre de Paris" },
  { icon: "🚲", name: "Vélib'", detail: "Station à 50m de l'hôtel", desc: "Idéal pour explorer Paris à vélo" },
  { icon: "✈️", name: "Aéroport CDG", detail: "RER B direct — 30 min", desc: "Sans changement depuis Denfert-Rochereau" },
  { icon: "✈️", name: "Aéroport d'Orly", detail: "RER B + Orlyval — 25 min", desc: "Liaison rapide depuis Denfert-Rochereau" },
];

const attractions = [
  {
    category: "Culture & Histoire",
    items: [
      { name: "Catacombes de Paris", distance: "7 min à pied", desc: "L'ossuaire municipal, l'une des attractions les plus visitées de Paris" },
      { name: "Fondation Cartier", distance: "10 min à pied", desc: "Art contemporain dans un édifice de verre signé Jean Nouvel" },
      { name: "Musée du Montparnasse", distance: "15 min en métro", desc: "Histoire du quartier des artistes, Modigliani, Picasso, Giacometti" },
    ],
  },
  {
    category: "Parcs & Nature",
    items: [
      { name: "Parc Montsouris", distance: "12 min à pied", desc: "Grand parc paysager anglais, idéal pour un jogging matinal ou un pique-nique" },
      { name: "Jardins de la Fondation Cartier", distance: "10 min à pied", desc: "Jardin urbain contemplatif" },
      { name: "Jardin de l'Hôtel", distance: "sur place", desc: "Petit-déjeuner et détente dans notre jardin privé" },
    ],
  },
  {
    category: "Gastronomie",
    items: [
      { name: "Marché Edgar Quinet", distance: "15 min à pied", desc: "Marché en plein air, mercredi et samedi matin — produits frais et locaux" },
      { name: "Rue Daguerre", distance: "5 min à pied", desc: "Rue piétonne animée, fromageries, boulangeries, restaurants typiques" },
      { name: "Brasseries de Montparnasse", distance: "10 min en métro", desc: "La Coupole, Le Dôme — institutions parisiennes centenaires" },
    ],
  },
  {
    category: "Shopping & Sorties",
    items: [
      { name: "Galeries Montparnasse", distance: "10 min en métro", desc: "Maine Montparnasse, boutiques et grands magasins" },
      { name: "Rue de la Gaîté", distance: "12 min à pied", desc: "Théâtres, cinémas, vie nocturne du 14e" },
      { name: "Marché aux Puces de Vanves", distance: "20 min à pied", desc: "Brocante chaque week-end — antiquités et curiosités parisiennes" },
    ],
  },
];

export default function QuartierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="h-16" />

      <main className="bg-cream min-h-screen">
        {/* Hero */}
        <div className="relative bg-bordeaux overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 0%, transparent 60%)" }} />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4">Glam&apos;s Hôtel Paris</p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Le Quartier
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Idéalement situé dans le 14e arrondissement — à 3 minutes du métro, au calme, au cœur de Paris
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">

          {/* Localisation intro */}
          <section className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-bordeaux text-xs font-semibold tracking-[0.25em] uppercase mb-3">Situation idéale</p>
              <h2
                className="text-3xl font-bold text-text-dark mb-5"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Un emplacement stratégique entre Montparnasse et Denfert-Rochereau
              </h2>
              <div className="space-y-3 text-text-mid text-sm leading-relaxed">
                <p>
                  Glam&apos;s Hôtel est situé au <strong className="text-text-dark">47 rue Beaunier</strong>, dans le paisible 14e arrondissement de Paris. Loin de l&apos;agitation touristique, mais à quelques minutes des grandes artères parisiennes.
                </p>
                <p>
                  La station de métro <strong className="text-text-dark">Mouton-Duvernet (ligne 4)</strong> est à 3 minutes à pied. Depuis Montparnasse, toute la capitale est accessible en moins de 20 minutes.
                </p>
                <p>
                  La gare <strong className="text-text-dark">Denfert-Rochereau (RER B)</strong> à 10 minutes à pied vous connecte à CDG en 30 minutes et à Orly en 25 minutes — un avantage précieux pour les voyageurs d&apos;affaires et les touristes internationaux.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-rose/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.9!2d2.3246!3d48.8214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e1b2a2a2a3%3A0x0!2s47+Rue+Beaunier%2C+75014+Paris!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte Glam's Hôtel Paris 14e"
              />
            </div>
          </section>

          {/* Transports */}
          <section>
            <p className="text-bordeaux text-xs font-semibold tracking-[0.25em] uppercase mb-3">Accès</p>
            <h2
              className="text-3xl font-bold text-text-dark mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Transports en commun
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {transports.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl border border-rose/20 p-5 shadow-sm">
                  <div className="text-3xl mb-3">{t.icon}</div>
                  <h3 className="font-semibold text-text-dark text-sm mb-1">{t.name}</h3>
                  <p className="text-bordeaux text-xs font-medium mb-2">{t.detail}</p>
                  <p className="text-text-mid text-xs leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Attractions */}
          <section>
            <p className="text-bordeaux text-xs font-semibold tracking-[0.25em] uppercase mb-3">Aux alentours</p>
            <h2
              className="text-3xl font-bold text-text-dark mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              À découvrir dans le 14e et autour
            </h2>
            <div className="space-y-8">
              {attractions.map((cat) => (
                <div key={cat.category}>
                  <h3 className="text-sm font-semibold text-bordeaux uppercase tracking-wider mb-4">{cat.category}</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {cat.items.map((item) => (
                      <div key={item.name} className="bg-white rounded-xl border border-rose/20 p-4 shadow-sm">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-text-dark text-sm leading-snug">{item.name}</h4>
                          <span className="text-xs text-bordeaux font-medium ml-2 whitespace-nowrap">{item.distance}</span>
                        </div>
                        <p className="text-text-mid text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA réservation */}
          <section className="bg-bordeaux rounded-3xl p-10 text-center text-white">
            <div className="flex gap-1 justify-center mb-4 text-gold text-xl">★★★</div>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Réservez votre séjour dans le 14e
            </h2>
            <p className="text-white/80 text-sm max-w-md mx-auto mb-7">
              Profitez du calme du 14e arrondissement tout en étant à quelques minutes de toutes les richesses de Paris.
            </p>
            <Link
              href="/#hero-booking"
              className="inline-flex items-center gap-2 bg-white text-bordeaux font-semibold px-8 py-3.5 rounded-full hover:bg-blush transition-colors text-sm shadow"
            >
              Vérifier les disponibilités
            </Link>
            <p className="text-white/50 text-xs mt-4">Meilleur tarif garanti en réservant en direct</p>
          </section>

          {/* Retour */}
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
