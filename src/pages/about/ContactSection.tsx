import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { fadeInUp } from "./animations";

interface ContactSectionProps {
  getSectionBackgroundClass: (
    variant: "primary" | "secondary" | "tertiary"
  ) => string;
  getTextSecondaryClass: () => string;
  getContactCardBackgroundClass: () => string;
  theme: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  getSectionBackgroundClass,
  getTextSecondaryClass,
  getContactCardBackgroundClass,
  theme,
}) => {
  return (
    <section
      className={`py-8 md:py-12 ${getSectionBackgroundClass("tertiary")}`}
    >
      <motion.div
        className="container mx-auto px-4 md:px-6 lg:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-md"></div>
          <div
            className={`relative ${getContactCardBackgroundClass()} p-6 md:p-8 rounded-2xl shadow-xl backdrop-blur-sm`}
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6 font-poppins bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Let&apos;s Connect
            </motion.h2>
            <motion.p
              className={`${getTextSecondaryClass()} mb-6 text-lg md:text-xl font-roboto`}
              variants={fadeInUp}
            >
              I&apos;m always open to new opportunities and collaborations.
            </motion.p>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=michaelsetiabudi@gmail.com&su=Contact%20from%20Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center space-x-3 ${getTextSecondaryClass()} ${
                theme === "dark"
                  ? "bg-white/5 hover:bg-white/10 border-gray-700"
                  : "bg-white/80 hover:bg-white/95 border-slate-200 shadow-lg shadow-indigo-100/30"
              } px-5 py-3 rounded-full transition-all duration-300 border cursor-pointer`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="font-roboto text-base md:text-lg truncate">
                michaelsetiabudi@gmail.com
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
