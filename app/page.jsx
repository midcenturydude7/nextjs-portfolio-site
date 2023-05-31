"use client";
import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";

import style from "./styles/page.module.css";

export default function Home() {
  // const [isHovered, setIsHovered] = React.useState(false);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log(isNavOpen);
    console.log("Button clicked!");
  };

  // const handlePointerOver = () => {
  //   setIsHovered(true);
  // };

  // const handlePointerOut = () => {
  //   setIsHovered(false);
  // };

  return (
    <div className={style.body}>
      <Wrapper isNavOpen={isNavOpen} toggleNav={toggleNav} />
    </div>
  );
}
