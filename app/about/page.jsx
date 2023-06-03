"use client";
import Navbar from "../components/Navbar/Navbar";
import { useTheme } from "../../context/ThemeProvider";

import style from "../styles/page.module.scss";

const About = () => {
  const { isMobile, isNavOpen, toggleNav } = useTheme();

  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar isMobile={isMobile} isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <h1>What&#39;s up with Matt</h1>
    </div>
  );
};

export default About;
