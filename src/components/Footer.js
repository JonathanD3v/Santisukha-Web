import React from "react";
import logo from "../assets/images/logo/logo1.webp";

export default function Footer() {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.07] bg-[#0a0907] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute bottom-[-50px] left-1/2 -translate-x-1/2 select-none"
        aria-hidden="true"
      >
        <span className="whitespace-nowrap text-[140px] font-bold tracking-[-0.08em] text-white/[0.018] sm:text-[220px] md:text-[300px] lg:text-[400px]">
          SANTI SUKHA
        </span>
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.02] blur-[140px]"
        aria-hidden="true"
      />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_0.7fr_0.7fr] lg:gap-20">
          {/* =================================================
              BRAND
          ================================================== */}

<div>
  {/* Logo / Brand */}
  <button
    type="button"
    onClick={() => scrollToSection("home")}
    className="group flex items-center gap-4"
  >
    <div className="relative">
      {/* Soft glow behind logo */}
      <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-xl transition-all duration-500 group-hover:bg-yellow-500/20" />

      {/* Logo container */}
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] p-2 transition-all duration-500 group-hover:border-yellow-500/30">
        <img
          src={logo}
          alt="Santi Sukha Monastery Logo"
          className="h-full w-full object-contain"
        />
      </div>
    </div>

    {/* Brand name */}
    <div className="text-left">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-white">
        Sasana Byatti Santi Sukha
      </p>

      <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-white/30">
        Monastery
      </p>
    </div>
  </button>

  {/* Description */}
  <p className="mt-8 max-w-md text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
    PKOC (Parami Knowledge Offering Center) is dedicated to spreading
    wisdom, supporting education, and uplifting the community in
    <span className="font-serif italic text-white/60">
      {" "}
      Pakokku, Myanmar
    </span>
    .
  </p>

  {/* Established */}
  <div className="mt-8 flex items-center gap-4">
    <span className="h-px w-10 bg-yellow-500/50" />

    <span className="text-[9px] uppercase tracking-[0.35em] text-white/25">
      Serving since 2005
    </span>
  </div>
</div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.4em] text-yellow-500/70">
              Explore
            </p>

            <nav className="flex flex-col items-start gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="text-sm text-white/45 transition-colors duration-300 hover:text-yellow-400"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("events")}
                className="text-sm text-white/45 transition-colors duration-300 hover:text-yellow-400"
              >
                Events
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="text-sm text-white/45 transition-colors duration-300 hover:text-yellow-400"
              >
                About Us
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("gallery")}
                className="text-sm text-white/45 transition-colors duration-300 hover:text-yellow-400"
              >
                Gallery
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("offer")}
                className="text-sm text-white/45 transition-colors duration-300 hover:text-yellow-400"
              >
                Offerings
              </button>
            </nav>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <p className="mb-6 text-[9px] uppercase tracking-[0.4em] text-yellow-500/70">
              Contact
            </p>

            <div className="space-y-5">
              {/* Phone */}
              <div>
                <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Phone
                </p>

                <a
                  href="tel:09401509091"
                  className="text-sm text-white/50 transition-colors duration-300 hover:text-yellow-400"
                >
                  09-401509091
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Email
                </p>

                <a
                  href="mailto:santisukha152002"
                  className="break-all text-sm text-white/50 transition-colors duration-300 hover:text-yellow-400"
                >
                  santisukha152002
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Location
                </p>

                <p className="text-sm text-white/50">
                  Pakokku, Myanmar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            SOCIAL
        ====================================================== */}

        <div className="mt-16 border-t border-white/[0.07] pt-8 sm:mt-20">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
                Follow our journey
              </p>

              <div className="mt-4 flex items-center gap-5">
                <a
                  href="https://www.facebook.com/profile.php?id=61578704758939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-yellow-400"
                >
                  Facebook

                  <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <span className="h-3 w-px bg-white/10" />

                <a
                  href="https://www.youtube.com/@mahasumerukahtinadanamyanm8000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-yellow-400"
                >
                  YouTube

                  <span className="text-white/20 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Back to Top */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-3 self-start text-[9px] uppercase tracking-[0.3em] text-white/30 transition-colors duration-300 hover:text-yellow-400 sm:self-auto"
            >
              Back to top

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-yellow-500/40">
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 16V4M5 9L10 4L15 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ====================================================== */}

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.04] pt-6 text-[9px] uppercase tracking-[0.2em] text-white/15 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sasana Byatti Santi Sukha Monastery
          </p>

          <p>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}