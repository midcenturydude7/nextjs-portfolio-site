"use client";
import Wrapper from "./components/Wrapper/Wrapper";

import style from "./styles/page.module.css";

export default function Home() {
  return (
    <div className={style.body}>
      <Wrapper />
    </div>
  );
}
