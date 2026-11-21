export type Shot = { src: string; alt: string; caption: string };

export type CaseStudy = {
  slug: string;
  code: string;
  title: string;
  short: string;
  category: "Manufacturing" | "Integration" | "People" | "Identity" | "AI" | "Infrastructure";
  period: string;
  role: string;
  context: string;
  problem: string;
  built: string[];
  highlights: string[];
  outcome?: string;
  stack: string[];
  shots: Shot[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mes-wms",
    code: "SYS-01",
    title: "Manufacturing Execution & Warehouse System",
    short: "End-to-end MES + WMS for an automotive production line, from supplier incoming to customer delivery.",
    category: "Manufacturing",
    period: "2026 — Present",
    role: "System analyst & lead developer",
    context:
      "An automotive interior line needed one system of record for materials, production and delivery instead of spreadsheets and disconnected tools.",
    problem:
      "Stock moved through incoming inspection, warehouse racks, picking, assembly and delivery with manual records at every step — slow to reconcile, hard to trace, and easy to get wrong under just-in-time pressure.",
    built: [
      "Mapped the full material flow with the production, warehouse and QC teams, then turned it into a business requirement document, process flows and an ERD before development started.",
      "Built the flow end to end: supplier incoming → QC approval → warehouse & rack → forecast → production release with approval → picking → assembly per box → poka-yoke verification → pre-delivery → delivery.",
      "Added lot traceability, BOM revisions, MRP, stock counting, Excel reporting and wall-screen displays for the line.",
      "Integrated an AI assistant (Gemini + RAG with read-only analytics), Gemma OCR for incoming documents and counting sheets, natural-language filters and an MCP server.",
    ],
    highlights: [
      "Serializable transactions and database constraints protect the stock ledger",
      "Idempotent commands and a transactional outbox for reliable side effects",
      "Permission-based RBAC with a full action audit",
      "Automated tests run against real PostgreSQL and Redis in CI",
      "Label-printing agent for part tags at the line",
    ],
    stack: ["NestJS", "Next.js", "React", "Prisma", "PostgreSQL", "Redis", "BullMQ", "FastAPI", "Gemini", "Docker", "GitHub Actions"],
    shots: [
      { src: "/work/mes-wall-dashboard.jpg", alt: "MES wall-screen production status dashboard", caption: "Wall-screen dashboard on the line: delivery attainment, process completion and delivery cycles (customer data redacted)." },
    ],
  },
  {
    slug: "sap-business-one-integration",
    code: "SYS-02",
    title: "MES ↔ SAP Business One Integration",
    short: "Keeps the shop floor and the accounting system in agreement — no manual re-entry.",
    category: "Integration",
    period: "2026 — Present",
    role: "System analyst & developer",
    context:
      "Finance runs on SAP Business One while the shop floor runs on the MES. Every receipt, production result and delivery had to be keyed in twice.",
    problem:
      "Double entry created delays and mismatches between physical stock and the books, and month-end reconciliation took days.",
    built: [
      "Designed the document mapping together with finance and production: which shop-floor event becomes which SAP document.",
      "From production to SAP: material receipts, consumption and scrap, production orders, finished-goods output, sales orders, customer deliveries, returns and stock-count results are recorded automatically.",
      "From SAP to production: item master, BOMs and stock data feed back into the MES to reconcile inventory between both systems.",
      "Built a monitoring page for sync status, data mapping and reviewing transactions that need attention.",
    ],
    highlights: [
      "One source of truth for operations, one for accounting — kept in sync",
      "Stock reconciliation view between MES and SAP",
      "Transactions that need a human decision are surfaced, not lost",
    ],
    stack: ["SAP Business One", "NestJS", "PostgreSQL", "Redis", "BullMQ"],
    shots: [
      { src: "/work/sap-sync-monitor.jpg", alt: "SAP Business One sync monitor", caption: "Sync monitor: pending, processing, synced and blocked transactions with worker health." },
    ],
  },
  {
    slug: "hris-payroll",
    code: "SYS-03",
    title: "HR Information & Payroll System",
    short: "Company HRIS covering the full employee lifecycle and Indonesian payroll.",
    category: "People",
    period: "2025 — Present",
    role: "System analyst & lead developer",
    context: "HR, attendance, overtime and payroll were handled across spreadsheets, attendance machines and manual approvals.",
    problem:
      "Overtime and attendance had to be reconciled by hand every period, approvals were slow, and payroll calculations (BPJS, PPh21) were error-prone.",
    built: [
      "Employee master and career lifecycle: promotion, mutation, contract extension and termination with generated letters.",
      "Fingerprint attendance sync with a shift engine, plus GPS-radius mobile clock-in for employee self-service.",
      "Leave, overtime and business-trip requests with configurable multi-level approvals and notifications.",
      "Payroll: salary components with a formula engine, BPJS, PPh21 (TER & progressive), THR, bonus, payslip distribution and annual tax.",
      "AI: an HR assistant (OpenAI via MCP, answering only from data the user may see), AI rewriting for requests and AI-reviewed shift suggestions.",
    ],
    highlights: [
      "Versioned organization chart, report builder and BI dashboard",
      "Background processing with BullMQ and RabbitMQ (retry and dead-letter queues)",
      "OWASP Top 10 and UU PDP (data protection) self-assessments",
    ],
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Redis", "RabbitMQ", "BullMQ", "OpenAI", "MCP"],
    shots: [
      { src: "/work/hris-dashboard.jpg", alt: "HRIS dashboard", caption: "Workforce dashboard with contract-expiry tracking (employee data redacted)." },
    ],
  },
  {
    slug: "single-sign-on",
    code: "SYS-04",
    title: "Company-wide Single Sign-On + Client SDKs",
    short: "One OpenID Connect identity provider for every internal application.",
    category: "Identity",
    period: "2026 — Present",
    role: "Architect & developer",
    context: "Each internal app had its own login, user table and password rules.",
    problem: "Separate accounts meant weak passwords, slow onboarding/offboarding and no central audit of who accessed what.",
    built: [
      "Built an OpenID Connect provider: Authorization Code + PKCE for every client, short-lived signed tokens, refresh-token rotation with reuse detection and back-channel logout.",
      "MFA (TOTP with recovery codes, WebAuthn), Microsoft Entra ID sign-in, account lockout and an audit log.",
      "Admin console for people, applications, OAuth clients, roles and sessions, plus a multilingual application portal.",
      "Published NestJS and React/Next.js SDKs so any internal app adopts SSO with a few lines of config.",
    ],
    highlights: [
      "Tokens stay server-side; browsers only get httpOnly session cookies",
      "Prometheus metrics, k6 load tests and Playwright end-to-end tests",
      "Key-rotation and backup scripts for operations",
    ],
    stack: ["OpenID Connect", "NestJS", "Next.js", "PostgreSQL", "Redis", "WebAuthn", "Microsoft Entra ID"],
    shots: [
      { src: "/work/sso-console.jpg", alt: "SSO identity console", caption: "Identity console: accounts, registered applications, sessions and recent activity." },
    ],
  },
  {
    slug: "pick-to-light",
    code: "SYS-05",
    title: "Pick-to-Light Poka-Yoke System",
    short: "Lights the right rack, rejects the wrong part — zero miss-picking since go-live.",
    category: "Manufacturing",
    period: "2024 — Present",
    role: "Developer & integrator",
    context: "Sequenced parts must be picked in exactly the order the customer's line needs them.",
    problem: "Operators picked from paper sequences; a single wrong part could stop the customer's line.",
    built: [
      "Pulls customer sequence orders every few seconds and turns on the lamp at the correct rack location.",
      "Each pick is confirmed by scan; wrong parts are rejected in real time.",
      "NestJS API with Socket.IO line rooms → RabbitMQ → Python gateway speaking Mitsubishi MC protocol to the PLCs (lamps and buttons).",
      "Flutter PDA app with Bluetooth label printing; picking events flow straight into the inventory system.",
    ],
    highlights: ["Hardware + software error-proofing", "Real-time feedback on the line", "Supports just-in-time and zero-defect principles"],
    outcome: "Zero miss-picking due to human error since go-live.",
    stack: ["NestJS", "Socket.IO", "RabbitMQ", "Python", "PLC (MC protocol)", "Flutter", "PostgreSQL"],
    shots: [],
  },
  {
    slug: "integrated-inventory",
    code: "SYS-06",
    title: "Integrated Inventory System",
    short: "Real-time, event-driven inventory for sequenced customer parts.",
    category: "Manufacturing",
    period: "2025 — Present",
    role: "Developer",
    context: "Inventory for sequenced parts was tracked in spreadsheets, separate from picking and delivery.",
    problem: "Stock opname took long and manual miscalculations were common.",
    built: [
      "Pulls inbound manifests from the customer's supplier portal and keeps a transactional stock ledger.",
      "Picking events reduce stock automatically; outbound delivery and sequence readiness are tracked in one place.",
      "Stock taking with cut-off and snapshots, warehouse layout with a 3D view and heatmap, andon and delivery displays.",
      "WhatsApp delivery notifications and an AI help assistant (OpenAI + vector search).",
    ],
    highlights: ["Event-driven via RabbitMQ", "3D warehouse visualization", "Replaced spreadsheet tracking"],
    outcome: "Faster stock opname and no manual miscalculation.",
    stack: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "RabbitMQ", "React Three Fiber", "OpenAI"],
    shots: [],
  },
  {
    slug: "delivery-control",
    code: "SYS-10",
    title: "Delivery Control Poka-Yoke System",
    short: "Scan-based verification of outgoing shipments — wrong or missing parts are caught before the truck leaves.",
    category: "Manufacturing",
    period: "2023 — 2025",
    role: "Developer",
    context: "Outgoing deliveries to a customer had to match each delivery order exactly — part, quantity and sequence.",
    problem: "Shipments were checked by eye against paper documents, so a wrong or missing part could reach the customer.",
    built: [
      "Delivery orders are loaded into the system and every part label is scanned on a handheld before loading.",
      "Mismatches are blocked on the spot, and every scan is recorded for traceability.",
      "Grew from a Next.js + MySQL web app (2023) into a NestJS API with a Flutter handheld app, later connected to the unified application portal and SSO.",
    ],
    highlights: ["Error-proofing at the last step before the customer", "Handheld scanning with instant feedback", "Full scan history per delivery"],
    stack: ["NestJS", "Next.js", "Flutter", "MySQL", "Prisma"],
    shots: [],
  },
  {
    slug: "ai-visual-inspection",
    code: "SYS-07",
    title: "AI Visual Inspection System",
    short: "Camera + deep learning checks part completeness at final inspection.",
    category: "AI",
    period: "2024",
    role: "Developer",
    context: "Final inspection relied on the human eye to confirm every part was complete before packing.",
    problem: "Missing components occasionally slipped through and became customer claims.",
    built: [
      "Integrated cameras at the final inspection station.",
      "Trained and served a YOLO model that verifies part completeness in real time.",
      "Only complete, correctly assembled parts proceed to packing and shipment.",
    ],
    highlights: ["Computer vision on the shop floor", "Real-time pass/fail feedback"],
    outcome: "Zero customer claims for missing parts since deployment.",
    stack: ["Python", "YOLO", "Flask", "Raspberry Pi"],
    shots: [],
  },
  {
    slug: "infrastructure-automation",
    code: "SYS-08",
    title: "Infrastructure & Automation",
    short: "The servers, network and automations everything else runs on.",
    category: "Infrastructure",
    period: "2024 — Present",
    role: "Infrastructure & automation",
    context: "In-house systems need reliable, secure infrastructure that a small team can operate.",
    problem: "Physical servers, scattered networks and repetitive manual tasks don't scale with a growing application portfolio.",
    built: [
      "Server virtualization with Proxmox VE — VMs and containers hosting the Docker-based application stack behind the SSO portal, with backups.",
      "Server and application monitoring with Grafana dashboards, linked from the company application portal.",
      "Linux and Windows Server administration; Active Directory & Microsoft 365 (basic).",
      "Network and security with FortiGate, Ubiquiti and Ruijie equipment.",
      "Business process automation with n8n: HR reminders, contract-expiry reminders to employees, purchase-order notifications to suppliers, scheduled reports and data sync between systems.",
      "Infrastructure topology and system architecture documentation as part of every project's analysis.",
    ],
    highlights: ["Proxmox VE", "Grafana monitoring", "FortiGate · Ubiquiti · Ruijie", "n8n workflows", "Docker + CI/CD"],
    stack: ["Proxmox VE", "Grafana", "Linux", "Windows Server", "Active Directory", "Microsoft 365", "FortiGate", "Ubiquiti", "Ruijie", "n8n", "Docker"],
    shots: [
      { src: "/work/grafana-monitoring.jpg", alt: "Grafana dashboard for the Proxmox cluster", caption: "Grafana command center for the Proxmox cluster: node and VM health, CPU/RAM, storage pools, network and disk I/O." },
    ],
  },
  {
    slug: "ai-meeting-assistant",
    code: "SYS-09",
    title: "AI Meeting Assistant",
    short: "Live transcription, minutes and action items — generated automatically.",
    category: "AI",
    period: "2026",
    role: "Developer",
    context: "Meeting minutes were written by hand, late, and often incomplete.",
    problem: "Decisions and action items got lost between meetings.",
    built: [
      "Records meetings live or from uploads and transcribes them with Gemini live transcription and speaker diarization.",
      "Generates minutes, action items and mind maps; minutes can be emailed via Microsoft 365.",
      "Protected by the company SSO.",
    ],
    highlights: ["Gemini live transcription", "Speaker diarization", "One-click minutes by email"],
    stack: ["FastAPI", "WebSocket", "Gemini", "PostgreSQL", "Redis"],
    shots: [
      { src: "/work/meeting-assistant.jpg", alt: "AI meeting assistant minutes view", caption: "Generated minutes with audio playback (meeting content redacted)." },
    ],
  },
];

export const moreSystems = [
  { title: "Pallet Management V2", text: "Returnable-pallet tracking (QR scan in/out, tracing, maintenance, scrap) rewritten with a zero-downtime dual-running migration.", shot: "/work/pallet-management.jpg" },
  { title: "Maintenance Inventory", text: "Spare-part inventory with a keyboard-first operator kiosk, stock counting and audit trail.", shot: "/work/maintenance-inventory.jpg" },
  { title: "IT Asset Management", text: "Asset lifecycle linked to HRIS employees: assignment, warranty and licence tracking, repairs and disposal." },
  { title: "Unified Application Portal", text: "One SSO-protected entry point for every internal application." },
  { title: "WhatsApp & Email Gateways", text: "Shared notification services used across internal systems." },
  { title: "Vehicle Checksheet", text: "Daily truck inspection checklist with photo evidence." },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
