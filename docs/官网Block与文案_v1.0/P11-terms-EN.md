# P11 · Terms — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/terms` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Terms of Use**
- Alternative headline: **Terms for accessing this website and the services in scope.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Terms | {{brandName}}**
- Meta description draft: Read the terms that apply to this website and the services described in them.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Lead with the reader’s task, explain the scope, then provide a concrete next step. Use evidence where a product claim needs support.
- Release gate: BLOCKED FOR PUBLICATION: requires actual service/commercial facts and qualified review; this is an editorial template, not final terms.

## Block order

SharedHeader → P11-B01 → P11-B02 → P11-B03 → P11-B04 → P11-B05 → P11-B06 → P11-B07 → P11-B08 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P11-B01 | PageIntro | Terms of Use | `hero` |
| 02 | P11-B02 | InlineNotice | Terms information | `terms-version` |
| 03 | P11-B03 | LegalNav | On this page | `contents` |
| 04 | P11-B04 | LegalSection | 1. Scope | `scope` |
| 05 | P11-B05 | LegalSection | 2. Use and responsibilities | `use` |
| 06 | P11-B06 | LegalSection | 3. Content and ownership | `ownership` |
| 07 | P11-B07 | LegalSection | 4. Services and applicable agreements | `service` |
| 08 | P11-B08 | LegalSection | 5. Changes and contact | `changes` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P11-B01 · PageIntro · Terms of Use

**Anchor:** `hero`

**Public copy**

- Heading (H1): Terms of Use
- Body: These terms describe the conditions that apply to {{coveredWebsiteAndServices}} provided by {{legalEntityName}}.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P11-B02 · InlineNotice · Terms information

**Anchor:** `terms-version`

**Public copy**

- Heading (H2): Terms information
- Body: Effective date: {{effectiveDate}}. Last updated: {{lastUpdatedDate}}. Contact: {{termsContact}}.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact inline message with optional action; no blocking modal.
- CMS fit: Proposed notice/text composition.
- Media / data: No image required.
- Content gate / behavior: Do not publish unresolved facts or assume these terms cover a future paid product.
- Mobile: preserve reading order; keep all essential text available without hover.

## P11-B03 · LegalNav · On this page

**Anchor:** `contents`

**Public copy**

- Heading (H2): On this page
- Body: Find the section relevant to your use of the website or services.

| Item / question / label | Copy |
| --- | --- |
| Scope | Who provides the website and which services are covered. |
| Use and responsibilities | The conditions for access and use. |
| Content and ownership | How content and intellectual property are addressed. |
| Service and commercial terms | The approved scope of service and any applicable agreements. |
| Changes and contact | How changes and questions are handled. |

**Actions**

- **Scope** → `#scope`
- **Use and Responsibilities** → `#use`
- **Content and Ownership** → `#ownership`
- **Service Terms** → `#service`
- **Changes and Contact** → `#changes`

**Design and handoff notes — not public copy**

- Layout: Desktop sidebar and mobile collapsible contents above the body; links point to real section anchors.
- CMS fit: Proposed document navigation block.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P11-B04 · LegalSection · 1. Scope

**Anchor:** `scope`

**Public copy**

- Heading (H2): 1. Scope
- Body: These terms apply to {{confirmedScope}}. The service provider is {{legalEntityName}}, reachable at {{termsContact}}. {{reviewedAgreementAndScopeText}}

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Mobile: preserve reading order; keep all essential text available without hover.

## P11-B05 · LegalSection · 2. Use and responsibilities

**Anchor:** `use`

**Public copy**

- Heading (H2): 2. Use and responsibilities
- Body: {{reviewedAccessAcceptableUseAndResponsibilityText}}

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Content gate / behavior: Do not invent age requirements, account obligations or prohibited-use clauses without an approved policy.
- Mobile: preserve reading order; keep all essential text available without hover.

## P11-B06 · LegalSection · 3. Content and ownership

**Anchor:** `ownership`

**Public copy**

- Heading (H2): 3. Content and ownership
- Body: {{reviewedIntellectualPropertyUserContentAndPermissionText}}

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Content gate / behavior: Clarify marketing-site content separately from customer product data.
- Mobile: preserve reading order; keep all essential text available without hover.

## P11-B07 · LegalSection · 4. Services and applicable agreements

**Anchor:** `service`

**Public copy**

- Heading (H2): 4. Services and applicable agreements
- Body: {{reviewedServiceScopeCommercialReferencesAndAvailabilityText}}

| Item / question / label | Copy |
| --- | --- |
| Pilots and paid services | {{reviewedPilotSubscriptionAndPaymentReferenceText}} |
| Service boundaries | {{reviewedResponsibilityWarrantyAndLiabilityText}} |
| Ending access | {{reviewedTerminationAndDataHandlingText}} |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Content gate / behavior: Commercial and liability language is deliberately unresolved, not an approved legal position.
- Mobile: preserve reading order; keep all essential text available without hover.

## P11-B08 · LegalSection · 5. Changes and contact

**Anchor:** `changes`

**Public copy**

- Heading (H2): 5. Changes and contact
- Body: {{reviewedTermsChangeNotificationText}} For questions about these terms, contact {{termsContact}}.

**Actions**

- **Contact Us** → `/contact`

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Content gate / behavior: Other jurisdiction-specific provisions and sections must be determined by legal review.
- Mobile: preserve reading order; keep all essential text available without hover.

## Page-specific review

- Check every linked route and anchor before release. P1/P2 links stay hidden until the destination is published.
- Replace evidence illustrations with approved assets or keep an explicit “Illustrative example” / “Conceptual workflow” caption.
- Keep template tokens and internal notes out of public output. Hide a conditional block when its required content is unavailable.
- Route-level titles and body claims need product-owner review. Copy coverage is not runtime or legal approval.
