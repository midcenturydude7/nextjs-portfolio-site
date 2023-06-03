/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";

import style from "./styles/page.module.css";

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1050) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    console.log(`Mobile display is: ${isMobile}`);

    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

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
    <div className={style.body}>
      <Wrapper
        isMobile={isMobile}
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        isHovered={isHovered}
        handlePointerOver={handlePointerOver}
        handlePointerOut={handlePointerOut}
      />
    </div>
  );
}
