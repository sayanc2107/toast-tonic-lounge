import { cn } from "@/lib/utils";

export function Wordmark({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="font-display text-[1.6rem] tracking-tight">
        Toast <span className="italic text-primary">&amp;</span> Tonic
      </span>
      {!compact && (
        <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Lounge Bar · Manikonda
        </span>
      )}
    </span>
  );
}
