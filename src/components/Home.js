import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Experience from "./Experience";
import Footer from "./Footer";
import Offer from "./Offer";
import bg_img from "../assets/images/welcome_bg1.jpg";
import AboutUs from "./AboutUs";
import PhotoCarousel from "./PhotoCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OfferMore from "./OfferMore";
import AyeNyingCe from "./AyeNyingCe";

export default function Home() {
  return (
    <div
      style={{
        background: `url(${bg_img}) no-repeat center center fixed`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Welcome />
      <AyeNyingCe />
      <OfferMore />
      <AboutUs />
      <PhotoCarousel />
      <Offer />
      {/* <Experience /> */}
      <Footer />
    </div>
  );
}
