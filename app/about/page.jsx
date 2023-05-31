"use client";
import React from "react";
import Navbar from "../components/Navbar/Navbar";

import style from "../styles/page.module.scss";

const About = ({ isNavOpen, toggleNav }) => {
  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <h1>What&#39;s up with Matt</h1>
    </div>
  );
};

export default About;
