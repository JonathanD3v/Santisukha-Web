import React, { useEffect, useState } from "react";

export default function AboutUs() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-transparent py-20">
      <div
        className="max-w-[95%] lg:max-w-[1080px] mx-auto px-6 py-12 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 text-center transition-all duration-1000"
        style={{
          opacity: animate ? 1 : 0,
          transform: animate ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <h1 className="text-3xl md:text-5xl font-light tracking-wide text-white mb-6 leading-snug">
          Empowering Students Through{" "}
          <span className="font-semibold text-yellow-400">Education</span> Since
          2005
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          <span className="text-white font-medium">
            Sasana Byatti Santisukha Parahita Monastery
          </span>{" "}
          has proudly been providing free education to students who successfully
          pass our entrance examination. Our mission is to nurture young minds
          and create brighter futures for the community in{" "}
          <span className="italic">Pakokku, Myanmar</span>.
        </p>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          Since our founding, we have supported hundreds of students, guided by
          compassionate volunteer teachers and a strong commitment to community
          upliftment. We believe that education is the key to unlocking a better
          tomorrow for everyone.
        </p>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
          Our doors remain open to passionate students, and we continue to
          expand our efforts with the support of generous donors and volunteers
          who share our vision.
        </p>

        <button
          onClick={() => {
            window.scrollTo({
              top: 1500,
              behavior: "smooth",
            });
          }}
          className="py-3 px-8 bg-yellow-500 hover:bg-yellow-400 text-white font-medium rounded-xl transition duration-300 shadow-lg"
        >
          Learn More About Us
        </button>
      </div>
    </div>
  );
}
