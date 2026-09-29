# P15 · Multi-site Content — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/product/multi-site-content` · Phase: P1 — gated expansion
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Reuse content without losing local context.**
- Alternative headline: **Share the facts. Keep the local context.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Multi-site Content | {{brandName}}**
- Meta description draft: Organize shared information and market-specific differences across sites, languages and publishing responsibilities.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P1 page: verify an independent content reuse and review capability before separating this from the combined Strapi page.

## Block order

SharedHeader → P15-B01 → P15-B02 → P15-B03 → P15-B04 → P15-B05 → P15-B06 → P15-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P15-B01 | PageIntro | Reuse content without losing local context. | `hero` |
| 02 | P15-B02 | FeatureGrid | Decide what should be shared and what should vary. | `model` |
| 03 | P15-B03 | ComparisonTable | Give each content layer a clear role. | `layers` |
| 04 | P15-B04 | Workflow | Follow one shared change across its destinations. | `change` |
| 05 | P15-B05 | MediaText | Keep intentional differences visible. | `difference` |
| 06 | P15-B06 | FAQ | Questions about shared content | `faq` |
| 07 | P15-B07 | ConversionCTA | Map one shared content update with us. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P15-B01 · PageIntro · Reuse content without losing local context.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Reuse content without losing local context.
- Body: Organize shared information and market-specific differences across sites, languages and publishing responsibilities.

**Actions**

- **Book a Demo** → `/contact`
- **Explore the Multi-site Scenario** → `/solutions/strapi`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P15-B02 · FeatureGrid · Decide what should be shared and what should vary.

**Anchor:** `model`

**Public copy**

- Heading (H2): Decide what should be shared and what should vary.
- Body: Content reuse works best when the boundaries are explicit.

| Item / question / label | Copy |
| --- | --- |
| Shared content | Core product facts and approved reference material. |
| Local content | Market-specific wording, conditions and context. |
| Review ownership | The people responsible for approving each kind of change. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P15-B03 · ComparisonTable · Give each content layer a clear role.

**Anchor:** `layers`

**Public copy**

- Heading (H2): Give each content layer a clear role.
- Body: Use this conceptual model to discuss the structure your team needs.

| Item / question / label | Copy |
| --- | --- |
| Brand | The shared identity and reference content. |
| Site | The destination where content is presented. |
| Language or market | The wording and applicable local conditions. |
| Release | The approved set of changes intended for publication. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Content gate / behavior: Conceptual model; verify supported hierarchy and release capabilities before publishing as product behavior.
- Mobile: preserve reading order; keep all essential text available without hover.

## P15-B04 · Workflow · Follow one shared change across its destinations.

**Anchor:** `change`

**Public copy**

- Heading (H2): Follow one shared change across its destinations.
- Body: Determine which sites are affected before distributing a revision.

| Item / question / label | Copy |
| --- | --- |
| Identify | Find the source change and applicable destinations. |
| Adapt | Prepare local wording where needed. |
| Review | Confirm content with each responsible team. |
| Publish | Use the agreed publishing process. |
| Inspect | Check the resulting content for unintended differences. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P15-B05 · MediaText · Keep intentional differences visible.

**Anchor:** `difference`

**Public copy**

- Heading (H2): Keep intentional differences visible.
- Body: A local disclaimer or market-specific product condition should not disappear because another site changed. Review the meaning of a difference before deciding to remove it.

**Actions**

- **Explore Product Facts** → `/product#product-knowledge`

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Mobile: preserve reading order; keep all essential text available without hover.

## P15-B06 · FAQ · Questions about shared content

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions about shared content
- Body: This page describes content capabilities. Organization-wide rollout is covered in the solution discussion.

| Item / question / label | Copy |
| --- | --- |
| Does reuse mean all pages are identical? | No. Shared facts and local context serve different purposes. |
| Can every site publish at once? | Publishing scope and timing depend on the supported workflow and approval rules. Simultaneous publishing is not assumed. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P15-B07 · ConversionCTA · Map one shared content update with us.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Map one shared content update with us.
- Body: Use a real change to identify the sites, languages and reviewers involved.

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
