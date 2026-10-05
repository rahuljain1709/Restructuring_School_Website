# Landing Page Implementation Notes

## Design direction

The landing page follows the assignment's requirement that the site be a practical, scalable digital platform rather than a simple visual refresh. The page is organized around three visitor decisions: understand SBPS, explore a relevant learning path, and take the next action.

## Visual system

- Foundation: deep navy + warm white
- Accent: restrained terracotta/copper for action states and educational warmth
- Editorial headings: classic editorial serif stack
- Interface text: modern system sans-serif stack
- Card treatment: restrained borders, modest shadows and generous whitespace
- Photography slots: represented as CSS art placeholders in the prototype so the page remains dependency-free; replace these with approved school photography before production

## Interaction ideas included in the prototype

1. Responsive mobile navigation.
2. Learning-path tabs for Schooling, Competitive Preparation and Defence Preparation.
3. News filters for News, Events, Notices and Achievements.
4. Sports pill selection.
5. Search affordance showing where a production search endpoint would connect.
6. Sticky header and skip-link for accessibility.

## Figma handoff

A high-fidelity visual reference is included at `docs/landing-page-visual-reference.png`. It should be treated as a direction/reference board, not as final approved school photography or logo artwork.

## Production image requirements

The prototype intentionally avoids unapproved external school images. In production, use a controlled media library in the CMS with required alt text, responsive derivatives, WebP/AVIF delivery and CDN caching.
