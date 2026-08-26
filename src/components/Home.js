import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Footer from "./Footer";
import Offer from "./Offer";
import bg_img from "../assets/images/welcome_bg1.jpg";
// import AboutUs from "./AboutUs";
import PhotoCarousel from "./PhotoCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferMore from "./OfferMore";
import AyeNyingCe from "./AyeNyingCe";

export default function Home() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#120d09]/80 via-[#120d09]/55 to-[#1c140d]/90" />

        <div className="relative z-10">
          <Header />
          <Welcome />
          <OfferMore />
          <AyeNyingCe />
          {/* <AboutUs /> */}

          <div
            id="about"
            className="max-w-[95%] lg:max-w-[1080px] mx-auto px-4 pb-20"
          >
            <div className="rounded-[32px] border border-yellow-200/30 bg-[#f8f2e7]/95 text-[#2a1d13] p-8 md:p-10 shadow-2xl shadow-black/10">
              <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-700">
                    Empowering Students Through{" "}
                  </p>
                  <span className="font-semibold text-yellow-400">
                    Education
                  </span>{" "}
                  Since 2005
                  <h3 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
                    Sasana Byatti Santisukha Parahita Monastery
                  </h3>
                  <span className="text-sm md:text-base text-[#4f3d31] leading-relaxed">
                    has proudly been providing free education to students who
                    successfully pass our entrance examination. Our mission is
                    to nurture young minds and create brighter futures for the
                    community in{" "}
                    <span className="italic">Pakokku, Myanmar</span>.
                  </span>
                </div>

                <div className="text-left md:text-right">
                  <p className="text-base leading-relaxed text-[#4f3d31]">
                    Since our founding, we have supported hundreds of students,
                    guided by compassionate volunteer teachers and a strong
                    commitment to community upliftment. We believe that
                    education is the key to unlocking a better tomorrow for
                    everyone.
                  </p>
                  <br className="block my-3" />
                  <p className="text-base leading-relaxed text-[#4f3d31]">
                    Our doors remain open to passionate students, and we
                    continue to expand our efforts with the support of generous
                    donors and volunteers who share our vision.
                  </p>

                  <button
                    onClick={() => {
                      window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth",
                      });
                    }}
                    className="mt-5 inline-block py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-white font-medium rounded-full shadow-lg shadow-yellow-700/20 transition"
                  >
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>
          </div>

          <PhotoCarousel />
          <Offer />
          <Footer />
        </div>
      </div>
    </div>
  );
}
