const BASE = "https://www.leglamshotel.com";

/** hreflang pour les pages qui n'existent qu'en français */
export const hreflangFr = {
  canonical: BASE,
  languages: {
    "fr":        `${BASE}/`,
    "x-default": `${BASE}/`,
  },
} as const;

/** hreflang complet pour les pages qui ont des variantes multilingues */
export const hreflangAll = {
  languages: {
    "fr":        `${BASE}/`,
    "en":        `${BASE}/en`,
    "es":        `${BASE}/es`,
    "de":        `${BASE}/de`,
    "x-default": `${BASE}/`,
  },
} as const;

/** Génère un JSON-LD BreadcrumbList */
export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
}
