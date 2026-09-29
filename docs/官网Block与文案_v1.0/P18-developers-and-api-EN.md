# P18 · Developers and API — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/developers` · Phase: P2 — content or commercial dependency
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Understand the interface before building the connection.**
- Alternative headline: **Build around a defined integration contract.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Developers and API | {{brandName}}**
- Meta description draft: Review the data, permissions and supported operations involved in a proposed integration. Technical references are published when their interfaces are ready.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P2 page: interface and documentation must be stable. If no references exist, keep this page off navigation; Integrations remains the first-release entry.

## Block order

SharedHeader → P18-B01 → P18-B02 → P18-B03 → P18-B04 → P18-B05 → P18-B06 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P18-B01 | PageIntro | Understand the interface before building the connection. | `hero` |
| 02 | P18-B02 | FeatureGrid | Choose the technical question you need to answer. | `start` |
| 03 | P18-B03 | DocsDirectory | Technical references | `references` |
| 04 | P18-B04 | Workflow | Define the connection contract together. | `evaluation` |
| 05 | P18-B05 | FAQ | Technical planning questions | `faq` |
| 06 | P18-B06 | ConversionCTA | Share the connection you want to build. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P18-B01 · PageIntro · Understand the interface before building the connection.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Understand the interface before building the connection.
- Body: Review the data, permissions and supported operations involved in a proposed integration. Technical references are published when their interfaces are ready.

**Actions**

- **Book a Demo** → `/contact`
- **View Integrations** → `/platform/integrations`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P18-B02 · FeatureGrid · Choose the technical question you need to answer.

**Anchor:** `start`

**Public copy**

- Heading (H2): Choose the technical question you need to answer.
- Body: Start with the system boundary and the task, then work toward an implementation.

| Item / question / label | Copy |
| --- | --- |
| Connection model | Understand how the source system participates in the workflow. |
| Data and permissions | Identify the objects and authorized operations in scope. |
| Execution and verification | Determine how a requested action and its result are represented. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P18-B03 · DocsDirectory · Technical references

**Anchor:** `references`

**Public copy**

- Heading (H2): Technical references
- Body: Use the reference that matches the interface and version you are working with.

| Item / question / label | Copy |
| --- | --- |
| Authentication and access | How the supported interface identifies a caller and limits access. |
| Data objects | The fields, relationships and constraints available through the interface. |
| Operations and responses | Supported operations, response formats and documented errors. |
| Version changes | Compatibility notes and changes relevant to an integration. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Task-based groups with clear hierarchy and actual version applicability.
- CMS fit: Proposed docs navigation/search block; determine the documentation source first.
- Media / data: Do not create clickable links for missing documents.
- Content gate / behavior: Topic copy is drafted; no endpoint, SDK, auth scheme or detail URL is invented. Link only to actual approved reference pages.
- Mobile: preserve reading order; keep all essential text available without hover.

## P18-B04 · Workflow · Define the connection contract together.

**Anchor:** `evaluation`

**Public copy**

- Heading (H2): Define the connection contract together.
- Body: A useful technical assessment starts with concrete inputs and expected outcomes.

| Item / question / label | Copy |
| --- | --- |
| Describe the source | Specify the platform and the objects involved. |
| Describe the task | Explain the observation or action the integration should support. |
| Set access boundaries | Identify required permissions and approval constraints. |
| Agree on verification | Define what evidence confirms a successful result. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P18-B05 · FAQ · Technical planning questions

**Anchor:** `faq`

**Public copy**

- Heading (H2): Technical planning questions
- Body: Discuss interface readiness and access before committing implementation effort.

| Item / question / label | Copy |
| --- | --- |
| Where can I find the API endpoint list? | Use the approved technical references for the interface in scope. If the required reference is not published, contact us to discuss availability. |
| Are SDKs or webhooks available? | Ask about the specific integration requirement. Availability should be established from published, versioned interface documentation. |
| Can you review our integration requirements? | Use the contact form, select Integration requirements and describe the source system and intended workflow. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P18-B06 · ConversionCTA · Share the connection you want to build.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Share the connection you want to build.
- Body: Include the source platform, data objects and expected operation. Please keep credentials out of the request.

**Actions**

- **Discuss an Integration** → `/contact`

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
