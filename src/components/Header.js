import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo/logo1.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#1b120b]/70 backdrop-blur-md border-b border-yellow-200/10 shadow-lg shadow-black/10">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3 min-w-0">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain cursor-pointer rounded-xl shadow-lg"
          />
          <span className="text-white text-sm md:text-lg font-semibold tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
            Santi Sukha Monastery
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
          <button
            type="button"
            onClick={() => handleNavClick("about")}
            className="text-gray-200 hover:text-yellow-400 transition-colors duration-200"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => handleNavClick("events")}
            className="text-gray-200 hover:text-yellow-400 transition-colors duration-200"
          >
            Events
          </button>
          {/* <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="text-gray-200 hover:text-yellow-400 transition-colors duration-200"
          >
            Contact
          </button> */}
          <button
            type="button"
            onClick={() => handleNavClick("contact")}
            className="ml-2 py-2.5 px-5 bg-yellow-500 hover:bg-yellow-400 text-white rounded-full shadow-lg shadow-yellow-700/30 transition-all duration-200"
          >
            Contact
          </button>
        </nav>

        <div className="md:hidden">
          <button
            className="text-white p-2 rounded-full hover:bg-white/5 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-[#1a120d]/95 backdrop-blur-sm border-t border-white/10">
          <div className="flex flex-col px-4 py-4 space-y-4 text-center">
            <button
              type="button"
              onClick={() => handleNavClick("about")}
              className="text-gray-200 hover:text-yellow-400 transition"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleNavClick("events")}
              className="text-gray-200 hover:text-yellow-400 transition"
            >
              Events
            </button>
            {/* <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="text-gray-200 hover:text-yellow-400 transition"
            >
              Contact
            </button> */}
            <button
              type="button"
              onClick={() => handleNavClick("contact")}
              className="py-2.5 px-4 bg-yellow-500 hover:bg-yellow-400 text-white font-medium rounded-full transition"
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
