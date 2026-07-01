import type { Project } from '../types/experience';

export const projects: Project[] = [
  {
    id: "iat",
    name: "Implicit Association Test (IAT)",
    category: "Production",
    status: "Retired",
    clients: ["University of Warsaw"],
    company: null,
    dateEnd: "2011-08-01",
    dateStart: "2010-12-01",
    description: "Development of a web application for conducting the Implicit Association Test (IAT), used in psychological research to measure unconscious biases. The tool was created on request for a postgraduate research project at the University of Warsaw.",
    myRole: "Full Stack Developer",
    technologies: ["PHP", "MySQL", "JavaScript", "ActionScript", "Flash", "HTML"],
  },
  {
    id: "logistics-center",
    name: "Logistics Center",
    category: "Production",
    status: "Live",
    clients: ["Padma Art", "Padma30", "Novigo"],
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2015-09-01",
    dateStart: "2015-06-01",
    description: "Contributed to the development and implementation of a centralized logistics platform to coordinate and synchronize operations between the ERP systems of three separate companies. The integration relied on database-level synchronization resembling event sourcing. The project aimed to unify key business processes such as order and inventory management.",
    myRole: "ERP Developer & Implementation Specialist",
    team: ["Tomasz Smykowski", "Kamil Żelechowski", "Jan Madeyski"],
    technologies: ["Microsoft SQL Server", "Asseco Softlab ERP"]
  },
  {
    id: "production-planning",
    name: "Production planning",
    category: "Production",
    status: "Retired",
    clients: ["B.D.Art"],
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2016-06-01",
    dateStart: "2015-11-01",
    description: "A production scheduling interface based on a Gantt chart integrated with Asseco Softlab ERP. The solution allowed users to visualize and manage production plans using a commercial JavaScript component. It included integration of production data through Microsoft SQL Server and customization of the frontend within the ERP environment.",
    myRole: "ERP Developer & Implementation Specialist",
    team: ["Tomasz Smykowski", "Kamil Żelechowski", "Jan Madeyski"],
    technologies: ["JavaScript", "Microsoft SQL Server", "Asseco Softlab ERP"]
  },
  {
    id: "wms",
    name: "Warehouse Management System (WMS)",
    category: "Production",
    status: "Live",
    clients: ["Padma Art", "Padma30", "Novigo"],
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2016-07-01",
    dateStart: "2015-02-01",
    description: "Contributed to the development and implementation of a custom WMS module within Asseco Softlab ERP, adapted to the operational needs of three different companies.",
    myRole: "ERP Developer & Implementation Specialist",
    team: ["Tomasz Smykowski", "Kamil Żelechowski", "Jan Madeyski"],
    technologies: ["Microsoft SQL Server", "Asseco Softlab ERP"]
  },
  {
    id: "edi",
    name: "EDI",
    category: "Production",
    status: "Live",
    clients: ["Padma Art", "Padma30", "Novigo"],
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2018-01-01",
    dateStart: "2015-01-01",
    description: "EDI integration between IKEA and their suppliers integrated with Asseco Softlab ERP.",
    myRole: "Integration Support Developer",
    team: ["Tomasz Smykowski", "Krzysztof Góra", "Jan Madeyski"],
    technologies: ["Asseco Softlab ERP", "Microsoft SQL Server", "Scala", "XML", "EDI"]
  },
  {
    id: "litemes",
    name: "LiteMES",
    category: "Production",
    status: "Retired",
    clients: ["B.D.Art"],
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2017-02-01",
    dateStart: "2016-02-01",
    description: "A manufacturing execution system tailored to production floor operations, integrated with ERP, and extended with modules for service tracking and time & attendance (RCP). Supported RFID and barcode-based workflows.",
    myRole: "Lead Developer & System Architect",
    team: ["Tomasz Smykowski", "Piotr Lotka", "Jan Madeyski"],
    technologies: ["PHP", "Microsoft SQL Server", "JavaScript", "jQuery", "Bootstrap", "HTML"]
  },
  {
    id: "tax-order",
    name: "Tax Order",
    category: "Production",
    status: "Retired",
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2018-02-01",
    dateStart: "2017-07-01",
    description: "Tax Order is a web application for managing the tax order of a company.",
    myRole: "Full Stack Developer",
    team: ["Mariusz Roszkowski", "Piotr Lotka", "Jan Madeyski"],
    technologies: ["EmberJS", "JavaScript", "Ruby", "Ruby on Rails", "PostgreSQL", "HTML"]
  },
  {
    id: "portal-klienta",
    name: "Portal Klienta",
    category: "Production",
    status: "Live",
    company: "Skłodowscy sp. z o.o.",
    dateEnd: null,
    dateStart: "2018-01-01",
    description: "A comprehensive client portal enabling customers to access and manage their financial documents, invoices, and account information. The system integrates with ERP systems to provide real-time data synchronization and automated document generation. Features include role-based access control, document search and filtering, payment tracking, and automated notifications.",
    myRole: "Team Lead & System Architect",
    scale: {
      budget: "large",
      duration: 84, // 7 years ongoing
      teamSize: 8,
      users: 500
    },
    team: ["Piotr Kaczmarski", "Jan Madeyski", "Mateusz Tryniszewski", "Piotr Lotka", "Zbigniew Wiśnik", "Anna Narożnik", "Paweł Khmara", "Mariusz Roszkowski", "Edyta Szubińska", "Damdin Oyunkhu"],
    technologies: ["PHP", "Laravel", "Microsoft SQL Server", "Vue.js", "JavaScript", "HTML", "Docker", "Apache", "Nginx", "Git"],
    links: {
      demo: "https://portal-klienta.sklodowscy.pl"
    }
  },
  {
    id: "ksef",
    name: "KSeF integration for Portal Klienta",
    category: "Internal",
    status: "Retired",
    company: "Skłodowscy sp. z o.o.",
    dateStart: "2022-06-01",
    dateEnd: "2023-05-26",
    description: "Developed a comprehensive microservice to integrate Poland's KSeF (National System of e-Invoices) with our existing client portal. The system handles XML invoice processing, validation, and automated submission to government services, ensuring compliance with Polish e-invoicing regulations while providing seamless user experience.",
    myRole: "Full Stack Developer",
    team: ["Jan Madeyski", "Zbigniew Wiśnik"],
    technologies: ["PHP", "Laravel", "PostgreSQL", "XML", "Git", "Docker"]
  },
  {
    id: "e-doreczenia",
    name: "e-doręczenia",
    category: "Internal",
    status: "Retired",
    company: "Skłodowscy sp. z o.o.",
    dateStart: "2025-03-01",
    dateEnd: "2025-04-01",
    description: "Built a modern web portal that integrates with Poland's official e-Doręczenia (electronic delivery) system, enabling secure digital document delivery and receipt confirmation. The application features a responsive Vue.js frontend and a robust Django backend handling API communications with government services.",
    myRole: "Full Stack Developer",
    technologies: ["Python", "Django", "Vue.js", "TypeScript", "TailwindCSS", "HTML", "CSS", "Git", "Docker"]
  },
  {
    id: "jira-integration",
    name: "JIRA Integration",
    category: "Internal",
    status: "Live",
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2025-07-01",
    dateStart: "2025-05-01",
    description: "Developed a comprehensive JIRA Connect App and microservice to seamlessly integrate project management workflows with our internal systems. The solution synchronizes issues, worklogs, and project data bidirectionally, enabling automated time tracking, project reporting, and workflow management while maintaining data consistency across platforms.",
    myRole: "Full Stack Developer & System Architect",
    technologies: ["Python", "Flask", "Jira", "Docker", "Git", "Linux", "Connect App"],
  },
  {
    id: "documents-generator",
    name: "Documents Generator",
    category: "Internal",
    status: "Live",
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2025-07-01",
    dateStart: "2025-05-01",
    description: "Built a flexible document generation microservice that creates professional business documents from templates. The system handles dynamic content injection, formatting, and supports various output formats for generating contracts, agreements, and other business documentation with consistent branding and legal compliance.",
    myRole: "Full Stack Developer & System Architect",
    team: ["Jan Madeyski", "Piotr Lotka"],
    technologies: ["Python", "Flask", "TypeScript", "Vue.js", "HTML", "CSS",  "Git"],
  },
  {
    id: "azure-ocr-service",
    name: "Azure OCR Service",
    category: "Internal",
    status: "Live",
    company: "Skłodowscy sp. z o.o.",
    dateEnd: "2025-07-01",
    dateStart: "2025-05-01",
    description: "Implemented an intelligent document processing microservice leveraging Azure Computer Vision API to extract and digitize text from scanned documents, invoices, and forms. The service includes preprocessing capabilities, confidence scoring, and structured data extraction to automate document digitization workflows and reduce manual data entry.",
    myRole: "Full Stack Developer & System Architect",
    technologies: ["Python", "Django", "Azure", "Vue.js", "TypeScript", "TailwindCSS", "Docker", "Git", "Linux"],
  },
  {
    id: "saasbase",
    name: "SaasBase",
    category: "Demo",
    status: "Staging",
    company: "DEV Made IT",
    dateEnd: "2025-07-30",
    dateStart: "2025-04-01",
    description: "A comprehensive multi-tenant SaaS platform designed for small to medium businesses to manage their operations. Features include company management, financial document handling, task management, and team collaboration. The system integrates with multiple external APIs including Polish REGON database for company verification, Ministry of Finance APIs, EU VIES for VAT validation, and IBAN verification services. Includes Stripe integration for subscription payments and comprehensive admin dashboard.",
    links: {
      demo: "https://saasbase.ovh"
    },
    myRole: "Founder & Full Stack Developer",
    scale: {
      budget: "small",
      duration: 4,
      teamSize: 1,
      users: 50
    },
    technologies: ["PHP", "Laravel", "PostgreSQL", "HTML", "CSS", "TypeScript", "Vue.js", "TailwindCSS", "XML", "Docker", "Git", "Linux", "Caddy"]
  },
  {
    id: "company-hub",
    name: "Company Hub",
    category: "Demo",
    status: "Staging",
    company: "DEV Made IT",
    dateEnd: "2025-07-30",
    dateStart: "2025-07-01",
    description: "Api service integrating company data from REGON, MF, VIES and IBAN APIs.",
    myRole: "Founder & Full Stack Developer",
    technologies: ["Python", "FastAPI", "TypeScript", "React", "Next.js", "HTML", "TailwindCSS", "PostgreSQL", "Docker", "Git", "Linux"],
    links: {
      demo: "https://company-hub.dev-made.it"
    }
  },
  {
    id: "madeyski-org",
    name: "Madeyski.org",
    category: "Production",
    status: "Live",
    company: "DEV Made IT",
    dateEnd: "2025-07-30",
    dateStart: "2025-07-01",
    description: "Development of a personal website for a software engineer.",
    myRole: "Frontend Developer",
    technologies: ["TypeScript", "Astro", "TailwindCSS", "HTML", "CSS", "Git", "Caddy"],
    clients: ["Jan Madeyski"],
    links: {
      demo: "https://madeyski.org",
      github: "https://github.com/jm-sky/madeyski.org"
    }
  },
  {
    id: "dev-made-it-template",
    name: "DEV Made IT Template",
    category: "Production",
    status: "Live",
    company: "DEV Made IT",
    dateStart: "2025-07-01",
    dateEnd: null,
    description: "A reusable template for building company websites with modern technologies. Multiple client websites have been built using this template, featuring responsive design, performance optimization, and SEO-friendly structure.",
    myRole: "Frontend Developer",
    technologies: ["TypeScript", "Nuxt", "TailwindCSS", "HTML", "CSS", "Git", "Caddy"],
    clients: ["DEV Made IT", "WIARBUD", "SAVA GROUP", "Kraina Snów"],
    subProjects: [
      {
        name: "DEV Made IT",
        url: "https://dev-made.it"
      },
      {
        name: "WIARBUD",
        url: "https://wiarbud.dev-made.it"
      },
      {
        name: "SAVA GROUP",
        url: "https://sava-group.pl"
      },
      {
        name: "Kraina Snów",
        url: "https://kraina-snow.dev-made.it"
      }
    ]
  },
  {
    id: "ops-monitor",
    name: "Ops Monitor",
    category: "Internal",
    status: "Live",
    clients: ["Skłodowscy sp. z o.o."],
    company: "DEV Made IT",
    dateEnd: null,
    dateStart: "2025-10-30",
    description: "Central operations monitoring system that polls remote servers and applications for health and system metrics, stores historical snapshots in PostgreSQL, and presents them on a Vue 3 dashboard. Sends deduplicated alerts via MS Teams webhooks with per-channel routing, quiet hours, and severity thresholds. A lightweight standalone Python agent runs on each monitored server to report system metrics (CPU, memory, disk, pending updates, reboot status).",
    myRole: "Full Stack Developer & System Architect",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Vue.js", "TypeScript", "Pinia", "TailwindCSS", "WebAuthn", "Docker", "Git", "Linux"],
  },
  {
    id: "ai-kancelaria",
    name: "AI Kancelaria",
    category: "Internal",
    status: "Staging",
    company: "Skłodowscy sp. z o.o.",
    dateEnd: null,
    dateStart: "2026-06-05",
    description: "Internal proof-of-concept for an AI assistant layered over the firm's back-office systems: a chat agent that lets employees query business data in natural language and get answers with source citations. Explores a range of AI techniques — a prompt router for query classification, RAG over a knowledge base (Qdrant + bge-m3 embeddings), persistent facts memory injected into context, and a growing set of MCP (Model Context Protocol) tool servers integrating multiple internal systems for read-only data access. Ships as both a web app and a Windows desktop client (Tauri), running on a self-hosted LLM (Ollama).",
    myRole: "Full Stack Developer & System Architect",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Tauri", "Rust", "Ollama", "Qdrant", "PostgreSQL", "MCP", "Docker", "Git"],
  },
  {
    id: "wymiary-ai",
    name: "Wymiary AI",
    category: "Internal",
    status: "Staging",
    clients: ["Todis"],
    company: "Skłodowscy sp. z o.o.",
    dateEnd: null,
    dateStart: "2026-04-22",
    description: "An AI-powered classifier that automatically assigns accounting dimension codes to invoice line items, supporting the bookkeeping process — a decision-support tool reviewed by accountants. Uses a two-stage RAG + LLM pipeline (semantic search with Qdrant + classification with Ollama) orchestrated in n8n, with a dedicated dashboard for monitoring classification quality and throughput. Currently being rolled out to production.",
    myRole: "Lead Developer & System Architect",
    team: ["Jan Madeyski", "Mateusz Tryniszewski"],
    technologies: ["n8n", "Qdrant", "Ollama", "PostgreSQL", "Redis", "React", "TypeScript", "Hono", "Python", "Docker", "Git"],
  }
];
