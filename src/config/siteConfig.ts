// src/config/siteConfig.ts

export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang?: string; code: string };

export type Blog = {
  slug: string;
  title: string;
  date: string;            // ISO or human-readable
  tags: string[];
  excerpt: string;
  readingTimeMins?: number;
  hero?: string;           // optional blog hero image
  content: BlogBlock[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem?: string;
  approach: string[];      // required to avoid optional TS errors
  challenges: string[];
  optimizations: string[];
  impact?: string;
  tech: string[];          // required
  images?: string[];
  tags?: string[];
};

export const siteConfig = {
  // ---- Branding ----
  name: "Raviteja NB",
  authorName: "Raviteja NB",
  // legacy key used by some components:
  AuthorName: "Raviteja NB",

  tagline: "Data Scientist (6+ yrs) • GenAI (3 yrs) • IIT Madras",
  description:
    "Data Scientist with 6+ years of experience building predictive, data-intelligent systems that combine forecasting, anomaly detection, and agentic AI to transform data into autonomous decision intelligence.",

  // some components read this directly:
  email_g: "ravitejanb@gmail.com",

  links: {
    email: "mailto:ravitejanb@gmail.com",
    phone: "+91-9940599597",
    github: "https://github.com/ravic8",
    linkedin: "https://www.linkedin.com/in/raviteja-n-b-aab389119/",
    code360: "https://www.naukri.com/code360/profile/7f5f63ae-dd85-4ccb-ad7b-2371ea6dd314",
    leetcode: "https://leetcode.com/u/ravitejanb/",
  },

  // ---- Home (legacy consumers expect these) ----
  wins: [
    "Cut query latency ~50% with ClickHouse partitions + MVs for live dashboards.",
    "Airflow + MLflow pipeline across 20k+ IoT sites.",
    "Top 20% globally in WorldQuant BRAIN IQC 2024.",
  ],
  current: [
    "Operational analytics & predictive maintenance (SiteIQ).",
    "Agentic research stack for market intelligence (Atlas/Lens).",
  ],

  home: {
    card1_des:
      "I design production-grade forecasting and anomaly systems, ship agentic pipelines that automate data quality and reporting, and optimize warehouses for low-latency analytics.",
    whatIDo: [
      "Time-series forecasting & anomaly detection in production.",
      "Agentic pipelines (LLMs + tools) for data/ML ops.",
      "Analytics on ClickHouse/Timescale/Redshift.",
    ],
    recentWins: [
      "↓ ~50% query latency via ClickHouse MVs/partitions.",
      "10k+ site ML pipeline with Airflow + MLflow.",
      "Ranking & backtests automation for markets.",
    ],
    currently: [
      "SiteIQ: forecasting, anomalies, predictive maintenance.",
      "Atlas/Lens: agentic research & reporting.",
    ],
  },

  // ---- About ----
  about: {
    summary: [
      "Data Scientist with 6+ years blending data engineering & ML to ship decision automation. ~3 years building GenAI/agentic systems for financial research and operations.",
      "Tooling: Python, SQL, Airflow, MLflow, Polars/Pandas, ClickHouse/Timescale/Redshift, Kafka, FastAPI, Rust (exploring). Forecasting (Prophet/LightGBM/LSTM), anomaly detection, model serving.",
      "IIT Madras alumnus; MSc Financial Engineering (WorldQuant University, 2025–27).",
    ],
    skills: [
      { title: "ML & GenAI", items: ["Forecasting (Prophet/LightGBM/LSTM)", "Anomaly detection", "RAG/agents", "Evaluation/guardrails"] },
      { title: "Data Engineering", items: ["Airflow/Mage", "Kafka", "ClickHouse/Timescale/Redshift", "S3/Glue/Lambda", "MLflow/DBT", "CI/CD"] },
      { title: "Backend", items: ["FastAPI", "Rust (exploring)", "REST/gRPC", "Serverless"] },
      { title: "Frontend", items: ["React", "TypeScript"] },
      { title: "Viz", items: ["Plotly/Plotly Express", "Dash/Streamlit", "Plausible/Umami"] },
    ],

    // Education: B.Tech & M.Tech at IIT Madras; keep MSc
    education: [
      "M.Sc. Financial Engineering — WorldQuant University (2025–27)",
      "B.Tech & M.Tech — IIT Madras",
    ],

    // Certifications: keep other certs here (not the two achievements)
    certifications: [
      "Data Structures and Algorithms — Coding Ninjas (Aug 2024)",
      "Introduction to Python — Coding Ninjas (Apr 2024)",
      "Supervised Machine Learning: Regression & Classification — DeepLearning.AI (Feb 2024)",
    ],

    // NEW: Achievements block (rendered on About page)
    achievements: [
      "WorldQuant BRAIN — Gold Level & Top 20% Global (Apr 2024)",
      "CAT 2023 — 96.48 percentile",
    ],

    // (kept for reference; About page uses experience as the single source)
    timeline: [
      {
        date: "Feb 2025 – Present",
        title: "Senior AI/ML Engineer — QTRAMS (SiteIQ)",
        description: "Predictive maintenance, anomaly detection, and realtime ops analytics.",
        tags: ["Time-series", "MLOps", "ClickHouse"],
        points: [
          "Airflow + MLflow pipeline across 10k+ IoT retail sites.",
          "Forecasting & anomaly detection for proactive maintenance.",
          "Realtime intelligence layer in ClickHouse; partitions+MVs → ~50% faster queries.",
        ],
      },
      {
        date: "Aug 2023 – Jan 2025",
        title: "AI/ML Engineer — NSK Software Solutions",
        description: "Streaming inference for markets; agentic research stack.",
        tags: ["Streaming", "Finance", "Agents"],
        points: [
          "Kafka + Rust + FastAPI microservices for <20 ms signals.",
          "LightGBM/LSTM forecasting + backtests; strategy scoring.",
          "Timeseries warehouse on S3 + Timescale/Redshift; Airflow digests.",
        ],
      },
      {
        date: "Jan 2022 – Jul 2023",
        title: "AI/ML Engineer — AeroPartsNow (eCommerce)",
        description: "Inventory intelligence & demand forecasting.",
        tags: ["eCommerce", "Forecasting"],
        points: [
          "Pipelines on AWS S3/Glue/RDS with MLflow monitoring.",
          "Sales-trend & supplier scoring; ~35% planning lift.",
        ],
      },
      {
        date: "Aug 2016 – Nov 2021",
        title: "Operations Manager — Coal India Ltd.",
        description: "Digital ops & dashboards; spares planning pilots.",
        tags: ["Ops", "Dashboards", "Inventory"],
        points: [
          "eTendering rollout → 50% faster cycles; ₹10+ cr e-procurement.",
          "Realtime training dashboards across 120+ programs.",
          "ML-assisted spares planning for heavy equipment at CCL depots.",
        ],
      },
    ],

    experience: [
      {
        company: "QTRAMS (SiteIQ)",
        role: "Senior AI/ML Engineer",
        period: "Feb 2025 – Present",
        domain: "Operational analytics & predictive maintenance",
        bullets: [
          "Airflow + MLflow pipeline across 10k+ IoT sites.",
          "Forecasting & anomaly detection (>90% targets) for proactive maintenance.",
          "ClickHouse MVs/partitions → ~50% faster analytics.",
        ],
      },
      {
        company: "NSK Software Solutions",
        role: "AI/ML Engineer",
        period: "Jan 2022 – Jan 2025",
        domain: "Data Science & ML for FinTech and eCommerce clients",
        clients: ["Chain8", "AeroPartsNow"],
        bullets: [
          "Led two client engagements under NSK:",
          "→ Chain8 – Kafka + Rust + FastAPI streaming stack for sub-20 ms inference; LightGBM/LSTM forecasting with live backtests across 50+ assets.",
          "→ AeroPartsNow – AWS (S3/Glue/Lambda/RDS) pipelines with MLflow-tracked demand forecasting and supplier scoring (~35% planning lift).",
          "Shared MLflow + Airflow backbone for retraining, monitoring, and Slack digests.",
        ],
      },
      {
        company: "Coal India Limited",
        role: "Operations Manager",
        period: "Aug 2016 – Nov 2021",
        domain: "Digital ops",
        bullets: [
          "eTendering → 50% faster cycles; ₹10+ cr e-procurement.",
          "Realtime dashboards for 120+ programs; 30k+ training-days.",
          "Heavy-machinery spare-parts optimization across CCL depots using intermittent-demand forecasting and (s,S) policies; standardized a monthly planning playbook.",
        ],
      },
    ],
  },

  // ---- Projects ----
  projects: [
    // 1. SiteIQ Intelligence (latest)
    {
      slug: "siteiq-intelligence",
      title: "SiteIQ — Predictive Maintenance & Intelligence Layer",
      summary:
        "AI-driven operational intelligence system powering predictive maintenance and warranty analytics for 10K+ IoT retail sites.",
      problem:
        "Frequent dispenser failures and rising warranty costs across large-scale retail networks.",
      approach: [
        "Built an Airflow + MLflow pipeline for automated model retraining and deployment.",
        "Implemented forecasting and anomaly-detection models using Prophet, LightGBM, and LSTM.",
        "Designed a ClickHouse-based intelligence layer with optimized partitions and materialized views for sub-second analytics.",
      ],
      impact:
        "Delivered proactive maintenance alerts (>90% accuracy) and reduced query latency by ~50%, enabling near-real-time operational visibility.",
      tech: ["Python", "Airflow", "MLflow", "ClickHouse", "Prophet", "LightGBM", "LSTM"],
      tags: ["MLOps", "Forecasting", "Anomaly Detection", "Operational Analytics"],
    },

    // 2. Atlas Agentic Data Engineer
    {
      slug: "atlas-agentic-data-engineer",
      title: "Atlas — Agentic Data Engineering Agent",
      summary:
        "Autonomous agent that orchestrates EOD market-data ingestion, validation, and alerting with intelligent recovery and reporting.",
      problem: "Manual and error-prone EOD ingestion for multiple financial datasets.",
      approach: [
        "Automated fetch → validation → publish cycles through Airflow agents.",
        "Integrated Slack and metadata lineage for monitoring and recovery.",
        "Built LLM-based orchestration to summarize data-quality reports.",
      ],
      impact:
        "Achieved fully automated EOD ingestion and validation for 50+ assets, reducing manual effort by >80%.",
      tech: ["Python", "Airflow", "ClickHouse", "Slack API", "LLMs (tools)"],
      tags: ["Agentic AI", "Pipelines", "Data Quality", "Automation"],
    },

    // 3. Lens AI Research Assistant
    {
      slug: "lens-ai-research-assistant",
      title: "Lens — AI Financial Research Assistant",
      summary:
        "Agentic workflow for automated forecasting, backtesting, and narrative generation in financial research.",
      approach: [
        "Used RAG over market datasets and notebooks to enable contextual reasoning.",
        "Automated forecasting and backtesting (LightGBM, LSTM) with ranking logic.",
        "Generated interpretive summaries using LLMs with guardrails and evaluation checks.",
      ],
      impact:
        "Enabled continuous research automation and data-driven narrative generation for quantitative analysts.",
      tech: ["Python", "LLMs", "LightGBM", "LSTM", "Backtesting"],
      tags: ["GenAI", "Finance", "Research", "Automation"],
    },

    // 4. Chain8 Streaming Inference
    {
      slug: "chain8-low-latency-inference",
      title: "Chain8 — Low-Latency Streaming Inference",
      summary:
        "Rust-based streaming stack delivering sub-20 ms inference for real-time stock and crypto price signals.",
      approach: [
        "Deployed Kafka + Rust + FastAPI microservices for concurrent event processing.",
        "Integrated TimescaleDB and S3-based warehouse for historical and real-time views.",
      ],
      impact:
        "Reduced end-to-end latency to <20 ms and enabled scalable live model serving across 50+ assets.",
      tech: ["Rust", "FastAPI", "Kafka", "TimescaleDB", "S3", "Redshift"],
      tags: ["Streaming", "Real-Time", "Inference", "Infra"],
    },

    // 5. AeroPartsNow Inventory Intelligence
    {
      slug: "apn-inventory-intelligence",
      title: "AeroPartsNow — Inventory Intelligence",
      summary:
        "ML-powered demand-forecasting and replenishment alerts for aftermarket e-commerce parts.",
      approach: [
        "Developed pipelines on AWS (S3, Glue, RDS, Lambda) for continuous data updates.",
        "Implemented MLflow-tracked forecasting models for demand and supplier scoring.",
      ],
      impact:
        "Improved inventory planning efficiency by ~35% and automated weekly procurement alerts.",
      tech: ["Python", "AWS (S3/Glue/Lambda/RDS)", "MLflow"],
      tags: ["Forecasting", "eCommerce", "Supply Chain", "AWS"],
    },

    // 6. CCL Heavy-Machinery Inventory Optimization (simplified)
    {
      slug: "ccl-inventory-optimization",
      title: "CCL — Heavy-Machinery Inventory Optimization",
      summary:
        "ML-based spare-parts planning system for heavy equipment across CCL depots.",
      approach: [
        "Consolidated depot-level issue-return data and trained intermittent-demand forecasting models.",
        "Optimized reorder policies and safety-stock levels using Croston/TSB and service-level constraints.",
      ],
      impact:
        "Reduced stockouts on critical spares and standardized monthly procurement planning.",
      tech: ["Python", "Pandas", "Prophet", "Croston/TSB", "Power BI"],
      tags: ["Inventory", "Forecasting", "Optimization", "Operations"],
    },
  ] as Project[],

  // ---- Blogs ----
  blogs: [] as Blog[],

  // ---- Contact ----
  contact: {
    hero_title: "Let’s build production ML that moves business metrics",
    hero_description:
      "Open to collaborations & roles in Data Science / ML / GenAI. Based in India (IST). Prefer email or LinkedIn. Rapid prototypes welcome.",
    headline: "Let’s build production ML that moves business metrics.",
    availability: "Open to collaborations & roles in Data Science / ML / GenAI.",
    location: "India (IST, UTC+5:30)",
    note: "Best via email or LinkedIn. Open to rapid prototypes and pilot engagements.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
