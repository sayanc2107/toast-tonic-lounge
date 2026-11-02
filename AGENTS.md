<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Business facts and external links live only in `src/lib/site.ts`; Instagram is configured there (null = neutral placeholder). Why: one place for the owner to update verified data.
- Menu data lives only in `src/lib/menu.ts` (names only, diet-grouped); `beverageMenu` renders a "coming soon" state when empty. Why: content changes never touch page code.
- Shared site UI (header, footer, CTAs, reveal/parallax motion) lives in `src/components/site/`; pages are `/`, `/menu`, `/about`, `/visit`. Why: consistent CTAs and behaviour across pages.
- Light/forest sections use the `.surface-ivory` / `.surface-forest` classes that re-map semantic tokens instead of hardcoded colors. Why: components stay token-only.
