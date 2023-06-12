import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsHeaderTwo = ({ isActiveTwo, toggleArrowTwo }) => {
  return (
    <ul className={style["skills-list-two"]}>
      {!isActiveTwo && (
        <li>
          {cards.map((card, i) => {
            if (i === 1) {
              return (
                <h2
                  key={i}
                  className={style[card.cardItems[0].styleTitleRight]}>
                  {card.cardName}
                </h2>
              );
            }
          })}
        </li>
      )}
      {isActiveTwo && (
        <li>
          {cards.map((card, i) => {
            if (i === 1) {
              return (
                <h2
                  key={i}
                  className={style[card.cardItems[0].styleTitleRight]}>
                  {card.cardName}
                </h2>
              );
            }
          })}
        </li>
      )}
      <ul>
        <li>
          {!isActiveTwo && (
            <button className={style["arrow-two"]} onClick={toggleArrowTwo}>
              {!isActiveTwo ? (
                <IoMdArrowDropleftCircle className={style["arrow-icon-two"]} />
              ) : (
                <IoMdArrowDroprightCircle className={style["arrow-icon-two"]} />
              )}
            </button>
          )}
          {isActiveTwo && (
            <button className={style["arrow-two"]} onClick={toggleArrowTwo}>
              {!isActiveTwo ? (
                <IoMdArrowDropleftCircle className={style["arrow-icon-two"]} />
              ) : (
                <IoMdArrowDroprightCircle className={style["arrow-icon-two"]} />
              )}
            </button>
          )}
        </li>
      </ul>
    </ul>
  );
};

export default SkillsHeaderTwo;
