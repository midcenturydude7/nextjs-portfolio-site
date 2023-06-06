"use client";

import style from "./styles/SkillsCard.module.css";

const SkillsCard = ({ percentage, skill }) => {
  return (
    <div class={style["card-container"]}>
      <div class={style.card}>
        <div class={style.box}>
          <div class={style.percent}>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
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
