# SBPS Website Restructuring (Ikkashin Assignment)

Redesign proposal for Social Baluni Public School, Dehradun: three schools (boarding, defence academy, IIT/NEET) on one campus, 3,000+ students, 400+ staff.

## What is in this submission
| File | Purpose |
|---|---|
| `SBPS_Website_Restructuring_Analysis_and_Recommendations.md` | Problems found, structure, features, tech choices, design specification, approach explanation, delivery plan |
| `sbps-redesign/index.html` | Sample landing page (responsive, accessible, SEO tags, JS-driven stream selector and notice filters) |
| `README.md` | This file |

The Figma design is not included. The design tokens, components and page order in the analysis document (section 5) are written so it can be recreated in Figma.

## Tech stack (proposed for the full build)
- **Frontend:** Next.js (React, TypeScript), Tailwind CSS
- **CMS:** Strapi (headless, Node.js) for content; NestJS service for admissions and portal logic
- **Database:** PostgreSQL (relational records, JSON fields for flexible content)
- **Media:** S3-compatible storage with CDN and automatic WebP/AVIF resizing
- **Auth:** Staff: role-based access with 2FA. Parents/students: mobile OTP. Public pages: none
- **API:** Versioned REST (`/api/v1`), CDN and Redis caching
- **Hosting:** Vercel or Cloudflare (frontend); AWS Mumbai or managed VPS (CMS and DB)
- **CI/CD:** GitHub Actions

## Proposed project structure
```
sbps/
  apps/
    web/            Next.js public site and portal
    cms/            Strapi content types, roles, workflows
    api/            NestJS admissions, notifications, portal
  packages/
    ui/             shared components and design tokens
  infra/            Docker, deployment scripts
  .github/workflows/
```

## Major features
Stream selector (Boarding / Defence / IIT-NEET), audience entry points, notice centre with filters and alerts, events calendar, programme pages with live result counters, sports directory with teams, coaches and medals, achievements with shareable social cards, admissions funnel with status tracking, English and Hindi, SEO structured data, and a CMS with Draft, Review, Publish workflow.

## Run the sample page
No build step. Open `sbps-redesign/index.html` in a browser, or serve it:
```
cd sbps-redesign
python3 -m http.server 8000
```
Then visit http://localhost:8000. The notice list and sports tiles use sample data defined at the bottom of the file; in the full build they come from `GET /api/v1/notices` and `GET /api/v1/sports`.

## Setup for the full build (planned)
```
git clone <repo> && cd sbps
cp .env.example .env          # DB URL, CMS secrets, storage keys
docker compose up -d db       # PostgreSQL
npm install
npm run dev                   # starts web, cms and api
```

## Deployment process (planned)
1. Push to a feature branch; GitHub Actions runs lint, tests and creates a preview deploy.
2. Merge to `main`; the pipeline builds and deploys the frontend to Vercel/Cloudflare and the CMS and API containers to the server.
3. Run database migrations; the CDN cache is purged for changed pages.
4. Nightly encrypted database backups; Sentry and uptime monitoring alert the IT team.

## Notes
- Content on the sample page (stats wording, notices, sports levels) is placeholder and must be replaced with school-supplied data.
- Findings about the existing site are based on its home page text only; run Lighthouse for performance and SEO numbers.
