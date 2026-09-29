# fast2x Website UI v1.2

Updated 2026-09-28. Scope: **one English promotional homepage, four content blocks**, desktop and mobile. [Content & Navigation v1.2](../官网内容与导航_v1.2.md) is the current copy source, following the approved [architecture adjustment](../官网结构调整方案_v1.2.md).

Audience is now part of Hero. The H1 states the business directly, Overview explains the three planned areas, Approach explains before/at/after-launch thinking, and Development closes with availability. Neutral black, white and gray backgrounds, small colored graphics and local light reserves remain. The v1.1 content board is marked historical; v1.0 archive frames remain, with shared components potentially reflecting later updates.

## Deliverables

| Deliverable | Size | Figma |
| --- | --- | --- |
| Desktop homepage | 1440 × 2625 | [Desktop](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=55-3) |
| Mobile homepage | 390 × 3843.94 | [Mobile](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=55-4) |
| Desktop scroll preview | 1440 × 900 viewport | [Desktop preview](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=61-60) |
| Mobile scroll preview | 390 × 844 viewport | [Mobile preview](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=61-204) |
| Component reference | 1440 × 1282 | [Components](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=56-2) |
| Design handoff | Responsive, copy and interactions | [Handoff](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=61-325) |
| Light reserve | Static comparison and specifications | [Local light](https://www.figma.com/design/SBTFhKQLQmPOBY7LbhY05e/prd-web?node-id=87-168) |

Mobile height is reduced by approximately 24.7% from 5101.81px; desktop by 22.7% from 3396px. These are Figma measurements. Artwork is on page 55:2; reusable components on page 55:5.

## Structure and navigation

| Block | Purpose | Desktop | Mobile | Future anchor |
| --- | --- | --- | --- | --- |
| H01 Hero + Audience | Business, audience, development disclosure and one CTA | 57:13 | 57:157 | #top |
| H02 Overview | Website creation, content management, ongoing operations | 57:67 | 57:188 | #overview |
| H03 Approach | Before launch / At launch / After launch | 57:97 | 57:218 | #approach |
| H04 Development | Current availability, no public demos | 57:123 | 57:244 | #development |

Each master and preview has five click targets: wordmark → Hero, Overview → Overview, Approach → Approach, See What We’re Building → Overview, Back to top → Hero. Each preview uses local targets. The header scrolls with the page.

Legacy mapping for implementation: #who → Hero, #vision → Overview, #status → Development. Anchors are recorded in section metadata; no HTML anchors or website redirects have been deployed.

## Responsive specifications

| Element | Desktop | Mobile |
| --- | --- | --- |
| Main content | Maximum 1200px, centered | 20px gutters; 350px content at 390px |
| Hero type | Geist Medium 80/84px | Geist Medium 40/44px |
| Header wordmark | 32/40px in 108 × 44 region | 24/32px in 90 × 44 region |
| Navigation | Overview / Approach | Same; each 84 × 44px |
| Primary CTA | 300 × 48px | 300 × 48px |
| Capability artwork | Three columns; 384 × 200px | One column; centered 230.4 × 120px |
| Development heading | 40/48px | 32/40px |
| Footer wordmark | 80/84px | 32/40px |

Use proposed 768px and 1024px breakpoints during implementation. Stack capabilities below 1024px. Allow header reflow at narrower widths or enlarged text while preserving hit regions. Intermediate widths are specifications, not tested browser layouts. Illustrations are conceptual, not working-product screenshots.

## Components and tokens

- Primary and Navigation actions retain Default, Hover, Pressed and Focus variants. Primary source variants are 300px wide for the longer CTA; specimen labels use current wording.
- Desktop and Mobile capability components retain editable content. Page instances hide repeated development badges in favor of the shared section introduction.
- Development badge uses neutral surface and text; only its small dot is colored.
- Retains 122 variables, 18 Geist / Geist Mono text styles and 4 effect styles. No new tokens in v1.2.
- Hover, pressed and focus appearances are visual specifications. State transitions are not wired. Implement a 2px focus ring with 2px outer offset.

## Content and motion

The H1 is **Product websites. From build to operations.** Audience appears in the body. Development status appears at the start and end. All visible copy is English; the [current copy document](../官网内容与导航_v1.2.md) replaces earlier wording.

No demo, trial, signup, pricing, contact form, customer proof, launch date, empty legal link or social placeholder is introduced.

Each master and preview retains four hidden, locked motion layers: one hero-edge sweep and three capability traces. [Motion specifications](./motion-reserves.md) still apply: local light only, no colored section backgrounds or continuous loops, reduced-motion support. The separate board shows static rest and peak comparisons. Button sheen is specified for later implementation. No playable animation is included.

## Verification and boundaries

Live readback passed for both masters and previews: four blocks each, neutral backgrounds, four hidden reserves, valid text styles/fonts, no unbound solid fills/strokes, and no detected frame/instance/text overflow. Each has five valid navigation targets of at least 44 × 44px. Each master has 40 visible text nodes; preview copy exactly matches its master.

Desktop, mobile and component screenshots were visually inspected. Prototype destinations were verified structurally; no manual presentation click-through was performed. SVG bounds and browser accessibility require implementation checks. No website code, CMS, DNS, deployment or published library changed.

- [Figma manifest](./figma-manifest.json): current frames, components, anchors and reactions.
- [Validation](./validation.json): audit and limitations.
- [Brand tokens](../brand/README.md): token sources.

Files remain local under prd-web/docs; the existing global docs ignore rule has not been overridden.
