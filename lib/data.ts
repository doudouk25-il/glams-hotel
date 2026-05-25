export const BASE_IMG = "https://webbox.imgix.net/images/rfnestsxnethraiw/";
export const IMG_PARAMS = "?auto=format,compress&fit=crop&crop=entropy";

export function img(filename: string, w = 800, h = 600) {
  return `${BASE_IMG}${filename}${IMG_PARAMS}&w=${w}&h=${h}`;
}

export const ROOMS = [
  {
    id: "effeuilleuse",
    slug: "effeuilleuse",
    name: "L'Effeuilleuse",
    image: "03a09948-1d99-4ce3-8b28-389202576e13.jpg",
    descKey: "effeuilleuse" as const,
  },
  {
    id: "marie-antoinette",
    slug: "marie-antoinette",
    name: "Marie Antoinette",
    image: "df930265-b529-4f4f-8431-0725c03c9821.jpg",
    descKey: "marie-antoinette" as const,
  },
  {
    id: "ballerine",
    slug: "ballerine",
    name: "La Ballerine",
    image: "d18f72bb-6e1f-43b3-ac7a-33c39d3d670a.jpg",
    descKey: "ballerine" as const,
  },
  {
    id: "tourisme",
    slug: "tourisme",
    name: "Tourisme à Paris",
    image: "bc693ea8-ec94-41da-9578-241dd0218642.jpg",
    descKey: "tourisme" as const,
  },
  {
    id: "terrace",
    slug: "terrace",
    name: "Chambre avec terrasse",
    image: "b8b4d8d2-b1a4-4f7d-bdca-e10cfde3f7b2.jpg", // imgix CDN copy — local: Terrasse room
    descKey: "terrace" as const,
  },
  {
    id: "nostalgie",
    slug: "nostalgie",
    name: "Nostalgie Paris",
    image: "00c8f0d2-12f7-4ea7-bfc5-b0330579c079.jpg",
    descKey: "nostalgie" as const,
  },
  {
    id: "soleil",
    slug: "soleil",
    name: "Soleil en Fleurs",
    image: "545014c3-22c1-4aad-bfe4-6d76a8ca5474.jpg",
    descKey: "soleil" as const,
  },
  {
    id: "regard",
    slug: "regard",
    name: "Un Regard Glamour",
    image: "358acea7-1540-4614-9284-d857c7eee0bb.jpg",
    descKey: "regard" as const,
  },
  {
    id: "femme-fatale",
    slug: "femme-fatale",
    name: "Femme Fatale",
    image: "9f684d43-dc46-49aa-a2f8-87dff7dcd43a.jpg",
    descKey: "femme-fatale" as const,
  },
] as const;

export const HERO_IMAGES = [
  "7a775cb8-f2c9-4a83-abd2-0aa6f2bfd0a1.webp",
  "28313d67-01ba-487b-a349-04683b8b7b92.webp",
];

export const GALLERY_IMAGES = [
  { file: "523ce715-6cca-4a34-bbd9-98f6d0ecb74b.webp", w: 2, h: 1 },
  { file: "172a2a83-5a3f-4d65-a3eb-42d1649f79af.jpg", w: 1, h: 1 },
  { file: "3b118ad5-8b48-46e2-8be0-451727ce2ef6.jpg", w: 1, h: 1 },
  { file: "d2fab66b-72de-4516-969b-a74e9c73c545.jpg", w: 1, h: 2 },
  { file: "213de638-0c37-44bb-aab6-ed18cbd174a2.jpg", w: 1, h: 1 },
  { file: "603e4a4b-99f1-49fd-9e5c-3292faa0c355.jpg", w: 2, h: 1 },
  { file: "7bbbb531-2800-4163-b6ad-6b2dc02634e2.jpg", w: 1, h: 1 },
  { file: "79630a16-1d1e-4b7f-a053-42cda3c85c4d.jpg", w: 1, h: 1 },
  // Include room images in gallery too
  { file: "03a09948-1d99-4ce3-8b28-389202576e13.jpg", w: 1, h: 1 },
  { file: "df930265-b529-4f4f-8431-0725c03c9821.jpg", w: 1, h: 1 },
  { file: "d18f72bb-6e1f-43b3-ac7a-33c39d3d670a.jpg", w: 1, h: 1 },
  { file: "bc693ea8-ec94-41da-9578-241dd0218642.jpg", w: 1, h: 1 },
  { file: "b8b4d8d2-b1a4-4f7d-bdca-e10cfde3f7b2.jpg", w: 1, h: 1 },
  { file: "545014c3-22c1-4aad-bfe4-6d76a8ca5474.jpg", w: 1, h: 1 },
  { file: "358acea7-1540-4614-9284-d857c7eee0bb.jpg", w: 1, h: 1 },
  { file: "9f684d43-dc46-49aa-a2f8-87dff7dcd43a.jpg", w: 1, h: 1 },
];

export function buildBookingUrl(params: {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  locale?: string;
}) {
  const { checkIn, checkOut, adults, children, locale = "fr" } = params;
  const url = new URL("https://direct-book.com/properties/GlamshotelDirect");
  url.searchParams.set("locale", locale);
  url.searchParams.set("referrer", "canvas");
  url.searchParams.set("items[0][adults]", String(adults));
  url.searchParams.set("items[0][children]", String(children));
  url.searchParams.set("items[0][infants]", "0");
  url.searchParams.set("currency", "EUR");
  if (checkIn) url.searchParams.set("checkInDate", checkIn);
  if (checkOut) url.searchParams.set("checkOutDate", checkOut);
  url.searchParams.set("trackPage", "yes");
  return url.toString();
}
