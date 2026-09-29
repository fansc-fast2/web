# P08 · Security and Governance — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/platform/security` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Know the boundaries of every connection and action.**
- Alternative headline: **Make access and human control part of the workflow.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Security and Governance | {{brandName}}**
- Meta description draft: Review data access, human decisions, operational records and exit requirements before bringing a workflow into your organization.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: Technical and business owners must verify implementation and policy claims. No unverified badges, SLAs or retention periods.

## Block order

SharedHeader → P08-B01 → P08-B02 → P08-B03 → P08-B04 → P08-B05 → P08-B06 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P08-B01 | PageIntro | Know the boundaries of every connection and action. | `hero` |
| 02 | P08-B02 | FeatureGrid | Define control at each stage. | `principles` |
| 03 | P08-B03 | ComparisonTable | Turn data requirements into concrete questions. | `data` |
| 04 | P08-B04 | MediaText | Understand the intended change before approving it. | `approval` |
| 05 | P08-B05 | FAQ | Questions to bring to an assessment | `faq` |
| 06 | P08-B06 | ConversionCTA | Bring your governance requirements into the discussion. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P08-B01 · PageIntro · Know the boundaries of every connection and action.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Know the boundaries of every connection and action.
- Body: Review data access, human decisions, operational records and exit requirements before bringing a workflow into your organization.

**Actions**

- **Book a Demo** → `/contact`
- **See the Workflow** → `/platform/how-it-works`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P08-B02 · FeatureGrid · Define control at each stage.

**Anchor:** `principles`

**Public copy**

- Heading (H2): Define control at each stage.
- Body: Discuss access and action in the context of a specific task.

| Item / question / label | Copy |
| --- | --- |
| Access | Identify the systems, objects and purposes in scope. |
| Action | Distinguish analysis from changes to real content. |
| Responsibility | Define who may approve and execute. |
| Evidence | Understand the available records and verification method. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: Principles are not evidence of implemented controls; verify each implementation claim.
- Mobile: preserve reading order; keep all essential text available without hover.

## P08-B03 · ComparisonTable · Turn data requirements into concrete questions.

**Anchor:** `data`

**Public copy**

- Heading (H2): Turn data requirements into concrete questions.
- Body: Compare your requirements with the current implementation and document the agreed boundaries.

| Item / question / label | Copy |
| --- | --- |
| Access and storage | Which data is read, processed or stored, and where? |
| Teams and sites | How are access boundaries applied between roles, brands and sites? |
| External processing | Which services participate, and what do they process? |
| Retention and deletion | What is retained, and how are disconnection and deletion handled? |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Content gate / behavior: Assessment questions do not assert certification, encryption specifications or tenant isolation.
- Mobile: preserve reading order; keep all essential text available without hover.

## P08-B04 · MediaText · Understand the intended change before approving it.

**Anchor:** `approval`

**Public copy**

- Heading (H2): Understand the intended change before approving it.
- Body: Make the affected objects, proposed content and execution requirements visible during review. Clarify irreversible actions or wider impacts in advance.

| Item / question / label | Copy |
| --- | --- |
| Before | Understand the action and its scope. |
| During | Work within the agreed method and permissions. |
| After | Inspect the record and verification result. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Content gate / behavior: Verify actual approval and record capabilities.
- Mobile: preserve reading order; keep all essential text available without hover.

## P08-B05 · FAQ · Questions to bring to an assessment

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions to bring to an assessment
- Body: Policies and technical statements must match the service and implementation in scope.

| Item / question / label | Copy |
| --- | --- |
| Do you hold a specific certification? | No unverified certification is claimed on this page. Tell us which certification or review materials your organization requires. |
| How long is data retained? | Retention needs to be confirmed by data type and service arrangement. Include your requirements in the assessment. |
| What happens when we disconnect? | Access, completed changes and retained records need separate handling. Ending a connection should not be assumed to undo previous changes. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P08-B06 · ConversionCTA · Bring your governance requirements into the discussion.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Bring your governance requirements into the discussion.
- Body: Tell us about your data, access, approval or procurement requirements so we can discuss the current scope.

**Actions**

- **Discuss Governance** → `/contact`

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
