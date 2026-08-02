# Hazzem Sukar — Personal Website Revamp

## Goal
Rebuild the portfolio into a modern, dark, tech-forward personal site that shows personality, is dead-simple to navigate, and puts projects front and center for recruiters.

## Vibe
- Dark theme, tech/industrial aesthetic
- Colors: deep black/charcoal base, metallic blue accents, cool greys, subtle glow/gradient
- Personality: confident, curious, a bit robotic/futuristic, but approachable
- Feel: premium, smooth, and interactive — not a static résumé

## Typography
- Headings/brand: a futuristic, slightly robotic sans or mono (e.g. Space Grotesk, JetBrains Mono, Chakra Petch, or Orbitron)
- Body: clean, highly legible sans (e.g. Inter)
- Use contrast: big bold hero type, lighter body, mono for labels/metadata

## Stack (proposed)
- Next.js + React + Tailwind CSS (fast, modern, easy to deploy on Vercel)
- Framer Motion for page/scroll/hover animations
- Lucide (or similar) icons
- Optional light WebGL/particle effect if it stays performant

## Structure / Navigation
- Single-page, smooth-scroll, sticky minimal nav
- Sections in order:
  1. Hero
  2. About
  3. Projects
  4. Skills / Tech
  5. Contact
- Always-visible nav or side indicator so the user never gets lost
- Mobile: hamburger → full-screen overlay menu

## Hero (above the fold)
- Full-screen dark hero with subtle animated background (grid, particles, or glow)
- Big name: **Hazzem Sukar**
- Typing animation cycling through roles:
  - `Full-Stack Developer`
  - `Web3 & AI`
  - `Backend Engineer`
  - `CS @ uOttawa`
- One-line intro + 2 CTAs: `View Projects` and `Contact / Download CV`
- Social icons: GitHub, LinkedIn, Email
- Optional status chip: "Open to opportunities"

## About
- Short, personal, human paragraph (who you are, what you like building)
- Your interests: Web3, Backend Development, AI
- 3–4 quick facts (location, school, focus, currently learning)
- Optional small photo or stylized avatar with hover interaction

## Projects (core showcase)
- Title: something like "Selected Work"
- Cards/grid with strong hover effects (lift, glow, border, parallax)
- Each card: image/thumbnail, title, 1–2 line description, tech tags, GitHub + Live links
- Filter or category tags (Web, Web3, AI, Backend, Mobile)
- Featured project(s) slightly larger
- Carried over + updated from current site:
  - Hotel Booking Website (React/SQL)
  - Automated Referee Scheduling System (React/Node/Java)
  - FlappyBird Clone (Java Swing)
  - Android Cycling App (Android/Firebase)
- Add placeholders for 1–2 newer Web3/AI projects if you have them

## Skills / Tech
- Visual but modern: grid of tech badges/icons, NOT old-style percentage bars
- Grouped: Languages / Frontend / Backend / Web3 & AI / Tools
- Examples: Java, Python, TypeScript, React, Node, SQL, Solidity, etc.
- Small reveal-on-scroll animations

## Contact
- Short, direct CTA: "Let's build something."
- Big email link + copy-to-clipboard button
- LinkedIn / GitHub buttons
- Optional simple contact form (or just mailto)
- Footer: © Hazzem Sukar — no template credits

## Motion & Interaction
- Typing animation in hero (with cursor)
- Fade/slide-up on scroll for each section
- Smooth-scroll between anchors
- Card hover transforms, subtle magnetic buttons
- Respect `prefers-reduced-motion`

## Technical Requirements
- Fully responsive (mobile-first)
- Fast load: optimized images, minimal blocking JS
- SEO basics: title, meta description, OG image, favicon
- Accessible: semantic HTML, keyboard nav, alt text, contrast
- Analytics (keep existing Google Analytics or update)
- Easy to update content (projects/data in one place)

## Open questions
- Keep it static vs Next.js?
- Any personal brand mark/logo or just name?
- Do you have a recent headshot/avatar to use?
- Do you want a blog/notes section later?
- Domain: stay on GitHub Pages or move to a custom domain?

## Next step
- Confirm this spec, then I’ll generate the design + scaffold the site.
