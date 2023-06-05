/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CardSection from "./components/CardSection/CardSection";
import Footer from "./components/Footer/Footer";

import { useTheme } from "../context/ThemeProvider";

import style from "./styles/page.module.css";

export default function Home() {
  const { isMobile, isNavOpen, toggleNav, closeNav } = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  const handlePointerOver = () => {
    setIsHovered(true);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
  };

  return (
    <div className={!isHovered ? style.wrapper : style.nowrapper}>
      <Navbar
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        closeNav={closeNav}
        isMobile={isMobile}
      />
      <HeroSection isMobile={isMobile} isNavOpen={isNavOpen} />
      <CardSection
        handlePointerOver={handlePointerOver}
        handlePointerOut={handlePointerOut}
        isNavOpen={isNavOpen}
      />
      <Footer isHovered={isHovered} />
    </div>
  );
}
