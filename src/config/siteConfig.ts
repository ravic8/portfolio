// src/config/siteConfig.ts

// ---- Types ----
export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string[];
  challenges?: string[];
  optimizations?: string[];
  impact?: string;
  tech: string[];
  images?: string[];
};

type About = {
  summary: string[];
  skills: { title: string; items: string[] }[];
  timeline: { date: string; title: string; description: string; tags?: string[] }[];
  experience: { company: string; role: string; period: string; domain?: string; bullets: string[] }[];
  achievements: string[];
  education: string[];
  certifications: string[];
};

// Blog rich content blocks
export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; lang?: string; text: string };

export type Blog = {
  slug: string;
  title: string;
  date: string; // ISO or yyyy-mm-dd
  readingTimeMins: number;
  tags: string[];
  hero?: string; // /blog/<slug>/hero.jpg
  excerpt: string;
  content: BlogBlock[];
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    code360?: string;
    leetcode?: string;
    phone?: string;
  };
  wins: string[];
  current: string;
  about: About;
  projects: Project[];
  blogs: Blog[];
};

// ---- Config ----
export const siteConfig: SiteConfig = {
  // --- Global ---
  name: "Raviteja NB",
  tagline: "Data Engineering & AI Systems",
  description: `I build reliable data platforms and forecasting pipelines on AWS.
Recently: MLflow + Airflow for 2000+ sites, ClickHouse tuned with
MVs/partitions, and low-latency Kafka/WebSocket streams for market data.`,

  links: {
    github: "https://github.com/ravic8",
    linkedin: "https://www.linkedin.com/in/raviteja-n-b-aab389119/",
    email: "mailto:ravitejanb@gmail.com",
    code360: "https://www.naukri.com/code360/profile/7f5f63ae-dd85-4ccb-ad7b-2371ea6dd314",
    leetcode: "https://leetcode.com/u/ravitejanb/",
    phone: "+91 9940599597",
  },

  wins: [
    "2000+ sites on ML pipelines",
    "10–20ms streaming latencies",
    "~50% faster ClickHouse queries",
  ],

  current: `Writing weekly and building Atlas (data engineering observer) — case studies on the blog.`,

  // --- ABOUT ---
  about: {
    summary: [
      `Experienced Data Engineer with hands-on design & implementation of scalable data systems across ML pipelines, streaming, data warehousing, and cloud. Focused on reliable, observable pipelines that enable analytics & forecasting.`,
      `Strengths include ClickHouse/Redshift performance tuning, MLflow/Airflow orchestration, Kafka/WebSockets for low-latency delivery, and pragmatic AWS data architecture.`,
    ],
    skills: [
      { title: "Data & Storage", items: ["ClickHouse", "Redshift", "PostgreSQL", "S3/Lakehouse", "Parquet/ICEBERG"] },
      { title: "Pipelines", items: ["Airflow", "Kafka", "Spark", "dbt", "AWS Glue", "Step Functions"] },
      { title: "ML & Ops", items: ["MLflow", "Prophet", "LightGBM", "LSTM", "Batch/Online Inference"] },
      { title: "Infra & Tooling", items: ["AWS", "Docker", "Terraform", "CI/CD", "Lambda", "SNS"] },
      { title: "Languages", items: ["Python", "SQL", "TypeScript"] },
    ],
    timeline: [
      {
        date: "Feb 2025 — Present",
        title: "Senior Data Engineer · QTRAMS IT Solutions",
        description:
          "End-to-end ML pipelines for 2000+ sites with MLflow + Airflow; forecasting models (Prophet, LightGBM, LSTM); ClickHouse perf tuning with dedup, MVs, partitions (≈50% faster).",
        tags: ["MLflow", "Airflow", "ClickHouse", "Forecasting"],
      },
      {
        date: "Jun 2024 — Jan 2025",
        title: "Data Engineer · NSK Software Solutions",
        description:
          "Low-latency (10–20ms) Kafka/WebSocket streaming for 50+ assets; AWS S3 lake for backtests; Redshift + Spark analytics. Also built 50+ pipelines for marketplace inventory sync with S3/Glue/RDS and near-real-time Step Functions + Lambda.",
        tags: ["Kafka", "WebSockets", "S3", "Redshift", "Spark", "Glue", "Lambda"],
      },
      {
        date: "Jan 2022 — Feb 2023",
        title: "Data Migration · eCommerce & Retail",
        description:
          "5TB on-prem SQL Server → Redshift; ~5GB/day loads via S3, Glue, Lambda, SNS; ETL automation, performance tuning (RA3, partitioning, indexing), logging & monitoring.",
        tags: ["Migration", "Redshift", "ETL", "AWS"],
      },
    ],
    experience: [
      {
        company: "QTRAMS IT Solutions",
        role: "Senior Data Engineer",
        period: "Feb 2025 — Present",
        domain: "Gas stations ops, ML pipelines",
        bullets: [
          "E2E ML pipelines for 2000+ sites (MLflow + Airflow) with reproducible workflows",
          "Forecasting using Prophet, LightGBM, LSTM; anomaly detection > 90% accuracy",
          "ClickHouse optimization via dedup, materialized views, partitioning (~50% faster)",
        ],
      },
      {
        company: "NSK Software Solutions",
        role: "Data Engineer",
        period: "Jun 2024 — Jan 2025",
        domain: "Algorithmic Trading (Project TradeLens); eCommerce inventory",
        bullets: [
          "Kafka + WebSockets streaming (10–20ms) for 50+ market assets; real-time pipelines",
          "Data lake (S3) for historical + realtime; Redshift/Spark backtesting & analytics",
          "50+ AWS data pipelines (S3, Glue, RDS); near real-time sync via Step Functions + Lambda",
        ],
      },
      {
        company: "eCommerce & Retail",
        role: "Data Migration",
        period: "Jan 2022 — Feb 2023",
        domain: "Data warehousing & migration",
        bullets: [
          "Migrated 5TB SQL Server → Redshift; automated ETL with S3, Glue, Lambda, SNS",
          "5GB/day ingestion with monitoring, error tracking, and cost-effective RA3 compute",
          "Python ETL for incremental/history loads; partitioning & indexing for performance",
        ],
      },
      {
        company: "Coal India Limited (CIL)",
        role: "Program Coordinator / Operations Manager",
        period: "Aug 2016 — Nov 2021",
        domain: "eTendering, Training Analytics, Construction Project Ops",
        bullets: [
          "Drove digital procurement transformation by initiating an eTendering system at IICM, collaborating with cross-functional teams to move towards a data-driven procurement model — reduced cycle time by 50% while enhancing transparency and accountability; Rs. 10 crores worth of tenders annually processed through the system.",
          "Designed and deployed a real-time training dashboard, tracking 120+ programs annually and 30,000+ participant training days; provided leadership with actionable metrics for planning and resource allocation.",
          "Program-managed collaborations with top national consultancies (CPWD, CMPDI) to deliver projects worth Rs. 18 crores in a 3-year timeline, ensuring budget adherence, contract compliance, and reporting.",
          "Bridged technical implementation (dashboards, systems integration) with strategic leadership — ensuring systems were reliable, scalable, and aligned with organizational goals."
  ],
      },
    ],
    achievements: [
      "IQC 2024: Qualified to Stage 2 (top ~20% globally) at WorldQuant BRAIN",
    ],
    education: [
      "Dual Degree, IIT Madras (2011–2016)",
      "Class XII 96.5% (Maths 99.34%), Class X 93.7% (Maths 99%)",
      "CAT 96.48 percentile (2023)",
    ],
    certifications: [
      "Dataexpert.io Data Engineering Bootcamp (ongoing)",
      "IBM Data Engineering Professional Certificate (ongoing)",
      "Data Structures & Algorithms in Python — Coding Ninjas (completed)",
    ],
  },

  // --- PROJECTS ---
  projects: [
    {
      slug: "c8-airflow",
      title: "c8-airflow · ML Pipelines at Scale",
      summary:
        "End-to-end orchestration of forecasting pipelines using Airflow + MLflow with reproducible runs and safe rollbacks.",
      problem:
        "Manual, brittle retraining across many locations caused drift, regressions, and slow iteration.",
      approach: [
        "Airflow DAGs for ingest → feature build → train → evaluate → register → deploy via MLflow.",
        "Versioned data & environments for reproducibility; lineage & metrics tracked in MLflow.",
        "Canary deploys and policy gates on evaluation + data quality checks.",
      ],
      challenges: [
        "Coordinating location-scoped jobs while containing infra cost.",
        "Avoiding model sprawl; keeping parameters/artifacts traceable.",
      ],
      optimizations: [
        "Batch windowing, DAG concurrency tuning, backfill/catchup strategies.",
        "Artifact dedupe & retention policies; metric-based early stopping.",
      ],
      impact: "Consistent retrains with auditable lineage; fewer failures and faster iteration.",
      tech: ["Airflow", "MLflow", "Python", "AWS"],
      images: ["/projects/c8-airflow/1.jpg", "/projects/c8-airflow/2.jpg"],
    },
    {
      slug: "c8-datalake",
      title: "c8-datalake · ClickHouse Lake & Analytics",
      summary:
        "High-performance analytics on S3-backed ClickHouse tuned via materialized views, partitions, and dedupe.",
      problem:
        "Slow exploratory queries and rising compute on large, append-heavy tables.",
      approach: [
        "Modeled fact/dimension tables; ingest via Kafka/S3 stages.",
        "Materialized views, partitioning, TTLs; compression codecs for balance.",
      ],
      challenges: [
        "Join-heavy queries with skew; cold starts from object storage.",
      ],
      optimizations: [
        "Hot subsets, pre-aggregations for frequent GROUP BYs; dictionary encoding.",
        "Query hints, memory limits; background merge tuning.",
      ],
      impact: "Faster median query times and lower storage/compute overhead.",
      tech: ["ClickHouse", "S3", "Kafka", "Python"],
      images: ["/projects/c8-datalake/1.jpg"],
    },
    {
      slug: "inglorious_crypto",
      title: "inglorious_crypto · Low-Latency Market Data",
      summary:
        "Kafka + WebSocket streaming for many assets with ms-level end-to-end latency and an S3→Redshift + Spark backtesting lake.",
      problem:
        "Traders needed real-time streams alongside reliable historical data for backtesting & analytics.",
      approach: [
        "WebSocket fan-in → Kafka topics → consumers for ETL and fan-out.",
        "Time-partitioned S3 lake; compaction; Redshift/Spark analytics.",
      ],
      challenges: [
        "Bursty market opens, out-of-order events, schema evolution.",
      ],
      optimizations: [
        "Producer/consumer acks & batching; compression; idempotent writes.",
        "Vectorized Spark reads; manifest loads to Redshift.",
      ],
      impact: "Consistent low-latency streams and fast historical analytics.",
      tech: ["Kafka", "WebSocket", "S3", "Redshift", "Spark", "Python"],
      images: ["/projects/inglorious_crypto/1.jpg", "/projects/inglorious_crypto/2.jpg"],
    },
    {
      slug: "anomaly_lightgbm",
      title: "Anomaly Detection · LightGBM/Prophet/LSTM",
      summary:
        "Anomaly detection & forecasting stack with classical + DL models, tracked/versioned in MLflow.",
      problem:
        "Rule-based alarms missed operational anomalies; needed forecasting + robust anomaly scoring.",
      approach: [
        "Features for seasonality/trend/holiday; rolling windows.",
        "Prophet/LGBM/LSTM ensembles; residual-based anomaly scores.",
        "Model registry + batch/adhoc scoring endpoints.",
      ],
      challenges: [
        "Cold starts, sparse segments, holiday shifts; minimize false positives.",
      ],
      optimizations: [
        "Per-segment hyper-params; quantile loss; residual smoothing.",
        "Alert aggregation windows and SLO budgets.",
      ],
      impact: "Improved anomaly precision with clear, explainable alerts.",
      tech: ["LightGBM", "Prophet", "LSTM", "Airflow", "MLflow", "Python"],
      images: ["/projects/anomaly_lightgbm/1.jpg"],
    },
    {
      slug: "atlas-agent",
      title: "Atlas · Data Engineering Agent",
      summary:
        "Assistant that watches pipelines, surfaces issues, and recommends fixes — lightweight, explainable observability.",
      problem:
        "Ops visibility fragmented across logs/metrics/DAG UIs; slow response to issues.",
      approach: [
        "Ingest events from schedulers/ETL; rules + LLM prompts summarize state.",
        "Explainable suggestions (no auto-remediation) with links to run logs.",
      ],
      challenges: [
        "Signal vs noise in alerts; prompt reliability to avoid hallucinations.",
      ],
      optimizations: [
        "Feedback loops on suggestion quality; prompt templates; cached summaries.",
      ],
      impact: "Faster mean-time-to-insight and clearer handoffs; foundation for future auto-fixes.",
      tech: ["TypeScript", "Python", "Airflow APIs", "LLM APIs"],
      images: ["/projects/atlas/1.jpg", "/projects/atlas/2.jpg"],
    },
  ] as Project[],

  // --- BLOGS (5 posts) ---
  blogs: [
    {
      slug: "airflow-mlflow-2000-sites",
      title: "What It Takes to Orchestrate ML for 2000+ Sites (Airflow + MLflow)",
      date: "2025-07-15",
      readingTimeMins: 9,
      tags: ["Airflow", "MLflow", "MLOps", "Pipelines"],
      hero: "/blog/airflow-mlflow-2000-sites/hero.jpg",
      excerpt:
        "Design notes from production: versioned data, reproducible runs, canary gates, and pragmatic failure handling for massive retrains.",
      content: [
        { type: "p", text: "Coordinating thousands of location-scoped retrains sounds glamorous—until you hit cost blowups and brittle DAGs." },
        { type: "h2", text: "Key Design Choices" },
        { type: "ul", items: [
          "A single DAG per domain with dynamic mapping for locations; capped concurrency.",
          "MLflow for metrics, lineage, and model registry—nothing ships without tracked evidence.",
          "Strict canary deploys with evaluation + data quality gates.",
        ]},
        { type: "h2", text: "Failure Handling that Works" },
        { type: "ul", items: [
          "Idempotent tasks with artifact dedupe and TTLs.",
          "Backfills via catchup windows; avoid \"infinite yesterday\".",
          "Alert budgets that page only when SLOs degrade, not for every whisper.",
        ]},
        { type: "p", text: "The result: consistent retrains with auditable lineage and fewer pager rotations." },
      ],
    },
    {
      slug: "clickhouse-tuning-field-notes",
      title: "ClickHouse in the Wild: Field Notes on Making Queries ~50% Faster",
      date: "2025-06-24",
      readingTimeMins: 7,
      tags: ["ClickHouse", "Analytics", "Databases"],
      hero: "/blog/clickhouse-tuning-field-notes/hero.jpg",
      excerpt:
        "Materialized views, partitions, and dedup aren’t stickers—here’s how they actually reduce cost and latency in practice.",
      content: [
        { type: "h2", text: "Model Tables for the Questions You’ll Ask" },
        { type: "p", text: "Skew and join explosions vanish when facts/dims are shaped to the queries that matter." },
        { type: "ul", items: [
          "MV pre-aggregations for hot dashboards.",
          "Partitioning by date + id to bound merges.",
          "ZSTD + codecs: balance storage and CPU cycles.",
        ]},
        { type: "h2", text: "Ops Tips" },
        { type: "ul", items: [
          "Hot subsets to dodge cold S3 starts.",
          "Query memory limits and grace re-tries.",
          "Observe background merges—don’t let them starve selects.",
        ]},
      ],
    },
    {
      slug: "kafka-websocket-20ms",
      title: "Streaming at 10–20 ms: Kafka + WebSockets, Lessons Learned",
      date: "2025-05-30",
      readingTimeMins: 8,
      tags: ["Kafka", "Streaming", "WebSockets", "Low Latency"],
      hero: "/blog/kafka-websocket-20ms/hero.jpg",
      excerpt:
        "Real-time market data for 50+ assets means solving bursty opens, backpressure, and idempotency—without breaking the bank.",
      content: [
        { type: "h2", text: "Architecture in Brief" },
        { type: "ul", items: [
          "WS fan-in → Kafka → consumers (ETL, fan-out, storage).",
          "Time-partitioned S3 for backtests; Redshift/Spark for analysis.",
        ]},
        { type: "h2", text: "Keeping Latency Honest" },
        { type: "ul", items: [
          "End-to-end markers, not just broker lag.",
          "Producer acks, linger.ms, and compression tuned per topic.",
          "Idempotent writes with ordered keys; handle out-of-order events.",
        ]},
      ],
    },
    {
      slug: "forecasting-anomaly-stack",
      title: "Forecasting + Anomaly Detection: A Stack that Actually Ships",
      date: "2025-06-05",
      readingTimeMins: 10,
      tags: ["Forecasting", "Anomaly Detection", "LightGBM", "Prophet", "LSTM"],
      hero: "/blog/forecasting-anomaly-stack/hero.jpg",
      excerpt:
        "Ensembles over rule engines: residual-based anomaly scores, quantile losses, and why false positives are your real enemy.",
      content: [
        { type: "p", text: "Rules get you started; residuals keep you honest. We mix classical and DL models for robust signals." },
        { type: "h2", text: "Recipe" },
        { type: "ul", items: [
          "Features for seasonality, trend, holidays; rolling windows per segment.",
          "Prophet/LGBM/LSTM ensembles; MLflow to track and compare.",
          "Residual smoothing and alert aggregation to reduce noise.",
        ]},
        { type: "h2", text: "Cold Starts & Sparse Segments" },
        { type: "ul", items: [
          "Borrow strength across segments; use priors.",
          "Fallback models with conservative thresholds.",
        ]},
      ],
    },
    {
      slug: "redshift-migration-5tb",
      title: "5 TB to Redshift: A Pragmatic Migration Playbook",
      date: "2025-04-18",
      readingTimeMins: 6,
      tags: ["Redshift", "ETL", "AWS", "Data Warehouse"],
      hero: "/blog/redshift-migration-5tb/hero.jpg",
      excerpt:
        "From on-prem SQL Server to RA3-backed Redshift with 5GB/day feeds: patterns that spared us pain.",
      content: [
        { type: "h2", text: "Pipeline Basics" },
        { type: "ul", items: [
          "S3 staging + manifest loads; partitioned by dt/source.",
          "Glue/Lambda orchestration for incremental + history loads.",
          "Idempotent upserts and late-arrival handling.",
        ]},
        { type: "h2", text: "Performance & Cost" },
        { type: "ul", items: [
          "Sort/dist keys that match your biggest joins.",
          "RA3 for separated storage/compute; pause/resize policies.",
          "Monitoring that focuses on user-facing SLAs, not vanity metrics.",
        ]},
      ],
    },
  ],
};
