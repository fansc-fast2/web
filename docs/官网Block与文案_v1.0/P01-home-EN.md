# P01 · Home — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Keep products, content and site operations in sync.**
- Alternative headline: **Turn store issues into clear next steps.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Home | {{brandName}}**
- Meta description draft: Connect your commerce and content channels. Find issues across product information, SEO/GEO and site health, then move from reviewable recommendations to verified outcomes.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: The hero names the operating scope. The SEO section supplies the initial entry point without making the entire platform sound like a single audit tool.
- Release gate: Confirm all feature claims, target buyer and product imagery. Do not add unsupported customer logos or metrics.

## Block order

SharedHeader → P01-B01 → P01-B02 → P01-B03 → P01-B04 → P01-B05 → P01-B06 → P01-B07 → P01-B08 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P01-B01 | HeroSplit | Keep products, content and site operations in sync. | `hero` |
| 02 | P01-B02 | FeatureGrid | The issues are connected. Your tools rarely are. | `problems` |
| 03 | P01-B03 | Workflow | Find the issue. Review the action. Verify the result. | `workflow` |
| 04 | P01-B04 | MediaText | Start with search and content issues you can inspect. | `seo-geo` |
| 05 | P01-B05 | FeatureGrid | A shared context for content, site health and action. | `capabilities` |
| 06 | P01-B06 | FeatureGrid | Begin with the channels you operate. | `solutions` |
| 07 | P01-B07 | MediaText | Clear permissions. Visible decisions. | `control` |
| 08 | P01-B08 | ConversionCTA | See the workflow through a problem you recognize. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P01-B01 · HeroSplit · Keep products, content and site operations in sync.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Keep products, content and site operations in sync.
- Body: Connect your commerce and content channels. Find issues across product information, SEO/GEO and site health, then move from reviewable recommendations to verified outcomes.

**Actions**

- **Book a Demo** → `/contact`
- **Explore the Platform** → `/product`

**Design and handoff notes — not public copy**

- Layout: Left: H1, body and up to two CTAs. Right: product workflow illustration. Stack text before media on mobile.
- CMS fit: Adapt HeroSimple / SplitImageText; split composition and evidence panel are not confirmed existing props.
- Media / data: Use an approved product screenshot or a clearly labelled conceptual illustration.
- Mobile: preserve reading order; keep all essential text available without hover.

## P01-B02 · FeatureGrid · The issues are connected. Your tools rarely are.

**Anchor:** `problems`

**Public copy**

- Heading (H2): The issues are connected. Your tools rarely are.
- Body: A missing description, conflicting product details and a broken page can reach different teams. Start with a clearer view of what needs attention.

| Item / question / label | Copy |
| --- | --- |
| Search content has gaps | Page titles, descriptions and structured information do not always tell a consistent story. |
| Product details drift | The same product can be described differently across a store, website and local market. |
| Site issues lose context | Finding an error is only the start. Teams still need to understand its scope and follow through. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P01-B03 · Workflow · Find the issue. Review the action. Verify the result.

**Anchor:** `workflow`

**Public copy**

- Heading (H2): Find the issue. Review the action. Verify the result.
- Body: Give each recommendation a reason, each action a clear scope and each completed task a check.

| Item / question / label | Copy |
| --- | --- |
| Connect | Define the channels, data and permissions in scope. |
| Understand | See the issue, affected content and supporting evidence. |
| Review | Read the proposed change before deciding what happens next. |
| Verify | Check the same object again and record the outcome. |

**Actions**

- **See How It Works** → `/platform/how-it-works`

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P01-B04 · MediaText · Start with search and content issues you can inspect.

**Anchor:** `seo-geo`

**Public copy**

- Heading (H2): Start with search and content issues you can inspect.
- Body: Look at page information, links, structured data and content consistency. Understand what a check found and what a useful next step could be.

**Actions**

- **Explore SEO & GEO** → `/product/seo-geo`

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Content gate / behavior: Publish only verified checks. Do not imply guaranteed rankings, AI citations or traffic improvements.
- Mobile: preserve reading order; keep all essential text available without hover.

## P01-B05 · FeatureGrid · A shared context for content, site health and action.

**Anchor:** `capabilities`

**Public copy**

- Heading (H2): A shared context for content, site health and action.
- Body: Bring the facts behind an issue into the conversation about how to resolve it.

| Item / question / label | Copy |
| --- | --- |
| Product Knowledge | Use traceable product facts to review differences across channels. |
| SiteOps | Understand the scope of a site issue and follow its path to verification. |
| AI Agents | Review recommendations, permissions and task records before moving forward. |

**Actions**

- **Explore Product Knowledge** → `/product#product-knowledge`
- **Explore SiteOps** → `/product#siteops`
- **See How AI Works** → `/platform/how-it-works#agents`

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: Three supporting pillars require confirmed capability status. Reduce or label unshipped scope.
- Mobile: preserve reading order; keep all essential text available without hover.

## P01-B06 · FeatureGrid · Begin with the channels you operate.

**Anchor:** `solutions`

**Public copy**

- Heading (H2): Begin with the channels you operate.
- Body: Choose the scenario closest to your team’s work.

| Item / question / label | Copy |
| --- | --- |
| For Shopify teams | Start with store issues, review suggested changes and understand the requirements for taking action. |
| For Strapi and multi-site teams | Map product facts, content ownership and differences across brands, sites and languages. |

**Actions**

- **Explore Shopify** → `/solutions/shopify`
- **Explore Strapi & Multi-site** → `/solutions/strapi`

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P01-B07 · MediaText · Clear permissions. Visible decisions.

**Anchor:** `control`

**Public copy**

- Heading (H2): Clear permissions. Visible decisions.
- Body: Understand the data a connection uses, the actions a task requires and the records available afterward. Bring human control into the workflow.

**Actions**

- **Security & Governance** → `/platform/security`
- **View Integrations** → `/platform/integrations`

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Content gate / behavior: Confirm actual permissions, approval and record-keeping support before release.
- Mobile: preserve reading order; keep all essential text available without hover.

## P01-B08 · ConversionCTA · See the workflow through a problem you recognize.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): See the workflow through a problem you recognize.
- Body: Tell us about your channels and the issue you want to address. We’ll use that context to discuss fit and the next step.

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
