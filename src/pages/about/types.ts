export interface SkillCardProps {
  icon: JSX.Element;
  title: string;
  skills: string[];
  delay: number;
}

export interface SocialLinkProps {
  href: string;
  icon: JSX.Element;
}

export interface TechnicalSkillsSliderProps {
  theme: string;
  getSectionBackgroundClass: (
    variant: "primary" | "secondary" | "tertiary"
  ) => string;
  getTextSecondaryClass: () => string;
}

export interface SkillCategory {
  icon: JSX.Element;
  title: string;
  description: string;
  skills: string[];
  gradient: string;
  borderGradient: string;
}
