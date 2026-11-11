export type Track = 'Supply Chain & Ops' | 'Business Operations' | 'Strategy & Ops'

export const TRACKS: Track[] = ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops']

export interface Bullet {
  text: string
  tracks: Track[]
}

export interface ExperienceEntry {
  role: string
  company: string
  location: string
  dates: string
  bullets: Bullet[]
}

export interface ProjectEntry {
  title: string
  org: string
  dates: string
  tracks: Track[]
  summary: string
  bullets: string[]
}

export interface EducationEntry {
  degree: string
  school: string
  location: string
  dates: string
  note?: string
}

export const SUMMARY =
  "Industrial Engineer with an M.S. from NYU, working across supply chain, business operations and strategy. " +
  "I turn ambiguous operational problems into root causes, then build the scorecards, process redesigns and roadmaps " +
  "that fix them — from supplier networks and manufacturing lines to investor pipelines and public-sector AI governance. " +
  "Lean Six Sigma Green Belt."

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Founding Fellow, Strategy & Operations',
    company: 'Roman Copilot AI',
    location: 'New York, USA',
    dates: '09/2026 – Present',
    bullets: [
      {
        text: 'Built an AI-assisted revenue attribution tracker under compliant patient data handling, matching 2,825 recommendations across 507 Zenoti visits to billed revenue and attributing $12,241 (3.1% of clinic sales) in 21 days.',
        tracks: ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops'],
      },
      {
        text: 'Ran the investor pipeline in a seven-stage Airtable CRM, screening 83 VC firms to 37 across three priority tiers and sourcing 26 more, supplying revenue forecast KPIs for the investor deck.',
        tracks: ['Business Operations'],
      },
      {
        text: 'Led market, customer and investor research, turning clinic operator findings into founder briefings and the revenue forecast KPIs behind the investor deck.',
        tracks: ['Strategy & Ops'],
      },
      {
        text: 'Own the clinic pilot pipeline in Attio, Notion and Clay — setting pilot OKRs, scoring them weekly and escalating at-risk pilots to founders with recovery plans.',
        tracks: ['Business Operations', 'Strategy & Ops'],
      },
      {
        text: 'Built AI-assisted workflows that turned an estimated 40+ hour manual reconciliation into a few hours of review.',
        tracks: ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops'],
      },
    ],
  },
  {
    role: 'Graduate Teaching Assistant, Operations Management & Strategic Change Management',
    company: 'New York University',
    location: 'New York, USA',
    dates: '05/2025 – 05/2026',
    bullets: [
      {
        text: 'Redesigned the Operations Management course operating model, embedding capacity planning, sourcing strategy, Lean Six Sigma, Agile and change-management frameworks; cut team project cycle time by 25% and improved delivery consistency.',
        tracks: ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops'],
      },
      {
        text: 'Built standardized Excel, Tableau and Minitab reporting templates replacing one-off spreadsheets, adopted by 20+ teams across 100+ students.',
        tracks: ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops'],
      },
    ],
  },
  {
    role: 'Operations & Process Improvement Intern',
    company: 'University of British Columbia',
    location: 'Vancouver, Canada',
    dates: '09/2023 – 12/2023',
    bullets: [
      {
        text: 'Rebuilt procurement, scheduling and resource-allocation workflows for Mechanical Engineering labs, cutting request-to-availability from 2–3 weeks to 1–2 weeks and moving capacity visibility from weekly to daily via Tableau dashboards.',
        tracks: ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops'],
      },
      {
        text: 'Tracked $50K+ in spend against budget, explaining budget-vs-actual variances to lab leadership at quarter close.',
        tracks: ['Business Operations', 'Strategy & Ops'],
      },
    ],
  },
  {
    role: 'Supply Chain & Systems Analyst Intern',
    company: 'MSN Laboratories',
    location: 'Hyderabad, India',
    dates: '03/2022 – 05/2022',
    bullets: [
      {
        text: 'Managed the purchase cycle across 50+ suppliers, building supplier scorecards and planned-vs-actual cost and delivery reporting that raised on-time delivery from 83% to 95% in one quarter and cut purchase cycle time by 1.5 days.',
        tracks: ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops'],
      },
      {
        text: 'Analyzed OEE across 8 production units and stood up preventive-maintenance dashboards, cutting downtime from 14 to 2 hrs/week.',
        tracks: ['Supply Chain & Ops'],
      },
    ],
  },
  {
    role: 'Supply Chain & Production Intern',
    company: 'Equic Dies and Moulds',
    location: 'Hyderabad, India',
    dates: '09/2021 – 12/2021',
    bullets: [
      {
        text: 'Coordinated sourcing, parts lists and production readiness for 15+ aerospace and automotive components (ISRO, TVS Motors), cutting setup time from 5.2 to 4.1 hrs/batch and lifting on-time delivery to 96%.',
        tracks: ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops'],
      },
      {
        text: 'Improved material flow using FIFO and Lean, cutting WIP and lead time to unlock $60K–$80K in working capital; lifted throughput to 100 parts/shift and $120K+ in capacity-driven revenue.',
        tracks: ['Supply Chain & Ops'],
      },
    ],
  },
]

export const PROJECTS: ProjectEntry[] = [
  {
    title: 'Lean Manufacturing & Throughput Optimization',
    org: 'Prose (Custom Haircare)',
    dates: '01/2025 – 05/2025',
    tracks: ['Supply Chain & Ops'],
    summary:
      'Mapped the current-state value stream across formulation and packaging labs and ran a motion study to isolate non-value-added time.',
    bullets: [
      'Isolated non-value-added time at 61% and 43% of the operator cycle using a MOD-based motion study.',
      'Redesigned motion sequence and workbench layout using ECRS, validated in Witness Simulation, projecting throughput from 315 to 407 orders/shift per workstation (29.2% gain).',
      'Prioritized 7,600 logged quality issues across 12 categories and costed the program at $109,500.',
    ],
  },
  {
    title: 'Product Returns Diagnostics',
    org: 'Adaptive Apparel Manufacturer (Dementia Care)',
    dates: '09/2025 – 12/2025',
    tracks: ['Supply Chain & Ops', 'Business Operations', 'Strategy & Ops'],
    summary: 'Diagnosed product-return drivers across 345+ customer records to find the root cause behind rising returns.',
    bullets: [
      'Used SPC, Pareto and 5-Why root-cause analysis to trace 60% of returns to sizing inconsistency.',
      'Built a sizing standard, fit guidance and control plan projected to cut returns by 30%, backed by a payback business case.',
    ],
  },
  {
    title: 'AI Sandbox Requirements & Operating Model',
    org: 'NYC Office of Technology & Innovation',
    dates: '09/2025 – 12/2025',
    tracks: ['Business Operations', 'Strategy & Ops'],
    summary:
      'Ran a 5-week discovery program with 9 senior stakeholders across 7 organizations to scope a cross-agency AI sandbox.',
    bullets: [
      'Identified governance ambiguity, not agency appetite, as the real bottleneck to AI experimentation.',
      'Authored the governance framework, functional and security requirements, and a three-phase rollout roadmap, benchmarked against five public-sector AI governance frameworks (OECD, NIST, WEF, EU AI Act, MITRE).',
      'Delivered a 7-section agency readiness survey adopted by OTI to set pilot success measures with baselines and targets.',
    ],
  },
  {
    title: 'Multi-Echelon Supply Chain Network Design',
    org: 'Dollar Tree',
    dates: '09/2024 – 12/2024',
    tracks: ['Supply Chain & Ops'],
    summary: 'Designed a multi-echelon supply chain network balancing cost, service levels and resilience.',
    bullets: [
      'Developed a network spanning 1M+ units across 50+ distribution centers.',
      'Reduced projected logistics costs by 15% while balancing service levels and network resilience.',
    ],
  },
]

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'M.S., Industrial Engineering',
    school: 'New York University',
    location: 'New York City, USA',
    dates: '09/2024 – 05/2026',
    note: 'Academic Excellence Achievement Award Recipient',
  },
  {
    degree: 'MEng, Mechanical Engineering (one term, transferred to NYU)',
    school: 'University of British Columbia',
    location: 'Vancouver, Canada',
    dates: '09/2023 – 12/2023',
  },
  {
    degree: 'B.Tech., Mechanical Engineering, Minor in AIML',
    school: 'VNR Vignana Jyothi Institute of Engineering and Technology',
    location: 'Hyderabad, India',
    dates: '08/2019 – 06/2023',
  },
]

export const SKILLS = [
  {
    label: 'Supply Chain & Process Improvement',
    items: [
      'Materials Planning, MRP, DRP, S&OP',
      'Demand Forecasting & Inventory Planning',
      'Network Design & Logistics Optimization',
      'Procurement, Sourcing & Supplier Scorecards',
      'Lean Six Sigma Green Belt, DMAIC, VSM, OEE',
      'Root Cause Analysis (5-Why, Fishbone), FMEA, SPC, Pareto',
      'Kaizen, Time & Motion Study, ECRS, FIFO',
    ],
  },
  {
    label: 'Strategy & Business Operations',
    items: [
      'Budget-vs-Actual & Variance Analysis',
      'OKRs, KPI Scorecards & Dashboards',
      'Revenue Attribution & Forecasting',
      'Business Case & Payback Analysis',
      'Market, Customer & Competitive Research',
      'Requirements Definition & Roadmapping',
      'Operating Model & Process Design',
    ],
  },
  {
    label: 'Tools & Execution',
    items: [
      'Advanced Excel (Solver, VBA), SQL, Python',
      'Tableau, Power BI, Minitab, Witness Simulation',
      'Airtable, Attio, Notion, Clay, HubSpot, JIRA',
      'Cross-Functional & Executive Stakeholder Management',
      'Change Management, Agile',
    ],
  },
]

export const CONTACT = {
  email: 'cs7598@nyu.edu',
  phone: '+1 (945) 232 2420',
  location: 'New York, USA',
  linkedin: 'https://www.linkedin.com/in/chetanareddy31',
}
