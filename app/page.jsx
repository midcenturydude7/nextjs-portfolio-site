import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CardSection from "./components/CardSection/CardSection";
import Footer from "./components/Footer/Footer";

import style from "./styles/page.module.css";

export default function Home() {
  const onPointerMove = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.wrapper}>
      <Navbar />
      <HeroSection />
      <CardSection onPointerMove={onPointerMove} />
      <Footer />
    </div>
  );
}
