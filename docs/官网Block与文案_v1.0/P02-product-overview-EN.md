# P02 · Product Overview — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/product` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Bring scattered operations issues into one workflow.**
- Alternative headline: **Give every operations issue a clear next step.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Product Overview | {{brandName}}**
- Meta description draft: Explore how product facts, content checks, site health and AI-assisted tasks can work together around a specific issue.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: Verify the capability statements and supporting media against the actual product scope before publication.

## Block order

SharedHeader → P02-B01 → P02-B02 → P02-B03 → P02-B04 → P02-B05 → P02-B06 → P02-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P02-B01 | PageIntro | Bring scattered operations issues into one workflow. | `hero` |
| 02 | P02-B02 | FeatureGrid | Four capabilities. A shared operating context. | `pillars` |
| 03 | P02-B03 | MediaText | Start with a product fact everyone can trace. | `product-knowledge` |
| 04 | P02-B04 | MediaText | Make a site issue easier to investigate. | `siteops` |
| 05 | P02-B05 | EvidencePanel | One conflicting specification. One traceable review. | `example` |
| 06 | P02-B06 | FeatureGrid | Connect by channel. Work within a defined scope. | `channels` |
| 07 | P02-B07 | ConversionCTA | Find the right starting point for your team. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P02-B01 · PageIntro · Bring scattered operations issues into one workflow.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Bring scattered operations issues into one workflow.
- Body: Explore how product facts, content checks, site health and AI-assisted tasks can work together around a specific issue.

**Actions**

- **Book a Demo** → `/contact`
- **See the Workflow** → `/platform/how-it-works`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P02-B02 · FeatureGrid · Four capabilities. A shared operating context.

**Anchor:** `pillars`

**Public copy**

- Heading (H2): Four capabilities. A shared operating context.
- Body: Find the issue, check the facts, review the next action and inspect the result.

| Item / question / label | Copy |
| --- | --- |
| SEO & GEO | Inspect page information, content consistency and technical search issues. |
| Product Knowledge | Connect content decisions to traceable product facts. |
| SiteOps | Investigate site issues and the objects they affect. |
| AI Agents | Organize analysis, recommendations and approved actions into tasks. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: Display verified availability for each pillar; this hierarchy does not establish current availability.
- Mobile: preserve reading order; keep all essential text available without hover.

## P02-B03 · MediaText · Start with a product fact everyone can trace.

**Anchor:** `product-knowledge`

**Public copy**

- Heading (H2): Start with a product fact everyone can trace.
- Body: Keep the source behind a specification or description visible. Before changing channel content, separate a factual conflict from a difference in wording.

| Item / question / label | Copy |
| --- | --- |
| Trace the source | Identify where a product statement comes from. |
| Understand the difference | Distinguish inconsistent facts from valid local variations. |
| Review the change | Bring the proposed wording to the people who know the product. |

**Actions**

- **Discuss Product Content** → `/contact`

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Mobile: preserve reading order; keep all essential text available without hover.

## P02-B04 · MediaText · Make a site issue easier to investigate.

**Anchor:** `siteops`

**Public copy**

- Heading (H2): Make a site issue easier to investigate.
- Body: Connect an observation to an affected page, a check and a follow-up action. Revisit the same check after a change to understand what happened.

| Item / question / label | Copy |
| --- | --- |
| Availability | Review whether a page can be reached. |
| Links | Inspect paths that no longer lead where expected. |
| Tracking signals | Investigate anomalies within the observation sources in scope. |

**Actions**

- **See How It Works** → `/platform/how-it-works`

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Content gate / behavior: Tracking and performance scope depends on verified data sources.
- Mobile: preserve reading order; keep all essential text available without hover.

## P02-B05 · EvidencePanel · One conflicting specification. One traceable review.

**Anchor:** `example`

**Public copy**

- Heading (H2): One conflicting specification. One traceable review.
- Body: Illustrative workflow: a product page describes a specification differently from its source record. The team checks the conditions, reviews a revision and verifies the published content.

| Item / question / label | Copy |
| --- | --- |
| Issue | The product page and source record disagree. |
| Recommendation | Use the confirmed specification and include its applicable conditions. |
| Decision | The product owner reviews the proposed wording. |
| Verification | Compare the published page with the approved content. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: A readable task record or before/after comparison beside explanatory text. Status always has a text label.
- CMS fit: Proposed evidence / task panel, not a registered CMS type.
- Media / data: All examples in this document are illustrative, not customer results or proof of implementation.
- Content gate / behavior: Conceptual example, not a customer result or evidence that every step is implemented.
- Mobile: preserve reading order; keep all essential text available without hover.

## P02-B06 · FeatureGrid · Connect by channel. Work within a defined scope.

**Anchor:** `channels`

**Public copy**

- Heading (H2): Connect by channel. Work within a defined scope.
- Body: Start with the platforms you use, the data you need and the actions your team permits.

| Item / question / label | Copy |
| --- | --- |
| Shopify | Discuss store checks and product content. |
| Strapi | Discuss existing content models and publishing workflows. |
| Multiple sites | Discuss boundaries between brands, markets and languages. |

**Actions**

- **View Integrations** → `/platform/integrations`
- **Review Governance** → `/platform/security`

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P02-B07 · ConversionCTA · Find the right starting point for your team.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Find the right starting point for your team.
- Body: Bring a store, site or content problem to the conversation. We’ll discuss the capabilities and connection scope that fit.

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
