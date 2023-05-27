import Navbar from "../components/Navbar/Navbar";

import style from "../styles/page.module.scss";

const About = () => {
  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar />
      <h1>What&#39;s up with Matt</h1>
    </div>
  );
};

export default About;
