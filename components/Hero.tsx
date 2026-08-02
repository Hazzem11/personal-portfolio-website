"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const roles = [
  "Full-Stack Developer",
  "Web3 · Backend · AI/ML",
  "Python · C# · Java",
  "Computer Science @ uOttawa",
];

function useTypewriter(words: string[], speed = 70, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(word.slice(0, text.length + (deleting ? -1 : 1)));
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-grid px-6"
    >
      {/* glow orbs */}
      <div className="orb left-[8%] top-[18%] h-72 w-72 bg-[#2e76d8]" />
      <div className="orb right-[6%] bottom-[14%] h-96 w-96 bg-[#1b3a63]" />
      <div className="orb left-[40%] top-[55%] h-64 w-64 bg-[#12315c]" />

      {/* fade the grid at edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#06070b_78%)]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1c2230] bg-[#0c0f16]/70 px-4 py-1.5 font-mono text-xs tracking-widest text-[#8fc2ff]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#5ea4ff] shadow-[0_0_8px_#5ea4ff]" />
          OPEN TO OPPORTUNITIES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-metal">HAZZEM SUKAR</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 flex h-10 items-center justify-center font-mono text-lg text-[#8b96a8] sm:text-2xl"
        >
          <span className="mr-3 text-[#5ea4ff]">&gt;</span>
          <span>{typed}</span>
          <span className="caret h-6 sm:h-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-[#8b96a8] sm:text-lg"
        >
          Final-term Computer Science student at the University of Ottawa,
          Canada — seeking a full-time software engineering role starting
          January 2027. I build across the stack, from smart contracts to
          server systems to intelligent AI apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded bg-[#5ea4ff] px-7 py-3 font-mono text-sm font-semibold tracking-wider text-[#06070b] transition-all hover:bg-[#8fc2ff] hover:shadow-[0_0_28px_rgba(94,164,255,0.5)]"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="rounded border border-[#2a3448] px-7 py-3 font-mono text-sm tracking-wider text-[#e7ecf3] transition-all hover:border-[#5ea4ff]/60 hover:text-[#8fc2ff]"
          >
            GET IN TOUCH
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-12 flex items-center gap-6"
        >
          {[
            { href: "https://github.com/Hazzem11", icon: GithubIcon, label: "GitHub" },
            {
              href: "https://www.linkedin.com/in/hazzem-sukar-b8a814260/",
              icon: LinkedinIcon,
              label: "LinkedIn",
            },
            {
              href: "mailto:hazzem.sukar11@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#8b96a8] transition-all hover:-translate-y-1 hover:text-[#5ea4ff] hover:drop-shadow-[0_0_10px_rgba(94,164,255,0.6)]"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.8 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        className="absolute bottom-8 z-10 text-[#8b96a8] hover:text-[#5ea4ff]"
        aria-label="Scroll down"
      >
        <ArrowDown size={26} />
      </motion.a>
    </section>
  );
}
