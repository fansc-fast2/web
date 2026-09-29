# P10 · Privacy Policy — Blocks & Copy (EN)

Version: 1.0 · Updated: 2026-09-28 · Language: English
Route: `/privacy` · Phase: P0 — proposed first release
Status: design and copy draft; no blocks imported into the CMS and no product claims verified by this writing task.

[Document index](./README.md) · [Shared blocks and UI copy](./00-Shared-Blocks-and-UI-Copy-EN.md) · [CMS mapping](./00-Block-Catalog-and-CMS-Mapping.md)

## Page direction

- Primary headline: **Privacy Policy**
- Alternative headline: **How information is handled across this website and our services.**
- Use one headline, not both. The primary is the proposed default; the alternative offers a more task-focused emphasis.
- SEO title draft: **Privacy Policy | {{brandName}}**
- Meta description draft: Read the scope, purposes and contact information for the website’s privacy policy.
- Replace the brand token only after the public brand is confirmed. Metadata needs a final length and language review.
- Editorial rationale: Policy pages use document navigation and readable text, not promotional conversion sections.
- Release gate: BLOCKED FOR PUBLICATION: all policy facts and jurisdiction-dependent text require completion and review. Layout and neutral UI copy are designed; legal content is not approved.

## Block order

SharedHeader → P10-B01 → P10-B02 → P10-B03 → P10-B04 → P10-B05 → P10-B06 → P10-B07 → P10-B08 → SharedFooter

| Order | Instance ID | Logical block | Content role / title | Anchor |
| --- | --- | --- | --- | --- |
| 01 | P10-B01 | PageIntro | Privacy Policy | `hero` |
| 02 | P10-B02 | InlineNotice | Policy information | `policy-version` |
| 03 | P10-B03 | LegalNav | On this page | `contents` |
| 04 | P10-B04 | LegalSection | 1. Scope and contact | `scope` |
| 05 | P10-B05 | LegalSection | 2. Information and purposes | `information` |
| 06 | P10-B06 | LegalSection | 3. Services and sharing | `sharing` |
| 07 | P10-B07 | LegalSection | 4. Storage and retention | `retention` |
| 08 | P10-B08 | LegalSection | 5. Questions and requests | `requests` |

The shared header/footer are additional instances. Feedback blocks describe conditional states and must not appear as standalone sections during a normal page view. Items inside a block are repeatable content, not additional page blocks.

## P10-B01 · PageIntro · Privacy Policy

**Anchor:** `hero`

**Public copy**

- Heading (H1): Privacy Policy
- Body: This policy explains how {{legalEntityName}} handles information collected through {{coveredWebsiteAndServices}}.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact, left-aligned page introduction; one H1, one paragraph and optional CTAs. No full-screen banner.
- CMS fit: PageHero is a candidate; validate heading level, text-only layout and support for a second CTA.
- Media / data: No decorative image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P10-B02 · InlineNotice · Policy information

**Anchor:** `policy-version`

**Public copy**

- Heading (H2): Policy information
- Body: Effective date: {{effectiveDate}}. Last updated: {{lastUpdatedDate}}. Privacy contact: {{privacyContact}}.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Compact inline message with optional action; no blocking modal.
- CMS fit: Proposed notice/text composition.
- Media / data: No image required.
- Content gate / behavior: Required policy facts are intentionally unresolved. Remove this internal note from public copy; do not publish unresolved placeholders.
- Mobile: preserve reading order; keep all essential text available without hover.

## P10-B03 · LegalNav · On this page

**Anchor:** `contents`

**Public copy**

- Heading (H2): On this page
- Body: Use the links below to find the information relevant to your question.

| Item / question / label | Copy |
| --- | --- |
| Scope and contact | Who this policy covers and how to reach us. |
| Information and purposes | What information is processed and why. |
| Services and sharing | Which service providers or recipients are involved. |
| Storage and retention | Where information is handled and how long it is retained. |
| Your requests | How to contact us about your information. |

**Actions**

- **Scope and Contact** → `#scope`
- **Information and Purposes** → `#information`
- **Services and Sharing** → `#sharing`
- **Storage and Retention** → `#retention`
- **Your Requests** → `#requests`

**Design and handoff notes — not public copy**

- Layout: Desktop sidebar and mobile collapsible contents above the body; links point to real section anchors.
- CMS fit: Proposed document navigation block.
- Media / data: No image required.
- Mobile: preserve reading order; keep all essential text available without hover.

## P10-B04 · LegalSection · 1. Scope and contact

**Anchor:** `scope`

**Public copy**

- Heading (H2): 1. Scope and contact
- Body: {{legalEntityName}}, at {{entityContactAddress}}, is responsible for the processing described in this policy. It covers {{confirmedScope}}. For questions about this policy, contact {{privacyContact}}.

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Content gate / behavior: Reviewed template only. Determine whether website visitors and product users need separate policies.
- Mobile: preserve reading order; keep all essential text available without hover.

## P10-B05 · LegalSection · 2. Information and purposes

**Anchor:** `information`

**Public copy**

- Heading (H2): 2. Information and purposes
- Body: When you submit a demo request, we process {{confirmedFormFields}} to {{confirmedRequestHandlingPurpose}}. When you use the website or connect a service, {{reviewedDescriptionOfOtherDataAndPurposes}}.

| Item / question / label | Copy |
| --- | --- |
| Website measurement | {{reviewedAnalyticsAndCookieText}} |
| Connected services | {{reviewedConnectedServiceDataText}} |
| AI processing | {{reviewedAIProcessingText}} |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Content gate / behavior: Do not infer analytics, cookies, lawful grounds, AI use or connected data from the marketing plan.
- Mobile: preserve reading order; keep all essential text available without hover.

## P10-B06 · LegalSection · 3. Services and sharing

**Anchor:** `sharing`

**Public copy**

- Heading (H2): 3. Services and sharing
- Body: {{reviewedRecipientsAndServiceProviderText}}

| Item / question / label | Copy |
| --- | --- |
| Recipient or provider | {{confirmedRecipientNamesOrCategories}} |
| Purpose and information | {{confirmedSharingPurposesAndData}} |
| International processing | {{reviewedCrossBorderProcessingText}} |

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Mobile: preserve reading order; keep all essential text available without hover.

## P10-B07 · LegalSection · 4. Storage and retention

**Anchor:** `retention`

**Public copy**

- Heading (H2): 4. Storage and retention
- Body: {{reviewedStorageLocationRetentionAndDeletionText}}

**Actions**

- No section-level CTA. Any dynamic card links are described in the handoff note and require actual published records.

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Content gate / behavior: Specify actual periods or determination criteria only after policy review.
- Mobile: preserve reading order; keep all essential text available without hover.

## P10-B08 · LegalSection · 5. Questions and requests

**Anchor:** `requests`

**Public copy**

- Heading (H2): 5. Questions and requests
- Body: To ask about information covered by this policy, contact {{privacyContact}}. {{reviewedApplicableRightsAndRequestProcedureText}}

**Actions**

- **Contact Us** → `/contact`

**Design and handoff notes — not public copy**

- Layout: Readable long-form column with H2/H3 hierarchy; preserve version and effective-date fields.
- CMS fit: Proposed structured rich-text section; RawHtml alone is not a complete editing model.
- Media / data: Policy templates contain intentionally unresolved facts; they are not publication-ready legal terms.
- Content gate / behavior: Add jurisdiction-specific and other required sections through qualified review; this is not a complete legal policy.
- Mobile: preserve reading order; keep all essential text available without hover.

## Page-specific review

- Check every linked route and anchor before release. P1/P2 links stay hidden until the destination is published.
- Replace evidence illustrations with approved assets or keep an explicit “Illustrative example” / “Conceptual workflow” caption.
- Keep template tokens and internal notes out of public output. Hide a conditional block when its required content is unavailable.
- Route-level titles and body claims need product-owner review. Copy coverage is not runtime or legal approval.
