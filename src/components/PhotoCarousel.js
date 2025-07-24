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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div
      className="relative max-w-[1400px] mx-auto px-6 py-16
        backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20 shadow-lg mb-12"
    >
      {/* Blurred background */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover filter blur-3xl opacity-40 transition-all duration-700 rounded-2xl"
        style={{ backgroundImage: `url(${photos[currentSlide]})` }}
      />

      {/* Carousel */}
      <Slider {...settings}>
        {photos.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-2xl shadow-xl object-cover max-h-[700px] mx-auto relative z-10"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
