import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const stats = ["Since 2005", "Free education", "Community support"];

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto w-[95%] lg:w-[1080px]">
        <div
          className={`grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-[28px] p-7 md:p-10 shadow-2xl shadow-black/20">
            <span className="inline-flex items-center rounded-full border border-yellow-300/40 bg-yellow-400/10 px-3 py-1 text-xs md:text-sm font-medium tracking-[0.18em] text-yellow-200 uppercase">
              Parami Knowledge Offering Center
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
              Nurturing minds.
              <span className="block font-semibold text-yellow-400">
                Serving the community.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg text-gray-200 leading-relaxed">
              We are dedicated to offering free education, compassionate
              learning, and spiritual guidance to everyone, with our monastery
              located in Pakokku, Myanmar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 950,
                    behavior: "smooth",
                  });
                }}
                className="py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-white font-medium rounded-full transition duration-300 shadow-lg shadow-yellow-700/30"
              >
                Explore More
              </button>
              {/* <button
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="py-3 px-6 border border-white/30 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full transition duration-300"
              >
                Donate Now
              </button> */}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-black/15 px-3 py-2 text-xs md:text-sm text-gray-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-md bg-[#f8f2e7]/90 border border-yellow-200/60 rounded-[28px] p-6 md:p-8 shadow-2xl text-[#2c1f15]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-700">
              Our mission
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-snug">
              Empowering students through education, compassion, and wisdom.
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-[#4a3527]">
              Sasana Byatti Santisukha Parahita Monastery has been guiding young
              minds with kindness, discipline, and opportunity since 2005.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-[#f3e7cf] p-4 border border-yellow-200/60">
                <div className="text-2xl font-bold text-yellow-800">2005</div>
                <div className="text-sm text-[#5b4334]">
                  Founded with a vision for learning and service
                </div>
              </div>
              <div className="rounded-2xl bg-[#fffaf1] p-4 border border-yellow-200/60">
                <div className="text-2xl font-bold text-yellow-800">
                  Hundreds
                </div>
                <div className="text-sm text-[#5b4334]">
                  Students guided by volunteer teachers and mentors
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
