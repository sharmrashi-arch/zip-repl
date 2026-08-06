# 🏫 Anjali Kids Play School — Website

Pundri, Haryana ki ek play school ki poori website — chatbot, admission form, aur gallery ke saath.

---

## 📁 Project Structure (File Folder Map)

```
/ (root)
├── README.md                    ← yeh file
├── .env                         ← API keys (GitHub se import hone par auto-aati hai)
├── setup-env.sh                 ← .env dobara banane ka script
├── .gitignore
├── pnpm-workspace.yaml          ← monorepo config
├── package.json
│
├── artifacts/
│   ├── anjali-kids-school/      ← FRONTEND (React website)
│   └── api-server/              ← BACKEND (Express API)
│
└── lib/                         ← Shared libraries
    ├── api-zod/                 ← API validation schemas
    ├── db/                      ← Database (Drizzle ORM)
    ├── api-client-react/        ← React API client hooks
    └── api-spec/                ← API type definitions
```

---

## 🎨 FRONTEND — `artifacts/anjali-kids-school/`

**Tech Stack:** React + Vite + TailwindCSS + Framer Motion + Wouter (routing)

### Pages (`src/pages/`)
| File | URL | Kya hai |
|------|-----|---------|
| `Home.tsx` | `/` | Homepage — Hero, Programs, Teachers, Gallery, Testimonials |
| `AboutPage.tsx` | `/about` | School ke baare mein |
| `ProgramsPage.tsx` | `/programs` | Playgroup, Nursery, LKG programs |
| `TeachersPage.tsx` | `/teachers` | Teachers ki list |
| `GalleryPage.tsx` | `/gallery` | Photo gallery |
| `AdmissionsPage.tsx` | `/admissions` | Admission form (parents ke liye) |
| `not-found.tsx` | `*` | 404 page |

### Components (`src/components/`)
| File | Kya karta hai |
|------|--------------|
| `Navigation.tsx` | Top navbar |
| `Hero.tsx` | Homepage ka bada banner |
| `Programs.tsx` | Programs ka overview section |
| `Teachers.tsx` | Teachers section |
| `Gallery.tsx` | Gallery preview |
| `GalleryFull.tsx` | Full gallery |
| `About.tsx` | About section |
| `Admissions.tsx` | Admission section |
| `Contact.tsx` | Contact info |
| `Testimonials.tsx` | Parents ke reviews |
| `WhyChooseUs.tsx` | School ki khasiyat |
| `MapSection.tsx` | Location map |
| `Footer.tsx` | Footer |
| **`Chatbot.tsx`** | **🤖 AI Chatbot — mic + voice reply ke saath** |
| `ui/` | 50+ reusable UI components (buttons, cards, etc.) |

### Hooks & Utils (`src/hooks/`, `src/lib/`)
| File | Kya karta hai |
|------|--------------|
| `hooks/use-mobile.tsx` | Mobile screen detect karna |
| `hooks/use-toast.ts` | Toast notifications |
| `lib/utils.ts` | Helper functions |

### Main Files
| File | Kya karta hai |
|------|--------------|
| `src/App.tsx` | Router setup + `<Chatbot />` globally |
| `src/main.tsx` | App entry point |
| `src/index.css` | Global CSS / Tailwind |

---

## ⚙️ BACKEND — `artifacts/api-server/`

**Tech Stack:** Node.js + Express + Drizzle ORM + Resend (email) + Groq (AI)

### Routes (`src/routes/`)
| File | Endpoint | Kya karta hai |
|------|----------|--------------|
| `health.ts` | `GET /api/healthz` | Server alive hai ya nahi check karta |
| `admissions.ts` | `POST /api/admissions` | Admission form submit → Resend se email bhejta hai `sharmaaaarashi@gmail.com` par |
| **`chat.ts`** | **`POST /api/chat`** | **🤖 Chatbot — Groq AI se jawab leta hai** |
| `index.ts` | — | Sab routes register karta hai |

### Main Files
| File | Kya karta hai |
|------|--------------|
| `src/index.ts` | Server start, dotenv load, PORT set |
| `src/app.ts` | Express app setup, middleware |
| `src/lib/logger.ts` | Logging (pino) |

---

## 🤖 Chatbot Details

### System Prompt Location:
```
artifacts/api-server/src/routes/chat.ts
```
Variable name: `SYSTEM_PROMPT` (file ke top par)

### Groq Model:
```
llama-3.1-8b-instant
```

### Settings:
- `max_tokens: 500`
- `temperature: 0.7`
- Last 10 messages ka history bhejta hai (context ke liye)
- Hindi + English dono support

### Chatbot UI Features (`Chatbot.tsx`):
- 🎤 Mic button — bol kar poochho (Hindi speech recognition `hi-IN`)
- 🔊 Voice reply — bot ka jawab sunao (browser SpeechSynthesis)
- Suggested questions — 4 pre-set questions
- Floating orange button — bottom-right corner
- Har page par dikhai deta hai (`App.tsx` mein global hai)

---

## 🔑 API Keys (`.env` file)

```
RESEND_API_KEY=...    ← Email bhejne ke liye (Resend)
GROQ_API_KEY=...      ← AI chatbot ke liye (Groq)
SESSION_SECRET=...    ← Session security ke liye
```

> `.env` file GitHub par committed hai — naye Replit par import karne par automatically aa jaati hai.

---

## 🚀 Naye Replit par Import kaise karein

1. GitHub se import karo → `.env` automatically aayegi
2. Koi bhi API key manually enter nahi karni
3. Dono workflows automatically start ho jaate hain:
   - **Frontend:** `pnpm install && pnpm --filter @workspace/anjali-kids-school run dev`
   - **Backend:** `pnpm install && pnpm --filter @workspace/api-server run dev`

---

## 📧 Contact / Email Flow

Admission form submit hone par:
- **To:** `sharmaaaarashi@gmail.com`
- **Via:** Resend API
- **Route:** `POST /api/admissions`

---

*Anjali Kids Play School — Pundri, Haryana | Est. 2018*
