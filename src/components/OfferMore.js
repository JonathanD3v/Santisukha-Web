import React, { useState } from "react";
import OfferPhoto from "./OfferPhoto";

export default function OfferMore() {
  const [show, setShow] = useState("04");

  const cards = [
    { id: "01", label: "Community Prayer and Offering Event" },
    { id: "02", label: "Annual Donation Ceremony" },
    { id: "03", label: "Special Almsgiving to Monks" },
    { id: "04", label: "Offering to the Sangha for Blessings and Merit" },
  ];

  return (
    <div className="bg-green-50">
      <div className="max-w-[95%] lg:max-w-[1080px] mx-auto py-12">
        {/* Header line */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 bg-green-700 w-full lg:max-w-[200px]"></div>
        </div>

        {/* Section title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-700 mb-3">
            Donation Ceremony & Monastery Events
          </h2>
          <p className="text-slate-700 text-base leading-relaxed">
            Our monastery warmly welcomes all supporters to participate in
            meaningful donation ceremonies and spiritual events. Together, we
            nurture faith, community, and compassion through various sacred
            offerings and activities.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setShow(card.id)}
              className={`rounded-xl border transition-all duration-300 cursor-pointer p-4 text-center shadow-md hover:scale-105 ${
                show === card.id
                  ? "border-green-600 bg-green-100"
                  : "border-white bg-white"
              }`}
            >
              <p className="text-2xl font-semibold text-green-800 mb-4">
                {card.id}
              </p>
              <p className="text-slate-700">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Conditional photo or content */}
        <OfferPhoto show={show} />
      </div>
    </div>
  );
}
