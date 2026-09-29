# Shared Blocks & UI Copy — English v1.0

Updated: 2026-09-28 · Applies to P01–P23.

These specifications cover the shared shell and recurring interface copy. They do not add pages to the release inventory. Public labels are English; implementation notes stay out of the rendered website.

## G01 · SharedHeader

**Purpose:** help visitors choose a product, scenario or platform explanation, then request a demo.

**Layout:** brand identity on the left; navigation in the middle; one primary CTA on the right. On mobile, show the brand and a menu button. The expanded menu includes the full navigation and primary CTA. Do not make a navigation group depend on hover alone.

| Element | English copy | Destination / behavior |
| --- | --- | --- |
| Brand | `{{brandName}}` | `/`; use the approved brand asset |
| Brand link accessible label | `{{brandName}} home` | Home link |
| Product | Product | Opens the Product menu; not a fake `/product-menu` page |
| Product item | Overview | `/product` |
| Product item | SEO & GEO | `/product/seo-geo` |
| Solutions | Solutions | Opens the Solutions menu |
| Solution item | Shopify | `/solutions/shopify` |
| Solution item | Strapi & Multi-site | `/solutions/strapi` |
| Platform | Platform | Opens the Platform menu |
| Platform item | How It Works | `/platform/how-it-works` |
| Platform item | Integrations | `/platform/integrations` |
| Platform item | Security & Governance | `/platform/security` |
| Primary CTA | Book a Demo | `/contact` |
| Open menu label | Open Menu | Opens mobile navigation |
| Close menu label | Close Menu | Closes mobile navigation and returns focus to its trigger |
| Skip link | Skip to Content | `#main-content`, supplied by the page layout |

First release has no Resources, Pricing, Sign in, Install App or Start Free entry. Add each only after its corresponding page or external flow is available. Navigation groups with no landing page use an actual menu trigger rather than `href="#"`.

**Contact-page variant:** omit the repeated header CTA or use **Request a Demo** → `#demo-request`. It must not reload `/contact` while a visitor is filling in the form.

**Future menu labels:** Product Knowledge, SiteOps, AI Agents, Multi-site Content, Multi-brand & Multi-site, Agencies, Developers / API, Blog, Guides, Documentation, Changelog and Pricing. Each label is activated only with its approved destination from the page inventory.

**CMS direction:** Header plus site navigation data; evaluate fragment reuse through FragmentRef. Confirm actual menu-trigger semantics, CTA slots, mobile interactions and active-brand rendering before implementation.

## G02 · SharedFooter

**Layout:** short brand statement plus three navigation columns; legal links and the copyright line below. On mobile, stack the groups with clear headings. Do not hide essential links behind hover.

**Brand statement:**

> Keep product information, content and site operations connected.

| Group | Link copy | Destination |
| --- | --- | --- |
| Product | Overview | `/product` |
| Product | SEO & GEO | `/product/seo-geo` |
| Solutions | Shopify | `/solutions/shopify` |
| Solutions | Strapi & Multi-site | `/solutions/strapi` |
| Platform | How It Works | `/platform/how-it-works` |
| Platform | Integrations | `/platform/integrations` |
| Platform | Security & Governance | `/platform/security` |
| Contact | Contact Us | `/contact` |
| Legal | Privacy Policy | `/privacy` |
| Legal | Terms of Use | `/terms` |

**Copyright template:** `© {{currentYear}} {{legalEntityName}}.`

**Optional verified email:** `{{contactEmail}}`. Render as an email link only after verification. Social icons require real accounts; otherwise omit them. Do not display a newsletter form until subscription handling and consent requirements are confirmed.

**CMS direction:** Footer plus shared navigation and site identity. Use the verified legal entity, not the unconfirmed product name, in the copyright line.

## G03 · Shared CTA vocabulary

Use one primary marketing action consistently. Page-specific secondary actions describe the destination clearly.

| Role | Default English copy | Destination / use |
| --- | --- | --- |
| Marketing primary | Book a Demo | `/contact` |
| Form section and submission | Request a Demo | Contact form / actual submit action |
| Product entry | Explore the Platform | `/product` |
| Workflow entry | See How It Works | `/platform/how-it-works` |
| Integration inquiry | Discuss an Integration | `/contact` |
| Governance inquiry | Discuss Governance | `/contact` |
| Commercial inquiry | Discuss Pricing | `/contact` |
| Resource card | Read Article | Actual published article URL |
| Guide card | Read the Guide | Actual published guide URL |
| General help | Contact Us | `/contact` |

**Primary CTA alternative:** **See the Platform in Action** → `/contact`. Use only if the sales flow provides an actual product demonstration. Do not mix this alternative randomly with Book a Demo.

**Form CTA alternative:** **Send Demo Request**. It makes the submission explicit but is less natural than Request a Demo. The default remains Request a Demo.

## G04 · Shared UI string proposals

The keys below are proposed content identifiers, not verified existing TypeScript keys. Reuse a semantically equivalent key in `设置 → 界面文案包` when available; add missing keys through the normal UI-string model if implementation is later authorized. Do not duplicate global UI copy across page block records.

| Proposed key | English value | Context |
| --- | --- | --- |
| `demoCta` | Book a Demo | Main marketing CTA |
| `demoSubmit` | Request a Demo | Demo form button |
| `formSubmitting` | Sending your request… | During actual submission |
| `formSuccessTitle` | Your request has been received. | Confirmed server success |
| `formSuccessBody` | We’ll review the details you shared and contact you using the email provided. | Success explanation |
| `formValidationSummary` | Please check the highlighted fields. | Invalid inputs |
| `formFailure` | We couldn’t send your request. Your details are still here. Please try again. | Failed submission |
| `retry` | Try Again | Retry a failed action |
| `search` | Search | Search submit button |
| `clearFilters` | Clear Filters | Reset applied filters |
| `previous` | Previous | Pagination |
| `next` | Next | Pagination |
| `loadMore` | Load More | Only where actual incremental loading exists |
| `loading` | Loading… | Pending retrieval |
| `openMenu` | Open Menu | Mobile navigation |
| `closeMenu` | Close Menu | Mobile navigation |
| `skipToContent` | Skip to Content | Skip link |
| `illustrativeExample` | Illustrative example | Fictional scenario / sample record |
| `conceptualWorkflow` | Conceptual workflow | Proposed or illustrative flow |
| `available` | Available | Verified availability only |
| `beta` | Beta | Verified limited-access status |
| `inDevelopment` | In development | Verified development state |
| `planned` | Planned | Explicitly approved plan |

The Contact page owns its field-specific labels and errors. The Resources pages own their topic lists and no-result messages. These can become shared only when multiple real contexts use the same meaning.

## G05 · Heading and media rules

- One H1 per page, from the first block. Later section headings use H2; card headings use H3 where they introduce sections.
- Each supplied heading is one content value. Do not split it into separate styled words that editors cannot change naturally.
- Existing schema heading fields differ in type. Check the specific field definition before storing HTML; do not infer rich-text support from another block.
- The concept labels above must be visible beside illustrative media; an internal note alone is not enough.
- Use readable task details rather than illegible dashboard screenshots. Mobile artwork should preserve the evidence relevant to the adjacent copy.
- Do not invent product metric cards or add irrelevant animation to compensate for missing evidence.

## G06 · Locale and behavior rules

- This deliverable is English-only. Paths use the current planning convention for English; verify the actual language-routing policy before implementation.
- `main-content` belongs to the shared page layout. Page-specific anchors are listed in the page documents and must be implemented before links are activated.
- No CTA uses a bare `#`. `action:*` references in page documents describe interactions, never public URLs.
- On a page that is not yet released, keep inbound public navigation and CTAs hidden or use the first-release fallback documented in the page inventory.
- Keep analytics context limited to page, block and action identifiers. Do not copy names, email addresses or free-text form content into analytics events.
