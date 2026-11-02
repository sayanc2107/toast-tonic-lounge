import { site } from "@/lib/site";
import { CallButton, DirectionsButton, ReserveButton } from "./actions";
import { Reveal } from "./reveal";

/** Closing call-to-action band used across pages. */
export function VisitBand({
  title = "Pull up a chair.",
  body = "Reserve ahead through Google, or call to check today’s hours before you head over.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="surface-forest relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:items-end md:px-8 md:py-28">
        <Reveal className="md:col-span-7">
          <p className="eyebrow">{site.locality}</p>
          <h2 className="display-lg mt-4">{title}</h2>
          <p className="lede mt-5 max-w-lg">{body}</p>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
          <ReserveButton size="lg" />
          <DirectionsButton size="lg" />
          <CallButton size="lg" className="sm:hidden" />
        </Reveal>
      </div>
    </section>
  );
}
