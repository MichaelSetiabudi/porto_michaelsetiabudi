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
          ? "bg-[#64ffda]/10 hover:bg-[#64ffda]/20 border border-[#64ffda]/20"
          : "bg-white/70 hover:bg-white/90 border border-[#00b894]/30 shadow-lg shadow-[#00b894]/10"
      } rounded-full transition-all duration-300`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {React.cloneElement(icon, {
        className: `w-7 h-7 ${
          theme === "dark" ? "text-[#64ffda]" : "text-[#00b894]"
        }`,
      })}
    </motion.a>
  );
};

export default SocialLink;
