# Database Model (MVP)

## Core tables

### users
id, email, name, status, created_at, updated_at

### roles
id, name

### user_roles
user_id, role_id

### content
id, type, title, slug, summary, body, status, author_id, publish_at, expire_at, seo_title, seo_description, created_at, updated_at

### content_revisions
id, content_id, version, body_snapshot, edited_by, created_at

### media
id, storage_key, mime_type, width, height, alt_text, size_bytes, created_by, created_at

### content_media
content_id, media_id, sort_order

### categories
id, type, name, slug

### content_categories
content_id, category_id

### events
id, content_id, start_at, end_at, location, registration_url, capacity

### programs
id, content_id, program_type, age_range, eligibility, duration, enquiry_cta

### sports
id, name, description, coach_profile_id, featured

### achievements
id, title, description, category, achievement_date, student_label, sport_or_program_id, media_id

### faculty
id, name, designation, department, biography, photo_media_id, featured

### enquiries
id, name, email, phone, class_interest, program_interest, message, source, status, created_at

### documents
id, title, category, file_media_id, publish_at, expire_at, visible

### audit_logs
id, actor_id, entity_type, entity_id, action, metadata_json, created_at

## Important indexes

- content(slug, status)
- content(type, status, publish_at)
- content(expire_at)
- events(start_at)
- achievements(achievement_date)
- enquiries(created_at, status)
- documents(category, visible)

## Public API examples

GET /api/v1/content/news?cursor=...
GET /api/v1/events?from=...&to=...
GET /api/v1/programs
GET /api/v1/sports
GET /api/v1/achievements?category=sports
GET /api/v1/documents?category=mandatory
POST /api/v1/enquiries

## Admin API examples

POST /api/v1/admin/content
PATCH /api/v1/admin/content/:id
POST /api/v1/admin/content/:id/submit-review
POST /api/v1/admin/content/:id/publish
POST /api/v1/admin/media/presign
GET /api/v1/admin/audit-logs
