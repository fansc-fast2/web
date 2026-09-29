# P09 · Contact and Demo — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/contact` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Let’s look at your operations workflow.**
- Alternative headline: **Start with the operations problem you want to solve.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Contact and Demo | {{brandName}}**
- Meta description draft: Tell us about your store, sites or content process. We’ll use your context to discuss fit, connection scope and a useful next step.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: Verify the actual form fields, recipient, follow-up process, errors, privacy text and submission behavior. No closing CTA that sends a visitor back to the same page.

## Block order

SharedHeader → P09-B01 → P09-B02 → P09-B03 → P09-B04 → P09-B05 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P09-B01 | PageIntro | Let’s look at your operations workflow. | `hero` |
| 02 | P09-B02 | FeatureGrid | What to bring to the conversation | `expect` |
| 03 | P09-B03 | DemoForm | Request a demo | `demo-request` |
| 04 | P09-B04 | InlineNotice | Clear feedback at every step | `form-feedback` |
| 05 | P09-B05 | FAQ | Before you request a demo | `faq` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P09-B01 · PageIntro · Let’s look at your operations workflow.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Let’s look at your operations workflow.
- Body: Tell us about your store, sites or content process. We’ll use your context to discuss fit, connection scope and a useful next step.

**Actions**

- **Request a Demo** → `#demo-request`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P09-B02 · FeatureGrid · What to bring to the conversation

**Anchor:** `expect`

**Public copy**

- Heading (H2): What to bring to the conversation
- Body: A specific example is more useful than a long requirements list.

| Item / question / label | Copy |
| --- | --- |
| Your current setup | The platforms, stores or sites your team operates. |
| A recurring issue | A search, product content or site health problem you want to understand. |
| Your boundaries | Access, approval or data requirements we should consider. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P09-B03 · DemoForm · Request a demo

**Anchor:** `demo-request`

**Public copy**

- Heading (H2): Request a demo
- Body: Share enough context for a relevant conversation. Please do not include passwords, access tokens or sensitive customer data.

| Item / question / label | Copy |
| --- | --- |
| Full name · required | Label: Full name. Placeholder: Your name. Error: Enter your name. |
| Work email · required | Label: Work email. Placeholder: you@company.com. Error: Enter a valid email address. |
| Company or brand · required | Label: Company or brand. Placeholder: Your organization. Error: Enter your company or brand name. |
| Website or store URL · optional | Label: Website or store URL. Placeholder: https://example.com. Error: Enter a valid website address, or leave this field empty. |
| Platforms · required multi-select | Label: Which platforms do you use? Options: Shopify; Strapi; Multiple platforms; Other. Error: Select at least one option. |
| Primary need · required select | Label: What would you like to discuss? Options: SEO & GEO; Site health; Product content; Multi-site operations; Agency partnership; Integration requirements; Other. Error: Select a topic. |
| Additional context · optional | Label: Anything else we should know? Placeholder: Describe the issue, your current process or a requirement. |
| Privacy helper | We will use the information you provide to respond to your request. Read our Privacy Policy. |

**Actions**

- **Request a Demo** → `action:demo-submit`
- **Privacy Policy** → `/privacy`

**Design and handoff notes — not public copy**

- Layout: Context on the left, form on the right; single column on mobile, persistent labels and inline errors.
- CMS fit: Contact is a reference only: current schema lacks the requested field collection; form and server handling need adaptation.
- Media / data: Never reuse default REVOO contacts, phone numbers or example addresses.
- Content gate / behavior: The form submit action is a design contract, not an implemented endpoint. Verify recipients, processing and the Privacy Policy. Do not silently subscribe requesters to marketing.
- Mobile: preserve reading order; keep all essential text available without hover.

## P09-B04 · InlineNotice · Clear feedback at every step

**Anchor:** `form-feedback`

**Public copy**

- Heading (H2): Clear feedback at every step
- Body: Keep the entered information when validation or submission fails. Success copy appears only after the server confirms receipt.

| Item / question / label | Copy |
| --- | --- |
| Submitting | Sending your request… |
| Success heading | Your request has been received. |
| Success body | We’ll review the details you shared and contact you using the email provided. |
| Validation summary | Please check the highlighted fields. |
| Submission failure | We couldn’t send your request. Your details are still here. Please try again. |
| Retry button | Try Again |
| Confirmed fallback channel | Prefer email? Contact us at {{contactEmail}}. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact inline message with optional action; no blocking modal.
- CMS fit: Proposed notice/text composition.
- Media / data: No image required.
- Content gate / behavior: Fallback email remains hidden until verified. No response-time promise. Confirmation behavior must be wired to real server results.
- Mobile: preserve reading order; keep all essential text available without hover.

## P09-B05 · FAQ · Before you request a demo

**Anchor:** `faq`

**Public copy**

- Heading (H2): Before you request a demo
- Body: A request helps us understand your context before discussing access or implementation.

| Item / question / label | Copy |
| --- | --- |
| Will submitting this form connect my store? | No. It sends a request for a conversation and does not grant access to your systems. |
| Do I need a finished requirements document? | No. A platform, a concrete issue and any important constraints are enough to start. |
| Can agencies get in touch? | Yes. Choose Agency partnership and describe the clients or workflows you support. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## Page-specific review

- Check every linked route and anchor before release. P1/P2 links stay hidden until the destination is published.
- Replace evidence illustrations with approved assets or keep an explicit “Illustrative example” / “Conceptual workflow” caption.
- Keep template tokens and internal notes out of public output. Hide a conditional block when its required content is unavailable.
- Route-level titles and body claims need product-owner review. Copy coverage is not runtime or legal approval.
