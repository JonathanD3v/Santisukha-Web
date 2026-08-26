import React, { useState } from "react";

export default function OfferMore() {
  const [show, setShow] = useState("01");

  const cards = [
    {
      id: "01",
      label:
        "Making Line Aye Nying Ce Pagoda, The Five Buddhas Magga Boat & Kathina Civara Dana Ceremony",
      videoId: "1_HlulRU09s",
    },
    {
      id: "02",
      label:
        "The Kathina Civara Dana Ceremony Record of The PARAHITA Monastery",
      videoId: "E_zKIwgi43M",
    },
    {
      id: "03",
      label:
        "Donation Ceremony to Samgha for 3 Days Dedicated to Mr. HENRY CHIA THIANG LAI",
      videoId: "33GtH6k1zpU",
    },
    {
      id: "04",
      label:
        "Offering the Crown & Putting the Crown on Ayechanze Pagoda Ceremony",
      videoId: "DHs8SkhFGUs",
    },
  ];

  const selectedCard = cards.find((card) => card.id === show);

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#0d0b08] py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.025] blur-[150px]"
        aria-hidden="true"
      />

      {/* Decorative Background Number */}
      <div
        className="pointer-events-none absolute right-[-40px] top-20 select-none"
        aria-hidden="true"
      >
        <span className="text-[180px] font-bold tracking-[-0.08em] text-white/[0.018] sm:text-[260px]">
          04
        </span>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="max-w-3xl">
          {/* Label */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-yellow-500/60 sm:w-14" />

            <span className="text-[10px] uppercase tracking-[0.45em] text-yellow-500/70 sm:text-xs">
              Ceremonies & Events
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#f5f1e8] sm:text-5xl md:text-6xl">
            Noble Offerings &
            <br />

            <span className="font-serif italic text-yellow-400/90">
              Monastery Activities
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
            With deep reverence, we welcome donors and devotees to witness the
            serene moments of our Dāna, ceremonies and monastery activities.
            These occasions represent a journey of merit, loving-kindness and
            unity within our community.
          </p>
        </div>

        {/* =====================================================
            EVENT SELECTOR
        ====================================================== */}

        <div className="mt-16 border-y border-white/[0.08] sm:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {cards.map((card, index) => {
              const active = show === card.id;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setShow(card.id)}
                  className={`group relative text-left transition-all duration-500 ${
                    index % 2 === 0
                      ? "md:border-r md:border-white/[0.08]"
                      : ""
                  } ${
                    index >= 2
                      ? "border-t border-white/[0.08]"
                      : ""
                  }`}
                >
                  <div
                    className={`relative flex min-h-[150px] gap-5 p-6 sm:min-h-[170px] sm:p-8 lg:p-10 ${
                      active ? "bg-yellow-500/[0.035]" : ""
                    }`}
                  >
                    {/* Active Indicator */}
                    <div
                      className={`absolute bottom-0 left-0 top-0 w-[2px] transition-all duration-500 ${
                        active
                          ? "bg-yellow-500"
                          : "bg-transparent group-hover:bg-yellow-500/30"
                      }`}
                    />

                    {/* Number */}
                    <div className="shrink-0">
                      <span
                        className={`text-sm tracking-[0.25em] transition-colors duration-300 ${
                          active
                            ? "text-yellow-400"
                            : "text-white/25 group-hover:text-white/50"
                        }`}
                      >
                        {card.id}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`text-sm font-medium leading-6 transition-colors duration-300 sm:text-base ${
                          active
                            ? "text-white"
                            : "text-white/50 group-hover:text-white/80"
                        }`}
                      >
                        {card.label}
                      </h3>

                      <div
                        className={`mt-5 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] transition-all duration-300 ${
                          active
                            ? "text-yellow-400/80"
                            : "text-white/20 group-hover:text-white/40"
                        }`}
                      >
                        <span>
                          {active ? "Now Playing" : "Watch Ceremony"}
                        </span>

                        <span
                          className={`transition-transform duration-300 ${
                            active ? "translate-x-1" : ""
                          }`}
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            VIDEO
        ====================================================== */}

        {selectedCard && (
          <div className="mt-10 sm:mt-12">
            {/* Video Header */}
            <div className="mb-5 flex items-end justify-between gap-5">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-yellow-500/60">
                  Selected Ceremony
                </p>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
                  {selectedCard.label}
                </p>
              </div>

              <span className="hidden text-3xl font-light text-white/10 sm:block">
                {selectedCard.id}
              </span>
            </div>

            {/* Video */}
            <div className="group relative overflow-hidden bg-black">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${selectedCard.videoId}?rel=0&modestbranding=1`}
                  title={selectedCard.label}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Decorative Corners */}
              <div className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-white/20 sm:left-8 sm:top-8 sm:h-12 sm:w-12" />

              <div className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-white/20 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12" />
            </div>

            {/* Video Progress */}
            <div className="mt-5 flex items-center gap-4">
              <span className="text-[9px] tracking-[0.25em] text-yellow-500/70">
                {selectedCard.id}
              </span>

              <div className="h-px flex-1 bg-white/[0.08]">
                <div
                  className="h-px bg-yellow-500/60 transition-all duration-500"
                  style={{
                    width: `${((Number(selectedCard.id) / cards.length) * 100).toFixed(
                      0
                    )}%`,
                  }}
                />
              </div>

              <span className="text-[9px] tracking-[0.25em] text-white/20">
                {String(cards.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        )}

        {/* =====================================================
            CLOSING
        ====================================================== */}

        <div className="mt-20 flex items-center justify-center gap-4 sm:mt-28">
          <span className="h-px w-12 bg-white/[0.08]" />

          <span className="text-sm text-yellow-500/50">✦</span>

          <span className="h-px w-12 bg-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}