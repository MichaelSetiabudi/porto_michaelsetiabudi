import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience";
import { useThemeHelpers } from "@/lib/themeHelpers";

interface ExperienceSectionProps {
  theme: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ theme }) => {
  const {
    getCardBackgroundClass,
    getTextPrimaryClass,
    getTextSecondaryClass,
    getAccentTextClass,
  } = useThemeHelpers(theme);

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2
          className={`text-3xl md:text-4xl font-bold ${getTextPrimaryClass()} mb-2`}
        >
          Professional Experience
        </h2>
        <div
          className={`h-1 w-20 ${theme === 'dark' ? 'bg-[#64ffda]' : 'bg-[#00b894]'} rounded-full`}
        ></div>
      </motion.div>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            theme={theme}
            getCardBackgroundClass={getCardBackgroundClass}
            getTextPrimaryClass={getTextPrimaryClass}
            getTextSecondaryClass={getTextSecondaryClass}
            getAccentColorClass={getAccentTextClass}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
