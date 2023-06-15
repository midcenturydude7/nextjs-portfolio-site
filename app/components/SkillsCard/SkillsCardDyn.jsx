"use client";
import React from "react";

import cards from "../../../data/cards";
import style from "./styles/SkillsCard.module.css";

const SkillsCardDyn = ({ percentage, skill, stroke, number, id, onClick }) => {
  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className={style["card-container"]}>
          {card.cardItems.map((cardItem) => (
            <div
              key={cardItem.id}
              className={style.card}
              onClick={() => onClick(card.cardItems.id)}>
              <div className={style.box}>
                <div className={style.percent}>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle
                      cx="70"
                      cy="70"
                      r="70"
                      style={{
                        stroke: `var(${card.cardItems.stroke})`,
                        strokeDashoffset: `calc(440 - (440 * ${card.cardItems.number}) / 100)`,
                      }}></circle>
                  </svg>
                  <div className={style.num}>
                    <h2>
                      {card.cardItems.percentage}
                      <span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className={style.text}>{card.cardItems.skill}</h2>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default SkillsCardDyn;
