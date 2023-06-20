import style from "./styles/SkillsCard.module.css";

const SkillsCard = ({ percentage, skill, stroke, number, onClick }) => {
  return (
    <div className={style["card-container"]}>
      <div className={style.card} onClick={() => onClick()}>
        <div className={style.box}>
          <div className={style.percent}>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{
                  stroke: `var(${stroke})`,
                  strokeDashoffset: `calc(440 - (440 * ${number}) / 100)`,
                }}></circle>
            </svg>
            <div className={style.num}>
              <h2>
                {percentage}
                <span>%</span>
              </h2>
            </div>
          </div>
          <h2 className={style.text}>{skill}</h2>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
