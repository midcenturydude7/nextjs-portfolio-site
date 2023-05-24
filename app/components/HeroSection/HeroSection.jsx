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
    </main>
  );
};

export default HeroSection;
