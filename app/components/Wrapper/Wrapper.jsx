"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import CardSection from "../CardSection/CardSection";
import Footer from "../Footer/Footer";

import style from "../../styles/page.module.css";

function Wrapper() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handlePointerOver = () => {
    setIsHovered(true);
    console.log("Hovered!");
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    console.log("You're not hovering on the box section!");
  };

  return (
    <div className={!isHovered ? style.wrapper : style.nowrapper}>
      <Navbar />
      <HeroSection />
      <CardSection
        handlePointerOver={handlePointerOver}
        handlePointerOut={handlePointerOut}
      />
      <Footer />
    </div>
  );
}

export default Wrapper;
