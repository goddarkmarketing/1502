# High-End Editorial Design System

## 1. Overview & Creative North Star: "The Curated Canvas"
This design system is built to transcend the "template" aesthetic that plagues modern landing pages. Our Creative North Star is **The Curated Canvas**—an approach that treats digital interfaces like high-end editorial spreads. 

Instead of rigid, boxed-in layouts, we utilize intentional asymmetry, overlapping elements, and extreme tonal depth to guide the user’s eye. Whether designing for a Luxury Real Estate firm or a high-growth SaaS, the system relies on sophisticated negative space and a "type-first" hierarchy to establish authority and trust. This is not just a UI kit; it is a framework for building production-ready, premium digital experiences that feel custom-authored for each brand.

---

## 2. Colors & Tonal Architecture
The power of this system lies in its ability to adapt. While each business vertical uses a specific palette, the underlying **Tonal Architecture** remains constant.

### The Business Palettes
*   **Real Estate:** `primary` (Blue) & `tertiary` (Gold) — *Sophisticated & Established.*
*   **E-commerce / SaaS / Pharmacy:** `secondary` (Green) & `surface` (White) — *Fresh & Vital.*
*   **LMS / Insurance:** `primary_fixed` (Light Blue) & `primary` (Dark Blue) — *Academic & Secure.*
*   **Car Rental:** `primary` (Black) & `error` (Red) — *High-Performance & Bold.*
*   **Restaurant:** `tertiary_container` (Brown) & `surface_container_lowest` (Cream) — *Warm & Artisanal.*
*   **Creative Agency:** `primary` (Black) & `surface` (White) — *Minimalist & Avant-Garde.*

### The "No-Line" Rule
To achieve a premium feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined through:
*   **Background Shifts:** Use a `surface-container-low` section sitting on a `surface` background.
*   **Tonal Transitions:** Moving from `surface-container` to `surface-container-high` to define importance.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the surface tiers to create depth:
1.  **Base:** `surface` (#f8f9ff)
2.  **Sectioning:** `surface-container-low` (#eff4ff)
3.  **Components/Cards:** `surface-container-lowest` (#ffffff) for maximum "lift."
4.  **Floating Elements:** Use Glassmorphism (Semi-transparent `surface` with `backdrop-blur: 20px`) for navigation bars and modal overlays.

### Signature Textures
Avoid flat, dead colors. Use subtle gradients for main CTAs and Hero backgrounds, transitioning from `primary` to `primary_container`. This adds a "visual soul" that makes the site feel alive and professionally polished.

---

## 3. Typography: Editorial Authority
The typography scale is designed to support both English and Thai characters with equal elegance, ensuring the vertical metrics of Thai script do not break the layout.

*   **Display (Plus Jakarta Sans):** Used for Hero headlines. At `3.5rem` (`display-lg`), it commands attention. Use tight letter-spacing (-0.02em) for a high-end fashion/editorial feel.
*   **Headline (Plus Jakarta Sans):** Used for section headers. These should be bold and clear.
*   **Body (Inter):** The workhorse font. `body-lg` (16px) is our standard for readability. It provides a technical, clean contrast to the more organic Jakarta Sans.
*   **Labels (Inter):** Small, all-caps or high-weight styles for navigation and tags, ensuring even the smallest detail feels intentional.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to hide poor layout; we use them to mimic natural light.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-high` background creates a natural, soft lift without a single line of CSS shadow.
*   **Ambient Shadows:** For floating CTAs, use extra-diffused shadows. 
    *   *Value:* `0px 20px 40px rgba(11, 28, 48, 0.06)`
    *   The shadow must be tinted with the `on-surface` color to feel like a natural part of the environment.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` at 15% opacity. Never use 100% opaque borders.

---

## 5. Signature Components

### Hero Sections
*   **Layout:** Overlap the H1 headline over the edge of a high-quality image or a glassmorphic card. 
*   **Composition:** Use the `display-lg` scale and ensure at least 120px of vertical padding to let the brand "breathe."

### Buttons
*   **Primary:** Solid `primary` background with `on_primary` text. Use `rounded-md` (0.375rem) for a modern, sharp look.
*   **Secondary:** Use `secondary_container` with a subtle `primary` gradient overlay for "depth."
*   **Tertiary:** No background. Use `title-sm` typography with a subtle underline that expands on hover.

### Cards (Properties, Products, Courses)
*   **Constraint:** Absolutely no borders.
*   **Styling:** Use `surface-container-lowest` backgrounds. 
*   **Hover State:** Instead of a border, increase the elevation using an Ambient Shadow or shift the background to `surface-bright`.
*   **Spacing:** Use generous internal padding (at least `1.5rem` or `xl` scale) to ensure content never feels "cramped."

### Input Fields
*   **Style:** Minimalist. Use `surface-variant` as the background with no border. 
*   **Active State:** Transition the background to `surface` and add a "Ghost Border" using the `primary` color at 20% opacity.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical grids. For example, a 2-column layout where the image takes 7 columns and the text takes 5.
*   **Do** use "Text-as-Texture." Large, low-opacity display type behind components can add an agency-level flair.
*   **Do** respect the Thai line-height. Ensure `line-height` for body text is at least 1.6 to prevent Thai tone marks from clipping.

### Don't:
*   **Don't** use pure black (#000000) for body text; use `on_surface` (#0b1c30) for a softer, more premium reading experience.
*   **Don't** use "default" shadows. If the shadow looks like a fuzzy grey smudge, it’s too heavy.
*   **Don't** use divider lines between list items. Use vertical white space or a 2% shift in background color.