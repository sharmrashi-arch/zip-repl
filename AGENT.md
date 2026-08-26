# AGENT.md — Zip-Repl Project Guide (Agents ke liye)

> **Yeh file kiske liye hai:** Har naya agent (ya naya session) pehle yeh file poora padhe. Isme project ki har detail hai — kya hai, kaise chalta hai, kahaan kya hai, kya problems hain, aur kaun se tasks pending hain.
>
> **Rule:** Kaam karte waqt agar kuch naya seekho, kuch todo bache, ya kuch badle — toh is file ko update karo. Yeh file hi is project ki "memory" hai.

---

## 1. Project Kya Hai? (Overview)

**Anjali Kids Play School** — Pundri, Haryana ki ek play school ki poori website (Est. 2018).

- **Frontend:** React website — Home, About, Programs, Teachers, Gallery, Admissions form
- **Backend:** Express API server — AI chatbot + admission emails
- **Main Feature:** 🤖 **AI Chatbot** (floating orange button) — mic se bol kar poochho, bot bol kar jawab deta hai, har word orange highlight hota hai jaise-jaise bole (karaoke effect). Hindi + English dono samajhta hai aur usi language mein reply karta hai jo user ne poochha.
- **Email Flow:** Admission form submit hone par Resend API se email jaata hai `sharmaaaarashi@gmail.com` par

**GitHub:** `https://github.com/sharmrashi-arch/zip-repl` (branch: `main`)
**Original platform:** Replit se export hua hai (isliye naam zip-repl)

---

## 2. Tech Stack (Ek Nazar Mein)

| Layer | Tech |
|---|---|
| Monorepo | pnpm workspaces |
| Node | Node.js 20 (`.replit` mein nodejs-20 pinned hai) |
| Frontend | React 18 + Vite + TypeScript |
| Styling | TailwindCSS **v4** (CSS-first config — `src/index.css` mein, koi tailwind.config file NAHI hai) |
| Animation | Framer Motion |
| Routing | Wouter (react-router nahi!) |
| Backend | Node.js + Express 5 |
| AI | Groq API — model: `openai/gpt-oss-20b` |
| Email | Resend API |
| DB | PostgreSQL + Drizzle ORM — **abhi sirf scaffolding hai, use nahi ho raha** |
| Validation | Zod |
| Build | esbuild (backend CJS bundle) |

⚠️ **Note:** README.md purane model `llama-3.1-8b-instant` bolta hai, lekin asli code (`chat.ts`) mein **`openai/gpt-oss-20b`** hai. Code hi sach hai.

---

## 3. Folder Structure (Poori Map)

```
zip-repl/ (root)
├── AGENT.md                      ← yeh file (agents ki memory)
├── README.md                     ← Hinglish docs (thoda outdated hai)
├── replit.md                     ← Replit template — abhi tak bhara nahi, mat padho
├── .env                          ← API keys (GROQ_API_KEY, RESEND_API_KEY, SESSION_SECRET)
├── setup-env.sh                  ← .env dobara banane ka script (Replit secrets se)
├── package.json                  ← root: typecheck/build scripts
├── pnpm-workspace.yaml           ← monorepo config
├── tsconfig.json / tsconfig.base.json
├── .replit                       ← Replit workflows (API: PORT=8080, Frontend: PORT=5173)
│
├── artifacts/
│   ├── anjali-kids-school/       ← 🎨 FRONTEND (React website)
│   ├── api-server/               ← ⚙️ BACKEND (Express API)
│   └── mockup-sandbox/           ← design sandbox (khali hai, use nahi hota)
│
├── lib/                          ← Shared packages
│   ├── api-spec/                 ← OpenAPI source of truth (openapi.yaml + orval.config.ts)
│   ├── api-zod/                  ← Generated Zod schemas (codegen se aata hai)
│   ├── api-client-react/         ← Generated react-query hooks + customFetch (frontend use NAHI karta!)
│   └── db/                       ← Drizzle ORM scaffolding (schema khali hai, kahin import nahi)
│
├── scripts/                      ← helper scripts (hello.ts placeholder, post-merge.sh)
├── attached_assets/              ← School ki photos/logos (~37 images) — alias '@assets'
└── zipFile.zip                   ← 111 MB junk! (Replit export, delete karna chahiye)
```

---

## 4. Frontend Details — `artifacts/anjali-kids-school/`

### Pages (`src/pages/`)
| File | URL | Kya hai |
|------|-----|---------|
| `Home.tsx` | `/` | Hero, Programs, Teachers, Gallery, Testimonials |
| `AboutPage.tsx` | `/about` | School ke baare mein |
| `ProgramsPage.tsx` | `/programs` | Playgroup, Nursery, LKG |
| `TeachersPage.tsx` | `/teachers` | Teachers list |
| `GalleryPage.tsx` | `/gallery` | Photo gallery |
| `AdmissionsPage.tsx` | `/admissions` | Admission form (raw fetch se `/api/admissions` ko POST karta hai) |
| `not-found.tsx` | `*` | 404 page |

### Components (`src/components/`)
- `Navigation.tsx`, `Hero.tsx`, `Programs.tsx`, `Teachers.tsx`, `Gallery.tsx`, `GalleryFull.tsx`
- `About.tsx`, `Admissions.tsx`, `Contact.tsx`, `Testimonials.tsx`, `WhyChooseUs.tsx`, `MapSection.tsx`, `Footer.tsx`
- **⭐ `Chatbot.tsx`** — sabse important component (neeche detail section #6 dekho)
- `ui/` — 50+ reusable shadcn-style components

### Design / Theme
- **Primary color:** Orange `#FF9F1C`, cream background
- **Fonts:** Quicksand (body) + Outfit (headings) — `src/index.css` mein Google Fonts import
- ⚠️ `index.html` mein Inter font load hota hai lekin use NAHI hota — actual fonts CSS se aate hain
- Tailwind v4 CSS-first: theme tokens `src/index.css` ke `@theme` block mein
- Images: `@assets` alias → root ke `attached_assets/` folder (school photos + `generated_images/` mein AI-generated placeholders)

### Main Files
- `src/App.tsx` — Router setup + `<Chatbot />` globally (har page par dikhta hai)
- `src/main.tsx` — entry point
- `src/index.css` — Tailwind + theme + fonts

---

## 5. Backend Details — `artifacts/api-server/`

### Routes (`src/routes/`)
| File | Endpoint | Kya karta hai |
|------|----------|--------------|
| `health.ts` | `GET /api/healthz` | Health check |
| `admissions.ts` | `POST /api/admissions` | Form data → Resend email → `sharmaaaarashi@gmail.com` |
| **`chat.ts`** | **`POST /api/chat`** | 🤖 Groq AI chatbot (detail section #6) |
| `index.ts` | — | Sab routes register |

### Other Files
- `src/index.ts` — server start, dotenv, PORT
- `src/app.ts` — Express app + middleware (cors **fully open** hai)
- `src/lib/logger.ts` — pino logger

### Env Variables (`.env` root par)
```
GROQ_API_KEY=...      ← chatbot ke liye (ZAROORI)
RESEND_API_KEY=...    ← email ke liye (ZAROORI)
SESSION_SECRET=...    ← abhi kahin use nahi ho raha
```
⚠️ `.env` GitHub par committed hai (jaan-boojh kar, taaki Replit import par auto-aaye). Keys change karni ho toh `.env` edit karo.

---

## 6. Chatbot — Sabse Important Feature 🤖

### Brain (Backend): `artifacts/api-server/src/routes/chat.ts`
- **System prompt:** file ke top par `SYSTEM_PROMPT` variable (line ~6) — language rule sabse upar hai: *user jis language mein poochhe (Hindi/English/Hinglish), bot usi mein jawab de*
- **Groq Model:** `openai/gpt-oss-20b`
- **Settings:** `max_tokens: 500`, `temperature: 0.7`
- Last **10 messages** ka history context mein bhejta hai
- Reply plain text mein aata hai

### UI (Frontend): `artifacts/anjali-kids-school/src/components/Chatbot.tsx`
- Floating **orange button**, bottom-right corner, har page par (App.tsx se global)
- **🎤 Mic button** — speech recognition, language `hi-IN` hardcoded
- **🔊 Voice reply** — browser `SpeechSynthesis` se bot bolta hai (default ON)
- **🟠 Karaoke word-highlight** — jaise-jaise bot bole, har word orange light up hota hai (~220ms per word timer se)
- **Language matching** — user Hindi mein poochhe toh reply+voice Hindi mein
- 4 suggested questions (quick chips)
- WhatsApp-style message bubbles
- API call: relative URL `${BASE_URL}api/chat` — dev mein Vite proxy ke through jaati hai

---

## 7. Commands (Kaise Chalana Hai)

```bash
# Install
pnpm install

# Backend chalao (port 8080 ya jo PORT env ho)
pnpm --filter @workspace/api-server run dev

# Frontend chalao (port 5173 ya jo PORT env ho)
pnpm --filter @workspace/anjali-kids-school run dev

# Full typecheck (sab packages)
pnpm run typecheck

# Build sab kuch (typecheck + build)
pnpm run build

# OpenAPI se hooks/schemas regenerate
pnpm --filter @workspace/api-spec run codegen

# DB schema push (dev only — abhi DB use nahi ho raha)
pnpm --filter @workspace/db run push
```

**Verification rule:** Koi bhi code change ke baad `pnpm run typecheck` zaroor chalao. Tests ya linter (prettier ke alawa) repo mein NAHI hain.

---

## 8. Ports & Proxy — ⚠️ SABSE BADA GOTCHA

| Source | API Port | Frontend Port |
|---|---|---|
| `.replit` workflow | **8080** | **5173** |
| `vite.config.ts` fallback (PORT env na ho toh) | — | **3000** |
| `vite.config.ts` proxy target | **5000** ← hardcoded! | — |

**Proxy configuration:** Vite ka `/api` proxy ab default mein API workflow ka `http://localhost:8080` use karta hai. Agar local API kisi aur port par ho, frontend start karte time `VITE_API_PORT` set kar dein.

```bash
# Windows PowerShell (local dev ke liye sahi tareeka):
$env:PORT=8080; pnpm --filter @workspace/api-server run dev
# Dusre terminal mein:
$env:PORT=5173; pnpm --filter @workspace/anjali-kids-school run dev
```

Production (Replit deploy) mein router `/api` path ko API service par map karta hai — wahan ye problem nahi hoti.

---

## 9. Known Issues / Bugs / Debt (Abhi Tak Theek Nahi Hue)

1. **Port mismatch** (upar section #8) — Vite proxy 5000 vs workflow 8080
2. **README.md outdated** — galat model name likha hai (`llama-3.1-8b-instant`), asli model `openai/gpt-oss-20b` hai
3. **DB scaffolding only** — `lib/db` ka schema khali, kahin import nahi; admissions/chat save NAHI hote, sirf email jaata hai
4. **Generated API layer bypassed** — pages raw `fetch()` use karte hain; `lib/api-client-react` ke hooks kahin use nahi
5. **OpenAPI spec incomplete** — `openapi.yaml` mein sirf `/healthz` hai; `/chat` aur `/admissions` missing (isliye unke hooks generate nahi ho sakte)
6. **Mic language hardcoded** `hi-IN` — English UI mein bhi Hindi recognition
7. **Word highlight desync sakta hai** — fixed 220ms/word timer, asli TTS audio length se match nahi hota
8. **Error replies hardcoded Hinglish** — language detect hone par bhi error messages fix hain
9. **Security:** `.env` git mein committed (real keys!), CORS fully open, `/api/chat` aur `/admissions` par koi rate-limit/auth nahi, admission email HTML mein values escape nahi hoti (HTML injection possible)
10. **Unused dependencies:** backend `@getbrevo/brevo`, `cookie-parser`, `drizzle-orm`; frontend `react-hook-form`, `@hookform/resolvers`, `zod` (form raw state use karta hai); `SESSION_SECRET` unused
11. **Repo junk:** `zipFile.zip` (111 MB!) aur `artifaapi keys` (2-byte junk file) root par pade hain; `.gitignore` inhe cover nahi karta
12. **Font mismatch:** `index.html` Inter load karta hai, actually Quicksand/Outfit use hote hain
13. **post-merge.sh bug:** `pnpm --filter db push` likha hai lekin package ka naam `@workspace/db` hai
14. **No tests, no linter** (sirf prettier), no CI
15. **replit.md** abhi bhi khali template hai — uski jagah **AGENT.md (yeh file)** hi source of truth hai

---

16. **Hero typecheck fail** — `Hero.tsx` mein Framer Motion `Variants` ka `ease` string TypeScript se compatible nahi hai; yeh frontend typecheck ko fail karta hai

## 10. Daily Tasks / TODO Tracker 📋

> **Agent Rules for this section:**
> 1. Roz ka naya kaam yahan add karo (table mein ek row)
> 2. Kaam complete hone par Status `✅ Done` karo + date
> 3. Naya session shuru hone par pehle yeh table padho — wahi current priority batata hai
> 4. Kaam karte waqt koi naya issue mile toh section #9 ya is table mein add karo

| # | Task | Status | Priority | Notes | Date |
|---|------|--------|----------|-------|------|
| 1 | Vite/API port mismatch fix — proxy default 5000 (`.replit` ke saath match) | ✅ Done | High | Chatbot aur admissions local workflow mein API tak pahunchte hain | 2026-08-25 |
| 12 | Resend API key update (`re_63WQ3epP_...`) + `.env` updated | ✅ Done | High | Admission form email ab sharmaaaarashi@gmail.com par jayega | 2026-08-25 |
| 13 | Chatbot fallback replies — API fail hone par local smart response system kaam karta hai | ✅ Done | Medium | Agar Groq API down hai toh bhi chatbot basic questions ka jawab dega | 2026-08-25 |
| 14 | Floating voice-tour agent chatbot ke paas add karna | ✅ Done | Medium | Custom avatar ke saath home page ke sabhi sections par Hindi voice tour aur smooth scroll | 2026-08-26 |
| 15 | Voice guide ko provided robot image ke saath animated redesign karna | ✅ Done | Medium | User ke Downloads wale exact `website agent voice.webp` robot ko large floating guide ke roop mein use kiya | 2026-08-26 |
| 2 | `zipFile.zip` (111MB) + `artifaapi keys` junk files delete karna aur `.gitignore` mein `*.zip` add karna | 🔲 Pending | Medium | Repo size bloat | — |
| 3 | README.md update — model name `openai/gpt-oss-20b` karna, ports sahi karna | 🔲 Pending | Low | Section #9 item 2 | — |
| 4 | OpenAPI spec mein `/chat` + `/admissions` endpoints add karna aur codegen dobara chalana | 🔲 Pending | Medium | Tab hooks generate honge | — |
| 5 | Admission form data database mein save karna (Drizzle schema likhna) | 🔲 Pending | Medium | Abhi sirf email jaata hai | — |
| 6 | Word-highlight ko TTS audio ke saath sync karna (fixed timer hatao, `onboundary` event try karo) | 🔲 Pending | Low | Section #9 item 7 | — |
| 7 | Mic language ko UI language se sync karna (`hi-IN` vs `en-IN`) | 🔲 Pending | Low | Section #9 item 6 | — |
| 8 | Rate limiting + basic auth `/api/chat` par (Groq API key abuse se bachne ke liye) | 🔲 Pending | High | Public endpoint hai | — |
| 9 | Unused dependencies hatao (brevo, cookie-parser, drizzle-orm frontend wale etc.) | 🔲 Pending | Low | Cleanup | — |
| 10 | `.env` ko git se hatana + keys rotate karna (security) | 🔲 Pending | High | Owner se poochhna padega kyunki Replit auto-import ispe depend karta hai | — |
| 11 | ✅ **Done** — api-server `dev` script se Unix-only `export NODE_ENV=development` hataya (Windows par crash ho raha tha) | ✅ Done | High | NODE_ENV default bhi dev hi hota hai, koi loss nahi | 2026-08-22 |

*(Naye tasks yahan neeche add karte jaao)*

---

## 11. Agent Conventions (Kaam Kaise Karna Hai)

1. **Session shuru:** Yeh file padho → section #10 ka task table dekho → user se confirm karo kaunsa task karna hai
2. **Code style:** Existing patterns follow karo. Comments mat daalo (jab tak manga na jaye). Emojis sirf user maange toh
3. **Hinglish communication:** User Hinglish (Roman Hindi) mein baat karta hai — replies bhi simple Hinglish mein do
4. **Har change ke baad:** `pnpm run typecheck` chalao — pass hona chahiye
5. **Commit:** Sirf tab karo jab user explicitly kahe. Commit messages existing style mein (conventional: `feat:`, `fix:` + Hinglish description allowed)
6. **Secrets:** `.env` ki values kabhi output/logs/comments mein print mat karo
7. **Is file ko updated rakho:** Naya seekha, naya issue, naya task — sab yahan document karo. Yeh file project ki memory hai
8. **Windows environment:** Shell PowerShell 5.1 hai; commands PowerShell syntax mein chalao (`$env:PORT=5000` style)

---

*Last updated: 2026-08-25 — Port fix, Resend key update, chatbot fallback added*
