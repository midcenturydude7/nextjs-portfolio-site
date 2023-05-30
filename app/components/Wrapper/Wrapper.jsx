"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import CardSection from "../CardSection/CardSection";
import Footer from "../Footer/Footer";

import style from "../../styles/page.module.css";

const Wrapper = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  return (
    <div className={!isHovered ? style.wrapper : style.nowrapper}>
      <Navbar />
      <HeroSection />
      <CardSection
        handlePointerOver={handlePointerOver}
        handlePointerOut={handlePointerOut}
      />
      <Footer isHovered={isHovered} />
    </div>
  );
};

export default Wrapper;
