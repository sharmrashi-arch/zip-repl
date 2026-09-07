# SEO Checklist — Anjali Kids Play School

> Website: React SPA (Wouter routing) — `artifacts/anjali-kids-school/`
> Pages: `/` (Home), `/about`, `/programs`, `/teachers`, `/gallery`, `/admissions`

---

## 🔴 Critical — Pehle yeh karo

| # | Task | Status | Notes |
|---|------|--------|-------|
| 1 | **Per-page dynamic meta tags** — abhi `index.html` mein sirf ek title/description hai, sab pages par same dikhega. React-helmet ya `document.title` + `useEffect` se har page ka alag `<title>`, `<meta name="description">`, `<meta property="og:title">`, `<meta property="og:description">` set karo | ❌ Missing | `index.html:6-7` |
| 2 | **SSR / SSG setup** — React SPA client-side render hota hai, Google ko theek se index nahi karta. Options: Next.js migration, Vite SSR, ya `prerender.io` / `vite-plugin-prerender` | ❌ Missing | Sabse bada ranking blocker |
| 3 | **sitemap.xml** — bana kar Vercel root (`public/`) mein rakho; `/`, `/about`, `/programs`, `/teachers`, `/gallery`, `/admissions` sab URLs include hone chahiye | ❌ Missing | |
| 4 | **robots.txt** — bana kar Vercel root mein rakho; Googlebot ko index allow karo, admin/private paths block karo | ❌ Missing | |
| 5 | **Favicon full set** — abhi sirf `favicon.png` / `favicon.svg` hai. `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` banao | ⚠️ Partial | `index.html:15-17` |

## 🟡 Important — Ranking improve

| # | Task | Status | Notes |
|---|------|--------|-------|
| 6 | **Local SEO / Google My Business** — GMB listing banao, NAP (Name, Address, Phone) website par consistent, `<address>` tag mein pata | ❌ Missing | Pundri, Kaithal, Haryana keywords |
| 7 | **Schema.org structured data** — `LocalBusiness` + `School` JSON-LD `<script type="application/ld+json">` lagao (index.html ya page components mein) | ❌ Missing | `@type: "School"` / `"LocalBusiness"` |
| 8 | **Image alt tags** — har `<img>` mein descriptive alt (e.g. "Anjali Kids Play School classroom activity") | ⚠️ Check karo | Gallery/Hero/About kuch alt generic hain |
| 9 | **Clean URLs** — `/about`, `/programs` already clean | ✅ Done | |
| 10 | **Page speed** — images WebP mein convert karo, `loading="lazy"` lagao, responsive sizes | ⚠️ Check karo | |
| 11 | **Mobile responsive** — Tailwind se responsive hai, lekin `maximum-scale=1` (index.html) zoom rokta hai → hatao | ⚠️ Fix karo | `index.html:5` |
| 12 | **Internal linking** — pages aapas mein link karo (e.g. Programs → Admissions, Home → Gallery) | ⚠️ Check karo | |
| 13 | **og:image** — Open Graph image set karo (school logo ya hero image) — social share par accha dikhega | ❌ Missing | |
| 14 | **Canonical URLs** — har page par `<link rel="canonical">` duplicate content prevent karega | ❌ Missing | |
| 15 | **Heading hierarchy** — ek page par sirf ek `<h1>`, phir H2 → H3 properly | ⚠️ Check karo | |
| 16 | **Inter font hatao** — `index.html` mein Inter load hota hai lekin use nahi hota (Quicksand/Outfit use hote hain) — extra load time | ❌ Fix karo | `index.html:18-20` |

## 🟢 Nice to Have — Boost karega

| # | Task | Status | Notes |
|---|------|--------|-------|
| 17 | **Google Analytics / Search Console** — `G-XXXXXXX` tag + site verify | ❌ Missing | |
| 18 | **Blog section** — school events/activities posts (fresh content) | ❌ Missing | |
| 19 | **Social media links** — Footer mein Facebook, Instagram, YouTube | ⚠️ Check karo | |
| 20 | **404 page noindex** — not-found.tsx par `<meta name="robots" content="noindex">` | ❌ Missing | |
| 21 | **Keyword optimization** — "play school Pundri", "best nursery Kaithal", "preschool Haryana" jaise local keywords content mein | ⚠️ Check karo | |

---

## Quick Priority Plan

1. Per-page meta tags (react-helmet) → 70% fix
2. sitemap.xml + robots.txt
3. Local SEO (GMB + NAP + Schema.org)

*Is file ko pages ya tasks complete karte waqt update karte jaao.*
