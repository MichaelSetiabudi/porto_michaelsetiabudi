import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useThemeHelpers } from "../../lib/themeHelpers";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import TechnicalSkillsSlider from "./TechnicalSkillsSlider";
import ContactSection from "./ContactSection";

const Main = () => {
  const { theme } = useTheme();
  const {
    getBackgroundClass,
    getTextSecondaryClass,
    getCardBackgroundClass,
    getContactCardBackgroundClass,
    getSectionBackgroundClass,
  } = useThemeHelpers(theme);

  return (
    <div
      className={`relative w-full ${getBackgroundClass()} font-inter transition-colors duration-300`}
    >
      <HeroSection
        theme={theme}
        getBackgroundClass={getBackgroundClass}
        getTextSecondaryClass={getTextSecondaryClass}
      />
      
      <AboutSection
        getSectionBackgroundClass={getSectionBackgroundClass}
        getTextSecondaryClass={getTextSecondaryClass}
        getCardBackgroundClass={getCardBackgroundClass}
        theme={theme}
      />
      
      <TechnicalSkillsSlider
        theme={theme}
        getSectionBackgroundClass={getSectionBackgroundClass}
        getTextSecondaryClass={getTextSecondaryClass}
      />
      
      <ContactSection
        getSectionBackgroundClass={getSectionBackgroundClass}
        getTextSecondaryClass={getTextSecondaryClass}
        getContactCardBackgroundClass={getContactCardBackgroundClass}
        theme={theme}
      />
    </div>
  );
};

export default Main;
