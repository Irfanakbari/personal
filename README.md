# irfan — portfolio

Personal portfolio of **Irfan Akbari Habibi**, Full-Stack Developer & System Analyst.

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Content:** typed data in `src/content/*` — one source for pages, resume and the AI assistant
- **Pages:** home, case studies (`/work/[slug]`), printable resume (`/resume`)
- **Extras:** "Ask about Irfan" AI chat (Gemini via the Vercel AI SDK), terminal easter egg (press `` ` ``), dark/light theme, Open Graph image, sitemap

## Develop

```bash
pnpm install
cp .env.example .env.local   # add GOOGLE_GENERATIVE_AI_API_KEY to enable the chat
pnpm dev
```

`pnpm lint` · `pnpm typecheck` · `pnpm build`

Screenshots in `public/work/` are redacted; customer and internal system names are intentionally not used.
