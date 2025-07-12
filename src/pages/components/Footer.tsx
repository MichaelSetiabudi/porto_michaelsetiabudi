import React from "react";
import { useTheme } from "@/context/ThemeContext";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  const footerBgClass = theme === 'dark' 
    ? 'bg-[#0A0A0A]' 
    : 'bg-white';
  
  const textClass = theme === 'dark'
    ? 'text-gray-300'
    : 'text-gray-600';
  
  const linkClass = theme === 'dark'
    ? 'text-gray-400 hover:text-indigo-400 transition-colors duration-300'
    : 'text-gray-500 hover:text-indigo-600 transition-colors duration-300';

  return (
    <footer className={`w-full ${footerBgClass} ${textClass} py-4 shadow-lg transition-colors duration-300 relative`}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-purple-900/5 to-indigo-900/5" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-indigo-500">©</span>
            <span className="font-light">{currentYear}</span>
            <span className="font-medium ml-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Michael-Dev</span>
          </div>
          
          <div className="flex items-center mt-3 md:mt-0 space-x-6">
            <a href="#" className={linkClass}>
              Terms
            </a>
            <span className={`${theme === 'dark' ? 'text-gray-700' : 'text-gray-300'}`}>•</span>
            <a href="#" className={linkClass}>
              Privacy
            </a>
            <span className={`${theme === 'dark' ? 'text-gray-700' : 'text-gray-300'}`}>•</span>
            <a href="./about" className={linkClass}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;