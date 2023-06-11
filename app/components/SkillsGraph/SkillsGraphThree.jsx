import SkillsCard from "../SkillsCard/SkillsCard";
import SkillsHeaderThree from "../SkillsHeader/SkillsHeaderThree";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsGraphThree = ({
  handleClickingEvent,
  isActiveThree,
  toggleArrowThree,
  skillsContainerLeft,
  skillsContainerRight,
}) => {
  return (
    <div className={style["skills-graph"]}>
      <SkillsHeaderThree
        isActiveThree={isActiveThree}
        toggleArrowThree={toggleArrowThree}
      />

      {/* SKILLS: BOX 1 */}
      {!isActiveThree && (
        <div className={`${skillsContainerLeft}`}>
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[2].cardItems[0].percentage}
            number={cards[2].cardItems[0].number}
            skill={cards[2].cardItems[0].skill}
            stroke={cards[2].cardItems[0].stroke}
            handleClickingEvent={handleClickingEvent}
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[2].cardItems[1].percentage}
            number={cards[2].cardItems[1].number}
            skill={cards[2].cardItems[1].skill}
            stroke={cards[2].cardItems[1].stroke}
            handleClickingEvent={handleClickingEvent}
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
            handleClickingEvent={handleClickingEvent}
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[2].cardItems[3].percentage}
            number={cards[2].cardItems[3].number}
            skill={cards[2].cardItems[3].skill}
            stroke={cards[2].cardItems[3].stroke}
            handleClickingEvent={handleClickingEvent}
          />
        </div>
      )}
    </div>
  );
};

export default SkillsGraphThree;
