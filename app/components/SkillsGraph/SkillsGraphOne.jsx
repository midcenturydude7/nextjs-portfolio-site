import SkillsCard from "../SkillsCard/SkillsCard";
import SkillsHeaderOne from "../SkillsHeader/SkillsHeaderOne";
import SkillsCardHtml from "../SkillsCard/SkillsCardHtml";
import SkillsCardCss from "../SkillsCard/SkillsCardCss";
import SkillsCardJs from "../SkillsCard/SkillsCardJs";
import SkillsCardTs from "../SkillsCard/SkillsCardTs";
import { CgCloseO } from "react-icons/cg";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsGraphOne = ({
  isClicked,
  isCard1Selected,
  isCard2Selected,
  isCard3Selected,
  isCard4Selected,
  handleCard1Click,
  handleCard2Click,
  handleCard3Click,
  handleCard4Click,
  isActiveOne,
  toggleArrowOne,
  toggleCard,
  skillsContainerLeft,
  skillsContainerRight,
}) => {
  return (
    <>
      {!isClicked && (
        <div className={style["skills-graph"]}>
          <SkillsHeaderOne
            isActiveOne={isActiveOne}
            toggleArrowOne={toggleArrowOne}
          />

          {/* CODE: BOX 1 */}
          {!isActiveOne && (
            <div className={`${skillsContainerLeft}`}>
              <SkillsCard
                id={1}
                percentage={cards[0].cardItems[0].percentage}
                number={cards[0].cardItems[0].number}
                skill={cards[0].cardItems[0].skill}
                stroke={cards[0].cardItems[0].stroke}
                onClick={handleCard1Click}
              />
              <SkillsCard
                id={2}
                percentage={cards[0].cardItems[1].percentage}
                number={cards[0].cardItems[1].number}
                skill={cards[0].cardItems[1].skill}
                stroke={cards[0].cardItems[1].stroke}
                onClick={handleCard2Click}
              />
            </div>
          )}

          {/* CODE: BOX 2 */}
          {isActiveOne && (
            <div className={`${skillsContainerRight}`}>
              <SkillsCard
                id={cards[0].cardItems[2].id}
                percentage={cards[0].cardItems[2].percentage}
                number={cards[0].cardItems[2].number}
                skill={cards[0].cardItems[2].skill}
                stroke={cards[0].cardItems[2].stroke}
                onClick={handleCard3Click}
              />
              <SkillsCard
                id={cards[0].cardItems[3].id}
                percentage={cards[0].cardItems[3].percentage}
                number={cards[0].cardItems[3].number}
                skill={cards[0].cardItems[3].skill}
                stroke={cards[0].cardItems[3].stroke}
                onClick={handleCard4Click}
              />
            </div>
          )}
        </div>
      )}
      {/* CODE: HTML CONTENT */}
      {isCard1Selected && isClicked && (
        <SkillsCardHtml toggleCard={toggleCard} />
      )}
      {/* CODE: CSS CONTENT */}
      {isCard2Selected && isClicked && (
        <SkillsCardCss toggleCard={toggleCard} />
      )}
      {/* CODE: JS CONTENT */}
      {isCard3Selected && isClicked && <SkillsCardJs toggleCard={toggleCard} />}
      {/* CODE: TS CONTENT */}
      {isCard4Selected && isClicked && <SkillsCardTs toggleCard={toggleCard} />}
    </>
  );
};

export default SkillsGraphOne;
