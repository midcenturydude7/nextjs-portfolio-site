import SkillsCardItem from "./SkillsCardItem";
import SkillsCardSubItem from "./SkillsCardSubItem";
import { CgCloseO } from "react-icons/cg";
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardScss = ({ toggleCard2 }) => {
  return (
    <div className={style["skills-graph"]}>
      <ul className={style["row-reverse"]}>
        <li>
          <h2 className={style["skills-graph-title-right"]}>SASS/SCSS</h2>
        </li>
        <ul>
          <li>
            <button className={style["x-two"]} onClick={toggleCard2}>
              <CgCloseO className={style["x-icon-two"]} />
            </button>
          </li>
        </ul>
      </ul>
      <div className={style["skills-graph-content-container"]}>
        <div className={style["coursework-header-two"]}>
          <FaCodeBranch className={style["content-icon-two"]} />
          <h3>Projects</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <SkillsCardItem
              courseTitle="course-title-two"
              linkColor="course-link-two"
              courseUrl="https://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <SkillsCardSubItem
                subCourseText="Web dev basics"
                subCourseTitle="sub-course-title-two"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-two"
              />
              <SkillsCardSubItem
                subCourseText="Making websites interactive"
                subCourseTitle="sub-course-title-two"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-two"
              />
            </ul>
            <SkillsCardItem
              courseTitle="course-title-two"
              linkColor="course-link-two"
              courseUrl="https://www.youtube.com/playlist?list=PL0Zuz27SZ-6OlAwitnFUubtE93DO-l0vu"
              courseText="HTML Full Course for Beginners | Dave Gray"
            />
          </ul>
        </div>
        <div className={style["coursework-header-two"]}>
          <FaLaptopCode className={style["content-icon-two"]} />
          <h3>Coursework</h3>
        </div>
        <div className={style["coursework-list"]}>
          <ul className={style["coursework-list-items"]}>
            <SkillsCardItem
              courseTitle="course-title-two"
              linkColor="course-link-two"
              courseUrl="https://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <SkillsCardSubItem
                subCourseText="Web dev basics"
                subCourseTitle="sub-course-title-two"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-two"
              />
              <SkillsCardSubItem
                subCourseText="Making websites interactive"
                subCourseTitle="sub-course-title-two"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-two"
              />
            </ul>
            <SkillsCardItem
              courseTitle="course-title-two"
              linkColor="course-link-two"
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
