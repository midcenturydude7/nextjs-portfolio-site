"use client";
import Navbar from "../../components/Navbar/Navbar";
import { useTheme } from "../../../context/ThemeProvider";

import style from "../../styles/page.module.scss";

const EcommercePage = () => {
  const { isMobile, isNavOpen, toggleNav } = useTheme();

  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar isMobile={isMobile} isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <h1>Matt&#39;s Ecommerce Page</h1>
    </div>
  );
};

export default EcommercePage;
