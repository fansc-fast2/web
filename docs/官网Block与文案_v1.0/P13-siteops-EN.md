# P13 · SiteOps — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/product/siteops` · Phase: P1 — gated expansion
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Keep site issues connected to their impact.**
- Alternative headline: **Give site issues a route from observation to resolution.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **SiteOps | {{brandName}}**
- Meta description draft: See what was observed, which pages or signals are affected and how the result will be checked after a change.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P1 page: verify observation sources, frequency, coverage and an incident-to-recheck example.

## Block order

SharedHeader → P13-B01 → P13-B02 → P13-B03 → P13-B04 → P13-B05 → P13-B06 → P13-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P13-B01 | PageIntro | Keep site issues connected to their impact. | `hero` |
| 02 | P13-B02 | FeatureGrid | Start with signals you can actually observe. | `coverage` |
| 03 | P13-B03 | EvidencePanel | A broken destination needs more than an alert. | `incident` |
| 04 | P13-B04 | Workflow | Keep the follow-up attached to the finding. | `response` |
| 05 | P13-B05 | ComparisonTable | Coverage is specific to the data source. | `boundaries` |
| 06 | P13-B06 | FAQ | Questions about site health | `faq` |
| 07 | P13-B07 | ConversionCTA | Start with a site issue that keeps recurring. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P13-B01 · PageIntro · Keep site issues connected to their impact.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Keep site issues connected to their impact.
- Body: See what was observed, which pages or signals are affected and how the result will be checked after a change.

**Actions**

- **Book a Demo** → `/contact`
- **See the Workflow** → `/platform/how-it-works`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P13-B02 · FeatureGrid · Start with signals you can actually observe.

**Anchor:** `coverage`

**Public copy**

- Heading (H2): Start with signals you can actually observe.
- Body: Build an inspection scope around available data rather than assuming every part of a site is visible.

| Item / question / label | Copy |
| --- | --- |
| Page availability | Inspect whether the relevant pages respond as expected. |
| Link paths | Review broken or unexpected navigation paths. |
| Performance observations | Understand the measurements and conditions behind an observed issue. |
| Tracking signals | Inspect anomalies within the tracking sources explicitly in scope. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: Only retain supported observations. Checkout, payment, app, webhook and order health are not assumed.
- Mobile: preserve reading order; keep all essential text available without hover.

## P13-B03 · EvidencePanel · A broken destination needs more than an alert.

**Anchor:** `incident`

**Public copy**

- Heading (H2): A broken destination needs more than an alert.
- Body: Illustrative example: a campaign page links to a product URL that no longer responds as expected.

| Item / question / label | Copy |
| --- | --- |
| Observation | The destination does not return the expected page. |
| Impact | Visitors from the campaign cannot reach the intended product. |
| Proposed action | Review the destination and choose the correct link or redirect. |
| Verification | Check the original visitor path after the change. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: A readable task record or before/after comparison beside explanatory text. Status always has a text label.
- CMS fit: Proposed evidence / task panel, not a registered CMS type.
- Media / data: All examples in this document are illustrative, not customer results or proof of implementation.
- Mobile: preserve reading order; keep all essential text available without hover.

## P13-B04 · Workflow · Keep the follow-up attached to the finding.

**Anchor:** `response`

**Public copy**

- Heading (H2): Keep the follow-up attached to the finding.
- Body: Make the path from observation to outcome easy for the next person to understand.

| Item / question / label | Copy |
| --- | --- |
| Locate | Identify the affected path and evidence. |
| Assess | Understand what visitors or teams may encounter. |
| Review | Choose a supported action and responsible owner. |
| Verify | Repeat the relevant observation and record the result. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P13-B05 · ComparisonTable · Coverage is specific to the data source.

**Anchor:** `boundaries`

**Public copy**

- Heading (H2): Coverage is specific to the data source.
- Body: A visible page issue does not automatically provide insight into every application or transaction behind it.

| Item / question / label | Copy |
| --- | --- |
| Public pages | Discuss what can be observed from the visitor-facing path. |
| Connected signals | Confirm the additional data and access required. |
| Business transactions | Assess checkout, payment or order workflows separately before claiming coverage. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Mobile: preserve reading order; keep all essential text available without hover.

## P13-B06 · FAQ · Questions about site health

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions about site health
- Body: Confirm frequency, scope and evidence for the checks you need.

| Item / question / label | Copy |
| --- | --- |
| Is this a guarantee of uptime? | No uptime guarantee is made here. Available observations and service commitments must be confirmed separately. |
| Will an alert identify the root cause? | An observation may identify an affected path or signal without proving the underlying cause. Further investigation may be needed. |
| Does this monitor checkout and payments? | That scope is not assumed. It requires a separate assessment of access and observable data. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P13-B07 · ConversionCTA · Start with a site issue that keeps recurring.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Start with a site issue that keeps recurring.
- Body: Describe the affected page or visitor path and the evidence you already have.

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
