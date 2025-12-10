import React from 'react';

export interface SkillCardProps {
  icon: React.ReactElement;
  title: string;
  skills: string[];
  delay: number;
}

export interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
}

export interface TechnicalSkillsSliderProps {
  theme: string;
  getSectionBackgroundClass: (
    variant: "primary" | "secondary" | "tertiary"
  ) => string;
  getTextSecondaryClass: () => string;
}

export interface SkillCategory {
  icon: React.ReactElement;
  title: string;
  description: string;
  skills: string[];
  gradient: string;
  borderGradient: string;
}
