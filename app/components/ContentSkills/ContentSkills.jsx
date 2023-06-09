import SkillsCardMap from "../SkillsCard/SkillsCardMap";

import style from "../ContentAbout/styles/ContentAbout.module.css";
import cards from "../../../data/cards";

const ContentSkills = ({ title }) => {
  const newArray = cards.flatMap((card) => card.cardItems);
  const firstCard = newArray.slice(0, 2);
  console.log(firstCard);

  // cards.forEach((card) => {
  //   const firstCard = card.cardItems.slice(0, 2);
  //   console.log(firstCard);
  // })

  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      <SkillsCardMap />
    </div>
  );
};

export default ContentSkills;
