import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarCheck, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Variant = ButtonProps["variant"];
type Size = ButtonProps["size"];

/** Anchor that opens safely in a new tab and announces it to screen readers. */
export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function ReserveButton({
  variant = "default",
  size,
  className,
  label = "Reserve a Table",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <ExternalLink href={site.links.reserve}>
        <CalendarCheck aria-hidden />
        {label}
        <ArrowUpRight aria-hidden className="opacity-60" />
      </ExternalLink>
    </Button>
  );
}

export function DirectionsButton({
  variant = "outline",
  size,
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <ExternalLink href={site.links.directions}>
        <MapPin aria-hidden />
        Get Directions
        <ArrowUpRight aria-hidden className="opacity-60" />
      </ExternalLink>
    </Button>
  );
}

export function CallButton({
  variant = "outline",
  size,
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={site.phone.href} aria-label={`Call Now, ${site.phone.display}`}>
        <Phone aria-hidden />
        Call Now
      </a>
    </Button>
  );
}

export function MenuButton({
  variant = "outline",
  size,
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link to="/menu">Explore the Menu</Link>
    </Button>
  );
}

export function ReserveNote({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)}>
      Reservations are handled through Google. Your booking is confirmed by the venue, not this
      site.
    </p>
  );
}
