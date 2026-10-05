# Technical Architecture

## Recommended stack

| Layer | Choice | Reason |
|---|---|---|
| Frontend | Next.js + TypeScript | SSR/SSG, strong SEO, routing, performance and maintainability |
| UI | Tailwind CSS + accessible component library | Fast responsive implementation and consistent components |
| Backend | NestJS + TypeScript | Modular REST API, validation, guards and scalable service structure |
| Database | PostgreSQL | Relational content, workflow, users, events and reporting |
| ORM | Prisma | Type-safe database access and migrations |
| Media | S3-compatible object storage + CDN | Scalable images/videos/documents |
| Cache | Redis | Cache hot content and rate-limit primitives |
| Search | PostgreSQL FTS initially; OpenSearch later | Start simple; scale search when needed |
| Auth | OIDC/OAuth2 + short-lived tokens | Secure role-based admin authentication; integrate school IdP later |
| Jobs | BullMQ/Redis | Scheduled publishing, media processing, notifications |
| Deployment | Vercel/Cloudflare for frontend + AWS/GCP/Azure for API/DB | CDN edge delivery plus managed backend services |
| Monitoring | OpenTelemetry + Sentry + cloud logs | Errors, traces and operational visibility |

## Architecture flow

Browser → CDN/WAF → Next.js web app → API gateway/backend → PostgreSQL

Media: Browser → signed upload URL → Object Storage → CDN

Async: API → Redis queue → worker → image processing / scheduled publish / notifications

## Security

- Separate public and authenticated API routes.
- Role-based access control: Super Admin, Content Admin, Editor, Reviewer.
- Passwordless/OIDC preferred for staff where an identity provider exists.
- MFA for privileged admin accounts.
- CSRF/XSS/SQL injection protections via framework and validation.
- Rate limiting and bot protection on enquiry/application endpoints.
- Server-side authorization; never trust role claims from the browser.
- Encrypt secrets and database backups.
- Audit log for content and permission changes.
- Signed URLs for private media/documents.
- Minimize personal-data collection and define retention periods.

## Performance

Public pages should be statically generated or cached wherever possible. Images are resized to responsive formats and lazy loaded below the fold. Program, news and event listing pages use pagination and cache headers.

## Deployment

1. CI runs lint, typecheck, unit tests and build.
2. Pull request gets preview deployment.
3. Approved merge deploys frontend/backend.
4. Database migrations run using controlled release process.
5. CDN invalidation is event-driven for updated content.
6. Monitoring checks application health, latency, errors and queue backlog.
