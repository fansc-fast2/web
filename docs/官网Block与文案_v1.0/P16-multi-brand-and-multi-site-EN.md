# P16 · Multi-brand and Multi-site — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/solutions/multi-site` · Phase: P1 — gated expansion
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Coordinate content across brands, sites and markets.**
- Alternative headline: **A shared operating picture for teams across brands and markets.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Multi-brand and Multi-site | {{brandName}}**
- Meta description draft: Build a clearer view of shared product information, local requirements and the people responsible for each destination.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P1 page: publish separately only with a distinct buyer story and substantiated multi-brand example.

## Block order

SharedHeader → P16-B01 → P16-B02 → P16-B03 → P16-B04 → P16-B05 → P16-B06 → P16-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P16-B01 | PageIntro | Coordinate content across brands, sites and markets. | `hero` |
| 02 | P16-B02 | FeatureGrid | Give each team the context it needs. | `teams` |
| 03 | P16-B03 | MediaText | Start with an operating map, not a migration promise. | `map` |
| 04 | P16-B04 | Workflow | Pilot one shared workflow before widening the scope. | `pilot` |
| 05 | P16-B05 | ComparisonTable | Governance should match the organization. | `governance` |
| 06 | P16-B06 | FAQ | Questions about a multi-site rollout | `faq` |
| 07 | P16-B07 | ConversionCTA | Bring your brand and site map. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P16-B01 · PageIntro · Coordinate content across brands, sites and markets.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Coordinate content across brands, sites and markets.
- Body: Build a clearer view of shared product information, local requirements and the people responsible for each destination.

**Actions**

- **Book a Demo** → `/contact`
- **See the Strapi Scenario** → `/solutions/strapi`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P16-B02 · FeatureGrid · Give each team the context it needs.

**Anchor:** `teams`

**Public copy**

- Heading (H2): Give each team the context it needs.
- Body: Align responsibilities without assuming every brand should work in exactly the same way.

| Item / question / label | Copy |
| --- | --- |
| Central product teams | Maintain a clear reference for shared product facts. |
| Brand and market teams | Review the information that applies to their audience. |
| Operations and technology teams | Understand the access, publishing and verification requirements. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P16-B03 · MediaText · Start with an operating map, not a migration promise.

**Anchor:** `map`

**Public copy**

- Heading (H2): Start with an operating map, not a migration promise.
- Body: Identify brands, sites, content sources and review owners. Use that map to decide where a shared workflow can help.

| Item / question / label | Copy |
| --- | --- |
| Sources | Which system holds each authoritative record? |
| Destinations | Which sites or markets use the information? |
| Decisions | Who owns the review and publication decision? |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Mobile: preserve reading order; keep all essential text available without hover.

## P16-B04 · Workflow · Pilot one shared workflow before widening the scope.

**Anchor:** `pilot`

**Public copy**

- Heading (H2): Pilot one shared workflow before widening the scope.
- Body: Use an identifiable problem to test the collaboration model.

| Item / question / label | Copy |
| --- | --- |
| Choose a scenario | Select one content difference or recurring site issue. |
| Agree on boundaries | Define the participating brands, sites and permissions. |
| Run the review | Follow the issue through the relevant teams. |
| Inspect the result | Evaluate what worked before expanding. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Content gate / behavior: Pilot availability and deliverables must be confirmed; no rollout timeline promised.
- Mobile: preserve reading order; keep all essential text available without hover.

## P16-B05 · ComparisonTable · Governance should match the organization.

**Anchor:** `governance`

**Public copy**

- Heading (H2): Governance should match the organization.
- Body: Confirm implementation details for the boundaries your teams require.

| Item / question / label | Copy |
| --- | --- |
| Between brands | Data access and content responsibilities. |
| Between markets | Language, product conditions and local review. |
| Between roles | Who may inspect, edit, approve and publish. |
| Across changes | What records and verification are available. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Mobile: preserve reading order; keep all essential text available without hover.

## P16-B06 · FAQ · Questions about a multi-site rollout

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions about a multi-site rollout
- Body: Discuss structure and scope before making implementation assumptions.

| Item / question / label | Copy |
| --- | --- |
| Does this require a single CMS? | That depends on the source systems and supported integrations. Start by mapping the current environment. |
| Is full multi-tenant isolation already included? | Do not assume it from this page. Isolation requirements must be matched to verified implementation scope. |
| Can we start with a single brand? | A focused scenario can help define the discussion. The actual pilot arrangement needs to be confirmed. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P16-B07 · ConversionCTA · Bring your brand and site map.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Bring your brand and site map.
- Body: We’ll discuss a focused workflow, the teams involved and the boundaries that need to hold.

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
