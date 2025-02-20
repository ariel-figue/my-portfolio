"use client";

import { motion } from "framer-motion";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="opacity-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
