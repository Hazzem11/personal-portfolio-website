"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionHeading from "./SectionHeading";

const EMAIL = "hazzem.sukar11@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-28 text-center">
      <div className="flex flex-col items-center">
        <SectionHeading number="04" kicker="Contact" title="Let's build something." />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto -mt-6 max-w-xl text-[#8b96a8]"
      >
        I&apos;m graduating in 2027 and looking for a full-time software
        engineering role starting January 2027 — especially in Web3, backend,
        or AI/ML. Based in Canada, open to international opportunities. My
        inbox is always open.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-10 flex flex-col items-center gap-5"
      >
        <div className="flex items-center gap-3 rounded-lg border border-[#1c2230] bg-[#0c0f16]/80 px-5 py-3">
          <Mail size={18} className="text-[#5ea4ff]" />
          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-sm text-[#e7ecf3] hover:text-[#8fc2ff] transition-colors"
          >
            {EMAIL}
          </a>
          <button
            onClick={copyEmail}
            aria-label="Copy email"
            className="ml-2 text-[#8b96a8] transition-colors hover:text-[#8fc2ff]"
          >
            {copied ? <Check size={16} className="text-[#5ea4ff]" /> : <Copy size={16} />}
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/Hazzem11"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded border border-[#2a3448] px-6 py-3 font-mono text-sm text-[#e7ecf3] transition-all hover:border-[#5ea4ff]/60 hover:text-[#8fc2ff]"
          >
            <GithubIcon width={16} height={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hazzem-sukar-b8a814260/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded border border-[#2a3448] px-6 py-3 font-mono text-sm text-[#e7ecf3] transition-all hover:border-[#5ea4ff]/60 hover:text-[#8fc2ff]"
          >
            <LinkedinIcon width={16} height={16} /> LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 rounded bg-[#5ea4ff] px-6 py-3 font-mono text-sm font-semibold text-[#06070b] transition-all hover:bg-[#8fc2ff] hover:shadow-[0_0_28px_rgba(94,164,255,0.5)]"
          >
            <Mail size={16} /> Say Hello
          </a>
        </div>
      </motion.div>
    </section>
  );
}
