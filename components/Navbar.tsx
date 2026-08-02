"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#06070b]/80 backdrop-blur-md border-b border-[#1c2230]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-display text-lg font-semibold tracking-wider">
            <span className="text-metal">HAZZEM</span>
            <span className="text-[#5ea4ff]">.dev</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-underline font-mono text-xs tracking-widest text-[#8b96a8] hover:text-[#e7ecf3] transition-colors uppercase"
                >
                  <span className="text-[#5ea4ff] mr-1.5">0{i + 1}.</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/files/Hazzem_Sukar.pdf"
                target="_blank"
                className="rounded border border-[#5ea4ff]/50 px-4 py-2 font-mono text-xs tracking-widest text-[#8fc2ff] transition-all hover:bg-[#5ea4ff]/10 hover:shadow-[0_0_18px_rgba(94,164,255,0.25)]"
              >
                CV
              </a>
            </li>
          </ul>

          <button
            className="md:hidden text-[#e7ecf3]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#06070b]/95 backdrop-blur-lg md:hidden"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * i }}
                className="font-display text-2xl text-[#e7ecf3] hover:text-[#5ea4ff] transition-colors"
              >
                <span className="font-mono text-sm text-[#5ea4ff] mr-3">
                  0{i + 1}.
                </span>
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/files/Hazzem_Sukar.pdf"
              target="_blank"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-4 rounded border border-[#5ea4ff]/50 px-8 py-3 font-mono text-sm text-[#8fc2ff]"
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
