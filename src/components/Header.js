import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo/logo1.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#0d0b08]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            LOGO
        ====================================================== */}

        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="group flex min-w-0 items-center gap-3"
        >
          <div className="relative shrink-0">
            <img
              src={logo}
              alt="Santi Sukha Monastery"
              className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-11 sm:w-11"
            />

            {/* Subtle glow */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-yellow-500/10 blur-xl" />
          </div>

          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-xs font-medium uppercase tracking-[0.18em] text-white/90">
              Sasana Byatti Santisukha
            </p>

            <p className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-white/30">
              Monastery
            </p>
          </div>
        </button>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden items-center gap-8 md:flex">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-yellow-400"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("events")}
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-yellow-400"
          >
            Events
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("about")}
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-yellow-400"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("gallery")}
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 hover:text-yellow-400"
          >
            Gallery
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="group ml-2 inline-flex items-center gap-3 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-yellow-400 transition-all duration-300 hover:border-yellow-400/70 hover:bg-yellow-500/20"
          >
            Contact

            <svg
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4 10H16M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-yellow-500/40 hover:text-yellow-400 md:hidden"
        >
          {isOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#0d0b08]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          <button
            type="button"
            onClick={() => handleNavClick("home")}
            className="border-b border-white/[0.06] py-4 text-left text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-yellow-400"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("events")}
            className="border-b border-white/[0.06] py-4 text-left text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-yellow-400"
          >
            Events
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("about")}
            className="border-b border-white/[0.06] py-4 text-left text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-yellow-400"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("gallery")}
            className="border-b border-white/[0.06] py-4 text-left text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-yellow-400"
          >
            Gallery
          </button>

          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="mt-5 flex items-center justify-between rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-3.5 text-left text-[10px] font-medium uppercase tracking-[0.25em] text-yellow-400 transition-all hover:bg-yellow-500/20"
          >
            Contact

            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4 10H16M11 5L16 10L11 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
}