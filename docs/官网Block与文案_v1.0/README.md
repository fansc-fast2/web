# Website Blocks & Copy — English v1.0

Updated: 2026-09-28 · Scope: all 23 pages in the current planning reference, including gated future pages.

This is the English-first copy and block design handoff. The source architecture and phase plan remain drafts; this document does not approve product claims or expand the release scope.

## Figma delivery

[Open prd-web in Figma](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=14-2) · [Per-page links and validation record](./Figma-Handoff-EN.md)

The English copy has been transferred into editable Figma content boards. This is a point-in-time handoff, not automatic synchronization.

## Start here

- [Shared blocks, navigation and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md)
- [Block catalog and mapping to the current CMS](./00-Block-Catalog-and-CMS-Mapping.md)
- [Source content architecture](../官网内容架构_v1.0.md)
- [Page inventory](../官网页面清单_v1.0.md)
- [Content plan](../官网内容规划_v1.0.md)

## Page-by-page handoff

| Page | Route | Phase | Body / conditional block instances | Copy document |
| --- | --- | --- | --- | --- |
| P01 · Home | `/` | P0 | 8 | [Home — EN](./P01-home-EN.md) |
| P02 · Product Overview | `/product` | P0 | 7 | [Product Overview — EN](./P02-product-overview-EN.md) |
| P03 · SEO and GEO | `/product/seo-geo` | P0 | 7 | [SEO and GEO — EN](./P03-seo-and-geo-EN.md) |
| P04 · Shopify Solution | `/solutions/shopify` | P0 | 7 | [Shopify Solution — EN](./P04-shopify-solution-EN.md) |
| P05 · Strapi and Multi-site | `/solutions/strapi` | P0 | 7 | [Strapi and Multi-site — EN](./P05-strapi-and-multi-site-EN.md) |
| P06 · How It Works | `/platform/how-it-works` | P0 | 7 | [How It Works — EN](./P06-how-it-works-EN.md) |
| P07 · Integrations | `/platform/integrations` | P0 | 7 | [Integrations — EN](./P07-integrations-EN.md) |
| P08 · Security and Governance | `/platform/security` | P0 | 6 | [Security and Governance — EN](./P08-security-and-governance-EN.md) |
| P09 · Contact and Demo | `/contact` | P0 | 5 | [Contact and Demo — EN](./P09-contact-and-demo-EN.md) |
| P10 · Privacy Policy | `/privacy` | P0 | 8 | [Privacy Policy — EN](./P10-privacy-policy-EN.md) |
| P11 · Terms | `/terms` | P0 | 8 | [Terms — EN](./P11-terms-EN.md) |
| P12 · Product Knowledge | `/product/product-knowledge` | P1 | 7 | [Product Knowledge — EN](./P12-product-knowledge-EN.md) |
| P13 · SiteOps | `/product/siteops` | P1 | 7 | [SiteOps — EN](./P13-siteops-EN.md) |
| P14 · AI Agents | `/product/ai-agents` | P1 | 7 | [AI Agents — EN](./P14-ai-agents-EN.md) |
| P15 · Multi-site Content | `/product/multi-site-content` | P1 | 7 | [Multi-site Content — EN](./P15-multi-site-content-EN.md) |
| P16 · Multi-brand and Multi-site | `/solutions/multi-site` | P1 | 7 | [Multi-brand and Multi-site — EN](./P16-multi-brand-and-multi-site-EN.md) |
| P17 · Agencies | `/solutions/agencies` | P1 | 7 | [Agencies — EN](./P17-agencies-EN.md) |
| P18 · Developers and API | `/developers` | P2 | 6 | [Developers and API — EN](./P18-developers-and-api-EN.md) |
| P19 · Blog | `/blog` | P2 | 6 | [Blog — EN](./P19-blog-EN.md) |
| P20 · Guides | `/guides` | P2 | 6 | [Guides — EN](./P20-guides-EN.md) |
| P21 · Documentation | `/docs` | P2 | 6 | [Documentation — EN](./P21-documentation-EN.md) |
| P22 · Changelog | `/changelog` | P2 | 6 | [Changelog — EN](./P22-changelog-EN.md) |
| P23 · Pricing | `/pricing` | P2 | 6 | [Pricing — EN](./P23-pricing-EN.md) |

Total: **23 pages, 155 page-level block specifications**, plus the shared header/footer. The total includes conditional feedback and dynamic template blocks; it is not a count of registered CMS block types or always-visible sections.

## Writing decisions

- Public copy is English. Book a Demo is the default marketing CTA; Request a Demo is the form-submit label.
- No brand name is inserted into prose. `{{brandName}}` is reserved for site identity and metadata until the name is confirmed.
- Distinct pages have distinct roles: Home explains the proposition, Product explains capability relationships, Solutions explain buyer workflows, and Platform explains mechanics and boundaries.
- Every page includes a default headline, an alternative headline, SEO metadata, block order, literal body/item copy, CTA targets and handoff notes.
- Capability statements remain draft claims. Evidence panels are illustrative; no customers, metrics, certifications, prices, release dates or technical interfaces are invented.
- Privacy and Terms have complete structural block specifications and neutral wrapper copy, but factual and jurisdiction-dependent legal text remains explicitly templated for review.
- Blog, Guides and Documentation have actual interface copy and editorial starter topics. They are not populated with fabricated published records. Changelog is a real-data template.
- Pricing uses a consultation variant with no numeric prices. It remains gated until the commercial owner approves the model.
- Logical names such as EvidencePanel are planning vocabulary. Use the mapping document before treating them as CMS types.

## Release and implementation boundary

Only documentation was written. Existing source changes, CMS records, published assets and deployment were not modified. Each page’s gates still apply. This folder is currently affected by the machine-wide Git ignore rule for `docs`; no Git add or commit was performed.

## Acceptance checklist

- P01–P23 each has a complete ordered block specification and English copy.
- Navigation and CTA targets use planned routes or explicit planned actions; no placeholder `#` links.
- Factual gaps use named tokens or release gates and are never disguised as confirmed features.
- Shared UI strings belong to the site UI string pack where supported; page-specific copy belongs to page blocks.
- Content-only checks verify coverage and references, not CMS rendering, product availability or legal correctness.
