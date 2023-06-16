import { CgCloseO } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardHtml = ({ toggleCard }) => {
  return (
    <div className={style["skills-graph"]}>
      <ul>
        <li>
          <h2 className={style["skills-graph-title-left"]}>HTML</h2>
        </li>
        <ul>
          <li>
            <button className={style["arrow-one"]} onClick={toggleCard}>
              <CgCloseO className={style["arrow-icon-one"]} />
            </button>
          </li>
        </ul>
      </ul>
      <div className={style["skills-graph-content-container"]}>
        <div className="coursework-header">
          <FaLaptopCode className={style["content-icon-html"]} />
          <h3>Coursework</h3>
        </div>
      </div>
      <div>Projects</div>
    </div>
  );
};

export default SkillsCardHtml;
