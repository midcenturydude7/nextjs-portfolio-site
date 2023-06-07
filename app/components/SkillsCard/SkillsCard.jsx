"use client";

import style from "./styles/SkillsCard.module.css";

const SkillsCard = ({ percentage, skill, stroke, number }) => {
  return (
    <div class={style["card-container"]}>
      <div class={style.card}>
        <div class={style.box}>
          <div class={style.percent}>
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
            <div class={style.num}>
              <h2>
                {percentage}
                <span>%</span>
              </h2>
            </div>
          </div>
          <h2 class={style.text}>{skill}</h2>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
