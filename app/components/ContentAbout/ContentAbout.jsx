"use client";
import React from "react";
import SkillsGraphOne from "../SkillsGraph/SkillsGraphOne";
import SkillsGraphTwo from "../SkillsGraph/SkillsGraphTwo";
import SkillsGraphThree from "../SkillsGraph/SkillsGraphThree";

import style from "./styles/ContentAbout.module.css";

const ContentAbout = ({ title, isNavOpen, isMobile, id }) => {
  const [isConcise, setIsConcise] = React.useState(false);
  const [isActiveOne, setIsActiveOne] = React.useState(false);
  const [isActiveTwo, setIsActiveTwo] = React.useState(false);
  const [isActiveThree, setIsActiveThree] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [isCard1Selected, setIsCard1Selected] = React.useState(false);
  const [isCard2Selected, setIsCard2Selected] = React.useState(false);

  const handleCard1Click = () => {
    setIsCard1Selected(true);
    setIsClicked(true);
    console.log(`HTML card clicked! isCard1Selected: ${!isCard1Selected}`);
  };

  const handleCard2Click = () => {
    setIsCard2Selected(true);
    setIsClicked(true);
    console.log(`CSS card clicked! isCard2Selected: ${!isCard2Selected}`);
  };

  const toggleCard = () => {
    setIsClicked(!isClicked);
    console.log(`Button clicked! isClicked: ${isClicked}`);
  };

  const toggleConcise = () => {
    setIsConcise(!isConcise);
    console.log(`Button clicked! isConcise: ${isConcise}`);
  };

  const toggleArrowOne = () => {
    setIsActiveOne(!isActiveOne);
    console.log(`Button clicked! isActive: ${isActiveOne}`);
  };

  const toggleArrowTwo = () => {
    setIsActiveTwo(!isActiveTwo);
    console.log(`Button clicked! isActive: ${isActiveTwo}`);
  };

  const toggleArrowThree = () => {
    setIsActiveThree(!isActiveThree);
    console.log(`Button clicked! isActive: ${isActiveThree}`);
  };

  return (
    <main
      className={
        isNavOpen && isMobile
          ? style["content-container-mobile"]
          : style["content-container"]
      }>
      <ul>
        <li>
          <h1>{title}</h1>
        </li>
        <li>
          <button className={style.switch} onClick={toggleConcise}>
            <input type="checkbox" name="toggle" />
            <label htmlFor="toggle">
              <i></i>
            </label>
            <span></span>
            {!isConcise ? (
              <span className={style["toggle-text-opaque"]}>verbose</span>
            ) : (
              <span className={style["toggle-text"]}>verbose</span>
            )}
          </button>
        </li>
      </ul>

      {!isConcise && (
        <section className={style["graph-container"]}>
          <div>
            <p>
              I&#39;m a self-taught frontend developer specializing in building
              web applications and websites using React and Next.js.
            </p>
          </div>
        </section>
      )}

      {isConcise && (
        <section className={style["graph-container"]}>
          <div>
            <p>
              Welcome to my portfolio site! I&#39;m a self-taught frontend
              developer with a passion for delivering useful and stunning web
              projects. Specializing in building web applications and websites
              using React and Next.js, I strive to bring creativity and
              functionality together to deliver exceptional user experiences.
            </p>
          </div>

          {/* CODE BOX */}
          <SkillsGraphOne
            isActiveOne={isActiveOne}
            toggleArrowOne={toggleArrowOne}
            isClicked={isClicked}
            handleCard1Click={handleCard1Click}
            handleCard2Click={handleCard2Click}
            isCard1Selected={isCard1Selected}
            isCard2Selected={isCard2Selected}
            toggleCard={toggleCard}
            skillsContainerLeft={style["skills-graph-container-left"]}
            skillsContainerRight={style["skills-graph-container-right"]}
          />
          <div>
            <p>
              My journey in web development began with a desire to learn.
              Through grit, determination, and countless hours of self-study and
              hands-on projects, I have honed my skills to become proficient in
              the latest frontend technologies. React has become my go-to
              frontend library for its flexibility, component-based
              architecture, and vast ecosystem. Next.js, with its seamless
              server-side rendering capabilities and optimized performance
              relative to routing and fetching APIs, has proven to be an
              invaluable tool in my development arsenal.
            </p>
            <p>
              With every project, my goal is to transform ideas into visually
              appealing and intuitive interfaces. I have a keen eye for design
              and a growing understanding of user experience principles,
              allowing me to create websites that not only look great but also
              provide seamless navigation and functional interaction.
            </p>
          </div>

          {/* TOOLS BOX */}
          <SkillsGraphTwo
            isActiveTwo={isActiveTwo}
            toggleArrowTwo={toggleArrowTwo}
            skillsContainerLeft={style["skills-graph-container-left"]}
            skillsContainerRight={style["skills-graph-container-right"]}
          />
          <div>
            <p>
              Collaboration is a vital aspect of my work ethic. I love working
              closely with clients and stakeholders, understanding their goals
              and translating them into tangible results. I believe in the power
              of effective communication and maintaining a transparent and
              iterative approach throughout the development process.
            </p>
            <p>
              In addition to my technical expertise, I value continuous learning
              and keeping up with industry trends. I am always eager to expand
              my skill set and explore new tools and frameworks that enhance my
              ability to create exceptional web experiences.
            </p>
            <p>
              Feel free to explore my portfolio and browse through my projects
              to get a sense of my work. If you have a project in mind or would
              like to discuss a collaboration opportunity, I would be thrilled
              to hear from you. Let&#39;s bring your ideas to life and create
              something amazing together!
            </p>
          </div>
          <SkillsGraphThree
            isActiveThree={isActiveThree}
            toggleArrowThree={toggleArrowThree}
            skillsContainerLeft={style["skills-graph-container-left"]}
            skillsContainerRight={style["skills-graph-container-right"]}
          />
          <div>
            <p>
              Collaboration is a vital aspect of my work ethic. I love working
              closely with clients and stakeholders, understanding their goals
              and translating them into tangible results. I believe in the power
              of effective communication and maintaining a transparent and
              iterative approach throughout the development process.
            </p>
            <p>
              In addition to my technical expertise, I value continuous learning
              and keeping up with industry trends. I am always eager to expand
              my skill set and explore new tools and frameworks that enhance my
              ability to create exceptional web experiences.
            </p>
            <p>
              Feel free to explore my portfolio and browse through my projects
              to get a sense of my work. If you have a project in mind or would
              like to discuss a collaboration opportunity, I would be thrilled
              to hear from you. Let&#39;s bring your ideas to life and create
              something amazing together!
            </p>
          </div>
        </section>
      )}
    </main>
  );
};

export default ContentAbout;
