import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ReserveButton } from "./actions";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link to="/" aria-label="Toast & Tonic — Home" className="rounded-sm">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
              <span
                aria-hidden
                className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100 group-data-[status=active]:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground xl:inline-flex"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone.display}
          </a>
          <ReserveButton size="sm" className="hidden sm:inline-flex" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col border-border p-0 sm:max-w-md">
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="px-6 pt-6">
                <Wordmark />
              </div>
              <div className="rule mx-6 mt-6" />
              <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
                {navItems.map((item, i) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="flex items-baseline justify-between border-b border-border py-4 font-display text-4xl text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                  >
                    {item.label}
                    <span className="font-sans text-xs tracking-[0.2em] text-primary">
                      0{i + 1}
                    </span>
                  </Link>
                ))}
              </nav>
              <div className="mt-auto space-y-3 px-6 pb-8">
                <ReserveButton size="lg" className="w-full" />
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={site.phone.href}>
                    <Phone aria-hidden /> {site.phone.display}
                  </a>
                </Button>
                <p className="pt-2 text-xs text-muted-foreground">
                  {site.address.lines.join(", ")}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

/** Thumb-friendly action bar on small screens. */
export function MobileActionBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 px-4 pb-[max(env(safe-area-inset-bottom),0.75rem)] pt-3 backdrop-blur-md transition-transform duration-500 sm:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!show}
    >
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <ReserveButton className="w-full" />
        <Button asChild variant="outline" size="icon" tabIndex={show ? 0 : -1}>
          <a href={site.phone.href} aria-label={`Call ${site.phone.display}`}>
            <Phone />
          </a>
        </Button>
      </div>
    </div>
  );
}
