export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  postedTime: string;
  location: string;
  employmentType: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
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
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  metricNumber: "5000+",
  title: "Interviews scheduled in every minute",
  description:
    "Find the right role faster with AI-powered matching that connects you directly with top employers. No spam, no ghosting, just interview-ready opportunities.",
  jobsCountText: "10,000+ Jobs",
  ctaSeeker: "I'm a Job Seeker",
  ctaRecruiter: "I'm a Recruiter",
  image: "/images/hero-interview.jpg",
};

export const POPULAR_JOBS: JobOpportunity[] = [
  {
    id: "1",
    title: "Cybersecurity Analyst",
    company: "ApexGuard Security",
    postedTime: "2 hours ago",
    location: "Dallas, Texas, USA",
    employmentType: "Full Time",
    tags: ["Information Tech", "Senior Level", "Full Time"],
    isFeatured: false,
  },
  {
    id: "2",
    title: "System Administrator",
    company: "CloudScale Systems",
    postedTime: "10 hours ago",
    location: "Remote - Worldwide",
    employmentType: "Full Time",
    tags: ["Infrastructure", "Lead", "Full Time"],
    isFeatured: true,
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: "Nexus Networks",
    postedTime: "1 day ago",
    location: "San Francisco, USA",
    employmentType: "Full Time",
    tags: ["Cloud Services", "Mid Level", "Full Time"],
    isFeatured: false,
  },
  {
    id: "4",
    title: "Product Manager",
    company: "Aura Health",
    postedTime: "3 days ago",
    location: "Austin, Texas, USA",
    employmentType: "Full Time",
    tags: ["Product & Strategy", "Senior Level", "Full Time"],
    isFeatured: false,
  },
  {
    id: "5",
    title: "Data Analyst",
    company: "QuantMetrics Inc.",
    postedTime: "4 days ago",
    location: "New York, USA",
    employmentType: "Full Time",
    tags: ["Big Data & BI", "Mid Level", "Full Time"],
    isFeatured: false,
  },
  {
    id: "6",
    title: "Delivery Manager",
    company: "Apex Solutions",
    postedTime: "5 days ago",
    location: "Seattle, Washington, USA",
    employmentType: "Full Time",
    tags: ["Agile Leadership", "Senior Level", "Full Time"],
    isFeatured: false,
  },
];

export const RECRUITMENT_FEATURES: FeatureItem[] = [
  {
    id: "ai-matching",
    title: "AI-Powered Job Matching",
    description:
      "Proprietary algorithms match candidate profiles with precision, evaluating technical depth, culture fit, and career goals.",
    image: "/images/feat-ai-match.jpg",
  },
  {
    id: "realtime-matches",
    title: "Real-Time Talent Matches",
    description:
      "Receive instant notifications when candidates matching your exact criteria enter the talent pool or become available.",
    image: "/images/feat-realtime-match.jpg",
  },
  {
    id: "talent-vault",
    title: "Private Talent Vault",
    description:
      "Access confidential high-tier executive and specialized tech candidates not available on public job boards.",
    image: "/images/feat-talent-vault.jpg",
  },
];

export const HIRING_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "Profile Creation",
    description:
      "Create an account and complete your verified talent or recruiter profile in minutes.",
    iconName: "FileText",
  },
  {
    step: 2,
    title: "Role Matching",
    description:
      "Our AI engine analyzes your requirements and provides ranked relevant matches.",
    iconName: "Sparkles",
  },
  {
    step: 3,
    title: "Direct Interviews",
    description:
      "Schedule interviews directly with integrated calendar synchronization.",
    iconName: "Calendar",
  },
  {
    step: 4,
    title: "Skill Verification",
    description:
      "Validate domain expertise with automated skill checks and portfolio reviews.",
    iconName: "ShieldCheck",
  },
  {
    step: 5,
    title: "Seamless Offer",
    description:
      "Extend offers with standardized compensation benchmarking and digital signing.",
    iconName: "CheckCircle2",
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
