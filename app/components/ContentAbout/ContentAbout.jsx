"use client";
import SkillsCard from "../SkillsCard/SkillsCard";

import style from "./styles/ContentAbout.module.css";

const ContentAbout = ({ title, isNavOpen, isMobile }) => {
  return (
    <div
      className={
        isNavOpen && isMobile
          ? style["content-container-mobile"]
          : style["content-container"]
      }>
      <h1>{title}</h1>
      <div className={style["graph-container"]}>
        <p>
          Welcome to my portfolio site! I&#39;m a self-taught frontend developer
          with a passion for delivering useful and stunning web projects.
          Specializing in building web applications and websites using React and
          Next.js, I strive to bring creativity and functionality together to
          deliver exceptional user experiences.
        </p>
        <p>
          My journey in web development began with a desire to learn. Through
          grit, determination, and countless hours of self-study and hands-on
          projects, I have honed my skills to become proficient in the latest
          frontend technologies. React has become my go-to frontend library for
          its flexibility, component-based architecture, and vast ecosystem.
          Next.js, with its seamless server-side rendering capabilities and
          optimized performance relative to routing and fetching APIs, has
          proven to be an invaluable tool in my development arsenal.
        </p>
        <p>
          With every project, my goal is to transform ideas into visually
          appealing and intuitive interfaces. I have a keen eye for design and a
          growing understanding of user experience principles, allowing me to
          create websites that not only look great but also provide seamless
          navigation and functional interaction.
        </p>
      </div>

      <div>
        <SkillsCard percentage="80" skill="HTML" />
      </div>
    </div>
  );
};

export default ContentAbout;
