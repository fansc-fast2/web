# P17 · Agencies — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/solutions/agencies` · Phase: P1 — gated expansion
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Give client operations a clearer scope of work.**
- Alternative headline: **Make client work easier to scope, explain and verify.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Agencies | {{brandName}}**
- Meta description draft: Use specific issues, reviewable recommendations and visible follow-up to structure conversations with the brands you support.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P1 page: confirm supported agency workflow and partnership handling before navigation exposure.

## Block order

SharedHeader → P17-B01 → P17-B02 → P17-B03 → P17-B04 → P17-B05 → P17-B06 → P17-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P17-B01 | PageIntro | Give client operations a clearer scope of work. | `hero` |
| 02 | P17-B02 | FeatureGrid | A shared language for client delivery. | `value` |
| 03 | P17-B03 | Workflow | Keep the client decision visible. | `engagement` |
| 04 | P17-B04 | EvidencePanel | A useful report connects the finding to the follow-up. | `report` |
| 05 | P17-B05 | FeatureGrid | Discuss the partnership model before the promise. | `partnership` |
| 06 | P17-B06 | FAQ | Questions from service providers | `faq` |
| 07 | P17-B07 | ConversionCTA | Tell us how you deliver work for clients. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P17-B01 · PageIntro · Give client operations a clearer scope of work.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Give client operations a clearer scope of work.
- Body: Use specific issues, reviewable recommendations and visible follow-up to structure conversations with the brands you support.

**Actions**

- **Book a Demo** → `/contact`
- **Explore Shopify** → `/solutions/shopify`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P17-B02 · FeatureGrid · A shared language for client delivery.

**Anchor:** `value`

**Public copy**

- Heading (H2): A shared language for client delivery.
- Body: Help clients understand what was found and what the next decision involves.

| Item / question / label | Copy |
| --- | --- |
| Scope the work | Link a proposed task to a defined page, channel or content object. |
| Explain the recommendation | Show the evidence and intended change in plain language. |
| Close the loop | Agree on how the result will be checked and reported. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P17-B03 · Workflow · Keep the client decision visible.

**Anchor:** `engagement`

**Public copy**

- Heading (H2): Keep the client decision visible.
- Body: Discuss the operating model before taking action on a client’s systems.

| Item / question / label | Copy |
| --- | --- |
| Agree on access | Confirm the client, channel and authorized scope. |
| Review findings | Separate observations from proposed work. |
| Approve actions | Determine what the agency and client may each decide. |
| Report outcomes | Use the agreed verification evidence to explain the result. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P17-B04 · EvidencePanel · A useful report connects the finding to the follow-up.

**Anchor:** `report`

**Public copy**

- Heading (H2): A useful report connects the finding to the follow-up.
- Body: Illustrative client summary structure, not an existing customer report.

| Item / question / label | Copy |
| --- | --- |
| What we observed | The issue and affected objects. |
| What we recommend | A proposed change and the reason. |
| What needs approval | The decision or access required from the client. |
| What we checked | The evidence after the agreed action. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: A readable task record or before/after comparison beside explanatory text. Status always has a text label.
- CMS fit: Proposed evidence / task panel, not a registered CMS type.
- Media / data: All examples in this document are illustrative, not customer results or proof of implementation.
- Mobile: preserve reading order; keep all essential text available without hover.

## P17-B05 · FeatureGrid · Discuss the partnership model before the promise.

**Anchor:** `partnership`

**Public copy**

- Heading (H2): Discuss the partnership model before the promise.
- Body: Clarify commercial and operational requirements early.

| Item / question / label | Copy |
| --- | --- |
| Client boundaries | Access and data separation between clients. |
| Delivery format | The reports and review materials clients need. |
| Commercial arrangement | The service, usage and support model that fits the engagement. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: No assumed reseller program, commissions, white-labeling or cross-client console.
- Mobile: preserve reading order; keep all essential text available without hover.

## P17-B06 · FAQ · Questions from service providers

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions from service providers
- Body: Bring a client workflow rather than confidential client credentials.

| Item / question / label | Copy |
| --- | --- |
| Is there a reseller or referral program? | No program is promised on this page. Describe your partnership needs so they can be discussed. |
| Can we brand the reports? | Report format and branding requirements need to be assessed against current support. |
| How do we keep clients separate? | Required boundaries must be compared with verified access and data isolation behavior before onboarding. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P17-B07 · ConversionCTA · Tell us how you deliver work for clients.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Tell us how you deliver work for clients.
- Body: Describe your client platforms, review process and reporting needs. Choose Agency partnership in the request form.

**Actions**

- **Discuss an Agency Workflow** → `/contact`

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
