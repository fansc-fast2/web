# fast2x Brand Tokens v1.1

Created 2026-09-28. A proposed visual foundation for **fast2x.com**. English first, initial target market: United States. All capabilities are in development; public demos are not available. This is a design handoff, not an implementation or a published library.

[Open the Figma brand overview](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=20-3)

## Design direction

Reference: [Vercel](https://vercel.com/), inspected 2026-09-28. The reference informed the neutral palette, Geist typography, typographic hierarchy and restrained visual treatment. Values below are a new fast2x proposal, not an exported Vercel token library.

Use white or near-black surfaces, fine dividers, small radii and generous spacing. Blue is functional: links, keyboard focus and a small amount of emphasis. Amber is limited to the small development-status dot. Green and red are reserved for future interaction feedback, never evidence of product availability.

The initial wordmark is editable lowercase **fast2x** in Geist SemiBold. No separate brand symbol or custom logo has been designed.

## Figma boards

| Board | Link |
| --- | --- |
| Brand overview | [00 Cover](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=20-3) |
| Primitive and semantic colors | [01 Color](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=20-25) |
| Type specimens | [02 Typography](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=20-450) |
| Spacing, radii, layout, elevation | [03 Layout](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=20-511) |
| Light and dark specimens | [04 Themes](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=20-620) |
| Voice, motion and usage | [05 Usage](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=20-670) |

## Variable architecture

| Collection | Count | Modes | Usage |
| --- | ---: | --- | --- |
| fast2x / Primitives | 30 | Value | Raw colors, hidden from normal pickers |
| fast2x / Color | 26 | Light, Dark | Semantic roles, all aliased to primitives |
| fast2x / Foundation | 38 | Value | Space, radius, layout, stroke, motion |
| fast2x / Typography | 28 | Value | Font families, numeric weights, sizes, line heights |
| Total | 122 | | |

All tokens have explicit scopes and `var(--f2x-...)` WEB syntax. Motion values are handoff-only and hidden from visual property pickers. Set **fast2x / Color** mode on a parent frame to switch Light/Dark; use semantic variables when creating designs. The homepage mixes light and dark neutral sections. Colored section backgrounds are excluded.

## Typography and layout

- Geist: Regular 400, Medium 500, SemiBold 600. Geist Mono for metadata and short labels. Both families were verified available in the target Figma environment.
- 18 text styles: Display/Desktop, Display/Mobile, Heading/H1, Heading/H2, Heading/H2-Mobile, Heading/H3, Body/Large, Body/Default, Body/Small, Label/Default, Label/Small, Mono/Default, Mono/Eyebrow, Brand/Wordmark, Brand/Wordmark-Mobile, Display/Editorial, Display/Editorial-Mobile, Brand/Wordmark-Large. All names have the `fast2x/` prefix. Font family, size and line height bind to variables; style-specific tracking is stored in each text style.
- Display desktop 64/68px; mobile 40/44px. Body 16/26px. Reading width max 680px.
- Desktop: 12 columns, 24px column gap, 1200px content max, 32px outer gutter. Mobile: 4 columns, 16px column gap, 20px outer gutter. Column gap and outer gutter are distinct.
- Proposed breakpoints: 768px and 1024px. CSS media queries cannot directly consume custom properties; use these values when implementing responsive rules.
- Controls: minimum 44px interactive height, 6px radius. Cards 8px, panels 12px. Status labels may use pill radius.
- Effect styles: `fast2x/Shadow/Subtle` = 0 1px 2px rgba(0,0,0,.05); `fast2x/Shadow/Floating` = 0 8px 24px -4px rgba(0,0,0,.10). Borders remain necessary in dark mode.
- Motion: 120/180/240ms, ease cubic-bezier(0.2,0,0,1). Reduce to zero for reduced-motion preference. No animated prototype is included.

## Availability and copy

Use **In development**, **We’re developing…** and **Planned capabilities**. Proposed informational CTA: **Explore the Vision**. Do not show Book a Demo, Start Free Trial, Install, Sign Up or availability claims. Do not invent proof, clients, certifications, performance metrics or launch dates.

The earlier 23-page content boards require a separate promotional-copy pass before publishing. See [confirmed positioning](../04-fast2x定位与首发确认.md).

## Files and verification

- [fast2x.tokens.json](./fast2x.tokens.json): project-specific schema with all raw values, aliases, scopes, CSS names, text styles and effects; not advertised as DTCG interchange format.
- [fast2x.tokens.css](./fast2x.tokens.css): equivalent custom properties and color modes, provided for handoff only. No application imports were added. Fonts are not bundled by this file.
- [figma-manifest.json](./figma-manifest.json): returned object IDs and board dimensions.
- [validation.json](./validation.json): live Figma audit of variables, aliases, geometry, fonts and contrast.

Original brand-board validation: 118 variables; 317 text nodes with valid styles and available fonts; no unbound solid fills/strokes on the new boards; no child overflow; all 26 selected contrast checks passed. Normal text pairs meet 4.5:1 and essential focus/boundary pairs meet 3:1. Disabled states and decorative dividers are intentionally excluded from normal-text requirements. All 6 boards were visually inspected. This is not an accessibility audit of an implemented website.

Existing runtime CSS remains TMS-derived. The new `--f2x-` namespace keeps this proposed brand distinct until a later implementation task. No website code, CMS data, deployment, DNS or library publishing was changed.

Website UI extension (2026-09-28): added `fast2x/Brand/Wordmark-Mobile` at 24/32px, Geist SemiBold, -0.8px tracking. The original 14 styles remain unchanged and the variable count stays at 118. Complete homepage designs and their separate validation are in the [UI handoff](../ui/README.md).

Visual revision v1.1 (2026-09-28): 122 variables, 18 text styles and 4 effect styles. Added editorial display 80/84px and 48/48px, an 80/84px footer wordmark, and two local 8px light effects. Color remains limited to small graphics, status dots and effects. Earlier board validation above describes the original brand boards; see [current UI validation](../ui/validation.json) and [motion reserves](../ui/motion-reserves.md) for the revised website.
