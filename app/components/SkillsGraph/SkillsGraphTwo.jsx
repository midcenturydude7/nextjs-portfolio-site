import SkillsCard from "../SkillsCard/SkillsCard";
import SkillsHeaderTwo from "../SkillsHeader/SkillsHeaderTwo";
import SkillsCardReact from "../SkillsCard/SkillsCardReact";
import SkillsCardNextjs from "../SkillsCard/SkillsCardNextjs";
import SkillsCardNodejs from "../SkillsCard/SkillsCardNodejs";
import SkillsCardScss from "../SkillsCard/SkillsCardScss";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsGraphTwo = ({
  isClicked,
  isClicked2,
  isCard5Selected,
  isCard6Selected,
  isCard7Selected,
  isCard8Selected,
  handleCard5Click,
  handleCard6Click,
  handleCard7Click,
  handleCard8Click,
  isActiveTwo,
  toggleArrowTwo,
  toggleCard2,
  skillsContainerLeft,
  skillsContainerRight,
}) => {
  return (
    <>
      {!isClicked2 && (
        <div className={style["skills-graph"]}>
          <SkillsHeaderTwo
            isActiveTwo={isActiveTwo}
            toggleArrowTwo={toggleArrowTwo}
          />

          {/* TOOLS: BOX 1 */}
          {!isActiveTwo && (
            <div className={`${skillsContainerRight}`}>
              <SkillsCard
                id={5}
                percentage={cards[1].cardItems[0].percentage}
                number={cards[1].cardItems[0].number}
                skill={cards[1].cardItems[0].skill}
                stroke={cards[1].cardItems[0].stroke}
                onClick={handleCard5Click}
              />
              <SkillsCard
                id={6}
                percentage={cards[1].cardItems[1].percentage}
                number={cards[1].cardItems[1].number}
                skill={cards[1].cardItems[1].skill}
                stroke={cards[1].cardItems[1].stroke}
                onClick={handleCard6Click}
              />
            </div>
          )}

          {/* TOOLS: BOX 2 */}
          {isActiveTwo && (
            <div className={`${skillsContainerLeft}`}>
              <SkillsCard
                id={7}
                percentage={cards[1].cardItems[2].percentage}
                number={cards[1].cardItems[2].number}
                skill={cards[1].cardItems[2].skill}
                stroke={cards[1].cardItems[2].stroke}
                onClick={handleCard7Click}
              />
              <SkillsCard
                id={8}
                percentage={cards[1].cardItems[3].percentage}
                number={cards[1].cardItems[3].number}
                skill={cards[1].cardItems[3].skill}
                stroke={cards[1].cardItems[3].stroke}
                onClick={handleCard8Click}
              />
            </div>
          )}
        </div>
      )}
      {/* TOOLS: REACT CONTENT */}
      {isCard5Selected && isClicked2 && (
        <SkillsCardReact toggleCard2={toggleCard2} />
      )}

      {/* TOOLS: NEXTJS CONTENT */}
      {isCard6Selected && isClicked2 && (
        <SkillsCardNextjs toggleCard2={toggleCard2} />
      )}

      {/* TOOLS: NODEJS CONTENT */}
      {isCard7Selected && isClicked2 && (
        <SkillsCardNodejs toggleCard2={toggleCard2} />
      )}

      {/* TOOLS: SASS/SCSS CONTENT */}
      {isCard8Selected && isClicked2 && (
        <SkillsCardScss toggleCard2={toggleCard2} />
      )}
    </>
  );
};

export default SkillsGraphTwo;
