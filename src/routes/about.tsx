import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-lounge.webp";
import toastImg from "@/assets/toast-moment.webp";
import pulaoImg from "@/assets/dish-pulao.webp";
import { MenuButton, ReserveButton } from "@/components/site/actions";
import { Parallax } from "@/components/site/parallax";
import { Reveal } from "@/components/site/reveal";
import { VisitBand } from "@/components/site/visit-band";
import { site } from "@/lib/site";

const TITLE = "About Us — Toast & Tonic | Lounge Bar in Manikonda, Hyderabad";
const DESC =
  "Meet Toast & Tonic, a relaxed, LGBTQ+ friendly lounge bar on Lanco Hills Road in Manikonda, Hyderabad — good food and an evening at your own pace.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const notes = [
  {
    n: "01",
    title: "Settle in",
    body: "Low light, a comfortable seat and the sense that nobody is watching the clock.",
  },
  {
    n: "02",
    title: "Eat well",
    body: "A kitchen that moves from Andhra fries and Telangana curries to Chettinad pulaos and easy favourites.",
  },
  {
    n: "03",
    title: "Come as you are",
    body: "Toast & Tonic is LGBTQ+ friendly — an evening out should feel like yours.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
        <div className="hero-in">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-6 font-display text-[clamp(3.6rem,15vw,12rem)] leading-[0.86] tracking-[-0.03em]">
            Toast <em className="text-primary">&amp;</em>
            <br />
            Tonic
          </h1>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-12">
            <p lang="te" className="font-telugu text-xl text-muted-foreground md:col-span-4">
              {site.nameTelugu}
            </p>
            <p className="lede md:col-span-7 md:col-start-6">
              A lounge bar in Manikonda, Hyderabad, for evenings that begin with a raised glass and
              unfold at their own pace.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[70svh] overflow-hidden md:h-[85svh]">
        <Parallax speed={0.12}>
          <img
            src={heroImg}
            alt="A softly lit lounge with velvet seating, brass lamps and a stocked back bar"
            width={1600}
            height={1920}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </Parallax>
      </section>

      <section className="surface-ivory">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-32">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">The name</p>
            <h2 className="display-lg mt-5">
              A toast to begin. <em>A tonic to keep it bright.</em>
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-5 text-[1.075rem] leading-relaxed md:col-span-6 md:col-start-7">
            <p>
              Every good evening has a moment where someone lifts a glass. Toast &amp; Tonic is named
              for that moment — and for everything that comes after it: the second round of
              starters, the curry that arrives just as the conversation turns, the table that
              nobody wants to leave.
            </p>
            <p className="text-muted-foreground">
              We’re on Lanco Hills Road in Manikonda. Drop in for a relaxed lounge-bar evening, with
              food that is generous with flavour and drinks worth lingering over.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="eyebrow">The evening</p>
            <h2 className="display-lg mt-5 max-w-2xl">Well paced, start to finish.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            {notes.map((n, i) => (
              <Reveal as="li" key={n.n} delay={i * 110} className="bg-background p-8 md:p-10">
                <span className="font-display text-sm text-primary">{n.n}</span>
                <h3 className="display-md mt-6">{n.title}</h3>
                <p className="mt-4 text-muted-foreground">{n.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-20 md:grid-cols-12 md:px-8 md:pb-32">
        <Reveal variant="image" className="overflow-hidden rounded-md md:col-span-7">
          <img
            src={toastImg}
            alt="Two glasses meeting in a toast above a candlelit table"
            width={1600}
            height={1104}
            loading="lazy"
            className="aspect-[16/11] h-full w-full object-cover"
          />
        </Reveal>
        <div className="flex flex-col gap-5 md:col-span-5">
          <Reveal variant="image" className="overflow-hidden rounded-md">
            <img
              src={pulaoImg}
              alt="A clay pot of pulao topped with mint and crisp onions"
              width={1200}
              height={1504}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
          <Reveal className="rounded-md border border-border p-8">
            <p className="font-display text-2xl">Ready when you are.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <MenuButton variant="default" />
              <ReserveButton variant="outline" />
            </div>
          </Reveal>
        </div>
      </section>

      <VisitBand title="Raise one with us." />
    </>
  );
}
