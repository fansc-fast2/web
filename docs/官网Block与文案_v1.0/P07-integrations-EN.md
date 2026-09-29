# P07 · Integrations — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/platform/integrations` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Connect your channels with a clear scope.**
- Alternative headline: **Understand the scope before connecting a channel.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Integrations | {{brandName}}**
- Meta description draft: Understand the data an integration can handle, the access it needs and its current availability.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: Every displayed connector requires approved status, permissions and scope.

## Block order

SharedHeader → P07-B01 → P07-B02 → P07-B03 → P07-B04 → P07-B05 → P07-B06 → P07-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P07-B01 | PageIntro | Connect your channels with a clear scope. | `hero` |
| 02 | P07-B02 | IntegrationGrid | Start with the platforms you operate. | `connectors` |
| 03 | P07-B03 | FeatureGrid | Know what each availability label means. | `status` |
| 04 | P07-B04 | ComparisonTable | Reading, recommending and writing are separate decisions. | `scope` |
| 05 | P07-B05 | Workflow | Start a connection discussion with three details. | `connect` |
| 06 | P07-B06 | FAQ | Working with another platform? | `faq` |
| 07 | P07-B07 | ConversionCTA | Tell us what you need to connect. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P07-B01 · PageIntro · Connect your channels with a clear scope.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Connect your channels with a clear scope.
- Body: Understand the data an integration can handle, the access it needs and its current availability.

**Actions**

- **Book a Demo** → `/contact`
- **See How It Works** → `/platform/how-it-works`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P07-B02 · IntegrationGrid · Start with the platforms you operate.

**Anchor:** `connectors`

**Public copy**

- Heading (H2): Start with the platforms you operate.
- Body: Choose a relevant channel to discuss the data and workflow in scope.

| Item / question / label | Copy |
| --- | --- |
| Shopify | Assess store checks, product information and page content. |
| Strapi | Assess content models, product facts and publishing workflows. |

**Actions**

- **Explore Shopify** → `/solutions/shopify`
- **Explore Strapi** → `/solutions/strapi`

**Design and handoff notes — not public copy**

- Layout: Each card contains platform, scope, verified status and one relevant action.
- CMS fit: Proposed connector card; BentoGrid offers only a partial visual starting point.
- Media / data: Verify logos, permissions and availability before publishing any connector card.
- Content gate / behavior: Both cards require a verified status. Do not infer Available. Hold this list from publication until status and scope are confirmed.
- Mobile: preserve reading order; keep all essential text available without hover.

## P07-B03 · FeatureGrid · Know what each availability label means.

**Anchor:** `status`

**Public copy**

- Heading (H2): Know what each availability label means.
- Body: Availability describes a defined scope, not every feature in every environment.

| Item / question / label | Copy |
| --- | --- |
| Available | Open for use within the stated conditions and scope. |
| Beta | Open to qualifying scenarios while the scope continues to evolve. |
| In development | Being built; not presented as a complete integration. |
| Planned | Included in an explicit plan, without a promise of current access. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: These labels define copy only. An owner must approve each connector’s actual status.
- Mobile: preserve reading order; keep all essential text available without hover.

## P07-B04 · ComparisonTable · Reading, recommending and writing are separate decisions.

**Anchor:** `scope`

**Public copy**

- Heading (H2): Reading, recommending and writing are separate decisions.
- Body: Match each operation to specific data objects and permissions.

| Item / question / label | Copy |
| --- | --- |
| Read | Define which objects can be accessed. |
| Inspect and recommend | Define the checks and recommendation formats in scope. |
| Write | Include only explicitly supported and authorized changes. |
| Disconnect | Clarify how access ends and related data is handled. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Mobile: preserve reading order; keep all essential text available without hover.

## P07-B05 · Workflow · Start a connection discussion with three details.

**Anchor:** `connect`

**Public copy**

- Heading (H2): Start a connection discussion with three details.
- Body: Use the business task to define the integration.

| Item / question / label | Copy |
| --- | --- |
| Your systems | Platforms, site structure and deployment approach. |
| Your task | The issue you want to inspect or the content you need to reconcile. |
| Your boundaries | Data access, write scope and approval requirements. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P07-B06 · FAQ · Working with another platform?

**Anchor:** `faq`

**Public copy**

- Heading (H2): Working with another platform?
- Body: Describe the system and task before assuming a connection is available.

| Item / question / label | Copy |
| --- | --- |
| Can I request another integration? | Yes. Send the platform and desired workflow for assessment. Availability can only be stated after the scope and approach are confirmed. |
| Does In development mean I can use it? | No. Use the specific integration’s published access conditions and application process. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P07-B07 · ConversionCTA · Tell us what you need to connect.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Tell us what you need to connect.
- Body: Share your platform, data objects and workflow so we can discuss a practical scope.

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
