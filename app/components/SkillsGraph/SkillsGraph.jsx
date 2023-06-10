"use client";
import React from "react";
import SkillsCard from "../SkillsCard/SkillsCard";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsGraph = ({
  handleClickingEvent,
  isActiveOne,
  toggleArrowOne,
  cardName,
  skillsGraphLeft,
  skillsContainerLeft,
  skillsContainerRight,
}) => {
  return (
    <div className={style["skills-graph"]}>
      <ul>
        <li>
          <h2 className={`${skillsGraphLeft}`}>{cardName}</h2>
        </li>
        <ul>
          <li>
            <button className={style["arrow-one"]} onClick={toggleArrowOne}>
              {!isActiveOne ? (
                <IoMdArrowDroprightCircle className={style["arrow-icon-one"]} />
              ) : (
                <IoMdArrowDropleftCircle className={style["arrow-icon-one"]} />
              )}
            </button>
          </li>
        </ul>
      </ul>

      {!isActiveOne && (
        <div
          className={`!isActiveOne && isActiveThree ? ${skillsContainerLeft} : !isActiveTwo ? ${skillsContainerRight}`}>
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
        <div
          className={`isActiveOne && isActiveThree ? ${skillsContainerRight} : isActiveTwo ? ${skillsContainerLeft}`}>
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
    </div>
  );
};

export default SkillsGraph;
