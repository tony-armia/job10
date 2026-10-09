export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  postedTime: string;
  location: string;
  employmentType: string;
  salary: string;
  department: string;
  description?: string;
  tags: string[];
  accentColor: "indigo" | "peach" | "sky" | "mint" | "amber" | "lavender" | "violet" | "blue";
  isFeatured?: boolean;
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  bgClass: string;
  borderClass: string;
  accentClass: string;
  highlightStat: string;
  highlightLabel: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
  accent: "indigo" | "sky" | "peach" | "mint" | "violet";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Find Job", href: "#jobs" },
  { label: "Find Talent", href: "#talent" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_DATA = {
  metricNumber: "5000+",
  metricSubtitle: "Interviews scheduled per minute",
  headline: "Hire for growth.",
  tagline: "The talent platform loved by candidates and recruiters — with",
  highlightWord: "AI at the core",
  description:
    "Job10 connects high-performing professionals and ambitious companies through precision AI matching. No resume black holes, no spam — just qualified, interview-ready connections.",
  jobsCountText: "10,000+ active verified roles",
  ctaSeeker: "I'm a Job Seeker",
  ctaRecruiter: "I'm a Recruiter",
  image: "/images/hero-tablet-hands.jpg",
};

export const POPULAR_JOBS: JobOpportunity[] = [
  {
    id: "1",
    title: "Cybersecurity Analyst",
    company: "ApexGuard Security",
    postedTime: "2h ago",
    location: "Dallas, Texas, USA",
    employmentType: "Full Time",
    salary: "$130k – $165k",
    department: "Security",
    tags: ["Information Tech", "Senior Level", "SOC-2"],
    accentColor: "sky",
    isFeatured: false,
  },
  {
    id: "2",
    title: "System Administrator",
    company: "CloudScale Systems",
    postedTime: "10h ago",
    location: "Remote - Worldwide",
    employmentType: "Full Time",
    salary: "$120k – $155k",
    department: "Infrastructure",
    description:
      "Help us build and maintain secure, reliable infrastructure that powers millions of users worldwide.",
    tags: ["Infrastructure", "Lead", "Kubernetes", "Linux", "AWS"],
    accentColor: "indigo",
    isFeatured: true,
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "Nexus Networks",
    postedTime: "1d ago",
    location: "San Francisco, USA",
    employmentType: "Full Time",
    salary: "$145k – $180k",
    department: "Cloud Ops",
    tags: ["Cloud Services", "Mid Level", "Terraform"],
    accentColor: "mint",
    isFeatured: false,
  },
  {
    id: "4",
    title: "Product Manager",
    company: "Aura Health",
    postedTime: "3d ago",
    location: "Austin, Texas, USA",
    employmentType: "Full Time",
    salary: "$135k – $170k",
    department: "Product",
    tags: ["Product Strategy", "Senior Level", "B2B SaaS"],
    accentColor: "violet",
    isFeatured: false,
  },
  {
    id: "5",
    title: "Data Analyst",
    company: "QuantMetrics Inc.",
    postedTime: "4d ago",
    location: "New York, USA",
    employmentType: "Full Time",
    salary: "$110k – $140k",
    department: "Analytics",
    tags: ["Big Data & BI", "Mid Level", "SQL / Python"],
    accentColor: "blue",
    isFeatured: false,
  },
  {
    id: "6",
    title: "Delivery Manager",
    company: "Apex Solutions",
    postedTime: "5d ago",
    location: "Seattle, Washington, USA",
    employmentType: "Full Time",
    salary: "$140k – $175k",
    department: "Management",
    tags: ["Agile Leadership", "Senior Level", "Scrum"],
    accentColor: "lavender",
    isFeatured: false,
  },
];

export const RECRUITMENT_FEATURES: FeatureItem[] = [
  {
    id: "ai-matching",
    tag: "AI Competency Scoring",
    title: "AI-Powered Job Matching",
    description:
      "Discover candidates whose skills, experience, and competencies align with your hiring requirements.",
    image: "/images/feat-ai-match.jpg",
    bgClass: "bg-[#F8F9FE]",
    borderClass: "border-[#E2E6FD]",
    accentClass: "bg-[#192CE7] text-white",
    highlightStat: "AI-Aligned",
    highlightLabel: "Competency Scoring",
  },
  {
    id: "realtime-matches",
    tag: "Instant Talent Discovery",
    title: "Real-Time Talent Matches",
    description:
      "Find relevant talent through an intelligent matching experience designed to make candidate discovery more efficient.",
    image: "/images/feat-realtime-match.jpg",
    bgClass: "bg-[#FFF9F5]",
    borderClass: "border-[#FDE5D4]",
    accentClass: "bg-[#EA580C] text-white",
    highlightStat: "Live",
    highlightLabel: "Direct Pipeline Alerts",
  },
  {
    id: "talent-vault",
    tag: "Secure Talent Vault",
    title: "Private Talent Vault",
    description:
      "Build and manage your private candidate database in one organized, searchable space.",
    image: "/images/feat-talent-vault.jpg",
    bgClass: "bg-[#F4FBF7]",
    borderClass: "border-[#D6F4E2]",
    accentClass: "bg-[#059669] text-white",
    highlightStat: "Encrypted",
    highlightLabel: "Organized Candidate Vault",
  },
];

export const HIRING_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "Profile Creation",
    description:
      "Create an account and complete your verified talent or recruiter profile in minutes.",
    iconName: "",
    accent: "indigo",
  },
  {
    step: 2,
    title: "Role Matching",
    description:
      "Our AI engine analyzes your requirements and provides ranked relevant matches.",
    iconName: "Sparkles",
    accent: "sky",
  },
  {
    step: 3,
    title: "Direct Interviews",
    description:
      "Schedule interviews directly with integrated calendar synchronization.",
    iconName: "Calendar",
    accent: "peach",
  },
  {
    step: 4,
    title: "Skill Verification",
    description:
      "Validate domain expertise with automated skill checks and portfolio reviews.",
    iconName: "ShieldCheck",
    accent: "mint",
  },
  {
    step: 5,
    title: "Seamless Offer",
    description:
      "Extend offers with standardized compensation benchmarking and digital signing.",
    iconName: "CheckCircle2",
    accent: "violet",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "How does AI-powered job matching work?",
    answer:
      "Our AI evaluates technical competencies, work history, soft skills, and salary expectations to rank candidates and roles with 94%+ placement compatibility, eliminating irrelevant applications.",
  },
  {
    id: "faq-2",
    question: "Is my resume data secure on Job10?",
    answer:
      "Yes, we adhere to strict enterprise-grade SOC-2 and GDPR compliance. Your sensitive contact details and work history remain encrypted and private until you choose to reveal them to a verified employer.",
  },
  {
    id: "faq-3",
    question: "How quickly can I get matched with jobs?",
    answer:
      "Candidates typically begin receiving curated high-affinity interview invitations within 24 to 48 hours of completing profile verification.",
  },
  {
    id: "faq-4",
    question: "Can employers directly contact me through the platform?",
    answer:
      "Yes. Verified hiring managers can initiate direct interview requests or message you inside the secure platform portal without third-party headhunters.",
  },
  {
    id: "faq-5",
    question: "What makes Job10 different from other job platforms?",
    answer:
      "Unlike broad job boards overwhelmed with mass spam applications, Job10 matches pre-vetted candidates and roles using precision algorithmic assessment, cutting time-to-hire by 65%.",
  },
  {
    id: "faq-6",
    question: "Do I need to pay to use Job10 as a job seeker?",
    answer:
      "No, Job10 is 100% free for job seekers. You get full access to profile creation, AI matching, interview scheduling, and offer reviews without any subscription fees.",
  },
];

export const FOOTER_DATA = {
  about:
    "Job10 is an intelligent talent matching platform connecting top companies with world-class professionals worldwide.",
  quickLinks: [
    { label: "Job Listings", href: "#jobs" },
    { label: "Browse Candidates", href: "#talent" },
    { label: "Pricing", href: "#" },
    { label: "Enterprise Solutions", href: "#" },
  ],
  contact: [
    { label: "info@job10.com", href: "mailto:info@job10.com" },
    { label: "+1 (555) 234-5678", href: "tel:+15552345678" },
    { label: "San Francisco, CA", href: "#" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
};
