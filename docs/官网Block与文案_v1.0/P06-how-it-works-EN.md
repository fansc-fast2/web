# P06 · How It Works — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/platform/how-it-works` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Find the issue. Review the action. Verify the result.**
- Alternative headline: **Make the reason and result of each action visible.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **How It Works | {{brandName}}**
- Meta description draft: Follow a task from source data to a checked outcome. Understand how a recommendation is formed, who decides and what happens next.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: Verify the capability statements and supporting media against the actual product scope before publication.

## Block order

SharedHeader → P06-B01 → P06-B02 → P06-B03 → P06-B04 → P06-B05 → P06-B06 → P06-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P06-B01 | PageIntro | Find the issue. Review the action. Verify the result. | `hero` |
| 02 | P06-B02 | Workflow | Six stages. Clear inputs and outputs. | `flow` |
| 03 | P06-B03 | EvidencePanel | Understand the finding before choosing an action. | `issue-center` |
| 04 | P06-B04 | MediaText | Let AI propose. Keep the decision understandable. | `agents` |
| 05 | P06-B05 | ComparisonTable | An executed action still needs a checked result. | `outcomes` |
| 06 | P06-B06 | FAQ | Questions about control and execution | `faq` |
| 07 | P06-B07 | ConversionCTA | See a complete task, not just a dashboard. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P06-B01 · PageIntro · Find the issue. Review the action. Verify the result.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Find the issue. Review the action. Verify the result.
- Body: Follow a task from source data to a checked outcome. Understand how a recommendation is formed, who decides and what happens next.

**Actions**

- **Book a Demo** → `/contact`
- **Review Governance** → `/platform/security`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P06-B02 · Workflow · Six stages. Clear inputs and outputs.

**Anchor:** `flow`

**Public copy**

- Heading (H2): Six stages. Clear inputs and outputs.
- Body: Each stage should explain what it received, what it produced and where responsibility sits.

| Item / question / label | Copy |
| --- | --- |
| Connect | Define channels, data objects and access scope. |
| Observe | Inspect data using the checks in scope. |
| Organize | Bring the issue, affected objects and evidence together. |
| Recommend | Present a proposed action for review. |
| Act | Execute through the confirmed method and permissions. |
| Verify | Repeat the relevant check and record what remains open. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P06-B03 · EvidencePanel · Understand the finding before choosing an action.

**Anchor:** `issue-center`

**Public copy**

- Heading (H2): Understand the finding before choosing an action.
- Body: Conceptual task: a product page contains a specification that conflicts with its source record.

| Item / question / label | Copy |
| --- | --- |
| Affected object | The product page and the disputed field. |
| Observed difference | The current description does not match the source. |
| Supporting context | The product record and applicable conditions. |
| Next decision | Ask the product owner to confirm the correct wording. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: A readable task record or before/after comparison beside explanatory text. Status always has a text label.
- CMS fit: Proposed evidence / task panel, not a registered CMS type.
- Media / data: All examples in this document are illustrative, not customer results or proof of implementation.
- Mobile: preserve reading order; keep all essential text available without hover.

## P06-B04 · MediaText · Let AI propose. Keep the decision understandable.

**Anchor:** `agents`

**Public copy**

- Heading (H2): Let AI propose. Keep the decision understandable.
- Body: Review the proposed change, affected objects and execution conditions within the task. Know what is intended before choosing to proceed.

| Item / question / label | Copy |
| --- | --- |
| Recommendation | See the proposed wording or action and its reason. |
| Permission | Understand the access the action requires. |
| Decision | Accept, revise or defer the proposed step. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Text and media split equally; alternate orientation within a page. Mobile: text first, media second.
- CMS fit: SplitImageText can map heading, content, image, ctaText and ctaUrl; multiple CTAs need adaptation.
- Media / data: Use an approved relevant screenshot; label any illustrative interface as conceptual.
- Content gate / behavior: Target workflow copy; confirm available approval, automation and record features.
- Mobile: preserve reading order; keep all essential text available without hover.

## P06-B05 · ComparisonTable · An executed action still needs a checked result.

**Anchor:** `outcomes`

**Public copy**

- Heading (H2): An executed action still needs a checked result.
- Body: Use outcome labels that reflect evidence, rather than treating an attempted change as a resolved issue.

| Item / question / label | Copy |
| --- | --- |
| Verified | The same check no longer finds the issue. |
| Still open | The check continues to find a problem. |
| Manual review needed | Available evidence is not enough to determine the outcome. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Content gate / behavior: These are proposed public-facing labels, not a verified match to product status enums.
- Mobile: preserve reading order; keep all essential text available without hover.

## P06-B06 · FAQ · Questions about control and execution

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions about control and execution
- Body: Available actions are confirmed for each connection and task scope.

| Item / question / label | Copy |
| --- | --- |
| Does every recommendation run automatically? | A recommendation is not execution permission. The connection plan must distinguish approved automation from actions that require review. |
| What happens if an action fails? | Review the attempted action and available error record, then determine whether retrying, manual handling or recovery applies. |
| Can every action be rolled back? | No universal rollback is assumed. Reversibility and the available recovery method need to be clear before execution. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P06-B07 · ConversionCTA · See a complete task, not just a dashboard.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): See a complete task, not just a dashboard.
- Body: Walk through discovery, review and verification, with a clear explanation of which steps fit your scenario.

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
