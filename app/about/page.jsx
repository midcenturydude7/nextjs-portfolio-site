"use client";

import Navbar from "../components/Navbar/Navbar";
import { useLayoutContext } from "../components/LayoutProvider/LayoutProvider";

import style from "../styles/page.module.scss";

const About = () => {
  const theme = useLayoutContext();

  return (
    <div className={style["wrapper-truncated"]} value={theme}>
      <Navbar />
      <h1>What&#39;s up with Matt</h1>
    </div>
  );
};

export default About;
