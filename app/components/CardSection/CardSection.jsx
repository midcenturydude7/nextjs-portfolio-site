import Image from "next/image";
import Link from "next/link";

import style from "./styles/CardSection.module.css";

const CardSection = () => {
  return (
    <section className={style.section}>
      <div className={style["section-box_container"]}>
        <div className={style["section-box"]}>
          <div className={style["box-banner"]}>nextjs</div>
          <Image
            src="/../public/assets/images/port4.jpg"
            alt="Stock photo"
            width={300}
            height={300}
            className={style["box-image"]}
          />
          <div className={style["box-text"]}>
            <h2>
              <Link href="#" className={style["box-text-link-title"]}>
                Ecommerce Website
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur asperiores, quos expedita, ullam debitis soluta nobis
              dolorem excepturi et aut?...
              <span>
                <Link href="#" className={style["box-text-link-content"]}>
                  {" "}
                  Read more 🡆
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className={style["section-box"]}>
          <div className={style["box-banner"]}>mern</div>
          <Image
            src="/../public/assets/images/port7.jpg"
            alt="Stock photo"
            width={300}
            height={300}
            className={style["box-image"]}
          />
          <div className={style["box-text"]}>
            <h2>
              <Link href="#" className={style["box-text-link-title"]}>
                Mern Dashboard
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur asperiores, quos expedita, ullam debitis soluta nobis
              dolorem excepturi et aut?...
              <span>
                <Link href="#" className={style["box-text-link-content"]}>
                  {" "}
                  Read more 🡆
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
