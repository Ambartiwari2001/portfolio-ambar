export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "Cloud & DevOps" | "Microservices & Distributed" | "Real-Time & APIs" | "AI & Data Pipelines" | "Full Stack & RBAC";
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  accentColor: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  isCurrent?: boolean;
  architectureFocus?: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: string; iconKey: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ambar Tiwari",
    role: "Software & Systems Engineer",
    title: "Software & Systems Engineer",
    company: "Intelliworkz Business Solutions",
    headline: "Engineering Scalable Backends, Distributed Architectures & Cloud Infrastructure",
    badge: "Software Engineer • Cloud & Distributed Systems",
    email: "ambartiwariji1995@gmail.com",
    phone: "+91 7898233354",
    github: "https://github.com/Ambartiwari2001",
    linkedin: "https://www.linkedin.com/in/ambar-tiwari-098b34227",
    portfolioUrl: "https://portfolio-ambar.vercel.app/",
    resumeUrl: "/Ambar-Tiwari-CV.pdf",
    avatar: "/Me.png",
    location: "Ahmedabad, Gujarat, India",
    origin: "Madhya Pradesh, India",
    timezone: "IST (UTC+5:30)",
    education: {
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Science",
      institution: "AKS University, Satna (M.P.)",
      period: "2022 — 2024",
      score: "CGPA: 8.06 / 10.00",
    },
    bio: "Platform-agnostic Software & Systems Engineer with 2.5+ years of production experience architecting high-throughput backend services, distributed systems, and automated cloud infrastructure. Specialized in building decoupled microservices, real-time event-driven systems, asynchronous data pipelines, and Infrastructure as Code with Terraform, AWS, and Docker. Committed to writing robust, self-healing, and maintainable systems without technology lock-in.",
  },

  stats: [
    { label: "Production Engineering", value: "2.5+ Yrs" },
    { label: "API Benchmarks", value: "Sub-80ms" },
    { label: "Pipeline Throughput", value: "100k+ Records" },
    { label: "MCA Academics", value: "8.06 CGPA" },
  ],

  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
    },
    {
      name: "React Certification",
      issuer: "HackerRank",
      year: "2024",
    },
    {
      name: "Java Developer Certification",
      issuer: "Signimus Technologies",
      year: "2024",
    },
  ] as Certification[],

  gfgAchievement: {
    title: "GeeksforGeeks Coding Milestone",
    badge: "Official GFG T-Shirt",
    quote: "Programmers prefer Dark Mode because Light Mode Attracts Bugs",
    description:
      "Consistent daily coding and problem solving on GeeksforGeeks. Earned platform points through daily problem solving and redeemed the official GeeksforGeeks T-shirt.",
    tags: ["GeeksforGeeks", "Daily Coding", "Problem Solving", "Dark Mode T-Shirt"],
  },

  highlights: [
    {
      title: "Platform-Agnostic System Design",
      desc: "Choosing the optimal language and paradigm for the problem — whether TypeScript, Python, Java, or PHP — with strict architectural boundaries.",
    },
    {
      title: "Infrastructure as Code (Terraform) & Cloud",
      desc: "Automating cloud provisioning with Terraform, containerizing microservices with Docker, and architecting cost-effective AWS infrastructure.",
    },
    {
      title: "Real-Time Event Streams & WebSockets",
      desc: "Engineering bi-directional live telemetry, zero-refresh messaging gateways, and asynchronous Redis queues capable of heavy throughput.",
    },
    {
      title: "Automated Data Ingestion & AI Pipelines",
      desc: "Developing batch data pipelines with automated LLM content enrichment, chunked database inserts, and 100% data integrity.",
    },
  ],

  skillCategories: [
    {
      title: "Cloud Infrastructure & DevOps",
      skills: [
        { name: "Terraform (IaC)", level: "Advanced", iconKey: "box" },
        { name: "Docker & Containerization", level: "Expert", iconKey: "box" },
        { name: "AWS Cloud (VPC, S3, EC2/ECS)", level: "Advanced", iconKey: "cloud" },
        { name: "AWS Architecture & Costing", level: "Advanced", iconKey: "sparkles" },
        { name: "Linux Server Administration", level: "Expert", iconKey: "terminal" },
        { name: "GitHub Actions & CI/CD", level: "Advanced", iconKey: "git" },
      ],
    },
    {
      title: "Backend & Distributed Systems",
      skills: [
        { name: "NestJS (TypeScript)", level: "Advanced", iconKey: "server" },
        { name: "Node.js & Express", level: "Advanced", iconKey: "terminal" },
        { name: "Python (FastAPI / Automation)", level: "Advanced", iconKey: "code" },
        { name: "Laravel (PHP)", level: "Expert", iconKey: "code" },
        { name: "Java (OOP & Core)", level: "Advanced", iconKey: "terminal" },
        { name: "Microservices & Monorepos", level: "Advanced", iconKey: "layers" },
        { name: "RESTful APIs & Swagger", level: "Expert", iconKey: "api" },
        { name: "WebSockets & Event Streams", level: "Advanced", iconKey: "zap" },
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: "Expert", iconKey: "database" },
        { name: "MySQL", level: "Expert", iconKey: "database" },
        { name: "Prisma ORM", level: "Advanced", iconKey: "cpu" },
        { name: "Eloquent ORM", level: "Expert", iconKey: "cpu" },
        { name: "Redis Caching & Queues", level: "Advanced", iconKey: "zap" },
        { name: "MongoDB", level: "Intermediate", iconKey: "database" },
      ],
    },
    {
      title: "Modern Engineering & AI Tooling",
      skills: [
        { name: "OpenAI API & LLM Integrations", level: "Advanced", iconKey: "sparkles" },
        { name: "AI Dev Tools (Cursor, Antigravity)", level: "Expert", iconKey: "terminal" },
        { name: "API Benchmarking & Profiling", level: "Advanced", iconKey: "zap" },
        { name: "Postman & Contract Testing", level: "Expert", iconKey: "check" },
        { name: "JWT & Multi-Role Auth", level: "Expert", iconKey: "shield" },
        { name: "React.js & Next.js Integration", level: "Advanced", iconKey: "react" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "laravel-admin-panel",
      title: "Laravel Admin & RBAC Panel",
      tagline: "Role-Based Access Control & System Management Portal",
      description:
        "Full-stack admin management portal with dynamic role & permission hierarchies, user auditing, and security-hardened backend architecture built with Laravel and MySQL.",
      category: "Full Stack & RBAC",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "RBAC", "Security"],
      metrics: "Live Open-Source Repository",
      githubUrl: "https://github.com/Ambartiwari2001/laravel-admin-panel",
      liveUrl: "https://github.com/Ambartiwari2001/laravel-admin-panel",
      featured: true,
      accentColor: "from-blue-500 to-indigo-600",
    },
    {
      id: "generum-ai-recommender",
      title: "Generum — AI Clothing Recommender",
      tagline: "Attribute-Driven Smart Fashion Recommendation Engine",
      description:
        "An intelligent clothing recommendation engine that maps physical user attributes to dynamic product suggestions with responsive UI and optimized database querying.",
      category: "AI & Data Pipelines",
      tags: ["PHP", "Laravel", "MySQL", "JavaScript", "jQuery", "Recommendation Algorithm"],
      metrics: "Live Open-Source Repository",
      githubUrl: "https://github.com/Ambartiwari2001/Generum-Dress-Recommendation",
      liveUrl: "https://github.com/Ambartiwari2001/Generum-Dress-Recommendation",
      featured: true,
      accentColor: "from-amber-400 to-orange-500",
    },
    {
      id: "cloud-native-microservices-blueprint",
      title: "Cloud-Native Microservices Monorepo",
      tagline: "Enterprise Multi-Role Reference Architecture & Modular Blueprint",
      description:
        "A decoupled microservice monorepo architecture engineered with NestJS, TypeScript, PostgreSQL, and Prisma. Features role-based access control, Docker containerization, API benchmarking harness, and automated CI/CD pipeline workflows for scalable cloud deployments.",
      category: "Microservices & Distributed",
      tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Monorepo", "Microservices"],
      metrics: "Decoupled Multi-Role Monorepo Architecture",
      githubUrl: "https://github.com/Ambartiwari2001",
      liveUrl: "https://ambar-portfolio-rho.vercel.app/",
      featured: true,
      accentColor: "from-cyan-500 to-blue-600",
    },
    {
      id: "terraform-aws-cloud-infrastructure",
      title: "Terraform AWS Infrastructure as Code",
      tagline: "Automated Multi-Tier Cloud Provisioning & Resource Architecture",
      description:
        "Declarative Infrastructure as Code (IaC) repository provisioning production-grade AWS cloud environments with multi-AZ VPC, container orchestration, S3 object storage, secure IAM policies, and automated cost optimization configurations.",
      category: "Cloud & DevOps",
      tags: ["Terraform", "AWS", "IaC", "Docker", "Linux", "Security", "CI/CD"],
      metrics: "Automated Reproducible Cloud Environments",
      githubUrl: "https://github.com/Ambartiwari2001",
      liveUrl: "https://ambar-portfolio-rho.vercel.app/",
      featured: true,
      accentColor: "from-emerald-400 to-teal-500",
    },
    {
      id: "pulseflow-event-gateway",
      title: "PulseFlow Real-Time Event Gateway",
      tagline: "High-Throughput WebSocket Stream & Asynchronous Messaging Engine",
      description:
        "Low-latency real-time communications engine supporting instant messaging, live multi-party alerts, and bi-directional events via WebSockets, Redis backplanes, and background task queues with zero-refresh user interaction.",
      category: "Real-Time & APIs",
      tags: ["WebSockets", "Node.js", "Redis", "TypeScript", "REST APIs", "Docker"],
      metrics: "Zero-Refresh Live Socket Communication",
      githubUrl: "https://github.com/Ambartiwari2001/laravel-admin-panel",
      liveUrl: "https://ambar-portfolio-rho.vercel.app/",
      featured: false,
      accentColor: "from-purple-500 to-indigo-600",
    },
    {
      id: "autoenrich-ai-data-pipeline",
      title: "AutoEnrich High-Throughput Pipeline",
      tagline: "Asynchronous Batch Ingestion with Automated LLM Data Enrichment",
      description:
        "Resilient asynchronous pipeline capable of batch ingesting and processing large datasets with automated metadata synthesis via the OpenAI API. Implements chunked query optimization, batch database inserts, failure retry logic, and zero timeout guarantees.",
      category: "AI & Data Pipelines",
      tags: ["Python", "FastAPI", "OpenAI API", "PostgreSQL", "Background Queues", "Batch Processing"],
      metrics: "Batch Ingestion with Zero Timeout & 100% Integrity",
      githubUrl: "https://github.com/Ambartiwari2001",
      liveUrl: "https://ambar-portfolio-rho.vercel.app/",
      featured: false,
      accentColor: "from-cyan-400 to-blue-500",
    },
  ] as Project[],

  experience: [
    {
      period: "Jul 2026 — Present",
      role: "Software Engineer",
      company: "Intelliworkz Business Solutions Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      isCurrent: true,
      architectureFocus: "Microservices Architecture, Monorepos & Cloud Infrastructure",
      description: [
        "Architecting decoupled, multi-role backend services utilizing NestJS, TypeScript, and PostgreSQL with Prisma ORM.",
        "Structuring system design around Monorepo architecture and microservices patterns for decoupled and high-performance modules.",
        "Documenting AWS cloud services with structured cost estimation to support data-backed infrastructure decisions.",
        "Containerizing application environments with Docker and configuring deployment workflows targeted for AWS cloud infrastructure.",
        "Performing rigorous API benchmarking, latency profiling, and external integration response-time optimization.",
        "Collaborating across teams to integrate backend APIs seamlessly with Next.js frontend interfaces.",
      ],
      skills: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "AWS", "Terraform", "Microservices"],
    },
    {
      period: "Apr 2024 — Jul 2026",
      role: "Software Engineer",
      company: "Amcodr IT Solution",
      location: "Ahmedabad, Gujarat, India",
      isCurrent: false,
      architectureFocus: "High-Throughput APIs, Asynchronous Queues & Real-Time Engines",
      description: [
        "Architected and delivered 60+ RESTful APIs with comprehensive authentication, data indexing, and transaction flows documented via Swagger.",
        "Engineered real-time communications using WebSockets and background event brokers for zero-refresh client interaction.",
        "Designed high-throughput asynchronous data pipelines processing heavy volume workloads with failure retry handling and zero timeouts.",
        "Integrated automated content processing with the OpenAI API for dynamic metadata generation and ingestion.",
        "Optimized database performance through chunked processing, indexed queries, and high-volume batch inserts.",
      ],
      skills: ["Laravel", "PHP", "MySQL", "WebSockets", "Redis", "OpenAI API", "AWS S3", "Swagger", "REST APIs"],
    },
    {
      period: "Jan 2024 — Apr 2024",
      role: "Java Developer Intern",
      company: "Signimus Technologies Pvt. Ltd.",
      location: "Indore, Madhya Pradesh, India",
      isCurrent: false,
      architectureFocus: "Core OOP Systems, JDBC & Database Query Optimization",
      description: [
        "Developed core Java-based backend modules using JDBC and MySQL for structured transaction and record workflows.",
        "Designed and implemented REST APIs with authentication following the MVC architectural pattern.",
        "Gained hands-on experience in Java OOP principles, SQL query optimization, and structured backend development.",
      ],
      skills: ["Java", "JDBC", "MySQL", "REST APIs", "MVC", "OOP", "SQL Optimization"],
    },
  ] as Experience[],
};
