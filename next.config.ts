import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webbox.imgix.net",
        pathname: "/images/**",
      },
    ],
  },

  async redirects() {
    return [
      // ── Ancienne page d'accueil ──────────────────────────────────
      { source: "/index.html",          destination: "/", permanent: true },
      { source: "/home",                destination: "/", permanent: true },

      // ── Anciennes versions par langue ───────────────────────────
      { source: "/fr/index.html",       destination: "/", permanent: true },
      { source: "/fr",                  destination: "/", permanent: true },
      { source: "/zh/index.html",       destination: "/", permanent: true },
      { source: "/zh",                  destination: "/", permanent: true },
      { source: "/no/index.html",       destination: "/", permanent: true },
      { source: "/no",                  destination: "/", permanent: true },
      { source: "/en/index.html",       destination: "/", permanent: true },
      { source: "/en",                  destination: "/", permanent: true },

      // ── Anciennes pages de chambres ──────────────────────────────
      { source: "/rooms",               destination: "/#chambres", permanent: true },
      { source: "/rooms/:slug",         destination: "/#chambres", permanent: true },
      { source: "/fr/rooms/:slug",      destination: "/#chambres", permanent: true },

      // ── Autres anciennes pages ───────────────────────────────────
      { source: "/contact-us.html",     destination: "/#contact",  permanent: true },
      { source: "/contact",             destination: "/#contact",  permanent: true },
      { source: "/videos.html",         destination: "/",          permanent: true },
      { source: "/gallery",             destination: "/#galerie",  permanent: true },

      // ── Variables non résolues (ancienne version) ────────────────
      { source: "/$DIRECTIONS_URL$",    destination: "https://maps.google.com/?q=47+Rue+Beaunier+Paris+75014", permanent: true },
    ];
  },
};

export default nextConfig;
