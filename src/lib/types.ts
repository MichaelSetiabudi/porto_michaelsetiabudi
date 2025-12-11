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

export interface ExperienceProject {
  title: string;
  description: string;
  technologies: string[];
  impact?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  division: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  projects: ExperienceProject[];
  skills: string[];
  type: "internship" | "full-time" | "part-time" | "contract";
}

export interface ExperienceCardProps {
  experience: Experience;
  theme: string;
  getCardBackgroundClass: () => string;
  getTextPrimaryClass: () => string;
  getTextSecondaryClass: () => string;
  getAccentColorClass: () => string;
}
