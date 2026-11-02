import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-lounge.webp";
import glassImg from "@/assets/glass-detail.webp";
import chickenImg from "@/assets/dish-chicken-fry.webp";
import paneerImg from "@/assets/dish-paneer-tikka.webp";
import pulaoImg from "@/assets/dish-pulao.webp";
import toastImg from "@/assets/toast-moment.webp";
import {
  CallButton,
  DirectionsButton,
  ExternalLink,
  MenuButton,
  ReserveButton,
  ReserveNote,
} from "@/components/site/actions";
import { DietMark } from "@/components/site/diet-mark";
import { InstagramSection } from "@/components/site/instagram-section";
import { Parallax } from "@/components/site/parallax";
import { Reveal } from "@/components/site/reveal";
import { HoursList } from "@/components/site/hours-list";
import { countItems, foodMenu, homeHighlights } from "@/lib/menu";
import { site } from "@/lib/site";

const TITLE = "Toast & Tonic | Lounge Bar in Manikonda, Hyderabad";
const DESC =
  "An evening, well poured. Toast & Tonic is a relaxed lounge bar on Lanco Hills Road, Manikonda, Hyderabad. Explore the menu, reserve a table or get directions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarOrPub",
          name: "Toast & Tonic",
          alternateName: "తోఅస్ట్ అండ్ తోనిక్",
          telephone: "+91-77997-93737",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: "Manikonda, Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500089",
            addressCountry: "IN",
          },
          acceptsReservations: true,
          hasMap: site.links.listing,
        }),
      },
    ],
  }),
  component: HomePage,
});

const totalDishes = countItems(foodMenu.veg) + countItems(foodMenu.nonveg);

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <MenuPreview />
      <ToastInterlude />
      <LocationPanel />
      <InstagramSection className="surface-ivory" />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Parallax speed={0.1} pointer>
          <img
            src={heroImg}
            alt="Warm amber pendant lights over a dark wood and brass bar with olive velvet stools"
            width={1600}
            height={1920}
            fetchPriority="high"
            className="h-full w-full object-cover object-[60%_center]"
          />
        </Parallax>
      </div>
      <div className="veil absolute inset-0 -z-10" aria-hidden />
      <div className="veil-side absolute inset-0 -z-10 hidden md:block" aria-hidden />

      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <div className="hero-in max-w-3xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="rule w-10" aria-hidden />
            Lounge Bar
          </p>
          <h1 className="display-xl mt-6">
            An evening,
            <br />
            <em className="text-primary">well poured.</em>
          </h1>
          <p className="lede mt-7 max-w-xl">
            Settle into Toast &amp; Tonic in Manikonda for a relaxed lounge-bar evening, good food
            and a drink worth lingering over.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ReserveButton size="lg" />
            <MenuButton size="lg" />
          </div>
        </div>

        <div
          className="hero-in mt-14 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
          style={{ animationDelay: "250ms" }}
        >
          <p className="flex items-center gap-2 text-foreground">
            <MapPin className="size-4 text-primary" aria-hidden />
            {site.locality}
            <span lang="te" className="font-telugu ml-3 hidden text-muted-foreground md:inline">
              {site.nameTelugu}
            </span>
          </p>
          <ExternalLink
            href={site.links.listing}
            className="inline-flex items-center gap-1 underline decoration-rule underline-offset-4 hover:text-foreground"
          >
            Check today’s hours <ArrowUpRight className="size-3.5" aria-hidden />
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="surface-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-32">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow">Toast &amp; Tonic, Manikonda</p>
            <h2 className="display-lg mt-5">
              Low light, a good table and <em>no reason to rush.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lede mt-8 max-w-xl">
              On Lanco Hills Road, Toast &amp; Tonic is a lounge bar made for unhurried evenings.
              The kitchen draws on Andhra, Telangana, Rayalaseema and Chettinad flavours alongside
              easy-going favourites — food that keeps pace with the conversation.
            </p>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Come as you are. We’re proudly LGBTQ+ friendly.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-rule underline-offset-[6px] hover:decoration-foreground"
            >
              Our story <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
        <Reveal variant="image" className="overflow-hidden rounded-md md:col-span-5">
          <img
            src={glassImg}
            alt="A tall glass with ice and sparkling bubbles on a dark marble bar, brass tools behind"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

const previewCards = [
  {
    img: chickenImg,
    alt: "Spiced chicken fry with curry leaves and green chillies on a dark plate",
    label: "Starters",
    caption: "Vepudus, fries and 65s",
  },
  {
    img: paneerImg,
    alt: "Charred paneer tikka with mint chutney and torn naan",
    label: "Veg",
    caption: "Paneer, mushroom and more",
  },
  {
    img: pulaoImg,
    alt: "Fragrant pulao in a dark clay pot with mint and fried onions",
    label: "Pulao",
    caption: "Kodi, mutton, royyala and veg",
  },
];

function MenuPreview() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">From the kitchen</p>
            <h2 className="display-lg mt-5 max-w-2xl">
              A menu with <em className="text-primary">range.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-sm text-muted-foreground">
              {totalDishes} dishes across veg and non-veg — from Telangana Kodi Kura and Nellore Chapala Pulusu to
              pizzas, pastas and nachos.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {previewCards.map((c, i) => (
            <Reveal key={c.label} delay={i * 110}>
              <Link
                to="/menu"
                className="lift group block overflow-hidden rounded-md bg-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.alt}
                    width={1200}
                    height={1504}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="font-display text-2xl">{c.label}</p>
                    <p className="text-sm text-muted-foreground">{c.caption}</p>
                  </div>
                  <ArrowRight
                    className="size-5 text-primary transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <h3 className="eyebrow">A few names to look for</h3>
          <ul className="mt-6 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {homeHighlights.map((d) => (
              <li
                key={d.name}
                className="flex items-center gap-3 border-b border-border py-4 sm:pr-6"
              >
                <DietMark diet={d.diet} />
                <span className="sr-only">{d.diet === "veg" ? "Veg" : "Non-veg"}:</span>
                <span className="font-display text-xl">{d.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">{d.section}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <MenuButton variant="default" size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ToastInterlude() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Parallax speed={0.14}>
          <img
            src={toastImg}
            alt="Two glasses raised in a toast over a candlelit table"
            width={1600}
            height={1104}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Parallax>
      </div>
      <div className="veil absolute inset-0 -z-10" aria-hidden />
      <div className="mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="display-lg max-w-3xl">
            First, a toast. <em className="text-primary">Then, the evening.</em>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function LocationPanel() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">Visit</p>
          <h2 className="display-lg mt-5">Find us on Lanco Hills Road.</h2>
          <p className="lede mt-6">Manikonda, Hyderabad. Tap below for turn-by-turn directions.</p>
        </Reveal>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <dl className="divide-y divide-border border-y border-border">
            <div className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr]">
              <dt className="eyebrow pt-1">Address</dt>
              <dd>
                <address className="not-italic leading-relaxed">
                  {site.address.lines.join(", ")}
                </address>
              </dd>
            </div>
            <div className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr]">
              <dt className="eyebrow pt-1">Phone</dt>
              <dd>
                <a href={site.phone.href} className="hover:text-primary">
                  {site.phone.display}
                </a>
              </dd>
            </div>
            <div className="grid gap-1 py-5 sm:grid-cols-[8rem_1fr]">
              <dt className="eyebrow pt-1">Hours</dt>
              <dd className="text-muted-foreground">
                <HoursList compact />
                <span className="mt-2 block text-xs">{site.hoursNote}</span>{" "}
                <ExternalLink
                  href={site.links.listing}
                  className="text-foreground underline decoration-rule underline-offset-4 hover:decoration-primary"
                >
                  Check today’s hours
                </ExternalLink>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <DirectionsButton variant="default" />
            <CallButton />
            <ReserveButton variant="outline" />
          </div>
          <ReserveNote className="mt-4" />
        </Reveal>
      </div>
    </section>
  );
}
