import React from "react";

export default function Footer() {
  return (
    <footer className="bg-yellow-600/30 backdrop-blur-md border-t border-yellow-400/40 shadow-md rounded-t-xl text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-white/90">
            PKOC (Parami Knowledge Offering Center) is dedicated to spreading
            the Dhamma and supporting the community in Pakokku, Myanmar.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              Phone:{" "}
              <a href="#" className="hover:text-yellow-400 transition">
                062-23125
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
          </ul>
        </div>

        {/* Column 3: Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-white/80">
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

      {/* Bottom bar */}
      <div className="border-t border-yellow-400/50 text-center text-sm py-2 bg-yellow-700/60 rounded-b-xl text-white/90">
        <p>© {new Date().getFullYear()} Sasana Byatti. All rights reserved.</p>
      </div>
    </footer>
  );
}
