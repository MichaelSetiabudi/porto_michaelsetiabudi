import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedProfileImage = () => (
  <>
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
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
      className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden"
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

export default AnimatedProfileImage;
