import Link from "next/link";
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
              <li className={style["sub-list"]}>- Web dev basics</li>
              <li className={style["sub-list"]}>
                - Making websites interactive
              </li>
            </ul>
            <li className={style["main-list"]}>
              <h4 className={style["course-title"]}>
                <Link
                  href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu"
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
              <li className={style["sub-list"]}>- Web dev basics</li>
              <li className={style["sub-list"]}>
                - Making websites interactive
              </li>
            </ul>
            <li className={style["main-list"]}>
              <h4 className={style["course-title"]}>
                <Link
                  href="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu"
                  className={style["course-link"]}
                  target="_blank">
                  HTML Full Course for Beginners | Dave Gray
                </Link>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardHtml;
