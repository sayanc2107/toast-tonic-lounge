import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Weekly hours; highlights today (India time) after hydration. */
export function HoursList({ compact = false }: { compact?: boolean }) {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const d = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    setToday(DAYS[d.getDay()] ?? null);
  }, []);
  return (
    <ul className={cn("text-sm", compact ? "space-y-1" : "space-y-1.5")}>
      {site.hours.map((h) => (
        <li
          key={h.day}
          className={cn(
            "flex justify-between gap-6",
            h.day === today ? "font-semibold text-primary" : "text-foreground",
          )}
        >
          <span>
            {h.day}
            {h.day === today && <span className="sr-only"> (today)</span>}
          </span>
          <span className="tabular-nums">{h.time}</span>
        </li>
      ))}
    </ul>
  );
}
