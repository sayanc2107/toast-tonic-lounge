import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ExternalLink } from "./actions";
import { Reveal } from "./reveal";

/**
 * Configurable Instagram block. Shows verified posts/link from `site.instagram`
 * when set; otherwise a neutral placeholder with no assumed handle.
 */
export function InstagramSection({
  heading = "A little more Toast & Tonic",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  const { url, handle, posts } = site.instagram;
  const tiles = posts.length > 0 ? posts.slice(0, 6) : Array.from({ length: 6 }, () => null);

  return (
    <section aria-labelledby="ig-heading" className={cn("py-20 md:py-28", className)}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">On Instagram</p>
            <h2 id="ig-heading" className="display-lg mt-4 max-w-xl">
              {heading}
            </h2>
            {handle && <p className="mt-3 text-muted-foreground">@{handle}</p>}
          </Reveal>
          <Reveal delay={120}>
            {url ? (
              <Button asChild variant="outline">
                <ExternalLink href={url}>
                  <Instagram aria-hidden /> Follow on Instagram
                </ExternalLink>
              </Button>
            ) : (
              <div className="flex flex-col items-start gap-2 md:items-end">
                <Button variant="quiet" disabled aria-describedby="ig-note">
                  <Instagram aria-hidden /> Follow on Instagram
                </Button>
                <p id="ig-note" className="text-xs text-muted-foreground">
                  Official profile link coming soon.
                </p>
              </div>
            )}
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {tiles.map((post, i) => (
            <li key={i}>
              <Reveal delay={i * 70} className="h-full">
                {post ? (
                  <ExternalLink
                    href={post.href}
                    className="lift block aspect-square overflow-hidden rounded-md bg-card"
                  >
                    <img
                      src={post.image}
                      alt={post.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </ExternalLink>
                ) : (
                  <div
                    className="tile-placeholder flex aspect-square items-center justify-center rounded-md border border-border"
                    aria-hidden
                  >
                    <Instagram className="size-5 text-muted-foreground/50" />
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
        {!url && (
          <p className="sr-only">Instagram posts will appear here once the official profile is linked.</p>
        )}
      </div>
    </section>
  );
}
