"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

/* Define Header classes */
const site_header = "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300"
const header_inner = "grid grid-cols-[1fr_auto_1fr] items-center mx-auto max-w-[1380px] w-full gap-x-[30px] gap-y-3 px-[30px] py-[17px]"
const wordmark = "justify-self-start font-heading text-[1.15rem] sm:text-[1.4rem] leading-[0.75] font-bold tracking-[0.02em] text-[#28a175] hover:text-accent-2"
const top_nav = "col-start-2 hidden flex-wrap justify-center gap-y-3 gap-x-10 sm:flex"
const nav_link = "border-b-2 border-transparent text-ink hover:text-accent px-0.5 py-1 font-heading text-[1.05rem] leading-[1.75] tracking-[0.03em]"

/* Define mobile navigation classes */
const mobile_menu_button = "col-start-3 justify-self-end sm:hidden text-ink hover:text-accent"
const mobile_dropdown = "absolute inset-x-0 top-full flex flex-col z-50 bg-canvas/90 backdrop-blur-sm sm:hidden"
const mobile_link = "px-[30px] py-3 font-heading text-[1rem] tracking-[0.03em]"

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [activeId, setActiveId] = useState<string>("");

  /* Color and underline Active Nav Link
  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);
  */

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${site_header} ${
      scrolled
        ? "border-transparent transition-[transform,box-shadow] duration-200 ease-out drop-shadow-[0_0_8px_rgba(0,0,0,0.35)] bg-canvas/95 backdrop-blur-sm"
        : "border-transparent bg-transparent"
    }`}
    >
      <div className={header_inner}>
        <a
          href="#top"
          className={wordmark}
        >
          Michael Blevins
        </a>
        <nav
          aria-label="Section navigation"
          className={top_nav}
        >
          {navLinks.map((link) => {
            // const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`${nav_link}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={mobile_menu_button}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <nav aria-label="Mobile section navigation" className={mobile_dropdown}>
          {navLinks.map((link) => {
            // const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`${mobile_link}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}