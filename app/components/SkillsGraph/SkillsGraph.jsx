"use client";
import React from "react";
import SkillsCard from "../SkillsCard/SkillsCard";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

cards.map((card, i) => {
  if (i === 0) {
    console.log(card.cardName);
  }
});

const SkillsGraph = ({
  handleClickingEvent,
  isActiveOne,
  isActiveTwo,
  isActiveThree,
  toggleArrowOne,
  skillsGraphLeft,
  skillsGraphRight,
  skillsContainerLeft,
  skillsContainerRight,
}) => {
  return (
    <div className={style["skills-graph"]}>
      <ul>
        {!isActiveOne && (
          <li>
            {cards.map((card, i) => {
              if (i === 0) {
                return (
                  <h2 key={i} className={`${skillsGraphLeft}`}>
                    {card.cardName}
                  </h2>
                );
              }
            })}
          </li>
        )}
        {isActiveOne && (
          <li>
            {cards.map((card, i) => {
              if (i === 0) {
                return (
                  <h2 key={i} className={`${skillsGraphLeft}`}>
                    {card.cardName}
                  </h2>
                );
              }
            })}
          </li>
        )}
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

      {/* CODE: BOX 1 */}
      {!isActiveOne && (
        <div
          className={`${
            !isActiveOne || !isActiveThree
          } ? ${skillsContainerLeft} : ${!isActiveTwo} ? ${skillsContainerRight}`}>
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[0].cardItems[0].percentage}
            number={cards[0].cardItems[0].number}
            skill={cards[0].cardItems[0].skill}
            stroke={cards[0].cardItems[0].stroke}
            handleClickingEvent={handleClickingEvent}
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[0].cardItems[1].percentage}
            number={cards[0].cardItems[1].number}
            skill={cards[0].cardItems[1].skill}
            stroke={cards[0].cardItems[1].stroke}
            handleClickingEvent={handleClickingEvent}
          />
        </div>
      )}

      {/* CODE: BOX 2 */}
      {isActiveOne && (
        <div
          className={`${isActiveOne} || ${isActiveThree} ? ${skillsContainerRight} : ${isActiveTwo} ? ${skillsContainerLeft}`}>
          <SkillsCard
            className={style["skill-card"]}
            percentage="55"
            number="55"
            skill="JavaScript"
            stroke={"--stroke-color-violet"}
            handleClickingEvent={handleClickingEvent}
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage="20"
            number="20"
            skill="TypeScript"
            stroke={"--stroke-color-violet"}
            handleClickingEvent={handleClickingEvent}
          />
        </div>
      )}
    </div>
  );
};

export default SkillsGraph;
