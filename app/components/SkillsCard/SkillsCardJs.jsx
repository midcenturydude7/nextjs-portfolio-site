import SkillsCardItem from "./SkillsCardItem";
import SkillsCardSubItem from "./SkillsCardSubItem";
import { CgCloseO } from "react-icons/cg";
import { FaLaptopCode, FaCodeBranch } from "react-icons/fa";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardJs = ({ toggleCard }) => {
  return (
    <div className={style["skills-graph"]}>
      <ul>
        <li>
          <h2 className={style["skills-graph-title-left"]}>JavaScript</h2>
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
                subCourseText="Web dev basics"
                subCourseTitle="sub-course-title-one"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-one"
              />
              <SkillsCardSubItem
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
              courseUrl="https://scrimba.com/learn/frontend"
              courseText="Scrimba Frontend Developer Certificate Program"
            />
            <ul>
              <SkillsCardSubItem
                subCourseText="Essential Javascript concepts"
                subCourseTitle="sub-course-title-one"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-one"
              />
              <SkillsCardSubItem
                subCourseText="Next-level Javascript"
                subCourseTitle="sub-course-title-one"
                subCourseUrl="https://scrimba.com/learn/frontend"
                subLinkColor="sub-course-link-one"
              />
            </ul>
            <SkillsCardItem
              courseTitle="course-title-one"
              linkColor="course-link-one"
              courseUrl="https://frontendmasters.com/learn/javascript/"
              courseText="Frontend Masters Topic Paths: JavaScript"
            />
            <ul>
              <SkillsCardSubItem
                subCourseText="JavaScript: From First Steps to Professional"
                subCourseTitle="sub-course-title-one"
                subCourseUrl="https://frontendmasters.com/courses/javascript-first-steps/"
                subLinkColor="sub-course-link-one"
              />
              <SkillsCardSubItem
                subCourseText="JavaScript: The Hard Parts, v2"
                subCourseTitle="sub-course-title-one"
                subCourseUrl="https://frontendmasters.com/courses/javascript-hard-parts-v2/"
                subLinkColor="sub-course-link-one"
              />
            </ul>
            <SkillsCardItem
              courseTitle="course-title-one"
              linkColor="course-link-one"
              courseUrl="https://beginnerjavascript.com/"
              courseText="Beginner JavaScript | Wes Bos"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardJs;
