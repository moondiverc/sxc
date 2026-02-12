# StudentxCEO Website (Next.js App Router)

Public website for StudentxCEO built with the Next.js App Router. It includes public pages (Landing, About, Program, Partnership, Contact) and a Gemini‑powered chatbot.

## ✨ Key Features
- **Next.js 16** App Router with server route handlers
- Modular page architecture (module → sections → data)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- Design system based on **Radix UI** utilities (shadcn‑style patterns)
- **Gemini** chatbot via server endpoint `/api/gemini`
- Image optimisation with `next/image` and `remotePatterns`

## 🧰 Tech Stack
- **Framework:** Next.js ^16.1.6, React ^18.3.1
- **Styling:** Tailwind CSS v4 (PostCSS)
- **UI & Utilities:** Radix UI, lucide-react, class-variance-authority, clsx
- **Animation & UX:** framer-motion, embla-carousel
- **Forms & Schema:** react-hook-form, zod
- **Charts:** recharts
- **Theming:** next-themes
- **Email:** @emailjs/browser
- **LLM:** @google/generative-ai

## 🚀 Quick Start

```bash
# 1) Install
npm install

# 2) Environment
# - Copy .env.example -> .env
# - Fill GEMINI_API_KEY (server-only)
# - Fill EmailJS (NEXT_PUBLIC_*)

# 3) Development
npm run dev

# 4) Production build & run
npm run build
npm start