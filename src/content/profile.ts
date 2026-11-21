export const profile = {
  name: "Irfan Akbari Habibi",
  shortName: "Irfan",
  role: "Full-Stack Developer & System Analyst",
  tagline: "I build the systems a factory runs on.",
  intro:
    "I design, build and run in-house enterprise systems for an automotive interior parts manufacturer — from the first requirements meeting to the server they run on.",
  location: "Bekasi, Indonesia",
  availability: "Open to work · On-site in Bekasi or remote",
  email: "irfan.akbarihabibi@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://personal-sand-phi.vercel.app",
  links: {
    linkedin: "https://www.linkedin.com/in/irfanakbarihabibi/",
    github: "https://github.com/Irfanakbari",
  },
  about: [
    "At PT Vuteq Indonesia I design and develop the company's in-house digital platform: a manufacturing execution & warehouse system (MES/WMS), an HRIS with full Indonesian payroll, a company-wide Single Sign-On, pick-to-light poka-yoke systems wired to PLCs, and the integration that keeps the shop floor and SAP Business One in sync.",
    "I work analysis-first — business requirement documents, process flows, ERDs and infrastructure topology before a single line of code — then build it properly with NestJS, Next.js, PostgreSQL, message queues, Docker and CI, and keep it running on infrastructure I manage myself.",
    "I bring AI in where it pays off: OpenAI, Gemini and Gemma inside production apps for RAG assistants, document OCR and MCP servers that let AI agents work safely with business data. I also build every day with AI coding tools like Codex, Claude Code and Gemini.",
  ],
  coverage: [
    { area: "Sequenced-parts line", systems: "Pick-to-light poka-yoke · integrated inventory" },
    { area: "Assembly line", systems: "MES & WMS integrated with SAP Business One" },
    { area: "Trunk-floor line", systems: "AI visual inspection (computer vision)" },
    { area: "Supply chain", systems: "Pallet management · delivery control poka-yoke" },
    { area: "Human resources", systems: "HRIS & Indonesian payroll" },
    { area: "Company-wide", systems: "SSO & app portal · n8n automations · meeting assistant · vehicle checksheet · monitoring · infrastructure" },
  ],
  highlights: [
    "Zero miss-picking since the pick-to-light system went live",
    "Zero customer claims for missing parts after AI visual inspection",
    "Shop-floor transactions flow into SAP Business One automatically",
  ],
} as const;

export type Profile = typeof profile;
