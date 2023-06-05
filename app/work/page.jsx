"use client";
import Navbar from "../components/Navbar/Navbar";
import ContentRoute from "../components/ContentRoute/ContentRoute";
import FooterRoute from "../components/FooterRoute/FooterRoute";
import { useTheme } from "../../context/ThemeProvider";

import style from "../styles/page.module.scss";

const Work = () => {
  const { isMobile, isNavOpen, toggleNav } = useTheme();

  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} isMobile={isMobile} />
      <ContentRoute
        title="Sharing is Caring"
        isNavOpen={isNavOpen}
        isMobile={isMobile}
      />
      <FooterRoute />
    </div>
  );
};

export default Work;
