import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { useTheme } from "@/context/ThemeContext";

const AnimatedProfileImage = () => {
  const { theme } = useTheme();

  return (
    <>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${
          theme === "dark"
            ? "from-[#64ffda] to-[#80ffe4]"
            : "from-[#00b894] to-[#1dd1a1]"
        } rounded-full`}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`relative w-full h-full rounded-full border-4 ${
          theme === "dark" ? "border-[#64ffda]/20" : "border-[#00b894]/30"
        } overflow-hidden`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/MichaelSetiabudi.jpg"
          alt="Michael Setiabudi"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.div>
    </>
  );
};

export default AnimatedProfileImage;
