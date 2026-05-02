"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["About", "Service", "Resume", "Project", "Contact"];

  return (
    <header className="sticky top-4 z-50 py-4">
      <nav className="content-wrap">
        <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-[#1f2024] px-3 py-2 text-white shadow-2xl">
          <Link href="#" className="rounded-full bg-[#ff7a3e] px-4 py-2 text-xs font-semibold tracking-wide text-white">
            Home
          </Link>

          <div className="hidden items-center gap-7 text-sm md:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/85 transition hover:text-[#ff7a3e]"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff7a3e] text-xs font-bold">
              AA
            </span>
            <span className="font-medium tracking-wide">ARISTO</span>
          </div>

          <button
            className="rounded-full border border-white/20 p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-3 rounded-2xl bg-[#1f2024] px-5 py-4 text-sm text-white md:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="block rounded-lg px-2 py-2 hover:bg-white/10">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
