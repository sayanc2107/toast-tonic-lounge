import type { Diet } from "@/lib/menu";
import { cn } from "@/lib/utils";

/** Indian-style veg / non-veg indicator: square outline with a dot (veg) or triangle (non-veg). */
export function DietMark({ diet, className }: { diet: Diet; className?: string }) {
  const isVeg = diet === "veg";
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-3.5 shrink-0 items-center justify-center rounded-[2px] border-[1.5px]",
        isVeg ? "border-veg" : "border-nonveg",
        className,
      )}
    >
      {isVeg ? (
        <span className="size-1.5 rounded-full bg-veg" />
      ) : (
        <span className="h-0 w-0 border-x-[3.5px] border-b-[6px] border-x-transparent border-b-nonveg" />
      )}
    </span>
  );
}
