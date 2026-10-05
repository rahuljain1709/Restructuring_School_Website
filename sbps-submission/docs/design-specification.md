# Social Baluni Public School — Website Restructuring Design Specification

## 1. Product vision

Transform the current school website from a largely information-first site into a **digital school platform** that helps four audiences complete tasks quickly:

- Prospective parents/students: understand the school, programs, campus life and admissions, then enquire/apply.
- Existing parents/students: find notices, calendar, documents, achievements and important updates quickly.
- Staff/faculty: publish approved news, events, achievements and notices without developer support.
- Alumni/visitors: discover stories, events, sports and the institution's ecosystem.

The assignment describes an ecosystem of 3,000+ students, 400+ staff, academics, administration, sports, achievements and parent/student engagement; the design therefore treats content management and information architecture as first-class requirements.

## 2. Problems observed in the current website

Based on the live homepage and sampled inner pages:

1. **Too many competing sections on one page.** The homepage moves through welcome copy, news/events, Baluni Group offerings, integrated programmes, sports, facilities, leadership messages, admission CTAs, enquiry, resources, activities and parent testimonials. This makes the page comprehensive but weakens task-oriented navigation.
2. **Important programs are presented as content blocks rather than product-like journeys.** IIT/JEE, NEET, NDA and related programs deserve dedicated landing pages with eligibility, outcomes, schedule, faculty/coaching model and enquiry CTA.
3. **News/resources have weak content structure.** The current sample page lists documents as generic posts, including dated entries and labels such as “Free Structure,” which reduces clarity and credibility.
4. **Sports has strong content but limited digital storytelling.** The existing sports page lists many sports and explains benefits, but teams, coaches, fixtures, achievements and galleries are not presented as a connected sports experience.
5. **Admissions is a funnel opportunity.** Admission criteria contains useful process and document information; the redesign should turn that into a guided application journey with status, FAQs, eligibility and enquiry/application actions.
6. **Role-based information is not prominent enough.** Parents, students, staff, prospective families and alumni have different jobs-to-be-done and should not have to browse the same content path.
7. **Content freshness should be operationalized.** The site needs an editorial workflow, publishing dates, expiry dates for notices, featured content, approval states and scheduled publishing.

## 3. New information architecture

### Primary navigation

**About** | **Academics** | **Programs** | **Campus Life** | **Sports** | **Admissions** | **News & Events** | **Resources**

Persistent actions: **Enquire**, **Apply Now**, **Parent/Student Login**.

### Audience shortcuts

A compact "I am a…" switcher:

**Parent** / **Student** / **Prospective Family** / **Staff** / **Alumni**

The switcher changes the quick links and recommended content, while public SEO URLs remain stable.

## 4. Landing page structure

1. Utility bar: contact, school calendar, emergency/important notice.
2. Header + primary navigation + Apply Now CTA.
3. **Hero:** “Learn. Lead. Compete. Belong.” with two CTAs: Explore SBPS / Start Admission Enquiry.
4. **Choose your path:** Schooling, IIT/Engineering, NDA/Defence, Boarding/Day-boarding (only where applicable to the final approved offering).
5. **Why SBPS:** academic foundation, competitive preparation, sports and holistic development.
6. **Programs:** dynamic cards for JEE, NEET, NDA, academics, etc.
7. **Sports & student life:** featured sports, coaches, competitions, achievements.
8. **Latest from campus:** news, notices and events with filters.
9. **Results & achievements:** board results, competition wins, sports achievements.
10. **Admissions:** dates, eligibility, steps and a 3-step enquiry CTA.
11. **Campus gallery:** image/video stories with lazy loading.
12. **Voices of SBPS:** parent/alumni/student stories.
13. **Visit & contact:** address, timings, map, enquiry and callback.
14. Footer: sitemap, policies, social links, contact and document centre.

## 5. Dynamic content model

Every content type should have:

- title
- slug
- summary
- rich content
- cover image/video
- category/tags
- audience
- publish_at
- expire_at (where relevant)
- author
- SEO title/description
- status: draft / review / scheduled / published / archived
- audit information

This allows administrators to update the website without code changes.

## 6. Accessibility and UX

- WCAG-oriented semantic HTML and keyboard navigation.
- Visible focus states and minimum touch target sizes.
- Alt text required for meaningful images.
- Captions/transcripts for important videos.
- Reduced-motion support.
- Hindi/English-ready content architecture.
- Search with useful empty states.
- Mobile-first layouts and sticky admission CTA on small screens.

## 7. SEO

- Server-rendered public pages.
- Clean slugs and canonical URLs.
- XML sitemap and robots.txt.
- Schema.org structured data for School, Event, Article, BreadcrumbList and FAQ where appropriate.
- Open Graph/Twitter metadata for shareable stories.
- Automated metadata validation in CMS.
- Core Web Vitals budget for LCP/INP/CLS.

## 8. Figma sample landing-page specification

**Desktop frame:** 1440 × 5000 px
**Mobile frame:** 390 × 844 px
**Grid:** 12 columns desktop; 4 columns mobile
**Spacing:** 8px base scale
**Typography:** Inter/Manrope-style modern sans; use school brand typeface if supplied
**Visual direction:** premium education + defence confidence; navy/white foundation with one warm accent and restrained gradients.

### Core components

- Header / MegaNav
- Hero / CTA group
- ProgramCard
- AchievementCard
- SportsCard
- NewsCard
- EventCard
- AdmissionStepper
- TestimonialCard
- GalleryMasonry
- DocumentCard
- Footer

### Design principle

Use photography to show evidence of school life; use typography, statistics and cards to explain the system. Avoid decorative blocks that do not lead to an action.
