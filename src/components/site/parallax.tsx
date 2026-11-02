import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight scroll parallax (transform only, rAF-throttled).
 * Disabled for prefers-reduced-motion. `pointer` adds a subtle desktop depth shift.
 */
export function Parallax({
  speed = 0.12,
  pointer = false,
  className,
  children,
}: {
  speed?: number;
  pointer?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let px = 0;
    let py = 0;
    const fine = pointer && window.matchMedia("(pointer: fine)").matches;

    const apply = () => {
      frame = 0;
      const rect = el.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const y = -center * speed;
      el.style.transform = `translate3d(${px}px, ${y + py}px, 0) scale(1.12)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };
    const onPointer = (e: PointerEvent) => {
      px = (e.clientX / window.innerWidth - 0.5) * -14;
      py = (e.clientY / window.innerHeight - 0.5) * -10;
      schedule();
    };

    apply();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    if (fine) window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [speed, pointer]);

  return (
    <div
      ref={ref}
      className={cn("h-full w-full scale-[1.12] will-change-transform", className)}
    >
      {children}
    </div>
  );
}
