import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ROOMS, img } from "@/lib/data";
import { breadcrumb } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Chambres — Glam's Hôtel Paris 14e | 9 Chambres Décorées avec Art",
  description:
    "Découvrez les 9 chambres uniques de Glam's Hôtel Paris 14e : L'Effeuilleuse, Marie Antoinette, La Ballerine, Chambre avec Terrasse… Chaque chambre est une œuvre d'art. Réservez en direct et économisez 7%.",
  keywords: [
    "chambre hôtel Paris 14",
    "chambre boutique Paris",
    "chambre avec terrasse Paris",
    "chambre décorée Paris",
    "hôtel design Paris 14e",
    "chambre Paris insolite",
    "hotel room paris 14th",
  ],
  alternates: {
    canonical: "https://www.leglamshotel.com/chambres",
    languages: {
      "fr":        "https://www.leglamshotel.com/chambres",
      "x-default": "https://www.leglamshotel.com/chambres",
    },
  },
};

const BASE = "https://webbox.imgix.net/images/rfnestsxnethraiw/";
const PARAMS = "?auto=format,compress&fit=crop&crop=entropy";

const roomsData = [
  {
    id: "effeuilleuse",
    name: "L'Effeuilleuse",
    image: "03a09948-1d99-4ce3-8b28-389202576e13.jpg",
    desc: "Rose et sensuelle, cette chambre baigne dans une lumière romantique douce avec une fresque évocatrice. Un refuge intime et chic.",
    features: ["Lit double", "Climatisation", "WiFi", "Salle de bain privée"],
  },
  {
    id: "marie-antoinette",
    name: "Marie Antoinette",
    image: "df930265-b529-4f4f-8431-0725c03c9821.jpg",
    desc: "Le charme historique rencontre le luxe moderne. Tapisseries florales et décors inspirés de Versailles pour une nuit royale.",
    features: ["Lit double", "Climatisation", "WiFi", "Décor Versailles"],
  },
  {
    id: "ballerine",
    name: "La Ballerine",
    image: "d18f72bb-6e1f-43b3-ac7a-33c39d3d670a.jpg",
    desc: "Tons violets vibrants et fresque d'une danseuse. Une chambre gracieuse qui évoque l'élégance de la danse classique.",
    features: ["Lit double", "Climatisation", "WiFi", "Fresque artistique"],
  },
  {
    id: "tourisme",
    name: "Tourisme à Paris",
    image: "bc693ea8-ec94-41da-9578-241dd0218642.jpg",
    desc: "L'esprit de Paris vibre dans chaque détail — Tour Eiffel, joie de vivre française et couleurs vives.",
    features: ["Lit double", "Climatisation", "WiFi", "Esprit parisien"],
  },
  {
    id: "terrace",
    name: "Chambre avec Terrasse",
    image: "b8b4d8d2-b1a4-4f7d-bdca-e10cfde3f7b2.jpg",
    desc: "Oasis luxueuse avec accès à une terrasse partagée surplombant le jardin. Carreaux en mosaïque et vue sur la verdure.",
    features: ["Lit double", "Terrasse privée", "Vue jardin", "WiFi"],
    highlight: true,
  },
  {
    id: "nostalgie",
    name: "Nostalgie Paris",
    image: "00c8f0d2-12f7-4ea7-bfc5-b0330579c079.jpg",
    desc: "Romance vintage et élégance intemporelle. Les détails nostalgiques vous transportent dans le Paris d'antan.",
    features: ["Lit double", "Climatisation", "WiFi", "Décor vintage"],
  },
  {
    id: "soleil",
    name: "Soleil en Fleurs",
    image: "545014c3-22c1-4aad-bfe4-6d76a8ca5474.jpg",
    desc: "Florale et lumineuse, cette chambre évoque le renouveau printanier avec une atmosphère chaude et dorée.",
    features: ["Lit double", "Climatisation", "WiFi", "Ambiance florale"],
  },
  {
    id: "regard",
    name: "Un Regard Glamour",
    image: "358acea7-1540-4614-9284-d857c7eee0bb.jpg",
    desc: "Accents jaunes audacieux et ambiance mystérieuse. Une chambre pleine d'énergie et de personnalité glamour.",
    features: ["Lit double", "Climatisation", "WiFi", "Design audacieux"],
  },
  {
    id: "femme-fatale",
    name: "Femme Fatale",
    image: "9f684d43-dc46-49aa-a2f8-87dff7dcd43a.jpg",
    desc: "Accents bleus frappants et œuvres d'art audacieuses. Sophistication et séduction dans chaque détail.",
    features: ["Lit double", "Climatisation", "WiFi", "Art contemporain"],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Chambres Glam's Hôtel Paris",
  description: "Les 9 chambres décorées avec art de Glam's Hôtel Paris 14e",
  url: "https://www.leglamshotel.com/chambres",
  numberOfItems: 9,
  itemListElement: roomsData.map((r, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: r.name,
    description: r.desc,
    url: `https://www.leglamshotel.com/chambres#${r.id}`,
    image: `${BASE}${r.image}${PARAMS}&w=800&h=600`,
  })),
};

export default function ChambresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb([{ name: "Chambres", url: "https://www.leglamshotel.com/chambres" }])) }}
      />

      <div className="h-16" />

      <main className="bg-cream min-h-screen">
        {/* Hero */}
        <div className="bg-bordeaux py-16 lg:py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-4">Glam&apos;s Hôtel Paris</p>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="block">Chambres Boutique</span>
              <span className="block text-lg sm:text-xl font-normal tracking-wide text-white/80 mt-2">
                Glam&apos;s Hôtel — 9 chambres décorées avec art, Paris 14e
              </span>
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Chaque chambre est un univers unique — choisissez votre décor de rêve
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                27 chambres
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                Hôtel 3 étoiles
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                Paris 14e arrondissement
              </span>
            </div>
          </div>
        </div>

        {/* Intro narrative */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-bordeaux text-xs font-semibold tracking-[0.25em] uppercase mb-4">Notre philosophie</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-text-dark mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Chaque chambre, une œuvre d&apos;art
          </h2>
          <div className="space-y-4 text-text-mid text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              Chez Glam&apos;s Hôtel, nous avons fait le choix de l&apos;exception : <strong className="text-text-dark">27 chambres dont aucune ne se ressemble</strong>. Chacune est le fruit d&apos;une vision artistique singulière, d&apos;un parti pris décoratif affirmé — une invitation à habiter une histoire plutôt qu&apos;à occuper une chambre.
            </p>
            <p>
              Fresques peintes à la main, mobilier chiné, textiles sélectionnés — chaque détail a été pensé pour créer une atmosphère cohérente et mémorable. Que vous choisissiez la sensualité de <strong className="text-text-dark">L&apos;Effeuilleuse</strong>, la royauté de <strong className="text-text-dark">Marie Antoinette</strong> ou la vue sur le jardin de la <strong className="text-text-dark">Chambre avec Terrasse</strong>, vous vivrez une expérience unique dans le Paris le plus authentique.
            </p>
            <p>
              Toutes nos chambres sont climatisées, équipées du WiFi haut débit, d&apos;une salle de bain privée et d&apos;une télévision. Le petit-déjeuner est servi chaque matin dans notre jardin privé. <strong className="text-text-dark">Réservez en direct et économisez 7%</strong> par rapport aux plateformes de réservation.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm">
            {[
              { n: "27", label: "chambres" },
              { n: "3★", label: "hôtel boutique" },
              { n: "9", label: "univers artistiques" },
              { n: "−7%", label: "réservation directe" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-bold text-bordeaux" style={{ fontFamily: "var(--font-playfair)" }}>{item.n}</p>
                <p className="text-text-mid text-xs mt-1 uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rooms grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsData.map((room) => (
              <article
                key={room.id}
                id={room.id}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border flex flex-col scroll-mt-24 ${
                  room.highlight ? "border-bordeaux/40 ring-1 ring-bordeaux/20" : "border-rose/20"
                }`}
              >
                {room.highlight && (
                  <div className="bg-bordeaux text-white text-xs font-semibold text-center py-1.5 tracking-wider uppercase">
                    ✦ Coup de cœur — Terrasse & Jardin
                  </div>
                )}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={`${BASE}${room.image}${PARAMS}&w=600&h=400`}
                    alt={`Chambre ${room.name} — Glam's Hôtel Paris 14e`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h2
                      className="text-white font-bold text-lg leading-snug drop-shadow"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {room.name}
                    </h2>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <p className="text-text-mid text-sm leading-relaxed flex-1">{room.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-blush text-bordeaux px-2.5 py-1 rounded-full font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/#hero-booking"
                    className="mt-1 block w-full bg-bordeaux hover:bg-bordeaux-dark text-white text-sm font-semibold py-2.5 rounded-xl transition-colors text-center"
                  >
                    Réserver cette chambre
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Équipements communs */}
          <section className="mt-16 bg-white rounded-3xl border border-rose/20 p-8 shadow-sm">
            <h2
              className="text-2xl font-bold text-text-dark mb-6 text-center"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Équipements & Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🌿", title: "Jardin & Terrasse", desc: "Espace verdoyant pour se détendre" },
                { icon: "☕", title: "Petit-déjeuner", desc: "Servi chaque matin dans le jardin" },
                { icon: "📶", title: "WiFi gratuit", desc: "Haut débit dans tout l'établissement" },
                { icon: "🧹", title: "Ménage quotidien", desc: "Service de chambre chaque jour" },
                { icon: "🔑", title: "Réception 24h/7j", desc: "Équipe disponible à toute heure" },
                { icon: "🌡️", title: "Climatisation", desc: "Dans toutes les chambres" },
                { icon: "🚿", title: "Salle de bain privée", desc: "Douche ou baignoire selon chambre" },
                { icon: "📺", title: "TV écran plat", desc: "Chaînes françaises et internationales" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-blush transition-colors">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">{item.title}</p>
                    <p className="text-text-mid text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Infos pratiques */}
          <section className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🕒", title: "Check-in", info: "À partir de 15h00" },
              { icon: "🕛", title: "Check-out", info: "Avant 12h00" },
              { icon: "🐾", title: "Animaux", info: "Non acceptés" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-rose/20 p-5 text-center shadow-sm">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="font-semibold text-text-dark text-sm">{item.title}</p>
                <p className="text-text-mid text-xs mt-1">{item.info}</p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section className="mt-12 bg-bordeaux rounded-3xl p-10 text-center text-white">
            <div className="flex gap-1 justify-center mb-4 text-gold text-xl">★★★</div>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Réservez en direct et économisez 7%
            </h2>
            <p className="text-white/80 text-sm max-w-md mx-auto mb-7">
              Meilleur tarif garanti sur notre site officiel. Pas de frais de service, annulation flexible selon le tarif choisi.
            </p>
            <Link
              href="/#hero-booking"
              className="inline-flex items-center gap-2 bg-white text-bordeaux font-semibold px-8 py-3.5 rounded-full hover:bg-blush transition-colors text-sm shadow"
            >
              Vérifier les disponibilités
            </Link>
          </section>

          <div className="flex justify-center mt-10 pb-4">
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
