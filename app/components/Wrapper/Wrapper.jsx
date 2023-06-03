"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";

import style from "../../styles/page.module.css";

const Wrapper = ({ pageProps }) => {
  return (
    <div className={!isHovered ? style.wrapper : style.nowrapper}>
      <Navbar {...pageProps} />
    </div>
  );
};

export default Wrapper;
