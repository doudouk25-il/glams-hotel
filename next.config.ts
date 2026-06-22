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
      // ── Apex → www (308 permanent, règle le problème de 307) ─────
      {
        source: "/:path*",
        has: [{ type: "host", value: "leglamshotel.com" }],
        destination: "https://www.leglamshotel.com/:path*",
        permanent: true,
      },

      // ── Accueil ──────────────────────────────────────────────────
      { source: "/index.html",           destination: "/",   permanent: true },
      { source: "/fr/index.html",        destination: "/",   permanent: true },
      { source: "/home",                 destination: "/",   permanent: true },
      { source: "/fr",                   destination: "/",   permanent: true },
      { source: "/zh/index.html",        destination: "/",   permanent: true },
      { source: "/zh",                   destination: "/",   permanent: true },
      { source: "/no/index.html",        destination: "/",   permanent: true },
      { source: "/no",                   destination: "/",   permanent: true },
      { source: "/en/index.html",        destination: "/en", permanent: true },

      // ── Chambres ─────────────────────────────────────────────────
      { source: "/fr/rooms.html",        destination: "/chambres", permanent: true },
      { source: "/rooms.html",           destination: "/chambres", permanent: true },
      { source: "/rooms",                destination: "/chambres", permanent: true },
      { source: "/fr/rooms/:slug*",      destination: "/chambres", permanent: true },
      { source: "/rooms/:slug*",         destination: "/chambres", permanent: true },

      // ── Quartier ─────────────────────────────────────────────────
      { source: "/fr/attractions.html",  destination: "/quartier", permanent: true },

      // ── Promotions ───────────────────────────────────────────────
      { source: "/promotions.html",      destination: "/", permanent: true },
      { source: "/fr/promotions.html",   destination: "/", permanent: true },
      { source: "/promotions/:slug*",    destination: "/", permanent: true },
      { source: "/fr/promotions/:slug*", destination: "/", permanent: true },

      // ── Galerie ──────────────────────────────────────────────────
      { source: "/gallery.html",         destination: "/", permanent: true },
      { source: "/fr/gallery.html",      destination: "/", permanent: true },
      { source: "/gallery",              destination: "/#galerie", permanent: true },

      // ── À propos ─────────────────────────────────────────────────
      { source: "/about-us.html",        destination: "/", permanent: true },
      { source: "/fr/about-us.html",     destination: "/", permanent: true },

      // ── Contact ──────────────────────────────────────────────────
      { source: "/contact-us.html",      destination: "/cgv", permanent: true },
      { source: "/fr/contact-us.html",   destination: "/cgv", permanent: true },
      { source: "/contact",              destination: "/#contact", permanent: true },

      // ── CGV ──────────────────────────────────────────────────────
      { source: "/terms-and-conditions.html",    destination: "/cgv", permanent: true },
      { source: "/fr/terms-and-conditions.html", destination: "/cgv", permanent: true },

      // ── Vidéos ───────────────────────────────────────────────────
      { source: "/videos.html",          destination: "/", permanent: true },
      { source: "/fr/videos.html",       destination: "/", permanent: true },

      // ── Variables non résolues (ancienne version) ─────────────────
      { source: "/$DIRECTIONS_URL$",     destination: "https://maps.google.com/?q=47+Rue+Beaunier+Paris+75014", permanent: true },
    ];
  },
};

export default nextConfig;
