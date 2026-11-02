import { Link } from "@tanstack/react-router";
import { navItems, site } from "@/lib/site";
import { ExternalLink } from "./actions";
import { Wordmark } from "./wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-border pb-28 sm:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <Wordmark />
          <p lang="te" className="font-telugu mt-4 text-sm text-muted-foreground">
            {site.nameTelugu}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A lounge bar on Lanco Hills Road, Manikonda. LGBTQ+ friendly.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="eyebrow">Find us</h2>
          <address className="mt-5 text-sm not-italic leading-relaxed text-muted-foreground">
            {site.address.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <ExternalLink
            href={site.links.directions}
            className="mt-4 inline-block text-sm text-primary underline decoration-rule underline-offset-4 hover:decoration-primary"
          >
            Get Directions
          </ExternalLink>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow">Contact &amp; hours</h2>
          <p className="mt-5 text-sm">
            <a href={site.phone.href} className="text-foreground hover:text-primary">
              {site.phone.display}
            </a>
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Mon–Thu &amp; Sun 12:30 pm – 12 am
            <br />
            Fri–Sat 12:30 pm – 1 am
          </p>
          <ExternalLink
            href={site.links.listing}
            className="mt-2 inline-block text-sm text-primary underline decoration-rule underline-offset-4 hover:decoration-primary"
          >
            Check today’s hours
          </ExternalLink>
          {site.instagram.url && (
            <p className="mt-5 text-sm">
              <ExternalLink href={site.instagram.url} className="text-foreground hover:text-primary">
                Instagram{site.instagram.handle ? ` @${site.instagram.handle}` : ""}
              </ExternalLink>
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-border px-5 py-6 text-xs text-muted-foreground md:flex-row md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Toast &amp; Tonic, Manikonda, Hyderabad.</p>
        <p>Please drink responsibly.</p>
      </div>
    </footer>
  );
}
