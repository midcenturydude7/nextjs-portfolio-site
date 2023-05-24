import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";

import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <HeroSection />
    </div>
  );
}
