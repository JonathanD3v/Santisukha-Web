import React from "react";

import Header from "./Header";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Offer from "./Offer";
import PhotoCarousel from "./PhotoCarousel";
import OfferMore from "./OfferMore";
import AyeNyingCe from "./AyeNyingCe";

import bg_img from "../assets/images/welcome_bg1.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#1c140d] text-white">
      <div
        className="relative"
        style={{
          background: `url(${bg_img}) no-repeat center center fixed`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120d09]/80 via-[#120d09]/55 to-[#1c140d]/95" />

        <div className="relative z-10">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <Header />

          {/* =====================================================
              HERO / WELCOME
          ====================================================== */}
          <Welcome />

          {/* =====================================================
              OFFER MORE
          ====================================================== */}
          <OfferMore />

          {/* =====================================================
              AYE NYING CE
          ====================================================== */}
          <AyeNyingCe />

          {/* =====================================================
              ABOUT US
          ====================================================== */}
          <section
            id="about"
            className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
          >
            {/* Ambient Glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.035] blur-[140px]"
              aria-hidden="true"
            />

            {/* Background 2005 */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
              aria-hidden="true"
            >
              <span className="whitespace-nowrap text-[180px] font-bold tracking-[-0.08em] text-white/[0.025] sm:text-[280px] md:text-[380px] lg:text-[500px]">
                2005
              </span>
            </div>

            <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
              {/* ---------------------------------------------
                  Section Label
              ---------------------------------------------- */}
              <div className="mb-12 flex items-center justify-center gap-4 sm:mb-16">
                <span className="h-px w-10 bg-yellow-500/50 sm:w-16" />

                <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-yellow-500/70 sm:text-xs">
                  About Us
                </span>

                <span className="h-px w-10 bg-yellow-500/50 sm:w-16" />
              </div>

              {/* ---------------------------------------------
                  Main Heading
              ---------------------------------------------- */}
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-light leading-[1.05] tracking-[-0.04em] text-[#f5f1e8] sm:text-5xl md:text-6xl lg:text-7xl">
                  Empowering Students
                  <br />

                  <span className="font-serif italic text-yellow-400/90">
                    Through Education
                  </span>
                </h2>

                <p className="mt-6 text-xs uppercase tracking-[0.35em] text-white/35 sm:text-sm">
                  Since 2005
                </p>
              </div>

              {/* ---------------------------------------------
                  Divider
              ---------------------------------------------- */}
              <div className="mx-auto my-12 flex items-center justify-center gap-4">
                <span className="h-px w-16 bg-white/10 sm:w-24" />

                <span className="text-sm text-yellow-500/70">✦</span>

                <span className="h-px w-16 bg-white/10 sm:w-24" />
              </div>

              {/* ---------------------------------------------
                  Description
              ---------------------------------------------- */}
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-lg leading-8 text-white/65 sm:text-xl sm:leading-9">
                  <span className="font-medium text-white">
                    Sasana Byatti Santisukha Parahita Monastery
                  </span>{" "}
                  has proudly provided free education to students who
                  successfully pass our entrance examination.
                </p>

                <p className="mt-6 text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  Our mission is to nurture young minds and create brighter
                  futures for the community in{" "}
                  <span className="font-serif italic text-white/70">
                    Pakokku, Myanmar
                  </span>
                  .
                </p>

                <p className="mt-6 text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  Since our founding, compassionate volunteer teachers and
                  generous supporters have helped us support hundreds of
                  students. We believe education is the foundation for a
                  better tomorrow.
                </p>
              </div>

              {/* ---------------------------------------------
    Stats
---------------------------------------------- */}
<div className="mx-auto mt-16 max-w-3xl border-y border-white/[0.08] sm:mt-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x sm:divide-white/[0.08]">
    
    {/* Founded */}
    <div className="px-6 py-8 text-center sm:py-10">
      <p className="text-3xl font-light tracking-tight text-white sm:text-4xl">
        2005
      </p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
        Founded
      </p>
    </div>

    {/* Students Supported */}
    <div className="border-t border-white/[0.08] px-6 py-8 text-center sm:border-t-0 sm:py-10">
      <p className="text-3xl font-light tracking-tight text-white sm:text-4xl">
        4000
        <span className="text-yellow-500">+</span>
      </p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/30 sm:text-[10px]">
        Students Supported
      </p>
    </div>

  </div>
</div>

              {/* ---------------------------------------------
                  Bottom Content
              ---------------------------------------------- */}
              <div className="mt-14 text-center sm:mt-16">
                <button
                  onClick={scrollToBottom}
                  className="group inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 transition-colors duration-300 hover:text-yellow-400 sm:text-xs"
                >
                  <span>Learn More About Us</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-yellow-500/50">
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-1"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 4V16M5 11L10 16L15 11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* =====================================================
              PHOTO CAROUSEL
          ====================================================== */}
          <PhotoCarousel />

          {/* =====================================================
              OFFER
          ====================================================== */}
          <Offer />

          {/* =====================================================
              FOOTER
          ====================================================== */}
          <Footer />
        </div>
      </div>
    </div>
  );
}