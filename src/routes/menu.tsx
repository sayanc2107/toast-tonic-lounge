import { createFileRoute } from "@tanstack/react-router";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { GlassWater, Phone, Search, X } from "lucide-react";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ReserveButton } from "@/components/site/actions";
import { DietMark } from "@/components/site/diet-mark";
import { Reveal } from "@/components/site/reveal";
import { VisitBand } from "@/components/site/visit-band";
import {
  beverageMenu,
  countItems,
  dietLabel,
  filterSections,
  foodMenu,
  type Diet,
  type MenuSection,
} from "@/lib/menu";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Tab = "food" | "beverages";
type MenuSearch = { tab?: Tab; diet?: Diet };

const TITLE = "Menu — Toast & Tonic, Manikonda | Veg & Non-Veg Food";
const DESC =
  "Browse the Toast & Tonic food menu in Manikonda, Hyderabad: veg and non-veg starters, curries, pulaos, rice, breads, soups and sweets.";

export const Route = createFileRoute("/menu")({
  validateSearch: (s: Record<string, unknown>): MenuSearch => {
    const out: MenuSearch = {};
    if (s["tab"] === "food" || s["tab"] === "beverages") out.tab = s["tab"];
    if (s["diet"] === "veg" || s["diet"] === "nonveg") out.diet = s["diet"];
    return out;
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const tabTrigger =
  "relative cursor-pointer pb-4 font-display text-4xl text-muted-foreground transition-colors hover:text-foreground data-[state=active]:text-foreground md:text-6xl after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 data-[state=active]:after:scale-x-100";

function MenuPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const tab: Tab = search.tab ?? "food";
  const diet: Diet = search.diet ?? "veg";

  const setTab = (t: string) =>
    navigate({ search: (p) => ({ ...p, tab: t as Tab }), replace: true, resetScroll: false });
  const setDiet = (d: string) =>
    navigate({ search: (p) => ({ ...p, diet: d as Diet }), replace: true, resetScroll: false });

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 md:px-8 md:pt-44">
        <div className="hero-in grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Menu</p>
            <h1 className="display-xl mt-5">
              Order <em className="text-primary">slowly.</em>
            </h1>
          </div>
          <p className="lede md:col-span-5">
            Veg and non-veg, clearly marked. Ask the team about today’s availability.
          </p>
        </div>
      </section>

      <TabsPrimitive.Root value={tab} onValueChange={setTab} className="pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <TabsPrimitive.List
            aria-label="Menu category"
            className="flex gap-8 border-b border-border md:gap-14"
          >
            <TabsPrimitive.Trigger value="food" className={tabTrigger}>
              Food
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger value="beverages" className={tabTrigger}>
              Beverages
            </TabsPrimitive.Trigger>
          </TabsPrimitive.List>
        </div>

        <TabsPrimitive.Content value="food" className="focus-visible:outline-none">
          <FoodMenu diet={diet} setDiet={setDiet} />
        </TabsPrimitive.Content>
        <TabsPrimitive.Content value="beverages" className="focus-visible:outline-none">
          <BeveragesMenu />
        </TabsPrimitive.Content>

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mt-20 border-t border-border pt-6 text-xs text-muted-foreground">
            Menu items based on the restaurant’s{" "}
            <ExternalLink
              href={site.links.zomato}
              className="underline decoration-rule underline-offset-4 hover:text-foreground"
            >
              Zomato listing
            </ExternalLink>
            ; availability may change.
          </p>
        </div>
      </TabsPrimitive.Root>

      <VisitBand title="Hungry yet?" />
    </>
  );
}

function FoodMenu({ diet, setDiet }: { diet: Diet; setDiet: (d: string) => void }) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);
  const other: Diet = diet === "veg" ? "nonveg" : "veg";

  const sections = useMemo(() => filterSections(foodMenu[diet], deferred), [diet, deferred]);
  const otherMatches = useMemo(
    () => (deferred.trim() ? countItems(filterSections(foodMenu[other], deferred)) : 0),
    [other, deferred],
  );
  const matches = countItems(sections);
  const anchorRef = useRef<HTMLDivElement>(null);

  // When filtering or switching diet while scrolled deep, bring results back into view.
  useEffect(() => {
    const el = anchorRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    if (window.scrollY > top) window.scrollTo({ top, behavior: "smooth" });
  }, [deferred, diet]);

  return (
    <TabsPrimitive.Root value={diet} onValueChange={setDiet}>
      <div ref={anchorRef} aria-hidden />
      {/* Sticky toolbar */}
      <div className="sticky top-18 z-20 border-b border-border bg-background shadow-soft md:top-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:justify-between md:px-8">
          <TabsPrimitive.List
            aria-label="Diet"
            className="grid grid-cols-2 rounded-full border border-border p-1 md:inline-grid md:w-80"
          >
            {(["veg", "nonveg"] as Diet[]).map((d) => (
              <TabsPrimitive.Trigger
                key={d}
                value={d}
                className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-semibold text-muted-foreground transition-colors data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                <DietMark diet={d} className="bg-ivory" />
                {dietLabel[d]}
                <span className="text-xs font-normal opacity-60">
                  {countItems(foodMenu[d])}
                </span>
              </TabsPrimitive.Trigger>
            ))}
          </TabsPrimitive.List>

          <div className="relative md:w-80">
            <label htmlFor="menu-search" className="sr-only">
              Search dishes
            </label>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              id="menu-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${dietLabel[diet].toLowerCase()} dishes`}
              autoComplete="off"
              className="h-11 w-full appearance-none rounded-full border border-input bg-transparent pl-11 pr-10 [&::-webkit-search-cancel-button]:appearance-none text-sm placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>

        {/* Section jump links */}
        {!deferred.trim() && (
          <nav aria-label={`${dietLabel[diet]} sections`} className="mx-auto max-w-7xl md:px-8">
            <ul className="flex gap-2 overflow-x-auto px-5 pb-3 [scrollbar-width:none] md:px-0">
              {foodMenu[diet].map((s) => (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    className="inline-flex h-9 items-center rounded-full border border-border px-4 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {(["veg", "nonveg"] as Diet[]).map((d) => (
        <TabsPrimitive.Content key={d} value={d} className="focus-visible:outline-none">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="sr-only" aria-live="polite">
              {deferred.trim() ? `${matches} ${dietLabel[d]} dishes match “${deferred}”.` : ""}
            </p>

            {d === "nonveg" && !deferred.trim() && (
              <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
                Egg dishes are listed under Non-Veg in the <a href="#eggetarian" className="underline underline-offset-4 hover:text-foreground">Eggetarian</a> group.
              </p>
            )}

            {sections.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-display text-3xl">No {dietLabel[d].toLowerCase()} dishes match “{deferred}”.</p>
                {otherMatches > 0 && (
                  <Button variant="outline" className="mt-6" onClick={() => setDiet(other)}>
                    See {otherMatches} {dietLabel[other]} {otherMatches === 1 ? "match" : "matches"}
                  </Button>
                )}
              </div>
            ) : (
              <>
                {sections.map((s) => (
                  <SectionBlock key={s.id} section={s} diet={d} />
                ))}
                {otherMatches > 0 && (
                  <p className="mt-10 text-sm text-muted-foreground">
                    Also {otherMatches} in {dietLabel[other]}.{" "}
                    <button
                      type="button"
                      onClick={() => setDiet(other)}
                      className="cursor-pointer text-foreground underline decoration-rule underline-offset-4"
                    >
                      Show {dietLabel[other]}
                    </button>
                  </p>
                )}
              </>
            )}
          </div>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}

function SectionBlock({ section, diet }: { section: MenuSection; diet: Diet }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-h`}
      className="grid scroll-mt-48 gap-6 border-b border-border py-12 md:grid-cols-12 md:py-16"
    >
      <div className="md:col-span-4">
        <div className="md:sticky md:top-56">
          <h2 id={`${section.id}-h`} className="display-md">
            {section.title}
          </h2>
          <p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <DietMark diet={diet} />
            {dietLabel[diet]} · {section.items.length} {section.items.length === 1 ? "dish" : "dishes"}
          </p>
          {section.note && <p className="mt-3 text-sm italic text-primary">{section.note}</p>}
        </div>
      </div>
      <ul className="grid gap-x-10 sm:grid-cols-2 md:col-span-8">
        {section.items.map((item) => (
          <li
            key={item}
            className="flex items-baseline gap-3 border-b border-border/60 py-3.5 text-[1.05rem]"
          >
            <span className="font-display text-xs text-primary" aria-hidden>
              —
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function BeveragesMenu() {
  if (beverageMenu.length > 0) {
    return (
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {beverageMenu.map((s) => (
          <section key={s.id} id={s.id} className="border-b border-border py-12">
            <h2 className="display-md">{s.title}</h2>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
              {s.items.map((i) => (
                <li key={i} className="border-b border-border/60 py-3.5">
                  {i}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <Reveal className="mt-12 grid gap-10 rounded-md border border-border bg-card px-6 py-14 md:grid-cols-12 md:px-12 md:py-20">
        <div className="md:col-span-7">
          <GlassWater className="size-8 text-primary" aria-hidden />
          <h2 className="display-md mt-6">Beverage menu coming soon.</h2>
          <p className="lede mt-4 max-w-md">
            We’re putting the drinks list together for the site. Until then, ask the team when you
            visit or give us a call.
          </p>
        </div>
        <div
          className={cn("flex flex-col gap-3 md:col-span-5 md:items-end md:justify-end")}
        >
          <Button asChild variant="outline" size="lg">
            <a href={site.phone.href}>
              <Phone aria-hidden /> {site.phone.display}
            </a>
          </Button>
          <ReserveButton size="lg" />
        </div>
      </Reveal>
    </div>
  );
}
