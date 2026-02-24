<div align="center">

# RAYDZ

### Step Into The Flame

![Brand](https://img.shields.io/badge/BRAND-RAYDZ-ff5e2b?style=for-the-badge&labelColor=0a0a0a)
![Figma](https://img.shields.io/badge/DESIGNED_IN-FIGMA-a259ff?style=for-the-badge&logo=figma&logoColor=white&labelColor=0a0a0a)
![Status](https://img.shields.io/badge/STATUS-LIVE-00c853?style=for-the-badge&labelColor=0a0a0a)
![License](https://img.shields.io/badge/LICENSE-MIT-white?style=for-the-badge&labelColor=0a0a0a)

A premium sneaker brand website designed end-to-end in **Figma** -- from low-fidelity wireframes to high-fidelity prototypes -- and exported into production-ready code.

<br/>

<!-- HERO BANNER SCREENSHOT -->
<img src="screenshots/hero.png" alt="Raydz Hero Section" width="100%" style="border-radius:12px;" />

<br/>

---

</div>

<br/>

## Table of Contents

- [Preview](#-preview)
- [Design Process](#-design-process)
- [Wireframing & Information Architecture](#-wireframing--information-architecture)
- [Design System & Tokens](#-design-system--tokens)
- [Component Architecture](#-component-architecture)
- [Prototyping & Interactions](#-prototyping--interactions)
- [Figma to Code Export](#-figma-to-code-export)
- [Tech Stack](#-tech-stack)
- [Pages & Sections](#-pages--sections)
- [Responsive Design](#-responsive-design)
- [File Structure](#-file-structure)
- [Getting Started](#-getting-started)

<br/>

---

<br/>

## 👁 Preview

### Desktop (1440 x 900)

<div align="center">

<!-- REPLACE: Take a full-page screenshot at 1440px width and save as screenshots/full-page.png -->
<img src="screenshots/full-page.png" alt="Raydz Full Page Desktop" width="100%" style="border-radius:12px;" />

</div>

<br/>

### Section Breakdown

<table>
  <tr>
    <td width="50%">
      <img src="screenshots/hero.png" alt="Hero Section" width="100%"/>
      <p align="center"><strong>01 / Hero</strong><br/><em>Animated floating shoe with glow backdrop</em></p>
    </td>
    <td width="50%">
      <img src="screenshots/features.png" alt="Features Section" width="100%"/>
      <p align="center"><strong>02 / Built Different</strong><br/><em>3-column feature cards with icons</em></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="screenshots/collection.png" alt="Collection Grid" width="100%"/>
      <p align="center"><strong>03 / Shop the Collection</strong><br/><em>Product grid with filter bar & size chips</em></p>
    </td>
    <td width="50%">
      <img src="screenshots/spotlight.png" alt="Spotlight Section" width="100%"/>
      <p align="center"><strong>04 / Spotlight</strong><br/><em>Split layout product deep-dive</em></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="screenshots/newsletter-footer.png" alt="Newsletter & Footer" width="100%"/>
      <p align="center"><strong>05 / Newsletter & Footer</strong><br/><em>Glowing signup card + footer columns</em></p>
    </td>
    <td width="50%">
      <img src="screenshots/mobile.png" alt="Mobile View" width="60%"/>
      <p align="center"><strong>06 / Mobile Responsive</strong><br/><em>375px viewport, stacked layout</em></p>
    </td>
  </tr>
</table>

<br/>

### Product Cards Close-Up

<div align="center">

<img src="screenshots/product-cards.png" alt="Product Cards Detail" width="100%" style="border-radius:12px;" />

<em>Hover states: scale + rotate shoe image, orange glow border, gradient overlay reveal</em>

</div>

<br/>

---

<br/>

## 🎯 Design Process

This project followed a **structured UI/UX design pipeline** entirely within Figma before a single line of code was written.

```
  Research & Moodboard
        |
  Low-Fi Wireframes
        |
  Information Architecture & User Flows
        |
  Design System Setup (Tokens, Components, Variants)
        |
  Hi-Fi Mockups (Desktop + Mobile)
        |
  Micro-Interactions & Prototype Flows
        |
  Developer Handoff & Inspect Mode
        |
  Code Export & Build
```

| Phase | Tool / Method | Deliverable |
|:------|:-------------|:------------|
| Research | Competitor analysis, moodboards | Visual direction document |
| Wireframing | Figma low-fi frames, FigJam | Page structure & layout skeleton |
| UI Design | Figma hi-fi auto layout frames | Pixel-perfect mockups |
| Prototyping | Figma Smart Animate + Overlays | Interactive clickable prototype |
| Handoff | Figma Dev Mode + Inspect | CSS specs, assets, spacing tokens |
| Export | Manual code translation + asset export | HTML / CSS / JS production files |

<br/>

---

<br/>

## 🧩 Wireframing & Information Architecture

### Low-Fidelity Wireframes

Every section of the site was first sketched as **low-fidelity wireframes** in Figma using basic rectangles, placeholder text blocks, and grey-scale containers to establish:

- **Visual hierarchy** -- headline sizing, content stacking order
- **Content blocking** -- section-level layout using bounding boxes and frames
- **Spatial rhythm** -- consistent gutters (32px), section padding (100px vertical), and card gaps (28px)
- **Grid system** -- 12-column grid with 60px outer margins on 1440px desktop frame

<!-- OPTIONAL: Add a wireframe screenshot if you have one -->
<!-- <img src="screenshots/wireframe.png" alt="Wireframe" width="100%"/> -->

### Information Architecture

```
Home
 |-- Hero (CTA: Shop Now / Explore)
 |-- Brand Marquee (trust signals)
 |-- Features Grid (value propositions)
 |-- Collection
 |     |-- Filter Bar (All / Low-Top / Suede / Leather / Limited)
 |     |-- Product Cards x6
 |           |-- Image + Badge + Wishlist
 |           |-- Name / Color / Price / Sizes
 |           |-- Add to Cart
 |-- Product Spotlight (deep-dive feature)
 |-- Newsletter Signup
 |-- Footer (nav columns + socials)
```

### User Flows Mapped

| Flow | Entry Point | Steps | End State |
|:-----|:-----------|:------|:----------|
| Browse & Shop | Hero CTA | Hero > Collection > Filter > Card > Add to Cart | Cart updated |
| Product Deep Dive | Spotlight link | Spotlight section > Feature list > Shop CTA | Product page |
| Newsletter Signup | Scroll / Footer | Newsletter section > Enter email > Subscribe | Confirmation |

<br/>

---

<br/>

## 🎨 Design System & Tokens

### Color Palette

The entire palette was defined as **Figma color styles** and mapped to CSS custom properties during export.

| Token Name | Swatch | Hex | Usage |
|:-----------|:------:|:----|:------|
| `--bg` | ![#0a0a0a](https://img.shields.io/badge/-%20-0a0a0a?style=flat-square&color=0a0a0a) | `#0a0a0a` | Page background |
| `--surface` | ![#141414](https://img.shields.io/badge/-%20-141414?style=flat-square&color=141414) | `#141414` | Card backgrounds |
| `--surface2` | ![#1a1a1a](https://img.shields.io/badge/-%20-1a1a1a?style=flat-square&color=1a1a1a) | `#1a1a1a` | Elevated surfaces |
| `--border` | ![#2a2a2a](https://img.shields.io/badge/-%20-2a2a2a?style=flat-square&color=2a2a2a) | `#2a2a2a` | Borders & dividers |
| `--text` | ![#ffffff](https://img.shields.io/badge/-%20-ffffff?style=flat-square&color=ffffff) | `#ffffff` | Primary text |
| `--text-secondary` | ![#888888](https://img.shields.io/badge/-%20-888888?style=flat-square&color=888888) | `#888888` | Secondary / muted text |
| `--accent` | ![#ff5e2b](https://img.shields.io/badge/-%20-ff5e2b?style=flat-square&color=ff5e2b) | `#ff5e2b` | CTAs, badges, highlights |
| `--accent-glow` | ![#ff5e2b](https://img.shields.io/badge/-%20-ff5e2b4d?style=flat-square&color=ff5e2b) | `rgba(255,94,43,0.3)` | Glow effects / shadows |
| `--warm` | ![#c4956a](https://img.shields.io/badge/-%20-c4956a?style=flat-square&color=c4956a) | `#c4956a` | Warm accent tones |

<br/>

<div align="center">

```
  #0a0a0a    #141414    #1a1a1a    #2a2a2a    #888888    #ffffff    #ff5e2b    #c4956a
  ███████    ███████    ███████    ███████    ███████    ███████    ███████    ███████
   bg        surface    surface2   border     muted      text       accent     warm
```

</div>

### Typography Scale

All type styles were created as **Figma text styles** with auto-layout constraints.

| Style Name | Font | Weight | Size | Tracking | Usage |
|:-----------|:-----|:-------|:-----|:---------|:------|
| `Display/Hero` | Space Grotesk | 800 | 88px | -2px | Hero headline |
| `Heading/Section` | Space Grotesk | 700 | 52px | -1px | Section titles |
| `Heading/Card` | Space Grotesk | 600 | 20px | 0 | Card headings |
| `Body/Regular` | Inter | 400 | 16px | 0 | Paragraph text |
| `Label/Tag` | Inter | 600 | 11px | 3px | Section tags, uppercase |
| `Label/Button` | Inter | 600 | 13px | 1.5px | Button labels, uppercase |
| `Label/Filter` | Inter | 600 | 12px | 1px | Filter chips, uppercase |
| `Price/Large` | Space Grotesk | 700 | 22px | 0 | Product pricing |

### Spacing & Layout Tokens

| Token | Value | Application |
|:------|:------|:-----------|
| `spacing-xs` | `8px` | Inner padding for tags |
| `spacing-sm` | `12px` | Gap between filter chips |
| `spacing-md` | `16px` | Vertical text spacing |
| `spacing-lg` | `28px` | Product grid gap |
| `spacing-xl` | `48px` | Section inner padding |
| `spacing-2xl` | `60px` | Page outer margin |
| `spacing-section` | `100px` | Vertical section padding |
| `radius-sm` | `6px` | Size chips |
| `radius-md` | `12px` | Add-to-cart buttons |
| `radius-lg` | `20px` | Cards |
| `radius-xl` | `24px` | Spotlight image wrapper |
| `radius-full` | `50px` | Pills, CTAs, inputs |

<br/>

---

<br/>

## 🧱 Component Architecture

All UI elements were built as **reusable Figma components** with variants and auto-layout, ensuring 1:1 mapping to code.

### Component Inventory

```
Components/
 |
 |-- Navigation/
 |     |-- Navbar (scrolled: default / compact)
 |     |-- NavLink (state: default / hover / active)
 |     |-- Logo
 |     |-- CartButton
 |
 |-- Buttons/
 |     |-- ButtonPrimary (size: md / lg)
 |     |-- ButtonOutline (size: md / lg)
 |     |-- ButtonIcon (variant: cart / wishlist)
 |     |-- FilterChip (state: default / active)
 |
 |-- Cards/
 |     |-- ProductCard
 |     |     |-- ImageWrapper (badge: none / new / hot / limited)
 |     |     |-- ProductInfo
 |     |     |-- SizeChipRow
 |     |     |-- WishlistButton (state: default / liked)
 |     |
 |     |-- FeatureCard (icon + title + description)
 |
 |-- Sections/
 |     |-- HeroSection (with stat counters)
 |     |-- MarqueeBand
 |     |-- SectionHeader (tag + title + subtitle)
 |     |-- SpotlightSplit (image + text + checklist)
 |     |-- NewsletterCard
 |
 |-- Footer/
       |-- FooterColumn (title + link list)
       |-- SocialIcon (platform: ig / x / tiktok / yt)
```

### Auto-Layout Rules

| Component | Direction | Gap | Padding | Alignment |
|:----------|:---------|:----|:--------|:----------|
| Navbar | Horizontal | Space Between | 20px 60px | Center |
| ProductCard | Vertical | 0 | 0 | Stretch |
| ProductInfo | Vertical | 4px | 24px | Left |
| SizeChipRow | Horizontal | 6px | 16px top | Left |
| FilterBar | Horizontal | 12px | 0 | Center |
| FeatureCard | Vertical | 12px | 48px 36px | Center |
| FooterGrid | Horizontal (4-col) | 60px | 80px 60px | Top |

<br/>

---

<br/>

## 🎬 Prototyping & Interactions

All interactions were designed using **Figma's prototyping tools** -- Smart Animate, overlays, and scroll behaviors -- before being translated into CSS/JS.

### Interaction Map

| Element | Trigger | Figma Prototype Action | CSS/JS Translation |
|:--------|:--------|:----------------------|:-------------------|
| Hero Shoe | Auto | Smart Animate (Y position loop) | `@keyframes float` -- translateY oscillation |
| Hero Glow | Auto | Opacity + scale pulse | `@keyframes pulseGlow` -- opacity + scale |
| Navbar | On Scroll | Variant swap (default > compact) | `.scrolled` class toggle via JS `scroll` event |
| Product Card | Hover | Smart Animate scale + border glow | `:hover` transform + box-shadow transition |
| Product Image | Hover | Smart Animate scale + rotate | `:hover .product-img` scale(1.08) rotate(-5deg) |
| Card Glow | Hover | Overlay gradient opacity 0 > 1 | `::before` pseudo-element opacity transition |
| Wishlist Icon | Click | Variant swap (empty > filled) | JS toggle innerHTML + color change |
| Filter Chips | Click | Variant swap (default > active) | `.active` class swap via JS |
| Marquee Band | Auto | Horizontal scroll animation | `@keyframes scroll` infinite translateX |
| Dot Blink | Auto | Smart Animate opacity loop | `@keyframes blink` opacity oscillation |
| Fade-Up | On Scroll | Scroll-triggered entrance | `IntersectionObserver` + `.visible` class |
| Nav Links | Hover | Underline width animate | `::after` width 0 > 100% transition |
| CTA Buttons | Hover | Elevation + glow increase | translateY(-3px) + box-shadow transition |
| Add to Cart | Hover | Shape morph (rounded-rect > circle) | border-radius + scale transition |

### Scroll-Based Animations

Scroll-triggered **fade-up entrances** were prototyped in Figma as scroll-position variant swaps, then implemented using the `IntersectionObserver` API:

```
Hidden State:  opacity: 0, translateY(40px)
Visible State: opacity: 1, translateY(0)
Easing:        cubic-bezier(0.16, 1, 0.3, 1)
Duration:      800ms
Trigger:       10% element visibility in viewport
```

<br/>

---

<br/>

## 🚀 Figma to Code Export

### Export Pipeline

The translation from Figma design to production code followed a **structured handoff workflow**:

```
  FIGMA DESIGN FILE
        |
        |--- [1] Dev Mode Inspection
        |         Extract spacing, sizes, colors, typography
        |
        |--- [2] Asset Export
        |         Product images: WebP (optimized, 2x)
        |         Icons: Inline SVG from Figma vectors
        |
        |--- [3] Design Tokens > CSS Variables
        |         Color styles   -->  :root { --bg, --accent, ... }
        |         Text styles    -->  font-family, font-size, weight
        |         Spacing tokens -->  padding, gap, margin values
        |         Radius tokens  -->  border-radius values
        |
        |--- [4] Component > HTML Structure
        |         Auto-layout direction --> flexbox / grid
        |         Nesting hierarchy     --> semantic HTML
        |         Variant states        --> CSS pseudo-classes
        |
        |--- [5] Prototype > CSS Animations + JS
        |         Smart Animate   --> CSS @keyframes / transitions
        |         Scroll triggers --> IntersectionObserver
        |         Click actions   --> JS event listeners
        |
        |--- [6] Responsive Variants > Media Queries
                  Desktop (1440px)  --> default layout
                  Tablet  (1024px)  --> single-column hero, stacked grids
                  Mobile  (640px)   --> full-width cards, stacked forms
```

### How Each Figma Feature Maps to Code

| Figma Feature | Code Equivalent |
|:-------------|:----------------|
| **Frames & Auto Layout** | `display: flex` / `display: grid` with gap |
| **Constraints & Resizing** | `max-width`, `clamp()`, responsive units |
| **Color Styles** | CSS custom properties (`:root` variables) |
| **Text Styles** | Font-family, size, weight, letter-spacing rules |
| **Component Variants** | CSS classes + `:hover` / `:focus` / `.active` states |
| **Smart Animate** | CSS `transition` + `@keyframes` animations |
| **Scroll Prototype** | `IntersectionObserver` API for scroll-triggered effects |
| **Overlay Transitions** | CSS `::before` / `::after` pseudo-elements with opacity |
| **Boolean Properties** | JavaScript toggle handlers (e.g., wishlist state) |
| **Instance Swap** | Conditional CSS classes applied via JS |
| **Figma Gradients** | CSS `linear-gradient()` / `radial-gradient()` |
| **Blur Effects** | CSS `backdrop-filter: blur()` / `filter: blur()` |
| **Drop Shadows** | CSS `filter: drop-shadow()` / `box-shadow` |
| **Asset Export (2x PNG/WebP)** | `<img>` tags with optimized product photography |
| **Vector Icons** | Inline `<svg>` elements extracted from Figma |

<br/>

---

<br/>

## 🛠 Tech Stack

| Layer | Technology |
|:------|:----------|
| Design | Figma (wireframes, design system, prototyping) |
| Markup | HTML5 (semantic structure) |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Interaction | Vanilla JavaScript (observers, event handling) |
| Fonts | Google Fonts -- Space Grotesk + Inter |
| Images | WebP + PNG (exported from Figma at 2x) |

> **Zero dependencies.** No frameworks, no libraries, no build tools. Pure HTML + CSS + JS -- exactly as designed in Figma.

<br/>

---

<br/>

## 📄 Pages & Sections

| # | Section | Preview | Description |
|:--|:--------|:--------|:-----------|
| 1 | **Navbar** | <img src="screenshots/hero.png" width="200"/> | Fixed glassmorphism nav with logo, links, icons, cart badge |
| 2 | **Hero** | <img src="screenshots/hero.png" width="200"/> | Split layout -- animated headline + floating shoe with glow |
| 3 | **Marquee** | -- | Infinite horizontal scroll ticker with brand keywords |
| 4 | **Features** | <img src="screenshots/features.png" width="200"/> | 3-column card grid with icons highlighting brand values |
| 5 | **Collection** | <img src="screenshots/collection.png" width="200"/> | Filter bar + 6 interactive product cards with sizes & pricing |
| 6 | **Spotlight** | <img src="screenshots/spotlight.png" width="200"/> | Gradient-bordered image + feature checklist deep dive |
| 7 | **Newsletter** | <img src="screenshots/newsletter-footer.png" width="200"/> | Glowing signup card with email input and CTA |
| 8 | **Footer** | <img src="screenshots/newsletter-footer.png" width="200"/> | 4-column layout with brand info, links, and socials |

<br/>

---

<br/>

## 📱 Responsive Design

Figma **responsive variants** were created for three breakpoints, then exported as CSS media queries.

<div align="center">
<table>
  <tr>
    <td align="center" width="33%">
      <img src="screenshots/hero.png" alt="Desktop" width="100%"/>
      <br/><strong>Desktop</strong><br/>1440px -- 2-column grid
    </td>
    <td align="center" width="33%">
      <img src="screenshots/tablet.png" alt="Tablet" width="100%"/>
      <br/><strong>Tablet</strong><br/>1024px -- stacked hero
    </td>
    <td align="center" width="33%">
      <img src="screenshots/mobile.png" alt="Mobile" width="60%"/>
      <br/><strong>Mobile</strong><br/>375px -- full-width cards
    </td>
  </tr>
</table>
</div>

| Breakpoint | Frame Width | Layout Changes |
|:-----------|:-----------|:---------------|
| Desktop | 1440px | 2-column hero, 3-column product grid, 4-column footer |
| Tablet | 1024px | Single-column hero, stacked feature cards, 2-column footer |
| Mobile | 640px | Full-width product cards, stacked newsletter form, single-column footer |

<br/>

---

<br/>

## 📁 File Structure

```
raydz/
 |
 |-- index.html                  # Main website (single page)
 |-- server.js                   # Local dev server (Node.js)
 |-- README.md                   # Project documentation
 |
 |-- screenshots/                # README preview images
 |     |-- hero.png              # Hero section screenshot
 |     |-- features.png          # Built Different section
 |     |-- collection.png        # Product grid section
 |     |-- product-cards.png     # Product cards close-up
 |     |-- spotlight.png         # Spotlight section
 |     |-- newsletter-footer.png # Newsletter + footer
 |     |-- full-page.png         # Full-page desktop view
 |     |-- mobile.png            # Mobile responsive view
 |     |-- tablet.png            # Tablet responsive view
 |
 |-- Figma Etcetra/              # Exported assets from Figma
       |-- 1.webp                # Raydz Arctic (White/Beige)
       |-- 2.webp                # Raydz Mocha (Brown/Cream)
       |-- 3.webp                # Raydz Militia (Olive/Gum)
       |-- 5.webp                # Raydz Dune (Tan/Suede)
       |-- 8.webp                # Raydz Shadow (Charcoal/Grey)
       |-- 9.webp                # Raydz Phantom (Black/White)
```

<br/>

---

<br/>

## 🏁 Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/raydz.git

# Navigate to project
cd raydz

# Start local server
node server.js

# Open in browser
# http://localhost:3456
```

<br/>

---

<br/>

## 🖼 Adding Screenshots

To make the images visible in this README, save your screenshots to the `screenshots/` folder with these exact names:

| File Name | What to Capture |
|:----------|:---------------|
| `hero.png` | Hero section at 1440px (top of page) |
| `features.png` | "Built Different" feature cards section |
| `collection.png` | Product grid with all 6 shoe cards |
| `product-cards.png` | Close-up of product cards (zoom into grid) |
| `spotlight.png` | Mocha spotlight split section |
| `newsletter-footer.png` | Newsletter card + footer |
| `full-page.png` | Full scrolling page capture (use browser extension) |
| `mobile.png` | Mobile view at 375px width |
| `tablet.png` | Tablet view at 1024px width |

> **Tip:** Use a browser extension like **GoFullPage** or **Awesome Screenshot** to capture the full scrolling page as a single image.

<br/>

---

<br/>

<div align="center">

### Built with precision in Figma. Exported with intent into code.

**RAYDZ** -- Designed by hand. Worn by the bold.

<br/>

![Figma](https://img.shields.io/badge/figma-a259ff.svg?style=for-the-badge&logo=figma&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

</div>
