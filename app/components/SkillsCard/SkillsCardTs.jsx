import SkillsCardItem from "./SkillsCardItem";
import SkillsCardSubItem from "./SkillsCardSubItem";
import { CgCloseO } from "react-icons/cg";
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardTs = ({ toggleCard }) => {
  return (
    <div className={style["skills-graph"]}>
      <ul>
        <li>
          <h2 className={style["skills-graph-title-left"]}>TypeScript</h2>
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
              courseTitle="course-title-one"
              linkColor="course-link-one"
              courseUrl="https://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <SkillsCardSubItem
                courseTitle="course-title-one"
                subCourseText="Web dev basics"
                subCourseTitle="sub-course-title-one"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-one"
              />
              <SkillsCardSubItem
                courseTitle="course-title-one"
                subCourseText="Making websites interactive"
                subCourseTitle="sub-course-title-one"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-one"
              />
            </ul>
            <SkillsCardItem
              courseTitle="course-title-one"
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
              courseTitle="course-title-one"
              linkColor="course-link-one"
              courseUrl="https://frontendmasters.com/courses/typescript-v3/"
              courseText="TypeScript Fundamentals, v3 | Frontend Masters, Mike North"
            />
            <SkillsCardItem
              courseTitle="course-title-one"
              linkColor="course-link-one"
              courseUrl="https://frontendmasters.com/courses/intermediate-typescript/"
              courseText="Intermediate TypeScript | Frontend Masters, Mike North"
            />
            <SkillsCardItem
              courseTitle="course-title-one"
              linkColor="course-link-one"
              courseUrl="https://frontendmasters.com/courses/react-typescript-v2/"
              courseText="React and TypeScript, v2 | Frontend Masters, Steve Kinney"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardTs;
