import { CgCloseO } from "react-icons/cg";
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa";

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
        <div className={style["coursework-header"]}>
          <FaLaptopCode className={style["content-icon-html"]} />
          <h3>Coursework</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <li>Scrimba Frontend Developer Certificate Program</li>
            <li>Dave Gray&#39;s HTML Tutorial</li>
          </ul>
        </div>
        <div className={style["coursework-header"]}>
          <FaCodeBranch className={style["content-icon-html"]} />
          <h3>Projects</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <li>Scrimba Frontend Developer Certificate Program</li>
            <li>Dave Gray&#39;s HTML Tutorial</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardHtml;
