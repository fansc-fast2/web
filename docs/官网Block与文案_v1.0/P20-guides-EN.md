# P20 · Guides — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/guides` · Phase: P2 — content or commercial dependency
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Guides for work you can put into practice.**
- Alternative headline: **Practical steps, with a way to check the result.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Guides | {{brandName}}**
- Meta description draft: Use focused steps to inspect an issue, review a change and check the outcome. Choose a guide that matches the task in front of you.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P2 page: requires complete, reproducible guides and an owner for maintenance.

## Block order

SharedHeader → P20-B01 → P20-B02 → P20-B03 → P20-B04 → P20-B05 → P20-B06 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P20-B01 | PageIntro | Guides for work you can put into practice. | `hero` |
| 02 | P20-B02 | ResourceToolbar | Choose a task | `browse` |
| 03 | P20-B03 | ResourceCards | Start with a concrete workflow | `starter-guides` |
| 04 | P20-B04 | FeatureGrid | Know what each guide contains. | `guide-format` |
| 05 | P20-B05 | InlineNotice | Guide list feedback | `results-feedback` |
| 06 | P20-B06 | ConversionCTA | Need to discuss your own version of the workflow? | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P20-B01 · PageIntro · Guides for work you can put into practice.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Guides for work you can put into practice.
- Body: Use focused steps to inspect an issue, review a change and check the outcome. Choose a guide that matches the task in front of you.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P20-B02 · ResourceToolbar · Choose a task

**Anchor:** `browse`

**Public copy**

- Heading (H2): Choose a task
- Body: Find guidance by the kind of work you need to do.

| Item / question / label | Copy |
| --- | --- |
| Search label | Search guides |
| Search placeholder | Search a task or topic |
| Category options | All guides; Inspect Content; Review Changes; Verify Results; Plan Connections |
| Clear control | Clear Filters |

**Actions**

- **Search** → `action:guide-search`

**Design and handoff notes — not public copy**

- Layout: Search plus wrapping category filters. Keep selected filters and result feedback visible.
- CMS fit: Proposed search/filter interaction, not an existing capability inferred from static content.
- Media / data: Use actual content metadata for results.
- Content gate / behavior: Search is a planned interaction; enable only when functional.
- Mobile: preserve reading order; keep all essential text available without hover.

## P20-B03 · ResourceCards · Start with a concrete workflow

**Anchor:** `starter-guides`

**Public copy**

- Heading (H2): Start with a concrete workflow
- Body: Draft guide titles and summaries for the first content batch.

| Item / question / label | Copy |
| --- | --- |
| Build a useful product-page issue list | Identify the page, record the observation and include enough context for someone else to understand the next step. |
| Review a product content change | Compare proposed wording with its source and preserve the conditions that make the product statement accurate. |
| Define a recheck before making a change | Choose what you will inspect afterward so success is more specific than “the task ran.” |
| Prepare for a channel connection discussion | Bring the platform, data objects, required actions and access boundaries into a single brief. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Cards show category, title, excerpt and a working detail link; one column on mobile.
- CMS fit: NewsGrid is a candidate for source/pagination; resource types, paths, filters and empty states require adaptation.
- Media / data: Only published records may supply public cards, authors, dates and images.
- Content gate / behavior: Production intro: “Choose a workflow and follow it from setup to verification.” Publish a card only when its complete guide exists. Per-card CTA: Read the Guide; href from the actual published record.
- Mobile: preserve reading order; keep all essential text available without hover.

## P20-B04 · FeatureGrid · Know what each guide contains.

**Anchor:** `guide-format`

**Public copy**

- Heading (H2): Know what each guide contains.
- Body: Each guide should make its prerequisites and outcome clear.

| Item / question / label | Copy |
| --- | --- |
| Before you start | The source information, access and decisions required. |
| Steps to follow | A focused sequence with a visible purpose for each action. |
| How to check | A way to inspect the result and recognize when further review is needed. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Content gate / behavior: Editorial contract: actual guide content must satisfy these promises.
- Mobile: preserve reading order; keep all essential text available without hover.

## P20-B05 · InlineNotice · Guide list feedback

**Anchor:** `results-feedback`

**Public copy**

- Heading (H2): Guide list feedback
- Body: Show only in the relevant search or loading state.

| Item / question / label | Copy |
| --- | --- |
| No results | No guides match your search. Try another task or clear the filters. |
| Empty collection | Guides will appear here when they are ready. |
| Loading failure | We couldn’t load the guides. Please try again. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact inline message with optional action; no blocking modal.
- CMS fit: Proposed notice/text composition.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P20-B06 · ConversionCTA · Need to discuss your own version of the workflow?

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Need to discuss your own version of the workflow?
- Body: Describe your systems and the task you want to improve. We’ll start from your current setup.

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
