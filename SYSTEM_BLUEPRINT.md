# System Blueprint

## Phase 1 Summary From UI Reference

### Pages clearly visible from the reference
1. `Home / Landing Page`
   Public-facing entry page with hero, featured plans, insurance categories, trust reasons, partner logos, testimonials, FAQ, and final CTA.

### Supporting pages designed for real usability
The reference only shows one public page. To avoid shipping a static mockup, the implementation adds supporting product pages that stay within the same visual language:

1. `Plans Directory`
   Browse all plans, search, filter by insurance type, sort, compare, and start a quote request.
2. `Plan Detail`
   Review benefits, eligibility, pricing summary, and request consultation for a selected plan.
3. `Quote Center`
   Manage submitted quote requests, edit contact details, review compare list, and delete requests.

### Page classification
- `Main page`: Home
- `Secondary pages`: Plans Directory, Plan Detail, Quote Center
- `Admin pages`: none visible in the reference
- `User dashboard`: none visible in the reference
- `Auth pages`: none visible in the reference

### Reusable components extracted from the reference
- Header / top navigation
- Footer
- Section header
- Hero media card
- Featured plan cards
- Insurance category cards
- Trust cards
- Partner strip
- Testimonial cards
- FAQ accordion
- CTA band
- Filter chips and search bar
- Compare summary panel
- Request form modal
- Empty, loading, and error states

### Core data model
- `plans`
  id, slug, name, category, provider, badge, pricing, coverage, rating, benefits, eligibility, featured
- `quoteRequests`
  id, planId, fullName, email, phone, ageRange, contactPreference, coverageGoal, note, status, createdAt
- `faqs`
- `testimonials`
- `partners`
- `trustPoints`

### Main user flows
1. Browse landing page and jump to featured plans
2. Open plans directory and filter/search suitable plans
3. Compare shortlisted plans
4. Open a plan detail page
5. Submit quote request form with validation
6. Review, edit, or delete submitted requests in Quote Center

### State and interaction requirements
- Search and filters
- Compare list state
- Modal open / close state
- Form validation and submission feedback
- Local persistence for requests and compare list
- Loading, empty, and error states on each data surface
