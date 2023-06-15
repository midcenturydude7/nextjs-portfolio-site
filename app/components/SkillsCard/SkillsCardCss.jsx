import { CgCloseO } from "react-icons/cg";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardCss = ({ toggleCard }) => {
  return (
    <div className={style["skills-graph"]}>
      <ul>
        <li>
          <h2 className={style["skills-graph-title-left"]}>CSS</h2>
        </li>
        <ul>
          <li>
            <button className={style["arrow-one"]} onClick={toggleCard}>
              <CgCloseO className={style["arrow-icon-one"]} />
            </button>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default SkillsCardCss;
