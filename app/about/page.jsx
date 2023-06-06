"use client";
import Navbar from "../components/Navbar/Navbar";
// import ContentRoute from "../components/ContentRoute/ContentRoute";
import ContentAbout from "../components/ContentAbout/ContentAbout";
import FooterRoute from "../components/FooterRoute/FooterRoute";
import { useTheme } from "../../context/ThemeProvider";

import style from "../styles/page.module.scss";

const About = () => {
  const { isNavOpen, toggleNav, isMobile } = useTheme();

  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} isMobile={isMobile} />
      <ContentAbout
        title="What&#39;s up with Matt?"
        isNavOpen={isNavOpen}
        isMobile={isMobile}
      />
      <FooterRoute />
    </div>
  );
};

export default About;
