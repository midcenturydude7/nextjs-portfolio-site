import SkillsCard from "../SkillsCard/SkillsCard";
import SkillsHeaderTwo from "../SkillsHeader/SkillsHeaderTwo";

import cards from "../../../data/cards";
import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsGraphTwo = ({
  handleClickingEvent,
  isActiveTwo,
  toggleArrowTwo,
  skillsContainerLeft,
  skillsContainerRight,
}) => {
  return (
    <div className={style["skills-graph"]}>
      <SkillsHeaderTwo
        isActiveTwo={isActiveTwo}
        toggleArrowTwo={toggleArrowTwo}
      />

      {/* TOOLS: BOX 1 */}
      {!isActiveTwo && (
        <div className={`${skillsContainerRight}`}>
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[1].cardItems[0].percentage}
            number={cards[1].cardItems[0].number}
            skill={cards[1].cardItems[0].skill}
            stroke={cards[1].cardItems[0].stroke}
            handleClickingEvent={handleClickingEvent}
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[1].cardItems[1].percentage}
            number={cards[1].cardItems[1].number}
            skill={cards[1].cardItems[1].skill}
            stroke={cards[1].cardItems[1].stroke}
            handleClickingEvent={handleClickingEvent}
          />
        </div>
      )}

      {/* TOOLS: BOX 2 */}
      {isActiveTwo && (
        <div className={`${skillsContainerLeft}`}>
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[1].cardItems[2].percentage}
            number={cards[1].cardItems[2].number}
            skill={cards[1].cardItems[2].skill}
            stroke={cards[1].cardItems[2].stroke}
            handleClickingEvent={handleClickingEvent}
          />
          <SkillsCard
            className={style["skill-card"]}
            percentage={cards[1].cardItems[3].percentage}
            number={cards[1].cardItems[3].number}
            skill={cards[1].cardItems[3].skill}
            stroke={cards[1].cardItems[3].stroke}
            handleClickingEvent={handleClickingEvent}
          />
        </div>
      )}
    </div>
  );
};

export default SkillsGraphTwo;
