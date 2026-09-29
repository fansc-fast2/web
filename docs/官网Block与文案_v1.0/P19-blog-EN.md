# P19 · Blog — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/blog` · Phase: P2 — content or commercial dependency
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Notes on better commerce and content operations.**
- Alternative headline: **Practical thinking for commerce and content teams.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Blog | {{brandName}}**
- Meta description draft: Explore the decisions behind product information, search content and site health, with an emphasis on evidence and clear next steps.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Resource pages prioritize reading and discovery; the commercial CTA appears only after the content.
- Release gate: P2 page: requires approved articles, working detail URLs and an editorial owner. No empty Blog at first launch.

## Block order

SharedHeader → P19-B01 → P19-B02 → P19-B03 → P19-B04 → P19-B05 → P19-B06 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P19-B01 | PageIntro | Notes on better commerce and content operations. | `hero` |
| 02 | P19-B02 | ResourceToolbar | Find a topic | `browse` |
| 03 | P19-B03 | ResourceCards | A useful place to start | `featured` |
| 04 | P19-B04 | ResourceCards | All articles | `all-articles` |
| 05 | P19-B05 | InlineNotice | Search and list feedback | `results-feedback` |
| 06 | P19-B06 | ConversionCTA | Turn an operations question into a focused discussion. | `next-step` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P19-B01 · PageIntro · Notes on better commerce and content operations.

**Anchor:** `hero`

**Public copy**

- Heading (H1): Notes on better commerce and content operations.
- Body: Explore the decisions behind product information, search content and site health, with an emphasis on evidence and clear next steps.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P19-B02 · ResourceToolbar · Find a topic

**Anchor:** `browse`

**Public copy**

- Heading (H2): Find a topic
- Body: Browse by topic or search for a question your team is working through.

| Item / question / label | Copy |
| --- | --- |
| Search label | Search articles |
| Search placeholder | Search a topic or keyword |
| Search button | Search |
| Topic label | Topic |
| Topic options | All topics; SEO & GEO; Product Knowledge; SiteOps; Team Workflows |
| Clear control | Clear Filters |

**Actions**

- **Search** → `action:article-search`

**Design and handoff notes — not public copy**

- Layout: Search plus wrapping category filters. Keep selected filters and result feedback visible.
- CMS fit: Proposed search/filter interaction, not an existing capability inferred from static content.
- Media / data: Use actual content metadata for results.
- Content gate / behavior: These controls require a real search/filter implementation. Hide unsupported controls rather than presenting a nonfunctional toolbar.
- Mobile: preserve reading order; keep all essential text available without hover.

## P19-B03 · ResourceCards · A useful place to start

**Anchor:** `featured`

**Public copy**

- Heading (H2): A useful place to start
- Body: Editorial candidates for the first release. The following title and excerpt copy is a draft, not a claim that articles already exist.

| Item / question / label | Copy |
| --- | --- |
| Why an SEO finding needs a verification step | A report can describe a problem without showing whether a later change resolved it. Learn how to define the check that closes the loop. |
| When product descriptions disagree | Not every wording difference is a factual conflict. Separate shared product facts from the local context that should remain. |
| What a site alert needs before it becomes a task | Connect an observation to an affected page, a proposed owner and a clear next decision. |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Cards show category, title, excerpt and a working detail link; one column on mobile.
- CMS fit: NewsGrid is a candidate for source/pagination; resource types, paths, filters and empty states require adaptation.
- Media / data: Only published records may supply public cards, authors, dates and images.
- Content gate / behavior: Production section intro: “Start with a practical question your team can act on.” Show cards only after each article is written and approved. CTA label per published card: Read Article; target comes from its actual published URL.
- Mobile: preserve reading order; keep all essential text available without hover.

## P19-B04 · ResourceCards · All articles

**Anchor:** `all-articles`

**Public copy**

- Heading (H2): All articles
- Body: Find practical perspectives on the content and operating decisions behind your channels.

| Item / question / label | Copy |
| --- | --- |
| Card metadata | Use the actual topic, title, excerpt and publication date. Show an author only when a real author is assigned. |
| Card action | Read Article |
| Pagination | Previous; Next |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Cards show category, title, excerpt and a working detail link; one column on mobile.
- CMS fit: NewsGrid is a candidate for source/pagination; resource types, paths, filters and empty states require adaptation.
- Media / data: Only published records may supply public cards, authors, dates and images.
- Content gate / behavior: Populate from published records. Do not repeat the featured item unnecessarily or display invented dates and reading times.
- Mobile: preserve reading order; keep all essential text available without hover.

## P19-B05 · InlineNotice · Search and list feedback

**Anchor:** `results-feedback`

**Public copy**

- Heading (H2): Search and list feedback
- Body: Use the following messages for actual runtime states; do not show them as a standalone marketing section.

| Item / question / label | Copy |
| --- | --- |
| No search results | No articles match your search. Try another keyword or clear the filters. |
| Empty collection | New articles will appear here when they are published. |
| Loading failure | We couldn’t load the articles. Please try again. |
| Retry button | Try Again |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact inline message with optional action; no blocking modal.
- CMS fit: Proposed notice/text composition.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P19-B06 · ConversionCTA · Turn an operations question into a focused discussion.

**Anchor:** `next-step`

**Public copy**

- Heading (H2): Turn an operations question into a focused discussion.
- Body: Bring the problem behind your reading list. We’ll discuss how it relates to your channels and workflow.

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
