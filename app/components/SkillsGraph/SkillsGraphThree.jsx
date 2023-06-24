import SkillsCard from "../SkillsCard/SkillsCard";
import SkillsHeaderThree from "../SkillsHeader/SkillsHeaderThree";
import SkillsCardDesign from "../SkillsCard/SkillsCardDesign";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsGraphThree = ({
  isClicked3,
  isCard9Selected,
  isCard10Selected,
  isCard11Selected,
  isCard12Selected,
  handleCard9Click,
  handleCard10Click,
  handleCard11Click,
  handleCard12Click,
  isActiveThree,
  toggleArrowThree,
  toggleCard3,
  skillsContainerLeft,
  skillsContainerRight,
}) => {
  return (
    <>
      {!isClicked3 && (
        <div className={style["skills-graph"]}>
          <SkillsHeaderThree
            isActiveThree={isActiveThree}
            toggleArrowThree={toggleArrowThree}
          />

          {/* SKILLS: BOX 1 */}
          {!isActiveThree && (
            <div className={`${skillsContainerLeft}`}>
              <SkillsCard
                id={9}
                percentage={cards[2].cardItems[0].percentage}
                number={cards[2].cardItems[0].number}
                skill={cards[2].cardItems[0].skill}
                stroke={cards[2].cardItems[0].stroke}
                onClick={handleCard9Click}
              />
              <SkillsCard
                id={10}
                percentage={cards[2].cardItems[1].percentage}
                number={cards[2].cardItems[1].number}
                skill={cards[2].cardItems[1].skill}
                stroke={cards[2].cardItems[1].stroke}
                onClick={handleCard10Click}
              />
            </div>
          )}

          {/* SKILLS: BOX 2 */}
          {isActiveThree && (
            <div className={`${skillsContainerRight}`}>
              <SkillsCard
                className={style["skill-card"]}
                percentage={cards[2].cardItems[2].percentage}
                number={cards[2].cardItems[2].number}
                skill={cards[2].cardItems[2].skill}
                stroke={cards[2].cardItems[2].stroke}
                onClick={handleCard11Click}
              />
              <SkillsCard
                className={style["skill-card"]}
                percentage={cards[2].cardItems[3].percentage}
                number={cards[2].cardItems[3].number}
                skill={cards[2].cardItems[3].skill}
                stroke={cards[2].cardItems[3].stroke}
                onClickt={handleCard12Click}
              />
            </div>
          )}
        </div>
      )}
      {/* Skills: UX/UI DESIGN CONTENT */}
      {isCard9Selected && isClicked3 && (
        <SkillsCardDesign toggleCard3={toggleCard3} />
      )}

      {/* Skills: CSS CONTENT */}
      {/* {isCard10Selected && isClicked3 && (
        <SkillsCardAnimations toggleCard3={toggleCard3} />
      )} */}

      {/* Skills: JS CONTENT */}
      {/* {isCard11Selected && isClicked3 && (
        <SkillsCardAlgorithms toggleCard3={toggleCard3} />
      )} */}

      {/* Skills: TS CONTENT */}
      {/* {isCard12Selected && isClicked3 && (
        <SkillsCardGit toggleCard3={toggleCard3} />
      )} */}
    </>
  );
};

export default SkillsGraphThree;
