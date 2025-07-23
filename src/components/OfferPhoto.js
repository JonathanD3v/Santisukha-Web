import React from "react";
import pre_01 from "../assets/images/offer/pre_01.jpg";
import pre_02 from "../assets/images/offer/pre_02.jpg";
import pre_03 from "../assets/images/offer/pre_03.jpg";
import build_01 from "../assets/images/offer/build_01.jpg";
import build_02 from "../assets/images/offer/build_02.jpg";
import build_03 from "../assets/images/offer/build_03.jpg";
import de_01 from "../assets/images/offer/de_01.jpg";
import de_02 from "../assets/images/offer/de_02.jpg";
import de_03 from "../assets/images/offer/de_03.jpg";
import re_01 from "../assets/images/offer/re_01.jpg";
import re_02 from "../assets/images/offer/re_02.jpg";
import re_03 from "../assets/images/offer/re_03.jpg";

import { donation1, donation2, donation3, donation4 } from "../store/data";

const offerMap = {
  "01": {
    title: "Donation",
    images: [pre_01, pre_02, pre_03],
    data: donation1,
  },
  "02": {
    title: "Donation",
    images: [build_01, build_02, build_03],
    data: donation2,
  },
  "03": {
    title: "Donation",
    images: [re_01, re_02, re_03],
    data: donation3,
  },
  "04": {
    title: "Donation",
    images: [de_03, de_02, de_01],
    data: donation4,
  },
};

export default function OfferPhoto({ show }) {
  const selected = offerMap[show];
  if (!selected) return null;

  return (
    <div className="pt-6">
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-6">
        <p className="text-green-600 font-semibold text-2xl tracking-wide">
          {selected.title}
        </p>
        <div className="flex-grow h-0.5 bg-green-700 rounded-full"></div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Image Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 transition-all duration-300 ease-in-out hover:shadow-xl">
          <img
            src={selected.images[0]}
            className="rounded-xl w-full mb-4 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            alt="Main"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={selected.images[1]}
              className="rounded-lg h-[160px] w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              alt="Secondary 1"
            />
            <img
              src={selected.images[2]}
              className="rounded-lg h-[160px] w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md"
              alt="Secondary 2"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl text-slate-800 leading-relaxed">
          <ul className="list-decimal list-inside space-y-4">
            {selected.data?.map((item, index) => (
              <li key={index} className="font-semibold text-base">
                {item.title}
                <ul className="list-disc list-inside ps-4 mt-2 space-y-1 font-normal text-sm text-gray-700">
                  {item.details?.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
