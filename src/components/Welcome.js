import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToAyeNyingCe = () => {
    const section = document.getElementById("aye-nying-ce");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const stats = [
    {
      value: "2005",
      label: "Since",
    },
    {
      value: "Free",
      label: "Education",
    },
    {
      value: "Community",
      label: "Support",
    },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* =====================================================
          BACKGROUND ELEMENTS
      ====================================================== */}

      {/* Large Background Text */}
      <div
        className="pointer-events-none absolute bottom-[-20px] left-1/2 -translate-x-1/2 select-none"
        aria-hidden="true"
      >
        <span className="whitespace-nowrap text-[150px] font-bold tracking-[-0.08em] text-white/[0.025] sm:text-[220px] md:text-[320px] lg:text-[430px]">
          PARAMI
        </span>
      </div>

      {/* Main Ambient Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.045] blur-[140px]"
        aria-hidden="true"
      />

      {/* Small Gold Glow */}
      <div
        className="pointer-events-none absolute right-[-150px] top-[20%] h-[300px] w-[300px] rounded-full bg-yellow-600/[0.025] blur-[120px]"
        aria-hidden="true"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        {/* ---------------------------------------------
            TOP LABEL
        ---------------------------------------------- */}
        <div
          className={`flex items-center gap-4 transition-all duration-1000 ${
            animate
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
          }`}
        >
          <span className="h-px w-10 bg-yellow-500/60 sm:w-14" />

          <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-yellow-500/80 sm:text-xs">
            Parami Knowledge Offering Center
          </span>
        </div>

        {/* ---------------------------------------------
            HERO
        ---------------------------------------------- */}
        <div className="mt-10 max-w-5xl sm:mt-14 lg:mt-16">
          <h1
            className={`text-5xl font-light leading-[0.95] tracking-[-0.055em] text-[#f5f1e8] transition-all duration-[1200ms] ease-out sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[105px] ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            Nurturing minds.
            <br />

            <span className="font-serif italic text-yellow-400/90">
              Serving
            </span>{" "}
            the community.
          </h1>
        </div>

        {/* ---------------------------------------------
            DESCRIPTION
        ---------------------------------------------- */}
        <div
          className={`mt-10 max-w-2xl transition-all duration-1000 ${
            animate
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: "250ms",
          }}
        >
          <p className="text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            We are dedicated to offering{" "}
            <span className="text-white/85">free education</span>,
            compassionate learning, and spiritual guidance to everyone,
            creating opportunities for a brighter future in{" "}
            <span className="font-serif italic text-white/80">
              Pakokku, Myanmar
            </span>
            .
          </p>
        </div>

        {/* ---------------------------------------------
            CTA
        ---------------------------------------------- */}
        <div
          className={`mt-10 transition-all duration-1000 ${
            animate
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: "400ms",
          }}
        >
          <button
            onClick={scrollToAyeNyingCe}
            className="group inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:text-yellow-400"
          >
            <span>Explore More</span>

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-yellow-500/60 group-hover:bg-yellow-500/5">
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10 4V16M5 11L10 16L15 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* ---------------------------------------------
            STATS
        ---------------------------------------------- */}
        <div
          className={`mt-20 max-w-3xl border-y border-white/[0.08] transition-all duration-1000 sm:mt-28 ${
            animate
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: "550ms",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-white/[0.08]">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-5 py-7 sm:px-6 sm:py-8 ${
                  index !== 0
                    ? "border-t border-white/[0.08] sm:border-t-0"
                    : ""
                }`}
              >
                <p className="text-xl font-light tracking-tight text-white sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------------------------
            SCROLL INDICATOR
        ---------------------------------------------- */}
        <div
          className={`absolute bottom-8 right-6 hidden flex-col items-center gap-3 transition-all duration-1000 sm:right-8 lg:flex ${
            animate ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: "1000ms",
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/25 [writing-mode:vertical-rl]">
            Scroll to explore
          </span>

          <div className="h-12 w-px bg-gradient-to-b from-yellow-500/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}