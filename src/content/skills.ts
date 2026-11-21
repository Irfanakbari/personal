export const capabilities = [
  {
    title: "System Analysis",
    text: "Business requirement documents, process flows, ERDs and infrastructure design — agreed with users before code.",
    tags: ["BRD", "Process mapping", "ERD", "System architecture"],
  },
  {
    title: "Full-Stack Development",
    text: "Production web apps and APIs with typed code, real tests and CI from day one.",
    tags: ["NestJS", "Next.js", "React", "TypeScript"],
  },
  {
    title: "Enterprise Integration",
    text: "Connecting the shop floor to ERP, customer portals, attendance machines and PLCs.",
    tags: ["SAP Business One", "PLC", "Message queues", "REST"],
  },
  {
    title: "AI Integration",
    text: "LLMs inside real business apps — grounded, permission-aware and useful.",
    tags: ["OpenAI", "Gemini", "RAG", "MCP"],
  },
  {
    title: "Infrastructure",
    text: "Virtualization, servers, networks and automation that a small team can operate.",
    tags: ["Proxmox", "Linux", "FortiGate", "n8n"],
  },
];

export const skillGroups: { group: string; items: string[] }[] = [
  { group: "Backend", items: ["Node.js", "TypeScript", "NestJS", "Python", "FastAPI", "Flask", "REST APIs", "WebSocket", "Microservices"] },
  { group: "Frontend & Mobile", items: ["Next.js", "React", "Redux Toolkit", "Ant Design", "Tailwind CSS", "Flutter"] },
  { group: "Data & Messaging", items: ["PostgreSQL", "MySQL", "MariaDB", "Prisma", "Redis", "BullMQ", "RabbitMQ"] },
  { group: "Enterprise & Identity", items: ["SAP Business One", "Systems Integration", "Single Sign-On", "OpenID Connect", "OAuth 2.0", "Microsoft Entra ID"] },
  { group: "AI", items: ["OpenAI API", "Google Gemini", "RAG", "Model Context Protocol", "TensorFlow", "YOLO", "AI-assisted development (Codex, Claude Code, Gemini)"] },
  { group: "DevOps & Cloud", items: ["Docker", "GitHub Actions", "CI/CD", "Nginx", "Google Cloud Platform"] },
  { group: "Infrastructure & Network", items: ["Proxmox VE", "Linux", "Windows Server", "Active Directory", "Microsoft 365", "FortiGate", "Ubiquiti", "Ruijie", "n8n"] },
  { group: "Analysis & Manufacturing", items: ["Systems Analysis", "Business Requirements", "ERD", "Process Flow", "MES", "Poka-Yoke", "Lean / TPS", "IoT & PLC"] },
];
