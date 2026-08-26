import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1c140d]/90 backdrop-blur-md border-t border-yellow-400/20 shadow-[0_-10px_30px_rgba(0,0,0,0.25)] text-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">
            About Us
          </h3>
          <p className="text-sm leading-relaxed text-white/85">
            PKOC (Parami Knowledge Offering Center) is dedicated to spreading
            wisdom, supporting education, and uplifting the community in
            Pakokku, Myanmar.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              Phone:{" "}
              <a
                href="tel:09401509091"
                className="hover:text-yellow-400 transition"
              >
                09-401509091
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:santisukha152002"
                className="hover:text-yellow-400 transition"
              >
                santisukha152002
              </a>
            </li>
            <li>Location: Pakokku, Myanmar</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-300">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-4 text-sm text-white/80">
            <a
              href="https://www.facebook.com/profile.php?id=61578704758939"
              className="hover:text-yellow-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.youtube.com/@mahasumerukahtinadanamyanm8000"
              className="hover:text-yellow-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-yellow-400/20 text-center text-sm py-3 bg-yellow-700/25 text-white/90">
        <p>© {new Date().getFullYear()} Sasana Byatti. All rights reserved.</p>
      </div>
    </footer>
  );
}
