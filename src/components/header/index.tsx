"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row justify-between items-center p-8">
        <Link href="/">
          <motion.h1
            className="flex flex-col leading-4 text-lg hover:text-white transition-colors"
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <span>Jota</span>
            <span>Pê.</span>
          </motion.h1>
        </Link>

        <motion.div
          className="flex flex-row gap-4 *:hover:text-white *:transition-colors"
          transition={{ type: "spring" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link href="/blog">Blog</Link>

          {/* <Link href="/#">Portfólio</Link> */}

          <Link target="_blank" href="https://github.com/jpbmoura">
            <Github />
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/in/jpbmoura/">
            <Linkedin />
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
