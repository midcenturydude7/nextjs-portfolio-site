import style from "./styles/SkillsCard.module.css";

import cards from "../../../data/cards";
const SkillsCardMap = () => {
  return (
    <div className={style["card-container"]}>
      {cards.map((card) =>
        card.cardItems.map((cardItem) => (
          <div key={cardItem.id} id={cardItem.id} className={style.card}>
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
        ))
      )}
    </div>
  );
};

export default SkillsCardMap;
