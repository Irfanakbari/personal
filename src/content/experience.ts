export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  bullets: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "PT Vuteq Indonesia",
    role: "Application & Software Developer",
    period: "Sep 2025 — Present",
    location: "Bekasi, Indonesia",
    type: "Full-time · On-site",
    summary:
      "Lead developer and system analyst for the company's in-house enterprise platform, from business requirements and ERD design to deployment and operations.",
    bullets: [
      "Manufacturing Execution & Warehouse System covering incoming, QC, warehouse, production release, picking, assembly, poka-yoke verification and delivery — with full lot traceability.",
      "MES ↔ SAP Business One integration: receipts, production, sales, deliveries and stock counts flow into SAP automatically, with stock reconciliation between both systems.",
      "HRIS & Payroll with attendance-machine sync, GPS clock-in, multi-level approvals and Indonesian payroll (BPJS, PPh21 TER, THR, annual tax).",
      "Company-wide Single Sign-On (OpenID Connect) with MFA, Microsoft Entra ID sign-in and NestJS/React SDKs for every internal app.",
      "AI features in production: RAG assistants, document OCR, a live-transcription meeting assistant and MCP servers for permission-scoped AI access.",
      "Infrastructure: Proxmox VE virtualization, Grafana monitoring, Linux & Windows Server, AD/M365, FortiGate, Ubiquiti and Ruijie networks.",
      "n8n automations: HR reminders, contract-expiry reminders to employees and purchase-order notifications to suppliers.",
    ],
    stack: ["NestJS", "Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "RabbitMQ", "Docker"],
  },
  {
    company: "PT Vuteq Indonesia",
    role: "Production IT",
    period: "Apr 2024 — Sep 2025",
    location: "Bekasi, Indonesia",
    type: "Full-time · On-site",
    summary:
      "Built the digital backbone of the production floor, following lean / TPS principles (Industry 4.0).",
    bullets: [
      "Pick-to-Light Poka-Yoke System driving rack lamps through PLCs — zero miss-picking from human error since go-live.",
      "Integrated Inventory System synced with the customer's supplier portal, replacing spreadsheet stock tracking.",
      "AI Visual Inspection System (camera + YOLO) at final inspection — zero customer claims for missing parts.",
      "Unified Application Portal: one SSO-protected entry point for shop-floor applications.",
      "Flutter handheld apps for PDA scanners and Bluetooth label printers.",
    ],
    stack: ["NestJS", "Next.js", "Flutter", "Python", "YOLO", "Socket.IO", "PLC"],
  },
  {
    company: "Bangkit Academy (Google, GoTo, Traveloka)",
    role: "Cloud Computing Mentor",
    period: "Sep 2024 — Jan 2025",
    location: "Remote",
    type: "Part-time",
    summary: "Mentored cloud computing students through the Google Cloud learning path and capstone projects.",
    bullets: [
      "Ran Google Cloud Platform training sessions and helped mentees troubleshoot deployments.",
      "Tracked mentee progress and gave regular feedback.",
    ],
  },
  {
    company: "Bangkit Academy (Google, GoTo, Traveloka)",
    role: "Machine Learning & Cloud Computing Cohorts",
    period: "Feb 2023 — Jan 2024",
    location: "Remote",
    type: "Program",
    summary:
      "Completed both the Cloud Computing and Machine Learning tracks; earned the Google Professional Cloud Architect and TensorFlow Developer certifications.",
    bullets: ["Capstone: Traffix traffic-monitoring backend on Cloud Run."],
  },
  {
    company: "PT Vuteq Indonesia",
    role: "Information Technology Developer",
    period: "Jul 2023 — Aug 2023",
    location: "Bekasi, Indonesia",
    type: "Internship",
    summary: "Designed and shipped the first pallet tracking system for the plant.",
    bullets: [
      "Analyzed and designed a pallet control system for returnable pallets.",
      "Built the web system (Next.js + NestJS) and a Flutter barcode app for handheld scanners.",
    ],
  },
  {
    company: "World Romance Translation",
    role: "Web & Application Developer",
    period: "Jan 2021 — Mar 2022",
    location: "Remote",
    type: "Part-time",
    summary: "Built web and Flutter applications for an online translation community.",
    bullets: [],
  },
];
