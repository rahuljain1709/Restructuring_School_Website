# Social Baluni Public School: Website Restructuring
Analysis, recommendations, design specification and approach

## 1. What is wrong with the current site (sbpsdoon.com)

I reviewed the home page. The main problems:

| Area | Finding | Impact |
|---|---|---|
| Out-of-date content | Home page still shows a Covid-19 WhatsApp classes notice, "Periodic Assessment II 2019-20", "Admission open 2020-21" and "Selected Students 2020-21" | Parents see an inactive school; admissions trust drops |
| Unfinished page | Visible placeholder text: "Empty tab. Edit page to add content here" and "This is custom heading element" | Looks unprofessional |
| Missing core offer | No visible IIT/NEET or NDA section, results, toppers or success stories | The school's strongest selling points are invisible |
| Three schools not explained | Boarding, defence academy and IIT/NEET are not presented as distinct programmes | Visitors cannot self-select |
| Sports as a plain list | 14 bullet points with "Athletics" duplicated; no teams, coaches, medals, events or galleries | Sports reputation is not shown |
| No audience paths | Students, parents, staff, alumni and prospects all land in one page | Slow to find notices or admission details |
| Content errors | Typos ("our caters", "acitivites"), mixed English and Hindi testimonials with no language handling | Weak credibility |
| Weak admissions flow | Three images ("Visit", "Enquire", "Apply") and an enquiry form; no application tracking | Leads are lost |
| Not built for sharing | No visible news, achievements or shareable cards | Little social media reach |
| Content depends on a page builder | Editing needs page-by-page "edit page" work | Updates get skipped |

Note: I could only read text content of the page. Page speed, mobile layout, SEO tags and security headers should be measured with Lighthouse and PageSpeed Insights before final sign-off.

## 2. Recommended structure

**Principle:** organise by audience and by the three schools, not by the school's internal departments.

**Primary navigation**
1. **Our Schools**: Boarding School, Defence Academy (NDA), IIT/NEET Programme
2. **Admissions**: process, fees, dates, online application, status tracker, campus visit booking
3. **Life at SBPS**: Sports, Activities, Facilities (library, art, music, labs, hall), Gallery
4. **Achievements**: Student results, sports medals, IIT/NDA success stories, Alumni
5. **News and Notices**: announcements, events, circulars, calendar
6. **About**: leadership, faculty and staff, contact

**Audience entry points on the home page:** Prospective parent, Current parent, Student, Teacher/Staff, Alumni, Visitor.

**Page types (all driven by the database, none hand-built):**
- Programme page (3 schools, IIT, NDA, other exams): overview, curriculum, faculty, results, schedule, FAQ, apply button
- Sport page (one per sport): coach, teams, fixtures, medals, gallery, how to join
- Achievement page: one URL per achievement with a share card
- Event, Notice, News, Faculty profile, Gallery album

### Representing IIT/NEET and NDA meaningfully
- Each has its own mini-site with a result tracker (year-wise selections), topper stories, test series calendar, faculty and a "Why here" comparison to outside coaching.
- NDA: training path from Class 8, physical standards, SSB-style preparation, list of cadets selected, parent Q&A.
- Result counters pull from the database so figures never go stale.

### Showcasing sports
- Sport directory with filters (sport, age group, level).
- Per sport: coach profile, current squad, fixtures and results, medals timeline, photo and video gallery.
- Student participation records feed an "Athlete profile" (opt-in with parental consent).
- Medals auto-generate a shareable social card.

## 3. Features beyond the brief

1. **Stream selector on the home page** (Boarding / Defence / IIT-NEET) that changes hero content and call to action.
2. **Share cards:** each achievement or event creates an image (1080x1080 and 1200x630) with the school branding, ready for Instagram, WhatsApp and Facebook, plus Open Graph tags.
3. **Admissions funnel:** enquiry, campus visit booking, application, document upload, application status page, WhatsApp and SMS updates.
4. **Notice centre:** filter by class, audience and category; subscribe to WhatsApp or email alerts; urgent notices pinned.
5. **Bilingual:** English and Hindi toggle for all public pages.
6. **School calendar** with .ics export and Google Calendar link.
7. **Parent and student portal (phase 2):** login, circulars for the child's class, fee receipts, timetable, results. Integrates with the existing ERP rather than replacing it.
8. **Alumni directory** with opt-in profiles, to grow referrals.
9. **Social feed sync:** pull the latest Instagram and YouTube posts onto the site; "Publish to social" button in the CMS.
10. **Accessibility and low bandwidth:** works on cheap Android phones and slow networks (the main device for most parents).

## 4. Technical recommendations

| Layer | Choice | Reason |
|---|---|---|
| Frontend | Next.js (React, TypeScript) with Tailwind CSS | Server rendering and static generation give fast pages and good SEO; one codebase for public site and portal |
| CMS / Backend | Strapi (headless CMS, Node.js) for content; NestJS service for admissions and portal logic | Non-technical staff can manage content; custom logic stays separate |
| Database | PostgreSQL | Relational data (students, classes, results, applications); strong for 3,000+ student records; JSON fields for flexible content |
| Search | PostgreSQL full-text first; Meilisearch later | Keeps early cost low |
| Media | S3-compatible storage + CDN, automatic image resizing (WebP/AVIF), YouTube for video | Fast galleries without heavy server load |
| Auth | Public pages need none. Staff: role-based access (RBAC) with SSO or email + 2FA. Parents/students: OTP login by mobile number | Parents rarely remember passwords |
| API | REST (versioned `/api/v1`), cached with CDN and Redis | Simple to maintain; can add GraphQL later |
| Hosting | Vercel or Cloudflare for frontend; a managed VPS or AWS (Mumbai region) for CMS and DB; automated daily backups | Low latency in India, simple scaling |
| CI/CD | GitHub Actions: lint, test, preview deploy, production deploy | Safe releases |
| Monitoring | Sentry, uptime monitoring, Lighthouse CI | Catches regressions |

### Roles in the CMS
| Role | Can do |
|---|---|
| Super admin (IT) | Everything, user management |
| Principal / Admin office | Publish all content, admissions |
| Department editor (Sports, IIT, NDA, Academics) | Create and edit only their section; submit for review |
| Faculty | Update own profile, upload class notices |
| Reviewer | Approve before publish |

Workflow: Draft, Review, Published, Scheduled, Archived. Every change is logged.

### Core data model (simplified)
`users, roles, programs, classes, faculty, students (portal phase), news, notices, events, sports, teams, coaches, achievements, results (exam, year, student, rank), albums, media, admissions_enquiries, applications, visit_bookings, pages, redirects, audit_logs`

Content types share fields: title, slug, summary, body, cover image, audience tags, language, SEO title/description, status, publish date.

### Security
- HTTPS, HSTS, secure headers (CSP), rate limiting and CAPTCHA on forms
- Input validation and parameterised queries; file upload type and size checks, malware scan
- RBAC, 2FA for staff, audit logs
- Student data: collect the minimum, parental consent for photos and names, no student personal data in public APIs
- Encrypted backups; DPDP Act (India) aligned privacy policy and consent records

### Performance and SEO targets
- Lighthouse 90+ on mobile; LCP under 2.5s on 4G
- Static generation with incremental revalidation for most pages
- Clean URLs (`/sports/fencing`, `/achievements/nda-2025`), sitemap, structured data (School, Event, NewsArticle), canonical and hreflang tags
- Local SEO: Google Business Profile, "boarding school in Dehradun", "NDA coaching school" landing pages

### Scalability for 3,000+ students and 400+ staff
- Public content is cached at the CDN, so traffic spikes (results day, admissions) do not hit the database.
- Stateless app servers can scale horizontally; DB uses read replicas if the portal grows.
- Portal traffic is predictable (about 3,400 users plus parents) and well within a single PostgreSQL instance with proper indexes.

## 5. Design specification

**Concept:** "Three schools, one campus." The visitor chooses a path first; the site then speaks to that person.

**Colour tokens**
| Name | Hex | Use |
|---|---|---|
| Pine | #12372A | Primary, hero, headings |
| Ink | #0E1B17 | Body text |
| Mist | #EEF2F0 | Page background |
| Saffron | #F2A230 | Primary action buttons, urgent tags |
| Sky | #7FB3D5 | Secondary tags |
| Line | #CFD9D4 | Borders |

Contrast: Ink on Mist and Pine on white pass WCAG AA; Ink on Saffron passes for button text.

**Type:** Bricolage Grotesque (headings, 500/700/800) and Source Sans 3 (body, 400/600). Scale: 64 / 38 / 26 / 20 / 17 / 15 px, line height 1.1 for headings and 1.55 for body. Devanagari fallback: Noto Sans Devanagari.

**Layout:** 12-column grid, max width 1120px, 20px gutters. Breakpoints: 760px and 1120px. Left-aligned text, line length under 70 characters.

**Home page order**
1. Header: logo, 4 nav items, Apply button (sticky)
2. Hero with school selector tabs, headline, one call to action, three key figures
3. Audience paths (6 tiles)
4. Notices and events with filters + Admissions panel
5. Sports directory
6. Achievements (NDA, IIT/NEET, medals)
7. Leadership message and parent voices (with Hindi)
8. Gallery strip and social feed
9. Footer with contact, map, quick links, language switch

**Components:** button (primary, outline), tab selector, filter chips, notice row with category tag, achievement card with share button, sport tile, programme hero, form field with inline errors, album grid.

**Accessibility:** skip link, visible focus ring, tab roles with ARIA, reduced-motion support, alt text required in the CMS, minimum 16px text, 44px touch targets.

**Figma setup (to produce the file):** create frames for Desktop 1440, Tablet 768, Mobile 390; add the colour and text styles above as Figma variables; build the components listed; lay out the home page in the order above using the provided `index.html` as the reference. I cannot generate a Figma file from here, so please recreate it from this spec (about 1 to 2 hours), or import the HTML using a plug-in such as html.to.design.

## 6. Short approach explanation

**Problems found:** outdated and unfinished content, the IIT/NDA offer missing, no clear path for each audience, sports shown as a list, weak admissions flow and nothing built to be shared (see section 1).

**Why this structure:** the school is three programmes serving different parents, so the site opens with that choice. Navigation follows the questions people ask (Which school? How do I apply? What is life like? What are the results? What is new?) instead of the school's departments.

**Supporting 3,000+ students and 400+ staff:** a CDN-cached public site, a PostgreSQL database for structured records, role-based access so each department manages its own section, and a phase-2 OTP-based portal for parents and students. Staff roles map to the 400+ team without sharing logins.

**Managing dynamic content:** every content type (news, notices, events, programmes, sports, faculty, achievements, galleries, admissions) is managed in the CMS with a Draft, Review, Publish workflow, scheduled publishing and expiry dates, so notices disappear when they are over and the home page cannot go stale again.

**Improving digital presence:** one-click share cards and Open Graph tags for every achievement; SEO landing pages for each programme; structured data and Google Business Profile; an Instagram and YouTube feed on the site; and a publishing routine where each medal, result or event produces a web page and a social post together.

## 7. Delivery plan

| Phase | Scope | Time estimate |
|---|---|---|
| 0 | Content audit, sitemap, Figma design, Lighthouse baseline | 2 weeks |
| 1 | Public site, CMS, notices, news, events, programmes, sports, achievements, galleries, SEO | 6 to 8 weeks |
| 2 | Admissions funnel with tracking, WhatsApp and SMS alerts, bilingual | 3 weeks |
| 3 | Parent/student portal, ERP integration, alumni | 6 to 8 weeks |

**Success measures:** admission enquiries per month, mobile Lighthouse score, organic search traffic, social shares per achievement, time for staff to publish a notice (target under 3 minutes).

## 8. Assumptions and next steps
- The school's address, fee structure, results data and photos are placeholders in the sample page and must come from the client.
- Check whether the school already has an ERP, SMS/WhatsApp provider and social media accounts.
- Confirm consent rules for publishing student names and photos.
