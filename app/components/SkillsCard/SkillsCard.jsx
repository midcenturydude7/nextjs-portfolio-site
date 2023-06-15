"use client";
import React from "react";

import cards from "../../../data/cards";
import style from "./styles/SkillsCard.module.css";

const SkillsCard = ({ percentage, skill, stroke, number, id, onClick }) => {
  cards.map((card) => {
    if (id === card.id) {
      return (
        <div key={card.id} className={style["card-container"]}>
          {card.cardItems.map((cardItem) => (
            <div
              key={cardItem.id}
              className={style.card}
              onClick={() => onClick(cardItem.id)}>
              <div className={style.box}>
                <div className={style.percent}>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle
                      cx="70"
                      cy="70"
                      r="70"
                      style={{
                        stroke: `var(${cardItem.stroke})`,
                        strokeDashoffset: `calc(440 - (440 * ${cardItem.number}) / 100)`,
                      }}></circle>
                  </svg>
                  <div className={style.num}>
                    <h2>
                      {cardItem.percentage}
                      <span>%</span>
                    </h2>
                  </div>
                </div>
                <h2 className={style.text}>{cardItem.skill}</h2>
              </div>
            </div>
          ))}
        </div>
      );
    }
  });

  return (
    <div className={style["card-container"]}>
    {cards.map((card) => (
    (id === card.id) && (
      {card.cardItems.map((cardItem) => (
        <div
          key={cardItem.id}
          className={style.card}
          onClick={() => onClick(cardItem.id)}>
          <div className={style.box}>
            <div className={style.percent}>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle
                  cx="70"
                  cy="70"
                  r="70"
                  style={{
                    stroke: `var(${cardItem.stroke})`,
                    strokeDashoffset: `calc(440 - (440 * ${cardItem.number}) / 100)`,
                  }}></circle>
              </svg>
              <div className={style.num}>
                <h2>
                  {card.cardItems.percentage}
                  <span>%</span>
                </h2>
              </div>
            </div>
            <h2 className={style.text}>{cardItem.skill}</h2>
          </div>
        </div>
      ))}
    )))}
    </div>
  );
};

export default SkillsCard;
