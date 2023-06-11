import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsHeaderOne = ({ isActiveOne, toggleArrowOne }) => {
  return (
    <ul>
      {!isActiveOne && (
        <li>
          {cards.map((card, i) => {
            if (i === 0) {
              return (
                <h2 key={i} className={style[card.cardItems[0].styleTitleLeft]}>
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
                <h2 key={i} className={style[card.cardItems[0].styleTitleLeft]}>
                  {card.cardName}
                </h2>
              );
            }
          })}
        </li>
      )}
      <ul>
        <li>
          {!isActiveOne && (
            <button className={style["arrow-one"]} onClick={toggleArrowOne}>
              {!isActiveOne ? (
                <IoMdArrowDroprightCircle className={style["arrow-icon-one"]} />
              ) : (
                <IoMdArrowDropleftCircle className={style["arrow-icon-one"]} />
              )}
            </button>
          )}
          {isActiveOne && (
            <button className={style["arrow-one"]} onClick={toggleArrowOne}>
              {!isActiveOne ? (
                <IoMdArrowDroprightCircle className={style["arrow-icon-one"]} />
              ) : (
                <IoMdArrowDropleftCircle className={style["arrow-icon-one"]} />
              )}
            </button>
          )}
        </li>
      </ul>
    </ul>
  );
};

export default SkillsHeaderOne;
