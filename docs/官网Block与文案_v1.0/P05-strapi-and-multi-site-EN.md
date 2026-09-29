# P05 · Strapi and Multi-site — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/solutions/strapi` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Keep product facts connected across your sites.**
- Alternative headline: **Give every site a clear connection to its product facts.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Strapi and Multi-site | {{brandName}}**
- Meta description draft: Work from your existing Strapi content structure to understand relationships between brands, sites, languages and channels.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: Verify the capability statements and supporting media against the actual product scope before publication.

## Block order

SharedHeader → P05-B01 → P05-B02 → P05-B03 → P05-B04 → P05-B05 → P05-B06 → P05-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P05-B01 | PageIntro | Keep product facts connected across your sites. | `hero` |
| 02 | P05-B02 | FeatureGrid | More sites make clear ownership more important. | `challenges` |
| 03 | P05-B03 | MediaText | Start with the way you already use Strapi. | `strapi` |
| 04 | P05-B04 | Workflow | Confirm the fact before changing the sites. | `facts` |
| 05 | P05-B05 | FeatureGrid | Make the boundaries between sites explicit. | `multi-site` |
| 06 | P05-B06 | FAQ | Planning a Strapi connection | `faq` |
| 07 | P05-B07 | ConversionCTA | Start with one cross-site content problem. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P05-B01 · PageIntro · Keep product facts connected across your sites.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Keep product facts connected across your sites.
- Body: Work from your existing Strapi content structure to understand relationships between brands, sites, languages and channels.

**Actions**

- **Book a Demo** → `/contact`
- **View Integration Scope** → `/platform/integrations`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P05-B02 · FeatureGrid · More sites make clear ownership more important.

**Anchor:** `challenges`

**Public copy**

- Heading (H2): More sites make clear ownership more important.
- Body: Separate shared facts from local expression so teams know what should stay consistent and what can vary.

| Item / question / label | Copy |
| --- | --- |
| Shared facts | Product names, specifications and core descriptions need a common reference. |
| Local context | Languages, applicable conditions and market-specific content need a defined scope. |
| Publishing responsibility | Changes and reviews need to belong to a specific site and team. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P05-B03 · MediaText · Start with the way you already use Strapi.

**Anchor:** `strapi`

**Public copy**

- Heading (H2): Start with the way you already use Strapi.
- Body: Review your content models, editing responsibilities and publishing flow before deciding what to connect, inspect or synchronize.

| Item / question / label | Copy |
| --- | --- |
| Content sources | Identify authoritative information and the role of your CMS. |
| Team responsibilities | Distinguish editing, review and publishing. |
| Connection scope | Assess the relevant version, interfaces and deployment approach. |

**Actions**

- **Discuss Strapi Integration** → `/contact`

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Mobile: preserve reading order; keep all essential text available without hover.

## P05-B04 · Workflow · Confirm the fact before changing the sites.

**Anchor:** `facts`

**Public copy**

- Heading (H2): Confirm the fact before changing the sites.
- Body: Use an identified source to distinguish information that should be shared from differences that belong to a local market.

| Item / question / label | Copy |
| --- | --- |
| Identify the source | Record the product information and its applicable conditions. |
| Find differences | Locate descriptions that need review across sites. |
| Review revisions | Confirm the facts and local wording with the appropriate team. |
| Publish and inspect | Use the agreed process, then check the resulting pages. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P05-B05 · FeatureGrid · Make the boundaries between sites explicit.

**Anchor:** `multi-site`

**Public copy**

- Heading (H2): Make the boundaries between sites explicit.
- Body: Treat brand, site and language relationships as part of the content workflow.

| Item / question / label | Copy |
| --- | --- |
| Brands and sites | Identify where a piece of content belongs. |
| Languages and markets | Preserve valid local conditions instead of copying blindly. |
| Permissions and review | Confirm who may view, change and approve content. |

**Actions**

- **Explore Governance** → `/platform/security`

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: Verify actual isolation and role controls. Existing projects do not prove a complete multi-tenant SaaS.
- Mobile: preserve reading order; keep all essential text available without hover.

## P05-B06 · FAQ · Planning a Strapi connection

**Anchor:** `faq`

**Public copy**

- Heading (H2): Planning a Strapi connection
- Body: A current site map and one concrete content problem are useful starting points.

| Item / question / label | Copy |
| --- | --- |
| Do we need to replace Strapi? | The discussion starts with your existing content models and publishing workflow. Any required changes depend on the agreed scope. |
| Will every site synchronize automatically? | No automatic cross-site publishing is assumed. Objects, direction, permissions and review steps must be confirmed. |
| What should we bring to a demo? | A brand and site map, one product content example and a recurring inconsistency your team needs to manage. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P05-B07 · ConversionCTA · Start with one cross-site content problem.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Start with one cross-site content problem.
- Body: Tell us about your brands, sites and languages. We’ll discuss a workflow that matches your current structure.

**Actions**

- **Book a Demo** → `/contact`

**Design and handoff notes — not public copy**

- Layout: Short closing section with H2, one paragraph and a primary CTA; no forced screen height.
- CMS fit: HeroSimple can supply content fields; H2 semantics and compact layout require adaptation.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## Page-specific review

- Check every linked route and anchor before release. P1/P2 links stay hidden until the destination is published.
- Replace evidence illustrations with approved assets or keep an explicit “Illustrative example” / “Conceptual workflow” caption.
- Keep template tokens and internal notes out of public output. Hide a conditional block when its required content is unavailable.
- Route-level titles and body claims need product-owner review. Copy coverage is not runtime or legal approval.
