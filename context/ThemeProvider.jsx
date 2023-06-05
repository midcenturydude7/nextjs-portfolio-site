/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
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
    console.log(`isNavOpen: ${isNavOpen}`);
    console.log("Toggle nav btn clicked!");
  };

  const closeNav = () => {
    setIsNavOpen(false);

    console.log(`isNavOpen: ${isNavOpen}`);
    console.log("Close nav btn clicked!");
  };

  return (
    <ThemeContext.Provider
      value={{
        isMobile,
        isNavOpen,
        toggleNav,
        closeNav,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
