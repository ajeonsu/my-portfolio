import { kaggleBadgePath, kaggleBadges } from "./kaggle-badges";

export const site = {
  name: "Adrian James Magisa",
  title: "Full Stack Developer · Databases, Analytics & Cloud",
  location: "Science City of Muñoz, Nueva Ecija, Philippines",
  email: "ajeonicpsycho@gmail.com",
  phone: "0955-402-7884",
  portfolioUrl: "https://adrianjamesmagisa.vercel.app/",
  resumePath: "/Adrian_James_Magisa_Resume.pdf",
  summary:
    "IT graduate from Central Luzon State University, based at the CLSU campus in Science City of Muñoz. I design and ship systems end to end—web applications, PostgreSQL databases, analytics dashboards, REST APIs, integrations, and AWS server operations. I have supported Department of Agriculture programs locally, built field-ready IoT and reporting tools (GROWTHetect), large-scale CRM analytics (EC ONE), production apps at CyberConnect, and monthly AWS maintenance for Saga Keiba. I document work clearly and can support deployment, troubleshooting, and user training.",
  heroBadge: "CLSU · Science City of Muñoz · Open to opportunities",
  heroHighlights: [
    "Full-stack web & APIs",
    "PostgreSQL & dashboards",
    "Field & IoT data capture",
    "AWS infrastructure",
    "GIS & visualization",
    "Government & stakeholder coordination",
  ],
};

export type ExperienceItem = {
  role: string;
  company: string;
  /** Omit on the site when you prefer not to show employment dates. */
  period?: string;
  highlights: string[];
  companyUrl?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Special Program for the Employment of Students (SPES)",
    company: "Department of Agriculture — Science City of Muñoz",
    period: "Recent",
    highlights: [
      "Supported DA agricultural programs with accurate data encoding, filing, and day-to-day admin operations.",
      "Coordinated with supervisors and program staff on deadlines, priorities, and organized record keeping.",
      "Built familiarity with public-sector workflows, documentation standards, and professional communication.",
    ],
  },
  {
    role: "Software Engineer / Full Stack Developer",
    company: "CyberConnect Co., Ltd.",
    companyUrl: "https://cyberconnect.co.ltd",
    highlights: [
      "Build and maintain CyberConnect: a multi-tenant, bilingual (EN/JA) workspace for requirements, screens, functions, tasks, tests, APIs, and schedules.",
      "DeepL API integration for automatic EN/JA translation on sheet CRUD and on Excel/CSV batch import (column mapping and conflict resolution).",
      "Next.js App Router, TypeScript, Tailwind, Supabase (PostgreSQL, Auth, RLS), sheet import/export, and role-based dashboards.",
      "Delivered AIO/LLMO Strategy OSINT Analyzer (Firebase Auth, Next.js API, Gemini, Firestore) for AI-search brand strategy reports.",
      "Internal tooling: CrowdWorks job scraper (Playwright) with CSV merge and Google Drive upload for team lead gen.",
    ],
  },
  {
    role: "Software Developer / Full Stack Developer",
    company: "EC ONE — Multi-channel E-commerce Platform",
    period: "Professional project",
    highlights: [
      "Full stack CRM: Next.js tenant UI plus customer segments, email and LINE campaigns, analytics, and delivery workflows.",
      "End-to-end integrations across Email, LINE, Rakuten, Meta, and marketplace/ad platforms via Supabase Edge Functions (~97 functions).",
      "PostgreSQL schema, RLS, cron automation, and dashboards—one of my strongest shipped systems.",
    ],
  },
  {
    role: "Software Engineer / Full Stack Developer (AWS Operations)",
    company: "Saga Keiba (佐賀競馬) — sagakeiba.net",
    companyUrl: "https://www.sagakeiba.net/",
    highlights: [
      "Cloud/ops engineer for production WordPress/CMS on AWS (Tokyo): EC2, EBS, ALB, CloudWatch, AWS Backup, SNS.",
      "Monthly server-side backups, alarm investigation (CPU, unhealthy targets), and client-ready maintenance reporting.",
      "IAM coordination for least-privilege viewer access; cost and architecture documentation for stakeholders.",
    ],
  },
];

export type ProjectItem = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  image?: string;
  role?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "GROWTHetect",
    tagline: "DepEd student growth & BMI monitoring",
    role: "Software Engineer / Full Stack Developer (Capstone)",
    image: "/images/growthetect.png",
    stack: [
      "Next.js 14",
      "Supabase",
      "JWT",
      "Arduino bridge",
      "IoT sensors",
      "jsPDF",
    ],
    description:
      "Capstone full stack build for DepEd nutrition teams: automated BMI collection via Arduino/IoT (ultrasonic height, load cell, RFID) through a local Node bridge to `/api/arduino-bridge`, with manual entry as a fallback. Growth analysis, trends, and reporting dashboards; feeding program workflows; CSV/PDF exports. Nutritionist and administrator portals on Next.js 14, Supabase, and JWT role-based access—designed and implemented end to end.",
  },
  {
    name: "EC ONE",
    tagline: "マルチチャネルEC統合 — orders, CRM, ads, P&L",
    role: "Software Developer / Full Stack Developer",
    image: "/images/ec-one.png",
    stack: [
      "Next.js 14",
      "Supabase",
      "PostgreSQL",
      "Edge Functions (Deno)",
      "CRM",
      "LINE",
      "Rakuten",
      "Meta",
      "SendGrid",
    ],
    description:
      "B2B SaaS for Japanese and multi-channel e-commerce: unified dashboard for orders, inventory, advertising, CRM, and profit & loss. Full stack work on CRM features, Next.js product surfaces, and channel integrations (email, LINE, Rakuten, Meta) across Edge Functions and tenant RBAC.",
  },
  {
    name: "CyberConnect Platform",
    tagline: "Bilingual requirements & task management",
    role: "Software Engineer / Full Stack Developer @ CyberConnect",
    image: "/images/cyberconnect-platform.png",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "PostgreSQL RLS",
      "DeepL API",
      "SheetJS",
    ],
    description:
      "Multi-tenant project workspace for delivery teams: bilingual spreadsheet-style sheets for purpose, screens, functions, tasks, test cases, APIs, backlog, and schedule views. DeepL API fills EN/JA pairs on create/update and during Excel/CSV batch import. Team/personal workspaces, invite codes, import conflict resolution, and PM/dev/client RBAC enforced in Postgres.",
  },
  {
    name: "AIO/LLMO Strategy OSINT Analyzer",
    tagline: "AI search & LLM optimization strategy reports",
    role: "Software Engineer / Full Stack Developer @ CyberConnect",
    image: "/images/ai-strategy-studio.png",
    stack: [
      "Next.js API",
      "Vite",
      "React",
      "Firebase Auth",
      "Firestore",
      "Gemini",
      "Cheerio",
    ],
    description:
      "Full-stack OSINT-style analyzer for how brands should optimize for AI-mediated search (AIO/LLMO). Users sign in with Firebase (email or Google); the API validates tokens, scrapes official URLs, calls Gemini with a fixed consultant prompt, returns Markdown reports, and persists runs to Firestore when configured.",
  },
  {
    name: "CrowdWorks Job Scraper",
    tagline: "Automated freelance listing intelligence",
    role: "Software Engineer @ CyberConnect (internal tooling)",
    image: "/images/crowdworks.png",
    stack: ["Node.js", "Playwright", "Google Drive API", "OAuth 2.0", "CSV"],
    description:
      "Playwright-based scraper for CrowdWorks development categories: extracts title, client, budget, and URL; filters by minimum fixed/hourly thresholds; deduplicates into a master CSV; writes daily snapshots; optionally uploads dated files to Google Drive for sales/recruiting workflows.",
  },
  {
    name: "Saga Keiba Web Platform (AWS Ops)",
    tagline: "Production CMS infrastructure on AWS Tokyo",
    role: "Software Engineer — operations & maintenance",
    image: "/images/saga-keiba.png",
    stack: [
      "AWS EC2",
      "EBS",
      "ALB",
      "CloudWatch",
      "AWS Backup",
      "SNS",
      "IAM",
    ],
    description:
      "Operations engagement for the official Saga Keiba site: environment assessment, monthly EBS/AWS Backup jobs, CloudWatch alarm triage, cost explanations for stakeholders, and SNS alert routing—working under constrained IAM with client admin for policy updates.",
  },
];

export const skills = {
  languages: ["Python", "PHP", "TypeScript", "JavaScript"],
  frameworks: [
    "Next.js",
    "React",
    "Django",
    "Laravel",
    "React Native",
    "Vite",
    "Tailwind CSS",
  ],
  data: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Firestore",
    "Supabase",
    "SQL",
  ],
  cloud: [
    "AWS (EC2, S3, IAM, Backup, CloudWatch, ALB)",
    "Vercel",
    "Supabase Edge Functions",
  ],
  other: [
    "Analytics & dashboards",
    "GIS / geospatial (Bokeh)",
    "Playwright",
    "Gemini API",
    "REST APIs",
    "Technical documentation",
    "UML",
  ],
};

export const education = [
  {
    school: "Central Luzon State University",
    detail: "Bachelor of Science in Information Technology (related to CS/CE)",
    period: "2022 – 2026",
  },
  {
    school: "Caanawan National Senior High School",
    period: "2020 – 2022",
  },
  {
    school: "Muñoz National High School",
    period: "2015 – 2019",
  },
  {
    school: "Licaong Elementary School",
    period: "2009 – 2015",
  },
];

export type Certification = {
  name: string;
  year: string;
  detail: string;
  /** Public credential or share URL. */
  credentialUrl?: string;
  /** On-site path that redirects to the credential (shareable short link). */
  redirectPath?: string;
};

export const certifications: Certification[] = [
  {
    name: "Data Visualization using Bokeh",
    year: "2025",
    detail:
      "Coursera guided project: Bokeh basics, glyphs, and geospatial mapping (completed May 2025).",
    credentialUrl:
      "https://www.coursera.org/share/b6f89666b65c7db35c19d22abd685fc7",
  },
  ...kaggleBadges.map((badge) => ({
    name: `Kaggle ${badge.title}`,
    year: badge.year,
    detail: badge.detail,
    redirectPath: kaggleBadgePath(badge.slug),
  })),
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
