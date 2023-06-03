import Link from "next/link";
import Image from "next/image";

import style from "../CardSection/styles/CardSection.module.css";

const Card = ({ banner, title, image }) => {
  return (
    <div className={style["section-box"]}>
      <div className={style["box-banner"]}>{banner}</div>
      <Image
        src={image}
        alt="Stock photo"
        width={300}
        height={300}
        className={style["box-image"]}
        priority={true}
      />
      <div className={style["box-text"]}>
        <h2>
          <Link href="#" className={style["box-text-link-title"]}>
            {title}
          </Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          asperiores, quos expedita, ullam debitis soluta nobis dolorem
          excepturi et aut?...
          <span>
            <Link href="#" className={style["box-text-link-content"]}>
              {" "}
              Read more 🡆
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
