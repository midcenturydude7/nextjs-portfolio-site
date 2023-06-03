"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import CardSection from "../CardSection/CardSection";
import Footer from "../Footer/Footer";

import style from "../../styles/page.module.css";

const Wrapper = ({
  isMobile,
  isNavOpen,
  toggleNav,
  isHovered,
  handlePointerOut,
  handlePointerOver,
}) => {
  return (
    <div className={!isHovered ? style.wrapper : style.nowrapper}>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <HeroSection isMobile={isMobile} isNavOpen={isNavOpen} />
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
