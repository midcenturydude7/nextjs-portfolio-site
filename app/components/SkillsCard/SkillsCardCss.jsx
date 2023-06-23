import Link from "next/link";
import SkillsCardItem from "./SkillsCardItem";
import { CgCloseO } from "react-icons/cg";
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa";

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
            <button className={style["x-one"]} onClick={toggleCard}>
              <CgCloseO className={style["x-icon-one"]} />
            </button>
          </li>
        </ul>
      </ul>
      <div className={style["skills-graph-content-container"]}>
        <div className={style["coursework-header-one"]}>
          <FaCodeBranch className={style["content-icon-one"]} />
          <h3>Projects</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <SkillsCardItem
              linkColor="course-link-one"
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
              linkColor="course-link-one"
              courseUrl="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu"
              courseText="HTML Full Course for Beginners | Dave Gray"
            />
          </ul>
        </div>
        <div className={style["coursework-header-one"]}>
          <FaLaptopCode className={style["content-icon-one"]} />
          <h3>Coursework</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <SkillsCardItem
              linkColor="course-link-one"
              courseUrl="tps://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <li className={style["sub-list"]}>- Essential CSS concepts</li>
              <li className={style["sub-list"]}>- Responsive design</li>
            </ul>
            <SkillsCardItem
              linkColor="course-link-one"
              courseUrl="https://frontendmasters.com/courses/getting-started-css/"
              courseText="Getting Started with CSS | Frontend Masters, Jen Kramer"
            />
            <SkillsCardItem
              linkColor="course-link-one"
              courseUrl="https://courses.kevinpowell.co/conquering-responsive-layouts"
              courseText="Conquering Responsive Layouts | Kevin Powell"
            />
            <SkillsCardItem
              linkColor="course-link-one"
              courseUrl="https://courses.kevinpowell.co/view/courses/flexbox-simplified"
              courseText="Flexbox Simplified | Kevin Powell"
            />
            <SkillsCardItem
              linkColor="course-link-one"
              courseUrl="https://cssgrid.io/"
              courseText="CSS Grid | Wes Bos"
            />
            <SkillsCardItem
              linkColor="course-link-one"
              courseUrl="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
              courseText="CSS Tutorials for Beginners | Dave Gray"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardCss;
