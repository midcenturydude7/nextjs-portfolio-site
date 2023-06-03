"use client";
import Navbar from "../components/Navbar/Navbar";
import { useTheme } from "../../context/ThemeProvider";

import style from "../styles/page.module.scss";

const Work = () => {
  const { isMobile, isNavOpen, toggleNav } = useTheme();

  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar isMobile={isMobile} isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <h1>Sharing is Caring</h1>
    </div>
  );
};

export default Work;
