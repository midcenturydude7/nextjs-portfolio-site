import Link from "next/link";

import style from "../ContentAbout/styles/ContentAbout.module.css";

const SkillsCardItem = ({ courseUrl, courseText }) => {
  return (
    <li className={style["main-list"]}>
      <h4 className={style["course-title"]}>
        <Link href={courseUrl} className={style["course-link"]} target="_blank">
          {courseText}
        </Link>
      </h4>
    </li>
  );
};

export default SkillsCardItem;