import Link from "next/link";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardSubItem = ({
  subCourseTitle,
  subCourseUrl,
  subLinkColor,
  subCourseText,
}) => {
  return (
    <li className={style["sub-list"]}>
      <h5 className={style[`${subCourseTitle}`]}>
        <span>&#62; </span>
        <Link
          href={`${subCourseUrl}`}
          className={style[`${subLinkColor}`]}
          target="_blank">
          {subCourseText}
        </Link>
      </h5>
    </li>
  );
};

export default SkillsCardSubItem;
