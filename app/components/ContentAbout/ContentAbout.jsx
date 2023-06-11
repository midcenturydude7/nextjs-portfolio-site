"use client";
import React from "react";
import SkillsGraph from "../SkillsGraph/SkillsGraph";
import SkillsCard from "../SkillsCard/SkillsCard";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import cards from "../../../data/cards";
import style from "./styles/ContentAbout.module.css";

const ContentAbout = ({ title, isNavOpen, isMobile }) => {
  const [isConcise, setIsConcise] = React.useState(false);
  const [isActiveOne, setIsActiveOne] = React.useState(false);
  const [isActiveTwo, setIsActiveTwo] = React.useState(false);
  const [isActiveThree, setIsActiveThree] = React.useState(false);
  const [isClicking, setisClicking] = React.useState(true);

  const handleClickingEvent = () => {
    setisClicking(true);
    console.log("Clicked on card!");
    console.log(`isClicking: ${isClicking}`);
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

  console.log(cards);

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
          <SkillsGraph
            isActiveOne={isActiveOne}
            toggleArrowOne={toggleArrowOne}
            handleClickingEvent={handleClickingEvent}
            skillsGraphLeft={style["skills-graph-title-left"]}
            skillsGraphRight={style["skills-graph-title-right"]}
            skillsContainerLeft={style["skills-graph-container-left"]}
            skillsContainerRight={style["skills-graph-container-right"]}
          />
          {/* <div className={style["skills-graph"]}>
            <ul>
              <li>
                <h2 className={style["skills-graph-title-left"]}>Code</h2>
              </li>
              <ul>
                <li>
                  <button
                    className={style["arrow-one"]}
                    onClick={toggleArrowOne}>
                    {!isActiveOne ? (
                      <IoMdArrowDroprightCircle
                        className={style["arrow-icon-one"]}
                      />
                    ) : (
                      <IoMdArrowDropleftCircle
                        className={style["arrow-icon-one"]}
                      />
                    )}
                  </button>
                </li>
              </ul>
            </ul>

            {!isActiveOne && (
              <div className={style["skills-graph-container-left"]}>
                <SkillsCard
                  className={style["skill-card"]}
                  percentage="80"
                  number="80"
                  skill="HTML"
                  stroke={"--stroke-color-violet"}
                  handleClickingEvent={handleClickingEvent}
                />
                <SkillsCard
                  className={style["skill-card"]}
                  percentage="75"
                  number="75"
                  skill="CSS"
                  stroke={"--stroke-color-violet"}
                  handleClickingEvent={handleClickingEvent}
                />
              </div>
            )}

            {isActiveOne && (
              <div className={style["skills-graph-container-right"]}>
                <SkillsCard
                  className={style["skill-card"]}
                  percentage="55"
                  number="55"
                  skill="JavaScript"
                  stroke={"--stroke-color-violet"}
                />
                <SkillsCard
                  className={style["skill-card"]}
                  percentage="20"
                  number="20"
                  skill="TypeScript"
                  stroke={"--stroke-color-violet"}
                />
              </div>
            )}
          </div> */}
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
          <div className={style["skills-graph"]}>
            <ul className={style["skills-list-two"]}>
              <li>
                <h2 className={style["skills-graph-title-right"]}>Tools</h2>
              </li>
              <ul>
                <li>
                  <button
                    className={style["arrow-two"]}
                    onClick={toggleArrowTwo}>
                    {!isActiveTwo ? (
                      <IoMdArrowDropleftCircle
                        className={style["arrow-icon-two"]}
                      />
                    ) : (
                      <IoMdArrowDroprightCircle
                        className={style["arrow-icon-two"]}
                      />
                    )}
                  </button>
                </li>
              </ul>
            </ul>
            {!isActiveTwo && (
              <div className={style["skills-graph-container-right"]}>
                <SkillsCard
                  percentage="55"
                  number="55"
                  skill="React"
                  stroke={"--stroke-color-blue"}
                />
                <SkillsCard
                  percentage="35"
                  number="35"
                  skill="Nextjs"
                  stroke={"--stroke-color-blue"}
                />
              </div>
            )}
            {isActiveTwo && (
              <div className={style["skills-graph-container-left"]}>
                <SkillsCard
                  percentage="35"
                  number="35"
                  skill="Nodejs"
                  stroke={"--stroke-color-blue"}
                />
                <SkillsCard
                  percentage="60"
                  number="60"
                  skill="Scss"
                  stroke={"--stroke-color-blue"}
                />
              </div>
            )}
          </div>
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
          <div className={style["skills-graph"]}>
            <ul>
              <li>
                <h2 className={style["skills-graph-title-left"]}>Skills</h2>
              </li>
              <ul>
                <li>
                  <button
                    className={style["arrow-three"]}
                    onClick={toggleArrowThree}>
                    {!isActiveThree ? (
                      <IoMdArrowDroprightCircle
                        className={style["arrow-icon-three"]}
                      />
                    ) : (
                      <IoMdArrowDropleftCircle
                        className={style["arrow-icon-three"]}
                      />
                    )}
                  </button>
                </li>
              </ul>
            </ul>
            {!isActiveThree && (
              <div className={style["skills-graph-container-left"]}>
                <SkillsCard
                  percentage="40"
                  number="40"
                  skill="Design"
                  stroke={"--stroke-color-pink"}
                />
                <SkillsCard
                  percentage="55"
                  number="55"
                  skill="Animation"
                  stroke={"--stroke-color-pink"}
                />
              </div>
            )}
            {isActiveThree && (
              <div className={style["skills-graph-container-right"]}>
                <SkillsCard
                  percentage="30"
                  number="30"
                  skill="Algo & Data"
                  stroke={"--stroke-color-pink"}
                />
                <SkillsCard
                  percentage="70"
                  number="70"
                  skill="Git"
                  stroke={"--stroke-color-pink"}
                />
              </div>
            )}
          </div>
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
