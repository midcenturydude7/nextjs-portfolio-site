import SkillsCardItem from "./SkillsCardItem";
import SkillsCardSubItem from "./SkillsCardSubItem";
import { CgCloseO } from "react-icons/cg";
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardAnimations = ({ toggleCard3 }) => {
  return (
    <div className={style["skills-graph"]}>
      <ul>
        <li className={style["header-width"]}>
          <h2
            className={`${style["skills-graph-title-left"]} ${style["small-text"]}`}>
            CSS Animations
          </h2>
        </li>
        <ul>
          <li>
            <button className={style["x-three"]} onClick={toggleCard3}>
              <CgCloseO className={style["x-icon-three"]} />
            </button>
          </li>
        </ul>
      </ul>
      <div className={style["skills-graph-content-container"]}>
        <div className={style["coursework-header-three"]}>
          <FaCodeBranch className={style["content-icon-three"]} />
          <h3>Projects</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <SkillsCardItem
              courseTitle="course-title-three"
              linkColor="course-link-three"
              courseUrl="https://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <SkillsCardSubItem
                subCourseText="Web dev basics"
                subCourseTitle="sub-course-title-three"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-three"
              />
              <SkillsCardSubItem
                subCourseText="Making websites interactive"
                subCourseTitle="sub-course-title-three"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-three"
              />
            </ul>
            <SkillsCardItem
              courseTitle="course-title-three"
              linkColor="course-link-three"
              courseUrl="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu"
              courseText="HTML Full Course for Beginners | Dave Gray"
            />
          </ul>
        </div>
        <div className={style["coursework-header-three"]}>
          <FaLaptopCode className={style["content-icon-three"]} />
          <h3>Coursework</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <SkillsCardItem
              courseTitle="course-title-three"
              linkColor="course-link-three"
              courseUrl="https://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <SkillsCardSubItem
                subCourseText="Web dev basics"
                subCourseTitle="sub-course-title-three"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-three"
              />
              <SkillsCardSubItem
                subCourseText="Making websites interactive"
                subCourseTitle="sub-course-title-three"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-three"
              />
            </ul>
            <SkillsCardItem
              courseTitle="course-title-three"
              linkColor="course-link-three"
              courseUrl="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu"
              courseText="HTML Full Course for Beginners | Dave Gray"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardAnimations;
