import SkillsCardItem from "./SkillsCardItem";
import { CgCloseO } from "react-icons/cg";
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardScss = ({ toggleCard2 }) => {
  return (
    <div className={style["skills-graph"]}>
      <ul>
        <li>
          <h2 className={style["skills-graph-title-right"]}>SASS/SCSS</h2>
        </li>
        <ul>
          <li>
            <button className={style["arrow-two"]} onClick={toggleCard2}>
              <CgCloseO className={style["arrow-icon-two"]} />
            </button>
          </li>
        </ul>
      </ul>
      <div className={style["skills-graph-content-container"]}>
        <div className={style["coursework-header"]}>
          <FaCodeBranch className={style["content-icon-html"]} />
          <h3>Projects</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <SkillsCardItem
              courseUrl="https://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <li className={style["sub-list"]}>- Web dev basics</li>
              <li className={style["sub-list"]}>
                - Making websites interactive
              </li>
            </ul>
            <SkillsCardItem
              courseUrl="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu"
              courseText="HTML Full Course for Beginners | Dave Gray"
            />
          </ul>
        </div>
        <div className={style["coursework-header"]}>
          <FaLaptopCode className={style["content-icon-html"]} />
          <h3>Coursework</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <SkillsCardItem
              courseUrl="https://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <li className={style["sub-list"]}>- Web dev basics</li>
              <li className={style["sub-list"]}>
                - Making websites interactive
              </li>
            </ul>
            <SkillsCardItem
              courseUrl="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu"
              courseText="HTML Full Course for Beginners | Dave Gray"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardScss;
