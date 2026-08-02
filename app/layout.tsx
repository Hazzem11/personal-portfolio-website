import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hazzem Sukar — Full-Stack Developer",
  description:
    "Portfolio of Hazzem Sukar, a Computer Science student and full-stack developer focused on Web3, backend systems, and AI.",
  keywords: [
    "Hazzem Sukar",
    "Full-Stack Developer",
    "Web3",
    "Backend",
    "AI",
    "uOttawa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#06070b] text-[#e7ecf3]">
        {children}
      </body>
    </html>
  );
}
