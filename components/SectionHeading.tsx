"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  number,
  kicker,
  title,
}: {
  number: string;
  kicker: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <p className="kicker mb-3">
        <span className="mr-2 text-[#8b96a8]">{number} /</span>
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-metal">{title}</span>
      </h2>
      <div className="mt-5 h-px w-24 bg-gradient-to-r from-[#5ea4ff] to-transparent" />
    </motion.div>
  );
}
