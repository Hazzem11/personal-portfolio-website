"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";
import SectionHeading from "./SectionHeading";

type Category = "All" | "Web" | "Backend" | "Mobile" | "Web3 & AI";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
  categories: Category[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "SpoilERT",
    description:
      "Chrome extension that detects and masks spoiler-risk text on Google Search until you choose to reveal it. Watchlist-driven protection with on-device DistilBERT classification via Transformers.js — no cloud inference.",
    image: "/images/spoilert.png",
    tech: ["TypeScript", "React", "Chrome Extension", "Transformers.js"],
    github: "https://github.com/Hazzem11/SpoiLERT",
    categories: ["All", "Web", "Web3 & AI"],
    featured: true,
  },
  {
    title: "Automated Referee Scheduling System",
    description:
      "Platform that assigns referees to games based on availability, preferences, and scheduling constraints. Admins and refs manage assignments through a clean interface with fair, automated match coverage.",
    image: "/images/referee.jpg",
    tech: ["React", "Node.js", "Java", "PostgreSQL"],
    github: "https://github.com/Hazzem11/referee-automated-schedualing-system",
    categories: ["All", "Web", "Backend"],
    featured: true,
  },
  {
    title: "Hotel Booking Website",
    description:
      "Full hotel management system: rooms, amenities, and reservations through an intuitive web interface. Admins can add, edit, and search rooms and amenities, with secure booking handling.",
    image: "/images/hotel.png",
    tech: ["React", "SQL", "HTML/CSS", "JavaScript"],
    github: "https://github.com/Hazzem11/CSI2132-Project",
    categories: ["All", "Web", "Backend"],
    featured: true,
  },
  {
    title: "FlappyBird Web Clone",
    description:
      "A faithful clone of the classic FlappyBird game — guide a bird through moving pipes with a single jump. Rendered with Java Swing animations and playable via keyboard or mouse.",
    image: "/images/flappybird.png",
    tech: ["Java", "Swing"],
    github: "https://github.com/Hazzem11/FlappyBird-Clone",
    categories: ["All"],
  },
  {
    title: "Android Cycling App",
    description:
      "Group project built in Android Studio letting cyclists register for events posted by cycling clubs. Firebase-backed storage for users, clubs, and events — I owned most of the frontend.",
    image: "/images/androidCyclingApp.png",
    tech: ["Android", "Firebase", "Java"],
    github: "https://github.com/Hazzem11/AndroidCyclingApp",
    categories: ["All", "Mobile"],
  },
];

const filters: Category[] = ["All", "Web", "Backend", "Mobile", "Web3 & AI"];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const visible = projects.filter((p) => p.categories.includes(active));

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeading number="02" kicker="Work" title="Selected projects." />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-wrap gap-3"
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full border px-4 py-1.5 font-mono text-xs tracking-wider transition-all ${
              active === f
                ? "border-[#5ea4ff] bg-[#5ea4ff]/15 text-[#8fc2ff] shadow-[0_0_16px_rgba(94,164,255,0.25)]"
                : "border-[#1c2230] text-[#8b96a8] hover:border-[#2a3448] hover:text-[#e7ecf3]"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="grid gap-7 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className={`card group flex flex-col overflow-hidden rounded-xl ${
                p.featured ? "sm:col-span-1" : ""
              }`}
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f16] via-transparent to-transparent" />
                {p.featured && (
                  <span className="absolute left-4 top-4 rounded-full border border-[#5ea4ff]/40 bg-[#06070b]/70 px-3 py-1 font-mono text-[10px] tracking-widest text-[#8fc2ff] backdrop-blur">
                    FEATURED
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold tracking-wide transition-colors group-hover:text-[#8fc2ff]">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#8b96a8]">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[#1c2230] bg-[#06070b]/60 px-2.5 py-1 font-mono text-[11px] text-[#9fb2c8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-[#1c2230] pt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs text-[#8b96a8] transition-colors hover:text-[#8fc2ff]"
                  >
                    <GithubIcon width={15} height={15} /> Code
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-mono text-xs text-[#8b96a8] transition-colors hover:text-[#8fc2ff]"
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {active === "Web3 & AI" && visible.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 font-mono text-sm text-[#8b96a8]"
        >
          // Web3 & AI projects currently in the lab — shipping soon.
        </motion.p>
      )}
    </section>
  );
}
