import Link from "next/link";
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
            <button className={style["arrow-one"]} onClick={toggleCard}>
              <CgCloseO className={style["arrow-icon-one"]} />
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
            <li className={style["main-list"]}>
              <h4 className={style["course-title"]}>
                <Link
                  href="https://scrimba.com/learn/frontend"
                  className={style["course-link"]}
                  target="_blank">
                  Scrimba Frontend Developer Certificate Program
                </Link>
              </h4>
            </li>
            <ul>
              <li className={style["sub-list"]}>- Essential CSS concepts</li>
              <li className={style["sub-list"]}>- Responsive design</li>
            </ul>
            <li className={style["main-list"]}>
              <h4 className={style["course-title"]}>
                <Link
                  href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
                  className={style["course-link"]}
                  target="_blank">
                  HTML Full Course for Beginners | Dave Gray
                </Link>
              </h4>
            </li>
          </ul>
        </div>
        <div className={style["coursework-header"]}>
          <FaLaptopCode className={style["content-icon-html"]} />
          <h3>Coursework</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <li className={style["main-list"]}>
              <h4 className={style["course-title"]}>
                <Link
                  href="https://scrimba.com/learn/frontend"
                  className={style["course-link"]}
                  target="_blank">
                  Scrimba Frontend Developer Certificate Program
                </Link>
              </h4>
            </li>
            <ul>
              <li className={style["sub-list"]}>- Essential CSS concepts</li>
              <li className={style["sub-list"]}>- Responsive design</li>
            </ul>
            <li className={style["main-list"]}>
              <h4 className={style["course-title"]}>
                <Link
                  href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
                  className={style["course-link"]}
                  target="_blank">
                  Conquering Responsive Layouts | Kevin Powell
                </Link>
              </h4>
            </li>
            <li className={style["main-list"]}>
              <h4 className={style["course-title"]}>
                <Link
                  href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
                  className={style["course-link"]}
                  target="_blank">
                  Flexbox Simplified | Kevin Powell
                </Link>
              </h4>
            </li>
            <li className={style["main-list"]}>
              <h4 className={style["course-title"]}>
                <Link
                  href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Mx9fd9elt80G1bPcySmWit"
                  className={style["course-link"]}
                  target="_blank">
                  CSS Tutorials for Beginners | Dave Gray
                </Link>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardCss;
