"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import consoleText from "../../utils/consoleText";

import style from "./styles/HeroSection.module.css";
import styleGradient from "./styles/HeroGradient.module.css";

const HeroSection = () => {
  React.useEffect(() => {
    consoleText(
      [
        "I build things for the web.",
        "I'm a self-taught, frontend developer...",
        "specializing in building web sites and...",
        "web applications using React and Next.js.",
        "TL;DR? Check out my featured projects below...",
      ],
      "text",
      ["#00ccff", "#00ccff"]
    );
  }, []);

  return (
    <main className={style["main-wrapper"]}>
      <div className={styleGradient["gradient-hero--container"]}>
        <div className={styleGradient["gradient-hero"]}>
          <div className={style["image-container"]}>
            <Image
              src="../../../public/assets/images/MG_Avatar.jpg"
              alt="Avatar"
              className={style["hero-image"]}
              width={260}
              height={260}
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className={style["main-content"]}>
        <h1 className={style["main-title"]}>
          <Link href="#" className={style["main-title-link"]}>
            <span className={style["gradient-title-greeting"]}>Hi,</span>
          </Link>{" "}
          <span className={style["gradient-title-name"]}>I&#39;m Matt</span>
        </h1>
        <div className={style["main-terminal"]}>
          <div className={style["terminal-window"]}>
            <div className={style["header-hero"]}>
              <ul>
                <li className={style["button"]}></li>
                <li className={style["button"]}></li>
                <li className={style["button"]}></li>
              </ul>
            </div>
            <div className={style["console-container"]}>
              <p>
                $<span className={style["text-underscore"]} id="text"></span>
              </p>
              <p className={style["console-underscore"]} id="console-text">
                &#95;
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
