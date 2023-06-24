import Link from "next/link";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardItem = ({ courseTitle, courseUrl, courseText, linkColor }) => {
  return (
    <li className={style["main-list"]}>
      <h4 className={style[`${courseTitle}`]}>
        <span>&#x2022; </span>
        <Link
          href={courseUrl}
          className={style[`${linkColor}`]}
          target="_blank">
          {courseText}
        </Link>
      </h4>
    </li>
  );
};

export default SkillsCardItem;
