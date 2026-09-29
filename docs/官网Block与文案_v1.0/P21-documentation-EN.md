# P21 · Documentation — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/docs` · Phase: P2 — content or commercial dependency
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Documentation**
- Alternative headline: **Find the instructions that match your task and version.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Documentation | {{brandName}}**
- Meta description draft: Find setup instructions, workflow references and troubleshooting information for the supported product version.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: P2 page: requires actual version-aligned product documentation. If hosted elsewhere, replace this route with the confirmed documentation destination.

## Block order

SharedHeader → P21-B01 → P21-B02 → P21-B03 → P21-B04 → P21-B05 → P21-B06 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P21-B01 | PageIntro | Documentation | `hero` |
| 02 | P21-B02 | ResourceToolbar | Find an answer | `search` |
| 03 | P21-B03 | DocsDirectory | Start here | `start` |
| 04 | P21-B04 | DocsDirectory | Manage access and workflows | `manage` |
| 05 | P21-B05 | InlineNotice | Search feedback | `docs-feedback` |
| 06 | P21-B06 | ConversionCTA | Can’t find the information you need? | `help` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P21-B01 · PageIntro · Documentation

**Anchor:** `hero`

**Public copy**

- Heading (H1): Documentation
- Body: Find setup instructions, workflow references and troubleshooting information for the supported product version.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P21-B02 · ResourceToolbar · Find an answer

**Anchor:** `search`

**Public copy**

- Heading (H2): Find an answer
- Body: Search the documentation or choose a task below.

| Item / question / label | Copy |
| --- | --- |
| Search label | Search documentation |
| Search placeholder | Search setup, permissions or a task |
| Version label | Documentation version |
| Search button | Search |

**Actions**

- **Search** → `action:docs-search`

**Design and handoff notes — not public copy**

- Layout: Search plus wrapping category filters. Keep selected filters and result feedback visible.
- CMS fit: Proposed search/filter interaction, not an existing capability inferred from static content.
- Media / data: Use actual content metadata for results.
- Content gate / behavior: Use real supported versions. If there is one version, show its label rather than an invented version selector.
- Mobile: preserve reading order; keep all essential text available without hover.

## P21-B03 · DocsDirectory · Start here

**Anchor:** `start`

**Public copy**

- Heading (H2): Start here
- Body: Choose the guide that matches the next step in your setup.

| Item / question / label | Copy |
| --- | --- |
| Getting started | Understand the product scope and prepare the information needed for setup. |
| Connect a channel | Review connection prerequisites and the supported authorization flow. |
| Review an issue | Understand findings, evidence and proposed follow-up. |
| Check an outcome | Inspect the verification evidence for a completed action. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Task-based groups with clear hierarchy and actual version applicability.
- CMS fit: Proposed docs navigation/search block; determine the documentation source first.
- Media / data: Do not create clickable links for missing documents.
- Content gate / behavior: These are documentation topics, not completed documents. Link each only after its corresponding content is approved.
- Mobile: preserve reading order; keep all essential text available without hover.

## P21-B04 · DocsDirectory · Manage access and workflows

**Anchor:** `manage`

**Public copy**

- Heading (H2): Manage access and workflows
- Body: Use the reference for the capability available in your environment.

| Item / question / label | Copy |
| --- | --- |
| Roles and permissions | Understand supported access boundaries. |
| Review and execution | Follow the actual process for approving and running supported actions. |
| Records and troubleshooting | Inspect available task records and documented errors. |
| Disconnecting a channel | Follow the supported process for ending access. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Task-based groups with clear hierarchy and actual version applicability.
- CMS fit: Proposed docs navigation/search block; determine the documentation source first.
- Media / data: Do not create clickable links for missing documents.
- Content gate / behavior: Do not expose a topic that describes an unimplemented capability.
- Mobile: preserve reading order; keep all essential text available without hover.

## P21-B05 · InlineNotice · Search feedback

**Anchor:** `docs-feedback`

**Public copy**

- Heading (H2): Search feedback
- Body: Messages for documentation discovery states.

| Item / question / label | Copy |
| --- | --- |
| No results | No documentation matches your search. Try another term or browse the topics above. |
| Unavailable document | This document is not available for the selected version. |
| Loading failure | We couldn’t load this content. Please try again. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact inline message with optional action; no blocking modal.
- CMS fit: Proposed notice/text composition.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P21-B06 · ConversionCTA · Can’t find the information you need?

**Anchor:** `help`

**Public copy**

- Heading (H2): Can’t find the information you need?
- Body: Tell us which task, product version and connection you are working with. Please do not send credentials.

**Actions**

- **Contact Us** → `/contact`

**Design and handoff notes — not public copy**

- Layout: Short closing section with H2, one paragraph and a primary CTA; no forced screen height.
- CMS fit: HeroSimple can supply content fields; H2 semantics and compact layout require adaptation.
- Media / data: No image required.
- Content gate / behavior: Do not promise a support SLA. Use a verified support channel later if it differs from contact.
- Mobile: preserve reading order; keep all essential text available without hover.

## Page-specific review

- Check every linked route and anchor before release. P1/P2 links stay hidden until the destination is published.
- Replace evidence illustrations with approved assets or keep an explicit “Illustrative example” / “Conceptual workflow” caption.
- Keep template tokens and internal notes out of public output. Hide a conditional block when its required content is unavailable.
- Route-level titles and body claims need product-owner review. Copy coverage is not runtime or legal approval.
