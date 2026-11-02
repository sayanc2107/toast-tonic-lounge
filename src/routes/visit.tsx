import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CallButton,
  DirectionsButton,
  ExternalLink,
  ReserveButton,
  ReserveNote,
} from "@/components/site/actions";
import { InstagramSection } from "@/components/site/instagram-section";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site";

const TITLE = "Visit Us — Toast & Tonic, Lanco Hills Road, Manikonda";
const DESC =
  "Find Toast & Tonic at 9 Building, 1-1/38/B, Lanco Hills Road, Manikonda, Hyderabad 500089. Call +91 77997 93737, get directions or reserve a table.";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/visit" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/visit" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarOrPub",
          name: "Toast & Tonic",
          telephone: "+91-77997-93737",
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: "Manikonda, Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500089",
            addressCountry: "IN",
          },
          hasMap: site.links.listing,
          acceptsReservations: true,
        }),
      },
    ],
  }),
  component: VisitPage,
});

const steps = [
  { title: "Open directions", body: "Tap Get Directions to start navigation in Google Maps." },
  { title: "Head for Lanco Hills Road", body: "Manikonda, Hyderabad — also listed as Laxminagar Colony." },
  { title: "Look for 9 Building, 1-1/38/B", body: "“Cloud”, Lanco Hills Road. Call us if you need a hand." },
];

function VisitPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-44">
        <div className="hero-in grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow">Visit Us</p>
            <h1 className="display-xl mt-5">
              Come <em className="text-primary">find us.</em>
            </h1>
          </div>
          <p className="lede md:col-span-4">
            Lanco Hills Road, Manikonda. Reserve ahead or call before you set out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid overflow-hidden rounded-md border border-border md:grid-cols-12">
          <div className="space-y-0 divide-y divide-border md:col-span-5">
            <InfoRow icon={<MapPin aria-hidden />} label="Address">
              <address className="not-italic leading-relaxed">
                {site.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <p className="mt-2 text-xs text-muted-foreground">Also listed as: {site.address.alt}</p>
            </InfoRow>
            <InfoRow icon={<Phone aria-hidden />} label="Phone">
              <a href={site.phone.href} className="font-display text-3xl hover:text-primary">
                {site.phone.display}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">{site.phone.local}</p>
            </InfoRow>
            <InfoRow icon={<Clock aria-hidden />} label="Hours">
              <p>{site.hoursNote}</p>
              <p className="mt-1 text-xs text-muted-foreground">{site.listingSnippet}</p>
              <Button asChild variant="link" className="mt-3 h-auto">
                <ExternalLink href={site.links.listing}>
                  Check today’s hours <ArrowUpRight aria-hidden />
                </ExternalLink>
              </Button>
            </InfoRow>
            <div className="flex flex-col gap-3 p-6 md:p-8">
              <ReserveButton size="lg" className="w-full" />
              <div className="grid gap-3 sm:grid-cols-2">
                <DirectionsButton className="w-full" />
                <CallButton className="w-full" />
              </div>
              <ReserveNote />
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden border-t border-border bg-card md:col-span-7 md:border-l md:border-t-0">
            <iframe
              title="Map showing Toast & Tonic on Lanco Hills Road, Manikonda"
              src={site.links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-tone absolute inset-x-0 -top-[190px] h-[calc(100%+190px)] w-full border-0"
            />
          </div>
        </div>
      </section>

      <section className="surface-ivory mt-20 md:mt-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Arriving</p>
            <h2 className="display-lg mt-5">Manikonda, by way of Lanco Hills.</h2>
            <p className="mt-6 text-muted-foreground">
              We’re in Manikonda in west Hyderabad, on Lanco Hills Road.
            </p>
          </Reveal>
          <ol className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:col-span-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="bg-background p-7">
                <span className="flex size-9 items-center justify-center rounded-full border border-border font-display text-lg">
                  {i + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
            <li className="bg-background p-7 md:col-span-3">
              <Button asChild variant="default" size="lg">
                <ExternalLink href={site.links.directions}>
                  <Navigation aria-hidden /> Get Directions <ArrowUpRight aria-hidden />
                </ExternalLink>
              </Button>
            </li>
          </ol>
        </div>
      </section>

      <InstagramSection heading="Follow the evening" />
    </>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-5 p-6 md:p-8">
      <span className="mt-0.5 text-primary [&_svg]:size-5">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="eyebrow mb-3">{label}</p>
        {children}
      </div>
    </div>
  );
}
