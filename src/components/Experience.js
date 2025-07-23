import React, { useEffect, useState } from "react";

export default function Experience() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const stats = [
    { label: "Years of Free Education", value: "19+" },
    { label: "Students Educated", value: "1000+" },
    { label: "Volunteer Teachers", value: "50+" },
    { label: "Community Support", value: "100%" },
  ];

  return (
    <div className="h-fit py-16 bg-transparent">
      <div
        className={`max-w-[95%] lg:max-w-[1080px] mx-auto px-6 py-10 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 text-center transition-all duration-1000 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl md:text-4xl font-light text-white mb-10">
          Our Journey in Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/10 border border-white/20 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <p className="text-4xl font-bold text-yellow-400">{stat.value}</p>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
