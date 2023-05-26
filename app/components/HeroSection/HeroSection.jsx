import Image from "next/image";

import "./styles/HeroSection.module.css";
import "./styles/HeroGradient.module.css";

const HeroSection = () => {
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
