import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CardSection from "./components/CardSection/CardSection";

import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <HeroSection />
      <CardSection />
    </div>
  );
}
