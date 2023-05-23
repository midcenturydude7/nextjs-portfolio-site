import Navbar from "./components/Navbar/Navbar";
import styles from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Navbar />
      </header>
    </div>
  );
}
