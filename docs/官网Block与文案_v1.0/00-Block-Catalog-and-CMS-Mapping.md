# Block Catalog & CMS Mapping

Updated: 2026-09-28 · Basis: read-only inspection of the current `prd-admin` source.

The page documents use **logical block names** to describe a design. They are not JSON payloads ready to import. A visual mapping is not proof that the schema, active-brand renderer, editor and published site already support the layout.

## 1. Source inspection

The current registry is in `theme/platform`, not the old `src/blocks` directory mentioned in older repository instructions.

- [Registry](../../../prd-admin/theme/platform/registry.ts): combines schema definitions and render definitions; brand-specific rendering can override the default.
- [HeroSimple schema](../../../prd-admin/theme/platform/standard/hero-simple/schema.ts): `heading`, `subheading`, `media`, `cta[]`, alignment and height fields.
- [PageHero schema](../../../prd-admin/theme/platform/standard/page-hero/schema.ts): `heading`, `description`, `label`, `ctaText`, `ctaUrl` and media settings.
- [SplitImageText schema](../../../prd-admin/theme/platform/standard/split-image-text/schema.ts): `heading`, `content`, `image`, `ctaText`, `ctaUrl`, `layout`.
- [BentoGrid schema](../../../prd-admin/theme/platform/standard/brand-value/schema.ts): `heading`, `items[].title`, `description`, `icon`, `image`, `layout`; current item schema has no CTA target.
- [Contact schema](../../../prd-admin/theme/platform/standard/contact/schema.ts): contact channels and form headings; no arbitrary field-definition array for the requested demo form.
- [NewsGrid schema](../../../prd-admin/theme/platform/standard/news-grid/schema.ts): `source`, card-field mappings and pagination; current default source/path is an article/news convention, not proof of `/blog` or `/guides` behavior.
- [UI strings](../../../prd-admin/src/config/ui-strings.ts): shared text injection includes Header, Footer, Contact, FAQ and NewsGrid, among others.

No runtime, editor or publishing validation was performed. Active brand and customer configuration were not inferred from historical instructions, and no environment secrets were read.

## 2. Mapping status

**Candidate reuse** means a schema exists and overlaps with the content need. **Adapt** means additional composition, fields or behavior are required. **Design only** means no suitable implementation was established by this inspection.

| Logical design block | Current candidate | Status | Required work before implementation acceptance |
| --- | --- | --- | --- |
| SharedHeader | Header / FragmentRef | Candidate reuse + adapt | Navigation groups, shared fragments, CTA slot, mobile menu and skip link |
| SharedFooter | Footer / FragmentRef | Candidate reuse + adapt | Link groups, brand statement, legal identity and conditional contact |
| HeroSplit | HeroSimple / SplitImageText | Adapt | Split composition, two actions, text/media ordering and evidence visual |
| PageIntro | PageHero | Candidate reuse + adapt | Text-only option, H1 semantics and optional second CTA |
| FeatureGrid | BentoGrid | Adapt | Equal-weight cards, neutral icons, section body, optional links and mobile layout |
| Workflow | Generic ordered steps | Design only | Step schema, semantic list, ordering and responsive connector treatment |
| MediaText | SplitImageText | Candidate reuse + adapt | Approved media, alt text and support for extra actions when needed |
| EvidencePanel | Task / evidence panel | Design only | Structured record, clear status labels and visible concept caption |
| ComparisonTable | Generic data table | Design only | Semantic headers and mobile overflow; do not substitute product comparison logic |
| IntegrationGrid | Connector cards | Design only | Availability, capabilities, permissions, verified logos and conditional actions |
| FAQ | Existing FAQ ecosystem | Adapt; fit unverified | Validate schema/source and render dispatch; bind copy and accordion behavior |
| ConversionCTA | HeroSimple | Adapt | H2 instead of H1, compact height and CTA links |
| DemoForm | Contact reference | Adapt substantially | Required fields, select/multi-select, validation, request handling and feedback |
| LegalNav | Document contents | Design only | Anchors, mobile presentation and focus behavior |
| LegalSection | Structured rich text; RawHtml reference | Design only | Approved text, version fields, semantic headings and safe rendering |
| ResourceToolbar | Search / filters | Design only | Query and filter state, keyboard behavior and result feedback |
| ResourceCards | NewsGrid | Adapt | Data types, `/blog` and `/guides` detail routing, metadata and empty states |
| DocsDirectory | Documentation index | Design only | Actual docs source, hierarchy, versions and working links |
| ReleaseTimeline | Release records | Design only | Genuine version/date/impact fields and filtering |
| PlanCards | Commercial scope cards | Design only | Approved scope, plan data if later supplied and appropriate CTA behavior |
| InlineNotice | Conditional text / notice composition | Design only | State-driven rendering and appropriate live announcement behavior |

The catalog contains 22 logical designs including the two shared shell blocks. Repeated use across 23 pages does not mean 155 new CMS types are needed. Reuse a small set of adaptable components where the information structures match.

## 3. Field-level content mapping

| Document field | Existing target where applicable | Caveat |
| --- | --- | --- |
| Heading | `heading` | Preserve a single editor value; verify text vs HTML support for each schema |
| Hero body | HeroSimple `subheading`; PageHero `description` | Do not invent a `body` field in an import payload |
| MediaText body | SplitImageText `content` | Format as the supported rich text; keep internal notes out |
| Main action | `ctaText` + `ctaUrl` | Single-action schemas need explicit adaptation for multiple actions |
| Hero action array | HeroSimple `cta[].text`, `.link`, `.variant` | Set primary/secondary intentionally; action URLs must be real |
| Card title/body | BentoGrid `items[].title`, `.description` | Link support is absent in the inspected schema |
| Images | `media` / `image` with desktop, mobile and alt | Field name depends on block type |
| Page anchor | Planned layout-level ID | Not verified as a prop on each candidate block; implement explicitly |
| Availability status | Planned connector/capability state | Never derive from a marketing title or an existing source folder |
| Block IDs such as P03-B02 | Editorial instance identifiers | Do not treat as current CMS document IDs |

## 4. Storage and ownership

| Content | Intended owner |
| --- | --- |
| Brand identity, legal entity, verified contacts | Site settings / approved business records |
| Navigation labels and destinations | Site navigation, shared header/footer fragments |
| Repeated interface labels and status messages | Site UI string pack where supported |
| Page headings, paragraphs, card text and FAQs | Page block content |
| Customer evidence and feature claims | Product-owner evidence register; approved values referenced by copy |
| Article, guide, release and documentation records | Their actual CMS content types / documentation source |
| Availability and approved pricing | Product/commercial source of truth, not duplicated free-form copy |

All `{{token}}` values require approved data or reviewed text. They must not reach rendered output. `action:*` values are design action IDs, not href values or implemented API routes.

## 5. Composition and responsive rules

- Keep the page sequence in each specification. Merge adjacent visual containers only when their content order and anchors remain intact.
- The first block supplies the H1. Reused hero renderers in closing CTAs must output a lower-level heading.
- SharedHeader and SharedFooter are added once per page. State-only blocks render inside their owning form/list context, not as extra scroll sections.
- A block’s item collection is content inside that block. A dynamic list may contain many records without increasing the editorial block count.
- Keep grids readable at narrow widths. Never hide required explanatory text or use hover as the only way to reveal scope.
- Published styles and CDN artifacts come from the normal generator/publisher. Do not hand-edit `prd-web/public/cdn` or `public/sites` to implement this plan.

## 6. Later implementation acceptance

1. Confirm product statements, brand, default language and relevant release gates.
2. Confirm actual active-brand render dispatch before selecting the final block implementations.
3. Map the content to verified schemas and deliberately add any missing structures.
4. Validate editor preview and published rendering, including anchors and heading levels.
5. Connect forms, search and dynamic records to real data and verify success/error/empty states.
6. Verify first-release navigation never points to unavailable future pages.

This handoff completes block composition and English copy design. It does not assert those later acceptance steps have passed.
