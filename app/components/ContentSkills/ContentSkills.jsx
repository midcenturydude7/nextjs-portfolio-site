import SkillsCardMap from "../SkillsCard/SkillsCardMap";

import style from "../ContentAbout/styles/ContentAbout.module.css";
import cards from "../../../data/cards";

const ContentSkills = ({ title }) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      {cards.map(
        (card) => card.cardItems.slice(0, 2) && <SkillsCardMap key={card.id} />
      )}
    </div>
  );
};

export default ContentSkills;
