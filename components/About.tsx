"use client";

import { motion } from "framer-motion";
import { Blocks, Bot, MapPin, GraduationCap, Server, Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const interests = [
  {
    icon: Blocks,
    title: "Web3",
    desc: "Decentralized apps, smart contracts, and trustless systems.",
  },
  {
    icon: Server,
    title: "Backend",
    desc: "APIs, databases, and the infrastructure that scales.",
  },
  {
    icon: Bot,
    title: "AI",
    desc: "Intelligent systems and machine-learning powered products.",
  },
];

const facts = [
  { icon: GraduationCap, label: "BSc Computer Science, uOttawa — final term, graduating 2027" },
  { icon: Briefcase, label: "Seeking full-time roles starting January 2027" },
  { icon: MapPin, label: "Ottawa, Canada" },
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="01" kicker="About" title="Let me introduce myself." />

      <div>
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-[#9fb2c8]"
          >
            I&apos;m Hazzem — a Computer Science student at the University of
            Ottawa in my <span className="text-[#8fc2ff]">final term</span>. I
            like building things end to end, and what pulls me in most is the
            intersection of <span className="text-[#8fc2ff]">Web3</span>,{" "}
            <span className="text-[#8fc2ff]">backend systems</span>, and{" "}
            <span className="text-[#8fc2ff]">AI/ML</span>: software that&apos;s
            decentralized, dependable, and smart. I&apos;m currently looking
            for a{" "}
            <span className="text-[#8fc2ff]">
              full-time software engineering role starting January 2027
            </span>{" "}
            — in Canada or abroad.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 space-y-2"
          >
            {facts.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 font-mono text-sm text-[#8b96a8]"
              >
                <Icon size={16} className="text-[#5ea4ff]" />
                {label}
              </li>
            ))}
          </motion.ul>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {interests.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.12 * i }}
                className="card rounded-xl p-5"
              >
                <Icon size={26} className="mb-3 text-[#5ea4ff]" />
                <h3 className="font-display text-base font-semibold tracking-wide">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8b96a8]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
