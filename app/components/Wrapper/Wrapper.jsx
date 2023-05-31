"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import CardSection from "../CardSection/CardSection";
import Footer from "../Footer/Footer";

import style from "../../styles/page.module.css";

const Wrapper = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
    console.log("Button clicked!");
  };

  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  return (
    <div className={!isHovered ? style.wrapper : style.nowrapper}>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <HeroSection isNavOpen={isNavOpen} />
      <CardSection
        handlePointerOver={handlePointerOver}
        handlePointerOut={handlePointerOut}
        isNavOpen={isNavOpen}
      />
      <Footer isHovered={isHovered} />
    </div>
  );
};

export default Wrapper;
