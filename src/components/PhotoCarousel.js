import React, { useState } from "react";
import Slider from "react-slick";

import pre01 from "../assets/images/slideshow/1.jpg";
import pre02 from "../assets/images/slideshow/2.jpg";
import pre03 from "../assets/images/slideshow/3.jpg";
import pre04 from "../assets/images/slideshow/4.jpg";
import pre05 from "../assets/images/slideshow/5.jpg";
import pre06 from "../assets/images/slideshow/6.jpg";
import pre07 from "../assets/images/slideshow/7.jpg";
import pre08 from "../assets/images/slideshow/8.jpg";
import pre09 from "../assets/images/slideshow/9.jpg";
import pre10 from "../assets/images/slideshow/10.jpg";
import pre11 from "../assets/images/slideshow/11.jpg";
import pre12 from "../assets/images/slideshow/12.jpg";

const photos = [
  pre01,
  pre02,
  pre03,
  pre04,
  pre05,
  pre06,
  pre07,
  pre08,
  pre09,
  pre10,
  pre11,
  pre12,
];


export default function PhotoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    pauseOnHover: true,
    fade: true,
    beforeChange: (_, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const previous = () => {
    sliderRef?.slickPrev();
  };

  const next = () => {
    sliderRef?.slickNext();
  };

  const progress = ((currentSlide + 1) / photos.length) * 100;

  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* =====================================================
          BLURRED BACKGROUND
      ====================================================== */}
      <div
        className="pointer-events-none absolute inset-0 scale-110 bg-cover bg-center opacity-20 blur-[80px] transition-all duration-1000"
        style={{
          backgroundImage: `url(${photos[currentSlide]})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0b0a08]/70" />

      {/* Ambient Gold Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/[0.025] blur-[140px]" />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-yellow-500/60" />

              <span className="text-[10px] uppercase tracking-[0.45em] text-yellow-500/70 sm:text-xs">
                Gallery
              </span>
            </div>

            <h2 className="text-4xl font-light tracking-[-0.04em] text-[#f5f1e8] sm:text-5xl md:text-6xl">
              Moments from
              <br />

              <span className="font-serif italic text-yellow-400/90">
                Our Monastery
              </span>
            </h2>
          </div>

          {/* Counter */}
          <div className="flex items-end gap-3">
            <span className="text-4xl font-light tracking-tight text-white sm:text-5xl">
              {String(currentSlide + 1).padStart(2, "0")}
            </span>

            <span className="mb-1 text-sm text-white/25">
              / {String(photos.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* =====================================================
            SLIDER
        ====================================================== */}
        <div className="relative">
          <Slider ref={setSliderRef} {...settings}>
            {photos.map((src, index) => (
              <div key={index} className="outline-none">
                <div className="relative overflow-hidden bg-black">
                  {/* Image */}
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="h-[55vh] min-h-[350px] w-full object-cover transition-transform duration-[5000ms] ease-out sm:h-[65vh] sm:min-h-[500px] lg:h-[75vh] lg:min-h-[600px]"
                  />

                  {/* Image Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

                  {/* Side Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

                  {/* Top Number */}
                  <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                      Photo {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
                    <div className="max-w-xl">
                      <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-yellow-400/70">
                        Sasana Byatti Santisukha Parahita Monastery
                      </p>

                     
                    </div>
                  </div>

                  {/* Decorative Corners */}
                  <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-white/20 sm:right-8 sm:top-8 sm:h-12 sm:w-12" />

                  <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-white/20 sm:bottom-8 sm:left-8 sm:h-12 sm:w-12" />
                </div>
              </div>
            ))}
          </Slider>

          {/* =====================================================
              ARROWS
          ====================================================== */}
          <div className="absolute bottom-6 right-6 flex gap-2 sm:bottom-8 sm:right-8">
            {/* Previous */}
            <button
              onClick={previous}
              aria-label="Previous image"
              className="group flex h-11 w-11 items-center justify-center border border-white/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/60 hover:bg-black/40 sm:h-12 sm:w-12"
            >
              <svg
                className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-yellow-400"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16 10H4M9 5L4 10L9 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next image"
              className="group flex h-11 w-11 items-center justify-center border border-white/20 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/60 hover:bg-black/40 sm:h-12 sm:w-12"
            >
              <svg
                className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-yellow-400"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10H16M11 5L16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* =====================================================
            PROGRESS
        ====================================================== */}
        <div className="mt-6 flex items-center gap-5">
          <div className="h-px flex-1 bg-white/[0.08]">
            <div
              className="h-px bg-yellow-500/70 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
            Explore
          </span>
        </div>
      </div>
    </section>
  );
}