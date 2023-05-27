"use client";
import React from "react";
import Image from "next/image";

import "./styles/HeroSection.module.css";
import "./styles/HeroGradient.module.css";

const HeroSection = () => {
  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ["#fff"];
    let visible = true;
    const consoleText = document.getElementById("console-text");
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute("style", "color:" + colors[0]);

    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          let usedColor = colors.shift();
          colors.push(usedColor);
          let usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);

    window.setInterval(function () {
      if (visible === true) {
        consoleText.className = "console-underscore hidden";
        visible = false;
      } else {
        consoleText.className = "console-underscore";

        visible = true;
      }
    }, 200);
  }

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
          <span className="gradient-title">Hi,</span> I&#39;m Matt
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
