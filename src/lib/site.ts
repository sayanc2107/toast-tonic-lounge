/**
 * Single source of truth for Toast & Tonic business facts and external links.
 * Owner-editable: set `instagram.url` (and optionally `instagram.posts`) once the
 * official profile is verified. Leave as null to show the neutral placeholder.
 */

export type InstagramPost = { image: string; alt: string; href: string };

const ADDRESS_QUERY = "Toast & Tonic, Lanco Hills Road, Manikonda, Hyderabad, Telangana 500089";

export const site = {
  name: "Toast & Tonic",
  nameTelugu: "తోఅస్ట్ అండ్ తోనిక్",
  type: "Lounge bar",
  locality: "Manikonda · Hyderabad",
  address: {
    lines: ["9 Building, 1-1/38/B, Cloud", "Lanco Hills Road, Manikonda", "Telangana 500089, India"],
    alt: "9, Building, 1-1/38/B, Laxminagar Colony, Lanco Hills Road, Manikonda, Hyderabad",
    street: "9 Building, 1-1/38/B, Cloud, Lanco Hills Road",
    locality: "Manikonda",
    region: "Telangana",
    postalCode: "500089",
    country: "IN",
  },
  phone: {
    display: "+91 77997 93737",
    local: "077997 93737",
    href: "tel:+917799793737",
  },
  hoursNote: "Holiday hours may differ — check today's hours on the live listing.",
  hours: [
    { day: "Monday", time: "12:30 pm – 12 am" },
    { day: "Tuesday", time: "12:30 pm – 12 am" },
    { day: "Wednesday", time: "12:30 pm – 12 am" },
    { day: "Thursday", time: "12:30 pm – 12 am" },
    { day: "Friday", time: "12:30 pm – 1 am" },
    { day: "Saturday", time: "12:30 pm – 1 am" },
    { day: "Sunday", time: "12:30 pm – 12 am" },
  ],
  lgbtqFriendly: true,
  links: {
    reserve: "https://www.google.com/maps/reserve/v/dine/c/8qn_4Yg3MAI",
    directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS_QUERY)}`,
    listing: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`,
    mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_QUERY)}&output=embed`,
    zomato: "https://www.zomato.com/hyderabad/toast-tonic-manikonda/order",
    website: "https://toast-and-tonic.grexa.site/",
  },
  instagram: {
    /** Set to the verified profile URL, e.g. "https://www.instagram.com/<handle>/" */
    url: null as string | null,
    /** Optional verified handle shown in the UI, without "@" */
    handle: null as string | null,
    /** Optional curated posts from the verified profile */
    posts: [] as InstagramPost[],
  },
} as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About Us" },
  { to: "/visit", label: "Visit Us" },
] as const;
