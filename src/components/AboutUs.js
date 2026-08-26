import React, { useEffect, useState } from "react";

export default function AboutUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToMore = () => {
    window.scrollTo({
      top: 1500,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-transparent py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND YEAR
      ====================================================== */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
        aria-hidden="true"
      >
        <span className="whitespace-nowrap text-[180px] font-bold tracking-[-0.08em] text-white/[0.025] sm:text-[260px] md:text-[360px] lg:text-[500px]">
          2005
        </span>
      </div>

      {/* Ambient Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-yellow-500/[0.035] blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* =====================================================
            TOP LABEL
        ====================================================== */}
        <div
          className="mb-16 flex items-center gap-4 transition-all duration-1000 sm:mb-20"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate
              ? "translateY(0)"
              : "translateY(20px)",
          }}
        >
          <span className="h-px w-10 bg-yellow-500/60" />

          <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-yellow-500/80 sm:text-xs">
            About Our Institution
          </span>

          <span className="h-px w-10 bg-yellow-500/60" />
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* LEFT */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate
                ? "translateX(0)"
                : "translateX(-40px)",
              transitionDelay: "150ms",
            }}
          >
            {/* Year */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-sm font-medium tracking-[0.3em] text-yellow-500">
                EST.
              </span>

              <span className="h-px w-12 bg-white/15" />

              <span className="text-sm tracking-[0.2em] text-white/50">
                2005
              </span>
            </div>

            <h2 className="max-w-2xl text-5xl font-light leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
              Empowering Students
              <br />
              Through{" "}
              <span className="font-serif italic text-yellow-400/90">
                Education.
              </span>
            </h2>

            <div className="mt-10 h-px w-20 bg-yellow-500/50" />
          </div>

          {/* RIGHT */}
          <div
            className="transition-all duration-1000"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate
                ? "translateX(0)"
                : "translateX(40px)",
              transitionDelay: "300ms",
            }}
          >
            <div className="border-l border-yellow-500/20 pl-6 sm:pl-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-yellow-500/70">
                Sasana Byatti Santisukha Parahita
              </p>

              <p className="mt-6 text-lg leading-8 text-white/65 sm:text-xl sm:leading-9">
                We have proudly provided free education to students who
                successfully pass our entrance examination, nurturing young
                minds and creating brighter futures for the community in{" "}
                <span className="font-serif italic text-white/90">
                  Pakokku, Myanmar
                </span>
                .
              </p>

              <p className="mt-6 text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                Since our founding, compassionate volunteer teachers and
                generous supporters have helped us provide opportunities for
                hundreds of students. We believe education is the foundation
                for a better tomorrow.
              </p>

              <p className="mt-6 text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                Our doors remain open to passionate students, and our mission
                continues to grow through the support of donors, teachers and
                volunteers who share our vision.
              </p>

              {/* CTA */}
              <button
                onClick={scrollToMore}
                className="group mt-10 inline-flex items-center gap-5 text-xs font-medium uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:text-yellow-400"
              >
                <span>Learn More About Us</span>

                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-yellow-500/60">
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}
        <div
          className="mt-24 border-y border-white/[0.08] transition-all duration-1000 sm:mt-32"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate
              ? "translateY(0)"
              : "translateY(30px)",
            transitionDelay: "500ms",
          }}
        >
          <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* Stat 1 */}
            <div className="px-6 py-8 text-center sm:py-10">
              <p className="text-3xl font-light tracking-tight text-white sm:text-4xl">
                2005
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/35">
                Founded
              </p>
            </div>

            {/* Stat 2 */}
            <div className="px-6 py-8 text-center sm:py-10">
              <p className="text-3xl font-light tracking-tight text-white sm:text-4xl">
                100<span className="text-yellow-500">+</span>
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/35">
                Students Supported
              </p>
            </div>

            {/* Stat 3 */}
            <div className="px-6 py-8 text-center sm:py-10">
              <p className="text-3xl font-light tracking-tight text-white sm:text-4xl">
                Free
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/35">
                Education
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING
        ====================================================== */}
        <div
          className="mt-20 text-center transition-all duration-1000 sm:mt-28"
          style={{
            opacity: animate ? 1 : 0,
            transitionDelay: "700ms",
          }}
        >
          <span className="text-lg text-yellow-500/60">✦</span>

          <p className="mx-auto mt-5 max-w-xl font-serif text-lg italic leading-8 text-white/40 sm:text-xl">
            “Education is not simply the preparation for life; it is a way of
            creating a better future for our community.”
          </p>
        </div>
      </div>
    </section>
  );
}