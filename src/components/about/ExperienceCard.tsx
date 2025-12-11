import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Code2 } from "lucide-react";
import { ExperienceCardProps } from "@/lib/types";

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  theme,
  getCardBackgroundClass,
  getTextPrimaryClass,
  getTextSecondaryClass,
  getAccentColorClass,
}) => {
  const getBadgeClass = () => {
    return theme === "dark"
      ? "bg-teal-500/10 text-teal-400 border border-teal-500/30"
      : "bg-green-500/10 text-green-600 border border-green-500/30";
  };

  const getProjectCardClass = () => {
    return theme === "dark"
      ? "bg-slate-800/50 border border-slate-700/50"
      : "bg-slate-50 border border-slate-200";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${getCardBackgroundClass()} rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <div className={`${getAccentColorClass()} p-2 rounded-lg`}>
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-xl md:text-2xl font-bold ${getTextPrimaryClass()}`}>
                {experience.company}
              </h3>
              <p className={`${getAccentColorClass()} font-semibold text-lg mt-1`}>
                {experience.position}
              </p>
              <p className={`${getTextSecondaryClass()} text-sm mt-1`}>
                {experience.division}
              </p>
            </div>
          </div>
        </div>

        <div className={`${getBadgeClass()} px-3 py-1 rounded-full text-xs font-medium capitalize`}>
          {experience.type}
        </div>
      </div>

      {/* Location & Date */}
      <div className={`flex flex-wrap gap-4 mb-4 ${getTextSecondaryClass()}`}>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{experience.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {experience.startDate} - {experience.endDate}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className={`${getTextSecondaryClass()} mb-6 leading-relaxed`}>
        {experience.description}
      </p>

      {/* Projects */}
      {experience.projects.length > 0 && (
        <div className="mb-6">
          <h4 className={`${getTextPrimaryClass()} font-semibold text-lg mb-4 flex items-center gap-2`}>
            <Code2 className="w-5 h-5" />
            Key Projects
          </h4>
          <div className="space-y-4">
            {experience.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`${getProjectCardClass()} rounded-lg p-4`}
              >
                <h5 className={`${getTextPrimaryClass()} font-semibold mb-2`}>
                  {project.title}
                </h5>
                <p className={`${getTextSecondaryClass()} text-sm mb-3`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`${getBadgeClass()} px-2 py-1 rounded text-xs`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.impact && (
                  <p className={`${getAccentColorClass()} text-sm italic mt-2`}>
                    💡 {project.impact}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {experience.skills.length > 0 && (
        <div>
          <h4 className={`${getTextSecondaryClass()} text-sm font-semibold mb-3`}>
            Technologies & Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, index) => (
              <span
                key={index}
                className={`${theme === "dark" ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"} px-3 py-1 rounded-full text-sm`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
