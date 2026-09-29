# P14 · AI Agents — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/product/ai-agents` · Phase: P1 — gated expansion
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **AI recommendations your team can inspect.**
- Alternative headline: **AI assistance with a visible scope and a reviewable next step.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **AI Agents | {{brandName}}**
- Meta description draft: Bring evidence, proposed actions and execution requirements into the same task, with human decisions clearly in view.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P1 page: requires a real task log, verified review controls and accurate execution limits.

## Block order

SharedHeader → P14-B01 → P14-B02 → P14-B03 → P14-B04 → P14-B05 → P14-B06 → P14-B07 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P14-B01 | PageIntro | AI recommendations your team can inspect. | `hero` |
| 02 | P14-B02 | FeatureGrid | Make the role of AI explicit. | `roles` |
| 03 | P14-B03 | EvidencePanel | Read the action before it becomes a change. | `task` |
| 04 | P14-B04 | Workflow | A decision belongs between a proposal and execution. | `control` |
| 05 | P14-B05 | ComparisonTable | Be clear about limits before a task runs. | `recovery` |
| 06 | P14-B06 | FAQ | Questions about AI-assisted work | `faq` |
| 07 | P14-B07 | ConversionCTA | Review an agent task from beginning to end. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P14-B01 · PageIntro · AI recommendations your team can inspect.

**Anchor:** `hero`

**Public copy**

- Heading (H1): AI recommendations your team can inspect.
- Body: Bring evidence, proposed actions and execution requirements into the same task, with human decisions clearly in view.

**Actions**

- **Book a Demo** → `/contact`
- **See How It Works** → `/platform/how-it-works`

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P14-B02 · FeatureGrid · Make the role of AI explicit.

**Anchor:** `roles`

**Public copy**

- Heading (H2): Make the role of AI explicit.
- Body: Separate what a task observes, what it proposes and what has actually been authorized.

| Item / question / label | Copy |
| --- | --- |
| Monitor | Inspect the information made available to the task. |
| Analyze | Explain the observation and relevant context. |
| Recommend | Propose a specific next action with a reason. |
| Assist execution | Work only within supported methods and the confirmed authorization scope. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: Each agent role needs a verified capability state.
- Mobile: preserve reading order; keep all essential text available without hover.

## P14-B03 · EvidencePanel · Read the action before it becomes a change.

**Anchor:** `task`

**Public copy**

- Heading (H2): Read the action before it becomes a change.
- Body: Conceptual task record for a product description review.

| Item / question / label | Copy |
| --- | --- |
| Observation | A description differs from its approved source. |
| Suggested action | Replace the disputed wording with a source-backed revision. |
| Permission required | Authority to update the specified content object. |
| Decision | Awaiting the responsible reviewer’s decision. |
| Verification plan | Compare the published description with the approved revision. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: A readable task record or before/after comparison beside explanatory text. Status always has a text label.
- CMS fit: Proposed evidence / task panel, not a registered CMS type.
- Media / data: All examples in this document are illustrative, not customer results or proof of implementation.
- Mobile: preserve reading order; keep all essential text available without hover.

## P14-B04 · Workflow · A decision belongs between a proposal and execution.

**Anchor:** `control`

**Public copy**

- Heading (H2): A decision belongs between a proposal and execution.
- Body: Define how review works for the type of task in question.

| Item / question / label | Copy |
| --- | --- |
| Inspect | Review the evidence and affected objects. |
| Decide | Accept, adjust or decline the proposed action. |
| Execute | Use the permitted method within the agreed scope. |
| Check | Record whether the intended result was observed. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Ordered steps across desktop and vertically on mobile; each step retains its label and explanation.
- CMS fit: Proposed logical block; add a generic step-list structure rather than using an industry-specific process block.
- Media / data: Create a diagram from the exact step copy below.
- Mobile: preserve reading order; keep all essential text available without hover.

## P14-B05 · ComparisonTable · Be clear about limits before a task runs.

**Anchor:** `recovery`

**Public copy**

- Heading (H2): Be clear about limits before a task runs.
- Body: Permissions, reversibility and verification are part of the task definition.

| Item / question / label | Copy |
| --- | --- |
| Unsupported action | Do not treat a recommendation as a working execution path. |
| Insufficient access | Clarify what permission is missing before proceeding. |
| Irreversible change | Explain the consequence and any available recovery option. |
| Uncertain outcome | Keep the result open for review instead of marking success. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Semantic table with persistent headings; allow local horizontal scrolling on small screens.
- CMS fit: Proposed generic comparison table; existing product Comparison is not a verified fit.
- Media / data: Use the exact dimensions below; do not turn unknown outcomes into positive claims.
- Mobile: preserve reading order; keep all essential text available without hover.

## P14-B06 · FAQ · Questions about AI-assisted work

**Anchor:** `faq`

**Public copy**

- Heading (H2): Questions about AI-assisted work
- Body: Control depends on the action and the implementation, not on the word “agent.”

| Item / question / label | Copy |
| --- | --- |
| Can an agent fix everything automatically? | No. A task is limited by its data, supported actions and permissions. |
| Who approves an action? | The review owner and any approved automation must be defined for the workflow. |
| Can a suggestion be changed? | The intended review flow allows the team to assess the proposed action. The actual editing and approval controls must be confirmed in the product scope. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Accessible accordion; each question is a button with expanded state, keyboard support and readable answer.
- CMS fit: FAQ exists in the UI-string injection list; schema, data source and active-brand renderer still require fit verification.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P14-B07 · ConversionCTA · Review an agent task from beginning to end.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Review an agent task from beginning to end.
- Body: Bring a workflow your team would like assistance with. We’ll discuss the evidence, decisions and actions involved.

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
