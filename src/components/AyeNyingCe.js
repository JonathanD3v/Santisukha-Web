import React from "react";

import stage1 from "../assets/images/aye_nying_ce/1.jpg";
import stage2 from "../assets/images/aye_nying_ce/2.jpg";
import stage3 from "../assets/images/aye_nying_ce/3.jpg";
import stage4 from "../assets/images/aye_nying_ce/4.jpg";
import stage5 from "../assets/images/aye_nying_ce/5.jpg";
import stage6 from "../assets/images/aye_nying_ce/6.jpg";
import stage7 from "../assets/images/aye_nying_ce/7.jpg";
import stage8 from "../assets/images/aye_nying_ce/8.jpg";
import stage9 from "../assets/images/aye_nying_ce/9.jpg";
import stage10 from "../assets/images/aye_nying_ce/10.jpg";
import stage11 from "../assets/images/aye_nying_ce/11.jpg";
import stage12 from "../assets/images/aye_nying_ce/12.jpg";

export default function AyeNyingCe() {
  // Group all images in an array
  const photos = [
    stage1,
    stage2,
    stage3,
    stage4,
    stage5,
    stage6,
    stage7,
    stage8,
    stage9,
    stage10,
    stage11,
    stage12,
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Title Section */}
      <section className="relative text-center mb-20 px-4">
        {/* Background Blur Blob */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-[400px] h-[400px] bg-yellow-300/20 blur-3xl rounded-full absolute top-[-50px] left-1/2 transform -translate-x-1/2 animate-pulse"></div>
          <div className="w-[300px] h-[300px] bg-yellow-500/30 blur-2xl rounded-full absolute top-0 right-0 animate-spin-slow"></div>
          <div className="w-[300px] h-[300px] bg-yellow-500/20 blur-2xl rounded-full absolute bottom-0 left-0 animate-spin-reverse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto backdrop-blur-sm bg-white/5 border border-yellow-500/20 rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 tracking-tight leading-tight drop-shadow-sm">
            Aye Nying Ce Pagoda & The Five Buddhas Magga Boat
          </h1>
          <p className="text-lg text-yellow-100 italic mb-4">
            “အေးငြိမ်းစေ” ဓမ္မကျောင်းတော် နှင့် မဂ္ဂင်ဖောင်တော်
          </p>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            This sacred construction project, inspired by the Dhamma, is
            dedicated to building the Aye Nying Ce Pagoda and the Five Buddhas
            Magga Boat — a symbol of spiritual guidance and merit. Through the
            devoted support of our donors and community, this site is being
            lovingly built step by step, nurturing peace, mindfulness, and
            unity.
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 bg-white"
          >
            <img
              src={img}
              alt={`Construction Stage ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </section>

      {/* Blessing Section */}
      <div className="mt-12 text-center">
        <p className="text-lg text-white font-bold leading-relaxed max-w-3xl mx-auto shadow-md">
          May the efforts of this noble endeavor bring blessings, peace, and
          Dhamma light to all beings. May all supporters attain health,
          happiness, and liberation on the Magga path.
        </p>
      </div>
    </div>
  );
}
