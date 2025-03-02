"use client";

import { motion } from "motion/react";

interface ArticleContainerPropsProps {
  children: React.ReactNode;
}

export default function ArticleContainer({
  children,
}: ArticleContainerPropsProps) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", duration: 0.8 }}
      className="w-full max-w-2xl mx-auto p-8 space-y-8 "
    >
      {children}
    </motion.section>
  );
}
