// src/pages/ComingSoon.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
        🚧 Coming Soon
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
        We’re working hard on this page. Stay tuned for updates on this section!
      </p>
      <Link
        to="/"
        className="py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-lg transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
