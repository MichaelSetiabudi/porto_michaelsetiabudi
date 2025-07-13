import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { SocialLinkProps } from "../../lib/types";

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  const { theme } = useTheme();

  if (!icon) {
    return null;
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 ${
        theme === "dark"
          ? "bg-white/10 hover:bg-white/20"
          : "bg-white/70 hover:bg-white/90 border border-slate-200/50 shadow-lg shadow-blue-100/30"
      } rounded-full transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {React.cloneElement(icon, {
        className: `w-7 h-7 ${
          theme === "dark" ? "text-gray-300" : "text-slate-600"
        }`,
      })}
    </motion.a>
  );
};

export default SocialLink;
