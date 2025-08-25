import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo1.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 object-contain cursor-pointer rounded-lg shadow-lg"
          />
          <span className="text-white text-lg font-semibold tracking-wide">
            Sasana Byatti Santisukha (Parahita) Monastery
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            to="/about"
            className="text-gray-200 hover:text-yellow-400 transition"
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-gray-200 hover:text-yellow-400 transition"
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="text-gray-200 hover:text-yellow-400 transition"
          >
            Contact
          </Link>
          <Link
            to="/donate"
            className="ml-4 py-2 px-4 bg-yellow-500 hover:bg-yellow-400 text-white font-medium rounded-lg shadow transition"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
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
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
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

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black/80 backdrop-blur-sm border-t border-white/20">
          <div className="flex flex-col px-4 py-4 space-y-4 text-center">
            <Link
              to="/about"
              className="text-gray-200 hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-gray-200 hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-yellow-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/donate"
              className="py-2 px-4 bg-yellow-500 hover:bg-yellow-400 text-white font-medium rounded-lg shadow transition"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
