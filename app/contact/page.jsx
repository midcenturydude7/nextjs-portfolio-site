import Navbar from "../components/Navbar/Navbar";

import style from "../styles/page.module.scss";

const Contact = () => {
  return (
    <div className={style["wrapper-truncated"]}>
      <Navbar />
      <h1>Get in touch</h1>
    </div>
  );
};

export default Contact;
