import type { NextConfig } from "next";

// CSP en mode Report-Only — sources tierces recensées :
// GTM, Google Ads, Google Fonts, imgix CDN, direct-book.com, Google Maps
const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google-analytics.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://webbox.imgix.net https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net",
  "frame-src https://www.google.com https://direct-book.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",
  "report-uri /api/csp-report",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options",  value: "nosniff" },
  { key: "X-Frame-Options",         value: "SAMEORIGIN" },
  { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
  // CSP en observation uniquement — ne bloque rien, log dans /api/csp-report
  { key: "Content-Security-Policy-Report-Only", value: cspReportOnly },
];

const nextConfig: NextConfig = {
  images: {
    // imgix already optimizes images server-side — bypass Vercel's image proxy
    // to avoid double-serving and unnecessary Fast Data Transfer costs.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webbox.imgix.net",
        pathname: "/images/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
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
      { source: "/en/index.html",       destination: "/en", permanent: true },

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
