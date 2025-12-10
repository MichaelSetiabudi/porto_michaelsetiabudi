import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useThemeHelpers } from "@/lib/themeHelpers";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  const helpers = useThemeHelpers(theme);

  return (
    <footer className={`w-full ${helpers.getBackgroundClass()} ${helpers.getTextSecondaryClass()} py-4 shadow-lg transition-colors duration-300 relative`}>
      {/* Gradient background overlay */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-r from-[#64ffda]/5 via-transparent to-[#64ffda]/5' : 'bg-gradient-to-r from-[#00b894]/5 via-transparent to-[#00b894]/5'}`} />

      {/* Top accent line */}
      <div className={`absolute top-0 left-0 w-full h-[1px] ${theme === 'dark' ? 'bg-gradient-to-r from-transparent via-[#64ffda]/30 to-transparent' : 'bg-gradient-to-r from-transparent via-[#00b894]/30 to-transparent'}`} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={helpers.getAccentTextClass().split(' ')[0]}>©</span>
            <span className="font-light">{currentYear}</span>
            <span className={`font-medium ml-2 bg-gradient-to-r ${theme === 'dark' ? 'from-[#64ffda] to-[#80ffe4]' : 'from-[#00b894] to-[#1dd1a1]'} bg-clip-text text-transparent`}>
              Michael-Dev
            </span>
          </div>

          <div className="flex items-center mt-3 md:mt-0">
            <a
              href="./about"
              className={`${helpers.getAccentTextClass()} font-medium`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
