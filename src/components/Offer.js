import React, { useState } from "react";
import OfferPhoto from "./OfferPhoto";

export default function Offer() {
  const [show, setShow] = useState("01");

  const cards = [
    {
      id: "01",
      label: "Offering to the Sangha for Healing and Blessings",
    },
    {
      id: "02",
      label: "Donation Ceremony",
    },
    {
      id: "03",
      label: "Offering to the Sangha for Healing and Blessings",
    },
    {
      id: "04",
      label: "Donation Ceremony",
    },
  ];

  const selectedCard = cards.find((card) => card.id === show);

  return (
    <section
      id="offer"
      className="relative overflow-hidden bg-[#0d0b08] py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.025] blur-[150px]"
        aria-hidden="true"
      />

      {/* Decorative Background Text */}
      <div
        className="pointer-events-none absolute bottom-[-40px] left-1/2 -translate-x-1/2 select-none"
        aria-hidden="true"
      >
        <span className="whitespace-nowrap text-[180px] font-bold tracking-[-0.08em] text-white/[0.018] sm:text-[280px] md:text-[380px] lg:text-[500px]">
          OFFER
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          {/* Label */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-yellow-500/60 sm:w-14" />

            <span className="text-[10px] uppercase tracking-[0.45em] text-yellow-500/70 sm:text-xs">
              Offerings & Support
            </span>

            <span className="h-px w-10 bg-yellow-500/60 sm:w-14" />
          </div>

          {/* Title */}
          <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#f5f1e8] sm:text-5xl md:text-6xl">
            Offering with
            <br />

            <span className="font-serif italic text-yellow-400/90">
              Faith & Compassion
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
            Our monastery warmly welcomes all supporters to participate in
            meaningful donation ceremonies and spiritual activities. Together,
            we nurture faith, community and compassion through sacred offerings
            and acts of generosity.
          </p>
        </div>

        {/* =====================================================
            OFFERING SELECTOR
        ====================================================== */}

        <div className="mx-auto mt-16 max-w-4xl sm:mt-20">
          <div className="grid grid-cols-2 border-y border-white/[0.08] md:grid-cols-4">
            {cards.map((card, index) => {
              const active = show === card.id;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setShow(card.id)}
                  className={`group relative text-center transition-all duration-500 ${
                    index !== 0
                      ? "border-l border-white/[0.08]"
                      : ""
                  }`}
                >
                  {/* Active line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-500 ${
                      active
                        ? "bg-yellow-500"
                        : "bg-transparent group-hover:bg-yellow-500/20"
                    }`}
                  />

                  <div
                    className={`px-4 py-6 transition-colors duration-500 sm:px-6 sm:py-8 ${
                      active ? "bg-yellow-500/[0.035]" : ""
                    }`}
                  >
                    <span
                      className={`text-sm tracking-[0.25em] transition-colors duration-300 ${
                        active
                          ? "text-yellow-400"
                          : "text-white/25 group-hover:text-white/50"
                      }`}
                    >
                      {card.id}
                    </span>

                    <span
                      className={`mx-auto mt-3 block h-1 w-1 rounded-full transition-all duration-300 ${
                        active
                          ? "bg-yellow-400"
                          : "bg-white/15 group-hover:bg-white/30"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            PHOTO AREA
        ====================================================== */}

        <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <div className="relative">
            <OfferPhoto show={show} />

            {/* Decorative Corners */}
            <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-white/20 sm:left-8 sm:top-8 sm:h-12 sm:w-12" />

            <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-white/20 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12" />
          </div>
        </div>

        {/* =====================================================
            SELECTED OFFERING INFO
        ====================================================== */}

        {selectedCard && (
          <div className="mx-auto mt-10 flex max-w-5xl flex-col justify-between gap-8 border-b border-white/[0.08] pb-10 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-[9px] uppercase tracking-[0.35em] text-yellow-500/60">
                Offering {selectedCard.id}
              </p>

              <h3 className="mt-3 text-2xl font-light leading-tight text-white sm:text-3xl">
                {selectedCard.label}
              </h3>
            </div>

            <button
              type="button"
              className="group inline-flex shrink-0 items-center gap-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/60 transition-colors duration-300 hover:text-yellow-400"
            >
              <span>Learn More</span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-yellow-500/50">
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
        )}

        {/* =====================================================
            CLOSING MESSAGE
        ====================================================== */}

        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <div className="mb-6 text-sm text-yellow-500/50">✦</div>

          <p className="font-serif text-lg italic leading-8 text-white/35 sm:text-xl">
            "May every act of generosity become a source of peace, wisdom and
            blessings for all beings."
          </p>
        </div>
      </div>
    </section>
  );
}