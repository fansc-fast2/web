# P22 · Changelog — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/changelog` · Phase: P2 — content or commercial dependency
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Product updates, with their impact explained.**
- Alternative headline: **See what changed, and whether it affects your workflow.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Changelog | {{brandName}}**
- Meta description draft: Read released changes, the scope they affect and any action your team needs to take.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P2 page: requires genuine release history and an update owner. Roadmap items do not belong in this timeline.

## Block order

SharedHeader → P22-B01 → P22-B02 → P22-B03 → P22-B04 → P22-B05 → P22-B06 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P22-B01 | PageIntro | Product updates, with their impact explained. | `hero` |
| 02 | P22-B02 | ResourceToolbar | Find an update | `filters` |
| 03 | P22-B03 | ReleaseTimeline | Released updates | `releases` |
| 04 | P22-B04 | FeatureGrid | How updates are described | `labels` |
| 05 | P22-B05 | InlineNotice | Release list feedback | `release-feedback` |
| 06 | P22-B06 | ConversionCTA | Need to understand a change in your setup? | `help` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P22-B01 · PageIntro · Product updates, with their impact explained.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Product updates, with their impact explained.
- Body: Read released changes, the scope they affect and any action your team needs to take.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P22-B02 · ResourceToolbar · Find an update

**Anchor:** `filters`

**Public copy**

- Heading (H2): Find an update
- Body: Filter actual release records by the kind of change.

| Item / question / label | Copy |
| --- | --- |
| Filter label | Change type |
| Filter options | All updates; Added; Improved; Fixed; Action required |
| Clear control | Clear Filters |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Search plus wrapping category filters. Keep selected filters and result feedback visible.
- CMS fit: Proposed search/filter interaction, not an existing capability inferred from static content.
- Media / data: Use actual content metadata for results.
- Content gate / behavior: Enable filtering only if release data includes these verified classifications.
- Mobile: preserve reading order; keep all essential text available without hover.

## P22-B03 · ReleaseTimeline · Released updates

**Anchor:** `releases`

**Public copy**

- Heading (H2): Released updates
- Body: Each entry explains the change, its availability and any relevant follow-up.

| Item / question / label | Copy |
| --- | --- |
| Entry heading | {{releaseTitle}} |
| Metadata | Released {{actualReleaseDate}} · {{actualVersionOrReleaseIdentifier}} |
| Change type | {{approvedChangeType}} |
| What changed | {{verifiedChangeSummary}} |
| Availability | {{actualAffectedPlansConnectionsOrUsers}} |
| Action required | {{actualRequiredActionOrConfirmedNoActionText}} |
| Related documentation | {{verifiedDocumentationLink}} |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Reverse chronological entries with actual dates, versions and explicit change types.
- CMS fit: Proposed changelog block and data model.
- Media / data: Populate only from real release records.
- Content gate / behavior: Data-driven entry template. No invented releases, dates, versions or shipped capabilities. Repeated entries are data records, not separate page blocks.
- Mobile: preserve reading order; keep all essential text available without hover.

## P22-B04 · FeatureGrid · How updates are described

**Anchor:** `labels`

**Public copy**

- Heading (H2): How updates are described
- Body: Use these labels to understand the kind of change being reported.

| Item / question / label | Copy |
| --- | --- |
| Added | A capability has been released within the stated scope. |
| Improved | An existing capability has changed. |
| Fixed | A confirmed issue has been addressed. |
| Action required | Read the entry for a specific step relevant to your setup. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Two to four equal-weight cards; use a single column on mobile. No auto-rotating content.
- CMS fit: Adapt BentoGrid; card links, neutral icons, equal layouts and section body need extension or composition.
- Media / data: Use restrained icons; no invented metrics or customer logos.
- Mobile: preserve reading order; keep all essential text available without hover.

## P22-B05 · InlineNotice · Release list feedback

**Anchor:** `release-feedback`

**Public copy**

- Heading (H2): Release list feedback
- Body: Use only for actual content or retrieval states.

| Item / question / label | Copy |
| --- | --- |
| No matching entries | No updates match this filter. View all updates to continue. |
| Empty collection | Release notes will appear here when updates are published. |
| Loading failure | We couldn’t load the updates. Please try again. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact inline message with optional action; no blocking modal.
- CMS fit: Proposed notice/text composition.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P22-B06 · ConversionCTA · Need to understand a change in your setup?

**Anchor:** `help`

**Public copy**

- Heading (H2): Need to understand a change in your setup?
- Body: Include the release and affected workflow in your request.

**Actions**

- **Contact Us** → `/contact`

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
