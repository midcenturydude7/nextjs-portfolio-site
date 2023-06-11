import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

cards.map((card, i) => {
  if (i === 2) {
    console.log(card.cardName);
  }
});

const SkillsHeaderThree = ({ isActiveThree, toggleArrowThree }) => {
  return (
    <ul>
      {!isActiveThree && (
        <li>
          {cards.map((card, i) => {
            if (i === 2) {
              return (
                <h2 key={i} className={style[card.cardItems[0].styleTitleLeft]}>
                  {card.cardName}
                </h2>
              );
            }
          })}
        </li>
      )}
      {isActiveThree && (
        <li>
          {cards.map((card, i) => {
            if (i === 2) {
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
          {!isActiveThree && (
            <button className={style["arrow-three"]} onClick={toggleArrowThree}>
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
          )}
          {isActiveThree && (
            <button className={style["arrow-three"]} onClick={toggleArrowThree}>
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
          )}
        </li>
      </ul>
    </ul>
  );
};

export default SkillsHeaderThree;
