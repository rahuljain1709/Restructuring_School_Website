# Social Baluni Public School — Website Restructuring Challenge

A practical, scalable digital-platform concept for the Ikkashin Technologies Website Restructuring Challenge.

## What is included

- `sample-page/` — responsive landing-page prototype with interactive learning paths, news filters, sports selection and mobile navigation.
- `docs/design-specification.md` — information architecture, UX and Figma-ready specifications.
- `docs/landing-page.md` — implementation and visual-system notes.
- `docs/landing-page-visual-reference.png` — high-fidelity visual direction/reference board.
- `docs/approach.md` — short interview/submission explanation.
- `docs/architecture.md` — scalable production architecture.
- `docs/database-schema.md` — MVP relational model and API examples.

## Design concept

**Learn. Lead. Compete.**

The experience is structured around journeys rather than a long information dump. The homepage introduces the school, lets visitors choose Schooling / Competitive Preparation / Defence Preparation, then moves into programs, campus life, sports, dynamic campus stories and a guided admissions funnel.

## Prototype tech

The sample page is dependency-light HTML/CSS/JavaScript so it can be opened immediately in a browser.

The recommended production stack is:

- Next.js + TypeScript
- NestJS + TypeScript
- PostgreSQL + Prisma
- S3-compatible object storage + CDN
- Redis + BullMQ
- OIDC/OAuth2 + RBAC + MFA for privileged admins
- Managed cloud hosting + WAF/CDN

## Run locally

```bash
cd sample-page
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Production CMS workflow

Draft → Review → Schedule/Publish → Expire/Archive

This supports news, events, notices, admissions, programs, sports, achievements, faculty/staff, galleries, documents and SEO metadata without developer intervention.

## Source and content note

The assignment supplied in the conversation establishes the project's target ecosystem and requirements. Current public-site observations are used only to shape the information architecture and are not presented as final approved school copy. Final logo, photography, contact information, program names, admission dates and legal text should be approved by the school before production.
