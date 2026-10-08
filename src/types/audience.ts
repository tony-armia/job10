export type Audience = "recruiter" | "jobseeker" | "guest";

export interface HeaderNavConfig {
  links: Array<{ label: string; href: string }>;
  ctaText: string;
  ctaHref: string;
}

export interface HeroConfig {
  headline: string;
  highlightWord: string;
  tagline: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  metricLabel: string;
}

export interface BottomCtaConfig {
  headline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  badgeText: string;
}
