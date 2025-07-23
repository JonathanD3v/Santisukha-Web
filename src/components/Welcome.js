import React, { useEffect, useState } from "react";

export default function Welcome() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen bg-transparent">
      <div
        className="h-full w-full flex justify-center items-start"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div
          className={`max-w-[95%] lg:max-w-[1080px] mx-auto px-4 py-8 mt-[15vh] backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 text-center transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl md:text-4xl font-light tracking-wide text-white mb-6 leading-snug">
            Welcome to{" "}
            <span className="font-semibold text-yellow-400">
              Sasana Byatti Santisukha Parahita Monastery
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
            Parami Knowledge Offering Center In Pakokku, Myanmar.
          </p>
          <button
            onClick={() => {
              window.scrollTo({
                top: 1000,
                behavior: "smooth",
              });
            }}
            className="py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-white font-medium rounded-xl transition duration-300 shadow-lg"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}
