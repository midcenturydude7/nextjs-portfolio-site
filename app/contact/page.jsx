"use client";
import Navbar from "../components/Navbar/Navbar";
import { useTheme } from "../../context/ThemeProvider";

import style from "../styles/page.module.scss";

const Contact = () => {
  const { isMobile, isNavOpen, toggleNav } = useTheme();

  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar isMobile={isMobile} isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <h1>Get in touch</h1>
    </div>
  );
};

export default Contact;
