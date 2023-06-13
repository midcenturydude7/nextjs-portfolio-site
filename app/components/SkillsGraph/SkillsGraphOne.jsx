import SkillsCard from "../SkillsCard/SkillsCard";
import SkillsHeaderOne from "../SkillsHeader/SkillsHeaderOne";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsGraphOne = ({
  isClicked,
  isSelected,
  isSelectedOne,
  isSelectedTwo,
  handleCardClick,
  isActiveOne,
  toggleArrowOne,
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
                id={cards[0].cardItems[0].id}
                percentage={cards[0].cardItems[0].percentage}
                number={cards[0].cardItems[0].number}
                skill={cards[0].cardItems[0].skill}
                stroke={cards[0].cardItems[0].stroke}
                onClick={handleCardClick}
              />
              <SkillsCard
                id={cards[0].cardItems[1].id}
                percentage={cards[0].cardItems[1].percentage}
                number={cards[0].cardItems[1].number}
                skill={cards[0].cardItems[1].skill}
                stroke={cards[0].cardItems[1].stroke}
                onClick={handleCardClick}
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
              />
              <SkillsCard
                id={cards[0].cardItems[3].id}
                percentage={cards[0].cardItems[3].percentage}
                number={cards[0].cardItems[3].number}
                skill={cards[0].cardItems[3].skill}
                stroke={cards[0].cardItems[3].stroke}
              />
            </div>
          )}
        </div>
      )}
      {isClicked && isSelected && isSelectedOne && (
        <div className={style["skills-graph"]}>HTML stuff goes here</div>
      )}
      {isClicked && isSelected && isSelectedTwo && (
        <div className={style["skills-graph"]}>CSS stuff goes here</div>
      )}
    </>
  );
};

export default SkillsGraphOne;
