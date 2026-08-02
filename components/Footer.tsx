export default function Footer() {
  return (
    <footer className="border-t border-[#1c2230] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-display text-sm tracking-wider">
          <span className="text-metal">HAZZEM</span>
          <span className="text-[#5ea4ff]">.dev</span>
        </p>
        <p className="font-mono text-xs text-[#8b96a8]">
          Designed & built by Hazzem Sukar — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
