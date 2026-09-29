# P23 · Pricing — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/pricing` · Phase: P2 — content or commercial dependency
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Find a scope that fits your operations.**
- Alternative headline: **Define the scope before choosing a commercial plan.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Pricing | {{brandName}}**
- Meta description draft: Discuss the channels, sites and workflows you need to cover. We’ll use that scope to explain the applicable commercial arrangement.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P2 page: keep off navigation until the commercial owner approves this consultation model or supplies actual plans. This is the no-public-price variant, not finalized pricing.

## Block order

SharedHeader → P23-B01 → P23-B02 → P23-B03 → P23-B04 → P23-B05 → P23-B06 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P23-B01 | PageIntro | Find a scope that fits your operations. | `hero` |
| 02 | P23-B02 | PlanCards | Start with the way your team works. | `scope-options` |
| 03 | P23-B03 | ComparisonTable | The details behind a useful proposal | `scope` |
| 04 | P23-B04 | Workflow | Build the proposal around a defined workflow. | `proposal` |
| 05 | P23-B05 | FAQ | Questions before discussing pricing | `faq` |
| 06 | P23-B06 | ConversionCTA | Get a proposal grounded in your requirements. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P23-B01 · PageIntro · Find a scope that fits your operations.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Find a scope that fits your operations.
- Body: Discuss the channels, sites and workflows you need to cover. We’ll use that scope to explain the applicable commercial arrangement.

**Actions**

- **Book a Demo** → `/contact`
- **Discuss Your Requirements** → `#scope-options`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P23-B02 · PlanCards · Start with the way your team works.

**Anchor:** `scope-options`

**Public copy**

- Heading (H2): Start with the way your team works.
- Body: These scenarios help structure a pricing conversation. They are not published subscription tiers.

| Item / question / label | Copy |
| --- | --- |
| Store operations | For teams focused on a Shopify store. Discuss page and product checks, review workflows and the scope of supported actions. |
| Multi-site operations | For teams coordinating content across brands, sites or languages. Discuss sources, destinations, permissions and review ownership. |
| Agency workflows | For teams delivering work for clients. Discuss client boundaries, reporting needs and the operating model. |

**Actions**

- **Discuss Store Operations** → `/contact`
- **Discuss Multi-site Operations** → `/contact`
- **Discuss Agency Workflows** → `/contact`

**Design and handoff notes — not public copy**

- Layout: Three service-scope cards without a preselected recommended tier; stack on mobile.
- CMS fit: Proposed commercial-scope cards. No amounts, billing toggles or purchase actions before pricing approval.
- Media / data: The copy segments needs; it does not establish purchasable packages.
- Content gate / behavior: No plan prices, quotas, billing terms or purchase actions are invented. Card CTAs all lead to the contact form; retain the clicked scenario as source context only if implemented.
- Mobile: preserve reading order; keep all essential text available without hover.

## P23-B03 · ComparisonTable · The details behind a useful proposal

**Anchor:** `scope`

**Public copy**

- Heading (H2): The details behind a useful proposal
- Body: Use these dimensions to define the work and its boundaries before evaluating a commercial offer.

| Item / question / label | Copy |
| --- | --- |
| Channels and sites | Which stores, platforms, brands and destinations are included. |
| Data and checks | Which objects are inspected and which checks are supported. |
| Actions and approvals | Which changes may be proposed or executed, and who decides. |
| Usage and frequency | What volume and cadence need to be covered. |
| Support and onboarding | What assistance is included and how the setup is introduced. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Content gate / behavior: These are discussion dimensions, not approved billing units or included entitlements.
- Mobile: preserve reading order; keep all essential text available without hover.

## P23-B04 · Workflow · Build the proposal around a defined workflow.

**Anchor:** `proposal`

**Public copy**

- Heading (H2): Build the proposal around a defined workflow.
- Body: Connect commercial scope to the operations work you actually need.

| Item / question / label | Copy |
| --- | --- |
| Describe your setup | Share the channels, sites and teams involved. |
| Choose a starting workflow | Identify the issue and the first useful result. |
| Confirm the boundaries | Agree on data, permissions and supported actions. |
| Review the arrangement | Assess the confirmed scope, usage conditions and support terms. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P23-B05 · FAQ · Questions before discussing pricing

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions before discussing pricing
- Body: Commercial details should match a documented scope.

| Item / question / label | Copy |
| --- | --- |
| Is a free trial available? | No free-trial entitlement is promised here. Ask which evaluation or pilot options are currently available. |
| What counts toward usage? | Usage units and limits need to be stated in the applicable commercial proposal. |
| Does a proposal include every integration? | Available connections and supported actions must be explicitly listed in the scope. |
| Can we start with one workflow? | Describe the workflow you want to assess. The appropriate pilot or service arrangement can then be discussed. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P23-B06 · ConversionCTA · Get a proposal grounded in your requirements.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Get a proposal grounded in your requirements.
- Body: Tell us what you operate and what you want to improve. Start with a clear scope.

**Actions**

- **Discuss Pricing** → `/contact`

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
