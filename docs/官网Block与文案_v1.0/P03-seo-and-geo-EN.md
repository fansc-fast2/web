# P03 · SEO and GEO — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/product/seo-geo` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Find search and content issues. Follow through on the fix.**
- Alternative headline: **Take search issues beyond the report.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **SEO and GEO | {{brandName}}**
- Meta description draft: Inspect page information, content consistency and technical issues, then connect findings to reviewable recommendations and follow-up checks.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: Verify the capability statements and supporting media against the actual product scope before publication.

## Block order

SharedHeader → P03-B01 → P03-B02 → P03-B03 → P03-B04 → P03-B05 → P03-B06 → P03-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P03-B01 | PageIntro | Find search and content issues. Follow through on the fix. | `hero` |
| 02 | P03-B02 | FeatureGrid | Start with information you can inspect. | `coverage` |
| 03 | P03-B03 | EvidencePanel | A finding should explain the next step. | `issue` |
| 04 | P03-B04 | Workflow | Review the change before it reaches your site. | `review` |
| 05 | P03-B05 | ComparisonTable | Separate a verified fix from a business outcome. | `results` |
| 06 | P03-B06 | FAQ | Questions about SEO & GEO | `faq` |
| 07 | P03-B07 | ConversionCTA | Bring a real page to the discussion. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P03-B01 · PageIntro · Find search and content issues. Follow through on the fix.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Find search and content issues. Follow through on the fix.
- Body: Inspect page information, content consistency and technical issues, then connect findings to reviewable recommendations and follow-up checks.

**Actions**

- **Book a Demo** → `/contact`
- **See the Shopify Scenario** → `/solutions/shopify`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P03-B02 · FeatureGrid · Start with information you can inspect.

**Anchor:** `coverage`

**Public copy**

- Heading (H2): Start with information you can inspect.
- Body: Each check should explain what it examined, what it found and why the result matters.

| Item / question / label | Copy |
| --- | --- |
| Page information | Review whether titles and descriptions accurately represent the page. |
| Links and access | Inspect broken links, unusual responses and redirect paths. |
| Structured information | Compare structured data with the content a visitor can see. |
| Content and AI readability | Make product facts, relationships and important conditions clear and consistent. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: Coverage is proposed. Remove unsupported checks before publishing.
- Mobile: preserve reading order; keep all essential text available without hover.

## P03-B03 · EvidencePanel · A finding should explain the next step.

**Anchor:** `issue`

**Public copy**

- Heading (H2): A finding should explain the next step.
- Body: Illustrative example: a product page title omits the model name, making the page difficult to distinguish from similar products.

| Item / question / label | Copy |
| --- | --- |
| Finding | The title does not include the confirmed product model. |
| Affected object | The product detail page. |
| Recommendation | Use the approved product name and model in a distinct page title. |
| Verification | Check that the published title matches the approved wording and page content. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: A readable task record or before/after comparison beside explanatory text. Status always has a text label.
- CMS fit: Proposed evidence / task panel, not a registered CMS type.
- Media / data: All examples in this document are illustrative, not customer results or proof of implementation.
- Mobile: preserve reading order; keep all essential text available without hover.

## P03-B04 · Workflow · Review the change before it reaches your site.

**Anchor:** `review`

**Public copy**

- Heading (H2): Review the change before it reaches your site.
- Body: Compare the current content, proposed wording and source evidence before deciding what to do.

| Item / question / label | Copy |
| --- | --- |
| Check the context | Confirm the page and product facts behind the recommendation. |
| Review the proposal | Compare the existing wording with the suggested change. |
| Choose the action | Approve the scope and execution method that apply. |
| Inspect the result | Review the published content and repeat the relevant check. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Content gate / behavior: No unverified one-click or bulk-write capability implied by the CTA.
- Mobile: preserve reading order; keep all essential text available without hover.

## P03-B05 · ComparisonTable · Separate a verified fix from a business outcome.

**Anchor:** `results`

**Public copy**

- Heading (H2): Separate a verified fix from a business outcome.
- Body: A technical check can confirm a specific change. Search traffic and external platform visibility require separate observation.

| Item / question / label | Copy |
| --- | --- |
| Directly inspectable | Whether a title, link, content statement or structured field meets the check’s criteria. |
| Observed over time | Traffic, visitor behavior and how external search platforms present content. |
| Not guaranteed | A particular ranking, indexing date or citation by an AI assistant. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Mobile: preserve reading order; keep all essential text available without hover.

## P03-B06 · FAQ · Questions about SEO & GEO

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions about SEO & GEO
- Body: Understand the scope of checks and actions before connecting a channel.

| Item / question / label | Copy |
| --- | --- |
| Does GEO guarantee AI citations? | No. The focus is on clear product facts, consistent content and inspectable issues. A specific platform’s indexing, citations or rankings are not guaranteed. |
| Will findings automatically change my website? | The connection scope must distinguish reading, recommendations and execution. The available actions and required permissions are confirmed before use. |
| Can we focus on Shopify? | Yes. Select Shopify in the demo request and describe the pages or issues you want to discuss. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P03-B07 · ConversionCTA · Bring a real page to the discussion.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Bring a real page to the discussion.
- Body: Share your store or website and the question you want to investigate. Start with a useful, clearly defined check scope.

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
