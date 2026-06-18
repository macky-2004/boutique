# AVIKA Boutique — Production Asset Inventory

This document lists every image file the website references. Place each file at the exact path shown below. Every image is required — no favicons, videos, or unused placeholders.

---

## 1. Global Assets (appear on every page)

### `images/logo.png`

| Field | Detail |
|-------|--------|
| **Used on** | All 9 pages — header navigation bar, top-left corner |
| **Purpose** | Brand wordmark / monogram logo |
| **Style** | Minimal, luxury feel. Dark brown or gold tones. Transparent background preferred. |
| **Orientation** | Landscape (horizontal), roughly 200×60 px |
| **Notes** | Links back to `index.html`. Must be visible on both light and dark sections (the nav bar uses a semi-transparent dark overlay on the hero but becomes white on scroll). A light/dark variant logo or a white version on transparent works best. |

### `images/agency/tym-agency-logo.png`

| Field | Detail |
|-------|--------|
| **Used on** | All 9 pages — footer bottom bar, beside the "Crafted by" text |
| **Purpose** | "The Youth Mint" agency branding credit |
| **Style** | Small agency mark or wordmark. Should sit inline with text. |
| **Orientation** | Landscape, roughly 100×30 px |
| **Notes** | Appears inside a dark footer background with white/light text. Logo must be visible on dark backgrounds — a white or light version is recommended. |

---

## 2. Homepage (index.html)

### `images/hero-banner.png`

| Field | Detail |
|-------|--------|
| **Used on** | `index.html` — full-screen hero section |
| **Purpose** | First visual visitors see. Sets the entire brand tone. |
| **Style** | A model wearing a premium Indian outfit (lehenga or saree) in a luxurious setting — palace interior, floral mandap, heritage archway, or elegant studio. Warm, golden-hour lighting. Rich colours. |
| **Orientation** | Landscape, high resolution (2400×1600 px or larger) |
| **Notes** | Displayed as an `<img>` tag covering the full viewport. A dark gradient overlay is applied on top for text readability. Ensure the centre area (where text "Timeless Elegance" sits) is relatively clear of busy detail. |

### `images/about-image.png`

| Field | Detail |
|-------|--------|
| **Used on** | `index.html` — "Our Story" preview section (between category cards and testimonials) |
| **Purpose** | Visual teaser for the About page. Should evoke craftsmanship, heritage, or the atelier experience. |
| **Style** | Atelier workspace, artisan embroidering, fabric close-up, or a beautifully styled boutique corner. Warm, soft lighting. |
| **Orientation** | Portrait, roughly 600×750 px |
| **Notes** | Sits beside a text block. The section has a cream/off-white background. Image should feel editorial, not product-catalogue. |

---

## 3. About Page (about.html)

### `images/about-us.png`

| Field | Detail |
|-------|--------|
| **Used on** | `about.html` — twice: once as the page banner (full-width top), once in the story section alongside text |
| **Purpose** | Banner: establishes the page atmosphere. Story section: shows the boutique interior or the team at work. |
| **Style** | Wide shot of the boutique interior, a founder/artisan at work, or a beautiful rack of outfits. Warm, airy, premium. |
| **Orientation** | Landscape for the banner (2000×1200 px). The story section uses the same image cropped smaller — so choose a shot that works both as a wide hero and as a tighter crop. |
| **Notes** | The same file is used in two places. The banner is full-width with a dark overlay for text. The story section shows it inside a bordered frame with no overlay. Choose an image that looks good both full-bleed with overlay and inside a framed card. |

### `images/team/founder.png`

| Field | Detail |
|-------|--------|
| **Used on** | `about.html` — "Meet the Founder" section |
| **Purpose** | Founder/creative director portrait. Builds personal connection and trust. |
| **Style** | Professional headshot or three-quarter portrait. Warm smile, graceful expression. Soft, natural lighting. |
| **Orientation** | Square, roughly 600×600 px |
| **Notes** | Rendered as a circle (border-radius: 50%) at 180×180 px on the page. Face should be centred and well-framed. Background should be clean and unobtrusive. |

---

## 4. Contact Page (contact.html)

### `images/contact/contact-banner.png`

| Field | Detail |
|-------|--------|
| **Used on** | `contact.html` — page hero banner |
| **Purpose** | Sets the visual tone for the contact page. Should feel inviting and premium. |
| **Style** | Boutique exterior, atelier entrance, a beautifully styled storefront, or an elegant lifestyle still. |
| **Orientation** | Landscape, 2000×1200 px |
| **Notes** | Full-width banner with a dark overlay for the page title. |

---

## 5. Category Thumbnails (shared across 3 pages each)

These five images are the most heavily reused assets. Each one appears on **three pages**: the homepage category grid (`index.html`), the collections listing page (`categories.html`), and the category's own page hero.

### `images/categories/lehenga.png`

| Field | Detail |
|-------|--------|
| **Used on** | `index.html` (category card), `categories.html` (banner + card), `lehengas.html` (page hero) |
| **Purpose** | Represents the Lehengas collection. Must be instantly recognisable as a lehenga. |
| **Style** | Full lehenga outfit on a model or mannequin — front-facing. Rich embroidery, vibrant colours. |
| **Orientation** | Portrait, 1200×1600 px |
| **Notes** | On `categories.html` this image is reused as the page banner (zoomed/cropped) and as a grid card. Needs enough negative space at the top-centre for text overlay (the banner has a gradient overlay with the category title). |

### `images/categories/saree.png`

| Field | Detail |
|-------|--------|
| **Used on** | `index.html`, `categories.html`, `sarees.html` |
| **Purpose** | Represents the Sarees collection. Fabric texture and pallu details should be visible. |
| **Style** | Saree draped on a model or mannequin. Focus on the pallu, border, and fabric sheen. Light or neutral background. |
| **Orientation** | Portrait, 1200×1600 px |
| **Notes** | Same multi-use constraints as lehenga.png — needs clear space at top for text overlay when used as a banner. |

### `images/categories/gown.png`

| Field | Detail |
|-------|--------|
| **Used on** | `index.html`, `categories.html`, `gowns.html` |
| **Purpose** | Represents the Gowns collection. Floor-length, Indo-Western or fusion gown. |
| **Style** | Full-length gown on a model or mannequin. Elegant silhouette. Luxury fabric (velvet, silk, tulle). |
| **Orientation** | Portrait, 1200×1600 px |
| **Notes** | Same multi-use constraints. Top-centre negative space for text overlay. |

### `images/categories/indo-western.png`

| Field | Detail |
|-------|--------|
| **Used on** | `index.html`, `categories.html`, `indo-western.html` |
| **Purpose** | Represents the Indo-Western collection. Modern fusion outfit. |
| **Style** | Sharara, dhoti pants with kurta, crop jacket set, asymmetric drape, or saree-gown fusion. Contemporary, editorial aesthetic. |
| **Orientation** | Portrait, 1200×1600 px |
| **Notes** | Same multi-use constraints. Should look distinctly modern compared to the other categories. |

### `images/categories/bridal.png`

| Field | Detail |
|-------|--------|
| **Used on** | `index.html`, `categories.html`, `bridal.html` |
| **Purpose** | Represents the Bridal collection. The most opulent category. |
| **Style** | Heavily embellished bridal lehenga or ensemble. Red, pastel, or gold tones. Rich, royal, luxurious. |
| **Orientation** | Portrait, 1200×1600 px |
| **Notes** | Same multi-use constraints. This is the flagship category — the image should feel the most premium. |

---

## 6. Collection Item Images (40 images total)

Each category page displays a grid of 8 outfit images with text labels. Every image should show a distinct design. Use real product shots of actual outfits.

| Folder | Items | Used on |
|--------|-------|---------|
| `images/lehengas/` | `item-1.png` through `item-8.png` | `lehengas.html` |
| `images/sarees/` | `item-1.png` through `item-8.png` | `sarees.html` |
| `images/gowns/` | `item-1.png` through `item-8.png` | `gowns.html` |
| `images/indo-western/` | `item-1.png` through `item-8.png` | `indo-western.html` |
| `images/bridal/` | `item-1.png` through `item-8.png` | `bridal.html` |

### Common specifications for all collection items

| Field | Detail |
|-------|--------|
| **Style** | Outfit on a mannequin (preferred) or model. Front-facing or three-quarter view. Clean, uncluttered background (white, cream, or soft grey). |
| **Orientation** | Portrait, 800×1000 px minimum. Consistent aspect ratio across all 40 images. |
| **Notes** | Grid items have rounded corners (12 px) and a soft shadow. Images should be well-lit with accurate colour reproduction. Avoid busy backgrounds that distract from the outfit. |

### `images/lehengas/` — item labels (displayed on the page)

| File | Display Label |
|------|---------------|
| `item-1.png` | Royal Blue Kanjeevaram Fusion |
| `item-2.png` | Pastel Pink Chikankari |
| `item-3.png` | Emerald Green Velvet |
| `item-4.png` | Mustard Yellow Banarasi |
| `item-5.png` | Mint Green Floral |
| `item-6.png` | Crimson Red Bandhani |
| `item-7.png` | Cream & Gold Kasavu-Style |
| `item-8.png` | Black Georgette Fusion |

### `images/sarees/` — item labels

| File | Display Label |
|------|---------------|
| `item-1.png` | Royal Blue Kanjeevaram |
| `item-2.png` | Emerald Green Banarasi |
| `item-3.png` | Crimson Red Patola |
| `item-4.png` | Mustard Yellow Mysore Silk |
| `item-5.png` | Black Chikankari |
| `item-6.png` | Maroon Chanderi Saree |
| `item-7.png` | Cream and Gold Kasavu |
| `item-8.png` | Teal Blue Ajrakh Print |

### `images/gowns/` — item labels

| File | Display Label |
|------|---------------|
| `item-1.png` | Crimson Velvet |
| `item-2.png` | Dewdrop Tulle |
| `item-3.png` | Gold Leaf Mermaid |
| `item-4.png` | Midnight Satin |
| `item-5.png` | Blush Organza |
| `item-6.png` | Ivory Lace |
| `item-7.png` | Jade Silk |
| `item-8.png` | Starlight Beaded |

### `images/indo-western/` — item labels

| File | Display Label |
|------|---------------|
| `item-1.png` | Sharara with Jacket |
| `item-2.png` | Asymmetric Cape |
| `item-3.png` | Dhoti Pants Set |
| `item-4.png` | Crop Top Lehenga |
| `item-5.png` | Saree Gown Fusion |
| `item-6.png` | Palazzo Set |
| `item-7.png` | Jacket Dress |
| `item-8.png` | Pant Saree |

### `images/bridal/` — item labels

| File | Display Label |
|------|---------------|
| `item-1.png` | Traditional Red (Heavy Zardosi) |
| `item-2.png` | Pastel Dream (Sea-foam/Silver) |
| `item-3.png` | Royal Reception (Wine Velvet) |
| `item-4.png` | Rose Gold Lehenga (Contemporary) |
| `item-5.png` | Classic Red Kanjeevaram (Mandapam) |
| `item-6.png` | Modern Muhurtham (Pastel Blue) |
| `item-7.png` | Regal Green & Gold (Reception) |
| `item-8.png` | Traditional Kerala Kasavu (Minimalist) |

---

## 7. Complete Folder Structure

```
images/
├── logo.png
├── hero-banner.png
├── about-image.png
├── about-us.png
├── agency/
│   └── tym-agency-logo.png
├── categories/
│   ├── lehenga.png
│   ├── saree.png
│   ├── gown.png
│   ├── indo-western.png
│   └── bridal.png
├── lehengas/
│   ├── item-1.png      # Royal Blue Kanjeevaram Fusion
│   ├── item-2.png      # Pastel Pink Chikankari
│   ├── item-3.png      # Emerald Green Velvet
│   ├── item-4.png      # Mustard Yellow Banarasi
│   ├── item-5.png      # Mint Green Floral
│   ├── item-6.png      # Crimson Red Bandhani
│   ├── item-7.png      # Cream & Gold Kasavu-Style
│   └── item-8.png      # Black Georgette Fusion
├── sarees/
│   ├── item-1.png      # Royal Blue Kanjeevaram
│   ├── item-2.png      # Emerald Green Banarasi
│   ├── item-3.png      # Crimson Red Patola
│   ├── item-4.png      # Mustard Yellow Mysore Silk
│   ├── item-5.png      # Black Chikankari
│   ├── item-6.png      # Maroon Chanderi Saree
│   ├── item-7.png      # Cream and Gold Kasavu
│   └── item-8.png      # Teal Blue Ajrakh Print
├── gowns/
│   ├── item-1.png      # Crimson Velvet
│   ├── item-2.png      # Dewdrop Tulle
│   ├── item-3.png      # Gold Leaf Mermaid
│   ├── item-4.png      # Midnight Satin
│   ├── item-5.png      # Blush Organza
│   ├── item-6.png      # Ivory Lace
│   ├── item-7.png      # Jade Silk
│   └── item-8.png      # Starlight Beaded
├── indo-western/
│   ├── item-1.png      # Sharara with Jacket
│   ├── item-2.png      # Asymmetric Cape
│   ├── item-3.png      # Dhoti Pants Set
│   ├── item-4.png      # Crop Top Lehenga
│   ├── item-5.png      # Saree Gown Fusion
│   ├── item-6.png      # Palazzo Set
│   ├── item-7.png      # Jacket Dress
│   └── item-8.png      # Pant Saree
├── bridal/
│   ├── item-1.png      # Traditional Red (Heavy Zardosi)
│   ├── item-2.png      # Pastel Dream (Sea-foam/Silver)
│   ├── item-3.png      # Royal Reception (Wine Velvet)
│   ├── item-4.png      # Rose Gold Lehenga (Contemporary)
│   ├── item-5.png      # Classic Red Kanjeevaram (Mandapam)
│   ├── item-6.png      # Modern Muhurtham (Pastel Blue)
│   ├── item-7.png      # Regal Green & Gold (Reception)
│   └── item-8.png      # Traditional Kerala Kasavu (Minimalist)
├── contact/
│   └── contact-banner.png
└── team/
    └── founder.png
```

**Total: 52 image files** — every single one is referenced by the website. No more, no less.

---

## 8. Global Style Guidelines

All images should feel cohesive, as if shot by the same photographer in the same light. Follow these rules for every asset:

- **Lighting:** Warm, natural, or soft studio light. No harsh shadows. No underexposed or grainy shots.
- **Colour palette:** Golds, creams, blush, burgundy, deep greens, rich jewel tones. Avoid neon, overly desaturated, or cold-toned images.
- **Background:** Clean and intentional — solid colour, blurred studio backdrop, heritage wall, or outdoor nature setting. Never cluttered or messy.
- **Models:** Expressions should be graceful, elegant, and aspirational. Not overly casual or candid.
- **Consistency:** Maintain the same editing style (contrast, warmth, sharpness) across all 52 images for a cohesive brand look.
