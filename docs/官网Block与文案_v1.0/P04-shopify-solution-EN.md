# P04 · Shopify Solution — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/solutions/shopify` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Start with a clearer picture of your Shopify store.**
- Alternative headline: **Turn a store issue list into a plan you can review.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Shopify Solution | {{brandName}}**
- Meta description draft: See which pages and product details need attention. Review specific recommendations and understand the permissions required to act.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: Confirm Shopify app status, permissions and installation flow before adding an installation CTA.

## Block order

SharedHeader → P04-B01 → P04-B02 → P04-B03 → P04-B04 → P04-B05 → P04-B06 → P04-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P04-B01 | PageIntro | Start with a clearer picture of your Shopify store. | `hero` |
| 02 | P04-B02 | FeatureGrid | Built around the work behind a store. | `audience` |
| 03 | P04-B03 | Workflow | Define the first useful result before connecting. | `first-result` |
| 04 | P04-B04 | EvidencePanel | A report should point to a decision. | `report` |
| 05 | P04-B05 | FeatureGrid | Know what connecting will involve. | `onboarding` |
| 06 | P04-B06 | FAQ | Before you connect Shopify | `faq` |
| 07 | P04-B07 | ConversionCTA | Start with the issue your store needs to solve. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P04-B01 · PageIntro · Start with a clearer picture of your Shopify store.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Start with a clearer picture of your Shopify store.
- Body: See which pages and product details need attention. Review specific recommendations and understand the permissions required to act.

**Actions**

- **Book a Demo** → `/contact`
- **Explore SEO & GEO** → `/product/seo-geo`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P04-B02 · FeatureGrid · Built around the work behind a store.

**Anchor:** `audience`

**Public copy**

- Heading (H2): Built around the work behind a store.
- Body: Bring operations, product content and technical decisions into the same conversation.

| Item / question / label | Copy |
| --- | --- |
| Brand operators | Understand which issues need attention and where follow-up belongs. |
| Product and content teams | Check descriptions against the facts behind the product. |
| Service providers | Agree on a clear scope of work with the merchants you support. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P04-B03 · Workflow · Define the first useful result before connecting.

**Anchor:** `first-result`

**Public copy**

- Heading (H2): Define the first useful result before connecting.
- Body: Begin with the inspection scope and permissions, then build a set of findings your team can discuss and address.

| Item / question / label | Copy |
| --- | --- |
| Define the scope | Choose the store, page types and issues to inspect. |
| Review permissions | Understand the difference between reading data and changing content. |
| Inspect initial findings | See the issue, affected pages and supporting evidence. |
| Review next steps | Choose recommendations relevant to the current business need. |
| Check the outcome | Verify the specific changes that have been completed. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Content gate / behavior: Do not add fixed first-day or first-week delivery promises without evidence.
- Mobile: preserve reading order; keep all essential text available without hover.

## P04-B04 · EvidencePanel · A report should point to a decision.

**Anchor:** `report`

**Public copy**

- Heading (H2): A report should point to a decision.
- Body: Illustrative demo: inspect a product page, understand a content gap and review the proposed follow-up.

| Item / question / label | Copy |
| --- | --- |
| Object | The page or product detail to inspect. |
| Evidence | The observation behind the finding. |
| Action | The proposed change and required permissions. |
| Outcome | Verified, still open or requiring manual review. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: A readable task record or before/after comparison beside explanatory text. Status always has a text label.
- CMS fit: Proposed evidence / task panel, not a registered CMS type.
- Media / data: All examples in this document are illustrative, not customer results or proof of implementation.
- Mobile: preserve reading order; keep all essential text available without hover.

## P04-B05 · FeatureGrid · Know what connecting will involve.

**Anchor:** `onboarding`

**Public copy**

- Heading (H2): Know what connecting will involve.
- Body: Evaluate the approach against your store environment before treating a demo as a deployment plan.

| Item / question / label | Copy |
| --- | --- |
| Theme impact | Confirm whether the approach requires a theme change and where. |
| Access scope | Separate data access from permission to write changes. |
| Pilot exit | Clarify what happens to access, saved data and completed changes when the pilot ends. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P04-B06 · FAQ · Before you connect Shopify

**Anchor:** `faq`

**Public copy**

- Heading (H2): Before you connect Shopify
- Body: A demo request starts a conversation. It does not install an app or grant store access.

| Item / question / label | Copy |
| --- | --- |
| Can I install the app now? | This page starts with a demo request. An installation or connection link will be provided once the applicable connection method is confirmed. |
| Do I have to allow write access? | Required permissions depend on the agreed task scope. Tell us whether you want to assess checks only or also discuss execution. |
| How long does the first result take? | Timing depends on the connection method, data volume and check scope. We’ll discuss it after understanding your store. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P04-B07 · ConversionCTA · Start with the issue your store needs to solve.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Start with the issue your store needs to solve.
- Body: Share your Shopify store and the problem you want to address. We’ll discuss the relevant scope and connection approach.

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
