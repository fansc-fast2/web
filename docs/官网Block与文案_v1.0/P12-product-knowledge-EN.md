# P12 · Product Knowledge — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/product/product-knowledge` · Phase: P1 — gated expansion
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Give every channel a reliable product reference.**
- Alternative headline: **Keep every product statement connected to its source.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Product Knowledge | {{brandName}}**
- Meta description draft: Connect product facts, attributes and source records so teams can review content differences with the right context.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P1 page: publish only when a real fact-review workflow and verified scope support the copy.

## Block order

SharedHeader → P12-B01 → P12-B02 → P12-B03 → P12-B04 → P12-B05 → P12-B06 → P12-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P12-B01 | PageIntro | Give every channel a reliable product reference. | `hero` |
| 02 | P12-B02 | FeatureGrid | Consistency starts before the copy is written. | `context` |
| 03 | P12-B03 | Workflow | From source information to reviewed channel content. | `lifecycle` |
| 04 | P12-B04 | EvidencePanel | Not every difference is a contradiction. | `difference` |
| 05 | P12-B05 | MediaText | Keep review close to the people who know the product. | `ownership` |
| 06 | P12-B06 | FAQ | Questions about product facts | `faq` |
| 07 | P12-B07 | ConversionCTA | Bring one product with conflicting descriptions. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P12-B01 · PageIntro · Give every channel a reliable product reference.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Give every channel a reliable product reference.
- Body: Connect product facts, attributes and source records so teams can review content differences with the right context.

**Actions**

- **Book a Demo** → `/contact`
- **See the Multi-site Scenario** → `/solutions/strapi`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P12-B02 · FeatureGrid · Consistency starts before the copy is written.

**Anchor:** `context`

**Public copy**

- Heading (H2): Consistency starts before the copy is written.
- Body: Make it easier to understand where a statement came from and when a difference matters.

| Item / question / label | Copy |
| --- | --- |
| A source behind the statement | Keep the origin of specifications and descriptions in view. |
| Facts with conditions | Include the units, scope or test conditions that make a statement meaningful. |
| Differences worth reviewing | Separate an actual conflict from a valid change in language or market context. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P12-B03 · Workflow · From source information to reviewed channel content.

**Anchor:** `lifecycle`

**Public copy**

- Heading (H2): From source information to reviewed channel content.
- Body: Follow the fact through review and publication without losing its context.

| Item / question / label | Copy |
| --- | --- |
| Collect | Identify source records and their owner. |
| Structure | Describe the facts, attributes and relationships that matter. |
| Review | Resolve conflicts before treating a statement as authoritative. |
| Apply | Use the approved information in the agreed channels. |
| Compare | Inspect published content for relevant differences. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Content gate / behavior: Verify supported sources, structures and channel operations; no automatic universal sync claim.
- Mobile: preserve reading order; keep all essential text available without hover.

## P12-B04 · EvidencePanel · Not every difference is a contradiction.

**Anchor:** `difference`

**Public copy**

- Heading (H2): Not every difference is a contradiction.
- Body: Illustrative example: two markets use different wording for the same specification, while a third page omits a required condition.

| Item / question / label | Copy |
| --- | --- |
| Shared fact | The underlying specification remains the same. |
| Valid variation | Local wording explains the same fact accurately. |
| Review needed | An omitted condition changes what a reader would understand. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: A readable task record or before/after comparison beside explanatory text. Status always has a text label.
- CMS fit: Proposed evidence / task panel, not a registered CMS type.
- Media / data: All examples in this document are illustrative, not customer results or proof of implementation.
- Mobile: preserve reading order; keep all essential text available without hover.

## P12-B05 · MediaText · Keep review close to the people who know the product.

**Anchor:** `ownership`

**Public copy**

- Heading (H2): Keep review close to the people who know the product.
- Body: Content teams need a clear reference. Product owners need a way to confirm facts. Channel owners need to know which changes apply to them.

**Actions**

- **Explore Governance** → `/platform/security`

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Mobile: preserve reading order; keep all essential text available without hover.

## P12-B06 · FAQ · Questions about product facts

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions about product facts
- Body: Start with the information and workflows your team already uses.

| Item / question / label | Copy |
| --- | --- |
| Does this replace a PIM or CMS? | Replacement is not assumed. The connection discussion should establish which system remains authoritative and what the workflow needs to do. |
| Can conflicting sources be resolved automatically? | Do not assume that a conflict has a safe automatic answer. Source priority and human review need to be defined. |
| Will local descriptions all become identical? | The aim is consistent facts, with valid language and market differences preserved. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P12-B07 · ConversionCTA · Bring one product with conflicting descriptions.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Bring one product with conflicting descriptions.
- Body: Use a concrete example to discuss sources, ownership and the channels that need attention.

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
