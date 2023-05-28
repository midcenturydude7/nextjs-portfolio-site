"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import consoleText from "../../utils/consoleText";

import "./styles/HeroSection.module.css";
import "./styles/HeroGradient.module.css";

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
    <main className="main-wrapper">
      <div className="gradient-hero--container">
        <div className="gradient-hero">
          <div className="image-container">
            <Image
              src="/../public/assets/images/MG_Avatar.jpg"
              alt="Avatar"
              className="hero-image"
              width={260}
              height={260}
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className="main-content">
        <h1 className="main-title">
          <Link href="#" className="main-title-link">
            <span className="gradient-title-greeting">Hi,</span>
          </Link>{" "}
          <span className="gradient-title-name">I&#39;m Matt</span>
        </h1>
        <div className="main-terminal">
          <div className="terminal-window">
            <div className="header-hero">
              <ul>
                <li className="button"></li>
                <li className="button"></li>
                <li className="button"></li>
              </ul>
            </div>
            <div className="console-container">
              <p>
                $<span id="text"></span>
              </p>
              <p className="console-underscore" id="console-text">
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
