"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Database, Layers, Terminal, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "C#", "Java", "TypeScript", "JavaScript", "C/C++", "SQL"],
  },
  {
    icon: Layers,
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    icon: Terminal,
    title: "Backend",
    items: ["Node.js", "REST APIs", "PostgreSQL", "Firebase", "Express"],
  },
  {
    icon: Database,
    title: "Web3 & AI",
    items: ["Solidity", "Smart Contracts", "EVM Chains", "LLM APIs", "Prompt Eng."],
  },
  {
    icon: Cloud,
    title: "Infra & Data",
    items: ["Git", "Docker", "Linux", "CI/CD", "Vercel"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["VS Code", "IntelliJ", "Android Studio", "Figma", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="03" kicker="Stack" title="Tools I build with." />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ icon: Icon, title, items }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 * i }}
            className="card rounded-xl p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#5ea4ff]/30 bg-[#5ea4ff]/10">
                <Icon size={18} className="text-[#8fc2ff]" />
              </span>
              <h3 className="font-display text-lg font-semibold tracking-wide">
                {title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#1c2230] bg-[#06070b]/50 px-3 py-1 font-mono text-xs text-[#9fb2c8] transition-colors hover:border-[#5ea4ff]/50 hover:text-[#8fc2ff]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
