"use client";
import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";

import style from "./styles/page.module.css";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    console.log(isMobile);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
    console.log("Button clicked!");
  };

  return (
    <div className={style.body}>
      <Wrapper isNavOpen={isNavOpen} toggleNav={toggleNav} />
    </div>
  );
}
