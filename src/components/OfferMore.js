import React, { useState } from "react";

export default function OfferMore() {
  const [show, setShow] = useState("01");

  const cards = [
    {
      id: "01",
      label:
        "Making Line Aye Nying Ce Pagoda he Five Buddhas Megga Boat & Kathina Civara Dana Ceremony",
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
        "Donation Ceremony to Samgha for 3Days Dedicated to Mr. HENRY CHIA THIANG LAI",
      videoId: "33GtH6k1zpU",
    },
    {
      id: "04",
      label:
        "Offering the Crown To &Putting the crown on Ayechanze Pagoda Ceremony",
      videoId: "DHs8SkhFGUs",
    },
  ];

  const selectedCard = cards.find((card) => card.id === show);

  return (
    <div className="bg-green-50">
      <div className="max-w-[95%] lg:max-w-[1080px] mx-auto py-12">
        {/* Header line */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 bg-green-700 w-full lg:max-w-[200px]"></div>
        </div>

        {/* Section title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-yellow-700 mb-3">
            Noble Offerings & Monastery Activities
          </h2>
          <p className="text-yellow-900 text-base leading-relaxed">
            With deep reverence, we welcome all donors and devotees to witness
            the serene moments of our Dāna (offerings) and monastery events.
            These heartfelt ceremonies are part of our journey to cultivate
            merit, loving-kindness, and unity within the community. The video
            below shares glimpses of these sacred occasions and cherished
            memories at our Burmese Buddhist monastery.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setShow(card.id)}
              className={`
        cursor-pointer p-5 text-center rounded-xl
        bg-white bg-opacity-20 backdrop-blur-md
        border border-transparent
        shadow-md
        transition duration-300 ease-in-out
        hover:scale-[1.04] hover:shadow-yellow-500/50 hover:border-yellow-500
        ${
          show === card.id
            ? "scale-[1.06] border-yellow-600 shadow-yellow-600/70 bg-yellow-100 bg-opacity-40"
            : ""
        }
        flex flex-col justify-center min-h-[150px]
      `}
            >
              <p className="text-lg font-extrabold text-yellow-600 uppercase tracking-wide mb-2">
                {card.id}
              </p>
              <p className="text-yellow-900 text-sm font-semibold leading-tight">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* YouTube Video */}
        {selectedCard && (
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${selectedCard.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
              title={selectedCard.label}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
