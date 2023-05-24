import Image from "next/image";

import "./styles/HeroSection.module.css";
import "./styles/HeroGradient.module.css";

const HeroSection = () => {
  return (
    <main className="main-wrapper">
      <div class="gradient-hero--container">
        <div class="gradient-hero">
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
      <div class="main-content">
        <h1 class="main-title">
          <span class="gradient-title">Hi,</span> I&#39;m Matt
        </h1>
        <div class="main-terminal">
          <div class="terminal-window">
            <div class="header-hero">
              <ul>
                <li class="button first"></li>
                <li class="button second"></li>
                <li class="button third"></li>
              </ul>
            </div>
            <div class="console-container">
              <p>
                $<span id="text"></span>
              </p>
              <p class="console-underscore" id="console-text">
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
