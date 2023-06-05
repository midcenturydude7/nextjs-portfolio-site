"use client";
import Navbar from "../components/Navbar/Navbar";
import ContentRoute from "../components/ContentRoute/ContentRoute";
import FooterRoute from "../components/FooterRoute/FooterRoute";
import { useTheme } from "../../context/ThemeProvider";

import style from "../styles/page.module.scss";

const About = () => {
  const { isNavOpen, toggleNav, closeNav } = useTheme();

  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar isNavOpen={isNavOpen} toggleNav={toggleNav} closeNav={closeNav} />
      <ContentRoute title="What&#39;s up with Matt?" isNavOpen={isNavOpen} />
      <FooterRoute />
    </div>
  );
};

export default About;
