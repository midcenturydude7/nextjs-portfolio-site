import SkillsCard from "../SkillsCard/SkillsCard";
import SkillsHeaderOne from "../SkillsHeader/SkillsHeaderOne";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsGraphOne = ({
  isClicked,
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
                percentage={cards[0].cardItems[0].percentage}
                number={cards[0].cardItems[0].number}
                skill={cards[0].cardItems[0].skill}
                stroke={cards[0].cardItems[0].stroke}
                isClicked={isClicked}
              />
              <SkillsCard
                percentage={cards[0].cardItems[1].percentage}
                number={cards[0].cardItems[1].number}
                skill={cards[0].cardItems[1].skill}
                stroke={cards[0].cardItems[1].stroke}
                isClicked={isClicked}
              />
            </div>
          )}

          {/* CODE: BOX 2 */}
          {isActiveOne && (
            <div className={`${skillsContainerRight}`}>
              <SkillsCard
                percentage={cards[0].cardItems[2].percentage}
                number={cards[0].cardItems[2].number}
                skill={cards[0].cardItems[2].skill}
                stroke={cards[0].cardItems[2].stroke}
              />
              <SkillsCard
                className={style["skill-card"]}
                percentage={cards[0].cardItems[3].percentage}
                number={cards[0].cardItems[3].number}
                skill={cards[0].cardItems[3].skill}
                stroke={cards[0].cardItems[3].stroke}
              />
            </div>
          )}
        </div>
      )}
      {isClicked && (
        <div className={style["skills-graph"]}>Stuff goes here</div>
      )}
    </>
  );
};

export default SkillsGraphOne;
